// =============================================
// Digital SAT Practice Test - Binomial Theorem & Sequences
// 30 Questions (Easy, Moderate, Super Toughest)
// Format: Authentic SAT Math Practice with LaTeX
// =============================================

const QUESTIONS = [
  {
    "id": 1,
    "difficulty": "EASY",
    "text": "What is the 5th term of the arithmetic sequence $2, 5, 8, 11, \\dots$?",
    "options": [
      "$14$",
      "$15$",
      "$17$",
      "$20$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The first term is $a_1 = 2$ and the common difference is $d = 5 - 2 = 3$.\nThe $n$-th term formula of an arithmetic sequence is $a_n = a_1 + (n - 1)d$.\nFor the 5th term ($n = 5$):\n$$a_5 = 2 + (5 - 1)(3) = 2 + 12 = 14$$",
    "topic": "Arithmetic Sequences"
  },
  {
    "id": 2,
    "difficulty": "EASY",
    "text": "What is the common ratio of the geometric sequence $3, 12, 48, 192, \\dots$?",
    "options": [
      "$3$",
      "$4$",
      "$6$",
      "$9$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In a geometric sequence, the common ratio $r$ is the ratio of any term to its preceding term:\n$$r = \\frac{a_2}{a_1} = \\frac{12}{3} = 4$$\nChecking with other terms: $\\frac{48}{12} = 4$ and $\\frac{192}{48} = 4$.",
    "topic": "Geometric Sequences"
  },
  {
    "id": 3,
    "difficulty": "EASY",
    "text": "What is the coefficient of $x^2$ in the expansion of $(x + 2)^3$?",
    "options": [
      "$2$",
      "$4$",
      "$6$",
      "$12$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Using the binomial expansion formula $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$:\n$$(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3 = x^3 + 6x^2 + 12x + 8$$\nThe coefficient of $x^2$ is $6$.",
    "topic": "Binomial Expansion"
  },
  {
    "id": 4,
    "difficulty": "EASY",
    "text": "If the first term of an arithmetic sequence is $10$ and the common difference is $-2$, what is the 10th term?",
    "options": [
      "$-8$",
      "$-10$",
      "$-12$",
      "$10$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Using the $n$-th term formula $a_n = a_1 + (n - 1)d$ with $a_1 = 10$, $d = -2$, and $n = 10$:\n$$a_{10} = 10 + (10 - 1)(-2) = 10 + 9(-2) = 10 - 18 = -8$$",
    "topic": "Arithmetic Sequences"
  },
  {
    "id": 5,
    "difficulty": "MODERATE",
    "text": "The 3rd term of an arithmetic sequence is $14$, and the 8th term is $34$. What is the 1st term?",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$10$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In an arithmetic sequence, $a_8 - a_3 = (8 - 3)d = 5d$. Setting $5d = 34 - 14 = 20 \\implies d = 4$.\nNow find the first term:\n$$a_1 = a_3 - 2d = 14 - 2(4) = 14 - 8 = 6$$",
    "topic": "Arithmetic Sequences"
  },
  {
    "id": 6,
    "difficulty": "MODERATE",
    "text": "Find the sum of the first 20 terms of the sequence $5, 9, 13, 17, \\dots$",
    "options": [
      "$860$",
      "$820$",
      "$780$",
      "$900$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. This is an arithmetic series with $a_1 = 5$, common difference $d = 4$, and $n = 20$.\nThe sum formula is $S_n = \\frac{n}{2}[2a_1 + (n - 1)d]$:\n$$S_{20} = \\frac{20}{2}[2(5) + (20 - 1)(4)] = 10[10 + 19(4)] = 10[10 + 76] = 10(86) = 860$$",
    "topic": "Arithmetic Series"
  },
  {
    "id": 7,
    "difficulty": "MODERATE",
    "text": "What is the sum of the infinite geometric series $8 + 4 + 2 + 1 + \\dots$?",
    "options": [
      "$12$",
      "$14$",
      "$16$",
      "$32$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The series has first term $a = 8$ and common ratio $r = \\frac{4}{8} = \\frac{1}{2}$.\nSince $|r| < 1$, the sum of an infinite geometric series is given by $S_\\infty = \\frac{a}{1 - r}$:\n$$S_\\infty = \\frac{8}{1 - 1/2} = \\frac{8}{1/2} = 16$$",
    "topic": "Infinite Geometric Series"
  },
  {
    "id": 8,
    "difficulty": "MODERATE",
    "text": "In the expansion of $(2x - y)^4$, what is the coefficient of $x^2y^2$?",
    "options": [
      "$6$",
      "$-24$",
      "$24$",
      "$-6$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. By the Binomial Theorem, the $(r+1)$-th term in $(2x - y)^4$ is $\\binom{4}{r}(2x)^{4-r}(-y)^r$.\nFor the $x^2y^2$ term, $r = 2$:\n$$\\binom{4}{2}(2x)^2(-y)^2 = 6 \\times 4x^2 \\times y^2 = 24x^2y^2$$\nThus, the coefficient is $24$.",
    "topic": "Binomial Theorem"
  },
  {
    "id": 9,
    "difficulty": "MODERATE",
    "text": "A sequence is defined by $a_1 = 3$ and $a_n = 2a_{n-1} - 1$. What is $a_4$?",
    "options": [
      "$11$",
      "$17$",
      "$33$",
      "$9$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Apply the recursive relation step-by-step:\n- $a_1 = 3$\n- $a_2 = 2a_1 - 1 = 2(3) - 1 = 5$\n- $a_3 = 2a_2 - 1 = 2(5) - 1 = 9$\n- $a_4 = 2a_3 - 1 = 2(9) - 1 = 17$",
    "topic": "Recursive Sequences"
  },
  {
    "id": 10,
    "difficulty": "MODERATE",
    "text": "How many terms are in the arithmetic sequence $7, 10, 13, \\dots, 100$?",
    "options": [
      "$31$",
      "$32$",
      "$33$",
      "$34$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In this arithmetic sequence, $a_1 = 7$, $d = 3$, and the last term $a_n = 100$.\nUsing $a_n = a_1 + (n - 1)d$:\n$$100 = 7 + (n - 1)(3) \\implies 93 = 3(n - 1) \\implies n - 1 = 31 \\implies n = 32$$",
    "topic": "Arithmetic Sequences"
  },
  {
    "id": 11,
    "difficulty": "MODERATE",
    "text": "The sum of the first $n$ terms of a sequence is given by $S_n = 3n^2 - 2n$. What is the 5th term?",
    "options": [
      "$25$",
      "$65$",
      "$40$",
      "$21$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The $n$-th term is given by $a_n = S_n - S_{n-1}$. For the 5th term:\n$$S_5 = 3(5^2) - 2(5) = 75 - 10 = 65$$\n$$S_4 = 3(4^2) - 2(4) = 48 - 8 = 40$$\n$$a_5 = S_5 - S_4 = 65 - 40 = 25$$",
    "topic": "Sequence Sum & Terms"
  },
  {
    "id": 12,
    "difficulty": "MODERATE",
    "text": "Find the coefficient of $x^3$ in $(x - 3)^5$.",
    "options": [
      "$-90$",
      "$90$",
      "$-270$",
      "$270$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. In the binomial expansion of $(x - 3)^5$, the general term is $\\binom{5}{k} x^{5-k} (-3)^k$.\nTo get the $x^3$ term, set $5 - k = 3 \\implies k = 2$:\n$$\\binom{5}{2} x^3 (-3)^2 = 10 \\times x^3 \\times 9 = 90x^3$$\nThe coefficient of $x^3$ is $90$.",
    "topic": "Binomial Theorem"
  },
  {
    "id": 13,
    "difficulty": "MODERATE",
    "text": "The 4th term of a geometric sequence is $54$ and the 7th term is $1458$. What is the first term?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$6$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a geometric sequence, $\\frac{a_7}{a_4} = r^3$:\n$$r^3 = \\frac{1458}{54} = 27 \\implies r = 3$$\nUsing $a_4 = a_1 r^3$:\n$$54 = a_1 (3^3) = 27 a_1 \\implies a_1 = \\frac{54}{27} = 2$$",
    "topic": "Geometric Sequences"
  },
  {
    "id": 14,
    "difficulty": "MODERATE",
    "text": "What is the sum of the binomial coefficients in the expansion of $(x + y)^6$?",
    "options": [
      "$32$",
      "$64$",
      "$128$",
      "$256$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The sum of the binomial coefficients $\\sum_{k=0}^n \\binom{n}{k}$ in $(x + y)^n$ is equal to $2^n$.\nFor $n = 6$:\n$$\\text{Sum} = 2^6 = 64$$",
    "topic": "Binomial Coefficients"
  },
  {
    "id": 15,
    "difficulty": "MODERATE",
    "text": "If $x$, $2x + 1$, and $4x - 1$ are in arithmetic progression, what is the value of $x$?",
    "options": [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Three terms $a, b, c$ form an arithmetic progression if and only if $2b = a + c$:\n$$2(2x + 1) = x + (4x - 1)$$\n$$4x + 2 = 5x - 1$$\n$$5x - 4x = 2 + 1 \\implies x = 3$$",
    "topic": "Arithmetic Progression"
  },
  {
    "id": 16,
    "difficulty": "MODERATE",
    "text": "Evaluate the sum of the first 10 odd positive integers.",
    "options": [
      "$100$",
      "$110$",
      "$120$",
      "$90$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sum of the first $n$ odd positive integers is given by the formula $S = n^2$.\nFor the first $10$ odd positive integers ($1 + 3 + 5 + \\dots + 19$):\n$$S = 10^2 = 100$$",
    "topic": "Arithmetic Series"
  },
  {
    "id": 17,
    "difficulty": "MODERATE",
    "text": "Find the constant term in the expansion of $\\left(x + \\frac{1}{x}\\right)^4$.",
    "options": [
      "$4$",
      "$6$",
      "$8$",
      "$12$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The general term is $\\binom{4}{k} x^{4-k} \\left(\\frac{1}{x}\\right)^k = \\binom{4}{k} x^{4-2k}$.\nFor the term to be constant (independent of $x$), set the exponent $4 - 2k = 0 \\implies k = 2$:\n$$\\text{Constant term} = \\binom{4}{2} = \\frac{4 \\times 3}{2 \\times 1} = 6$$",
    "topic": "Binomial Expansion"
  },
  {
    "id": 18,
    "difficulty": "MODERATE",
    "text": "A ball is dropped from a height of $80\\text{ feet}$. Each bounce rebounds to half its previous height. What is the total distance traveled by the ball before it comes to rest?",
    "options": [
      "$160$",
      "$240$",
      "$320$",
      "$80$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The total distance includes the initial downward drop plus the up-and-down motion for each subsequent bounce:\n$$\\text{Total Distance} = 80 + 2(40 + 20 + 10 + \\dots)$$\nThe sum of the infinite geometric series $40 + 20 + 10 + \\dots$ is $\\frac{40}{1 - 1/2} = 80$.\n$$\\text{Total Distance} = 80 + 2(80) = 80 + 160 = 240\\text{ feet}$$",
    "topic": "Geometric Series Applications"
  },
  {
    "id": 19,
    "difficulty": "MODERATE",
    "text": "A sequence $b_n$ is geometric. If $b_2 = 12$ and $b_5 = 96$, what is $b_8$?",
    "options": [
      "$768$",
      "$384$",
      "$1536$",
      "$512$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In a geometric sequence, $\\frac{b_5}{b_2} = r^3 \\implies r^3 = \\frac{96}{12} = 8 \\implies r = 2$.\nThe 8th term is:\n$$b_8 = b_5 \\times r^3 = 96 \\times 8 = 768$$",
    "topic": "Geometric Sequences"
  },
  {
    "id": 20,
    "difficulty": "MODERATE",
    "text": "What is the 6th term in the expansion of $(2a - b)^7$?",
    "options": [
      "$84a^2b^5$",
      "$-84a^2b^5$",
      "$21a^2b^5$",
      "$-21a^2b^5$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The $(r+1)$-th term in $(x + y)^n$ is $\\binom{n}{r} x^{n-r} y^r$. For the 6th term, $r = 5$:\n$$T_6 = \\binom{7}{5}(2a)^{7-5}(-b)^5 = \\binom{7}{2}(2a)^2(-b^5) = 21 \\times 4a^2 \\times (-b^5) = -84a^2b^5$$",
    "topic": "Binomial Expansion"
  },
  {
    "id": 21,
    "difficulty": "MODERATE",
    "text": "An arithmetic sequence has its 10th term $a_{10} = 50$ and the sum of its first 10 terms $S_{10} = 275$. What is the first term $a_1$?",
    "options": [
      "$5$",
      "$10$",
      "$15$",
      "$20$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The sum formula in terms of first and last terms is $S_n = \\frac{n}{2}(a_1 + a_n)$.\nSubstituting $n = 10$, $a_{10} = 50$, and $S_{10} = 275$:\n$$275 = \\frac{10}{2}(a_1 + 50) = 5(a_1 + 50)$$\n$$a_1 + 50 = \\frac{275}{5} = 55 \\implies a_1 = 55 - 50 = 5$$",
    "topic": "Arithmetic Sequences & Series"
  },
  {
    "id": 22,
    "difficulty": "MODERATE",
    "text": "What is the coefficient of $x^4y^3$ in the expansion of $(x + 2y)^7$?",
    "options": [
      "$35$",
      "$140$",
      "$280$",
      "$560$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. The general term in the expansion of $(x + 2y)^7$ is $\\binom{7}{k} x^{7-k}(2y)^k$.\nFor $x^4y^3$, set $k = 3$:\n$$\\binom{7}{3} x^4 (2y)^3 = 35 \\times x^4 \\times 8y^3 = 280 x^4 y^3$$\nThe coefficient is $280$.",
    "topic": "Binomial Theorem"
  },
  {
    "id": 23,
    "difficulty": "MODERATE",
    "text": "Find the value of $\\binom{8}{3} + \\binom{8}{4}$.",
    "options": [
      "$120$",
      "$126$",
      "$132$",
      "$144$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. By Pascal's Identity $\\binom{n}{k-1} + \\binom{n}{k} = \\binom{n+1}{k}$:\n$$\\binom{8}{3} + \\binom{8}{4} = \\binom{9}{4} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = 126$$\nDirect calculation confirms: $\\binom{8}{3} = 56$ and $\\binom{8}{4} = 70$, so $56 + 70 = 126$.",
    "topic": "Combinatorics & Pascal's Identity"
  },
  {
    "id": 24,
    "difficulty": "MODERATE",
    "text": "The sum of 3 consecutive terms in an arithmetic progression is $24$, and their product is $440$. What is the positive common difference?",
    "options": [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Let the 3 consecutive terms be $a - d, a, a + d$.\n$$\\text{Sum} = (a - d) + a + (a + d) = 3a = 24 \\implies a = 8$$\n$$\\text{Product} = (8 - d)(8)(8 + d) = 8(64 - d^2) = 440$$\n$$64 - d^2 = \\frac{440}{8} = 55 \\implies d^2 = 64 - 55 = 9 \\implies d = 3$$",
    "topic": "Arithmetic Progression"
  },
  {
    "id": 25,
    "difficulty": "MODERATE",
    "text": "What is the middle term in the expansion of $\\left(x - \\frac{1}{2}\\right)^6$?",
    "options": [
      "$-\\frac{5}{2}x^3$",
      "$\\frac{5}{2}x^3$",
      "$-\\frac{15}{8}x^3$",
      "$\\frac{15}{8}x^3$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. In $(a + b)^6$, there are $6 + 1 = 7$ terms, so the middle term is the 4th term ($r = 3$):\n$$T_4 = \\binom{6}{3} x^3 \\left(-\\frac{1}{2}\\right)^3 = 20 \\times x^3 \\times \\left(-\\frac{1}{8}\\right) = -\\frac{20}{8}x^3 = -\\frac{5}{2}x^3$$",
    "topic": "Binomial Expansion"
  },
  {
    "id": 26,
    "difficulty": "SUPER TOUGHEST",
    "text": "What is the sum of the series $1\\cdot 2 + 2\\cdot 3 + 3\\cdot 4 + \\dots + 20\\cdot 21$?",
    "options": [
      "$2870$",
      "$3080$",
      "$3120$",
      "$2660$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. The $k$-th term of the series is $T_k = k(k + 1) = k^2 + k$.\nThe sum of consecutive products is given by $\\sum_{k=1}^n k(k+1) = \\frac{n(n+1)(n+2)}{3}$:\n$$\\text{Sum} = \\frac{20 \\times 21 \\times 22}{3} = 20 \\times 7 \\times 22 = 3080$$",
    "topic": "Special Series & Summation"
  },
  {
    "id": 27,
    "difficulty": "SUPER TOUGHEST",
    "text": "Find the coefficient of $x^7$ in the expansion of $\\left(x^2 - \\frac{2}{x}\\right)^{11}$.",
    "options": [
      "$-14784$",
      "$14784$",
      "$-7392$",
      "$7392$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. The general term is $\\binom{11}{r}(x^2)^{11-r}\\left(-\\frac{2}{x}\\right)^r = \\binom{11}{r}(-2)^r x^{22 - 3r}$.\nSetting the exponent $22 - 3r = 7 \\implies 3r = 15 \\implies r = 5$.\n$$\\text{Coefficient} = \\binom{11}{5}(-2)^5 = 462 \\times (-32) = -14784$$",
    "topic": "Binomial Theorem"
  },
  {
    "id": 28,
    "difficulty": "SUPER TOUGHEST",
    "text": "Let $S_n$ be the sum of the first $n$ terms of an arithmetic progression. If $S_{2n} = 3S_n$, what is the ratio $\\frac{S_{3n}}{S_n}$?",
    "options": [
      "$4$",
      "$5$",
      "$6$",
      "$7$"
    ],
    "answer": 2,
    "explanation": "Choice C is correct. Using the arithmetic sum formula $S_k = \\frac{k}{2}[2a + (k - 1)d]$:\n$$S_{2n} = n[2a + (2n-1)d]$$\n$$3S_n = \\frac{3n}{2}[2a + (n-1)d]$$\nEquating $S_{2n} = 3S_n$:\n$$2[2a + (2n-1)d] = 3[2a + (n-1)d] \\implies 4a + 4nd - 2d = 6a + 3nd - 3d \\implies 2a = (n + 1)d$$\nNow compute $S_{3n}$ and $S_n$:\n$$S_{3n} = \\frac{3n}{2}[(n+1)d + (3n-1)d] = \\frac{3n}{2}(4nd) = 6n^2 d$$\n$$S_n = \\frac{n}{2}[(n+1)d + (n-1)d] = \\frac{n}{2}(2nd) = n^2 d$$\n$$\\frac{S_{3n}}{S_n} = \\frac{6n^2 d}{n^2 d} = 6$$",
    "topic": "Arithmetic Series Ratios"
  },
  {
    "id": 29,
    "difficulty": "SUPER TOUGHEST",
    "text": "Find the value of the alternating sum of even binomial coefficients: $\\binom{50}{0} - \\binom{50}{2} + \\binom{50}{4} - \\dots + \\binom{50}{50}$.",
    "options": [
      "$0$",
      "$2^{25}$",
      "$-2^{25}$",
      "$2^{50}$"
    ],
    "answer": 0,
    "explanation": "Choice A is correct. Consider the binomial expansion of $(1 + i)^{50}$:\n$$(1 + i)^{50} = \\sum_{k=0}^{50} \\binom{50}{k} i^k = \\left[\\binom{50}{0} - \\binom{50}{2} + \\binom{50}{4} - \\dots\\right] + i\\left[\\binom{50}{1} - \\binom{50}{3} + \\dots\\right]$$\nIn polar form, $1 + i = \\sqrt{2} e^{i\\pi/4}$. Raising to power 50:\n$$(1 + i)^{50} = (\\sqrt{2})^{50} e^{i (50\\pi/4)} = 2^{25} e^{i (25\\pi/2)} = 2^{25} e^{i \\pi/2} = 2^{25} i = 0 + 2^{25} i$$\nThe real part of this number is $0$, which gives the alternating sum of even binomial coefficients $= 0$.",
    "topic": "Binomial Identities & Complex Numbers"
  },
  {
    "id": 30,
    "difficulty": "SUPER TOUGHEST",
    "text": "The sequence $a_1, a_2, \\dots$ satisfies $a_{n+1} = \\frac{a_n}{1 + a_n}$. If $a_1 = 1$, what is $a_{2026}$?",
    "options": [
      "$\\frac{1}{2025}$",
      "$\\frac{1}{2026}$",
      "$2026$",
      "$1$"
    ],
    "answer": 1,
    "explanation": "Choice B is correct. Invert the recursive relation:\n$$\\frac{1}{a_{n+1}} = \\frac{1 + a_n}{a_n} = \\frac{1}{a_n} + 1$$\nLet $b_n = \\frac{1}{a_n}$. Then $b_{n+1} = b_n + 1$ with $b_1 = \\frac{1}{a_1} = 1$.\nThis is an arithmetic sequence with $b_n = 1 + (n - 1)(1) = n$.\nTherefore, $a_n = \\frac{1}{b_n} = \\frac{1}{n}$. For $n = 2026$, $a_{2026} = \\frac{1}{2026}$.",
    "topic": "Harmonic & Recursive Sequences"
  }
];
