const fs = require('fs');

let content = fs.readFileSync('questions.js', 'utf8');

const replacements = [
  // Q55
  ['xy-coordinate plane', '\\\\( xy \\\\)-coordinate plane'],
  ['(−3, −1)', '\\\\((-3, -1)\\\\)'],
  ['(3, 1)', '\\\\((3, 1)\\\\)'],
  
  // Q57
  ['4/5', '\\\\(\\\\frac{4}{5}\\\\)'],
  ['1/5', '\\\\(\\\\frac{1}{5}\\\\)'],
  
  // Q58
  ['A, the payment Amount', '\\\\( A \\\\), the payment Amount'],
  ['P is the initial Principal', '\\\\( P \\\\) is the initial Principal'],
  ['r is the interest rate', '\\\\( r \\\\) is the interest rate'],
  ['n is the total number', '\\\\( n \\\\) is the total number'],
  ['A = P · r(1+r)ⁿ / [(1+r)ⁿ − 1]', '$$ A = P \\\\cdot \\\\frac{r(1+r)^n}{(1+r)^n - 1} $$'],
  ['P in terms of A, n, and r', '\\\\( P \\\\) in terms of \\\\( A \\\\), \\\\( n \\\\), and \\\\( r \\\\)'],
  ['P = A · r(1+r)ⁿ / [(1+r)ⁿ − 1]', '$$ P = A \\\\cdot \\\\frac{r(1+r)^n}{(1+r)^n - 1} $$'],
  ['P = A · [(1+r)ⁿ − 1] / [r(1+r)ⁿ]', '$$ P = A \\\\cdot \\\\frac{(1+r)^n - 1}{r(1+r)^n} $$'],
  ['P = A · r(1+r)ⁿ−1 / [(1+r)ⁿ]', '$$ P = A \\\\cdot \\\\frac{r(1+r)^{n-1}}{(1+r)^n} $$'],
  ['P = A · (1+r)ⁿ / [r(1+r)ⁿ − 1]', '$$ P = A \\\\cdot \\\\frac{(1+r)^n}{r(1+r)^n - 1} $$'],
  
  // Q59
  ['(2, 5)', '\\\\((2, 5)\\\\)'],
  ['radius of 3', 'radius of \\\\( 3 \\\\)'],
  ['(x − 2)² + (y − 5)² = 9', '\\\\( (x - 2)^2 + (y - 5)^2 = 9 \\\\)'],
  ['(x − 2)² + (y − 5)² = 3', '\\\\( (x - 2)^2 + (y - 5)^2 = 3 \\\\)'],
  ['(x + 2)² − (y + 5)² = 9', '\\\\( (x + 2)^2 - (y + 5)^2 = 9 \\\\)'],
  ['(x + 2)² − (y + 5)² = 3', '\\\\( (x + 2)^2 - (y + 5)^2 = 3 \\\\)'],
  
  // Q60
  ['ABCD is a square', '\\\\( ABCD \\\\) is a square'],
  ['points B, C, and O', 'points \\\\( B \\\\), \\\\( C \\\\), and \\\\( O \\\\)'],
  ['y = x²/k', '\\\\( y = \\\\frac{x^2}{k} \\\\)'],
  ['k is a constant', '\\\\( k \\\\) is a constant'],
  ['area of the square is 36', 'area of the square is \\\\( 36 \\\\)'],
  ['value of k', 'value of \\\\( k \\\\)'],
  
  // Q61
  ['t − 5', '\\\\( t - 5 \\\\)'],
  ['t + 2', '\\\\( t + 2 \\\\)'],
  
  // Q62
  ['f(x) = x³ − 4x\\ng(x) = x² + x − 2\\n\\n', '$$ f(x) = x^3 - 4x $$ \\n $$ g(x) = x^2 + x - 2 $$ \\n\\n'],
  ['f(x)/g(x)', '\\\\( \\\\frac{f(x)}{g(x)} \\\\)'],
  ['x > 2', '\\\\( x > 2 \\\\)'],
  ['(x − 2) / [x(x − 1)]', '\\\\( \\\\frac{x - 2}{x(x - 1)} \\\\)'],
  ['(x − 1) / [x(x − 2)]', '\\\\( \\\\frac{x - 1}{x(x - 2)} \\\\)'],
  ['x(x − 1) / (x − 2)', '\\\\( \\\\frac{x(x - 1)}{x - 2} \\\\)'],
  ['x(x − 2) / (x − 1)', '\\\\( \\\\frac{x(x - 2)}{x - 1} \\\\)']
];

for (const [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync('questions.js', content, 'utf8');
console.log('Applied first batch of LaTeX replacements.');
