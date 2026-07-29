// =============================================
// report.js – High-Quality HTML-to-PDF Report Generator
// Digital SAT Practice Exams
// =============================================

function loadHtml2PdfLibrary(callback) {
  if (typeof html2pdf !== 'undefined') {
    callback();
    return;
  }
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = callback;
  document.head.appendChild(script);
}

function generatePDFReport(result, shouldSave = true) {
  loadHtml2PdfLibrary(() => {
    const email = result.student.email || '';
    const name = result.student.name || 'Student';
    const examName = result.examName || result.topic || 'Report';

    const tempParent = document.createElement('div');
    tempParent.style.position = 'absolute';
    tempParent.style.left = '-9999px';
    tempParent.style.top = '0';
    tempParent.style.width = '800px';
    tempParent.style.overflow = 'hidden';

    const tempChild = document.createElement('div');
    tempChild.style.width = '800px';
    tempChild.style.background = '#f8fafc';
    tempChild.innerHTML = generateCleanReportHTML(result, result.details, email, name);

    tempParent.appendChild(tempChild);
    document.body.appendChild(tempParent);

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `EduQuest_Report_${name.replace(/\s+/g, '_')}_${examName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#f8fafc', scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(tempChild).save().then(() => {
      if (document.body.contains(tempParent)) document.body.removeChild(tempParent);
    }).catch(err => {
      console.error('PDF generation failed', err);
      if (document.body.contains(tempParent)) document.body.removeChild(tempParent);
    });
  });
}

function generateCombinedPDF(resultsList, studentInfo) {
  loadHtml2PdfLibrary(() => {
    const email = studentInfo.email || '';
    const name = studentInfo.name || 'Student';

    const tempParent = document.createElement('div');
    tempParent.style.position = 'absolute';
    tempParent.style.left = '-9999px';
    tempParent.style.top = '0';
    tempParent.style.width = '800px';
    tempParent.style.overflow = 'hidden';

    const tempChild = document.createElement('div');
    tempChild.style.width = '800px';
    tempChild.style.background = '#f8fafc';
    tempChild.innerHTML = generateCleanCombinedReportHTML(resultsList, studentInfo);

    tempParent.appendChild(tempChild);
    document.body.appendChild(tempParent);

    const opt = {
      margin: [10, 10, 10, 10],
      filename: `EduQuest_Combined_Report_${name.replace(/\s+/g, '_')}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#f8fafc', scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(tempChild).save().then(() => {
      if (document.body.contains(tempParent)) document.body.removeChild(tempParent);
    }).catch(err => {
      console.error('PDF generation failed', err);
      if (document.body.contains(tempParent)) document.body.removeChild(tempParent);
    });
  });
}

function generateCleanReportHTML(t, details, emailStr, studentNameStr) {
  const letters = ['A', 'B', 'C', 'D'];
  const testTitle = t.examName || t.exam_name || t.topic || 'Practice Test Performance Report';
  const name = studentNameStr || t.name || t.student_name || (emailStr || t.email || 'Student').split('@')[0];
  const email = emailStr || t.email || '';
  const dateStr = (t.submitTime || t.submit_time || t.submitted_at) 
    ? new Date(t.submitTime || t.submit_time || t.submitted_at).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }) 
    : new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  const total = t.total || (details ? details.length : 0);
  const correct = t.correct || 0;
  const wrong = t.wrong || 0;
  const unattempted = t.unattempted !== undefined ? t.unattempted : Math.max(0, total - correct - wrong);
  const pct = t.percentage || t.pct || (total > 0 ? Math.round((correct / total) * 100) : 0);
  const scoreDisplay = t.composite_score || t.scaled || `${pct}%`;

  let qCards = '';
  if (details && details.length > 0) {
    qCards = details.map((d, i) => {
      const qId = d.id || (i + 1);
      const qText = d.text || d.question || d.prompt || '';
      const hasText = !!qText;
      const status = d.status || (d.chosen === d.answer ? 'correct' : (d.chosen !== undefined && d.chosen !== null && d.chosen !== -1 ? 'wrong' : 'unattempted'));
      
      const statusBadge = status === 'correct'
        ? '<span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">✅ Correct</span>'
        : status === 'wrong'
        ? '<span style="background:#fee2e2; color:#991b1b; border:1px solid #fca5a5; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">❌ Wrong</span>'
        : '<span style="background:#fef3c7; color:#92400e; border:1px solid #fde68a; padding:4px 12px; border-radius:20px; font-weight:700; font-size:0.8rem;">⏭ Skipped</span>';

      const clean = str => (str || '').replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, m =>
        ({'&nbsp;':' ','&deg;':'°','&rarr;':'→','&larr;':'←','&minus;':'−','&sup2;':'²','&sup3;':'³'}[m] || ' ')
      );

      let optsHTML = '';
      if (d.isFillIn) {
        optsHTML = `
          <div style="font-size:0.88rem; color:#475569; margin-bottom:8px;">
            ${status === 'wrong' ? `Your answer: <strong style="color:#ef4444;">${d.chosen || 'None'}</strong> · Correct answer: <strong style="color:#16a34a;">${d.fillAnswer || d.answer || '–'}</strong>` : ''}
            ${status === 'correct' ? `Your answer: <strong style="color:#16a34a;">${d.chosen || '–'}</strong> (Correct)` : ''}
            ${status === 'unattempted' ? `Correct answer: <strong style="color:#16a34a;">${d.fillAnswer || d.answer || '–'}</strong>` : ''}
          </div>
        `;
      } else if (hasText && d.options && d.options.length > 0) {
        optsHTML = d.options.map((optText, optIdx) => {
          let optStyle = "background:#f8fafc; border:1.5px solid #e2e8f0; color:#334155;";
          let badgeIcon = "";

          if (optIdx === d.answer) {
            optStyle = "background:#f0fdf4; border:1.5px solid #22c55e; color:#15803d; font-weight:600;";
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#16a34a;">✓ Correct Answer</span>';
          }

          if (status === 'wrong' && optIdx === d.chosen) {
            optStyle = "background:#fef2f2; border:1.5px solid #ef4444; color:#b91c1c; font-weight:600;";
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#dc2626;">✗ Your Choice</span>';
          } else if (status === 'correct' && optIdx === d.chosen) {
            badgeIcon = '<span style="margin-left:auto; font-weight:bold; color:#16a34a;">✓ Your Choice</span>';
          }

          return `
            <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; border-radius:8px; font-size:0.9rem; margin-bottom:8px; ${optStyle}">
              <div style="width:26px; height:26px; border-radius:50%; background:rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.8rem; flex-shrink:0;">${letters[optIdx] || optIdx + 1}</div>
              <div style="flex:1;">${clean(optText)}</div>
              ${badgeIcon}
            </div>
          `;
        }).join('');
      } else {
        optsHTML = `
          <div style="font-size:0.88rem; color:#475569; margin-bottom:8px;">
            ${status === 'wrong' ? `Your answer: <strong style="color:#ef4444;">${letters[d.chosen] || '–'}</strong> · Correct answer: <strong style="color:#16a34a;">${letters[d.answer] || '–'}</strong>` : ''}
            ${status === 'unattempted' ? `Correct answer: <strong style="color:#16a34a;">${letters[d.answer] || '–'}</strong>` : ''}
            ${status === 'correct' ? `Your answer: <strong style="color:#16a34a;">${letters[d.chosen] || '–'}</strong> (Correct)` : ''}
          </div>
        `;
      }

      const expText = d.explanation || 'No detailed explanation available for this question. Please review the relevant concept or consult the solution guide.';

      let imgHTML = '';
      if (d.image || d.useImage) {
        const imgSrc = d.image || d.imageKey || '';
        if (imgSrc) {
          imgHTML = `<div style="text-align:center; margin-bottom:16px;"><img src="${imgSrc}" style="max-width:100%; max-height:350px; border-radius:8px;" alt="Question Image" /></div>`;
        }
      }

      return `
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:20px; box-shadow:0 2px 8px rgba(0,0,0,0.04); page-break-inside:avoid;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #f1f5f9; padding-bottom:10px;">
            <div>
              <span style="font-weight:800; font-size:1rem; font-family:'Courier New', monospace; color:#0f172a;">Question ${qId}</span>
            </div>
            ${statusBadge}
          </div>
          
          ${hasText ? `<div style="font-size:0.95rem; line-height:1.65; color:#1e293b; margin-bottom:16px; white-space:pre-wrap;">${clean(qText)}</div>` : ''}
          ${imgHTML}
          
          <div style="margin-bottom:16px;">
            ${optsHTML}
          </div>

          <div style="padding:12px 16px; background:#f0f9ff; border-left:4px solid #0284c7; border-radius:0 8px 8px 0; font-size:0.88rem; line-height:1.5; color:#0c4a6e;">
            <strong style="color:#0369a1; display:block; margin-bottom:4px;">💡 Solution & Explanation:</strong>
            ${clean(expText)}
          </div>
        </div>
      `;
    }).join('');
  } else {
    qCards = '<p style="color:#64748b; text-align:center; padding:20px;">No detailed questions available.</p>';
  }

  return `
    <div class="pdf-export-container" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background:#f8fafc; color:#0f172a; padding:24px; max-width:900px; margin:0 auto;">
      <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding:28px 32px; border-radius:16px; margin-bottom:24px; text-align:center;">
        <h1 style="margin:0 0 6px 0; font-size:1.8rem; letter-spacing:-0.02em; color:#ffffff;">EduQuest Performance Report</h1>
        <p style="margin:4px 0; opacity:0.85; font-size:0.95rem; color:#e2e8f0;"><strong>${testTitle}</strong></p>
        <div style="font-size:3.2rem; font-weight:900; color:#38bdf8; margin:12px 0 6px 0;">${scoreDisplay}</div>
        <p style="margin:4px 0; font-size:0.9rem; color:#cbd5e1;">Student: <strong>${name}</strong> ${email ? `(${email})` : ''} &nbsp;•&nbsp; Date: ${dateStr}</p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:24px;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#16a34a;">${correct}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Correct</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#dc2626;">${wrong}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Wrong</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#d97706;">${unattempted}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Skipped</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#0284c7;">${pct}%</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Percentage</div>
        </div>
      </div>

      <div style="font-size:1.3rem; font-weight:800; margin:28px 0 16px 0; color:#0f172a; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📋 Complete Question & Answer Review (${total} Questions)</div>

      ${qCards}
    </div>
  `;
}

function generateCleanCombinedReportHTML(resultsList, studentInfo) {
  const letters = ['A', 'B', 'C', 'D'];
  const name = studentInfo.name || 'Student';
  const email = studentInfo.email || '';
  const dateStr = new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

  let totalCorrect = 0, totalWrong = 0, totalSkipped = 0, totalQ = 0;
  resultsList.forEach(r => {
    totalCorrect += r.correct || 0;
    totalWrong += r.wrong || 0;
    totalSkipped += r.unattempted || 0;
    totalQ += r.total || 0;
  });
  const avgPct = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

  let testCardsHTML = '';
  resultsList.forEach((r, idx) => {
    const rTotal = r.total || (r.details ? r.details.length : 0);
    const rPct = r.pct || (rTotal > 0 ? Math.round((r.correct / rTotal) * 100) : 0);
    
    testCardsHTML += `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:20px; page-break-inside:avoid;">
        <h3 style="margin:0 0 10px 0; font-size:1.1rem; color:#0f172a;">${r.examName || `Practice Exam ${idx + 1}`}</h3>
        <p style="margin:4px 0; font-size:0.85rem; color:#64748b;">Date: ${new Date(r.submitTime).toLocaleDateString()}</p>
        <div style="display:flex; gap:16px; margin-top:12px;">
          <div style="flex:1; background:#f8fafc; padding:10px; border-radius:8px; text-align:center;">
            <div style="font-size:1.1rem; font-weight:700; color:#0f172a;">${r.scaled || `${rPct}%`}</div>
            <div style="font-size:0.7rem; text-transform:uppercase; color:#64748b; margin-top:2px;">Score</div>
          </div>
          <div style="flex:1; background:#f8fafc; padding:10px; border-radius:8px; text-align:center;">
            <div style="font-size:1.1rem; font-weight:700; color:#16a34a;">${r.correct}</div>
            <div style="font-size:0.7rem; text-transform:uppercase; color:#64748b; margin-top:2px;">Correct</div>
          </div>
          <div style="flex:1; background:#f8fafc; padding:10px; border-radius:8px; text-align:center;">
            <div style="font-size:1.1rem; font-weight:700; color:#dc2626;">${r.wrong}</div>
            <div style="font-size:0.7rem; text-transform:uppercase; color:#64748b; margin-top:2px;">Wrong</div>
          </div>
        </div>
      </div>
    `;
  });

  return `
    <div class="pdf-export-container" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background:#f8fafc; color:#0f172a; padding:24px; max-width:900px; margin:0 auto;">
      <div style="background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding:28px 32px; border-radius:16px; margin-bottom:24px; text-align:center;">
        <h1 style="margin:0 0 6px 0; font-size:1.8rem; letter-spacing:-0.02em; color:#ffffff;">EduQuest Combined Mock Report</h1>
        <div style="font-size:3.2rem; font-weight:900; color:#38bdf8; margin:12px 0 6px 0;">${avgPct}%</div>
        <p style="margin:4px 0; font-size:0.9rem; color:#cbd5e1;">Student: <strong>${name}</strong> ${email ? `(${email})` : ''} &nbsp;•&nbsp; Aggregated Date: ${dateStr}</p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:24px;">
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#16a34a;">${totalCorrect}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Total Correct</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#dc2626;">${totalWrong}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Total Wrong</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#d97706;">${totalSkipped}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Total Skipped</div>
        </div>
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px; text-align:center;">
          <div style="font-size:1.6rem; font-weight:800; color:#0284c7;">${resultsList.length}</div>
          <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-top:4px;">Tests Taken</div>
        </div>
      </div>

      <div style="font-size:1.3rem; font-weight:800; margin:28px 0 16px 0; color:#0f172a; border-bottom:2px solid #e2e8f0; padding-bottom:8px;">📊 Individual Exam Summaries</div>

      ${testCardsHTML}
    </div>
  `;
}
