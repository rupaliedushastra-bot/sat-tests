# SAT Mathematics Practice Test – Binomial Theorem & Sequences

> **Topic:** Binomial Theorem & Sequences | **Total Questions:** 30  
> **Difficulty Levels:** Easy (Q1–Q4), Moderate (Q5–Q25), Super Toughest (Q26–Q30)

---

### Question 1 · `[EASY]`
**Topic:** `Arithmetic Sequences`  

**Question:**
> What is the 5th term of the arithmetic sequence $2, 5, 8, 11, \dots$?

**Options:**
- **A)** $14$ ✅ *(Correct Answer)*
- **B)** $15$
- **C)** $17$
- **D)** $20$

**Correct Answer:** **A) $14$**

**Detailed Solution & Explanation:**
Choice A is correct. The first term is $a_1 = 2$ and the common difference is $d = 5 - 2 = 3$.
The $n$-th term formula of an arithmetic sequence is $a_n = a_1 + (n - 1)d$.
For the 5th term ($n = 5$):
$$a_5 = 2 + (5 - 1)(3) = 2 + 12 = 14$$

---

### Question 2 · `[EASY]`
**Topic:** `Geometric Sequences`  

**Question:**
> What is the common ratio of the geometric sequence $3, 12, 48, 192, \dots$?

**Options:**
- **A)** $3$
- **B)** $4$ ✅ *(Correct Answer)*
- **C)** $6$
- **D)** $9$

**Correct Answer:** **B) $4$**

**Detailed Solution & Explanation:**
Choice B is correct. In a geometric sequence, the common ratio $r$ is the ratio of any term to its preceding term:
$$r = \frac{a_2}{a_1} = \frac{12}{3} = 4$$
Checking with other terms: $\frac{48}{12} = 4$ and $\frac{192}{48} = 4$.

---

### Question 3 · `[EASY]`
**Topic:** `Binomial Expansion`  

**Question:**
> What is the coefficient of $x^2$ in the expansion of $(x + 2)^3$?

**Options:**
- **A)** $2$
- **B)** $4$
- **C)** $6$ ✅ *(Correct Answer)*
- **D)** $12$

**Correct Answer:** **C) $6$**

**Detailed Solution & Explanation:**
Choice C is correct. Using the binomial expansion formula $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$:
$$(x + 2)^3 = x^3 + 3(x^2)(2) + 3(x)(2^2) + 2^3 = x^3 + 6x^2 + 12x + 8$$
The coefficient of $x^2$ is $6$.

---

### Question 4 · `[EASY]`
**Topic:** `Arithmetic Sequences`  

**Question:**
> If the first term of an arithmetic sequence is $10$ and the common difference is $-2$, what is the 10th term?

**Options:**
- **A)** $-8$ ✅ *(Correct Answer)*
- **B)** $-10$
- **C)** $-12$
- **D)** $10$

**Correct Answer:** **A) $-8$**

**Detailed Solution & Explanation:**
Choice A is correct. Using the $n$-th term formula $a_n = a_1 + (n - 1)d$ with $a_1 = 10$, $d = -2$, and $n = 10$:
$$a_{10} = 10 + (10 - 1)(-2) = 10 + 9(-2) = 10 - 18 = -8$$

---

### Question 5 · `[MODERATE]`
**Topic:** `Arithmetic Sequences`  

**Question:**
> The 3rd term of an arithmetic sequence is $14$, and the 8th term is $34$. What is the 1st term?

**Options:**
- **A)** $4$
- **B)** $6$ ✅ *(Correct Answer)*
- **C)** $8$
- **D)** $10$

**Correct Answer:** **B) $6$**

**Detailed Solution & Explanation:**
Choice B is correct. In an arithmetic sequence, $a_8 - a_3 = (8 - 3)d = 5d$. Setting $5d = 34 - 14 = 20 \implies d = 4$.
Now find the first term:
$$a_1 = a_3 - 2d = 14 - 2(4) = 14 - 8 = 6$$

---

### Question 6 · `[MODERATE]`
**Topic:** `Arithmetic Series`  

**Question:**
> Find the sum of the first 20 terms of the sequence $5, 9, 13, 17, \dots$

**Options:**
- **A)** $860$ ✅ *(Correct Answer)*
- **B)** $820$
- **C)** $780$
- **D)** $900$

**Correct Answer:** **A) $860$**

**Detailed Solution & Explanation:**
Choice A is correct. This is an arithmetic series with $a_1 = 5$, common difference $d = 4$, and $n = 20$.
The sum formula is $S_n = \frac{n}{2}[2a_1 + (n - 1)d]$:
$$S_{20} = \frac{20}{2}[2(5) + (20 - 1)(4)] = 10[10 + 19(4)] = 10[10 + 76] = 10(86) = 860$$

---

### Question 7 · `[MODERATE]`
**Topic:** `Infinite Geometric Series`  

**Question:**
> What is the sum of the infinite geometric series $8 + 4 + 2 + 1 + \dots$?

**Options:**
- **A)** $12$
- **B)** $14$
- **C)** $16$ ✅ *(Correct Answer)*
- **D)** $32$

**Correct Answer:** **C) $16$**

**Detailed Solution & Explanation:**
Choice C is correct. The series has first term $a = 8$ and common ratio $r = \frac{4}{8} = \frac{1}{2}$.
Since $|r| < 1$, the sum of an infinite geometric series is given by $S_\infty = \frac{a}{1 - r}$:
$$S_\infty = \frac{8}{1 - 1/2} = \frac{8}{1/2} = 16$$

---

### Question 8 · `[MODERATE]`
**Topic:** `Binomial Theorem`  

**Question:**
> In the expansion of $(2x - y)^4$, what is the coefficient of $x^2y^2$?

**Options:**
- **A)** $6$
- **B)** $-24$
- **C)** $24$ ✅ *(Correct Answer)*
- **D)** $-6$

**Correct Answer:** **C) $24$**

**Detailed Solution & Explanation:**
Choice C is correct. By the Binomial Theorem, the $(r+1)$-th term in $(2x - y)^4$ is $\binom{4}{r}(2x)^{4-r}(-y)^r$.
For the $x^2y^2$ term, $r = 2$:
$$\binom{4}{2}(2x)^2(-y)^2 = 6 \times 4x^2 \times y^2 = 24x^2y^2$$
Thus, the coefficient is $24$.

---

### Question 9 · `[MODERATE]`
**Topic:** `Recursive Sequences`  

**Question:**
> A sequence is defined by $a_1 = 3$ and $a_n = 2a_{n-1} - 1$. What is $a_4$?

**Options:**
- **A)** $11$
- **B)** $17$ ✅ *(Correct Answer)*
- **C)** $33$
- **D)** $9$

**Correct Answer:** **B) $17$**

**Detailed Solution & Explanation:**
Choice B is correct. Apply the recursive relation step-by-step:
- $a_1 = 3$
- $a_2 = 2a_1 - 1 = 2(3) - 1 = 5$
- $a_3 = 2a_2 - 1 = 2(5) - 1 = 9$
- $a_4 = 2a_3 - 1 = 2(9) - 1 = 17$

---

### Question 10 · `[MODERATE]`
**Topic:** `Arithmetic Sequences`  

**Question:**
> How many terms are in the arithmetic sequence $7, 10, 13, \dots, 100$?

**Options:**
- **A)** $31$
- **B)** $32$ ✅ *(Correct Answer)*
- **C)** $33$
- **D)** $34$

**Correct Answer:** **B) $32$**

**Detailed Solution & Explanation:**
Choice B is correct. In this arithmetic sequence, $a_1 = 7$, $d = 3$, and the last term $a_n = 100$.
Using $a_n = a_1 + (n - 1)d$:
$$100 = 7 + (n - 1)(3) \implies 93 = 3(n - 1) \implies n - 1 = 31 \implies n = 32$$

---

### Question 11 · `[MODERATE]`
**Topic:** `Sequence Sum & Terms`  

**Question:**
> The sum of the first $n$ terms of a sequence is given by $S_n = 3n^2 - 2n$. What is the 5th term?

**Options:**
- **A)** $25$ ✅ *(Correct Answer)*
- **B)** $65$
- **C)** $40$
- **D)** $21$

**Correct Answer:** **A) $25$**

**Detailed Solution & Explanation:**
Choice A is correct. The $n$-th term is given by $a_n = S_n - S_{n-1}$. For the 5th term:
$$S_5 = 3(5^2) - 2(5) = 75 - 10 = 65$$
$$S_4 = 3(4^2) - 2(4) = 48 - 8 = 40$$
$$a_5 = S_5 - S_4 = 65 - 40 = 25$$

---

### Question 12 · `[MODERATE]`
**Topic:** `Binomial Theorem`  

**Question:**
> Find the coefficient of $x^3$ in $(x - 3)^5$.

**Options:**
- **A)** $-90$
- **B)** $90$ ✅ *(Correct Answer)*
- **C)** $-270$
- **D)** $270$

**Correct Answer:** **B) $90$**

**Detailed Solution & Explanation:**
Choice B is correct. In the binomial expansion of $(x - 3)^5$, the general term is $\binom{5}{k} x^{5-k} (-3)^k$.
To get the $x^3$ term, set $5 - k = 3 \implies k = 2$:
$$\binom{5}{2} x^3 (-3)^2 = 10 \times x^3 \times 9 = 90x^3$$
The coefficient of $x^3$ is $90$.

---

### Question 13 · `[MODERATE]`
**Topic:** `Geometric Sequences`  

**Question:**
> The 4th term of a geometric sequence is $54$ and the 7th term is $1458$. What is the first term?

**Options:**
- **A)** $2$ ✅ *(Correct Answer)*
- **B)** $3$
- **C)** $4$
- **D)** $6$

**Correct Answer:** **A) $2$**

**Detailed Solution & Explanation:**
Choice A is correct. In a geometric sequence, $\frac{a_7}{a_4} = r^3$:
$$r^3 = \frac{1458}{54} = 27 \implies r = 3$$
Using $a_4 = a_1 r^3$:
$$54 = a_1 (3^3) = 27 a_1 \implies a_1 = \frac{54}{27} = 2$$

---

### Question 14 · `[MODERATE]`
**Topic:** `Binomial Coefficients`  

**Question:**
> What is the sum of the binomial coefficients in the expansion of $(x + y)^6$?

**Options:**
- **A)** $32$
- **B)** $64$ ✅ *(Correct Answer)*
- **C)** $128$
- **D)** $256$

**Correct Answer:** **B) $64$**

**Detailed Solution & Explanation:**
Choice B is correct. The sum of the binomial coefficients $\sum_{k=0}^n \binom{n}{k}$ in $(x + y)^n$ is equal to $2^n$.
For $n = 6$:
$$\text{Sum} = 2^6 = 64$$

---

### Question 15 · `[MODERATE]`
**Topic:** `Arithmetic Progression`  

**Question:**
> If $x$, $2x + 1$, and $4x - 1$ are in arithmetic progression, what is the value of $x$?

**Options:**
- **A)** $1$
- **B)** $2$
- **C)** $3$ ✅ *(Correct Answer)*
- **D)** $4$

**Correct Answer:** **C) $3$**

**Detailed Solution & Explanation:**
Choice C is correct. Three terms $a, b, c$ form an arithmetic progression if and only if $2b = a + c$:
$$2(2x + 1) = x + (4x - 1)$$
$$4x + 2 = 5x - 1$$
$$5x - 4x = 2 + 1 \implies x = 3$$

---

### Question 16 · `[MODERATE]`
**Topic:** `Arithmetic Series`  

**Question:**
> Evaluate the sum of the first 10 odd positive integers.

**Options:**
- **A)** $100$ ✅ *(Correct Answer)*
- **B)** $110$
- **C)** $120$
- **D)** $90$

**Correct Answer:** **A) $100$**

**Detailed Solution & Explanation:**
Choice A is correct. The sum of the first $n$ odd positive integers is given by the formula $S = n^2$.
For the first $10$ odd positive integers ($1 + 3 + 5 + \dots + 19$):
$$S = 10^2 = 100$$

---

### Question 17 · `[MODERATE]`
**Topic:** `Binomial Expansion`  

**Question:**
> Find the constant term in the expansion of $\left(x + \frac{1}{x}\right)^4$.

**Options:**
- **A)** $4$
- **B)** $6$ ✅ *(Correct Answer)*
- **C)** $8$
- **D)** $12$

**Correct Answer:** **B) $6$**

**Detailed Solution & Explanation:**
Choice B is correct. The general term is $\binom{4}{k} x^{4-k} \left(\frac{1}{x}\right)^k = \binom{4}{k} x^{4-2k}$.
For the term to be constant (independent of $x$), set the exponent $4 - 2k = 0 \implies k = 2$:
$$\text{Constant term} = \binom{4}{2} = \frac{4 \times 3}{2 \times 1} = 6$$

---

### Question 18 · `[MODERATE]`
**Topic:** `Geometric Series Applications`  

**Question:**
> A ball is dropped from a height of $80\text{ feet}$. Each bounce rebounds to half its previous height. What is the total distance traveled by the ball before it comes to rest?

**Options:**
- **A)** $160$
- **B)** $240$ ✅ *(Correct Answer)*
- **C)** $320$
- **D)** $80$

**Correct Answer:** **B) $240$**

**Detailed Solution & Explanation:**
Choice B is correct. The total distance includes the initial downward drop plus the up-and-down motion for each subsequent bounce:
$$\text{Total Distance} = 80 + 2(40 + 20 + 10 + \dots)$$
The sum of the infinite geometric series $40 + 20 + 10 + \dots$ is $\frac{40}{1 - 1/2} = 80$.
$$\text{Total Distance} = 80 + 2(80) = 80 + 160 = 240\text{ feet}$$

---

### Question 19 · `[MODERATE]`
**Topic:** `Geometric Sequences`  

**Question:**
> A sequence $b_n$ is geometric. If $b_2 = 12$ and $b_5 = 96$, what is $b_8$?

**Options:**
- **A)** $768$ ✅ *(Correct Answer)*
- **B)** $384$
- **C)** $1536$
- **D)** $512$

**Correct Answer:** **A) $768$**

**Detailed Solution & Explanation:**
Choice A is correct. In a geometric sequence, $\frac{b_5}{b_2} = r^3 \implies r^3 = \frac{96}{12} = 8 \implies r = 2$.
The 8th term is:
$$b_8 = b_5 \times r^3 = 96 \times 8 = 768$$

---

### Question 20 · `[MODERATE]`
**Topic:** `Binomial Expansion`  

**Question:**
> What is the 6th term in the expansion of $(2a - b)^7$?

**Options:**
- **A)** $84a^2b^5$
- **B)** $-84a^2b^5$ ✅ *(Correct Answer)*
- **C)** $21a^2b^5$
- **D)** $-21a^2b^5$

**Correct Answer:** **B) $-84a^2b^5$**

**Detailed Solution & Explanation:**
Choice B is correct. The $(r+1)$-th term in $(x + y)^n$ is $\binom{n}{r} x^{n-r} y^r$. For the 6th term, $r = 5$:
$$T_6 = \binom{7}{5}(2a)^{7-5}(-b)^5 = \binom{7}{2}(2a)^2(-b^5) = 21 \times 4a^2 \times (-b^5) = -84a^2b^5$$

---

### Question 21 · `[MODERATE]`
**Topic:** `Arithmetic Sequences & Series`  

**Question:**
> An arithmetic sequence has its 10th term $a_{10} = 50$ and the sum of its first 10 terms $S_{10} = 275$. What is the first term $a_1$?

**Options:**
- **A)** $5$ ✅ *(Correct Answer)*
- **B)** $10$
- **C)** $15$
- **D)** $20$

**Correct Answer:** **A) $5$**

**Detailed Solution & Explanation:**
Choice A is correct. The sum formula in terms of first and last terms is $S_n = \frac{n}{2}(a_1 + a_n)$.
Substituting $n = 10$, $a_{10} = 50$, and $S_{10} = 275$:
$$275 = \frac{10}{2}(a_1 + 50) = 5(a_1 + 50)$$
$$a_1 + 50 = \frac{275}{5} = 55 \implies a_1 = 55 - 50 = 5$$

---

### Question 22 · `[MODERATE]`
**Topic:** `Binomial Theorem`  

**Question:**
> What is the coefficient of $x^4y^3$ in the expansion of $(x + 2y)^7$?

**Options:**
- **A)** $35$
- **B)** $140$
- **C)** $280$ ✅ *(Correct Answer)*
- **D)** $560$

**Correct Answer:** **C) $280$**

**Detailed Solution & Explanation:**
Choice C is correct. The general term in the expansion of $(x + 2y)^7$ is $\binom{7}{k} x^{7-k}(2y)^k$.
For $x^4y^3$, set $k = 3$:
$$\binom{7}{3} x^4 (2y)^3 = 35 \times x^4 \times 8y^3 = 280 x^4 y^3$$
The coefficient is $280$.

---

### Question 23 · `[MODERATE]`
**Topic:** `Combinatorics & Pascal's Identity`  

**Question:**
> Find the value of $\binom{8}{3} + \binom{8}{4}$.

**Options:**
- **A)** $120$
- **B)** $126$ ✅ *(Correct Answer)*
- **C)** $132$
- **D)** $144$

**Correct Answer:** **B) $126$**

**Detailed Solution & Explanation:**
Choice B is correct. By Pascal's Identity $\binom{n}{k-1} + \binom{n}{k} = \binom{n+1}{k}$:
$$\binom{8}{3} + \binom{8}{4} = \binom{9}{4} = \frac{9 \times 8 \times 7 \times 6}{4 \times 3 \times 2 \times 1} = 126$$
Direct calculation confirms: $\binom{8}{3} = 56$ and $\binom{8}{4} = 70$, so $56 + 70 = 126$.

---

### Question 24 · `[MODERATE]`
**Topic:** `Arithmetic Progression`  

**Question:**
> The sum of 3 consecutive terms in an arithmetic progression is $24$, and their product is $440$. What is the positive common difference?

**Options:**
- **A)** $2$
- **B)** $3$ ✅ *(Correct Answer)*
- **C)** $4$
- **D)** $5$

**Correct Answer:** **B) $3$**

**Detailed Solution & Explanation:**
Choice B is correct. Let the 3 consecutive terms be $a - d, a, a + d$.
$$\text{Sum} = (a - d) + a + (a + d) = 3a = 24 \implies a = 8$$
$$\text{Product} = (8 - d)(8)(8 + d) = 8(64 - d^2) = 440$$
$$64 - d^2 = \frac{440}{8} = 55 \implies d^2 = 64 - 55 = 9 \implies d = 3$$

---

### Question 25 · `[MODERATE]`
**Topic:** `Binomial Expansion`  

**Question:**
> What is the middle term in the expansion of $\left(x - \frac{1}{2}\right)^6$?

**Options:**
- **A)** $-\frac{5}{2}x^3$ ✅ *(Correct Answer)*
- **B)** $\frac{5}{2}x^3$
- **C)** $-\frac{15}{8}x^3$
- **D)** $\frac{15}{8}x^3$

**Correct Answer:** **A) $-\frac{5}{2}x^3$**

**Detailed Solution & Explanation:**
Choice A is correct. In $(a + b)^6$, there are $6 + 1 = 7$ terms, so the middle term is the 4th term ($r = 3$):
$$T_4 = \binom{6}{3} x^3 \left(-\frac{1}{2}\right)^3 = 20 \times x^3 \times \left(-\frac{1}{8}\right) = -\frac{20}{8}x^3 = -\frac{5}{2}x^3$$

---

### Question 26 · `[SUPER TOUGHEST]`
**Topic:** `Special Series & Summation`  

**Question:**
> What is the sum of the series $1\cdot 2 + 2\cdot 3 + 3\cdot 4 + \dots + 20\cdot 21$?

**Options:**
- **A)** $2870$
- **B)** $3080$ ✅ *(Correct Answer)*
- **C)** $3120$
- **D)** $2660$

**Correct Answer:** **B) $3080$**

**Detailed Solution & Explanation:**
Choice B is correct. The $k$-th term of the series is $T_k = k(k + 1) = k^2 + k$.
The sum of consecutive products is given by $\sum_{k=1}^n k(k+1) = \frac{n(n+1)(n+2)}{3}$:
$$\text{Sum} = \frac{20 \times 21 \times 22}{3} = 20 \times 7 \times 22 = 3080$$

---

### Question 27 · `[SUPER TOUGHEST]`
**Topic:** `Binomial Theorem`  

**Question:**
> Find the coefficient of $x^7$ in the expansion of $\left(x^2 - \frac{2}{x}\right)^{11}$.

**Options:**
- **A)** $-14784$ ✅ *(Correct Answer)*
- **B)** $14784$
- **C)** $-7392$
- **D)** $7392$

**Correct Answer:** **A) $-14784$**

**Detailed Solution & Explanation:**
Choice A is correct. The general term is $\binom{11}{r}(x^2)^{11-r}\left(-\frac{2}{x}\right)^r = \binom{11}{r}(-2)^r x^{22 - 3r}$.
Setting the exponent $22 - 3r = 7 \implies 3r = 15 \implies r = 5$.
$$\text{Coefficient} = \binom{11}{5}(-2)^5 = 462 \times (-32) = -14784$$

---

### Question 28 · `[SUPER TOUGHEST]`
**Topic:** `Arithmetic Series Ratios`  

**Question:**
> Let $S_n$ be the sum of the first $n$ terms of an arithmetic progression. If $S_{2n} = 3S_n$, what is the ratio $\frac{S_{3n}}{S_n}$?

**Options:**
- **A)** $4$
- **B)** $5$
- **C)** $6$ ✅ *(Correct Answer)*
- **D)** $7$

**Correct Answer:** **C) $6$**

**Detailed Solution & Explanation:**
Choice C is correct. Using the arithmetic sum formula $S_k = \frac{k}{2}[2a + (k - 1)d]$:
$$S_{2n} = n[2a + (2n-1)d]$$
$$3S_n = \frac{3n}{2}[2a + (n-1)d]$$
Equating $S_{2n} = 3S_n$:
$$2[2a + (2n-1)d] = 3[2a + (n-1)d] \implies 4a + 4nd - 2d = 6a + 3nd - 3d \implies 2a = (n + 1)d$$
Now compute $S_{3n}$ and $S_n$:
$$S_{3n} = \frac{3n}{2}[(n+1)d + (3n-1)d] = \frac{3n}{2}(4nd) = 6n^2 d$$
$$S_n = \frac{n}{2}[(n+1)d + (n-1)d] = \frac{n}{2}(2nd) = n^2 d$$
$$\frac{S_{3n}}{S_n} = \frac{6n^2 d}{n^2 d} = 6$$

---

### Question 29 · `[SUPER TOUGHEST]`
**Topic:** `Binomial Identities & Complex Numbers`  

**Question:**
> Find the value of the alternating sum of even binomial coefficients: $\binom{50}{0} - \binom{50}{2} + \binom{50}{4} - \dots + \binom{50}{50}$.

**Options:**
- **A)** $0$ ✅ *(Correct Answer)*
- **B)** $2^{25}$
- **C)** $-2^{25}$
- **D)** $2^{50}$

**Correct Answer:** **A) $0$**

**Detailed Solution & Explanation:**
Choice A is correct. Consider the binomial expansion of $(1 + i)^{50}$:
$$(1 + i)^{50} = \sum_{k=0}^{50} \binom{50}{k} i^k = \left[\binom{50}{0} - \binom{50}{2} + \binom{50}{4} - \dots\right] + i\left[\binom{50}{1} - \binom{50}{3} + \dots\right]$$
In polar form, $1 + i = \sqrt{2} e^{i\pi/4}$. Raising to power 50:
$$(1 + i)^{50} = (\sqrt{2})^{50} e^{i (50\pi/4)} = 2^{25} e^{i (25\pi/2)} = 2^{25} e^{i \pi/2} = 2^{25} i = 0 + 2^{25} i$$
The real part of this number is $0$, which gives the alternating sum of even binomial coefficients $= 0$.

---

### Question 30 · `[SUPER TOUGHEST]`
**Topic:** `Harmonic & Recursive Sequences`  

**Question:**
> The sequence $a_1, a_2, \dots$ satisfies $a_{n+1} = \frac{a_n}{1 + a_n}$. If $a_1 = 1$, what is $a_{2026}$?

**Options:**
- **A)** $\frac{1}{2025}$
- **B)** $\frac{1}{2026}$ ✅ *(Correct Answer)*
- **C)** $2026$
- **D)** $1$

**Correct Answer:** **B) $\frac{1}{2026}$**

**Detailed Solution & Explanation:**
Choice B is correct. Invert the recursive relation:
$$\frac{1}{a_{n+1}} = \frac{1 + a_n}{a_n} = \frac{1}{a_n} + 1$$
Let $b_n = \frac{1}{a_n}$. Then $b_{n+1} = b_n + 1$ with $b_1 = \frac{1}{a_1} = 1$.
This is an arithmetic sequence with $b_n = 1 + (n - 1)(1) = n$.
Therefore, $a_n = \frac{1}{b_n} = \frac{1}{n}$. For $n = 2026$, $a_{2026} = \frac{1}{2026}$.

---
