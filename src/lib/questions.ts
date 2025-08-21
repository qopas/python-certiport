import { Question } from './types';

export const quizQuestions: Question[] = [
  {
    "id": 1,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the result type of the expression 5 / 2 in Python?",
    "options": [
      "A. int",
      "B. float",
      "C. Decimal",
      "D. Fraction"
    ],
    "answer": "B",
    "explanation": "In Python, / returns float."
  },
  {
    "id": 2,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the output of print(7 // -3)?",
    "options": [
      "A. -2",
      "B. -3",
      "C. 2",
      "D. -1"
    ],
    "answer": "B",
    "explanation": "7 / -3 ≈ -2.333; floor division floors to -3."
  },
  {
    "id": 3,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "Which expression evaluates to True?",
    "options": [
      "A. (3 < 2) and (10/2 == 4)",
      "B. (5 != 5) or (2**3 == 8)",
      "C. not (3 <= 3)",
      "D. (10 % 3 == 1) and False"
    ],
    "answer": "B",
    "explanation": "Only B is True."
  },
  {
    "id": 4,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What does print(type({})) display?",
    "options": [
      "A. <class 'dict'>",
      "B. <class 'set'>",
      "C. <class 'tuple'>",
      "D. <class 'list'>"
    ],
    "answer": "A",
    "explanation": "{} creates dict; empty set is set()."
  },
  {
    "id": 5,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the value of x after: x = 3; x **= 2; x //= 3?",
    "options": [
      "A. 1",
      "B. 3",
      "C. 9",
      "D. 6"
    ],
    "answer": "B",
    "explanation": "x=3 -> x**=2 → 9 → 9//=3 → 3."
  },
  {
    "id": 6,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is printed by: print( True == 1, False == 0 )",
    "options": [
      "A. True False",
      "B. False True",
      "C. True True",
      "D. False False"
    ],
    "answer": "C",
    "explanation": "bool is subclass of int; True==1 and False==0."
  },
  {
    "id": 7,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the result of print('5' * 3 + '2')?",
    "options": [
      "A. 152",
      "B. 5552",
      "C. 17",
      "D. 532"
    ],
    "answer": "B",
    "explanation": "'5'*3 → '555'; + '2' → '5552'."
  },
  {
    "id": 8,
    "domain": "Data types & operators",
    "type": "multiple_select",
    "question": "Select the expression(s) that evaluate to 10.",
    "options": [
      "A. 5 + 5",
      "B. 2 * 5",
      "C. 20 // 2",
      "D. 3 * 3 + 1"
    ],
    "answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "All equal 10."
  },
  {
    "id": 9,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the value of a after: a = 10; a = a % 4; a += 6",
    "options": [
      "A. 0",
      "B. 2",
      "C. 6",
      "D. 8"
    ],
    "answer": "D",
    "explanation": "10%4=2; 2+6=8."
  },
  {
    "id": 10,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is printed by: print(2 ** 3 ** 2)",
    "options": [
      "A. 64",
      "B. 512",
      "C. 256",
      "D. 9"
    ],
    "answer": "B",
    "explanation": "Right-associative: 2**(3**2)=2**9=512."
  },
  {
    "id": 11,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "Evaluate: print( (not 0) and (not []) )",
    "options": [
      "A. True",
      "B. False",
      "C. []",
      "D. 0"
    ],
    "answer": "A",
    "explanation": "not 0 and not [] are both True."
  },
  {
    "id": 12,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the result of: print(3 * 2 // 4)",
    "options": [
      "A. 1",
      "B. 1.5",
      "C. 0",
      "D. 2"
    ],
    "answer": "A",
    "explanation": "3*2=6; 6//4=1."
  },
  {
    "id": 13,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "Which of the following is NOT a valid numeric literal in Python?",
    "options": [
      "A. 1_000_000",
      "B. 0b1010",
      "C. 09",
      "D. 0xFF"
    ],
    "answer": "C",
    "explanation": "Leading zeros invalid (except 0)."
  },
  {
    "id": 14,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What does print( (1 < 2) < 3 ) output?",
    "options": [
      "A. True",
      "B. False",
      "C. 1",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "Chained comparison: (1<2) and (2<3) → True."
  },
  {
    "id": 15,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is the result of print(-7 % 3)?",
    "options": [
      "A. 2",
      "B. -1",
      "C. 1",
      "D. -2"
    ],
    "answer": "A",
    "explanation": "a%b has sign of b; -7%3==2."
  },
  {
    "id": 16,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What does print( True + True * False ) output?",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. True"
    ],
    "answer": "B",
    "explanation": "True==1, False==0: 1 + 1*0 = 1."
  },
  {
    "id": 17,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "Which converts string s to int safely, yielding 0 if invalid?",
    "options": [
      "A. int(s) if s.isdigit() else 0",
      "B. int(s) or 0",
      "C. 0 if int(s) raises else int(s)",
      "D. s and int(s) or 0"
    ],
    "answer": "A",
    "explanation": "isdigit guards against ValueError for non-negative ints."
  },
  {
    "id": 18,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "What is printed by: x=1; x+=x==1; print(x)",
    "options": [
      "A. 1",
      "B. 2",
      "C. True",
      "D. 0"
    ],
    "answer": "B",
    "explanation": "x==1 is True→1; x+=1 → 2."
  },
  {
    "id": 19,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "Which expression yields a float 3.0?",
    "options": [
      "A. 9 // 3",
      "B. 3 * 1.0",
      "C. int(3.0)",
      "D. 3 and 3.0 and 3"
    ],
    "answer": "B",
    "explanation": "Only multiplication with float returns float."
  },
  {
    "id": 20,
    "domain": "Data types & operators",
    "type": "fill_in_blank",
    "question": "Fill the operator for floor division: 10 _____ 3",
    "answer": "//",
    "explanation": "Floor division uses // in Python."
  },
  {
    "id": 21,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "x = 0\nfor i in range(3):\n    x += i\nprint(x)",
    "options": [
      "A. 0",
      "B. 1",
      "C. 3",
      "D. 6"
    ],
    "answer": "C",
    "explanation": "Sum of 0,1,2 is 3."
  },
  {
    "id": 22,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "for i in range(1,5,2):\n    print(i, end=' ')",
    "options": [
      "A. 1 3 5 ",
      "B. 1 2 3 4 ",
      "C. 1 3 ",
      "D. 1 3 5 7 "
    ],
    "answer": "C",
    "explanation": "range(1,5,2) → 1 3 ."
  },
  {
    "id": 23,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "s = 0\nfor i in range(3):\n    if i == 1:\n        break\n    s += i\nelse:\n    s += 10\nprint(s)",
    "options": [
      "A. 11",
      "B. 10",
      "C. 0",
      "D. 2"
    ],
    "answer": "C",
    "explanation": "Break prevents else; s remains 0 after adding 0."
  },
  {
    "id": 24,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "i = 0\nwhile i < 3:\n    i += 1\n    if i == 2:\n        continue\n    print(i, end=' ')",
    "options": [
      "A. 1 2 3 ",
      "B. 1 3 ",
      "C. 2 3 ",
      "D. 3 "
    ],
    "answer": "B",
    "explanation": "Skips print at i==2."
  },
  {
    "id": 25,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "Which condition checks that n is between 1 and 10 inclusive?",
    "options": [
      "A. 1 <= n <= 10",
      "B. n >= 1 and <= 10",
      "C. n in range(1,10)",
      "D. 1 < n < 10"
    ],
    "answer": "A",
    "explanation": "Chained comparisons are idiomatic."
  },
  {
    "id": 26,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "x = 2\nif x % 2:\n    print('odd')\nelif x:\n    print('nonzero')\nelse:\n    print('zero')",
    "options": [
      "A. odd",
      "B. nonzero",
      "C. zero",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "x%2==0; elif x True prints 'nonzero'."
  },
  {
    "id": 27,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "total = 0\nfor i in range(3):\n    for j in range(2):\n        total += i*j\nprint(total)",
    "options": [
      "A. 0",
      "B. 1",
      "C. 3",
      "D. 4"
    ],
    "answer": "C",
    "explanation": "Products: 0,0,0,1,0,2 → sum=3."
  },
  {
    "id": 28,
    "domain": "Flow control",
    "type": "multiple_select",
    "question": "Choose all that break out of ONLY the innermost loop:",
    "options": [
      "A. break",
      "B. continue",
      "C. return",
      "D. raise"
    ],
    "answer": [
      "A"
    ],
    "explanation": "Only break exits the innermost loop. continue skips; return exits fn; raise throws."
  },
  {
    "id": 29,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "for x in [0,1,2]:\n    if x:\n        print('T', end='')\n    else:\n        print('F', end='')",
    "options": [
      "A. FTT",
      "B. TFT",
      "C. FFT",
      "D. TTF"
    ],
    "answer": "A",
    "explanation": "0 is falsy; 1 and 2 truthy."
  },
  {
    "id": 30,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "count = 0\nfor ch in 'abba':\n    if ch == 'b':\n        continue\n    count += 1\nprint(count)",
    "options": [
      "A. 0",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "C",
    "explanation": "Skips 'b', counts 3 letters."
  },
  {
    "id": 31,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "x = 1\nwhile x < 5:\n    x += 2\nprint(x)",
    "options": [
      "A. 5",
      "B. 3",
      "C. 7",
      "D. Infinite loop"
    ],
    "answer": "C",
    "explanation": "1→3→5→7 then stop."
  },
  {
    "id": 32,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "for i in range(3):\n    pass\nprint(i)",
    "options": [
      "A. 0",
      "B. 2",
      "C. NameError",
      "D. 3"
    ],
    "answer": "B",
    "explanation": "i retains last value 2 after loop."
  },
  {
    "id": 33,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "for i in range(3):\n    print(i)\n    if i == 1:\n        break\nelse:\n    print('done')",
    "options": [
      "A. 0 1 done",
      "B. 0 1",
      "C. 0 1 2 done",
      "D. 0 1 2"
    ],
    "answer": "B",
    "explanation": "for-else's else runs only if not broken."
  },
  {
    "id": 34,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "Which is equivalent to: if not (a or b)?",
    "options": [
      "A. if not a or not b",
      "B. if not a and not b",
      "C. if a and b",
      "D. if not a and b"
    ],
    "answer": "B",
    "explanation": "De Morgan."
  },
  {
    "id": 35,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "x = 0\nfor _ in range(2):\n    x = x + 1 if x % 2 == 0 else x + 2\nprint(x)",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": "B",
    "explanation": "0→1→3."
  },
  {
    "id": 36,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "nums = [1,2,3,4]\nfor i in nums[:]:\n    if i % 2 == 0:\n        nums.remove(i)\nprint(nums)",
    "options": [
      "A. [1, 3]",
      "B. [1,2,3,4]",
      "C. [2,4]",
      "D. [1,2,3]"
    ],
    "answer": "A",
    "explanation": "Iterating copy avoids skipping; removes evens."
  },
  {
    "id": 37,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "Which range generates 5,4,3,2?",
    "options": [
      "A. range(5,1)",
      "B. range(5,1,-1)",
      "C. range(5,2,-1)",
      "D. range(5,1,-2)"
    ],
    "answer": "B",
    "explanation": "Inclusive 2, exclusive 1 → step -1."
  },
  {
    "id": 38,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "a = [0,1,2]\nfor i, v in enumerate(a, start=1):\n    a[i-1] = v + i\nprint(a)",
    "options": [
      "A. [0,2,4]",
      "B. [1,3,5]",
      "C. [1,2,3]",
      "D. [2,3,4]"
    ],
    "answer": "B",
    "explanation": "Updates to [1,3,5]."
  },
  {
    "id": 39,
    "domain": "Flow control",
    "type": "multiple_select",
    "question": "Choose valid Python loop targets:",
    "options": [
      "A. for (i,j) in [(1,2)]: ...",
      "B. for i,j in [(1,2)]: ...",
      "C. for i = 0 to 10: ...",
      "D. for *a, b in [(1,2,3)]: ..."
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Tuple unpacking and starred targets are valid."
  },
  {
    "id": 40,
    "domain": "Flow control",
    "type": "multiple_choice",
    "question": "for i in range(3):\n    if i == 2:\n        print('x')\n        continue\n    else:\n        print(i)",
    "options": [
      "A. 0 1 x",
      "B. 0 1 2",
      "C. x 0 1",
      "D. 1 2 x"
    ],
    "answer": "A",
    "explanation": "Prints 0,1, then x."
  },
  {
    "id": 41,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(a, b=2, c=3):\n    print(a, b, c)\nf(1, c=5)",
    "options": [
      "A. 1 2 3",
      "B. 1 5 3",
      "C. 1 2 5",
      "D. 1 5 5"
    ],
    "answer": "C",
    "explanation": "Keyword overrides c only."
  },
  {
    "id": 42,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(x=[]):\n    x.append(1)\n    return x\na = f(); b = f()\nprint(a is b, a)",
    "options": [
      "A. True [1]",
      "B. False [1]",
      "C. True [1, 1]",
      "D. False [1, 1]"
    ],
    "answer": "C",
    "explanation": "Mutable default shared across calls."
  },
  {
    "id": 43,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def g(x, y, *args, **kwargs):\n    return len(args), len(kwargs)\nprint(g(1,2,3,4,a=5,b=6))",
    "options": [
      "A. (2, 2)",
      "B. (2, 0)",
      "C. (0, 2)",
      "D. (4, 2)"
    ],
    "answer": "A",
    "explanation": "*args captures 3,4; **kwargs has 2 items."
  },
  {
    "id": 44,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "x = 1\ndef f():\n    x = 2\n    def h():\n        nonlocal x\n        x += 3\n        return x\n    return h()\nprint(f(), x)",
    "options": [
      "A. 5 1",
      "B. 5 2",
      "C. 4 1",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "nonlocal binds to f's x; global x unchanged."
  },
  {
    "id": 45,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(x, y=0):\n    return x - y\nprint(f(y=2, x=5))",
    "options": [
      "A. 3",
      "B. -3",
      "C. 7",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "5-2=3."
  },
  {
    "id": 46,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(n):\n    if n == 0: return 1\n    return n * f(n-1)\nprint(f(3))",
    "options": [
      "A. 6",
      "B. 3",
      "C. 9",
      "D. 0"
    ],
    "answer": "A",
    "explanation": "3! = 6."
  },
  {
    "id": 47,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(a, b, /, c, *, d=4):\n    print(a, b, c, d)\nf(1, 2, 3, d=5)",
    "options": [
      "A. 1 2 3 5",
      "B. 1 2 3 4",
      "C. TypeError",
      "D. 1 2 4 5"
    ],
    "answer": "A",
    "explanation": "Positional-only then keyword-only."
  },
  {
    "id": 48,
    "domain": "Functions & scope",
    "type": "fill_in_blank",
    "question": "Fill the blank to declare a global binding inside a function: _____ x; x = 5",
    "answer": "global",
    "explanation": "Use 'global x' to assign to the module-level name."
  },
  {
    "id": 49,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(x):\n    x += [3]\n    return x\ny = [1,2]\nz = f(y)\nprint(y, z)",
    "options": [
      "A. [1, 2] [1, 2, 3]",
      "B. [1, 2, 3] [1, 2, 3]",
      "C. [1, 2] [3]",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "In-place list addition mutates input list."
  },
  {
    "id": 50,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def add(a:int, b:int)->int:\n    return a + b\nprint(add.__annotations__['return'])",
    "options": [
      "A. 'int'",
      "B. <class 'int'>",
      "C. None",
      "D. TypeError"
    ],
    "answer": "B",
    "explanation": "Annotations store actual class object."
  },
  {
    "id": 51,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "x = 0\ndef f():\n    x = 1\n    def g():\n        return x\n    return g()\nprint(f())",
    "options": [
      "A. 0",
      "B. 1",
      "C. None",
      "D. UnboundLocalError"
    ],
    "answer": "B",
    "explanation": "Closure captures x=1 from enclosing scope."
  },
  {
    "id": 52,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(a, b, *c):\n    return a + b + sum(c)\nprint(f(1,2,3,4))",
    "options": [
      "A. 3",
      "B. 7",
      "C. 10",
      "D. TypeError"
    ],
    "answer": "C",
    "explanation": "Sums all positional arguments."
  },
  {
    "id": 53,
    "domain": "Functions & scope",
    "type": "fill_in_blank",
    "question": "Fill the blank: A function that yields values lazily uses the keyword ____.",
    "answer": "yield",
    "explanation": "Generators use 'yield'."
  },
  {
    "id": 54,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(seq):\n    return [x for x in seq if x%2==0]\nprint(f(range(5)))",
    "options": [
      "A. [0, 2, 4]",
      "B. [1, 3]",
      "C. [0, 1, 2, 3, 4]",
      "D. (0, 2, 4)"
    ],
    "answer": "A",
    "explanation": "Filters evens."
  },
  {
    "id": 55,
    "domain": "Functions & scope",
    "type": "multiple_choice",
    "question": "def f(a, b=1, *, c=2):\n    return a + b + c\nprint(f(3, c=4))",
    "options": [
      "A. 6",
      "B. 8",
      "C. 7",
      "D. TypeError"
    ],
    "answer": "B",
    "explanation": "a=3, default b=1, c=4 → 8."
  },
  {
    "id": 56,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "print('abcdef'[::2])",
    "options": [
      "A. ace",
      "B. bdf",
      "C. abcdef",
      "D. abcd"
    ],
    "answer": "A",
    "explanation": "Stride 2 picks indices 0,2,4 → ace."
  },
  {
    "id": 57,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "a = [1,2]*3\na[1] = 99\nprint(a)",
    "options": [
      "A. [1, 99, 1, 2, 1, 2]",
      "B. [1, 99, 1, 99, 1, 99]",
      "C. [1, 2, 1, 2, 1, 2]",
      "D. [99, 2, 99, 2, 99, 2]"
    ],
    "answer": "A",
    "explanation": "Repetition copies ints by value."
  },
  {
    "id": 58,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "s = 'mississippi'\nprint(s.count('ss'))",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "B",
    "explanation": "Substring 'ss' appears twice."
  },
  {
    "id": 59,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "a = [1,2,3]\nb = a\na = a + [4]\nprint(a, b)",
    "options": [
      "A. [1,2,3,4] [1,2,3,4]",
      "B. [1,2,3,4] [1,2,3]",
      "C. [1,2,3] [1,2,3,4]",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "a + [4] creates a new list."
  },
  {
    "id": 60,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "a = [1,2,3]\na += [4]\nprint(a)",
    "options": [
      "A. [1,2,3]",
      "B. [1,2,3,4]",
      "C. [4,1,2,3]",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "In-place extend modifies list."
  },
  {
    "id": 61,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "Which removes and returns the last element of L?",
    "options": [
      "A. L.shift()",
      "B. L.pop()",
      "C. L.remove()",
      "D. del L[-1]"
    ],
    "answer": "B",
    "explanation": "pop returns element; remove deletes by value."
  },
  {
    "id": 62,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "d = {'a':1, 'b':2}\nprint(d.get('c', 5), d.setdefault('c', 7), d['c'])",
    "options": [
      "A. 5 7 7",
      "B. None 7 7",
      "C. 5 None None",
      "D. 5 5 5"
    ],
    "answer": "A",
    "explanation": "get doesn't insert; setdefault inserts default."
  },
  {
    "id": 63,
    "domain": "Data structures",
    "type": "multiple_select",
    "question": "Choose all true about sets:",
    "options": [
      "A. Sets are ordered collections",
      "B. Sets disallow duplicates",
      "C. {} creates an empty set",
      "D. set([1,2,2]) == {1,2}"
    ],
    "answer": [
      "B",
      "D"
    ],
    "explanation": "Sets are unordered; {} is dict."
  },
  {
    "id": 64,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "print({1,2,3} & {2,3,4})",
    "options": [
      "A. {1,4}",
      "B. {2,3}",
      "C. {1,2,3,4}",
      "D. {1,2}"
    ],
    "answer": "B",
    "explanation": "Intersection."
  },
  {
    "id": 65,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "t = (1,2,3)\na,b,*c = t\nprint(a,b,c)",
    "options": [
      "A. 1 2 [3]",
      "B. 1 2 3",
      "C. (1,2) [3]",
      "D. 1 [2,3]"
    ],
    "answer": "A",
    "explanation": "Star captures remainder in list."
  },
  {
    "id": 66,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "L = [ [0]*2 ] * 3\nL[0][0] = 9\nprint(L)",
    "options": [
      "A. [[9, 0],[0, 0],[0, 0]]",
      "B. [[9, 0],[9, 0],[9, 0]]",
      "C. [[9, 0],[0, 0],[9, 0]]",
      "D. [[0, 0],[0, 0],[0, 0]]"
    ],
    "answer": "B",
    "explanation": "Inner lists aliased via repetition."
  },
  {
    "id": 67,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "s = 'abcde'; print(s[1:-1])",
    "options": [
      "A. 'abcd'",
      "B. 'bcde'",
      "C. 'bcd'",
      "D. 'abcde'"
    ],
    "answer": "C",
    "explanation": "Slice excludes last element."
  },
  {
    "id": 68,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "d = {'x':1, 'y':2}\nd.update({'y':3, 'z':4})\nprint(sorted(d.items()))",
    "options": [
      "A. [('x',1),('y',2),('z',4)]",
      "B. [('x',1),('y',3),('z',4)]",
      "C. [('y',3),('z',4)]",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "update replaces and adds."
  },
  {
    "id": 69,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "nums = [3,1,2]\nprint(sorted(nums), nums.sort(), nums)",
    "options": [
      "A. [1,2,3] None [1,2,3]",
      "B. [3,2,1] None [1,2,3]",
      "C. None [1,2,3] [1,2,3]",
      "D. [1,2,3] [1,2,3] [1,2,3]"
    ],
    "answer": "A",
    "explanation": "sorted returns new; sort returns None."
  },
  {
    "id": 70,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "Which expression returns True?",
    "options": [
      "A. 'Py' in 'python'",
      "B. 'th' in 'python'",
      "C. 'on' not in 'python'",
      "D. 'py' == 'Py'"
    ],
    "answer": "B",
    "explanation": "Membership is case-sensitive."
  },
  {
    "id": 71,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "d = {'a':1, 'b':2}\nprint(list(d.keys()) == ['a','b'])",
    "options": [
      "A. True",
      "B. False",
      "C. Depends on Python version",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "Dicts preserve insertion order in 3.7+."
  },
  {
    "id": 72,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "from collections import Counter\nc = Counter('banana')\nprint(c.most_common(1)[0])",
    "options": [
      "A. ('a', 3)",
      "B. ('n', 2)",
      "C. ('b', 1)",
      "D. ('a', 2)"
    ],
    "answer": "A",
    "explanation": "Counts characters."
  },
  {
    "id": 73,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "s = {1,2}\ns.add(2); s.update([3,3])\nprint(len(s))",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": "B",
    "explanation": "{1,2,3} length 3."
  },
  {
    "id": 74,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "s = 'a,b,,c'; print(s.split(','))",
    "options": [
      "A. ['a','b','c']",
      "B. ['a','b','','c']",
      "C. ['a','b',',','c']",
      "D. ['a','b','',',','c']"
    ],
    "answer": "B",
    "explanation": "Consecutive separators yield empty field."
  },
  {
    "id": 75,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "import itertools as it\nprint(list(it.zip_longest('ab','xyz', fillvalue='-')))",
    "options": [
      "A. [('a','x'),('b','y')]",
      "B. [('a','x'),('b','y'),('-', 'z')]",
      "C. [('a','x'),('b','y'),('-', '-')]",
      "D. [('a','x'),('b','y'),('-', 'z')]"
    ],
    "answer": "D",
    "explanation": "zip_longest fills missing with '-'."
  },
  {
    "id": 76,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "s = '  spam  '\nprint(s.strip(), s)",
    "options": [
      "A. 'spam' '  spam  '",
      "B. ' spam ' ' spam '",
      "C. '  spam  ' 'spam'",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "strip is non-mutating."
  },
  {
    "id": 77,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "a = [1,2,3,4]\nprint(a[:: -2])",
    "options": [
      "A. [4,2]",
      "B. [1,3]",
      "C. [2,4]",
      "D. [3,1]"
    ],
    "answer": "A",
    "explanation": "Reverse step 2: indices 3,1."
  },
  {
    "id": 78,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "d = {'a':1}\nprint(d.pop('b', 99))",
    "options": [
      "A. KeyError",
      "B. None",
      "C. 99",
      "D. False"
    ],
    "answer": "C",
    "explanation": "pop returns default if missing."
  },
  {
    "id": 79,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "x = {'a':1, 'b':2}\ny = x.copy()\nx['a'] = 9\nprint(y['a'])",
    "options": [
      "A. 1",
      "B. 9",
      "C. None",
      "D. KeyError"
    ],
    "answer": "A",
    "explanation": "Shallow copy keeps original value."
  },
  {
    "id": 80,
    "domain": "Data structures",
    "type": "multiple_choice",
    "question": "L = [1,2,3]\nprint([i*i for i in L if i%2==1])",
    "options": [
      "A. [1, 9]",
      "B. [1, 4, 9]",
      "C. [2, 6]",
      "D. (1, 9)"
    ],
    "answer": "A",
    "explanation": "Squares of odd elements."
  },
  {
    "id": 81,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "Which mode opens for reading and writing, creating if needed?",
    "options": [
      "A. 'r+'",
      "B. 'w+'",
      "C. 'a+'",
      "D. 'x'"
    ],
    "answer": "B",
    "explanation": "'w+' creates/truncates; 'r+' requires existing; 'a+' appends."
  },
  {
    "id": 82,
    "domain": "Input/Output & files",
    "type": "fill_in_blank",
    "question": "with open('data.txt', 'r') as f:\n    lines = f._____()  # read all lines",
    "answer": "readlines",
    "explanation": "readlines() returns a list of lines."
  },
  {
    "id": 83,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "Which is TRUE about print()?",
    "options": [
      "A. print >> f, 'text' is valid",
      "B. print('a','b', sep='-') prints a-b",
      "C. print requires one argument",
      "D. print writes to files automatically"
    ],
    "answer": "B",
    "explanation": "print is a function; sep customizes separators."
  },
  {
    "id": 84,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "print('x', 'y', end='')\nprint('z')",
    "options": [
      "A. x y z",
      "B. xyz",
      "C. x y\\nz",
      "D. x\\ny\\nz"
    ],
    "answer": "B",
    "explanation": "end='' prevents newline."
  },
  {
    "id": 85,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "Which reads the entire file as a string?",
    "options": [
      "A. open('f').read()",
      "B. open('f').readlines()",
      "C. list(open('f'))",
      "D. open('f').read(10)"
    ],
    "answer": "A",
    "explanation": "read() with no size reads all."
  },
  {
    "id": 86,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "Which encoding is safest for UTF-8 text?",
    "options": [
      "A. ascii",
      "B. latin-1",
      "C. utf-8",
      "D. utf-16"
    ],
    "answer": "C",
    "explanation": "UTF-8 is standard."
  },
  {
    "id": 87,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "lines = ['a\\n', 'b\\n']\nwith open('out.txt','w', encoding='utf-8') as f:\n    f._____ (lines)",
    "options": [
      "A. write",
      "B. writelines",
      "C. print",
      "D. close"
    ],
    "answer": "B",
    "explanation": "writelines writes a list of strings as-is."
  },
  {
    "id": 88,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "open('file.txt','x') when file exists will…",
    "options": [
      "A. Append",
      "B. Overwrite",
      "C. Raise FileExistsError",
      "D. Return None"
    ],
    "answer": "C",
    "explanation": "'x' means exclusive creation."
  },
  {
    "id": 89,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "import sys\nprint(len(sys.argv) >= 1)",
    "options": [
      "A. True",
      "B. False",
      "C. Error",
      "D. Depends on OS"
    ],
    "answer": "A",
    "explanation": "argv always has program name."
  },
  {
    "id": 90,
    "domain": "Input/Output & files",
    "type": "multiple_choice",
    "question": "How to ensure file is closed even on exception?",
    "options": [
      "A. try/except only",
      "B. finally or with-statement",
      "C. call close() twice",
      "D. print(f.closed)"
    ],
    "answer": "B",
    "explanation": "Use finally or with."
  },
  {
    "id": 91,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    1/0\nexcept ZeroDivisionError:\n    print('Z')\nexcept Exception:\n    print('E')",
    "options": [
      "A. Z",
      "B. E",
      "C. Z E",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "First matching except runs."
  },
  {
    "id": 92,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    x = int('12a')\nexcept ValueError as e:\n    print(type(e).__name__)",
    "options": [
      "A. Exception",
      "B. ValueError",
      "C. TypeError",
      "D. NameError"
    ],
    "answer": "B",
    "explanation": "Invalid int literal raises ValueError."
  },
  {
    "id": 93,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    print('A')\nfinally:\n    print('B')",
    "options": [
      "A. A",
      "B. B",
      "C. A B",
      "D. Error"
    ],
    "answer": "C",
    "explanation": "finally always executes."
  },
  {
    "id": 94,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    print('A')\nexcept:\n    print('B')\nelse:\n    print('C')",
    "options": [
      "A. A",
      "B. A C",
      "C. B",
      "D. C"
    ],
    "answer": "B",
    "explanation": "No exception → else runs."
  },
  {
    "id": 95,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "def f():\n    try:\n        return 1\n    finally:\n        return 2\nprint(f())",
    "options": [
      "A. 1",
      "B. 2",
      "C. None",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "finally overrides return."
  },
  {
    "id": 96,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "Which except order is correct? (Exception, ValueError, ArithmeticError)",
    "options": [
      "A. ValueError, ArithmeticError, Exception",
      "B. Exception, ArithmeticError, ValueError",
      "C. ArithmeticError, ValueError, Exception",
      "D. Any order works"
    ],
    "answer": "A",
    "explanation": "Catch specific exceptions first."
  },
  {
    "id": 97,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    raise RuntimeError('x')\nexcept Exception as e:\n    print(isinstance(e, RuntimeError))",
    "options": [
      "A. True",
      "B. False",
      "C. None",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "RuntimeError is an Exception subclass."
  },
  {
    "id": 98,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    x = {'a':1}['b']\nexcept KeyError:\n    print('K')\nelse:\n    print('E')\nfinally:\n    print('F')",
    "options": [
      "A. K F",
      "B. E F",
      "C. F",
      "D. K"
    ],
    "answer": "A",
    "explanation": "KeyError matched; finally runs."
  },
  {
    "id": 99,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "Which statement raises an exception intentionally?",
    "options": [
      "A. assert False, 'msg'",
      "B. except 'msg'",
      "C. try 'msg'",
      "D. throw 'msg'"
    ],
    "answer": "A",
    "explanation": "assert triggers AssertionError."
  },
  {
    "id": 100,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "def f():\n    try:\n        1/0\n    except ZeroDivisionError:\n        return 'e'\n    finally:\n        print('clean')\nprint(f())",
    "options": [
      "A. clean e",
      "B. e clean",
      "C. clean",
      "D. e"
    ],
    "answer": "A",
    "explanation": "finally prints before function returns."
  },
  {
    "id": 101,
    "domain": "Exceptions & debugging",
    "type": "multiple_select",
    "question": "Choose all true about 'assert':",
    "options": [
      "A. It can be disabled with -O flag",
      "B. It always raises SyntaxError on failure",
      "C. It raises AssertionError on failure",
      "D. It's intended for production validation"
    ],
    "answer": [
      "A",
      "C"
    ],
    "explanation": "Assertions raise AssertionError; can be disabled with -O."
  },
  {
    "id": 102,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    int(None)\nexcept TypeError as e:\n    print(e.__class__.__name__)",
    "options": [
      "A. TypeError",
      "B. ValueError",
      "C. Exception",
      "D. NameError"
    ],
    "answer": "A",
    "explanation": "int(None) raises TypeError."
  },
  {
    "id": 103,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    x = [1,2][5]\nexcept IndexError:\n    print('I')",
    "options": [
      "A. I",
      "B. KeyError",
      "C. None",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "Out-of-range index → IndexError."
  },
  {
    "id": 104,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    raise KeyboardInterrupt\nexcept Exception:\n    print('E')\nexcept BaseException:\n    print('B')",
    "options": [
      "A. E",
      "B. B",
      "C. E B",
      "D. Error"
    ],
    "answer": "B",
    "explanation": "KeyboardInterrupt inherits from BaseException, not Exception."
  },
  {
    "id": 105,
    "domain": "Exceptions & debugging",
    "type": "multiple_choice",
    "question": "try:\n    pass\nexcept:\n    print('x')\nelse:\n    print('y')\nfinally:\n    print('z')",
    "options": [
      "A. x z",
      "B. y z",
      "C. z",
      "D. y"
    ],
    "answer": "B",
    "explanation": "No exception → else then finally."
  },
  {
    "id": 106,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import math\nprint(math.ceil(-1.2), math.floor(-1.2))",
    "options": [
      "A. -1 -2",
      "B. -2 -1",
      "C. -1 -1",
      "D. -2 -2"
    ],
    "answer": "A",
    "explanation": "ceil toward +∞ ; floor toward −∞."
  },
  {
    "id": 107,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "from datetime import datetime, timedelta\nd = datetime(2020,1,1) + timedelta(days=31)\nprint(d.strftime('%Y-%m-%d'))",
    "options": [
      "A. 2020-01-31",
      "B. 2020-02-01",
      "C. 2020-02-02",
      "D. 2020-01-30"
    ],
    "answer": "B",
    "explanation": "31 days later → Feb 1, 2020."
  },
  {
    "id": 108,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import random\nrandom.seed(0)\nprint(random.randint(1,3), random.randint(1,3))",
    "options": [
      "A. 2 2",
      "B. 1 3",
      "C. 2 1",
      "D. 3 1"
    ],
    "answer": "C",
    "explanation": "Seed yields deterministic sequence."
  },
  {
    "id": 109,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import json\ns = json.dumps({'b':1,'a':2}, sort_keys=True)\nprint(s)",
    "options": [
      "A. {'a': 2, 'b': 1}",
      "B. {\"b\": 1, \"a\": 2}",
      "C. {\"a\": 2, \"b\": 1}",
      "D. {'b':1,'a':2}"
    ],
    "answer": "C",
    "explanation": "JSON uses double quotes; keys sorted."
  },
  {
    "id": 110,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "from collections import defaultdict\nd = defaultdict(int)\nd['x'] += 1\nprint(d['x'], d['y'])",
    "options": [
      "A. 1 0",
      "B. 1 KeyError",
      "C. 1 None",
      "D. 0 0"
    ],
    "answer": "A",
    "explanation": "Missing keys default to 0."
  },
  {
    "id": 111,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import itertools as it\nprint(list(it.accumulate([1,2,3])))",
    "options": [
      "A. [1,2,3]",
      "B. [1,3,6]",
      "C. [6]",
      "D. [1,3,5]"
    ],
    "answer": "B",
    "explanation": "Running totals."
  },
  {
    "id": 112,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "from pathlib import Path\np = Path('a') / 'b' / 'c.txt'\nprint(str(p))",
    "options": [
      "A. a/b/c.txt",
      "B. a\\b\\c.txt",
      "C. Depends on OS",
      "D. Error"
    ],
    "answer": "C",
    "explanation": "OS-specific separator."
  },
  {
    "id": 113,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import os\nprint(os.path.splitext('file.tar.gz')[1])",
    "options": [
      "A. '.gz'",
      "B. '.tar.gz'",
      "C. 'gz'",
      "D. '.tar'"
    ],
    "answer": "A",
    "explanation": "splitext splits at last dot."
  },
  {
    "id": 114,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import sys\nprint(sys.version_info.major >= 3)",
    "options": [
      "A. True",
      "B. False",
      "C. 3",
      "D. Error"
    ],
    "answer": "A",
    "explanation": "Typically True on Python 3+."
  },
  {
    "id": 115,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import statistics as st\nprint(st.mean([1,2,3]))",
    "options": [
      "A. 2",
      "B. 2.0",
      "C. 1.5",
      "D. 3.0"
    ],
    "answer": "B",
    "explanation": "Mean is float."
  },
  {
    "id": 116,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "from itertools import groupby\ndata = 'aaabbc'\ngroups = [(k, len(list(g))) for k, g in groupby(data)]\nprint(groups)",
    "options": [
      "A. [('a',3),('b',2),('c',1)]",
      "B. [('a',2),('a',1),('b',2),('c',1)]",
      "C. ['aaa','bb','c']",
      "D. [('a',3),('b',2),('c',2)]"
    ],
    "answer": "A",
    "explanation": "Consecutive grouping."
  },
  {
    "id": 117,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import re\nm = re.findall(r'\\b\\w{3}\\b', 'to bee or not to bee')\nprint(m)",
    "options": [
      "A. ['bee','not','bee']",
      "B. ['to','bee','or','not','to','bee']",
      "C. ['bee','not']",
      "D. ['bee','bee']"
    ],
    "answer": "A",
    "explanation": "Three-letter words only."
  },
  {
    "id": 118,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import csv, io\ndata = 'a,b\\n1,2\\n'\nr = csv.reader(io.StringIO(data))\nrows = list(r)\nprint(rows[1])",
    "options": [
      "A. ['1','2']",
      "B. ['a','b']",
      "C. '1,2'",
      "D. ('1','2')"
    ],
    "answer": "A",
    "explanation": "CSV reader returns list of strings per row."
  },
  {
    "id": 119,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "import functools as ft\nprint(ft.reduce(lambda a,b:a+b, [1,2,3], 10))",
    "options": [
      "A. 6",
      "B. 16",
      "C. 10",
      "D. 0"
    ],
    "answer": "B",
    "explanation": "Initial 10 plus sum is 16."
  },
  {
    "id": 120,
    "domain": "Modules & standard library",
    "type": "multiple_choice",
    "question": "from pprint import pformat\nprint(pformat({'b':1,'a':2}, sort_dicts=True))",
    "options": [
      "A. {'a': 2, 'b': 1}",
      "B. {\"a\": 2, \"b\": 1}",
      "C. [('a',2),('b',1)]",
      "D. {'b': 1, 'a': 2}"
    ],
    "answer": "A",
    "explanation": "pformat returns pretty string with single quotes, sorted keys."
  }
];

// TODO: Replace this array with your full 120 Python questions
// Copy the entire JSON array from your file and paste it here