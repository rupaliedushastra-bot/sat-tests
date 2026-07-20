const fs = require('fs');
const path = require('path');

const root = 'c:\\Users\\priya\\OneDrive\\Desktop\\sat-topic-test';

function findQuestionFiles(dir) {
  let results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      if (entry.isDirectory()) {
        results = results.concat(findQuestionFiles(fullPath));
      } else if (entry.name.match(/question/i) && entry.name.endsWith('.js')) {
        results.push(fullPath);
      }
    }
  } catch(e) {}
  return results;
}

const files = findQuestionFiles(root);
console.log(`Found ${files.length} question files:\n`);

let totalQs = 0;
files.forEach(f => {
  try {
    const content = fs.readFileSync(f, 'utf8');
    const answerCount = (content.match(/\banswer\s*[:=]/g) || []).length;
    const idCount = (content.match(/\bid\s*:/g) || []).length;
    const size = fs.statSync(f).size;
    const relPath = path.relative(root, f);
    console.log(`${relPath.padEnd(65)} | ${String(idCount).padStart(4)} Qs | ${(size/1024).toFixed(1).padStart(6)} KB`);
    totalQs += idCount;
  } catch(e) {
    console.log(`ERROR: ${f} - ${e.message}`);
  }
});

console.log(`\n${'='.repeat(80)}`);
console.log(`TOTAL: ${files.length} files, ~${totalQs} questions`);
