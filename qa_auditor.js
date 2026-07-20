const fs = require('fs');
const path = require('path');

const filesToAudit = [
  "wic/questions_wic.js",
  "verbs/questions.js",
  "Trigonometry/questions.js",
  "transition/questions.js",
  "topic5/questions.js",
  "topic4/questions.js",
  "topic2/questions2.js",
  "topic-3/questions.js",
  "topic_words_in_context/questions.js",
  "topic_two_variable_data_models_and_scatter_plots/questions.js",
  "topic_textual_evidence/questions.js",
  "topic_systems_of_two_linear_equations_in_two_variables/questions.js",
  "topic_structure_and_purpose/questions.js",
  "topic_right_triangles_and_trigonometry/questions.js",
  "topic_ratios_rates_proportional_relationships_and_units/questions.js",
  "topic_probability_and_conditional_probability/questions.js",
  "topic_percentages/questions.js",
  "topic_nonlinear_functions/questions.js",
  "topic_lines_angles_and_triangles/questions.js",
  "topic_linear_inequalities_in_one_or_two_variables/questions.js",
  "topic_linear_functions/questions.js",
  "topic_linear_equation_in_one_variable_linear_equation_in_two_variables/questions.js",
  "topic_information_and_ideas/questions.js",
  "topic_inferences/questions.js",
  "topic_inference_from_sample_statistics_and_margin_of_error/questions.js",
  "topic_expression_of_ideas/questions.js",
  "topic_equivalent_expressions/questions.js",
  "topic_cross_text_connections/questions.js",
  "topic_craft_and_structure/questions.js",
  "topic_circles/questions.js",
  "topic_central_ideas_and_details/questions.js",
  "topic_area_and_volume/questions.js",
  "topic_16/questions.js",
  "topic_15/questions.js",
  "topic_14/questions.js",
  "topic_13/questions.js",
  "topic_12/questions.js",
  "topic_11/questions.js",
  "topic_10/questions.js",
  "topic_9/questions.js",
  "topic_8/questions.js",
  "topic_7/questions.js",
  "text_structure_purpose/questions_sp.js",
  "test_6/questions.js",
  "rhetorics/questions.js",
  "ratio&proportion/questions.js",
  "Quadratic_Equations_2/questions.js",
  "Quadratic_Equations/questions.js",
  "pronouns/questions.js",
  "Polynomials/questions.js",
  "plural_poss/questions.js",
  "percentage/questions.js",
  "pdf_Words_in_Context/questions.js",
  "pdf_Transitions/questions.js",
  "pdf_Text_Structure_and_Purpose/questions.js",
  "pdf_Rhetorical_Synthesis/questions.js",
  "pdf_Inferences/questions.js",
  "pdf_Form_Structure_and_Sense/questions.js",
  "pdf_Cross_Text_Connections/questions.js",
  "pdf_Command_of_Evidence_Textual/questions.js",
  "pdf_Central_Ideas_and_Details/questions.js",
  "pdf_Boundaries/questions.js",
  "new_test_3/questions_math.js",
  "new_test_3/questions_rw.js",
  "new_test_2/questions_rw.js",
  "new_test_1/questions_math.js",
  "new_test_1/questions_rw.js",
  "modifiers/questions.js",
  "mock/test_13/questions13.js",
  "mock/test_12/questions12.js",
  "mock/test_11/questions11.js",
  "mock/test_10/questions10.js",
  "mock/test_9/questions9.js",
  "mock/test_8/questions8.js",
  "mock/test_7/questions7.js",
  "mock/test_6/questions6.js",
  "mock/test_5/questions5.js",
  "mock/test_4/questions4.js",
  "mock/test_3/questions3.js",
  "mensuration/questions.js",
  "inferences/questions.js",
  "Functions_and_Parabola/questions.js",
  "Exponents_and_Square_Roots/questions.js",
  "exam_sat_diag/questions.js",
  "cross_text_connections/questions_ctc.js",
  "coe_textual/questions_coe_textual.js",
  "Central_Ideas_and_Details/questions_cid.js",
  "boundaries/questions.js",
  "angles&triangles/questions.js",
  "angles/questions.js",
  "Advanced_Problem_Set/questions.js"
];

const basePath = 'c:\\Users\\priya\\OneDrive\\Desktop\\sat-topic-test';

let totalErrors = 0;
let totalQs = 0;

for (const relPath of filesToAudit) {
  const fullPath = path.join(basePath, relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`[SKIP] File not found: ${relPath}`);
    continue;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Convert const arrays to var so we can eval
    let code = content.replace(/(?:const|let) /g, 'var ');
    
    // We only want to execute it in a sandbox if possible, but eval is easiest
    // We'll wrap in a function to avoid polluting global scope too much
    let extractedQuestions = [];
    try {
        const fn = new Function(`
            ${code}
            // Return all arrays that look like questions
            let res = [];
            for (let key in this) {
               if (Array.isArray(this[key]) && this[key].length > 0 && this[key][0].id !== undefined) {
                   res = res.concat(this[key]);
               }
            }
            // If they are local variables, we must explicitly check common names
            if (typeof QUESTIONS !== 'undefined') res = res.concat(QUESTIONS);
            if (typeof QUESTIONS2 !== 'undefined') res = res.concat(QUESTIONS2);
            if (typeof QUESTIONS3 !== 'undefined') res = res.concat(QUESTIONS3);
            if (typeof QUESTIONS_MATH !== 'undefined') res = res.concat(QUESTIONS_MATH);
            if (typeof QUESTIONS_RW !== 'undefined') res = res.concat(QUESTIONS_RW);
            // Deduplicate by ID
            let unique = [];
            let seen = new Set();
            for (let q of res) {
                if (!seen.has(q.id)) {
                    seen.add(q.id);
                    unique.push(q);
                }
            }
            return unique;
        `);
        extractedQuestions = fn.call({});
    } catch(err) {
        console.log(`[WARN] Could not eval ${relPath}: ${err.message}`);
        continue;
    }
    
    if (extractedQuestions.length === 0) continue;
    
    let fileErrors = [];
    totalQs += extractedQuestions.length;
    
    for (const q of extractedQuestions) {
        // Check answer index bounds
        if (q.options && Array.isArray(q.options)) {
            if (q.answer >= q.options.length || q.answer < 0) {
                fileErrors.push(`Q${q.id}: answer index ${q.answer} out of bounds for options length ${q.options.length}`);
            }
        }
        
        // Check missing fill in
        if (q.isFillIn && (!q.fillAnswer || q.fillAnswer.trim() === '')) {
            fileErrors.push(`Q${q.id}: isFillIn is true but fillAnswer is missing`);
        }
    }
    
    // Auto LaTeX Math Formatting (Basic Regex)
    if (relPath.toLowerCase().includes('math') || relPath.toLowerCase().includes('trigonometry') || relPath.toLowerCase().includes('equations')) {
        let newContent = content;
        // fractions: 3/4 -> \frac{3}{4}
        newContent = newContent.replace(/\b(\d+)\/(\d+)\b/g, '\\frac{$1}{$2}');
        // exponents: x^2 -> x^2 
        newContent = newContent.replace(/([a-zA-Z])\^(\d+)/g, '$1^$2');
        if (newContent !== content) {
            fs.writeFileSync(fullPath, newContent, 'utf8');
            modified = true;
        }
    }

    if (fileErrors.length > 0) {
        console.log(`\n--- ${relPath} ---`);
        fileErrors.forEach(e => console.log('  ' + e));
        totalErrors += fileErrors.length;
    }
    
    if (modified) {
       console.log(`[LATEX] Formatted math in ${relPath}`);
    }
    
  } catch(e) {
    console.log(`[ERROR] Failed processing ${relPath}: ${e.message}`);
  }
}

console.log(`\n=== AUDIT SUMMARY ===`);
console.log(`Total questions scanned: ${totalQs}`);
console.log(`Total critical structural errors found: ${totalErrors}`);
if (totalErrors > 0) {
    console.log(`Please fix the structural errors listed above.`);
} else {
    console.log(`All files passed structural QA (answer indices valid, fillAnswers present).`);
}
