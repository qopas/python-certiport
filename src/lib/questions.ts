import { Question } from './types';

export const quizQuestions: Question[] = [
 {
  "id": 178,
  "domain": "Unit testing & type checking",
  "type": "fill_in_blank",
  "question": "You need to test whether an object is an instance of a specific class.<br><br>How should you set up the unit test?<br><br>Complete the code by selecting the correct option from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ unittest<br>class TestIsInstance(____.______):<br>&nbsp;&nbsp;&nbsp;&nbsp;def ____(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj = MyClass()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.____(obj, MyClass)<br>if __name__ == \"__main__\":<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()</div>",
  "options": {
    "import_keyword": ["import", "from", "use", "include"],
    "first_part": ["unittest", "test", "TestCase", "unit"],
    "second_part": ["TestCase", "Test", "UnitTest", "Case"],
    "test_method": ["test_isinstance", "test_instance", "testIsInstance", "test_type"],
    "assert_method": ["assertIsInstance", "assertEqual", "assertTrue", "assertIs"]
  },
  "answer": {
    "import_keyword": "import",
    "first_part": "unittest",
    "second_part": "TestCase",
    "test_method": "test_isinstance",
    "assert_method": "assertIsInstance"
  },
  "explanation": "Use `import` to bring in the unittest module. Test classes inherit from `unittest.TestCase` (two separate parts). Test methods must start with 'test_'. Use `assertIsInstance(obj, class)` to check if an object is an instance of a specific class."
},
{
  "id": 177,
  "domain": "Functions & conditional logic",
  "type": "fill_in_blank",
  "question": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>rate represents the price in dollars.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def admission_fee(age, school):<br>&nbsp;&nbsp;&nbsp;&nbsp;rate = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 10<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 20<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 50<br>&nbsp;&nbsp;&nbsp;&nbsp;return rate</div>",
  "options": {
    "first_condition": ["if age >= 5 and school == True", "if age < 5", "if school == True", "if age >= 5"],
    "second_condition": ["elif age < 18 and school == False", "elif age > 17 and not school == False", "elif not school == False", "elif age >= 5 and not school == False"]
  },
  "answer": {
    "first_condition": "if age >= 5 and school == True",
    "second_condition": "elif age < 18 and school == False"
  },
  "explanation": "The first condition checks if someone is 5 or older AND in school ($10). The elif condition checks for ages 5-17 who are NOT in school ($20). The else handles everyone else (over 17 not in school = $50). Ages under 5 get free admission since rate starts at 0 and no conditions match."
},
{
  "id": 176,
  "domain": "Exception handling & input validation",
  "type": "fill_in_blank",
  "question": "You are creating a program that accepts user input. The program must cast the input into an integer, and properly handle the error if it cannot do so.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>while True:<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = int(input(\"Please enter a number: \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;____ ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"Not a valid number. Try again...\")</div>",
  "options": {
    "try_block": ["try", "attempt", "check", "test"],
    "except_clause": ["except", "catch", "handle", "error"]
  },
  "answer": {
    "try_block": "try",
    "except_clause": "except"
  },
  "explanation": "The `try` block contains code that might raise an exception. The `except ValueError` clause catches the specific exception that `int()` raises when it cannot convert the input string to an integer. This creates a robust input validation loop that continues until valid input is provided."
},
{
  "id": 179,
  "domain": "Functions & logic analysis",
  "type": "true_false",
  "question": "Analyze the following function and determine which statements are true or false:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def grosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):<br>&nbsp;&nbsp;&nbsp;&nbsp;overtime = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;if pieces > 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return pieces * piecerate<br>&nbsp;&nbsp;&nbsp;&nbsp;if salary > 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pass<br>&nbsp;&nbsp;&nbsp;&nbsp;if hours > 40:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overtime = (hours-40) * (1.5 * rate)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return overtime + (40 * rate)<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return hours * rate</div><br><br>For each statement, select True or False:",
  "options": {
    "statement1": "A function call of grosspay() will create a syntax error.",
    "statement2": "A function call of grosspay(salary=50000) will return nothing.",
    "statement3": "A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000."
  },
  "answer": {
    "statement1": "False: A function call of grosspay() will create a syntax error.",
    "statement2": "True: A function call of grosspay(salary=50000) will return nothing.",
    "statement3": "True: A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000."
  },
  "explanation": "Statement 1 is False: grosspay() will not create a syntax error because all parameters have default values. Statement 2 is True: grosspay(salary=50000) will return None because the salary condition only has 'pass' and doesn't return anything. Statement 3 is True: grosspay(pieces=500, piecerate=4) returns 500 * 4 = 2000 because pieces > 0 triggers the first return statement."
},
{
  "id": 180,
  "domain": "Functions & error analysis",
  "type": "true_false",
  "question": "The following function calculates the value of an expression that uses an exponent.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calc_power(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;return a**b<br>base = input(\"Enter the number for the base: \")<br>exponent = input(\"Enter the number for the exponent: \")<br>result = calc_power(base, exponent)<br>print(\"The result is \" + result)</div><br><br>For each statement, select True or False:",
  "options": {
    "statement1": "The code will generate an error in line 03 and line 04.",
    "statement2": "The code will generate an error in line 02 and line 05.",
    "statement3": "The code will correctly output data to the console."
  },
  "answer": {
    "statement1": "False: The code will generate an error in line 03 and line 04.",
    "statement2": "True: The code will generate an error in line 02 and line 05.",
    "statement3": "False: The code will correctly output data to the console."
  },
  "explanation": "Statement 1 is False: Lines 03 and 04 are correct - input() returns strings without error. Statement 2 is True: Line 02 will cause a TypeError because you cannot use ** operator on strings, and line 05 calls the function that will fail. Statement 3 is False: The code will not output correctly due to the type error in the calc_power function when trying to perform exponentiation on string inputs."
},
{
  "id": 181,
  "domain": "String slicing & indexing",
  "type": "ordering",
  "question": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>alph = \"abcdefghijklmnopqrstuvwxyz\"</div><br><br>Move the appropriate results from the list on the left to the correct slicing operations on the right. You may use each result once, more than once, or not at all.<br><br>Note: You will receive partial credit for each correct match.<br><br>alph[3:6] → ____<br>alph[:6] →___<br>",
  "options": [
    "abcdef",
    "def",
    "cdef",
    "abcde",
    "defg"
  ],
  "answer": [
    "def",
    "abcdef"
  ],
  "explanation": "String slicing works with start:end indices where start is inclusive and end is exclusive. alph[3:6] starts at index 3 ('d') and goes up to but not including index 6, giving 'def'. Wait, that should be 'def', not 'cde'. Let me recalculate: alph[3:6] gets characters at indices 3,4,5 which are 'd','e','f' = 'def'. alph[:6] gets from start to index 6 (exclusive) = 'abcdef'."
},
{
  "id": 182,
  "domain": "System modules & command line",
  "type": "multiple_choice",
  "question": "The Script.py file contains the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br>print(sys.argv[2])</div><br><br>You run the following command:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>python Script.py Cheese Bacon Bread</div><br><br>What is the output of the command?",
  "options": [
    "A. Script.py",
    "B. Bread",
    "C. Cheese",
    "D. Bacon"
  ],
  "answer": "D. Bacon",
  "explanation": "The sys.argv list contains all command line arguments. Index 0 is the script name 'Script.py', index 1 is 'Cheese', index 2 is 'Bacon', and index 3 is 'Bread'. Therefore, sys.argv[2] returns 'Bacon'."
},
{
  "id": 183,
  "domain": "Operators & precedence",
  "type": "multiple_choice",
  "question": "A friend asks you to refactor and document the following Python code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>value1 = 9<br>value2 = 4<br><br>answer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2</div><br><br>You run the code.<br><br>What is the result?",
  "options": [
    "A. The value 5.0 is displayed.",
    "B. The value 129 is displayed.",
    "C. A syntax error occurs.",
    "D. The value 5.667 is displayed."
  ],
  "answer": "A. The value 5.0 is displayed.",
  "explanation": "Following operator precedence: First, value1 % value2 = 9 % 4 = 1. Then 1 * 10 = 10. Next, 2.0 ** 3.0 = 8.0. Then 10 // 8.0 = 1.0 (floor division). Finally, 1.0 + value2 = 1.0 + 4 = 5.0."
},
{
  "id": 184,
  "domain": "Loops & algorithm implementation",
  "type": "fill_in_blank",
  "question": "You are building a Python program that displays all prime numbers from 2 to 100. (A prime number is any number that is divisible only by itself and 1.)<br><br>Complete the code by moving the appropriate code segments from the list on the left to the correct locations on the right.<br><br>Note: You will receive partial credit for each correct code placement.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br>&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, p):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if p % i == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is_prime = False<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if is_prime == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(p)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
  "options": {
    "first_line": ["p = 2", "for p in range(2, 101):", "while p <= 100:", "p = 2\nis_prime = True\nwhile p <= 100:"],
    "break_statement": ["break", "continue", "p = p + 1", "pass"],
    "increment": ["p = p + 1", "break", "continue", "pass"]
  },
  "answer": {
    "first_line": "p = 2\nis_prime = True\nwhile p <= 100:",
    "break_statement": "break",
    "increment": "p = p + 1"
  },
  "explanation": "The algorithm initializes p=2 and uses a while loop to check each number up to 100. For each p, is_prime is reset to True, then an inner loop checks divisibility. If a divisor is found, is_prime becomes False and break exits the inner loop. If is_prime remains True, p is printed as prime. Finally, p is incremented to check the next number."
},
{
  "id": 185,
  "domain": "String formatting & methods",
  "type": "multiple_choice",
  "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = \"oranges\"<br>y = \"apples\"<br>z = \"bananas\"<br>data = \"{1} and {0} and {2}\"<br>print(data.format(z, y, x))</div><br><br>What is the output of the print statement?",
  "options": [
    "A. bananas and oranges and apples",
    "B. apples and oranges and bananas",
    "C. oranges and apples and bananas",
    "D. apples and bananas and oranges"
  ],
  "answer": "D. apples and bananas and oranges",
  "explanation": "The format method uses positional arguments. In data.format(z, y, x), z is position 0, y is position 1, and x is position 2. The string \"{1} and {0} and {2}\" means: position 1 (y=\"apples\") and position 0 (z=\"bananas\") and position 2 (x=\"oranges\"), resulting in \"apples and bananas and oranges\"."
},
{
  "id": 186,
  "domain": "Loops & debugging",
  "type": "fill_in_blank",
  "question": "You find errors while evaluating the following code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02 index = 0<br>03 while (index < 10) # change to : ____<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if numbers[index] = 6 # change to ____<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div><br><br>You need to correct the code at line 03 and line 06.",
  "options": {
    "line_03": ["while (index < 10):", "while index < 10:", "while (index < 10);", "for (index < 10):"],
    "line_06": ["if numbers[index] == 6:", "if numbers[index] = 6:", "if (numbers[index] == 6)", "if numbers[index] === 6:"]
  },
  "answer": {
    "line_03": "while (index < 10):",
    "line_06": "if numbers[index] == 6:"
  },
  "explanation": "Line 03 needs a colon (:) at the end to properly start the while loop block. Line 06 needs double equals (==) for comparison instead of single equals (=) which is for assignment. The corrected statements are 'while (index < 10):' and 'if numbers[index] == 6:'."
},
{
  "id": 187,
  "domain": "Operators & precedence",
  "type": "ordering",
  "question": "You are writing a Python application that includes multiple operations on the same line of code. You need to determine the correct order of operations.<br><br>Move the type of operation from the list on the left to the correct locations on the right, with the type of operation that will be performed first at the top and the type of operation that will be performed last at the bottom.<br><br>Note: You will receive partial credit for each correct response.",
  "options": [
    "Addition and Subtraction",
    "And",
    "Exponents",
    "Multiplication and Division",
    "Parentheses",
    "Unary positive, negative, not"
  ],
  "answer": [
    "Parentheses",
    "Exponents",
    "Unary positive, negative, not",
    "Multiplication and Division",
    "Addition and Subtraction",
    "And"
  ],
  "explanation": "Python operator precedence follows this order: 1) Parentheses (highest precedence), 2) Exponents (**), 3) Unary operators (+, -, not), 4) Multiplication and Division (*, /, //, %), 5) Addition and Subtraction (+, -), 6) Logical AND (lowest precedence in this list). This follows the standard mathematical order of operations with Python-specific logical operators."
},
{
  "id": 188,
  "domain": "Random module & list operations",
  "type": "fill_in_blank",
  "question": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>roomsAssigned=[1]<br>room_number=1<br>groupList=[\"Ropes\",\"Rafting\",\"Obstacle\",\"Wellness\"]<br>count=0<br>print(\"Welcome to CompanyPro's Team-Building Weekend!\")<br>name=input(\"Please enter your name (q to quit)? \")<br>while name.lower() != 'q' and count < 50:<br>&nbsp;&nbsp;&nbsp;&nbsp;while room_number in roomsAssigned:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"{name}, your room number is {room_number}\")<br>&nbsp;&nbsp;&nbsp;&nbsp;roomsAssigned.append(room_number)<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"You will meet with the {group} Group this afternoon.\")<br>&nbsp;&nbsp;&nbsp;&nbsp;count+=1<br>&nbsp;&nbsp;&nbsp;&nbsp;name=input(\"Please enter your name (q to quit)? \")</div>",
  "options": {
    "room_generation": ["room_number = random.randint(1, 100)", "room_number = random.choice([1,2,3,4,5])", "room_number = random.random()", "room_number = random.randrange(1, 101)"],
    "group_selection": ["group = random.choice(groupList)", "group = random.randint(0, 3)", "group = random.sample(groupList, 1)", "group = groupList[random.randint(0, 3)]"]
  },
  "answer": {
    "room_generation": "room_number = random.randint(1, 100)",
    "group_selection": "group = random.choice(groupList)"
  },
  "explanation": "For room assignment, `random.randint(1, 100)` generates a random integer between 1 and 100 inclusive, suitable for room numbers. For group selection, `random.choice(groupList)` randomly selects one item from the groupList, which is the most straightforward way to pick a team-building group."
},
{
  "id": 189,
  "domain": "Loops & string operations",
  "type": "fill_in_blank",
  "question": "You are writing code to meet the following requirements:<br><br>• Allow users to repeatedly enter words.<br>• Output the number of characters in each word.<br><br>Complete the code by selecting the correct option from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = \"Hello\"<br>____ x != \"QUIT\":<br>&nbsp;&nbsp;&nbsp;&nbsp;num = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;____ char ____ x:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;print(num)<br>&nbsp;&nbsp;&nbsp;&nbsp;x = input(\"Enter a new word or QUIT to exit: \")</div>",
  "options": {
    "loop_type": ["while", "for", "if", "repeat"],
    "iteration_keyword": ["for", "while", "if", "each"],
    "membership_operator": ["in", "of", "within", "inside"]
  },
  "answer": {
    "loop_type": "while",
    "iteration_keyword": "for",
    "membership_operator": "in"
  },
  "explanation": "Use `while` to create a loop that continues until the user enters 'QUIT'. Use `for char in x:` to iterate through each character in the string x. The `in` operator is used for membership testing and iteration over sequences like strings."
},
{
  "id": 190,
  "domain": "Data types & operators",
  "type": "fill_in_blank",
  "question": "You need to identify the data types of various type operations.<br><br>Move the appropriate data types from the list on the left to the correct type operations on the right. You may use each data type once, more than once, or not at all.<br><br>Note: You will receive partial credit for each correct match.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>type(+1E10) → ____<br>type(5.0) → ____<br>type(\"True\") → ____<br>type(False) → ____</div>",
  "options": {
    "first_type": ["int", "float", "str", "bool"],
    "second_type": ["int", "float", "str", "bool"],
    "third_type": ["int", "float", "str", "bool"],
    "fourth_type": ["int", "float", "str", "bool"]
  },
  "answer": {
    "first_type": "float",
    "second_type": "float",
    "third_type": "str",
    "fourth_type": "bool"
  },
  "explanation": "type(+1E10) returns float because scientific notation (1E10) creates a float value. type(5.0) returns float because the decimal point makes it a floating-point number. type(\"True\") returns str because it's a string enclosed in quotes. type(False) returns bool because False is a boolean literal."
},
{
  "id": 191,
  "domain": "File operations & I/O",
  "type": "fill_in_blank",
  "question": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Creates a file using the specified name.<br>• Appends the phrase \"End of listing\" to the file.<br><br>You need to complete the code to meet the requirements.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>file = ____<br>____(\"End of listing\")</div>",
  "options": {
    "file_creation": ["open(\"listing.txt\", \"w\")", "open(\"listing.txt\", \"r\")", "open(\"listing.txt\", \"a\")", "create(\"listing.txt\")"],
    "append_operation": ["file.write", "file.append", "file.add", "file.insert"]
  },
  "answer": {
    "file_creation": "open(\"listing.txt\", \"a\")",
    "append_operation": "file.write"
  },
  "explanation": "Use `open(\"listing.txt\", \"a\")` to open the file in append mode, which creates the file if it doesn't exist and allows adding content to the end. Use `file.write(\"End of listing\")` to write the specified phrase to the file. The 'a' mode is appropriate for appending content without overwriting existing data."
},
{
  "id": 192,
  "domain": "Functions & string operations",
  "type": "fill_in_blank",
  "question": "A game development company needs a way to find the number of words in a list that contain a specific letter.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'># Function accepts list of words and letter to search for.<br># Returns count of the number of words that contain that letter.<br>def count_letter(letter, word_list):<br>&nbsp;&nbsp;&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;for ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return count<br><br># word_list is populated by the readWords() function. Code not shown.<br>word_list = readWords()<br><br>letter = input(\"Which letter would you like to count\")<br>letter_count = count_letter(letter, word_list)<br>print(\"There are:\", letter_count, \" words that contain \", letter)</div>",
  "options": {
    "loop_variable": ["word_list in word", "word in word_list", "word == word_list", "word is word_list"],
    "condition": ["word is letter", "letter is word", "word in letter", "letter in word"]
  },
  "answer": {
    "loop_variable": "word in word_list",
    "condition": "letter in word"
  },
  "explanation": "Use `word in word_list` to iterate through each word in the list. Use `letter in word` to check if the specified letter exists anywhere within the current word. The `in` operator checks for substring membership, returning True if the letter is found in the word."
},
{
  "id": 193,
  "domain": "Loops & control flow",
  "type": "multiple_choice",
  "question": "Review the following code segment:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>product = 2<br>n = 5<br>while (n != 0):<br>&nbsp;&nbsp;&nbsp;&nbsp;product *= n<br>&nbsp;&nbsp;&nbsp;&nbsp;print(product)<br>&nbsp;&nbsp;&nbsp;&nbsp;n -= 1<br>&nbsp;&nbsp;&nbsp;&nbsp;if n == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break</div><br><br>How many lines of output does the code print?<br><br>Enter the number as an integer:",
  "options": [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 5"
  ],
  "answer": "B. 2",
  "explanation": "Step through: Initially product=2, n=5. First iteration → product=10, print 10, n=4 (not 3, continue). Second iteration → product=40, print 40, n=3 → break. Total = 2 lines of output."
},
{
  "id": 194,
  "domain": "Loops & control flow",
  "type": "multiple_select",
  "question": "You need to write code that generates a random number that meets the following requirements:<br><br>- The number is a multiple of 5.<br>- The lowest number is 5.<br>- The highest number is 100.<br><br>Which two code segments will meet the requirements? (Choose 2)",
  "options": [
    "A.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randint<br>print(randint(1, 20) * 5)</div>",
    "B.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randint<br>print(randint(0, 20) * 5)</div>",
    "C.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randrange<br>print(randrange(0, 100, 5))</div>",
    "D.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randrange<br>print(randrange(5, 105, 5))</div>"
  ],
  "answer": [
    "A.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randint<br>print(randint(1, 20) * 5)</div>",
    "D.<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randrange<br>print(randrange(5, 105, 5))</div>"
  ],
  "explanation": "Option A works because randint(1,20)*5 generates numbers between 5 and 100 inclusive, all multiples of 5. Option D works because randrange(5,105,5) directly generates multiples of 5 from 5 to 100 inclusive. Option B includes 0 (invalid), and Option C allows 0 as well."
},
{
  "id": 195,
  "domain": "Input & Output",
  "type": "multiple_choice",
  "question": "What does the following statement do?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = input()</div>",
  "options": [
    "A. Displays a message box that allows user input.",
    "B. Displays all input peripheral devices on the computer.",
    "C. Allows a user to drow",
    "D. Allows a user to enter text in the console."
  ],
  "answer": "D. Allows a user to enter text in the console.",
  "explanation": "The input() function in Python pauses program execution and waits for the user to type text in the console. The typed text is returned as a string and stored in the variable."
},
{
  "id": 196,
  "domain": "Comparison operators & logic errors",
  "type": "true_false",
  "question": "You are creating a Python program that compares numbers. You write the following code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 nuni = eval(input (\"Please enter the first number: \"))<br>02 num2 = eval(input (\"Please enter the second number: \"))<br>03 if nuni == num2:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(\"The two numbers are equal.\")<br>05 if nuni <= num2:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;print(\"Number 1 is less than number 2.\")<br>07 if nuni > num2:<br>08 &nbsp;&nbsp;&nbsp;&nbsp;print(\"Number 1 is greater than number 2.\")<br>09 if num2 = num1:<br>10 &nbsp;&nbsp;&nbsp;&nbsp;print(\"The two numbers are the same.\")</div><br><br>You need to ensure that the comparisons are accurate. For each statement, select True or False:",
  "options": {
    "statement1": "The print statement at line 04 will print only if the two numbers are equal in value.",
    "statement2": "The print statement at line 06 will print only if num1 is less than num2.",
    "statement3": "The print statement at line 08 will print only if num1 is greater than num2.",
    "statement4": "The statement at line 09 is an invalid comparison."
  },
  "answer": {
    "statement1": "True: The print statement at line 04 will print only if the two numbers are equal in value.",
    "statement2": "False: The print statement at line 06 will print only if num1 is less than num2.",
    "statement3": "True: The print statement at line 08 will print only if num1 is greater than num2.",
    "statement4": "True: The statement at line 09 is an invalid comparison."
  },
  "explanation": "Line 04: Correct - == operator properly checks for equality. Line 06: False - <= operator will print for both less than AND equal cases, not just less than. Line 08: True - > operator correctly checks for greater than. Line 09: True - = is assignment, not comparison (should be ==), and there's a typo (num1 vs nuni)."
},
{
  "id": 197,
  "domain": "Exception handling & try statements",
  "type": "true_false",
  "question": "For each statement about try statements, select True or False:",
  "options": {
    "statement1": "A try statement can have one or more except clauses.",
    "statement2": "A try statement can have a finally clause without an except clause.",
    "statement3": "A try statement can have a finally clause and an except clause.",
    "statement4": "A try statement can have one or more finally clauses."
  },
  "answer": {
    "statement1": "True: A try statement can have one or more except clauses.",
    "statement2": "True: A try statement can have a finally clause without an except clause.",
    "statement3": "True: A try statement can have a finally clause and an except clause.",
    "statement4": "False: A try statement can have one or more finally clauses."
  },
  "explanation": "Python try statement rules: 1) Can have multiple except clauses for different exception types. 2) Can have a finally clause without except (try-finally structure). 3) Can have both except and finally clauses (try-except-finally). 4) Cannot have multiple finally clauses - only one finally is allowed per try block."
},
{
  "id": 198,
  "domain": "Conditional logic & number operations",
  "type": "fill_in_blank", 
  "question": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>num = int(input(\"Enter a number with 1 or 2 digits: \"))<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"1\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"2\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \">2\"<br><br>print(digits + \" digits.\")</div><br><br>Complete the code by selecting the correct code segment from each drop-down list.",
  "options": {
    "first_condition": ["if num < 10:", "if num <= 9:", "if len(str(num)) == 1:", "if num < 0:"],
    "second_condition": ["elif num < 100:", "elif num <= 99:", "elif num > 9 and num < 100:", "elif len(str(num)) == 2:"],
    "third_condition": ["else:", "elif num >= 100:", "elif num > 99:", "elif len(str(num)) > 2:"]
  },
  "answer": {
    "first_condition": "if num < 10:",
    "second_condition": "elif num < 100:",
    "third_condition": "else:"
  },
  "explanation": "Use `if num < 10:` for single-digit numbers (0-9). Use `elif num < 100:` for two-digit numbers (10-99). Use `else:` for all numbers 100 and above (three or more digits). This approach uses mathematical comparison rather than string conversion for efficiency."
},
{
  "id": 199,
  "domain": "List operations & comparisons",
  "type": "fill_in_blank",
  "question": "You develop a Python application for your company. You need to complete the code so that the print statements are accurate.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numList = [1, 2, 3, 4, 5]<br>alphalist = [\"a\", \"b\", \"c\", \"d\", \"e\"]<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"The values in numList are equal to alphalist\")<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"The values in numList are not equal to alphalist\")</div><br><br>Complete the code by selecting the correct code segment from each drop-down list.",
  "options": {
    "condition": ["if numList == alphalist:", "if numList is alphalist:", "if numList.equals(alphalist):"],
    "else_clause": ["else:", "elif numList != alphalist:", "otherwise:"]
  },
  "answer": {
    "condition": "if numList == alphalist:",
    "else_clause": "else:"
  },
  "explanation": "Use `if numList == alphalist:` to compare if the two lists have the same values. Since they contain different data types (numbers vs strings), the condition will be False, so the else clause will execute. The `==` operator checks for value equality, while `is` would check if they are the same object in memory."
},
{
  "id": 200,
  "domain": "Code documentation & comments",
  "type": "multiple_choice",
  "question": "You develop a Python application for your company. You want to add notes to your code so other team members will understand it.<br><br>What should you do?",
  "options": [
    "A. Place the notes within /* and */ in any code segment.",
    "B. Place the notes within <!-- and --> in any code segment.", 
    "C. Place the notes after // on any line.",
    "D. Place the notes after # on any line."
  ],
  "answer": "D. Place the notes after # on any line.",
  "explanation": "In Python, comments are created using the # symbol. Everything after # on a line is treated as a comment and ignored by the Python interpreter. Options A (/* */) is for multi-line comments in languages like Java/C/C++, Option B (<!-- -->) is for HTML comments, and Option C (//) is for single-line comments in languages like Java/C/C++/JavaScript."
},
{
  "id": 201,
  "domain": "Function parameters & variable scope",
  "type": "true_false",
  "question": "You are writing a function that increments the player score in a game. The function has the following requirements:<br><br>- If no value is specified for points, then points start at one.<br>- If bonus is True, then points must be doubled.<br><br>You write the following code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def increment_score(score, bonus, points):<br>02 &nbsp;&nbsp;&nbsp;&nbsp;if bonus == True:<br>03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;points = points * 2<br>04 &nbsp;&nbsp;&nbsp;&nbsp;score = score + points<br>05 &nbsp;&nbsp;&nbsp;&nbsp;return score<br>06 points = 5<br>07 score = 10<br>08 new_score = increment_score(score, True, points)</div><br><br>For each statement, select True or False:",
  "options": {
    "statement1": "To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1):",
    "statement2": "If you do not change line 01 and the function is called with only two parameters, an error occurs.",
    "statement3": "Line 03 will also modify the value of the variable points declared at line 06."
  },
  "answer": {
    "statement1": "True: To meet the requirements, you must change line 01 to: def increment_score(score, bonus, points = 1):",
    "statement2": "True: If you do not change line 01 and the function is called with only two parameters, an error occurs.",
    "statement3": "False: Line 03 will also modify the value of the variable points declared at line 06."
  },
  "explanation": "1) True - Default parameter (points=1) is needed to meet the 'if no value specified' requirement. 2) True - Without default parameter, calling with only 2 arguments would cause TypeError (missing required argument). 3) False - Line 03 modifies the local points parameter, not the global variable from line 06 (Python uses pass-by-object-reference, and reassignment creates a new local variable)."
},
{
  "id": 202,
  "domain": "Function definition & parameter passing",
  "type": "multiple_select",
  "question": "A bicycle company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs.<br><br>You write the following Python code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'><br>\tname = input(\"what is your name? \")<br>\treturn name<br><br>\tcalories = miles * calories_per_mile<br>\treturn calories<br>distance = int(input(\"How many miles did you bike this week? \")<br>burn_rate = 50<br>biker = get_name()<br>calories_burned = calc_calories(distance, burn_rate)<br>print(biker, \" , you burned about \", calories_burned, \" calories.\")</div><br><br>You need to define the two required functions.<br><br>Which two code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)",
  "options": [
    "A. @1 def get_name():",
    "B. @1 def get_name(biker):",
    "C. @1 def get_name(name):",
    "D. @4 def calc_calories():",
    "E. @4 def calc_calories(miles, burn_rate):",
    "F. @4 def calc_calories(miles, calories_per_mile):"
  ],
  "answer": [
    "A. @1 def get_name():",
    "F. @4 def calc_calories(miles, calories_per_mile):"
  ],
  "explanation": "For get_name(): The function is called without arguments (biker = get_name()) and gets input internally, so it needs no parameters. For calc_calories(): The function is called with two arguments (distance, burn_rate) and the calculation uses miles * calories_per_mile."
},
{
  "id": 203,
  "domain": "Comments & syntax parsing",
  "type": "true_false",
  "question": "You create the following Python function to calculate the power of a number.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'> # The calc_power function calculates exponents<br># x is the base<br>03 # y is the exponent<br># The value of x raised to the y power is returned<br>def calc_power(x, y):<br>\tcomment = \"# Return the value\"<br>\treturn x ** y # raise x to the y power</div><br><br>For each statement, select True or False:",
  "options": {
    "statement1": "Python will not check the syntax of lines 01 through 04.",
    "statement2": "The pound sign (#) is optional for lines 02 and 03.",
    "statement3": "The string in line 06 will be interpreted as a comment.",
    "statement4": "Line 07 contains an inline comment."
  },
  "answer": {
    "statement1": "True: Python will not check the syntax of lines 01 through 04.",
    "statement2": "False: The pound sign (#) is optional for lines 02 and 03.",
    "statement3": "False: The string in line 06 will be interpreted as a comment.",
    "statement4": "True: Line 07 contains an inline comment."
  },
  "explanation": "1) False - Python DOES check syntax of comment lines (invalid syntax in comments would still cause errors). 2) False - The # is REQUIRED for comments; without it, lines 02-03 would be invalid Python syntax. 3) False - Line 06 is a string assignment, not a comment (the # is inside quotes). 4) True - Line 07 has a valid inline comment after the # symbol."
},
{
  "id": 204,
  "domain": "File operations & I/O",
  "type": "true_false",
  "question": "Review the following code segment:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = open(\"python.txt\", \"a\")<br>f.write(\"This is a line of text.\")<br>f.close()</div><br><br>For each statement about the code segment, select True or False:",
  "options": {
    "statement1": "A file named python.txt is created if it does not exist.",
    "statement2": "The data in the file will be overwritten.",
    "statement3": "Other code can open the file after this code runs."
  },
  "answer": {
    "statement1": "True: A file named python.txt is created if it does not exist.",
    "statement2": "False: The data in the file will be overwritten.",
    "statement3": "True: Other code can open the file after this code runs."
  },
  "explanation": "1) True - The 'a' (append) mode creates the file if it doesn't exist. 2) False - 'a' mode appends to the end of the file, it doesn't overwrite existing content ('w' mode would overwrite). 3) True - The file is properly closed with f.close(), so other processes can access it after this code runs."
},
{
  "id": 205,
  "domain": "String manipulation & loops",
  "type": "fill_in_blank",
  "question": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.<br><br>You need to write a Python function that outputs the characters in a name in the correct order.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Function reverses characters in a string.<br>#returns new string in reversed order.<br><br>def reverse_name(backward_name):<br>&nbsp;&nbsp;&nbsp;&nbsp;forward_name = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;length = ____<br>&nbsp;&nbsp;&nbsp;&nbsp;while length >= 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forward_name += ____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;length = length - 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return forward_name<br><br>print(reverse_name(\"nohtyp\"))</div><br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br>Note: You will receive partial credit for each correct selection.",
  "options": {
    "length_assignment": ["len(backward_name) - 1", "len(backward_name)", "backward_name.length() - 1", "strlen(backward_name) - 1"],
    "character_access": ["backward_name[length]", "backward_name.charAt(length)", "backward_name(length)", "backward_name.substr(length, 1)"]
  },
  "answer": {
    "length_assignment": "len(backward_name) - 1",
    "character_access": "backward_name[length]"
  },
  "explanation": "Use `len(backward_name) - 1` to get the starting index (last character position). Use `backward_name[length]` to access each character from the end to the beginning. The while loop decrements length from the last index to 0, building the reversed string character by character."
},
{
  "id": 206,
  "domain": "String formatting & output",
  "type": "multiple_select",
  "question": "You are creating an eCommerce script that accepts input from the user and outputs the data in a comma-delimited format.<br><br>You write the following code to accept input:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>item = input(\"Enter the item name: \")<br>sales = int(input(\"Enter the quantity: \"))</div><br><br>The output must meet the following requirements:<br><br>- Enclose strings in double quotes.<br>- Do not enclose numbers in quotes or other characters.<br>- Separate items by commas.<br><br>You need to complete the code to meet the requirements.<br><br>Which two code segments could you use? Each correct answer presents a complete solution. (Choose 2.)<br><br>Note: You will receive partial credit for each correct answer.",
  "options": [
    "A. print('\"' + item + '\",', sales)",
    "B. print(item + ', ' + sales)", 
    "C. print('{0},{1}'.format(item, sales))",
    "D. print('\"{0}\",{1}'.format(item, sales))"
  ],
  "answer": [
    "A. print('\"' + item + '\",', sales)",
    "D. print('\"{0}\",{1}'.format(item, sales))"
  ],
  "explanation": "Option A: Correct - Uses string concatenation to wrap item in quotes, followed by comma and unquoted sales. Option D: Correct - Uses format() with quotes around the string placeholder and no quotes around the number placeholder. Option B: Incorrect - Doesn't wrap string in quotes. Option C: Incorrect - Doesn't wrap string in quotes and has a syntax error (missing opening quote)."
},
{
  "id": 207,
  "domain": "Loops & control flow",
  "type": "fill_in_blank",
  "question": "You are creating a Python program that will let a user guess a number from 1 to 10. The user is allowed up to three guesses. If the user guesses the correct number, the program must stop asking for guesses.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randint<br>target = randint(1,10)<br>chance = 1<br>print (\"Guess an integer from 1 to 10. You will have 3 chances.\")<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;guess = int(input(\"Guess an integer: \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;if guess > target:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is too high\")<br>&nbsp;&nbsp;&nbsp;&nbsp;elif guess < target:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is too low\")<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is just right!\")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br></div><br><br>Complete the code by selecting the correct code segments from the list.",
  "options": {
    "loop_statement": ["while chance <= 3:", "while chance < 3:", "for chance in range(1, 4):"],
    "break_statement": ["break", "pass", "continue"],
    "increment_statement": ["chance += 1", "chance = chance + 1", "chance = 2"]
  },
  "answer": {
    "loop_statement": "while chance <= 3:",
    "break_statement": "break",
    "increment_statement": "chance += 1"
  },
  "explanation": "Use `while chance <= 3:` to allow exactly 3 guesses (chance starts at 1, goes to 2, 3, then 4 which breaks the loop). Use `break` in the else clause to exit immediately when correct guess is made. Use `chance += 1` after the if-else block to increment the counter for incorrect guesses only."
},
{
  "id": 208,
  "domain": "Module imports & file operations",
  "type": "multiple_choice",
  "question": "You write the following function to read a data file and print each line of the file. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>81 def read_file(file):<br>82 &nbsp;&nbsp;&nbsp;&nbsp;line = None<br>83 &nbsp;&nbsp;&nbsp;&nbsp;if os.path.isfile(file):<br>84 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = open(file,'r')<br>85 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for line in data:<br>86 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)</div><br><br>When you run the program, you receive an error on line 83.<br><br>What is causing the error?",
  "options": [
    "A. The `isfile` method does not exist in the path object.",
    "B. The path method does not exist in the os object.", 
    "C. You need to import the os library.",
    "D. The `isfile` method does not accept one parameter."
  ],
  "answer": "C. You need to import the os library.",
  "explanation": "The error occurs because the `os` module has not been imported. Python cannot recognize `os.path.isfile()` without first importing the os module with `import os`. The isfile method does exist, path is a valid submodule of os, and isfile does accept one parameter (the file path)."
},
{
  "id": 209,
  "domain": "File operations & existence checking",
  "type": "fill_in_blank",
  "question": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>- Checks to see whether a file exists.<br>- If the file exists, displays its contents.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;file = open('myfile.txt')<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;file.close()</div><br><br>Complete the code by selecting the correct code segment from each drop-down list.<br><br>Note: You will receive partial credit for each correct selection.",
  "options": {
    "condition": ["if os.path.isfile('myfile.txt'):", "if os.exists('myfile.txt'):", "if file.exists('myfile.txt'):", "if path.isfile('myfile.txt'):"],
    "display_content": ["print(file.read())", "display(file.contents)", "show(file.data)", "output(file.text)"]
  },
  "answer": {
    "condition": "if os.path.isfile('myfile.txt'):",
    "display_content": "print(file.read())"
  },
  "explanation": "Use `os.path.isfile('myfile.txt'):` to check if the file exists (returns True if it's a file that exists). Use `print(file.read())` to display the entire contents of the file. The file should be opened in read mode and properly closed after reading."
},
{
  "id": 210,
  "domain": "Conditional logic & operators",
  "type": "multiple_choice",
  "question": "You write the following code to determine a student's final grade based on their current grade (grade) and rank (rank):<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>grade = 76<br>rank = 3<br><br>if grade > 80 and rank >= 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade += 10<br>elif grade >= 70 and rank > 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade += 5<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade -= 5<br><br>print(grade)</div><br><br>What value will print?",
  "options": [
    "A. 71",
    "B. 76", 
    "C. 81",
    "D. 86"
  ],
  "answer": "A. 71",
  "explanation": "Step through the conditions: 1) grade > 80 (76 > 80 = False) - first condition fails. 2) grade >= 70 (76 >= 70 = True) AND rank > 3 (3 > 3 = False) - second condition fails. 3) Execute else clause: grade -= 5 → 76 - 5 = 71. Therefore, 71 will be printed."
},
{
  "id": 211,
  "domain": "String validation & conditional logic",
  "type": "fill_in_blank",
  "question": "You are writing a Python program to validate employee numbers.<br><br>The employee number must have the format ddd-dd-dddd and consist only of numbers and dashes. The program must print True if the format is correct and print False if the format is incorrect.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br><br>parts = \"\"<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;employee_number = input(\"Enter employee number (ddd-dd-dddd): \")<br>&nbsp;&nbsp;&nbsp;&nbsp;parts = employee_number.split('-')<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if len(parts) == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(parts[0]) == 3 and len(parts[1]) == 2 and len(parts[2]) == 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;print(valid)</div>",
  "options": {
    "first_dropdown": ["Employee_number = \"\"", "Employee_number = \"sentinel\""],
    "second_dropdown": ["while employee_number != \"\":", "while employee_number != \"sentinel\":"],
    "third_dropdown": ["valid = False", "valid = True"],
    "fourth_dropdown": ["valid = False", "valid = True"]
  },
  "answer": {
    "first_dropdown": "Employee_number = \"\"",
    "second_dropdown": "while employee_number != \"\":",
    "third_dropdown": "valid = False",
    "fourth_dropdown": "valid = True"
  },
  "explanation": "Initialize Employee_number to 'sentinel' to enter the loop. Use while loop to continue until 'sentinel' is entered. Initialize valid = False at start of each iteration. Set valid = True only when all validation conditions pass."
},
{
  "id": 212,
  "domain": "Functions & conditional logic",
  "type": "fill_in_blank",
  "question": "You are coding a math utility by using Python.<br><br>You are writing a function to compute roots.<br><br>The function must meet the following requirements:<br>• If a is non-negative, return a**(1/b)<br>• If a is negative and even, return \"Result is an imaginary number\"<br>• If a is negative and odd, return -(a)**(1/b)<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def safe_root(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = a**(1/b)<br><br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = \"Result is an imaginary number\"<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = -(a)**(1/b)<br>&nbsp;&nbsp;&nbsp;&nbsp;return answer</div>",
  "options": {
    "first_dropdown": ["if a >= 0:", "if a % 2 == 0:", "else:", "elif:"],
    "second_dropdown": ["if a >= 0:", "if a % 2 == 0:", "else:", "elif:"],
    "third_dropdown": ["if a >= 0:", "if a % 2 == 0:", "else:", "elif:"],
    "fourth_dropdown": ["if a >= 0:", "if a % 2 == 0:", "else:", "elif:"]
  },
  "answer": {
    "first_dropdown": "if a >= 0:",
    "second_dropdown": "else:",
    "third_dropdown": "if a % 2 == 0:",
    "fourth_dropdown": "else:"
  },
  "explanation": "The structure uses if a >= 0 for non-negative numbers, else for the negative case, then if a % 2 == 0 to check if negative number is even (imaginary result), and else for odd negative numbers (negative root result)."
},
{
  "id": 213,
  "domain": "Functions & conditional logic",
  "type": "fill_in_blank",
  "question": "QUESTION 3 HOTSPOT<br>You work for a company that distributes media for all ages.<br>You are writing a function that assigns a rating based on a user’s age. The function must meet the following requirements:<br>• Anyone 18 years old or older receives a rating of \"A\"<br>• Anyone 13 or older, but younger than 18, receives a rating of \"T\"<br>• Anyone 12 years old or younger receives a rating of \"C\"<br>• If the age is unknown, the rating is set to \"C\"<br><br>Complete the code by selecting the correct line for each dropdown (if / elif / elif / else).<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;rating = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating</div>",
  "options": {
    "if_clause": [
      "if age < 13: rating = \"C\"",
      "if age < 18: rating = \"T\"",
      ": rating = \"A\"",
      "if age == None: rating = \"C\""
    ],
    "elif1_clause": [
      "elif age < 13: rating = \"C\"",
      "elif age < 18: rating = \"T\"",
      ": rating = \"A\"",
      "elif age == None: rating = \"C\""
    ],
    "elif2_clause": [
      "elif age < 13: rating = \"C\"",
      "elif age < 18: rating = \"T\"",
      ": rating = \"A\"",
      "elif age == None: rating = \"C\""
    ],
    "else_clause": [
      "else: rating = \"A\"",
      "else: rating = \"T\"",
      "else: rating = \"C\""
    ]
  },
  "answer": {
    "if_clause": "if age < 18: rating = \"T\"",
    "elif1_clause": "elif age < 13: rating = \"C\"",
    "elif2_clause": "elif age == None: rating = \"C\"",
    "else_clause": "else: rating = \"A\""
  },
  "explanation": "Per the provided answer key: under 13 → 'C'; 13–17 → 'T'; 18+ → 'A'; unknown age → 'C'."
},
{
  "id": 215,
  "domain": "Operators & precedence",
  "type": "fill_in_blank",
  "question": "You develop a Python application for your company.<br><br>You have the following code. Line numbers are included for reference only.<br><br>01 def main(a,b,c,d):<br>02 &nbsp;&nbsp;&nbsp;&nbsp;value = a+b*c-d<br>03 &nbsp;&nbsp;&nbsp;&nbsp;return value<br><br>Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<br><br>Hot Area:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Which part of the expression will be evaluated first? ____<br><br>Which operation will be evaluated second? ____<br><br>Which expression is equivalent to the expression in the function? ____</div>",
  "options": {
    "first_evaluated": ["a-b", "b*c", "c-d"],
    "second_operation": ["addition", "subtraction"],
    "equivalent_expression": ["(a+b) * (c-d)", "(a + (b*c)) - d", "a + ((b * c) - d)"]
  },
  "answer": {
    "first_evaluated": "b*c",
    "second_operation": "addition", 
    "equivalent_expression": "(a + (b*c)) - d"
  },
  "explanation": "Following operator precedence rules: 1) Multiplication (b*c) is evaluated first due to higher precedence. 2) Addition (a + result) is evaluated second from left to right. 3) Subtraction is evaluated last. The equivalent expression with explicit parentheses is (a + (b*c)) - d, showing the order of operations."
},
{
  "id": 214,
  "domain": "String methods & conditional logic",
  "type": "ordering",
  "question": "You are creating a Python script to evaluate input and check for upper and lower case.<br><br>Which four code segments should you use to develop the solution? To answer, move the appropriate code segment from the list of code segments to the answer area and arrange them in the correct order.<br><br>Note: You will receive partial credit for each correct placement.",
  "options": [
    "else:\n    print(name, \"is mixed case.\")",
    "else:\n    print(name, \"is lower case.\")",
    "name = input(\"Enter your name: \")",
    "else:\n    print(name, \"is upper case.\")",
    "elif name.upper() == name:\n    print(name, \"is all upper case.\")",
    "if name.lower() == name:\n    print(name, \"is all lower case.\")"
  ],
  "answer": [
    "name = input(\"Enter your name: \")",
    "if name.lower() == name:\n    print(name, \"is all lower case.\")",
    "elif name.upper() == name:\n    print(name, \"is all upper case.\")",
    "else:\n    print(name, \"is mixed case.\")"
  ],
  "explanation": "The correct order is: 1) Get input from user, 2) Check if input is all lowercase, 3) Use elif to check if input is all uppercase, 4) Use else for mixed case. This creates a logical flow that first gets the name, then checks lowercase, then uppercase, and finally handles the mixed case scenario."
},
{
  "id": 1,
  "domain": "Loops & control flow",
  "type": "fill_in_blank",
  "question": "You are developing a Python application for an online product distribution company.<br><br>You need the program to iterate through a list of products and escape when a target product ID is found.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br>NOTE: Each correct selection is worth one point.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>index = 0<br><br>____ (index < 10):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(productIdList[index])<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if productIdList[index] == 6:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
  "options": {
    "loop_type": ["while", "for", "if", "break"],
    "exit_statement": ["while", "for", "if", "break"]
  },
  "answer": {
    "loop_type": "while",
    "exit_statement": "break"
  },
  "explanation": "Use 'while' to create a loop that continues as long as index < 10. Use 'break' to exit the loop immediately when the target product ID (6) is found. The else clause increments the index only when the target is not found, ensuring the loop progresses through the list."
},
{
  "id": 216,
  "domain": "Data types & dictionary operations",
  "type": "fill_in_blank",
  "question": "You create the following program to locate a conference room and display the room name. Line numbers are included for reference only.<br><br>01 rooms = {1: 'foyer', 2: 'Conference Room'}<br>02 room = input('Enter the room number: ')<br>03 if not room in rooms:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print('Room does not exist.')<br>05 else:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;print(\"The room name is \" + rooms[room])<br><br>Colleagues report that the program sometimes produces incorrect results.<br>You need to troubleshoot the program. Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<br><br>Hot Area:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Which two data types are stored in the rooms list at line 01? ____<br><br>What is the data type of room at line 02? ____<br><br>Why does line 03 fail to find the rooms? ____</div>",
  "options": {
    "data_types_in_rooms": ["bool and string", "float and bool", "int and string", "float and int"],
    "room_data_type": ["bool", "float", "int", "string"],
    "line03_failure_reason": ["Invalid syntax", "Mismatched data type(s)", "Misnamed variable(s)"]
  },
  "answer": {
    "data_types_in_rooms": "int and string",
    "room_data_type": "string",
    "line03_failure_reason": "Invalid syntax"
  },
  "explanation": "The rooms dictionary has integer keys (1, 2) and string values ('foyer', 'Conference Room'), so it stores int and string data types. The input() function returns a string, so room is of string data type. Line 03 fails due to invalid syntax - the correct syntax should be 'if room not in rooms:' rather than 'if not room in rooms:'."
},
{
  "id": 2,
  "domain": "Input & type casting",
  "type": "multiple_choice",
  "question": "The ABC company has hired you as an intern on the coding team that creates e‑commerce applications.<br><br>You must write a script that asks the user for a value. The value must be used as a whole number in a calculation, even if the user enters a decimal value.<br><br>Which code segment should you use?",
  "options": [
    "A. totalItems = input(\"How many items would you like?\")",
    "B. totalItems = float(input(\"How many items would you like?\"))",
    "C. totalItems = str(input(\"How many items would you like?\"))",
    "D. totalItems = int(input(\"How many items would you like?\"))"
  ],
  "answer": "B. totalItems = float(input(\"How many items would you like?\"))",
  "explanation": "Casting the input to float accepts decimal input and converts it to a numeric type suitable for calculations."
},
{
  "id": 4,
  "domain": "Data types & type conversion",
  "type": "true_false",
  "question": "During school holidays, you volunteer to explain some basic programming concepts to younger siblings.<br><br>You want to introduce the concept of data types in Python. You create the following three code segments:<br><br># Code segment 1<br>x1 = \"20\"<br>y1 = 3<br>a = x1 * y1<br><br># Code segment 2<br>x2 = 6<br>y2 = 4<br>b = x2 / y2<br><br># Code segment 3<br>x3 = 2.5<br>y3 = 1<br>c = x3 / y3<br><br>You need to evaluate the code segments.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br>NOTE: Each correct selection is worth one point.<br><br>Hot Area:",
  "options": {
    "statement1": "After executing code segment 1, the data type of variable a is str.",
    "statement2": "After executing code segment 2, the data type of variable b is float.",
    "statement3": "After executing code segment 3, the data type of variable c is int."
  },
  "answer": {
    "statement1": "True: After executing code segment 1, the data type of variable a is str.",
    "statement2": "True: After executing code segment 2, the data type of variable b is float.",
    "statement3": "False: After executing code segment 3, the data type of variable c is int."
  },
  "explanation": "Statement 1: Yes - String multiplication (\"20\" * 3) results in \"202020\", which is a string. Statement 2: Yes - Division in Python 3 always returns a float, so 6 / 4 = 1.5 (float). Statement 3: No - Division always returns float in Python 3, so 2.5 / 1 = 2.5 (float), not int."
},
{
  "id": 218,
  "domain": "Conditional logic & string operations",
  "type": "fill_in_blank",
  "question": "The ABC Video company needs a way to determine the cost that a customer will pay for renting a DVD. The cost is dependent on the time of day the DVD is returned. However, there are also special rates on Thursdays and Sundays. The fee structure is shown in the following list:<br>• The cost is $1.59 per night.<br>• If the DVD is returned after 8 PM, the customer will be charged an extra day.<br>• If the video is rented on a Sunday, the customer gets 30% off for as long as they keep the video.<br>• If the video is rented on a Thursday, the customer gets 50% off for as long as they keep the video.<br><br>You need to write code to meet the requirements.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>ontime = input(\"Was video returned before 8 pm? y or n\").lower()<br><br>days_rented = int(input(\"How many days was video rented?\"))<br><br>day_rented = input(\"What day was the video rented?\").capitalize()<br><br>cost_per_day = 1.59<br><br>if ontime ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;days_rented += 1<br><br>if day_rented ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) * .7<br><br>elif day_rented ____:<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) * .5</div>",
  "options": {
    "ontime_condition": ["!= \"n\":", "== \"n\":", "== \"y\":"],
    "sunday_condition": ["== \"Sunday\":", ">= \"Sunday\":", "is \"Sunday\":"],
    "thursday_condition": ["== \"Thursday\":", "<= \"Thursday\":", "is \"Thursday\":"]
  },
  "answer": {
    "ontime_condition": "== \"n\":",
    "sunday_condition": "== \"Sunday\":",
    "thursday_condition": "== \"Thursday\":"
  },
  "explanation": "For the ontime condition, use '== \"n\"' because if the answer is 'n' (not returned before 8pm), then an extra day is charged. For Sunday discount (30% off, pay 70%), use '== \"Sunday\"' to check exact match. For Thursday discount (50% off, pay 50%), use '== \"Thursday\"' to check exact match. The capitalize() method ensures consistent capitalization for comparison."
},
{
  "id": 6,
  "domain": "Data types & variables",
  "type": "fill_in_blank",
  "question": "Match the data type to each variable.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>age = 2 → ____<br>minor = False → ____<br>name = \"Contoso\" → ____<br>weight = 123.5 → ____<br>zip = \"81000\" → ____</div>",
  "options": {
    "age_type": ["int", "float", "str", "bool"],
    "minor_type": ["int", "float", "str", "bool"],
    "name_type": ["int", "float", "str", "bool"],
    "weight_type": ["int", "float", "str", "bool"],
    "zip_type": ["int", "float", "str", "bool"]
  },
  "answer": {
    "age_type": "int",
    "minor_type": "bool",
    "name_type": "str",
    "weight_type": "float",
    "zip_type": "str"
  },
  "explanation": "2 → int; False → bool; quoted values are strings; 123.5 → float."
},
{
  "id": 219,
  "domain": "String operations & type conversion",
  "type": "multiple_choice",
  "question": "You are creating a Python program that shows a congratulation message to employees on their service anniversary.<br><br>You need to calculate the number of years of service and print a congratulatory message.<br><br>You have written the following code. Line numbers are included for reference only.<br><br>01 start = input(\"How old were you on your start date?\")<br>02 end = input(\"How old are you today?\")<br>03<br><br>You need to complete the program.<br><br>Which code should you use at line 03?",
  "options": [
    "A. print(\"Congratulations on\" + (int(end)-int(start)) + \"years of service!\")",
    "B. print(\"Congratulations on\" + str(int(end)-int(start)) + \"years of service!\")",
    "C. print(\"Congratulations on\" + int(end - start) + \"years of service!\")",
    "D. print(\"Congratulations on\" + str(end - start) + \"years of service!\")"
  ],
  "answer": "B. print(\"Congratulations on\" + str(int(end)-int(start)) + \"years of service!\")",
  "explanation": "Option B is correct because: 1) input() returns strings, so we need int() to convert them to integers for arithmetic, 2) the subtraction int(end)-int(start) calculates years of service, and 3) str() converts the result back to string for concatenation with the text. Option A fails because you can't concatenate strings with integers. Options C and D fail because end and start are strings, so subtraction without int() conversion would cause a TypeError."
},
{
  "id": 220,
  "domain": "Object identity & equality operators",
  "type": "fill_in_blank",
  "question": "You write the following code:<br><br>numList = [1,2,3,4,5]<br>alphaList = [\"a\",\"b\",\"c\",\"d\",\"e\"]<br>print(numList is alphaList)<br>print(numList == alphaList)<br>numList = alphaList<br>print(numList is alphaList)<br>print(numList == alphaList)<br><br>Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<br><br>Hot Area:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>What is displayed after the first print? ____<br><br>What is displayed after the second print? ____<br><br>What is displayed after the third print? ____<br><br>What is displayed after the fourth print? ____</div>",
  "options": {
    "first_print": ["True", "False"],
    "second_print": ["True", "False"],
    "third_print": ["True", "False"],
    "fourth_print": ["True", "False"]
  },
  "answer": {
    "first_print": "False",
    "second_print": "False",
    "third_print": "True",
    "fourth_print": "True"
  },
  "explanation": "First print (numList is alphaList): False - Different objects in memory. Second print (numList == alphaList): False - Different content ([1,2,3,4,5] vs [\"a\",\"b\",\"c\",\"d\",\"e\"]). After assignment numList = alphaList, both variables reference the same object. Third print (numList is alphaList): True - Same object identity. Fourth print (numList == alphaList): True - Same content since they reference the same list."
},
{
  "id": 221,
  "domain": "Arithmetic operators & division types",
  "type": "ordering",
  "question": "You are writing a Python program to perform arithmetic operations.<br><br>You create the following code:<br>a = 11<br>b = 4<br><br>What is the result of each arithmetic expression? To answer, drag the appropriate expression from the column on the left to its result on the right. Each expression may be used once, more than once, or not at all.<br><br>Note: You will receive partial credit for each correct match.<br><br>Results → Answer Area<br>2 → ____<br>3 → ____<br>2.75 → ____",
  "options": [
    "print(a / b)",
    "print(a // b)", 
    "print(a % b)"
  ],
  "answer": [
    "print(a // b)",
    "print(a % b)",
    "print(a / b)"
  ],
  "explanation": "With a = 11 and b = 4: print(a // b) gives 2 (floor division - integer result of 11 ÷ 4). print(a % b) gives 3 (modulo - remainder when 11 is divided by 4). print(a / b) gives 2.75 (regular division - exact decimal result of 11 ÷ 4)."
},
{
  "id": 222,
  "domain": "Arithmetic operators & operator precedence",
  "type": "ordering",
  "question": "You are writing a Python program that evaluates an arithmetic formula.<br><br>The formula is described as b equals a multiplied by negative one, then raised to the second power, where a is the value that will be input and b is the result.<br><br>You create the following code segment. Line numbers are included for reference only.<br><br>01 a = eval(input(\"Enter a number for the question: \"))<br>02 b =<br><br>You need to ensure that the result is correct.<br><br>How should you complete the code on line 02? To answer, drag the appropriate code segment to the correct location. Each code segment may be used once, more than once, or not at all.<br><br>Note: You will receive partial credit for each correct placement ONLY 5 TO USE!.<br><br>b = ____",
  "options": [
    "-",
    "(",
    ")",
    "**",
    "**2",
    "2",
    "a"
  ],
  "answer": [
    "(",
    "-",
    "a",
    ")",
    "**2",
  ],
  "explanation": "The formula 'a multiplied by negative one, then raised to the second power' translates to (-a)**2. The parentheses around -a ensure that the negation is applied first, then the entire result is raised to the power of 2. This is equivalent to (a * -1)**2 but uses the more concise -a notation."
},
{
  "id": 223,
  "domain": "List slicing & indexing",
  "type": "multiple_select",
  "question": "You develop a Python application for your company.<br><br>A list named employees contains 200 employee names, the last five being company management. You need to slice the list to display all employees excluding management.<br><br>Which two code segments should you use? Each correct answer presents a complete solution. (Choose two.)",
  "options": [
    "A. employees[1:-4]",
    "B. employees[:-5]",
    "C. employees[1:-5]",
    "D. employees[0:-4]",
    "E. employees[0:-5]"
  ],
  "answer": [
    "B. employees[:-5]",
    "E. employees[0:-5]"
  ],
  "explanation": "To exclude the last 5 employees (management) from a 200-employee list, we need to slice from the beginning up to but not including the last 5 elements. employees[:-5] starts from index 0 (default) and goes up to index -5 (excluding the last 5). employees[0:-5] explicitly starts from index 0 and goes up to index -5. Both give the same result: indices 0 through 194 (195 employees total, excluding the last 5). Options A, C, and D are incorrect because they either start from index 1 (missing the first employee) or end at -4 (including one management employee)."
},
{
  "id": 7,
  "domain": "Operators & precedence",
  "type": "multiple_choice",
  "question": "Evaluate the following Python arithmetic expression:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>((3*(1+2)**2 - (2**2)) * 3)</div><br>What is the result?",
  "options": [
    "A. 2",
    "B. 42",
    "C. 42",
    "D. 69"
  ],
  "answer": "D. 69",
  "explanation": "Compute in order with parentheses and exponent first: (1+2)=3 → 3**2=9 → 3*9=27. Then 2**2=4. Inside parentheses: 27−4=23. Multiply by 3 → 69."
},
{
  "id": 224,
  "domain": "Type conversion & precision",
  "type": "fill_in_blank",
  "question": "You are an intern for ABC electric cars company. You must create a function that calculates the average velocity of their vehicles on a 1320 foot (1/4 mile) track. The output must be as precise as possible.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>distance = ____(input(\"Enter the distance traveled in feet\"))<br><br>distance_miles = distance/5280 &nbsp;&nbsp;#convert to miles<br><br>time = ____(input(\"Enter the time elapsed in seconds\"))<br><br>time_hours = time/3600 &nbsp;&nbsp;#convert to hours<br><br>velocity = distance_miles/time_hours<br><br>print(\"The average velocity is : \", velocity, \" miles/hour\")</div>",
  "options": {
    "distance_conversion": ["int", "str", "float"],
    "time_conversion": ["int", "float", "str"]
  },
  "answer": {
    "distance_conversion": "int",
    "time_conversion": "float"
  },
  "explanation": "Use int() for distance conversion since distance in feet is typically measured as whole numbers (e.g., 1320 feet). Use float() for time conversion since time measurements often include decimal values (e.g., 5.25 seconds) for maximum precision in velocity calculations."
},
{
  "id": 8,
  "domain": "Math functions",
  "type": "multiple_select",
  "question": "You are creating a function that manipulates a number. The function has the following requirements:<br><br>- A float is passed into the function<br>- The function must take the absolute value of the float<br>- Any decimal points after the integer must be removed<br><br>Which two math functions should you use? (Choose two.)",
  "options": [
    "A. math.fmod(x)",
    "B. math.frexp(x)",
    "C. math.floor(x)",
    "D. math.ceil(x)",
    "E. math.fabs(x)"
  ],
  "answer": [
    "C. math.floor(x)",
    "E. math.fabs(x)"
  ],
  "explanation": "Use math.fabs(x) to get the absolute value, then math.floor(x) to drop the fractional part (after fabs the value is non‑negative, so floor truncates)."
}, 
{
  "id": 9,
  "domain": "Modules & imports",
  "type": "multiple_choice",
  "question": "You are writing an application that uses the sqrt function. The program must reference the function using the name squareRoot. You need to import the function. Which code segment should you use?",
  "options": [
    "A. import math.sqrt as squareRoot",
    "B. import sqrt from math as squareRoot",
    "C. from math import sqrt as squareRoot",
    "D. from math.sqrt as squareRoot"
  ],
  "answer": "C. from math import sqrt as squareRoot",
  "explanation": "Use the from-import form with an alias: from math import sqrt as squareRoot."
},
{
  "id": 10,
  "domain": "Random module & ranges",
  "type": "multiple_select",
  "question": "You are writing code that generates a random integer with a minimum value of 5 and a maximum value of 11. Which two functions should you use? (Choose two.)",
  "options": [
    "A. random.randint(5, 12)",
    "B. random.randint(5, 11)",
    "C. random.randrange(5, 12, 1)",
    "D. random.randrange(5, 11, 1)"
  ],
  "answer": [
    "B. random.randint(5, 11)",
    "C. random.randrange(5, 12, 1)"
  ],
  "explanation": "randint(a, b) is inclusive of both endpoints, so 5–11 works. randrange(start, stop, step) excludes stop, so use stop=12 to allow up to 11."
},
{
  "id": 225,
  "domain": "File operations & conditional logic",
  "type": "ordering",
  "question": "You are writing a function that works with files.<br><br>You need to ensure that the function returns None if the file does not exist. If the file does exist, the function must return the first line.<br><br>You write the following code:<br><br>import os<br>def get_first_line(filename, mode):<br><br>Which code segments should you use to develop the solution? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order.<br><br>Note: You will receive partial credit for each correct placement.",
  "options": [
    "if os.path.isfile(filename):",
    "return file.readline()",
    "with open(filename, 'r') as file:",
    "return None",
    "else:"
  ],
  "answer": [
    "if os.path.isfile(filename):",
    "with open(filename, 'r') as file:",
    "return file.readline()",
    "else:",
    "return None"
  ],
  "explanation": "The correct order follows the logic: 1) Check if file exists using os.path.isfile(), 2) If it exists, open the file with context manager, 3) Return the first line using readline(), 4) Use else for when file doesn't exist, 5) Return None for non-existent files. This structure ensures proper file handling and meets both requirements: returning the first line if file exists, or None if it doesn't."
},
{
  "id": 226,
  "domain": "File operations & string validation",
  "type": "multiple_choice",
  "question": "You are writing a Python program to automate inventory. Your first task is to read a file of inventory transactions. The file contains sales from the previous day, including the item id, price, and quantity.<br><br>The following shows a sample of data from the file:<br><br>10, 200, 5<br>20, 100, 1<br><br>The code must meet the following requirements:<br>• Each line of the file must be read and printed<br>• If a blank line is encountered, it must be ignored<br>• When all lines have been read, the file must be closed<br><br>You create the following code. Line numbers are included for reference only.<br><br>01 inventory = open(\"inventory.txt\", \"r\")<br>02 eof = False<br>03 while eof == False:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;line = inventory.readline()<br>05<br>06<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"End of file\")<br>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eof = True<br>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inventory.close()<br><br>Which code should you write for line 05 and line 06?",
  "options": [
    "A.<br>05 if line != '\\n':<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\":",
    "B.<br>05 if line != '\\n':<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != None:",
    "C.<br>05 if line != \"\":<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\":",
    "D.<br>05 if line != \"\":<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\\n\":"
  ],
  "answer": "A.<br>05 if line != '\\n':<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\":",
  "explanation": "Line 05 checks if line != '\\n' to filter out blank lines (which contain only the newline character). Line 06 checks if line != \"\" to detect end of file (readline() returns empty string when EOF is reached). This structure ensures: 1) Blank lines containing only \\n are ignored, 2) EOF detection when readline() returns empty string, 3) Only non-blank, non-empty lines get printed. The nested structure properly handles both the blank line filtering requirement and EOF detection."
},
{
  "id": 227,
  "domain": "Input & Output",
  "type": "multiple_choice",
  "question": "You develop a Python application for your company.<br><br>You need to accept input from the user and print that information to the user screen.<br><br>You have started with the following code. Line numbers are included for reference only.<br><br>01 print(\"What is your name?\")<br>02<br>03 print(name)<br><br>Which code should you write at line 02?",
  "options": [
    "A. name = input",
    "B. input(\"name\")",
    "C. input(name)",
    "D. name = input()"
  ],
  "answer": "D. name = input()",
  "explanation": "Option D is correct because input() is the proper function to get user input in Python, and it must be assigned to a variable (name) to store the value for later use. Option A is incorrect because it assigns the input function itself, not the result of calling it. Option B doesn't assign the result to any variable. Option C tries to pass an undefined variable as a parameter to input()."
},
{
  "id": 12,
  "domain": "File operations & modes",
  "type": "multiple_choice",
  "question": "You develop a Python application for your school. You need to read and write data to a text file. If the file does not exist, it must be created. If the file has content, the content must be removed. Which code should you use?",
  "options": [
    "A. open(\"local_data\", \"r\")",
    "B. open(\"local_data\", \"r+\")",
    "C. open(\"local_data\", \"w+\")",
    "D. open(\"local_data\", \"w\")"
  ],
  "answer": "C. open(\"local_data\", \"w+\")",
  "explanation": "\"w+\" opens the file for reading and writing, truncates existing contents, and creates the file if it doesn’t exist. \"w\" is write-only; \"r\" is read-only and requires the file to exist; \"r+\" read/writes but requires the file and does not truncate."
},
{
  "id": 228,
  "domain": "Input validation & string formatting",
  "type": "fill_in_blank",
  "question": "The ABC organics company needs a simple program that their call center will use to enter survey data for a new coffee variety.<br><br>The program must accept input and return the average rating based on a five-star scale. The output must be rounded to two decimal places.<br><br>You need to complete the code to meet the requirements.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>sum = count = done = 0<br>average = 0.0<br><br>while (done != -1):<br><br>&nbsp;&nbsp;&nbsp;&nbsp;rating = ____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if rating == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;sum+=rating<br>&nbsp;&nbsp;&nbsp;&nbsp;count+=1<br><br>average = float(sum/count)<br><br>____ + ____</div>",
  "options": {
    "input_method": ["print(\"Enter next rating (1-5), -1 for done\")", "float(input(\"Enter next rating (1-5), -1 for done\"))", "input(\"Enter next rating (1-5), -1 for done\")", "input(\"Enter next rating (1-5), -1 for done\")"],
    "output_method": ["output(\"The average star rating for NetVerZleep coffee is: \"", "console.input(\"The average star rating for the new coffee is: \")", "println(\"The average star rating for the new coffee is: \")", "print(\"The average star rating for the new coffee is: \""],
    "format_method": ["format(average, '.2f')", "format(average, '.2d')", "{average, '.2f'}", "format.average.{2d}"]
  },
  "answer": {
    "input_method": "float(input(\"Enter next rating (1-5), -1 for done\"))",
    "output_method": "print(\"The average star rating for the new coffee is: \")",
    "format_method": "format(average, '.2f')"
  },
  "explanation": "Use float(input()) to convert user input to a floating-point number for arithmetic operations. Use print() to display the output message in Python. Use format(average, '.2f') to round the average to exactly 2 decimal places as required. The '.2f' format specifier ensures two decimal places for floating-point numbers."
},
{
  "id": 229,
  "domain": "String formatting & output alignment",
  "type": "fill_in_blank",
  "question": "The ABC company is building a basketball court for its employees to improve company morale.<br><br>You are creating a Python program that employees can use to keep track of their average score.<br><br>The program must allow users to enter their name and current scores. The program will output the user name and the user's average score. The output must meet the following requirements:<br>• The user name must be left-aligned.<br>• If the user name has fewer than 20 characters, additional space must be added to the right.<br>• The average score must have three places to the left of the decimal point and one place to the right of the decimal (XXX.X).<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = input(\"what is your name?\")<br><br>score = 0<br><br>count = 0<br><br>while(score != -1):<br>&nbsp;&nbsp;&nbsp;&nbsp;score = int(input(\"Enter your scores: (-1 to end)\"))<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if score == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br><br>&nbsp;&nbsp;&nbsp;&nbsp;sum += score<br><br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br><br>average_score = sum / count<br><br>print(\"____, your average score is: ____\"%(name, average))</div>",
  "options": {
    "name_format": ["%-20i", "%-20d", "%-20f", "%-20s"],
    "score_format": ["%1.4s", "%4.1f", "%4.1s", "%1.4f"]
  },
  "answer": {
    "name_format": "%-20s",
    "score_format": "%4.1f"
  },
  "explanation": "Use %-20s for the name formatting: the 's' specifies string type, '20' sets the width to 20 characters, and the '-' makes it left-aligned with padding on the right. Use %4.1f for the score formatting: the 'f' specifies floating-point number, '4' sets the total width (3 digits + 1 decimal point), and '.1' specifies one decimal place, giving the required XXX.X format."
},
{
  "id": 230,
  "domain": "Python syntax & indentation",
  "type": "multiple_select",
  "question": "You are creating a function that reads a data file and prints each line of the file.<br><br>You write the following code. Line numbers are included for reference only.<br><br>01 import os<br>02 def read_file(file):<br>03 &nbsp;&nbsp;&nbsp;&nbsp;line = None<br>04 &nbsp;&nbsp;&nbsp;&nbsp;if os.path.isfile(file):<br>05 &nbsp;&nbsp;&nbsp;&nbsp;data = open(file,'r')<br>06 &nbsp;&nbsp;&nbsp;&nbsp;while line != '':<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line = data.readline()<br>08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)<br><br>The code attempts to read the file even if the file does not exist.<br><br>You need to correct the code.<br><br>Which three lines have indentation problems? Each correct answer presents part of the solution. (Choose three.)",
  "options": [
    "A. Line 01",
    "B. Line 02", 
    "C. Line 03",
    "D. Line 04",
    "E. Line 05",
    "F. Line 06",
    "G. Line 07",
    "H. Line 08"
  ],
  "answer": [
    "F. Line 06",
    "G. Line 07", 
    "H. Line 08"
  ],
  "explanation": "Line 06 should be indented to be inside the if block (currently at same level as the if statement). Line 07 should be indented to be inside the if block (currently at same level as the if statement). Line 08 should be indented to be inside the while loop block (currently at same level as the while statement). The correct indentation ensures that file operations only happen when the file exists, and print statements execute within the loop."
},
{
  "id": 231,
  "domain": "Exception handling & file operations",
  "type": "multiple_choice",
  "question": "You write the following code:<br><br>import sys<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in = open(\"in.txt\", 'r')<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out = open(\"out.txt\", 'w+')<br>except IOError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('cannot open', file_name)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;i = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;for line in file_in:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line.rstrip())<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file_out.write(\"line \" + str(i) + \": \" + line)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in.close()<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out.close()<br><br>The out.txt file does not exist. You run the code. The code will execute without error.<br><br>Review the underlined text. If it makes the statement correct, select 'No change is needed'. If the statement is incorrect, select the answer choice that makes the statement correct.",
  "options": [
    "A. No change is needed",
    "B. The code runs, but generates a logic error",
    "C. The code will generate a runtime error", 
    "D. The code will generate a syntax error"
  ],
  "answer": "C. The code will generate a runtime error",
  "explanation": "The code will generate a runtime error because in the except block, it tries to print 'file_name', but 'file_name' is not defined anywhere in the code. This will cause a NameError at runtime when an IOError occurs. Since out.txt doesn't exist and is opened with 'w+' mode, this should actually succeed (write mode creates the file), but if in.txt doesn't exist, the IOError exception will be caught and the undefined 'file_name' variable will cause a NameError."
},
{
  "id": 232,
  "domain": "Function definition & parameters",
  "type": "fill_in_blank",
  "question": "You are developing a Python application for an online game.<br><br>You need to create a function that meets the following criteria:<br>• The function is named update_score<br>• The function receives the current score and a value<br>• The function adds the value to the current score<br>• The function returns the new score<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;current += value<br>&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
  "options": {
    "function_definition": ["update_score", "def update_score", "return update_score"],
    "parameters": ["(current, value):", "()", "(current, value)", "()"],
    "return_statement": ["pass current", "return current", "return", "pass"]
  },
  "answer": {
    "function_definition": "def update_score",
    "parameters": "(current, value):",
    "return_statement": "return current"
  },
  "explanation": "Use 'def update_score' to define the function with the required name. Use '(current, value):' to specify the two parameters needed (current score and value to add). Use 'return current' to return the updated score after the addition operation. The function structure follows Python syntax: def function_name(parameters): followed by the function body and return statement."
},
{
  "id": 15,
  "domain": "Code documentation & comments",
  "type": "multiple_choice",
  "question": "You develop a Python application for your company. You want to add notes to your code so other team members will understand it. What should you do?",
  "options": [
    "A. Place the notes after the # sign on any line",
    "B. Place the notes after the last line of code separated by a blank line",
    "C. Place the notes before the first line of code separated by a blank line",
    "D. Place the notes inside of parentheses on any time"
  ],
  "answer": "A. Place the notes after the # sign on any line",
  "explanation": "In Python, comments start with # and continue to the end of the line."
},
{
  "id": 17,
  "domain": "Truthiness & bool conversion",
  "type": "multiple_choice",
  "question": "You have the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>v = bool([False])<br>x = bool(3)<br>y = bool(\"\")<br>z = bool(' ')</div><br>Which of the variables will equal False?",
  "options": [
    "a) z",
    "b) y",
    "c) x",
    "d) v"
  ],
  "answer": "b) y",
  "explanation": "In Python truthiness: non-empty list → True, non-zero number → True, empty string \"\" → False, non-empty string (even a space) → True."
},
{
  "id": 234,
  "domain": "Variable scope & parameter passing",
  "type": "multiple_choice",
  "question": "You run the following code:<br><br>def calc1(rate, item):<br>&nbsp;&nbsp;&nbsp;&nbsp;item *= (1 + rate)<br>rate = 0.25<br>item = 12000<br>calc1(rate, item)<br>print('Rate:', rate, '; Value:', item)<br><br>What will be displayed on the screen?",
  "options": [
    "a) Rate: 1.25 ; Value: 15000",
    "b) Rate: 1.25 ; Value: 12000", 
    "c) Rate: 0.25 ; Value: 15000",
    "d) Rate: 0.25 ; Value: 12000"
  ],
  "answer": "d) Rate: 0.25 ; Value: 12000",
  "explanation": "In Python, integers are immutable and passed by value. Inside the function calc1(), the parameters 'rate' and 'item' are local variables that shadow the global variables. When 'item *= (1 + rate)' executes inside the function, it calculates 12000 * (1 + 0.25) = 15000, but this only affects the local 'item' parameter, not the global 'item' variable. After the function returns, the global variables remain unchanged: rate = 0.25 and item = 12000."
}
]