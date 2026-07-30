const SUPABASE_CONFIG = {
    url: 'https://dyvvhmuegtzooijrtwyd.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5dnZobXVlZ3R6b29panJ0d3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwOTk5MTEsImV4cCI6MjA5NDY3NTkxMX0.pksVza66eu3WlM1_r_IGARkjd19BwUvbKntoUIwPhRY',
};

if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
    window.SUPABASE_URL = SUPABASE_CONFIG.url;
    window.SUPABASE_KEY = SUPABASE_CONFIG.anonKey;
}

// =============================================
// Supabase Client Wrapper (Session Interceptor)
// =============================================
if (typeof window !== 'undefined' && window.supabase && !window._origSupabaseCreateClient) {
    window._origSupabaseCreateClient = window.supabase.createClient.bind(window.supabase);
    window.supabase.createClient = function(url, key, opts) {
        const client = window._origSupabaseCreateClient(url, key, opts);
        if (client && client.auth) {
            const origGetSess = client.auth.getSession.bind(client.auth);
            client.auth.getSession = async function() {
                const res = await origGetSess();
                if (!res.data || !res.data.session) {
                    const custom = localStorage.getItem('eduquest_custom_session');
                    if (custom) {
                        try {
                            const parsed = JSON.parse(custom);
                            if (parsed && parsed.user) {
                                if (!res.data) res.data = {};
                                res.data.session = parsed;
                            }
                        } catch(e) {}
                    }
                }
                return res;
            };

            const origSignOut = client.auth.signOut.bind(client.auth);
            client.auth.signOut = async function() {
                localStorage.removeItem('eduquest_custom_session');
                return await origSignOut();
            };
        }
        return client;
    };
}

// ── Save registration to Supabase ─────────────
async function saveRegistration(studentData, examName) {
    if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url || SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet.');
        return;
    }

    const nameUpper = (examName || '').toUpperCase();
    const pathUpper = (window.location && window.location.pathname ? window.location.pathname : '').toUpperCase();
    
    let table = 'sat_registrations';
    if (nameUpper.includes('TMUA') || pathUpper.includes('TMUA')) {
        table = 'tmua_user';
    } else if (nameUpper.includes('UCAT') || pathUpper.includes('UCAT')) {
        table = 'ucat_user';
    } else if (nameUpper.includes('ACT') || pathUpper.includes('ACT')) {
        table = 'act_user';
    } else if (nameUpper.includes('AP') || pathUpper.includes('AP')) {
        table = 'ap_user';
    }

    const payload = {
        student_name: studentData.name || studentData.student_name || 'Student',
        student_email: (studentData.email || studentData.student_email || '').toLowerCase().trim(),
        student_phone: studentData.phone || studentData.student_phone || '',
        exam_name: examName || 'SAT Test',
        registered_at: new Date().toISOString()
    };

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${table}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(payload)
        });

        if (res.ok || res.status === 201) {
            console.log(`✅ Registration saved to ${table} successfully`);
        } else {
            const errText = await res.text();
            console.warn(`⚠️ Registration save to ${table} returned ${res.status}: ${errText}`);
        }
    } catch (err) {
        console.error('❌ Supabase registration network error:', err);
    }
}

// ── Save result to Supabase ───────────────────
// Jab student test submit kare aur report generate ho
async function saveToSupabase(result) {
    if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url || SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL') {
        console.warn('⚠️ Supabase not configured yet.');
        return { ok: false, msg: 'Supabase not configured' };
    }

    if (!result || typeof result !== 'object') {
        console.error('❌ Invalid result object provided to saveToSupabase');
        return { ok: false, msg: 'Invalid result object' };
    }

    let userId = null;
    let userEmail = null;
    let userName = null;
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            const { data } = await client.auth.getSession();
            if (data && data.session && data.session.user) {
                userId = data.session.user.id || null;
                userEmail = data.session.user.email || null;
                userName = data.session.user.user_metadata?.full_name || data.session.user.user_metadata?.name || null;
            }
        }
    } catch (e) {
        console.warn('Could not fetch current Supabase session:', e);
    }

    const studentObj = result.student || {};
    const nameStr = studentObj.name || result.name || userName || (userEmail ? userEmail.split('@')[0] : 'Student');
    const emailStr = (studentObj.email || result.email || userEmail || '').toLowerCase().trim();
    const phoneStr = studentObj.phone || result.phone || '';

    const nameUpper = (result.examName || result.topic || '').toUpperCase();
    const pathUpper = (window.location && window.location.pathname ? window.location.pathname : '').toUpperCase();

    // Use word boundaries so "PRACTICE" doesn't falsely match "ACT" (PR-ACT-ICE)
    const isAct = /\bACT\b/.test(nameUpper) || /\bACT\b/.test(pathUpper);
    const isTmua = /\bTMUA\b/.test(nameUpper) || pathUpper.includes('TMUA');
    const isUcat = /\bUCAT\b/.test(nameUpper) || pathUpper.includes('UCAT');
    const isAp = /\bAP\b/.test(nameUpper) || /\bAP\b/.test(pathUpper);

    const isMock = nameUpper.includes('MOCK') || nameUpper.includes('DIAGNOSTIC') || nameUpper.includes('PRACTICE') || nameUpper.includes('PREP TEST') || pathUpper.includes('/MOCK/') || pathUpper.includes('SAT.HTML') || pathUpper.includes('SAT2.HTML');

    const totalQs = Number(result.total || (result.details ? result.details.length : 0));
    const correctCount = Number(result.correct || 0);
    const wrongCount = Number(result.wrong !== undefined ? result.wrong : (result.incorrect || 0));
    const skippedCount = Number(result.unattempted !== undefined ? result.unattempted : (result.skipped !== undefined ? result.skipped : Math.max(0, totalQs - correctCount - wrongCount)));
    const percentage = Number(result.pct !== undefined ? result.pct : (result.percentage !== undefined ? result.percentage : (totalQs > 0 ? Math.round((correctCount / totalQs) * 100) : 0)));
    const submitTimeIso = result.submitTime || result.submitted_at || new Date().toISOString();

    const normalizedDetails = (result.details || []).map((d, idx) => ({
        id: d.id || (idx + 1),
        status: d.status || (d.chosen === d.answer ? 'correct' : (d.chosen !== undefined && d.chosen !== null && d.chosen !== -1 ? 'wrong' : 'unattempted')),
        chosen: d.chosen !== undefined ? d.chosen : (d.selected !== undefined ? d.selected : d.studentAnswer),
        answer: d.answer !== undefined ? d.answer : d.correctAnswer,
        text: d.text || d.question || d.prompt || '',
        options: (d.options && d.options.length > 0) ? d.options : ((d.choices && d.choices.length > 0) ? d.choices : []),
        explanation: d.explanation || d.solution || ''
    }));

    const answersList = result.answers || normalizedDetails.map(d => d.chosen);

    let targetTable = 'sat_topic_report';
    let payload = {};

    if (isTmua) {
        targetTable = 'tmua_report';
        payload = {
            name: nameStr,
            email: emailStr,
            phone: phoneStr,
            topic: result.examName || result.topic || 'TMUA Test',
            correct: correctCount,
            wrong: wrongCount,
            unattempted: skippedCount,
            total: totalQs,
            pct: percentage,
            submit_time: submitTimeIso,
            answers_json: JSON.stringify(answersList),
            details_json: JSON.stringify(normalizedDetails)
        };
    } else if (isUcat) {
        targetTable = 'Ucat_diagnosis';
        payload = {
            name: nameStr,
            email: emailStr,
            phone: phoneStr,
            topic: result.examName || result.topic || 'UCAT Test',
            correct: correctCount,
            wrong: wrongCount,
            unattempted: skippedCount,
            total: totalQs,
            pct: percentage,
            submit_time: submitTimeIso,
            answers_json: JSON.stringify(answersList),
            details_json: JSON.stringify(normalizedDetails)
        };
    } else if (isAct) {
        targetTable = 'act_results';
        payload = {
            student_name: nameStr,
            student_email: emailStr,
            student_phone: phoneStr,
            exam_name: result.examName || result.topic || 'ACT Test',
            percentage: percentage,
            correct: correctCount,
            wrong: wrongCount,
            unattempted: skippedCount,
            total: totalQs,
            submitted_at: submitTimeIso,
            details_json: JSON.stringify(normalizedDetails),
            student_answers: JSON.stringify(answersList)
        };
    } else if (isMock) {
        targetTable = 'sat_results';
        payload = {
            student_name: nameStr,
            student_email: emailStr,
            student_phone: phoneStr,
            exam_name: result.examName || result.topic || 'SAT Diagnostic / Mock Test',
            sat_score: typeof result.scaled === 'number' ? result.scaled : (result.composite_score || (400 + Math.round(percentage * 12))),
            percentage: percentage,
            grade: result.grade || (percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : 'C'),
            correct: correctCount,
            wrong: wrongCount,
            skipped: skippedCount,
            unattempted: skippedCount,
            total: totalQs,
            submitted_at: submitTimeIso,
            details_json: JSON.stringify(normalizedDetails),
            student_answers: JSON.stringify(answersList)
        };
    } else {
        targetTable = 'sat_topic_report';
        payload = {
            name: nameStr,
            email: emailStr,
            phone: phoneStr,
            student_name: nameStr,
            student_email: emailStr,
            topic: result.examName || result.topic || 'SAT Topic Test',
            topic_number: result.topicNumber || 1,
            correct: correctCount,
            wrong: wrongCount,
            unattempted: skippedCount,
            total: totalQs,
            pct: percentage,
            percentage: percentage,
            grade: result.grade || (percentage >= 80 ? 'A' : percentage >= 60 ? 'B' : 'C'),
            scaled: String(result.scaled || percentage + '%'),
            submit_time: submitTimeIso,
            answers_json: JSON.stringify(answersList),
            details_json: JSON.stringify(normalizedDetails)
        };
    }

    if (userId) payload.user_id = userId;

    try {
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/${targetTable}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_CONFIG.anonKey,
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(payload)
        });

        if (res.ok || res.status === 201) {
            console.log(`✅ Test result successfully saved to ${targetTable}`);
            return { ok: true };
        } else {
            const errText = await res.text();
            console.error(`❌ Save to ${targetTable} returned ${res.status}:`, errText);
            return { ok: false, msg: errText };
        }
    } catch (err) {
        console.error(`❌ Network error saving result to ${targetTable}:`, err);
        return { ok: false, msg: err.message };
    }
}

if (typeof window !== 'undefined') {
    window._masterSaveToSupabase = saveToSupabase;
    window._masterSaveRegistration = saveRegistration;
}

// ── Auto-fill Name & Email ───────────────────────────
async function autoFillUserForms() {
    if (!SUPABASE_CONFIG || !SUPABASE_CONFIG.url) return;
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            const client = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
            const { data: { session } } = await client.auth.getSession();
            if (session && session.user) {
                const userEmail = session.user.email || '';
                const userName = session.user.user_metadata?.full_name || session.user.user_metadata?.name || '';
                
                // Prefill email fields
                const emailInputs = document.querySelectorAll('#regEmail, input[name="email"], #stuEmail, .user-email-input, #userEmailInput');
                emailInputs.forEach(input => {
                    if (userEmail && (!input.value || input.getAttribute('readonly') === 'true')) {
                        input.value = userEmail;
                        input.setAttribute('readonly', 'true');
                        input.style.opacity = '0.8';
                        input.style.cursor = 'not-allowed';
                    }
                });

                // Prefill name fields
                const nameInputs = document.querySelectorAll('#regName, input[name="name"], #stuName, .user-name-input, #userNameInput');
                nameInputs.forEach(input => {
                    if (userName && !input.value) {
                        input.value = userName;
                    }
                });
            }
        }
    } catch (e) {
        console.warn('Auto pre-fill failed:', e);
    }
}

document.addEventListener('DOMContentLoaded', autoFillUserForms);
window.addEventListener('load', autoFillUserForms);



// ================================================================
// countries.js – Global Country Codes Database & Dropdown Loader
// ================================================================

function countryCodeToFlag(countryCode) {
  const code = countryCode.toUpperCase();
  const offset = 127397;
  return Array.from(code)
    .map(letter => String.fromCodePoint(letter.charCodeAt(0) + offset))
    .join('');
}

const COUNTRIES = [
  { "name": "Afghanistan", "dial_code": "+93", "code": "AF" },
  { "name": "Aland Islands", "dial_code": "+358", "code": "AX" },
  { "name": "Albania", "dial_code": "+355", "code": "AL" },
  { "name": "Algeria", "dial_code": "+213", "code": "DZ" },
  { "name": "American Samoa", "dial_code": "+1684", "code": "AS" },
  { "name": "Andorra", "dial_code": "+376", "code": "AD" },
  { "name": "Angola", "dial_code": "+244", "code": "AO" },
  { "name": "Anguilla", "dial_code": "+1264", "code": "AI" },
  { "name": "Antarctica", "dial_code": "+672", "code": "AQ" },
  { "name": "Antigua and Barbuda", "dial_code": "+1268", "code": "AG" },
  { "name": "Argentina", "dial_code": "+54", "code": "AR" },
  { "name": "Armenia", "dial_code": "+374", "code": "AM" },
  { "name": "Aruba", "dial_code": "+297", "code": "AW" },
  { "name": "Australia", "dial_code": "+61", "code": "AU" },
  { "name": "Austria", "dial_code": "+43", "code": "AT" },
  { "name": "Azerbaijan", "dial_code": "+994", "code": "AZ" },
  { "name": "Bahamas", "dial_code": "+1242", "code": "BS" },
  { "name": "Bahrain", "dial_code": "+973", "code": "BH" },
  { "name": "Bangladesh", "dial_code": "+880", "code": "BD" },
  { "name": "Barbados", "dial_code": "+1246", "code": "BB" },
  { "name": "Belarus", "dial_code": "+375", "code": "BY" },
  { "name": "Belgium", "dial_code": "+32", "code": "BE" },
  { "name": "Belize", "dial_code": "+501", "code": "BZ" },
  { "name": "Benin", "dial_code": "+229", "code": "BJ" },
  { "name": "Bermuda", "dial_code": "+1441", "code": "BM" },
  { "name": "Bhutan", "dial_code": "+975", "code": "BT" },
  { "name": "Bolivia", "dial_code": "+591", "code": "BO" },
  { "name": "Bosnia and Herzegovina", "dial_code": "+387", "code": "BA" },
  { "name": "Botswana", "dial_code": "+267", "code": "BW" },
  { "name": "Brazil", "dial_code": "+55", "code": "BR" },
  { "name": "British Indian Ocean Territory", "dial_code": "+246", "code": "IO" },
  { "name": "Brunei", "dial_code": "+673", "code": "BN" },
  { "name": "Bulgaria", "dial_code": "+359", "code": "BG" },
  { "name": "Burkina Faso", "dial_code": "+226", "code": "BF" },
  { "name": "Burundi", "dial_code": "+257", "code": "BI" },
  { "name": "Cambodia", "dial_code": "+855", "code": "KH" },
  { "name": "Cameroon", "dial_code": "+237", "code": "CM" },
  { "name": "Canada", "dial_code": "+1", "code": "CA" },
  { "name": "Cape Verde", "dial_code": "+238", "code": "CV" },
  { "name": "Cayman Islands", "dial_code": "+1345", "code": "KY" },
  { "name": "Central African Republic", "dial_code": "+236", "code": "CF" },
  { "name": "Chad", "dial_code": "+235", "code": "TD" },
  { "name": "Chile", "dial_code": "+56", "code": "CL" },
  { "name": "China", "dial_code": "+86", "code": "CN" },
  { "name": "Christmas Island", "dial_code": "+61", "code": "CX" },
  { "name": "Cocos (Keeling) Islands", "dial_code": "+61", "code": "CC" },
  { "name": "Colombia", "dial_code": "+57", "code": "CO" },
  { "name": "Comoros", "dial_code": "+269", "code": "KM" },
  { "name": "Congo", "dial_code": "+242", "code": "CG" },
  { "name": "Congo, DR", "dial_code": "+243", "code": "CD" },
  { "name": "Cook Islands", "dial_code": "+682", "code": "CK" },
  { "name": "Costa Rica", "dial_code": "+506", "code": "CR" },
  { "name": "Cote d'Ivoire", "dial_code": "+225", "code": "CI" },
  { "name": "Croatia", "dial_code": "+385", "code": "HR" },
  { "name": "Cuba", "dial_code": "+53", "code": "CU" },
  { "name": "Cyprus", "dial_code": "+357", "code": "CY" },
  { "name": "Czech Republic", "dial_code": "+420", "code": "CZ" },
  { "name": "Denmark", "dial_code": "+45", "code": "DK" },
  { "name": "Djibouti", "dial_code": "+253", "code": "DJ" },
  { "name": "Dominica", "dial_code": "+1767", "code": "DM" },
  { "name": "Dominican Republic", "dial_code": "+1809", "code": "DO" },
  { "name": "Ecuador", "dial_code": "+593", "code": "EC" },
  { "name": "Egypt", "dial_code": "+20", "code": "EG" },
  { "name": "El Salvador", "dial_code": "+503", "code": "SV" },
  { "name": "Equatorial Guinea", "dial_code": "+240", "code": "GQ" },
  { "name": "Eritrea", "dial_code": "+291", "code": "ER" },
  { "name": "Estonia", "dial_code": "+372", "code": "EE" },
  { "name": "Ethiopia", "dial_code": "+251", "code": "ET" },
  { "name": "Falkland Islands", "dial_code": "+500", "code": "FK" },
  { "name": "Faroe Islands", "dial_code": "+298", "code": "FO" },
  { "name": "Fiji", "dial_code": "+679", "code": "FJ" },
  { "name": "Finland", "dial_code": "+358", "code": "FI" },
  { "name": "France", "dial_code": "+33", "code": "FR" },
  { "name": "French Guiana", "dial_code": "+594", "code": "GF" },
  { "name": "French Polynesia", "dial_code": "+689", "code": "PF" },
  { "name": "Gabon", "dial_code": "+241", "code": "GA" },
  { "name": "Gambia", "dial_code": "+220", "code": "GM" },
  { "name": "Georgia", "dial_code": "+995", "code": "GE" },
  { "name": "Germany", "dial_code": "+49", "code": "DE" },
  { "name": "Ghana", "dial_code": "+233", "code": "GH" },
  { "name": "Gibraltar", "dial_code": "+350", "code": "GI" },
  { "name": "Greece", "dial_code": "+30", "code": "GR" },
  { "name": "Greenland", "dial_code": "+299", "code": "GL" },
  { "name": "Grenada", "dial_code": "+1473", "code": "GD" },
  { "name": "Guadeloupe", "dial_code": "+590", "code": "GP" },
  { "name": "Guam", "dial_code": "+1671", "code": "GU" },
  { "name": "Guatemala", "dial_code": "+502", "code": "GT" },
  { "name": "Guernsey", "dial_code": "+44", "code": "GG" },
  { "name": "Guinea", "dial_code": "+224", "code": "GN" },
  { "name": "Guinea-Bissau", "dial_code": "+245", "code": "GW" },
  { "name": "Guyana", "dial_code": "+592", "code": "GY" },
  { "name": "Haiti", "dial_code": "+509", "code": "HT" },
  { "name": "Holy See", "dial_code": "+379", "code": "VA" },
  { "name": "Honduras", "dial_code": "+504", "code": "HN" },
  { "name": "Hong Kong", "dial_code": "+852", "code": "HK" },
  { "name": "Hungary", "dial_code": "+36", "code": "HU" },
  { "name": "Iceland", "dial_code": "+354", "code": "IS" },
  { "name": "India", "dial_code": "+91", "code": "IN" },
  { "name": "Indonesia", "dial_code": "+62", "code": "ID" },
  { "name": "Iran", "dial_code": "+98", "code": "IR" },
  { "name": "Iraq", "dial_code": "+964", "code": "IQ" },
  { "name": "Ireland", "dial_code": "+353", "code": "IE" },
  { "name": "Isle of Man", "dial_code": "+44", "code": "IM" },
  { "name": "Israel", "dial_code": "+972", "code": "IL" },
  { "name": "Italy", "dial_code": "+39", "code": "IT" },
  { "name": "Jamaica", "dial_code": "+1876", "code": "JM" },
  { "name": "Japan", "dial_code": "+81", "code": "JP" },
  { "name": "Jersey", "dial_code": "+44", "code": "JE" },
  { "name": "Jordan", "dial_code": "+962", "code": "JO" },
  { "name": "Kazakhstan", "dial_code": "+7", "code": "KZ" },
  { "name": "Kenya", "dial_code": "+254", "code": "KE" },
  { "name": "Kiribati", "dial_code": "+686", "code": "KI" },
  { "name": "Korea, North", "dial_code": "+850", "code": "KP" },
  { "name": "Korea, South", "dial_code": "+82", "code": "KR" },
  { "name": "Kuwait", "dial_code": "+965", "code": "KW" },
  { "name": "Kyrgyzstan", "dial_code": "+996", "code": "KG" },
  { "name": "Laos", "dial_code": "+856", "code": "LA" },
  { "name": "Latvia", "dial_code": "+371", "code": "LV" },
  { "name": "Lebanon", "dial_code": "+961", "code": "LB" },
  { "name": "Lesotho", "dial_code": "+266", "code": "LS" },
  { "name": "Liberia", "dial_code": "+231", "code": "LR" },
  { "name": "Libya", "dial_code": "+218", "code": "LY" },
  { "name": "Liechtenstein", "dial_code": "+423", "code": "LI" },
  { "name": "Lithuania", "dial_code": "+370", "code": "LT" },
  { "name": "Luxembourg", "dial_code": "+352", "code": "LU" },
  { "name": "Macao", "dial_code": "+853", "code": "MO" },
  { "name": "Macedonia", "dial_code": "+389", "code": "MK" },
  { "name": "Madagascar", "dial_code": "+261", "code": "MG" },
  { "name": "Malawi", "dial_code": "+265", "code": "MW" },
  { "name": "Malaysia", "dial_code": "+60", "code": "MY" },
  { "name": "Maldives", "dial_code": "+960", "code": "MV" },
  { "name": "Mali", "dial_code": "+223", "code": "ML" },
  { "name": "Malta", "dial_code": "+356", "code": "MT" },
  { "name": "Marshall Islands", "dial_code": "+692", "code": "MH" },
  { "name": "Martinique", "dial_code": "+596", "code": "MQ" },
  { "name": "Mauritania", "dial_code": "+222", "code": "MR" },
  { "name": "Mauritius", "dial_code": "+230", "code": "MU" },
  { "name": "Mayotte", "dial_code": "+262", "code": "YT" },
  { "name": "Mexico", "dial_code": "+52", "code": "MX" },
  { "name": "Micronesia", "dial_code": "+691", "code": "FM" },
  { "name": "Moldova", "dial_code": "+373", "code": "MD" },
  { "name": "Monaco", "dial_code": "+377", "code": "MC" },
  { "name": "Mongolia", "dial_code": "+976", "code": "MN" },
  { "name": "Montenegro", "dial_code": "+382", "code": "ME" },
  { "name": "Montserrat", "dial_code": "+1664", "code": "MS" },
  { "name": "Morocco", "dial_code": "+212", "code": "MA" },
  { "name": "Mozambique", "dial_code": "+258", "code": "MZ" },
  { "name": "Myanmar", "dial_code": "+95", "code": "MM" },
  { "name": "Namibia", "dial_code": "+264", "code": "NA" },
  { "name": "Nauru", "dial_code": "+674", "code": "NR" },
  { "name": "Nepal", "dial_code": "+977", "code": "NP" },
  { "name": "Netherlands", "dial_code": "+31", "code": "NL" },
  { "name": "Netherlands Antilles", "dial_code": "+599", "code": "AN" },
  { "name": "New Caledonia", "dial_code": "+687", "code": "NC" },
  { "name": "New Zealand", "dial_code": "+64", "code": "NZ" },
  { "name": "Nicaragua", "dial_code": "+505", "code": "NI" },
  { "name": "Niger", "dial_code": "+227", "code": "NE" },
  { "name": "Nigeria", "dial_code": "+234", "code": "NG" },
  { "name": "Niue", "dial_code": "+683", "code": "NU" },
  { "name": "Norfolk Island", "dial_code": "+672", "code": "NF" },
  { "name": "Northern Mariana", "dial_code": "+1670", "code": "MP" },
  { "name": "Norway", "dial_code": "+47", "code": "NO" },
  { "name": "Oman", "dial_code": "+968", "code": "OM" },
  { "name": "Pakistan", "dial_code": "+92", "code": "PK" },
  { "name": "Palau", "dial_code": "+680", "code": "PW" },
  { "name": "Palestine", "dial_code": "+970", "code": "PS" },
  { "name": "Panama", "dial_code": "+507", "code": "PA" },
  { "name": "Papua New Guinea", "dial_code": "+675", "code": "PG" },
  { "name": "Paraguay", "dial_code": "+595", "code": "PY" },
  { "name": "Peru", "dial_code": "+51", "code": "PE" },
  { "name": "Philippines", "dial_code": "+63", "code": "PH" },
  { "name": "Pitcairn", "dial_code": "+872", "code": "PN" },
  { "name": "Poland", "dial_code": "+48", "code": "PL" },
  { "name": "Portugal", "dial_code": "+351", "code": "PT" },
  { "name": "Puerto Rico", "dial_code": "+1939", "code": "PR" },
  { "name": "Qatar", "dial_code": "+974", "code": "QA" },
  { "name": "Romania", "dial_code": "+40", "code": "RO" },
  { "name": "Russia", "dial_code": "+7", "code": "RU" },
  { "name": "Rwanda", "dial_code": "+250", "code": "RW" },
  { "name": "Reunion", "dial_code": "+262", "code": "RE" },
  { "name": "Saint Barthelemy", "dial_code": "+590", "code": "BL" },
  { "name": "Saint Helena", "dial_code": "+290", "code": "SH" },
  { "name": "Saint Kitts and Nevis", "dial_code": "+1869", "code": "KN" },
  { "name": "Saint Lucia", "dial_code": "+1758", "code": "LC" },
  { "name": "Saint Martin", "dial_code": "+590", "code": "MF" },
  { "name": "Saint Pierre", "dial_code": "+508", "code": "PM" },
  { "name": "Saint Vincent", "dial_code": "+1784", "code": "VC" },
  { "name": "Samoa", "dial_code": "+685", "code": "WS" },
  { "name": "San Marino", "dial_code": "+378", "code": "SM" },
  { "name": "Sao Tome", "dial_code": "+239", "code": "ST" },
  { "name": "Saudi Arabia", "dial_code": "+966", "code": "SA" },
  { "name": "Senegal", "dial_code": "+221", "code": "SN" },
  { "name": "Serbia", "dial_code": "+381", "code": "RS" },
  { "name": "Seychelles", "dial_code": "+248", "code": "SC" },
  { "name": "Sierra Leone", "dial_code": "+232", "code": "SL" },
  { "name": "Singapore", "dial_code": "+65", "code": "SG" },
  { "name": "Slovakia", "dial_code": "+421", "code": "SK" },
  { "name": "Slovenia", "dial_code": "+386", "code": "SI" },
  { "name": "Solomon Islands", "dial_code": "+677", "code": "SB" },
  { "name": "Somalia", "dial_code": "+252", "code": "SO" },
  { "name": "South Africa", "dial_code": "+27", "code": "ZA" },
  { "name": "South Sudan", "dial_code": "+211", "code": "SS" },
  { "name": "South Georgia", "dial_code": "+500", "code": "GS" },
  { "name": "Spain", "dial_code": "+34", "code": "ES" },
  { "name": "Sri Lanka", "dial_code": "+94", "code": "LK" },
  { "name": "Sudan", "dial_code": "+249", "code": "SD" },
  { "name": "Suriname", "dial_code": "+597", "code": "SR" },
  { "name": "Svalbard", "dial_code": "+47", "code": "SJ" },
  { "name": "Swaziland", "dial_code": "+268", "code": "SZ" },
  { "name": "Sweden", "dial_code": "+46", "code": "SE" },
  { "name": "Switzerland", "dial_code": "+41", "code": "CH" },
  { "name": "Syria", "dial_code": "+963", "code": "SY" },
  { "name": "Taiwan", "dial_code": "+886", "code": "TW" },
  { "name": "Tajikistan", "dial_code": "+992", "code": "TJ" },
  { "name": "Tanzania", "dial_code": "+255", "code": "TZ" },
  { "name": "Thailand", "dial_code": "+66", "code": "TH" },
  { "name": "Timor-Leste", "dial_code": "+670", "code": "TL" },
  { "name": "Togo", "dial_code": "+228", "code": "TG" },
  { "name": "Tokelau", "dial_code": "+690", "code": "TK" },
  { "name": "Tonga", "dial_code": "+676", "code": "TO" },
  { "name": "Trinidad and Tobago", "dial_code": "+1868", "code": "TT" },
  { "name": "Tunisia", "dial_code": "+216", "code": "TN" },
  { "name": "Turkey", "dial_code": "+90", "code": "TR" },
  { "name": "Turkmenistan", "dial_code": "+993", "code": "TM" },
  { "name": "Turks and Caicos", "dial_code": "+1649", "code": "TC" },
  { "name": "Tuvalu", "dial_code": "+688", "code": "TV" },
  { "name": "Uganda", "dial_code": "+256", "code": "UG" },
  { "name": "Ukraine", "dial_code": "+380", "code": "UA" },
  { "name": "United Arab Emirates", "dial_code": "+971", "code": "AE" },
  { "name": "United Kingdom", "dial_code": "+44", "code": "GB" },
  { "name": "United States", "dial_code": "+1", "code": "US" },
  { "name": "Uruguay", "dial_code": "+598", "code": "UY" },
  { "name": "Uzbekistan", "dial_code": "+998", "code": "UZ" },
  { "name": "Vanuatu", "dial_code": "+678", "code": "VU" },
  { "name": "Venezuela", "dial_code": "+58", "code": "VE" },
  { "name": "Vietnam", "dial_code": "+84", "code": "VN" },
  { "name": "Virgin Islands, British", "dial_code": "+1284", "code": "VG" },
  { "name": "Virgin Islands, U.S.", "dial_code": "+1340", "code": "VI" },
  { "name": "Wallis and Futuna", "dial_code": "+681", "code": "WF" },
  { "name": "Yemen", "dial_code": "+967", "code": "YE" },
  { "name": "Zambia", "dial_code": "+260", "code": "ZM" },
  { "name": "Zimbabwe", "dial_code": "+263", "code": "ZW" }
];

function populateCountryDropdown() {
  const selects = document.querySelectorAll('#regCC, #stuSignupCC, .country-select');
  selects.forEach(select => {
    const prevVal = select.value;
    select.innerHTML = '';
    
    COUNTRIES.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.dial_code;
      const flag = countryCodeToFlag(c.code);
      opt.textContent = `${flag} ${c.dial_code} (${c.name})`;
      
      // Default selected is India (+91)
      if (c.code === 'IN') {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    if (prevVal) {
      select.value = prevVal;
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateCountryDropdown);
} else {
  populateCountryDropdown();
}

// ── Global html2pdf Interceptor to prevent blank pages ─────────────────
(function() {
  let currentHtml2pdf = window.html2pdf;

  const hookHtml2pdf = (originalHtml2pdf) => {
    if (!originalHtml2pdf || originalHtml2pdf.__hooked) return originalHtml2pdf;

    const wrapped = function(element, options) {
      const worker = originalHtml2pdf.apply(this, arguments);
      const originalFrom = worker.from;
      worker.from = function(src) {
        if (src && src.nodeType === 1) {
          const leftStyle = src.style.left;
          if (leftStyle === '-9999px') {
            // Create a clean clone to keep original DOM node exactly where it is
            const clone = src.cloneNode(true);
            clone.style.position = 'static';
            clone.style.left = '0';
            clone.style.width = src.style.width || '800px';

            const parent = document.createElement('div');
            parent.style.position = 'absolute';
            parent.style.left = '-9999px';
            parent.style.top = '0';
            parent.style.width = src.style.width || '800px';
            parent.style.overflow = 'hidden';

            parent.appendChild(clone);
            document.body.appendChild(parent);

            const originalSave = worker.save;
            if (originalSave) {
              worker.save = function() {
                const saveResult = originalSave.apply(this, arguments);
                if (saveResult && typeof saveResult.then === 'function') {
                  saveResult.then(() => {
                    if (parent.parentNode) parent.parentNode.removeChild(parent);
                  });
                } else {
                  setTimeout(() => {
                    if (parent.parentNode) parent.parentNode.removeChild(parent);
                  }, 5000);
                }
                return saveResult;
              };
            }
            return originalFrom.call(this, clone);
          }
        }
        return originalFrom.apply(this, arguments);
      };
      return worker;
    };

    wrapped.__hooked = true;
    for (let prop in originalHtml2pdf) {
      if (originalHtml2pdf.hasOwnProperty(prop)) {
        wrapped[prop] = originalHtml2pdf[prop];
      }
    }
    return wrapped;
  };

  if (currentHtml2pdf) {
    window.html2pdf = hookHtml2pdf(currentHtml2pdf);
  }

  Object.defineProperty(window, 'html2pdf', {
    get() {
      return currentHtml2pdf;
    },
    set(val) {
      currentHtml2pdf = hookHtml2pdf(val);
    },
    configurable: true
  });
})();

// ── Global Print Integration for Vector PDF generation ──
(function() {
  function injectPrintStyle() {
    if (document.getElementById('eduquest-print-style')) return;
    const style = document.createElement('style');
    style.id = 'eduquest-print-style';
    style.media = 'print';
    style.textContent = `
      html, body {
        background: #ffffff !important;
        color: #0f172a !important;
        font-size: 11pt !important;
        line-height: 1.5 !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        height: auto !important;
        overflow: visible !important;
      }

      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      body > *:not(#testModal):not(#resWrap):not(.pdf-export-container):not(#pageResult) {
        display: none !important;
      }

      .page:not(#pageResult), #pageReg, #pageTest, #pageBreak, .reg-wrap, .reg-card, header, .hdr {
        display: none !important;
      }

      #pageResult, #pageResult.active {
        display: block !important;
        position: static !important;
        width: 100% !important;
        height: auto !important;
        overflow: visible !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      #testModal, #testModal.modal-overlay {
        display: block !important;
        position: static !important;
        background: none !important;
        backdrop-filter: none !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        height: auto !important;
        overflow: visible !important;
      }

      #modalContent, .modal-box, #resWrap, .pdf-export-container {
        display: block !important;
        position: static !important;
        width: 100% !important;
        max-width: 100% !important;
        background: #ffffff !important;
        color: #0f172a !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
        overflow: visible !important;
        height: auto !important;
      }

      #modalContent, #resWrap, .pdf-export-container {
        background-color: #ffffff !important;
        color: #0f172a !important;
      }

      button, .modal-close, .modal-pdf-btn, .res-actions, #downloadPdfBtn, a.btn, .modal-hdr button {
        display: none !important;
      }

      .q-card, .modal-stat, .stats-row, .charts-row, .inc-q {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      h1, h2, h3, h4, h5, h6, .q-review-hdr, .section-header, [style*="border-bottom"] {
        page-break-after: avoid !important;
        break-after: avoid-page !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      table {
        page-break-inside: auto;
        width: 100% !important;
        border-collapse: collapse !important;
      }
      tr {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
      thead {
        display: table-header-group !important;
      }
      tfoot {
        display: table-footer-group !important;
      }

      canvas, img {
        max-width: 100% !important;
        height: auto !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }

      @page {
        size: A4 portrait;
        margin: 15mm 10mm 15mm 10mm;
      }
    `;
    document.head.appendChild(style);
  }

  function overrideDownloadPDF() {
    const printBasedDownloadPDF = function() {
      injectPrintStyle();
      const btn = document.getElementById('downloadPdfBtn') || document.querySelector('.res-actions button') || document.querySelector('.modal-pdf-btn');
      const oldText = btn ? btn.innerHTML : '';
      if (btn) {
        btn.innerHTML = '⏳ Preparing PDF...';
        btn.disabled = true;
      }
      setTimeout(() => {
        window.print();
        if (btn) {
          btn.innerHTML = oldText;
          btn.disabled = false;
        }
      }, 500);
    };

    try {
      Object.defineProperty(window, 'downloadPDF', {
        get() {
          return printBasedDownloadPDF;
        },
        set(val) {
          // Lock down to prevent script hoisting overwrites
        },
        configurable: true
      });
    } catch (e) {
      window.downloadPDF = printBasedDownloadPDF;
    }
  }

  overrideDownloadPDF();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', overrideDownloadPDF);
  } else {
    overrideDownloadPDF();
  }
  setTimeout(overrideDownloadPDF, 100);
  setTimeout(overrideDownloadPDF, 500);
  setTimeout(overrideDownloadPDF, 1000);
})();
