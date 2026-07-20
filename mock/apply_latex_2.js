const fs = require('fs');

let content = fs.readFileSync('questions.js', 'utf8');

const replacements = [
  // Q63
  ['(3, −1)', '\\\\((3, -1)\\\\)'],
  ['x-coordinates', '\\\\( x \\\\)-coordinates'],
  ['y-coordinates', '\\\\( y \\\\)-coordinates'],
  
  // Q64 is % based, fine.
  
  // Q65
  ['xy-plane', '\\\\( xy \\\\)-plane'],
  ['(−2, 4)', '\\\\((-2, 4)\\\\)'],
  ['(−2, 1)', '\\\\((-2, 1)\\\\)'],
  ['(−5, 4)', '\\\\((-5, 4)\\\\)'],
  ['(−2, 6)', '\\\\((-2, 6)\\\\)'],
  ['(−2, 7)', '\\\\((-2, 7)\\\\)'],
  ['(1, 4)', '\\\\((1, 4)\\\\)'],
  
  // Q66
  ['3n/2p = 4/3', '\\\\( \\\\frac{3n}{2p} = \\\\frac{4}{3} \\\\)'],
  ['value of n/p', 'value of \\\\( \\\\frac{n}{p} \\\\)'],
  ['9/8', '\\\\( \\\\frac{9}{8} \\\\)'],
  ['8/9', '\\\\( \\\\frac{8}{9} \\\\)'],
  
  // Q67
  ['Square ABCD', 'Square \\\\( ABCD \\\\)'],
  ['AB = 6', '\\\\( AB = 6 \\\\)'],
  ['24 − 10π', '\\\\( 24 - 10\\\\pi \\\\)'],
  ['24 − 5π', '\\\\( 24 - 5\\\\pi \\\\)'],
  ['36 − 10π', '\\\\( 36 - 10\\\\pi \\\\)'],
  ['36 − 5π', '\\\\( 36 - 5\\\\pi \\\\)'],
  
  // Q68
  ['line l', 'line \\\\( l \\\\)'],
  ['(−1, 3)', '\\\\((-1, 3)\\\\)'],
  ['4x + 2y = k', '\\\\( 4x + 2y = k \\\\)'],
  ['(p, −p)', '\\\\((p, -p)\\\\)'],
  ['value of p', 'value of \\\\( p \\\\)'],
  
  // Q69
  ['y = x² − 2x + 3\\ny = −3x + 5\\n\\n', '$$ y = x^2 - 2x + 3 $$ \\n $$ y = -3x + 5 $$ \\n\\n'],
  
  // Q70 text is okay.
  
  // Q71
  ['2/3', '\\\\( \\\\frac{2}{3} \\\\)'],
  
  // Q72
  ['p > 0 and p² = 3p + 40', '\\\\( p > 0 \\\\) and \\\\( p^2 = 3p + 40 \\\\)'],
  
  // Q73
  ['x² − 3x = 50 and x² + 5x = 12', '\\\\( x^2 - 3x = 50 \\\\) and \\\\( x^2 + 5x = 12 \\\\)'],
  ['value of x² + x', 'value of \\\\( x^2 + x \\\\)'],
  
  // Q74
  ['BC has length 4, and CD has length 7', '\\\\( BC \\\\) has length \\\\( 4 \\\\), and \\\\( CD \\\\) has length \\\\( 7 \\\\)'],
  ['Points A, K, and G', 'Points \\\\( A \\\\), \\\\( K \\\\), and \\\\( G \\\\)'],
  ['length of DE', 'length of \\\\( DE \\\\)'],
  
  // Q75
  ['values of x', 'values of \\\\( x \\\\)'],
  ['f(x) = 3 and f(x) = x² + 2', '\\\\( f(x) = 3 \\\\) and \\\\( f(x) = x^2 + 2 \\\\)'],
  
  // Q76
  ['xy = 120, and 1/x + 1/y = 1/4', '\\\\( xy = 120 \\\\), and \\\\( \\\\frac{1}{x} + \\\\frac{1}{y} = \\\\frac{1}{4} \\\\)'],
  ['find x + y', 'find \\\\( x + y \\\\)']
];

for (const [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync('questions.js', content, 'utf8');
console.log('Applied second batch of LaTeX replacements.');
