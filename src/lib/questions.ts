import { Question } from './types';

export const quizQuestions: Question[] = [
  {
    "id": 0,
    "domain": "Data types & operators",
    "type": "true_false",
    "question": "Python makes the distinction between integers and floating variables.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True",
    "explanation": "Python distinguishes between integers (`int`) and floating-point numbers (`float`) as separate data types."
  },
  {
    "id": 1,
    "domain": "Data types & operators", 
    "type": "true_false",
    "question": "When declaring variables in Python, a data type must be specified.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "B. False",
    "explanation": "Python uses dynamic typing, so you don't need to declare a variable's type explicitly. The type is determined automatically based on the value assigned."
  },
  {
    "id": 2,
    "domain": "Data types & operators",
    "type": "true_false", 
    "question": "When setting a Boolean variable, the value must start with a capital letter.",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A. True",
    "explanation": "Boolean values in Python are `True` and `False`, both with capital first letters. Using lowercase `true` or `false` would cause a NameError."
  },
  {
  "id": 3,
  "domain": "Data types & operators",
  "type": "fill_in_blank",
  "question": "A developer wants to make sure a serial number cannot be used in a calculation and that a dollar amount entered as a whole number can have decimals. Then, a message should be displayed to tell a customer the serial number and price for the product.<br><br>Using the dropdown arrows, fill in the code to use the proper functions to convert the data to the necessary data types.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>serialnumber = ____(55555)<br>amount = ____(44)<br>message = \"The serial number of the project is\" ____ serialnumber ____ \"and it will cost\", amount, \".\"</div>",
  "options": {
    "serialnumber_type": ["str", "string", "text"],
    "amount_type": ["float", "flt", "decimal", "double"],
    "message_part1": [",", "&", "+"],
    "message_part2": [",", "&", "+"]
  },
  "answer": {
    "serialnumber_type": "str",
    "amount_type": "float",
    "message_part1": ",",
    "message_part2": ","
  },
  "explanation": "The serial number should be converted to a string (`str`) so it cannot be used in calculations. The amount should be converted to a float (`float`) to handle decimal values. When concatenating in the print statement, commas (`,`) are used to separate different parts of the message."
},
{
  "id": 4,
  "domain": "Data types & operators",
  "type": "multiple_choice",
  "question": "A developer needs to write code to reverse the character output of a product code. Which variable declaration will reverse one of the product codes?",
  "options": [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::1]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1::]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::-1]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[-1::]</code>"
  ],
  "answer": "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::-1]</code>",
  "explanation": "The slicing operation <code>[::-1]</code> reverses a string or sequence by stepping through it backwards with a step of -1. Option A <code>[::1]</code> steps forward normally, option B <code>[1::]</code> starts from index 1 to the end, and option D <code>[-1::]</code> starts from the last character but goes forward."
},
{
  "id": 6,
  "domain": "Data structures & control flow",
  "type": "ordering",
  "question": "A developer needs to build a data structure with animals and then sort the structure. Using drag and drop, drag the following lines of code into the correct order to produce this output:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Bears<br>Jaguars<br>Lions<br>Panthers</div>",
  "options": [
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for animal in animals:</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals.append(\"Jaguars\")</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals.add(\"Jaguars\")</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(animal)</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for animal in animals {</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print (animal)}</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals.sort()</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals = [\"Bears\", \"Panthers\", \"Lions\"]</code>"
  ],
  "answer": [
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals = [\"Bears\", \"Panthers\", \"Lions\"]</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals.append(\"Jaguars\")</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>animals.sort()</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for animal in animals:</code>",
    "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(animal)</code>"
  ],
  "explanation": "The correct order: 1) Initialize the list with Bears, Panthers, and Lions. 2) Add Jaguars using append(). 3) Sort the list alphabetically. 4) Loop through each animal. 5) Print each animal. The incorrect options include invalid Python syntax like animals.add() and curly braces for loops."
},
{
  "id": 7,
  "domain": "Data structures & indexing",
  "type": "multiple_response",
  "question": "Analyze this code example:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]<br>pieces.sort()</div><br><br>Which two commands will display the rook?",
  "options": [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[3])</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[6])</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[-1])</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[5])</code>"
  ],
  "answer": [
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[-1])</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[5])</code>"
  ],
  "explanation": "After sorting, the list becomes ['bishop', 'king', 'knight', 'pawn', 'queen', 'rook']. The rook is at index 5 (the 6th position) and also at index -1 (the last position). Option A prints 'pawn' (index 3), and option B would cause an IndexError since there's no index 6 in a list of 6 elements."
},
{
  "id": 8,
  "domain": "Data structures & slicing",
  "type": "fill_in_blank",
  "question": "A tester wants to select every fifth item in the products tuple for functional testing, starting with the second item and ending at the ninth item. The result of that selection should be in the print statement.<br><br>Using drag and drop, fill in the missing code pieces to create the selection and the print statement. Not all code pieces will be used.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>products = ('1111','2222','3333','4444','5555','6666','7777','8888','9999')<br>tester = ____<br>print(____)</div>",
  "options": {
    "slice_definition": [
      "products.slice(1,8,5)",
      "slice(2,9,5)", 
      "slice(1,8,5)",
      "for tester in products:",
      "append"
    ],
    "print_statement": [
      "products(tester)",
      "products[tester]",
      "tester",
      "products.slice(1,8,5)",
      "selection"
    ]
  },
  "answer": {
    "slice_definition": "slice(1,8,5)",
    "print_statement": "products[tester]"
  },
  "explanation": "The slice object <code>slice(1,8,5)</code> defines a slice starting from index 1 (second item '2222') up to but not including index 8, stepping by 5. This selects indices 1 and 6, corresponding to '2222' and '7777'. Then <code>products[tester]</code> applies the slice to get the tuple ('2222', '7777'). Note: Python doesn't have a .slice() method - that's JavaScript syntax."
},
{
  "id": 9,
  "domain": "Data structures & lists",
  "type": "fill_in_blank",
  "question": "A set of softball leagues has two divisions merging into one division. The completed list should look like this: ['Angels', 'Dodgers', 'Padres', 'Sox', 'Wheelers']<br><br>Using the dropdown arrows, complete the code necessary to show the end result.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>league1 = ['Angels','Dodgers','Padres']<br>league2 = ['Wheelers','Blasters']<br>league0 = league1 ____ league2<br>league0.____(____,'Sox')<br>league0.____('Blasters')<br>print(league0)</div>",
  "options": {
    "combine_operator": ["+", "&", "and"],
    "insert_method": ["insert", "add", "push"],
    "insert_position": ["2", "3", "4"],
    "remove_method": ["remove", "delete", "pop"]
  },
  "answer": {
    "combine_operator": "+",
    "insert_method": "insert",
    "insert_position": "3",
    "remove_method": "remove"
  },
  "explanation": "The two lists are merged with <code>+</code> operator, creating ['Angels', 'Dodgers', 'Padres', 'Wheelers', 'Blasters']. Then <code>insert(3, 'Sox')</code> adds 'Sox' at index 3 (after 'Padres'). Finally, <code>remove('Blasters')</code> deletes the 'Blasters' item, leaving the final list ['Angels', 'Dodgers', 'Padres', 'Sox', 'Wheelers']."
},
{
  "id": 10,
  "domain": "Operators & precedence",
  "type": "multiple_choice",
  "question": "For the following code, which operation is performed last chronologically when executing this statement?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 5<br>y = 3<br>z = x + y > 7 and x * y < 15 or x - y > 2</div>",
  "options": [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x - y > 2</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>z =</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x * y < 15 or x - y > 2</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x + y > 7 and x * y < 15</code>"
  ],
  "answer": "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>z =</code>",
  "explanation": "While expression evaluation follows operator precedence (arithmetic, comparisons, logical AND, logical OR), the assignment operation <code>z =</code> is performed last chronologically, storing the final calculated result in the variable z."
},
{
  "id": 11,
  "domain": "Operators & precedence",
  "type": "multiple_response",
  "question": "Evaluate each of these variables and assignments and indicate Yes if the expression is true or No if false.<br><br><div class='bg-gray-800'>a = 100 - 70 / 7<br>b = (35 % 15) // 2<br>c = -3 ** 2</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - a == 90",
    "No - a == 90", 
    "Yes - b == 2.5",
    "No - b == 2.5",
    "Yes - c == -9",
    "No - c == -9"
  ],
  "answer": [
    "Yes - a == 90",
    "No - b == 2.5", 
    "Yes - c == -9"
  ],
  "explanation": "a = 100 - 70/7 = 100 - 10 = 90 (division has higher precedence than subtraction). b = (35 % 15) // 2 = 5 // 2 = 2 (not 2.5, since // is integer division). c = -3 ** 2 = -(3 ** 2) = -9 (exponentiation has higher precedence than unary minus)."
},
{
  "id": 12,
  "domain": "Operators & precedence",
  "type": "ordering",
  "question": "Based on the following code, drag and drop the code execution order for the print statement.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 7<br>y = 4<br>print(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)</div>",
  "options": [
    "not x * y > 25",
    "x + y == 11 and not x * y > 25", 
    "x > y and x - y >= 2 or x + y == 11 and not x * y > 25",
    "x > y and x - y >= 2"
  ],
  "answer": [
    "not x * y > 25",
    "x + y == 11 and not x * y > 25",
    "x > y and x - y >= 2", 
    "x > y and x - y >= 2 or x + y == 11 and not x * y > 25"
  ],
  "explanation": "Python evaluates boolean expressions following operator precedence: 1) Arithmetic operations first, 2) Comparisons, 3) NOT operators, 4) AND operators, 5) OR operators. The expression is evaluated as: ((x > y) and (x - y >= 2)) or ((x + y == 11) and (not (x * y > 25))). First 'not x * y > 25' is evaluated, then the two AND operations, and finally the OR operation combines everything."
},
{
  "id": 13,
  "domain": "Operators & precedence",
  "type": "multiple_choice",
  "question": "What would be the value of result that prints at the end of this code?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 3<br>b = 7<br>c = 5<br>result = a + b * c<br>print(result)</div>",
  "options": [
    "A. 38",
    "B. 26", 
    "C. 50",
    "D. 36"
  ],
  "answer": "A. 38",
  "explanation": "Following order of operations (PEMDAS), multiplication is performed before addition. So the calculation is: a + (b * c) = 3 + (7 * 5) = 3 + 35 = 38. If addition were performed first, it would incorrectly be (3 + 7) * 5 = 50, but that's not how Python evaluates expressions."
},
{
  "id": 14,
  "domain": "Conditional logic & control flow",
  "type": "fill_in_blank",
  "question": "As part of a student app, messages need to accompany the following grades:<br><br><strong>Grade Ranges:</strong><br>• 100: Outstanding<br>• 90-99: Great<br>• 71-89: You are doing well. Strive to improve.<br>• 70 and under: Study hard<br><br>Use the dropdown arrows to complete the code.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>if grade ____ 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Outstanding\")<br>elif grade ____ 90:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Great\")<br>elif grade ____ 70:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Study hard\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You are doing well. Strive to improve.\")</div>",
  "options": {
    "condition1": ["==", ">=", "<="],
    "condition2": [">", ">=", "<="],
    "condition3": ["<=", "<", ">="]
  },
  "answer": {
    "condition1": "==",
    "condition2": ">=", 
    "condition3": "<="
  },
  "explanation": "The conditions check: grade == 100 for exactly 100 (Outstanding), grade >= 90 for 90-99 range (Great), grade <= 70 for 70 and under (Study hard), and the else covers 71-89 range (You are doing well. Strive to improve.). Note: This structure works but is unconventional - typically conditions flow from high to low values."
},
{
  "id": 15,
  "domain": "Operators & arithmetic",
  "type": "fill_in_blank",
  "question": "Use the dropdown arrows to match the correct operator to the result of each variable calculation using these values:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 10<br>b = 3</div><br><br>Match each calculation:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a ____ b = 13<br>a ____ b = 7<br>a ____ b = 3.33<br>a ____ b = 3<br>a ____ b = 1</div>",
  "options": {
    "operator1": ["+", "*", "//"],
    "operator2": ["-", "/", "//"],
    "operator3": ["%", "/", "//"],
    "operator4": ["//", "/", "%"],
    "operator5": ["//", "/", "%"]
  },
  "answer": {
    "operator1": "+",
    "operator2": "-",
    "operator3": "/",
    "operator4": "//",
    "operator5": "%"
  },
  "explanation": "With a = 10 and b = 3: Addition (10 + 3 = 13), Subtraction (10 - 3 = 7), Division (10 / 3 = 3.33...), Floor Division (10 // 3 = 3), and Modulo (10 % 3 = 1 remainder)."
},
{
  "id": 16,
  "domain": "Boolean logic & identity",
  "type": "multiple_response",
  "question": "Using the following code values, select Yes if the Boolean statements are true, and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 5<br>b = 3<br>c = b<br>b = a</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - a == b",
    "No - a == b", 
    "Yes - a is b",
    "No - a is b",
    "Yes - b == 3",
    "No - b == 3",
    "Yes - c is b",
    "No - c is b"
  ],
  "answer": [
    "Yes - a == b",
    "No - a is b",
    "No - b == 3",
    "No - c is b"
  ],
  "explanation": "After executing the code: a=5, b=5 (reassigned from a), c=3 (original value of b). Therefore: a == b is True (both equal 5), a is b is False (different objects despite same value), b == 3 is False (b now equals 5), c is b is False (c points to original b value 3, while b now points to 5)."
},
{
  "id": 17,
  "domain": "String operations & membership",
  "type": "fill_in_blank",
  "question": "Select the keyword that will check to see if the word \"nine\" is part of the quote. If this code runs, it should return a value of True.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>quote = \"A stitch in time saves nine\"<br>print(\"nine\" ____ quote)</div>",
  "options": {
    "operator": ["in", "is", "==", "contains"]
  },
  "answer": {
    "operator": "in"
  },
  "explanation": "The `in` operator checks for membership - whether a substring exists within a larger string. Since \"nine\" appears in the quote \"A stitch in time saves nine\", the expression `\"nine\" in quote` returns True. The other operators: `is` checks identity, `==` checks equality, and `contains` is not a valid Python operator for strings."
},

{
  "id": 18,
  "domain": "Functions & assertions",
  "type": "multiple_choice",
  "question": "What will the code return?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def is_quarter(num):<br>&nbsp;&nbsp;&nbsp;&nbsp;if num % 4 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>assert is_quarter(8) == True</div>",
  "options": [
    "A. True",
    "B. An AssertionError error.",
    "C. Nothing",
    "D. False"
  ],
  "answer": "C. Nothing",
  "explanation": "The function `is_quarter(8)` calculates 8 % 4 == 0, which is True, so it returns True. The assert statement checks if `is_quarter(8) == True`, which evaluates to `True == True`, which is True. Since the assertion passes, the assert statement executes successfully and produces no output - it returns Nothing."
},
{
  "id": 19,
  "domain": "Comparison operators",
  "type": "fill_in_blank",
  "question": "You are building a quiz app. The code is missing an operator to indicate that a variable is not equal to a desired result. Using the dropdown arrow, choose the correct operator to finish the code.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 3<br>b = 7<br>result = int(input(\"What is a + b?\"))<br>if result ____ 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You are incorrect. Try again\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You are correct.\")</div>",
  "options": {
    "operator": ["!=", "==", "!>"]
  },
  "answer": {
    "operator": "!="
  },
  "explanation": "The `!=` operator means \"not equal to\" in Python. Since the correct answer is 10 (3 + 7), the condition checks if the user's input is not equal to 10. If `result != 10` is True, it prints the incorrect message; otherwise it prints the correct message. The `==` operator checks equality, and `!>` is not a valid Python operator."
},
{
  "id": 20,
  "domain": "Operators & precedence",
  "type": "multiple_response",
  "question": "For each statement regarding the results of the calculations, select Yes if the statement is true and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 3<br>b = 2<br>c = -(a**b)<br>d = +(c*b)</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - c = -9",
    "No - c = -9", 
    "Yes - b**a = 8",
    "No - b**a = 8",
    "Yes - d = 18",
    "No - d = 18"
  ],
  "answer": [
    "Yes - c = -9",
    "Yes - b**a = 8",
    "No - d = 18"
  ],
  "explanation": "Working through the calculations: c = -(a**b) = -(3**2) = -(9) = -9 ✓. b**a = 2**3 = 8 ✓. d = +(c*b) = +(-9*2) = +(-18) = -18, not 18 ✗. The unary plus operator (+) doesn't change the sign of a negative number."
},
{
  "id": 21,
  "domain": "Conditional logic & control flow",
  "type": "ordering",
  "question": "Use drag and drop to place the lines of code in the correct order to accomplish the following. Not all lines of code will be used.<br><br><strong>Goal:</strong> The messages \"Great month\" and \"Keep it going\" are printed for month sales of over 10000.",
  "options": [
    "else",
    "if month_sales > 10000:",
    "elif month_sales <= 10000",
    "print(\"Great month\")",
    "print(\"Keep it going\")",
    "if month_sales >= 10000"
  ],
  "answer": [
    "if month_sales > 10000:",
    "print(\"Great month\")",
    "print(\"Keep it going\")"
  ],
  "explanation": "To print both messages when sales are over 10000, we need: 1) The condition `if month_sales > 10000:` to check if sales exceed 10000, 2) `print(\"Great month\")` as the first action, 3) `print(\"Keep it going\")` as the second action. The other options are not needed: `else` and `elif` are unnecessary since we only want one condition, and `if month_sales >= 10000` would include exactly 10000 which contradicts 'over 10000'."
},
{
  "id": 22,
  "domain": "Conditional logic & functions",
  "type": "fill_in_blank",
  "question": "Choose the correct lines of code to satisfy the needs of the following function:<br><br>Students with scores of 90 or higher get an A.<br>Students with scores from 80 to 89 get a B.<br>Students with scores from 70 to 79 get a C.<br>Everyone else gets an F.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def grade(score):<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"B\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;return grade</div>",
  "options": {
    "condition1": ["score > 90:", "score >= 90:", "score = 90:", "score < 100:"],
    "condition2": ["score <= 89:", "score < 90:", "score > 80:", "score >= 80:"],
    "condition3": ["score >= 70:", "score < 80:", "score > 70:", "score <= 79:"],
    "else_action": ["score <= 70: grade = \"F\"", "grade = \"F\"", "score < 70: grade = \"F\"", "score < 60: grade = \"F\""]
  },
  "answer": {
    "condition1": "score >= 90:",
    "condition2": "score >= 80:",
    "condition3": "score >= 70:",
    "else_action": "grade = \"F\""
  },
  "explanation": "The conditions check score ranges in descending order: `score >= 90` for A (90 or higher), `score >= 80` for B (80-89, since 90+ was already caught), `score >= 70` for C (70-79, since 80+ was already caught). The else clause simply assigns 'F' for all remaining scores (below 70). The logic flows from highest to lowest grades, with each condition catching its range."
},
{
  "id": 23,
  "domain": "Conditional logic & control flow",
  "type": "ordering",
  "question": "You need to write code that sends northern sales staff skis and everyone else golf balls if they exceed sales of $100,000 for a month. The staff should only get skis if the season is winter.<br><br>Using drag and drop, arrange the code pieces needed in the correct order. Not every code snippet will be used.",
  "options": [
    "if monthlySales = 100000:",
    "if region IS \"North\":",
    "else:",
    "print(\"Send golf balls\")",
    "else;",
    "if region == \"North\" && season == \"Winter\":",
    "if monthlySales > 100000:",
    "print(\"Send skis\")"
  ],
  "answer": [
    "if monthlySales > 100000:",
    "if region == \"North\" && season == \"Winter\":",
    "print(\"Send skis\")",
    "else:",
    "print(\"Send golf balls\")"
  ],
  "explanation": "The correct logic: 1) First check if sales exceed $100,000, 2) If yes, check if region is North AND season is Winter, 3) If both conditions are true, send skis, 4) Otherwise (else), send golf balls. The incorrect options include: `=` instead of `>` for comparison, `IS` instead of `==`, semicolon instead of colon, and `&&` which should be `and` in Python."
},{
  "id": 24,
  "domain": "Lists & iteration",
  "type": "fill_in_blank",
  "question": "You are writing code to list cities and then delete from the list any city that has more than five letters in the name.<br><br>Using the dropdown arrows, fill in the missing pieces of code to complete the code needed to fulfill this task.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>cities = ['Anchorage','Juneau','Fairbanks','Ketchikan','Sitka','Wasilla']<br>for city in cities:<br>&nbsp;&nbsp;&nbsp;&nbsp;if ____(city) > 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cities.____(city)</div>",
  "options": {
    "length_function": ["len", "length", "append"],
    "remove_method": ["remove", "delete", "slice"]
  },
  "answer": {
    "length_function": "len",
    "remove_method": "remove"
  },
  "explanation": "The `len()` function returns the length of a string, and `remove()` method deletes the first occurrence of a value from a list. However, this code has a serious flaw: modifying a list while iterating over it can cause runtime errors and unexpected behavior. A better approach would be to iterate over a copy of the list or collect items to remove separately."
},
{
  "id": 25,
  "domain": "Functions & conditional logic",
  "type": "multiple_response",
  "question": "For each statement regarding the results of the code, indicate Yes if the statement is true and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def score_adj (score, rank):<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score = score<br>&nbsp;&nbsp;&nbsp;&nbsp;if score > 3000 and rank > 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_score += 300<br>&nbsp;&nbsp;&nbsp;&nbsp;elif score > 2500 and rank > 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_score += 250<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_score += 50<br>&nbsp;&nbsp;&nbsp;&nbsp;return new_score<br><br>score1 = score_adj (3000, 3)<br>score2 = score_adj (2000, 2)<br>score3 = score_adj (5000, 5)<br><br>print(score1, score2, score3)</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - score1 = 3300",
    "No - score1 = 3300",
    "Yes - score3 = 5300",
    "No - score3 = 5300", 
    "Yes - score2 = 2250",
    "No - score2 = 2250"
  ],
  "answer": [
    "No - score1 = 3300",
    "Yes - score3 = 5300",
    "No - score2 = 2250"
  ],
  "explanation": "Tracing through each function call: score1 = score_adj(3000, 3) - score is NOT > 3000 (it equals 3000) and rank is NOT > 3 (it equals 3), so it goes to else and adds 50, resulting in 3050. score2 = score_adj(2000, 2) - doesn't meet either condition, goes to else and adds 50, resulting in 2050. score3 = score_adj(5000, 5) - score > 3000 AND rank > 3 both true, adds 300, resulting in 5300."
},
{
  "id": 26,
  "domain": "Loops & control flow",
  "type": "fill_in_blank",
  "question": "You are trying to loop through some values retrieved from a list. You want the list to keep printing these values, but if the list sees a value of \"End of Day\", then the printing should stop.<br><br>Select the missing code examples to finish writing this code block.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>schedule = [\"Opening Comments\", \"Breakfast\", \"Breakout Session 1\", \"Lunch\", \"Breakout Session 2\", \"End of Day\", \"Opening Comments\", \"Breakfast\"]<br><br>scheduledEvent = 0<br><br>____(scheduledEvent < len(schedule)):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(schedule[scheduledEvent])<br>&nbsp;&nbsp;&nbsp;&nbsp;if schedule[scheduledEvent] == \"End of Day\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
  "options": {
    "loop_type": ["do", "while", "for", "if"],
    "exit_command": ["stop", "end", "continue", "break"],
    "increment": ["scheduledEvent", "break", "continue", "scheduledEvent += 1"]
  },
  "answer": {
    "loop_type": "while",
    "exit_command": "break",
    "increment": "scheduledEvent += 1"
  },
  "explanation": "This requires a `while` loop to repeatedly check the condition, `break` to exit the loop when \"End of Day\" is found, and `scheduledEvent += 1` to increment the index in the else clause. The `while` loop continues as long as the index is within bounds, `break` immediately exits the loop, and incrementing the index moves to the next item."
},
{
  "id": 27,
  "domain": "Loops & iteration",
  "type": "fill_in_blank",
  "question": "The code needs to print the number of minutes to walk per day, starting with 10 minutes in week 1 and 50 minutes by week 5.<br><br>Select the correct line of code for the iteration.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ week in range(1, 6):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"You should walk for {week * 10} minutes in week {week}\")</div>",
  "options": {
    "loop_keyword": ["for", "while", "foreach", "loop"]
  },
  "answer": {
    "loop_keyword": "for"
  },
  "explanation": "A `for` loop is used to iterate through a sequence. With `for week in range(1, 6):`, the variable `week` takes values 1, 2, 3, 4, 5, and the calculation `week * 10` gives 10, 20, 30, 40, 50 minutes respectively. The `while` loop would require manual counter management, and `foreach` and `loop` are not Python keywords."
},
{
  "id": 28,
  "domain": "Control flow & syntax",
  "type": "multiple_choice",
  "question": "A developer needs to add code to an existing app that will print a message a set number of times. However, the developer does not yet know the message, but the variables used in the loop for a message are used elsewhere in the app.<br><br>Which keyword added to the end of the code will serve as a placeholder for future text?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for x in range(1,5):</div>",
  "options": [
    "A. pass",
    "B. break",
    "C. while", 
    "D. continue"
  ],
  "answer": "A. pass",
  "explanation": "The `pass` statement is a null operation in Python that serves as a syntactic placeholder. It does nothing when executed but allows the code to be syntactically correct while the developer plans to add actual functionality later. `break` exits loops, `continue` skips to the next iteration, and `while` is a different loop type, none of which serve as placeholders."
},
{
  "id": 29,
  "domain": "Nested loops & iteration",
  "type": "ordering",
  "question": "You are trying to build a sign-in sheet for a seven-day class with 10 students each day. Using drag and drop, drag the correct statements in the correct order to create this code. Not all statements will be used.",
  "options": [
    "for classDay in range (1,8):",
    "print (f\"Student{student} _____________\")",
    "for classDay in range (1,7):",
    "for student in range (1,10):",
    "print(f\"Day: {classDay}\")",
    "for student in range (1,11):"
  ],
  "answer": [
    "for classDay in range (1,8):",
    "print(f\"Day: {classDay}\")",
    "for student in range (1,11):",
    "print (f\"Student{student} _____________\")"
  ],
  "explanation": "The correct structure uses nested loops: 1) `for classDay in range(1,8):` iterates through 7 days (1-7), 2) `print(f\"Day: {classDay}\")` displays the current day, 3) `for student in range(1,11):` iterates through 10 students (1-10), 4) `print(f\"Student{student} _____________\")` creates a line for each student. The incorrect options use wrong ranges: `range(1,7)` gives only 6 days, and `range(1,10)` gives only 9 students."
},
{
  "id": 30,
  "domain": "Loops & control flow",
  "type": "fill_in_blank",
  "question": "You are writing code to have activity for every day in a 30-day program. There should be no activity on day 15.<br><br>Using the dropdown arrows, fill in the missing pieces to the code.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ dailyProgram in range(1, ____):<br>&nbsp;&nbsp;&nbsp;&nbsp;if dailyProgram == 15:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"No activity on day 15\")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"This is day {dailyProgram}\")</div>",
  "options": {
    "loop_type": ["do", "for", "while"],
    "range_end": ["30", "31", "31,"],
    "control_statement": ["skip", "break", "continue"]
  },
  "answer": {
    "loop_type": "for",
    "range_end": "31",
    "control_statement": "continue"
  },
  "explanation": "A `for` loop iterates through the range, `range(1, 31)` creates days 1-30 (since range is exclusive of the upper limit), and `continue` skips the rest of the current iteration and moves to the next day. On day 15, it prints the \"No activity\" message and continues to day 16 without printing \"This is day 15\". The `break` statement would exit the loop entirely, and `skip` is not a Python keyword."
},
{
  "id": 31,
  "domain": "Nested loops & iteration",
  "type": "fill_in_blank",
  "question": "A developer is writing code to iterate printing cities and states, with the result looking like this:<br><br>Orange Florida Orange Ohio Orange Illinois Springfield Florida Springfield Ohio Springfield Illinois Capital Auburn Florida Auburn Ohio Auburn Illinois<br>Using the dropdown arrows, complete the code to generate the above output.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>cities = [\"Orange\", \"Springfield\", \"Auburn\"]<br>states = [\"Florida\", \"Ohio\", \"Illinois\"]<br><br>____ x in cities:<br>&nbsp;&nbsp;&nbsp;&nbsp;____ y in states:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(x, y)<br>&nbsp;&nbsp;&nbsp;&nbsp;____ x == \"Springfield\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"Capital\")</div>",
  "options": {
    "outer_loop": ["for", "if"],
    "inner_loop": ["for", "if"], 
    "condition": ["if", "for"]
  },
  "answer": {
    "outer_loop": "for",
    "inner_loop": "for",
    "condition": "if"
  },
  "explanation": "The code uses nested `for` loops: the outer loop iterates through cities, the inner loop iterates through states for each city, printing each combination. The `if` statement checks when the city is \"Springfield\" and prints \"Capital\" after all state combinations for Springfield are printed. This creates the pattern: city-state pairs for each city, with \"Capital\" appearing after Springfield's combinations."
},
{
  "id": 32,
  "domain": "File operations & I/O",
  "type": "ordering",
  "question": "Using drag and drop, drag over the lines of code that will accomplish the following:<br><br>• Open the shirts file in a mode to where it cannot be written to<br>• Read the contents of the entire file<br>• Print the contents of the entire file<br><br>Not every line of code will be used.",
  "options": [
    "shirtFileContents = shirtFile.read()",
    "shirtFile = open(\"shirts.txt\", \"r\")",
    "print(shirtFileContents)",
    "for shirtLines = range(shirtFile):",
    "shirtFile = open(\"shirts.txt\",\"a\")"
  ],
  "answer": [
    "shirtFile = open(\"shirts.txt\", \"r\")",
    "shirtFileContents = shirtFile.read()",
    "print(shirtFileContents)"
  ],
  "explanation": "The correct sequence: 1) `open(\"shirts.txt\", \"r\")` opens the file in read-only mode (\"r\") which prevents writing, 2) `.read()` reads the entire file contents into a variable, 3) `print()` displays the contents. The incorrect options include: \"a\" mode which is append mode (allows writing), and the for loop syntax which is invalid Python syntax."
},
{
  "id": 33,
  "domain": "Testing & modules",
  "type": "fill_in_blank",
  "question": "A developer is building a unit test and needs help determining the built-in module required, how to check whether the unit test is run as the main module, and how to evaluate if two values are equal to each other.<br><br>Using the dropdown arrows, select the code needed to finish building the unit test.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import unittest<br>a = 3<br>b = 6<br>class Test_Example_UnitTest(unittest.____):<br>&nbsp;&nbsp;&nbsp;&nbsp;def test_equal(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.____(2 + 8, a + b)<br>if ____ == '__main__':<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()</div>",
  "options": {
    "test_class": ["TestCase", "TestAssert"],
    "assert_method": ["assertEqual", "assertTrue", "assertIn"],
    "name_variable": ["__name__", "_name_", "name"]
  },
  "answer": {
    "test_class": "TestCase",
    "assert_method": "assertEqual",
    "name_variable": "__name__"
  },
  "explanation": "Unit tests inherit from `unittest.TestCase` which provides testing framework methods. `assertEqual()` checks if two values are equal (2+8=10 and a+b=3+6=9, so this test would actually fail). `__name__` is the special variable that equals '__main__' when the script is run directly. The other options: `TestAssert` doesn't exist, `assertTrue` checks boolean values, `assertIn` checks membership, and the name variable variations are incorrect Python syntax."
},

{
  "id": 34,
  "domain": "File operations & error handling",
  "type": "fill_in_blank",
  "question": "Select the code to read and print the text file being opened, if the file already exists. If it does not exist, print a message indicating so.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os.path<br><br>if os.path.____(\'work.txt\') == True:<br><br>&nbsp;&nbsp;&nbsp;workFile = open(\'work.txt\', \'r\')<br><br>&nbsp;&nbsp;&nbsp;workFileFirstLine = ____<br><br>else:<br><br>&nbsp;&nbsp;&nbsp;print(\"The work file is not in this folder.\")</div>",
  "options": {
    "exists_method": ["exists", "file_exists", "file"],
    "read_method": ["workFile.read()", "firstline()", "workFile.seek()", "workFile.readfirst()"]
  },
  "answer": {
    "exists_method": "exists",
    "read_method": "workFile.read()"
  },
  "explanation": "The `os.path.exists()` function checks if a file or directory exists. The `workFile.read()` method reads the entire contents of the file. The other options are incorrect: `file_exists` and `file` are not methods in os.path, `firstline()` is not a valid file method, `seek()` changes file position but doesn't read content, and `readfirst()` doesn't exist in Python."
},
{
  "id": 35,
  "domain": "File operations & context managers",
  "type": "multiple_response",
  "question": "Which statements about the code, which writes a message to an existing log file at the start of each day, are true? (Choose two)<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('log.txt', 'w') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write('Daily Log')<br>&nbsp;&nbsp;&nbsp;&nbsp;file.close()</div>",
  "options": [
    "A. A file.open() statement needs to be added at the beginning of the with statement.",
    "B. The text in the write function adds itself to the end of the log file.",
    "C. The log file is overwritten each time it is opened.",
    "D. The close function is not needed."
  ],
  "answer": [
    "C. The log file is overwritten each time it is opened.",
    "D. The close function is not needed."
  ],
  "explanation": "Statement C is true: The 'w' mode opens the file for writing and truncates it to zero length, overwriting any existing content. Statement D is true: The 'with' statement automatically handles file closing when the block exits, making the explicit close() call redundant. Statement A is false: The open() function is already called in the with statement. Statement B is false: The 'w' mode overwrites the file rather than appending to the end."
},
{
  "id": 36,
  "domain": "File operations & I/O",
  "type": "fill_in_blank",
  "question": "You are attempting to write code to a text file called results. The file does not exist before you write to it.<br><br>Using the dropdown arrow, complete the code, making sure the file does not use memory after the write is complete.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>writeFile = ____('results.txt', '____')<br><br>toResults = input(\"What do you want to write to the results? \")<br><br>writeFile.____(toResults)<br><br>writeFile.____</div>",
  "options": {
    "file_function": ["fetch", "open", "write"],
    "file_mode": ["a", "r", "w"],
    "write_method": ["feed", "write", "writeln"],
    "close_method": ["close()", "drop()", "end()"]
  },
  "answer": {
    "file_function": "open",
    "file_mode": "w",
    "write_method": "write",
    "close_method": "close()"
  },
  "explanation": "The `open()` function creates/opens files, 'w' mode creates a new file for writing (overwrites if exists), `write()` method writes text to the file, and `close()` releases file resources from memory. The incorrect options include: `fetch` and `write` are not file opening functions, 'a' is append mode and 'r' is read mode, `feed` and `writeln` are not Python file methods, and `drop()` and `end()` are not valid file closing methods."
},
{
  "id": 37,
  "domain": "File operations & conditional logic",
  "type": "fill_in_blank",
  "question": "You want to write text from a user input. The file may exist, so your code needs to account for both the existence of the file and its lack. If the file does exist, new text needs to be written to a new line.<br><br>Using drag and drop, finish the code. Not all options will be used.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>if os.path.isfile('results.txt'):<br>&nbsp;&nbsp;&nbsp;&nbsp;writeFile = open('results.txt', '____')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;writeFile = open('results.txt', '____')<br>toResults = input(\"What do you want to write to the log? \")<br>writeFile.write(toResults + \"\\____\")<br>writeFile.close()</div>",
  "options": {
    "existing_file_mode": ["r", "l", "w", "a", "e", "n"],
    "new_file_mode": ["r", "l", "w", "a", "e", "n"],
    "newline_char": ["r", "l", "w", "a", "e", "n"]
  },
  "answer": {
    "existing_file_mode": "a",
    "new_file_mode": "w",
    "newline_char": "n"
  },
  "explanation": "When the file exists, use 'a' (append) mode to add text to the end without overwriting existing content. When the file doesn't exist, use 'w' (write) mode to create a new file. The '\\n' escape sequence creates a new line. The other options are not valid file modes: 'r' is read-only, and 'l', 'e' are not valid Python file modes."
},
{
  "id": 38,
  "domain": "File operations & system commands",
  "type": "fill_in_blank",
  "question": "You are in the process of writing code to delete a file if it exists, or just display a message indicating that there was no file to remove if the file does not exist.<br><br>Using the dropdown arrows, select the proper code pieces to finish this code example.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import ____<br>if os.path.____(\'results.txt\'):<br>&nbsp;&nbsp;&nbsp;os.____(\'results.txt\')<br>&nbsp;&nbsp;&nbsp;print(\"The results file has been removed.\")<br>else:<br>&nbsp;&nbsp;&nbsp;print(\"There was no results file to remove.\")</div>",
  "options": {
    "import_module": ["os", "os.path", "os.file"],
    "check_method": ["isfile", "exists", "present"],
    "delete_method": ["delete", "remove", "close"]
  },
  "answer": {
    "import_module": "os",
    "check_method": "isfile",
    "delete_method": "remove"
  },
  "explanation": "Import `os` module to access file system operations. Use `os.path.isfile()` to specifically check if the path exists and is a file (not a directory). Use `os.remove()` to delete the file. The incorrect options include: `os.path` and `os.file` are not standalone importable modules, `exists()` checks for files or directories, `present` is not a valid method, `delete` is not a Python function, and `close()` is for closing open file objects, not deleting files."
},
{
  "id": 39,
  "domain": "Input validation & loops",
  "type": "ordering",
  "question": "A junior programmer wants to have a user input North, South, East, or West and display the entry on screen. In addition, the developer wants to require the user to try again if the entry does not match one of the options.<br><br>Using drag and drop, place the code lines in the correct order. Location should be the first variable declared.",
  "options": [
    "location = [\"North\", \"South\", \"West\", \"East\"]",
    "print(response)",
    "while response not in location:",
    "print(\"Try again.\")",
    "response = input(\"Enter North, South, West, or East for a location.\")"
  ],
  "answer": [
    "location = [\"North\", \"South\", \"West\", \"East\"]",
    "response = input(\"Enter North, South, West, or East for a location.\")",
    "while response not in location:",
    "print(\"Try again.\")",
    "response = input(\"Enter North, South, West, or East for a location.\")",
    "print(response)"
  ],
  "explanation": "The correct order: 1) Declare the location list first as requested, 2) Get initial user input, 3) Use while loop to check if response is invalid, 4) Print \"Try again\" message, 5) Get new input inside the loop, 6) Print the valid response after exiting the loop. This creates a validation loop that continues until the user enters a valid direction."
},
{
  "id": 40,
  "domain": "String formatting & interpolation",
  "type": "fill_in_blank",
  "question": "Using the dropdown arrow, add the symbol needed to get the number of items to print instead of {items}.<br><br>The following code example, as is, prints \"You have {items} items in stock\" instead of the number of items in stock.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>price = 9.95<br>items = 15<br>print(____\"We have {items} items in stock.\")</div>",
  "options": {
    "format_symbol": ["f", "\\", "format", "%"]
  },
  "answer": {
    "format_symbol": "f"
  },
  "explanation": "The `f` prefix creates an f-string (formatted string literal) that evaluates expressions inside curly braces {}. With `f\"We have {items} items in stock.\"`, the variable `items` is interpolated to show \"We have 15 items in stock.\" The other options: `\\` is an escape character, `format` is a method but not used as a prefix, and `%` is for older string formatting but not used as a prefix."
},
{
  "id": 41,
  "domain": "Input handling & string formatting",
  "type": "fill_in_blank",
  "question": "You are trying to calculate the area of a rectangle given a width and height input from a user. The width and height need to be integers. The calculated square footage needs to be right-aligned in the line and be no more than six characters long.<br><br>Use the dropdown arrows to complete the code to allow a user to input the height and width and then calculate and display the area of the ensuing rectangle.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>width = ____(____('Enter a width: '))<br><br>height = ____(____('Enter a height: '))<br><br>area = 'We have ____ square feet for the area.'<br><br>print(____)</div>",
  "options": {
    "width_conversion": ["int", "float", "input"],
    "width_input": ["int", "float", "input"],
    "height_conversion": ["int", "float", "input"],
    "height_input": ["int", "float", "input"],
    "format_spec": ["{:>6}", "{align.right(6)}", "{ralign(6)}"],
    "print_statement": ["area.format(width*height)", "fright", "align(area)"]
  },
  "answer": {
    "width_conversion": "int",
    "width_input": "input",
    "height_conversion": "int",
    "height_input": "input",
    "format_spec": "{:>6}",
    "print_statement": "area.format(width*height)"
  },
  "explanation": "Use `int(input())` to convert user string input to integers. The format specifier `{:>6}` right-aligns the value in a field of 6 characters. Use `area.format(width*height)` to substitute the calculated area into the format string. The other options include invalid Python syntax like `{align.right(6)}` and `fright` which don't exist in Python."
},
{
  "id": 42,
  "domain": "System modules & command line",
  "type": "multiple_choice",
  "question": "Evaluate the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br>x = len(sys.argv)<br>print(x)<br>print(sys.argv[0])<br>print(sys.argv[1])</div><br><br>What does sys.argv[0] represent when a command is run to refer to this file as:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Python testargs.py Hello</div>",
  "options": [
    "A. sys.argv",
    "B. The number of arguments passed through the file.",
    "C. testargs.py",
    "D. Hello"
  ],
  "answer": "C. testargs.py",
  "explanation": "In Python, `sys.argv[0]` always contains the name of the script being executed. When running `Python testargs.py Hello`, the sys.argv list contains: [0] = 'testargs.py' (script name), [1] = 'Hello' (first argument). The len(sys.argv) would be 2 (script name + 1 argument). sys.argv[0] specifically holds the script filename, not the argument values or the entire argv list."
},
{
  "id": 43,
  "domain": "Python syntax & comments",
  "type": "multiple_choice",
  "question": "Which character(s) should be placed before text in a line of code to make it a comment?",
  "options": [
    "A. '",
    "B. #",
    "C. /*",
    "D. //"
  ],
  "answer": "B. #",
  "explanation": "In Python, the hash symbol (#) is used to create single-line comments. Everything after # on that line is ignored by the interpreter. The other options are from different programming languages: single quotes (') are for strings in Python, /* */ is for multi-line comments in C/Java/JavaScript, and // is for single-line comments in C/Java/JavaScript."
},
{
  "id": 44,
  "domain": "String formatting & line continuation",
  "type": "fill_in_blank",
  "question": "Select the symbol needed for the print statement to output the sales representative on a single line.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import string<br>annualSales = 500000<br>if annualSales >= 700000:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Great year\")<br>elif annualSales >= 300000:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Decent year\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Better luck next year\")<br>print(\"Thank you for your efforts\")<br><br>print(f\"Your sales representative is Nicole, you are in the East region, \" ____<br>\"and you are based in the Potomac office.\")</div>",
  "options": {
    "continuation_symbol": ["\\", "\\\\", "n", "\t"]
  },
  "answer": {
    "continuation_symbol": "\\"
  },
  "explanation": "The backslash (\\) is used for line continuation in Python, allowing a long line to be split across multiple lines in the code while being treated as a single line when executed. This makes the code more readable without affecting the output. The other options: \\\\ is an escaped backslash literal, n is just the letter n, and \\t represents a tab character."
},
{
  "id": 45,
  "domain": "Documentation & docstrings",
  "type": "fill_in_blank",
  "question": "A developer wants documentation for a function to display when called upon in a print statement. Use the dropdown menus to fill in the remainder of the code necessary to generate the documentation.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def area(width,height):<br>&nbsp;&nbsp;&nbsp;&nbsp;____Generates the area of a rectangle____<br>&nbsp;&nbsp;&nbsp;&nbsp;totalArea = width * height<br>&nbsp;&nbsp;&nbsp;&nbsp;return totalArea<br><br>print(____)</div>",
  "options": {
    "docstring_start": ["'''", "#", "//"],
    "docstring_end": ["'''", "###", "///"],
    "access_method": ["area.__doc__", "area(__doc__)", "area.doc"]
  },
  "answer": {
    "docstring_start": "'''",
    "docstring_end": "'''",
    "access_method": "area.__doc__"
  },
  "explanation": "Python docstrings are created using triple quotes (''') at the beginning and end. The docstring should be the first statement in a function. To access a function's documentation, use the `__doc__` attribute (e.g., `area.__doc__`). The other options: # is for comments (not docstrings), // is not Python syntax, and `area(__doc__)` or `area.doc` are not valid ways to access docstring content."
},

{
  "id": 46,
  "domain": "Documentation & modules",
  "type": "multiple_response",
  "question": "For each of the statements regarding pydoc, select Yes if the statement is true and No if false.<br><br>Select all TRUE statements:",
  "options": [
    "Yes - The proper syntax for pydoc is Python -m pydoc module where module represents the name of a Python module.",
    "No - The proper syntax for pydoc is Python -m pydoc module where module represents the name of a Python module.",
    "Yes - Pydoc is a self-contained executable that can be run from a command-line prompt.",
    "No - Pydoc is a self-contained executable that can be run from a command-line prompt.",
    "Yes - Pydoc generates documentation on Python modules.",
    "No - Pydoc generates documentation on Python modules."
  ],
  "answer": [
    "Yes - The proper syntax for pydoc is Python -m pydoc module where module represents the name of a Python module.",
    "Yes - Pydoc is a self-contained executable that can be run from a command-line prompt.",
    "Yes - Pydoc generates documentation on Python modules."
  ],
  "explanation": "All three statements are true: 1) The correct syntax is `python -m pydoc module_name` to view documentation for a module, 2) pydoc can be run as a standalone command-line tool (though it's also available as a module), 3) pydoc's primary function is to generate and display documentation for Python modules, functions, classes, and methods based on docstrings and code inspection."
},
{
  "id": 47,
  "domain": "Python syntax & debugging",
  "type": "multiple_response",
  "question": "A junior programmer enters the following code. When trying to run it, errors are generated.<br><br>Which two fixes are necessary for it to work? (Choose two)<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>height = 5<br>width = 5<br>if height == width<br>print(\"You have a square\")</div>",
  "options": [
    "A. The if condition needs to be in parentheses.",
    "B. A colon needs to be added at the end of the if condition.",
    "C. The print statement needs to be indented.",
    "D. The if condition needs to have a single equals sign, not a double equals sign."
  ],
  "answer": [
    "B. A colon needs to be added at the end of the if condition.",
    "C. The print statement needs to be indented."
  ],
  "explanation": "Python syntax requires: 1) A colon (:) at the end of the if statement to indicate the start of the code block, and 2) Proper indentation for the print statement to show it belongs inside the if block. The other options are incorrect: Python doesn't require parentheses around if conditions (unlike some languages), and double equals (==) is correct for comparison (single equals = is for assignment)."
},
{
  "id": 48,
  "domain": "Functions & parameters",
  "type": "fill_in_blank",
  "question": "Complete the code example to build a function that does the following:<br><br>• Its name is calcSubtotal<br>• The function takes an amount and a sales tax rate and calculates a subtotal<br>• The new subtotal is returned<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ ____:<br><br>&nbsp;&nbsp;&nbsp;subtotal = amount * (1 + salesTaxRate)<br><br>&nbsp;&nbsp;&nbsp;____subtotal</div>",
  "options": {
    "function_keyword": ["function", "def calcSubtotal", "calcSubtotal"],
    "parameters": ["()", "(amount, salesTaxRate)", "(amount, salesTaxRate):"],
    "return_keyword": ["return amount", "return salesTaxRate", "return subtotal"]
  },
  "answer": {
    "function_keyword": "def calcSubtotal",
    "parameters": "(amount, salesTaxRate):",
    "return_keyword": "return subtotal"
  },
  "explanation": "Python functions are defined using the `def` keyword, followed by the function name and parameters in parentheses. The function needs two parameters: `amount` and `salesTaxRate` to perform the calculation. The `return` statement sends the calculated subtotal back to the caller. The other options: `function` is not Python syntax (it's JavaScript), empty parentheses `()` wouldn't provide the needed parameters, and the function name `calcSubtotal` goes after `def`, not before it."
},
{
  "id": 49,
  "domain": "Functions & conditional logic",
  "type": "multiple_choice",
  "question": "The code example is used to calculate a subtotal for an order. What is the amount of order1?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calcTotal(taxable, amount, salesTax, shipping):<br>&nbsp;&nbsp;&nbsp;if taxable == \"Yes\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = amount + (1 * salesTax) + shipping<br>&nbsp;&nbsp;&nbsp;elif shipping == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass<br>&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subtotal = amount + shipping<br>&nbsp;&nbsp;&nbsp;return subtotal<br><br>order1 = calcTotal(\"No\", 500, .07, 0)<br>print(\"Your order total is \", order1)</div>",
  "options": [
    "A. 500.07",
    "B. An error is raised",
    "C. 500",
    "D. 535"
  ],
  "answer": "B. An error is raised",
  "explanation": "Tracing through the function call calcTotal(\"No\", 500, .07, 0): The first condition (taxable == \"Yes\") is False since taxable is \"No\". The elif condition (shipping == 0) is True since shipping is 0, so the pass statement executes, doing nothing. The else block doesn't execute. However, no subtotal variable is assigned in the elif branch, so when the function tries to return subtotal, it raises a NameError because subtotal was never defined in this execution path."
},

{
  "id": 50,
  "domain": "Functions & variable assignment",
  "type": "multiple_choice",
  "question": "For the following function, which code example properly calls the function and returns a calculation stored in a variable called order_total?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def subtotal(order_amt, sales_tax):<br>&nbsp;&nbsp;&nbsp;subtotal = float(order_amt) * (1 + float(sales_tax))<br>&nbsp;&nbsp;&nbsp;return subtotal</div>",
  "options": [
    "A. order_total(subtotal(500,.07))",
    "B. order_total = call subtotal(500,.07)",
    "C. order_total = subtotal(500,.07)",
    "D. order_total = def subtotal(500, .07)"
  ],
  "answer": "C. order_total = subtotal(500,.07)",
  "explanation": "The correct syntax uses assignment (=) to store the function's return value in a variable. `order_total = subtotal(500,.07)` calls the function with arguments 500 and .07, receives the calculated result, and assigns it to order_total. The other options are incorrect: A treats order_total as a function (not a variable), B uses invalid 'call' keyword, and D incorrectly uses 'def' which is for function definition, not function calls."
},
{
  "id": 51,
  "domain": "Functions & default parameters",
  "type": "multiple_choice",
  "question": "Examine the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def area (width, height):<br>&nbsp;&nbsp;&nbsp;area = width * height<br>&nbsp;&nbsp;&nbsp;return area<br>box1area = area (5, 2)<br>box2area = area (6)</div><br><br>What needs to change in order for the height in the area function to be 12 if a height is not specified when calling the function?",
  "options": [
    "A. box2area line to box2area = area (6,12)",
    "B. def to def area (width, height = 12)",
    "C. height variable setting height =12 before the function is declared",
    "D. height variable setting height =12 inside the function"
  ],
  "answer": "B. def to def area (width, height = 12)",
  "explanation": "Python uses default parameter values to provide automatic values when arguments are not supplied during function calls. By changing the function definition to `def area (width, height = 12):`, the height parameter will automatically use 12 if not provided. This allows `area(6)` to work as `area(6, 12)`. The other options: A would require always providing both arguments, C and D don't create proper default parameter behavior in Python."
},

{
  "id": 52,
  "domain": "Functions & parameters",
  "type": "multiple_choice",
  "question": "A junior programmer is building a function to compute the area of a rectangle. Which function definition statement is needed to replace the comment to make this code work?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#declare function here<br>&nbsp;&nbsp;&nbsp;z = x * y<br>&nbsp;&nbsp;&nbsp;print (z)<br><br>area (5,10)</div>",
  "options": [
    "A. def area (x,y,z):",
    "B. def area (x,y):",
    "C. def calculate_area (x,y):",
    "D. def calculate_area (x,y,z):"
  ],
  "answer": "B. def area (x,y):",
  "explanation": "The function is called as `area(5,10)` with two arguments, so the function definition must accept exactly two parameters. The function name must match the call (`area`), and since `z` is calculated inside the function (z = x * y), it doesn't need to be a parameter. Options A and D include unnecessary `z` parameter, and option C has the wrong function name (`calculate_area` instead of `area`)."
},
{
  "id": 53,
  "domain": "Operators & order of operations",
  "type": "multiple_choice",
  "question": "The code is causing an app user to complain that the total loan amount is far lower than what is anticipated. Choose the line of code that needs to be adjusted to calculate the loan total based on the interest rate being applied to the car loan and the license fee.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>carLoan = 20000<br>intRate = 1.05<br>licenseFee = 500<br>totalLoan = carLoan + licenseFee * intRate</div>",
  "options": [
    "A. totalLoan = carLoan + (licenseFee * intRate)",
    "B. totalLoan = carloan - licenseFee * intRate",
    "C. totalLoan = (carLoan + licenseFee) * intRate",
    "D. totalLoan = carLoan + licenseFee / intRate"
  ],
  "answer": "C. totalLoan = (carLoan + licenseFee) * intRate",
  "explanation": "The current calculation (carLoan + licenseFee * intRate) applies interest only to the license fee due to order of operations: 20000 + (500 * 1.05) = 20525. Option C correctly applies the interest rate to the total amount (car loan + license fee): (20000 + 500) * 1.05 = 21525. This makes sense for a loan calculation where interest applies to the entire borrowed amount. Option A doesn't change the calculation, B subtracts instead of adds, and D uses division instead of multiplication."
},
{
  "id": 54,
  "domain": "Loops & debugging",
  "type": "multiple_response",
  "question": "The following code example is an attempt to loop through and print a tuple of products by serial number. When run, it generates errors. Which fixes are needed to make the code work properly and return the list of products? (Choose two)<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>products = (\"1111\",\"2222\",\"3333\",\"4444\",\"5555\",\"6666\",\"7777\",\"8888\",\"9999\")<br><br>for product in products:<br><br>print(products[product])</div>",
  "options": [
    "A. Remove the colon from the for statement.",
    "B. Indent the for statement.",
    "C. Indent the print statement.",
    "D. Change the print statement to print(product)."
  ],
  "answer": [
    "C. Indent the print statement.",
    "D. Change the print statement to print(product)."
  ],
  "explanation": "Two fixes are needed: 1) The print statement must be indented to be inside the for loop block (Python requires proper indentation), 2) The print statement should be `print(product)` instead of `print(products[product])` because `product` contains the actual values (\"1111\", \"2222\", etc.), not indices. Using `products[product]` would try to use strings as indices, causing a TypeError. The colon in the for statement is correct Python syntax, and the for statement doesn't need indentation at the current level."
},
{
  "id": 55,
  "domain": "Error handling & debugging",
  "type": "multiple_choice",
  "question": "A junior programmer writes the following code to store a list and then retrieve an item from the list: What type of error message (if this code generates an error) will it produce?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>trees = ['Douglas fir', 'Oak', 'Balsam fir']<br>last_tree = trees[3]<br>print(f'The last tree is {last_tree}.')</div>",
  "options": [
    "A. A logic error.",
    "B. A runtime error.",
    "C. A syntax error.",
    "D. No error will be generated."
  ],
  "answer": "B. A runtime error.",
  "explanation": "This code will produce a runtime error (specifically an IndexError) when it executes. The list has 3 elements with valid indices 0, 1, and 2, but the code tries to access index 3, which doesn't exist. The syntax is correct (no syntax error), and the program will run until it hits the problematic line (not a logic error that produces wrong results). Runtime errors occur during program execution when the code encounters an invalid operation."
},
{
  "id": 56,
  "domain": "Exception handling & error management",
  "type": "fill_in_blank",
  "question": "The following code example does a simple calculation to divide two numbers. You want to handle any errors gracefully and ensure that the last print statement always prints, even if there is an error.<br><br>Using the dropdown arrows, fill in the missing keywords in the code to accomplish this.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br>&nbsp;&nbsp;&nbsp;&nbsp;x = float(input(\"Enter a number. \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;y = float(input(\"Enter a number to divide by. \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"The answer is {x/y}.\")<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Uh oh. Did you enter something besides a number? Did you try to divide by zero?\")<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"You successfully played the division game.\")<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Thank you for playing.\")</div>",
  "options": {
    "first_keyword": ["try:", "else:", "except:", "finally:"],
    "second_keyword": ["try:", "else:", "except:", "finally:"],
    "third_keyword": ["try:", "else:", "except:", "finally:"],
    "fourth_keyword": ["try:", "else:", "except:", "finally:"]
  },
  "answer": {
    "first_keyword": "try:",
    "second_keyword": "except:",
    "third_keyword": "else:",
    "fourth_keyword": "finally:"
  },
  "explanation": "Python exception handling uses this structure: `try:` contains code that might cause errors, `except:` handles any errors that occur, `else:` runs only if no errors occurred in the try block, and `finally:` always executes regardless of whether errors occurred. This ensures graceful error handling while guaranteeing the final message prints in all cases."
},

{
  "id": 57,
  "domain": "Exception handling & control flow",
  "type": "fill_in_blank",
  "question": "Select the missing code to indicate the keyword or method necessary to throw an exception that the calling code can catch. Also, indicate the missing keyword to show a block of code, no matter the outcome of the try portion of the error handling process.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = float(input(\"Enter a number. \"))<br>y = float(input(\"Enter a number to divide by. \"))<br><br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"The answer is {x/y}.\")<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;if y==0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____ Exception(\"You cannot divide by zero\")<br>____:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Thank you for playing.\")</div>",
  "options": {
    "exception_keyword": ["throw", "raise", "raise()", "throw()"],
    "always_execute_keyword": ["finally", "result", "else"]
  },
  "answer": {
    "exception_keyword": "raise",
    "always_execute_keyword": "finally"
  },
  "explanation": "Python uses the `raise` keyword to throw exceptions (not `throw` like some other languages). The `finally` block executes regardless of whether an exception occurred or was handled, making it perfect for cleanup code that must always run. The other options: `throw` and `throw()` are not Python syntax, `raise()` is incorrect syntax (raise doesn't use parentheses), and `else` only runs if no exception occurred."
},
{
  "id": 58,
  "domain": "Exception handling",
  "type": "fill_in_blank",
  "question": "You are in the process of writing code to divide two numbers. You want the result to display as long as there are no errors. If there are errors, you want to display a message indicating that the user either tried to divide by zero or used an invalid number.<br><br>Using the dropdown arrows, fill in the missing keywords.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = float(input(\"Enter a number. \"))<br>b = float(input(\"Enter a number to divide by. \"))<br>____:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"The answer is {a/b}.\")<br><br>____:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"This did not work. Did you try to divide by zero?\")</div>",
  "options": {
    "first_keyword": ["attempt", "try", "catch"],
    "second_keyword": ["catch", "else", "except", "finally"]
  },
  "answer": {
    "first_keyword": "try",
    "second_keyword": "except"
  },
  "explanation": "Python uses `try` to define a block of code that might cause an error, and `except` to define the block that handles any errors. The `try` block contains the risky division operation, and the `except` block catches both ValueError (from invalid number input) and ZeroDivisionError (from dividing by zero). The other options (`attempt` and `catch`) are not Python keywords but come from other programming languages."
},
{
  "id": 59,
  "domain": "Exception handling & control flow",
  "type": "multiple_response",
  "question": "For the following code, answer Yes if the statements are true and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = float(input(\"Enter a number. \"))<br>b = float(input(\"Enter a number to divide by. \"))<br><br>try:<br>&nbsp;&nbsp;&nbsp;print(f\"The answer is {a/b}.\")<br>except:<br>&nbsp;&nbsp;&nbsp;print(\"This did not work. Did you try to divide by zero?\")<br>else:<br>&nbsp;&nbsp;&nbsp;print(\"You successfully divided two numbers.\")<br>finally:<br>&nbsp;&nbsp;&nbsp;print(\"Thank you for playing.\")</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - The finally statement will run regardless of which pieces of code above it run.",
    "No - The finally statement will run regardless of which pieces of code above it run.",
    "Yes - Both the try and except parts will run if a = 0 and b != 0.",
    "No - Both the try and except parts will run if a = 0 and b != 0.", 
    "Yes - The else part will run if a = 0 and b != 0.",
    "No - The else part will run if a = 0 and b != 0."
  ],
  "answer": [
    "Yes - The finally statement will run regardless of which pieces of code above it run.",
    "No - Both the try and except parts will run if a = 0 and b != 0.",
    "Yes - The else part will run if a = 0 and b != 0."
  ],
  "explanation": "1) TRUE: The finally block always executes regardless of whether an exception occurs. 2) FALSE: When a = 0 and b != 0, the division 0/b equals 0 (valid), so only the try block runs successfully, not the except block. 3) TRUE: When a = 0 and b != 0, no exception occurs, so the else block runs after the successful try block."
},
{
  "id": 60,
  "domain": "Unit testing & object identity",
  "type": "multiple_choice",
  "question": "The code is an anatomy of a unit test, part of a larger block of code. Which statement will test to see if a and b share the same memory space?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def test_memory(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = 3<br>&nbsp;&nbsp;&nbsp;&nbsp;b = a<br>&nbsp;&nbsp;&nbsp;&nbsp;#insert assert test here</div>",
  "options": [
    "A. self.assertEqual(a,b)",
    "B. self.assertIs(a,b)",
    "C. self.assertTrue(a,b)",
    "D. self.assertIn(a,b)"
  ],
  "answer": "B. self.assertIs(a,b)",
  "explanation": "The `assertIs()` method tests object identity using the `is` operator, which checks if two variables reference the same object in memory. `assertEqual()` only tests value equality (using ==), `assertTrue()` tests boolean truthiness of a single value (and takes only one argument), and `assertIn()` tests membership (if one value is contained within another). Since the question asks about shared memory space, `assertIs()` is the correct choice."
},
{
  "id": 61,
  "domain": "Unit testing & assertions",
  "type": "fill_in_blank",
  "question": "A developer is setting up several assert tests for an app. Using the dropdown lists, place the applicable assert test for each unit test.<br><br>• test1 should test to see if a calculation is true or false.<br>• test2 should test to see if an item is within a list of items.<br>• test3 should test to see if an object belongs to a class.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def test1(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;self.____(5+3 * 4 == 17)<br><br>def test2(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;a = 'clock'<br>&nbsp;&nbsp;&nbsp;&nbsp;b = ['clock','watch','phone']<br>&nbsp;&nbsp;&nbsp;&nbsp;self.____(a,b)<br><br>def test3(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;game = Game()<br>&nbsp;&nbsp;&nbsp;&nbsp;self.____(game, Game)</div>",
  "options": {
    "test1_method": ["assertInstance", "assertIs", "assertIsInstance", "assertTrue", "assertIn", "assertInInstance", "assertEqual"],
    "test2_method": ["assertInstance", "assertIs", "assertIsInstance", "assertTrue", "assertIn", "assertInInstance", "assertEqual"],
    "test3_method": ["assertInstance", "assertIs", "assertIsInstance", "assertTrue", "assertIn", "assertInInstance", "assertEqual"]
  },
  "answer": {
    "test1_method": "assertTrue",
    "test2_method": "assertIn",
    "test3_method": "assertIsInstance"
  },
  "explanation": "test1 uses `assertTrue()` to verify that the calculation (5+3*4 == 17) evaluates to True. test2 uses `assertIn()` to check if the string 'clock' exists within the list ['clock','watch','phone']. test3 uses `assertIsInstance()` to verify that the game object is an instance of the Game class. The other options don't match the testing requirements: assertEqual tests value equality, assertIs tests object identity, and the misspelled options like assertInstance and assertInInstance are not valid unittest methods."
},
{
  "id": 62,
  "domain": "Unit testing & naming conventions",
  "type": "multiple_choice",
  "question": "The following code is used to set up a unit test between two variables. Of the function names given, which is valid for building the unit test?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import unittest<br><br>class TestMain(unittest.TestCase):<br>&nbsp;&nbsp;&nbsp;&nbsp;def _______________(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = 'North'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b = 'North'<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.assertEqual(a,b)<br>if __name__ == '__main__':<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()</div>",
  "options": [
    "A. territory_test",
    "B. test_territory",
    "C. testcase_territory",
    "D. *test*territory"
  ],
  "answer": "B. test_territory",
  "explanation": "Python's unittest framework automatically discovers and runs methods that begin with the prefix 'test'. Only 'test_territory' follows this naming convention. The unittest framework will ignore methods that don't start with 'test', so 'territory_test' and 'testcase_territory' would not be executed as tests. The option '*test*territory' contains invalid characters (asterisks) that are not allowed in Python function names."
},
{
  "id": 63,
  "domain": "System modules & command line",
  "type": "multiple_choice",
  "question": "When using sys.argv[0] in a command prompt as part of running a Python app, what does the 0 represent?",
  "options": [
    "A. The main class in the file.",
    "B. The file name.",
    "C. The first function in the file.",
    "D. The first argument in a function."
  ],
  "answer": "B. The file name.",
  "explanation": "In Python's sys.argv list, index 0 always contains the name of the Python script being executed. When you run a command like 'python myapp.py arg1 arg2', sys.argv[0] contains 'myapp.py', sys.argv[1] contains 'arg1', and so on. The 0 is simply the list index, not a reference to classes, functions, or function arguments within the file."
},
{
  "id": 64,
  "domain": "Built-in modules & methods",
  "type": "multiple_response",
  "question": "A new developer is learning about built-in modules and methods used. Specifically, the developer needs to know the modules used to open text files, find the mean from a series of test scores, make directories, and exit a gaming app when the game is over.<br><br>Using drag and drop, match each method with its built-in module.<br><br>Select all correct module-method pairings:",
  "options": [
    "io - open()",
    "math - open()",
    "sys - open()",
    "os - open()",
    "math - ceil()",
    "io - ceil()",
    "sys - ceil()",
    "os - ceil()",
    "math - mkdir()",
    "io - mkdir()",
    "sys - mkdir()",
    "os - mkdir()",
    "math - exit()",
    "io - exit()",
    "sys - exit()",
    "os - exit()"
  ],
  "answer": [
    "io - open()",
    "math - ceil()",
    "os - mkdir()",
    "sys - exit()"
  ],
  "explanation": "The correct pairings are: `io.open()` for opening text files (though `open()` is also a built-in function), `math.ceil()` for mathematical operations like finding means or ceiling values, `os.mkdir()` for creating directories, and `sys.exit()` for terminating applications. Note: The question mentions finding the mean, but `ceil()` is actually a ceiling function - the mean would typically use `statistics.mean()` or manual calculation."
},
{
  "id": 65,
  "domain": "File operations & modules",
  "type": "multiple_response",
  "question": "A developer wants to print the first line of a configuration file. The code to perform this task is written as follows. Which code snippets are needed to replace the comments and finish this code example? (Choose two)<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#import module<br>if os.path.isfile('config.txt'):<br>&nbsp;&nbsp;&nbsp;&nbsp;with open('config.txt','r') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(file.#read the first line)</div>",
  "options": [
    "A. readline()",
    "B. read()",
    "C. import io",
    "D. import os"
  ],
  "answer": [
    "A. readline()",
    "D. import os"
  ],
  "explanation": "Two code snippets are needed: `import os` is required because the code uses `os.path.isfile()` to check if the file exists, and `readline()` is the method that reads exactly one line from a file. The `read()` method would read the entire file contents, not just the first line. `import io` is not needed since the code uses the built-in `open()` function, not `io.open()`."
},
{
  "id": 66,
  "domain": "Math module & rounding functions",
  "type": "fill_in_blank",
  "question": "An inventory manager needs to take data from calculations, an average inventory number in this case, and have three possible outcomes:<br><br>• The nearest whole number up, represented by the upper_bound variable<br>• The nearest whole number down, represented by the lower_bound variable<br>• The integer of the whole number, represented by the bound variable<br><br>Using the dropdown lists, complete the code snippet to fulfill the inventory manager's need.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br><br>average_inventory = 77.4<br><br>upper_bound = ____(average_inventory)<br><br>lower_bound = ____(average_inventory)<br><br>bound = ____(average_inventory)<br><br>print(upper_bound)<br>print(lower_bound)<br>print(bound)</div>",
  "options": {
    "import_statement": ["import math", "use math", "sys.math"],
    "upper_bound_function": ["math.ceil", "math.trunc", "math.round", "math.floor"],
    "lower_bound_function": ["math.ceil", "math.trunc", "math.round", "math.floor"],
    "bound_function": ["math.trunc", "math.ceil", "math.round", "math.floor"]
  },
  "answer": {
    "import_statement": "import math",
    "upper_bound_function": "math.ceil",
    "lower_bound_function": "math.floor",
    "bound_function": "math.trunc"
  },
  "explanation": "The correct functions are: `import math` to access the math module, `math.ceil()` to round up to the nearest whole number (77.4 becomes 78), `math.floor()` to round down to the nearest whole number (77.4 becomes 77), and `math.trunc()` to get the integer part by truncating the decimal (77.4 becomes 77). Note that `math.trunc()` and `math.floor()` give the same result for positive numbers, but differ for negative numbers."
},
{
  "id": 67,
  "domain": "Random module & sampling",
  "type": "fill_in_blank",
  "question": "A game developer is testing some random number generators. The results should be as follows:<br><br>• result1 should have a random country from a list of countries<br>• result2 should display the list in a random order<br>• result3 should display two random countries from a list of countries<br><br>Using the dropdown arrows, complete the code to generate the proper random numbers for each variable.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br>countries = ['USA','Canada','Mexico','Japan','Spain','Kenya']<br>result1 = random.____<br>result2 = random.____<br>result3 = random.____</div>",
  "options": {
    "import_statement": ["import shuffle", "import random", "import choice", "import sample"],
    "result1_function": ["choice(countries)", "shuffle(countries)", "sample(countries,2)"],
    "result2_function": ["shuffle(countries)", "choice(countries)", "sample(countries,2)"],
    "result3_function": ["sample(countries,2)", "shuffle(countries)", "choice(countries)"]
  },
  "answer": {
    "import_statement": "import random",
    "result1_function": "choice(countries)",
    "result2_function": "shuffle(countries)",
    "result3_function": "sample(countries,2)"
  },
  "explanation": "The random module provides different functions for different needs: `import random` imports the entire random module, `random.choice()` selects one random element from a sequence, `random.shuffle()` randomly reorders a list in place, and `random.sample(list, n)` returns n unique random elements from a sequence without replacement. Note that shuffle() modifies the original list and returns None, so for result2 you might want to use `random.shuffle(countries); result2 = countries` or use `random.sample(countries, len(countries))` instead."
},
{
  "id": 68,
  "domain": "Math operations & string formatting",
  "type": "ordering",
  "question": "Use drag and drop to build code in the order that will do the following. Not every line of code will be used.<br><br>• Store the actual value of pi in a variable called pi<br>• A user will enter the radius of the circle and needs an option to have the radius carried out to decimal places<br>• Use pi to calculate the area of a circle and store it in a variable called area<br>• Print the result (the area), formatted to two decimal places",
  "options": [
    "pi = math.pi",
    "area = pi * radius ^ 2",
    "radius = int(input(\"Enter a radius for a circle.\"))",
    "print(f\"A circle with a radius of {radius} will have an area of %.2d.\" %area)",
    "import math",
    "use math",
    "radius = float(input(\"Enter a radius for a circle.\"))",
    "area = pi * radius ** 2",
    "print(f\"A circle with a radius of {radius} will have an area of %.2f.\" %area)"
  ],
  "answer": [
    "import math",
    "pi = math.pi",
    "radius = float(input(\"Enter a radius for a circle.\"))",
    "area = pi * radius ** 2",
    "print(f\"A circle with a radius of {radius} will have an area of %.2f.\" %area)"
  ],
  "explanation": "The correct sequence: 1) `import math` to access the math module, 2) `pi = math.pi` to store pi's value, 3) `radius = float(input(...))` to get decimal input from user, 4) `area = pi * radius ** 2` to calculate area using exponentiation (**), 5) `print(...)` with %.2f for two decimal places. Incorrect options include: `use math` (invalid syntax), `int(input(...))` (no decimals), `radius ^ 2` (bitwise XOR, not exponentiation), and `%.2d` (integer format, not float)."
},
{
  "id": 69,
  "domain": "DateTime module & time functions",
  "type": "multiple_response",
  "question": "A developer is building a code block to log the current date and time for app activity. Which two code snippets will replace the #current date and time comment with the correct date and time?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import datetime<br>log_time = #current date and time<br>print(\"entry time: \",log_time)</div>",
  "options": [
    "A. datetime.datetime.strptime()",
    "B. datetime.datetime.today()",
    "C. datetime.datetime.now()",
    "D. datetime.datetime.strftime()"
  ],
  "answer": [
    "B. datetime.datetime.today()",
    "C. datetime.datetime.now()"
  ],
  "explanation": "Both `datetime.datetime.today()` and `datetime.datetime.now()` return the current date and time as a datetime object. While `now()` is more commonly used and can accept timezone parameters, both work for getting the current timestamp. The other options are incorrect: `strptime()` parses a string into a datetime object (requires input), and `strftime()` formats a datetime object into a string (requires an existing datetime object as input)."
},
{
  "id": 70,
  "domain": "Random module & game logic",
  "type": "fill_in_blank",
  "question": "Using the dropdown arrows for the missing code pieces, complete the following code example so that it accomplishes the functionality of this game:<br><br>A user gets five chances to correctly guess a whole number from 1 to 10. If the user guesses correctly, they get a congratulatory message and the game ends. If not, they get a message thanking them for playing.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br><br>for i in range(5):<br><br>&nbsp;&nbsp;guess = int(input(\"Enter a number from 1 to 10. \"))<br><br>&nbsp;&nbsp;randNum = ____<br><br>&nbsp;&nbsp;if guess == randNum:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"We matched!\")<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br><br>&nbsp;&nbsp;else:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"We did not match. Try again\")</div>",
  "options": {
    "import_statement": ["from random import random", "from random import randint", "from random import randrange"],
    "random_function": ["randrange(1,11)", "randrange(1,10)", "randint(1,10)", "randint(1,11)"]
  },
  "answer": {
    "import_statement": "from random import randint",
    "random_function": "randint(1,10)"
  },
  "explanation": "The correct combination is `from random import randint` and `randint(1,10)`. The randint() function includes both endpoints, so randint(1,10) generates numbers from 1 to 10 inclusive, matching the game requirement. The import statement imports only the randint function. Alternative correct answers would be `from random import randrange` with `randrange(1,11)` since randrange excludes the upper bound."
},
{
  "id": 71,
  "domain": "DateTime module & formatting",
  "type": "fill_in_blank",
  "question": "A new developer is learning the code necessary to display dates in multiple formats. The developer has been tasked with creating a display with dates. Using the dropdown arrows, complete the code snippet to create the display, leaving open the possibility of time being displayed in the future.<br><br>Expected output:<br><div class='bg-gray-800'>2023-01-01 03:19:43.412476<br>The current date is 01/01/2023<br>The current weekday is: 6</div><br><br>Complete the code:<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ datetime<br>current_date = ____<br>print(current_date)<br>print(\"The current date is\", datetime.datetime.strftime(current_date,\"____\"))<br>print(\"The current weekday is\", current_date.____)</div>",
  "options": {
    "import_statement": ["import", "import", "import"],
    "current_date_function": ["datetime.datetime.today()", "datetime.datetime.day()", "datetime.datetime.currentdate()"],
    "date_format": ["%m/%d/%Y", "%MM%DD%YYYY", "%mm%dd%yyyy"],
    "weekday_method": ["weekday()", "weekday", "day()"]
  },
  "answer": {
    "import_statement": "import",
    "current_date_function": "datetime.datetime.today()",
    "date_format": "%m/%d/%Y",
    "weekday_method": "weekday()"
  },
  "explanation": "The correct code uses: `import datetime` to import the module, `datetime.datetime.today()` to get current date and time, `%m/%d/%Y` format string for MM/DD/YYYY display (%m = month, %d = day, %Y = 4-digit year), and `weekday()` method which returns 0-6 (Monday=0, Sunday=6). The other options include invalid functions like `currentdate()` and incorrect format codes like `%MM` or `%YYYY`."
},
{
  "id": 72,
  "domain": "Random module & number generation",
  "type": "ordering",
  "question": "You are trying to generate 10 sets of random numbers. One random number is between 3 and 99, with the number being a multiple of 3. The other random number needs to be between 0 and 1.<br><br>Drag the snippets of code needed to complete the code block, which is part of a game app.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(10):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(____, ____)</div>",
  "options": [
    "randrange(3,99,3)",
    "randint()",
    "randrange(3,102,3)",
    "random()",
    "for i in range(9):",
    "randint(3,102,3)"
  ],
  "answer": [
    "randrange(3,102,3)",
    "random()"
  ],
  "explanation": "The correct combination is `randrange(3,102,3)` and `random()`. For multiples of 3 between 3 and 99: `randrange(3,102,3)` generates 3, 6, 9...99 (upper bound 102 is excluded, step of 3). For numbers between 0 and 1: `random()` generates float values from 0.0 to 1.0 (exclusive of 1.0). The option `randrange(3,99,3)` would miss 99 since randrange excludes the upper bound. `randint()` requires two arguments, and `for i in range(9):` would only loop 9 times instead of 10."
},
{
  "id": 73,
  "domain": "Math module functions",
  "type": "multiple_response",
  "question": "Select Yes for any true statement related to the code and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import math<br>a = -14<br>b = 21<br>c = math.fabs(a)<br>d = math.fmod(b,a)<br>e = math.frexp(b)</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - frexp returns the mantissa and exponent of a number.",
    "No - frexp returns the mantissa and exponent of a number.",
    "Yes - c == 14.0",
    "No - c == 14.0",
    "Yes - d == 1.5",
    "No - d == 1.5"
  ],
  "answer": [
    "Yes - frexp returns the mantissa and exponent of a number.",
    "Yes - c == 14.0",
    "No - d == 1.5"
  ],
  "explanation": "1) TRUE: `math.frexp()` returns a tuple containing the mantissa and exponent of a number as (mantissa, exponent) where number = mantissa * 2^exponent. 2) TRUE: `math.fabs(-14)` returns the absolute value 14.0 as a float. 3) FALSE: `math.fmod(21, -14)` returns the floating-point remainder of 21/-14, which is -7.0, not 1.5. The fmod function computes the remainder with the same sign as the dividend when the divisor is negative."
},
{
  "id": 74,
  "domain": "Math module & special values",
  "type": "multiple_response",
  "question": "For each statement regarding this code, select Yes if the statement is true and No if false.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = float(\"nan\")<br>b = float(33)<br>c = isnan(a)<br>d = isnan(b)</div><br><br>Select all TRUE statements:",
  "options": [
    "Yes - d will return 33.0.",
    "No - d will return 33.0.",
    "Yes - The code will fail due to a runtime error.",
    "No - The code will fail due to a runtime error.",
    "Yes - c will return True.",
    "No - c will return True."
  ],
  "answer": [
    "No - d will return 33.0.",
    "Yes - The code will fail due to a runtime error.",
    "Yes - c will return True."
  ],
  "explanation": "Statement 1 is FALSE: d will return False (not 33.0) because isnan(b) checks if b is NaN, and 33.0 is a valid number. Statement 2 is TRUE: The code will fail with a NameError because isnan() is not imported - it needs `from math import isnan` or `math.isnan()`. Statement 3 is TRUE: c would return True because isnan(a) correctly identifies that a contains NaN (Not a Number)."
},
{
  "id": 75,
  "domain": "Math module & advanced calculations",
  "type": "ordering",
  "question": "You are demonstrating how to use Python to perform advanced math calculations.<br><br>Using drag and drop, fill in the missing pieces of the code to accomplish these goals:<br><br>• c = 3 raised to the second power<br>• d = the square root of a<br>• e = the whole number of the square root of b<br><br>Not every code piece will be used.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import ____<br><br>a = 3<br>b = 2<br><br>c = math.____<br>d = math.____<br>e = math.____</div>",
  "options": [
    "isqb(b)",
    "a,b", 
    "isqrt(b)",
    "isqrt(a)",
    "sq(a)",
    "pow",
    "math",
    "sqrt(a)",
    "**",
    "sq(b)",
    "isq(a)"
  ],
  "answer": [
    "math",
    "pow(3,2)",
    "sqrt(a)", 
    "isqrt(b)"
  ],
  "explanation": "The correct code uses: `import math` to access the math module, `math.pow(3,2)` to calculate 3 raised to the second power (or could use `3**2`), `math.sqrt(a)` to get the square root of a (which equals 3), and `math.isqrt(b)` to get the integer square root of b (which equals 1 since sqrt(2) ≈ 1.414). The `isqrt()` function returns the whole number part of a square root, introduced in Python 3.8."
}
]
