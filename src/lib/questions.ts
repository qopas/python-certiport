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
      "test_method": ["test_isinstance", "isinstance_test", "check_IsInstance", "verify_type"],
      "assert_method": ["assertIsInstance", "assertEqual", "assertTrue", "assertIs"]
    },
    "answer": {
      "import_keyword": "import",
      "first_part": "unittest",
      "second_part": "TestCase",
      "test_method": "test_isinstance",
      "assert_method": "assertIsInstance"
    },
    "explanation": "Use `import` to bring in the unittest module. Test classes inherit from `unittest.TestCase` (two separate parts). Test methods must start with 'test_' to be automatically discovered and run by the unittest runner — options like `isinstance_test`, `check_IsInstance`, and `verify_type` do not start with 'test_' and would never be executed as tests. Use `assertIsInstance(obj, class)` to check if an object is an instance of a specific class."
  },
  {
    "id": 177,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are creating a function to calculate admission fees (admission_fee) based on the following rules:<br><br>• Anyone under age 5 = free admission<br>• Anyone age 5 or older who is in school = $10<br>• Anyone age 5 to 17 who is not in school = $20<br>• Anyone older than age 17 who is not in school = $50<br><br>rate represents the price in dollars.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def admission_fee(age, school):<br>&nbsp;&nbsp;&nbsp;&nbsp;rate = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 10<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 20<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 50<br>&nbsp;&nbsp;&nbsp;&nbsp;return rate</div>",
    "options": {
      "first_condition": ["if age >= 5 and school == True", "if age < 5", "if school == True", "if age >= 5"],
      "second_condition": ["elif age >= 5 and age < 18 and school == False", "elif age < 18 and school == False", "elif not school == False", "elif age >= 5 and not school == False"]
    },
    "answer": {
      "first_condition": "if age >= 5 and school == True",
      "second_condition": "elif age >= 5 and age < 18 and school == False"
    },
    "explanation": "The first condition checks if someone is 5 or older AND in school ($10). The elif condition must check for ages 5 to 17 who are NOT in school ($20) — it must include 'age >= 5' to avoid catching under-5 children who are not in school. The else handles everyone over 17 not in school ($50). Ages under 5 get free admission since rate starts at 0 and no conditions match."
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
      "statement2": "False: A function call of grosspay(salary=50000) will return nothing.",
      "statement3": "True: A function call of grosspay(pieces=500, piecerate=4) will return a result of 2000."
    },
    "explanation": "Statement 1 is False: grosspay() will not cause a syntax error because all parameters have default values — it runs fine. Statement 2 is False: grosspay(salary=50000) does NOT return nothing. The salary condition executes `pass` and falls through to the `if hours > 40` check. Since hours defaults to 40, `hours > 40` is False, so the else branch executes `return hours * rate` = 40 * 25 = 1000. Statement 3 is True: grosspay(pieces=500, piecerate=4) returns 500 * 4 = 2000."
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
    "explanation": "Statement 1 is False: Lines 03 and 04 (the two input() calls) are syntactically correct and return strings without error. Statement 2 is True: Line 02 (inside calc_power) will cause a TypeError because the ** operator cannot be applied to strings, and line 05 (the print concatenation) would also fail since result would be a non-string type. Statement 3 is False: The code will not output correctly due to the type errors."
  },
  {
    "id": 181,
    "domain": "String slicing & indexing",
    "type": "ordering",
    "question": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>alph = \"abcdefghijklmnopqrstuvwxyz\"</div><br><br>Move the appropriate results from the list on the left to the correct slicing operations on the right. You may use each result once, more than once, or not at all.<br><br>Note: You will receive partial credit for each correct match.<br><br>alph[3:6] → ____<br>alph[:6] → ____",
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
    "explanation": "String slicing uses start:end indices where start is inclusive and end is exclusive. alph[3:6] gets characters at indices 3, 4, 5 which are 'd', 'e', 'f' = 'def'. alph[:6] gets from the start up to but not including index 6, giving characters at indices 0-5 = 'abcdef'."
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
    "explanation": "The format method uses positional arguments. In data.format(z, y, x), z='bananas' is position 0, y='apples' is position 1, and x='oranges' is position 2. The string \"{1} and {0} and {2}\" means: position 1 (y='apples') and position 0 (z='bananas') and position 2 (x='oranges'), resulting in 'apples and bananas and oranges'."
  },
  {
    "id": 186,
    "domain": "Loops & debugging",
    "type": "fill_in_blank",
    "question": "You find errors while evaluating the following code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02 index = 0<br>03 while (index < 10) # change to : ____<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if numbers[index] = 6 # change to ____<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div><br><br>You need to correct the code at line 03 and line 06.",
    "options": {
      "line_03": ["while (index < 10):", "while (index < 10)", "while (index < 10);", "for (index < 10):"],
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
    "explanation": "Python operator precedence follows this order: 1) Parentheses (highest precedence), 2) Exponents (**), 3) Unary operators (+, -, not), 4) Multiplication and Division (*, /, //, %), 5) Addition and Subtraction (+, -), 6) Logical AND (lowest precedence in this list)."
  },
  {
    "id": 188,
    "domain": "Random module & list operations",
    "type": "fill_in_blank",
    "question": "You are writing a program to randomly assign rooms (room_number) and team-building groups (group) for a company retreat.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br>Note: You will receive partial credit for each correct selection.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>roomsAssigned=[1]<br>room_number=1<br>groupList=[\"Ropes\",\"Rafting\",\"Obstacle\",\"Wellness\"]<br>count=0<br>print(\"Welcome to CompanyPro's Team-Building Weekend!\")<br>name=input(\"Please enter your name (q to quit)? \")<br>while name.lower() != 'q' and count < 50:<br>&nbsp;&nbsp;&nbsp;&nbsp;while room_number in roomsAssigned:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"{name}, your room number is {room_number}\")<br>&nbsp;&nbsp;&nbsp;&nbsp;roomsAssigned.append(room_number)<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f\"You will meet with the {group} Group this afternoon.\")<br>&nbsp;&nbsp;&nbsp;&nbsp;count+=1<br>&nbsp;&nbsp;&nbsp;&nbsp;name=input(\"Please enter your name (q to quit)? \")</div>",
    "options": {
      "room_generation": ["room_number = random.randint(1, 100)", "room_number = random.choice([1,2,3,4,5])", "room_number = random.random()", "room_number = random.randrange(1, 100)"],
      "group_selection": ["group = random.choice(groupList)", "group = random.randint(0, 3)", "group = random.sample(groupList, 1)", "group = groupList[random.randint(0, 3)]"]
    },
    "answer": {
      "room_generation": "room_number = random.randint(1, 100)",
      "group_selection": "group = random.choice(groupList)"
    },
    "explanation": "For room assignment, `random.randint(1, 100)` generates a random integer between 1 and 100 inclusive. For group selection, `random.choice(groupList)` randomly selects one item from the groupList, which is the most straightforward way to pick a team-building group."
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
    "explanation": "Step through: Initially product=2, n=5. First iteration: product=2*5=10, print 10, n=4 (not 3, continue). Second iteration: product=10*4=40, print 40, n=3 → break. Total = 2 lines of output."
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
    "explanation": "Option A works because randint(1,20)*5 generates numbers between 5 and 100 inclusive, all multiples of 5. Option D works because randrange(5,105,5) directly generates multiples of 5 from 5 to 100 inclusive. Option B includes 0*5=0 (invalid lowest), and Option C starts at 0 (invalid)."
  },
  {
    "id": 195,
    "domain": "Input & Output",
    "type": "multiple_choice",
    "question": "What does the following statement do?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = input()</div>",
    "options": [
      "A. Displays a message box that allows user input.",
      "B. Displays all input peripheral devices on the computer.",
      "C. Allows a user to draw on the screen.",
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
    "explanation": "Line 04: True — == operator properly checks for equality. Line 06: False — the <= operator also triggers when the numbers are equal, not only when less than. Line 08: True — > operator correctly checks greater than. Line 09: True — = is assignment not comparison (should be ==), and there is also a typo (num1 vs nuni)."
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
    "explanation": "Python try statement rules: 1) Can have multiple except clauses for different exception types. 2) Can have a finally clause without except (try-finally structure). 3) Can have both except and finally clauses (try-except-finally). 4) Cannot have multiple finally clauses — only one finally is allowed per try block."
  },
  {
    "id": 198,
    "domain": "Conditional logic & number operations",
    "type": "fill_in_blank",
    "question": "You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>num = int(input(\"Enter a number with 1 or 2 digits: \"))<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"1\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"2\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \">2\"<br><br>print(digits + \" digits.\")</div><br><br>Complete the code by selecting the correct code segment from each drop-down list.",
    "options": {
      "first_condition": ["if num < 10:", "if num <= 10:", "if len(str(num)) == 1:", "if num < 0:"],
      "second_condition": ["elif num < 100:", "elif num <= 100:", "elif num > 9 and num < 100:", "elif len(str(num)) == 2:"],
      "third_condition": ["else:", "elif num >= 100:", "elif num > 99:", "elif len(str(num)) > 2:"]
    },
    "answer": {
      "first_condition": "if num < 10:",
      "second_condition": "elif num < 100:",
      "third_condition": "else:"
    },
    "explanation": "Use `if num < 10:` for single-digit numbers (0-9). Use `elif num < 100:` for two-digit numbers (10-99). Use `else:` for all numbers 100 and above (three or more digits)."
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
    "explanation": "Use `if numList == alphalist:` to compare if the two lists have the same values. Since they contain different data types (numbers vs strings), the condition will be False, so the else clause will execute. The `==` operator checks for value equality, while `is` would check object identity."
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
    "explanation": "In Python, comments are created using the # symbol. Everything after # on a line is treated as a comment and ignored by the Python interpreter. Options A (/* */) is for C/Java, Option B (<!-- -->) is for HTML, and Option C (//) is for C/Java/JavaScript."
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
    "explanation": "1) True — Default parameter (points=1) is needed to meet the 'if no value specified' requirement. 2) True — Without a default parameter, calling with only 2 arguments causes a TypeError. 3) False — Line 03 modifies the local points parameter only; the global variable at line 06 is unaffected (Python reassignment creates a new local binding)."
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
    "explanation": "For get_name(): The function is called without arguments (biker = get_name()) and gets input internally, so it needs no parameters. For calc_calories(): The function body uses 'miles * calories_per_mile', so the parameter names must match — calories_per_mile is the correct second parameter name."
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
    "explanation": "1) True — Python ignores everything after # on a line entirely; the content of comment lines is never parsed as code. 2) False — The # is REQUIRED to make a line a comment; without it, lines 02-03 would be invalid Python syntax (NameError or SyntaxError). 3) False — Line 06 is a string assignment stored in the variable 'comment'; the # inside the quotes is treated as a literal character, not a comment marker. 4) True — Line 07 has a valid inline comment after the # symbol following the return statement."
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
    "explanation": "1) True — The 'a' (append) mode creates the file if it doesn't exist. 2) False — 'a' mode appends to the end of the file without overwriting ('w' mode would overwrite). 3) True — The file is properly closed with f.close(), so other processes can access it."
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
    "explanation": "Use `len(backward_name) - 1` to get the starting index (last character position, since indexing is zero-based). Use `backward_name[length]` to access each character from the end to the beginning. The while loop decrements length from the last index down to 0, building the reversed string character by character."
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
    "explanation": "Option A: Correct — Uses string concatenation to wrap item in double quotes followed by a comma, then prints the unquoted sales number. Option D: Correct — Uses format() with quotes around the {0} string placeholder and no quotes around the {1} number placeholder. Option B: Incorrect — Doesn't wrap string in quotes and fails (can't concatenate str + int). Option C: Incorrect — Doesn't wrap string in quotes."
  },
  {
    "id": 207,
    "domain": "Loops & control flow",
    "type": "fill_in_blank",
    "question": "You are creating a Python program that will let a user guess a number from 1 to 10. The user is allowed up to three guesses. If the user guesses the correct number, the program must stop asking for guesses.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from random import randint<br>target = randint(1,10)<br>chance = 1<br>print (\"Guess an integer from 1 to 10. You will have 3 chances.\")<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;guess = int(input(\"Guess an integer: \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;if guess > target:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is too high\")<br>&nbsp;&nbsp;&nbsp;&nbsp;elif guess < target:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is too low\")<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print (\"Guess is just right!\")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br></div><br><br>Complete the code by selecting the correct code segments from the list.",
    "options": {
      "loop_statement": ["while chance <= 3:", "while chance < 3:", "for chance in range(1, 4):"],
      "break_statement": ["break", "pass", "continue"],
      "increment_statement": ["chance += 1", "chance = chance - 1", "chance = 2"]
    },
    "answer": {
      "loop_statement": "while chance <= 3:",
      "break_statement": "break",
      "increment_statement": "chance += 1"
    },
    "explanation": "Use `while chance <= 3:` to allow exactly 3 guesses (chance starts at 1 and goes up to 3). Use `break` in the else clause to exit immediately when the correct guess is made. Use `chance += 1` after the if-elif-else block to increment the counter after each incorrect guess."
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
    "explanation": "The error occurs because the `os` module has not been imported. Python cannot recognize `os.path.isfile()` without first importing the os module with `import os`. The isfile method does exist in os.path, path is a valid submodule of os, and isfile does accept one parameter (the file path)."
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
    "explanation": "Use `os.path.isfile('myfile.txt')` to check if the file exists and is a regular file. Use `print(file.read())` to display the entire contents of the file. The file is opened in the default read mode and properly closed after reading."
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
    "explanation": "Step through the conditions: 1) grade > 80: 76 > 80 = False — first condition fails. 2) grade >= 70 AND rank > 3: 76 >= 70 = True BUT 3 > 3 = False — second condition fails. 3) Execute else clause: grade -= 5 → 76 - 5 = 71. Therefore, 71 is printed."
  },
  {
    "id": 211,
    "domain": "String validation & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a Python program to validate employee numbers.<br><br>The employee number must have the format ddd-dd-dddd and consist only of numbers and dashes. The program must print True if the format is correct and print False if the format is incorrect.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br><br>parts = \"\"<br><br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;employee_number = input(\"Enter employee number (ddd-dd-dddd): \")<br>&nbsp;&nbsp;&nbsp;&nbsp;parts = employee_number.split('-')<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if len(parts) == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(parts[0]) == 3 and len(parts[1]) == 2 and len(parts[2]) == 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;print(valid)</div>",
    "options": {
      "first_dropdown": ["Employee_number = \"sentinel\"", "Employee_number = \"\""],
      "second_dropdown": ["while employee_number != \"sentinel\":", "while employee_number != \"\":"],
      "third_dropdown": ["valid = False", "valid = True"],
      "fourth_dropdown": ["valid = True", "valid = False"]
    },
    "answer": {
      "first_dropdown": "Employee_number = \"sentinel\"",
      "second_dropdown": "while employee_number != \"sentinel\":",
      "third_dropdown": "valid = False",
      "fourth_dropdown": "valid = True"
    },
    "explanation": "Initialize Employee_number to 'sentinel' so the while condition `!= 'sentinel'` is True and the loop is entered on the first pass. Inside the loop, set valid = False at the start of each iteration as the default. Set valid = True only when all three validation conditions pass. Using an empty string '' as the sentinel AND as the loop condition would make the loop never execute since '' != '' is immediately False."
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
    "explanation": "The structure: `if a >= 0` handles non-negative numbers (compute root directly). `else` handles the negative case. Within the else, `if a % 2 == 0` checks if the negative number's value is even (imaginary result). The inner `else` handles odd negative numbers (negative root result)."
  },
  {
    "id": 213,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You work for a company that distributes media for all ages.<br>You are writing a function that assigns a rating based on a user's age. The function must meet the following requirements:<br>• Anyone 18 years old or older receives a rating of \"A\"<br>• Anyone 13 or older, but younger than 18, receives a rating of \"T\"<br>• Anyone 12 years old or younger receives a rating of \"C\"<br>• If the age is unknown, the rating is set to \"C\"<br><br>Complete the code by selecting the correct line for each dropdown.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;rating = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating</div>",
    "options": {
      "if_clause": [
        "if age is None: rating = \"C\"",
        "if age >= 18: rating = \"A\"",
        "if age >= 13: rating = \"T\"",
        "if age < 13: rating = \"C\""
      ],
      "elif1_clause": [
        "elif age >= 18: rating = \"A\"",
        "elif age >= 13: rating = \"T\"",
        "elif age < 13: rating = \"C\"",
        "elif age is None: rating = \"C\""
      ],
      "elif2_clause": [
        "elif age >= 13: rating = \"T\"",
        "elif age >= 18: rating = \"A\"",
        "elif age < 13: rating = \"C\"",
        "elif age is None: rating = \"C\""
      ],
      "else_clause": [
        "else: rating = \"C\"",
        "else: rating = \"T\"",
        "else: rating = \"A\""
      ]
    },
    "answer": {
      "if_clause": "if age is None: rating = \"C\"",
      "elif1_clause": "elif age >= 18: rating = \"A\"",
      "elif2_clause": "elif age >= 13: rating = \"T\"",
      "else_clause": "else: rating = \"C\""
    },
    "explanation": "Check `age is None` first to avoid a TypeError when comparing None to integers in subsequent conditions. Then check `age >= 18` for rating 'A'. Then check `age >= 13` for rating 'T' (covers 13-17 since 18+ was already handled). The `else` catches everyone remaining (age 12 and under), giving rating 'C'."
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
    "explanation": "The correct order: 1) Get input from user, 2) Check if input is all lowercase using name.lower() == name, 3) Use elif to check if input is all uppercase using name.upper() == name, 4) Use else for mixed case. This creates a logical if-elif-else chain covering all three possibilities."
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
    "explanation": "Following operator precedence: 1) Multiplication (b*c) is evaluated first. 2) Addition (a + result_of_b*c) is evaluated second, left to right. 3) Subtraction is evaluated last. The equivalent expression with explicit parentheses is (a + (b*c)) - d."
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
      "line03_failure_reason": "Mismatched data type(s)"
    },
    "explanation": "The rooms dictionary has integer keys (1, 2) and string values ('foyer', 'Conference Room') — so it stores int and string types. The input() function always returns a string, so room is of string type. Line 03 fails to find the rooms because of a mismatched data type: room is the string '1' but the dictionary key is the integer 1. In Python '1' != 1, so the lookup always fails. The fix is to cast the input: room = int(input(...)). Note: 'if not room in rooms:' is valid Python syntax — it is parsed as 'if not (room in rooms):'."
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
    "explanation": "Use 'while' to create a loop that continues as long as index < 10. Use 'break' to exit the loop immediately when the target product ID (6) is found. The else clause increments the index only when the target is not found."
  },
  {
    "id": 2,
    "domain": "Input & type casting",
    "type": "multiple_choice",
    "question": "The ABC company has hired you as an intern on the coding team that creates e-commerce applications.<br><br>You must write a script that asks the user for a value. The value must be used as a whole number in a calculation, even if the user enters a decimal value.<br><br>Which code segment should you use?",
    "options": [
      "A. totalItems = input(\"How many items would you like?\")",
      "B. totalItems = float(input(\"How many items would you like?\"))",
      "C. totalItems = str(input(\"How many items would you like?\"))",
      "D. totalItems = int(input(\"How many items would you like?\"))"
    ],
    "answer": "D. totalItems = int(input(\"How many items would you like?\"))",
    "explanation": "Use int(input()) to convert user input directly to a whole number (integer). Option A returns a raw string. Option B returns a float which is not a whole number type. Option C redundantly wraps the already-string input() in str(). Only int() guarantees a whole number as required."
  },
  {
    "id": 4,
    "domain": "Data types & type conversion",
    "type": "true_false",
    "question": "During school holidays, you volunteer to explain some basic programming concepts to younger siblings.<br><br>You want to introduce the concept of data types in Python. You create the following three code segments:<br><br># Code segment 1<br>x1 = \"20\"<br>y1 = 3<br>a = x1 * y1<br><br># Code segment 2<br>x2 = 6<br>y2 = 4<br>b = x2 / y2<br><br># Code segment 3<br>x3 = 2.5<br>y3 = 1<br>c = x3 / y3<br><br>You need to evaluate the code segments.<br><br>For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><br>NOTE: Each correct selection is worth one point.",
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
    "explanation": "Statement 1: True — String * integer repeats the string: '20' * 3 = '202020' (str). Statement 2: True — Division in Python 3 always returns a float: 6 / 4 = 1.5 (float). Statement 3: False — Division always returns float in Python 3: 2.5 / 1 = 2.5 (float), not int."
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
    "explanation": "2 → int (whole number). False → bool (boolean literal). \"Contoso\" → str (text in quotes). 123.5 → float (decimal number). \"81000\" → str (number in quotes is still a string)."
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
    "explanation": "Use '== \"n\"' because if the answer is 'n' (not returned before 8pm), an extra day is charged. Use '== \"Sunday\"' to exactly match Sunday for the 30% discount (pay 70%). Use '== \"Thursday\"' to exactly match Thursday for the 50% discount. The capitalize() call ensures the day name has a capital first letter for consistent comparison."
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
    "explanation": "Option B is correct: input() returns strings, so int() converts them to integers for arithmetic subtraction. str() then converts the integer result back to a string for concatenation. Option A fails because you cannot concatenate a string with an integer directly. Options C and D fail because end and start are strings, so end - start without int() conversion raises a TypeError."
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
    "explanation": "First print (numList is alphaList): False — different objects in memory. Second print (numList == alphaList): False — different contents ([1,2,3,4,5] vs ['a','b','c','d','e']). After `numList = alphaList`, both variables point to the same object. Third print (numList is alphaList): True — same object identity. Fourth print (numList == alphaList): True — same contents since they reference the same list."
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
    "explanation": "With a=11 and b=4: print(a // b) = 11 // 4 = 2 (floor division). print(a % b) = 11 % 4 = 3 (modulo/remainder). print(a / b) = 11 / 4 = 2.75 (regular division)."
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
      "**2"
    ],
    "explanation": "The formula 'a multiplied by negative one, then raised to the second power' translates to (-a)**2. The parentheses ensure that the negation (-a) is applied first, then the entire result is raised to the power of 2. Without parentheses, -a**2 would be -(a**2) due to Python's operator precedence, giving a wrong result."
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
    "explanation": "To exclude the last 5 employees (management), slice up to but not including the last 5 elements. employees[:-5] starts from index 0 (default) and goes up to index -5. employees[0:-5] explicitly starts from index 0 and goes up to index -5. Both give indices 0 through 194 (195 employees). Options A and C start from index 1 (missing first employee), and Option D ends at -4 (includes one management employee)."
  },
  {
    "id": 7,
    "domain": "Operators & precedence",
    "type": "multiple_choice",
    "question": "Evaluate the following Python arithmetic expression:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>((3*(1+2)**2 - (2**2)) * 3)</div><br>What is the result?",
    "options": [
      "A. 2",
      "B. 42",
      "C. 51",
      "D. 69"
    ],
    "answer": "D. 69",
    "explanation": "Compute step by step: (1+2)=3 → 3**2=9 → 3*9=27. Then 2**2=4. Inside the outer parentheses: 27-4=23. Finally 23*3=69."
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
      "distance_conversion": "float",
      "time_conversion": "float"
    },
    "explanation": "Both distance and time should use float() for maximum precision as required by the problem. Distance in feet may be entered as a decimal (e.g., 1320.5), and time in seconds almost certainly includes decimals (e.g., 5.25 seconds). Using int() for either would discard decimal precision and give a less accurate velocity calculation."
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
    "explanation": "Use math.fabs(x) to get the absolute value as a float. Then use math.floor(x) to remove the decimal portion (since after taking fabs the value is non-negative, floor truncates to the integer part). For example: fabs(-3.7) = 3.7, then floor(3.7) = 3."
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
    "explanation": "The correct syntax to import a specific function from a module and give it an alias is: from math import sqrt as squareRoot. This allows you to call squareRoot(16) instead of math.sqrt(16). The other options use invalid Python import syntax."
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
    "explanation": "randint(a, b) is inclusive of both endpoints, so randint(5, 11) generates 5 through 11. randrange(start, stop, step) excludes the stop value, so randrange(5, 12, 1) generates 5 through 11. Option A would include 12 (too high). Option D would only generate 5 through 10 (missing 11)."
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
    "explanation": "The correct order: 1) Check if file exists using os.path.isfile(). 2) If it exists, open it safely with a context manager. 3) Return the first line using readline(). 4) Use else for when the file doesn't exist. 5) Return None for non-existent files."
  },
  {
    "id": 226,
    "domain": "File operations & string validation",
    "type": "multiple_choice",
    "question": "You are writing a Python program to automate inventory. Your first task is to read a file of inventory transactions. The file contains sales from the previous day, including the item id, price, and quantity.<br><br>The following shows a sample of data from the file:<br><br>10, 200, 5<br>20, 100, 1<br><br>The code must meet the following requirements:<br>• Each line of the file must be read and printed<br>• If a blank line is encountered, it must be ignored<br>• When all lines have been read, the file must be closed<br><br>You create the following code. Line numbers are included for reference only.<br><br>01 inventory = open(\"inventory.txt\", \"r\")<br>02 eof = False<br>03 while eof == False:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;line = inventory.readline()<br>05<br>06<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)<br>08 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>09 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"End of file\")<br>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eof = True<br>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inventory.close()<br><br>Which code should you write for line 05 and line 06?",
    "options": [
      "A.<br>05 if line != '':<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != '\\n':",
      "B.<br>05 if line != '':<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != None:",
      "C.<br>05 if line != \"\":<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\":",
      "D.<br>05 if line != \"\":<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\\n\":"
    ],
    "answer": "D.<br>05 if line != \"\":<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if line != \"\\n\":",
    "explanation": "Line 05 must check `if line != \"\":` to detect end of file — readline() returns an empty string '' when EOF is reached, which triggers the else block. Line 06 must check `if line != \"\\n\":` to skip blank lines (which contain only the newline character). This structure correctly handles: EOF detection (empty string '' triggers else/close), blank line filtering (\\n lines are skipped), and valid lines get printed."
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
    "explanation": "Option D is correct: input() is the proper function to get user input in Python, and its return value must be assigned to a variable (name) to store it for use in the print statement at line 03. Option A assigns the function object itself (not the result of calling it). Option B calls input but doesn't store the result. Option C passes an undefined variable as a parameter."
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
    "explanation": "\"w+\" opens the file for both reading and writing, truncates existing content to zero length, and creates the file if it doesn't exist — satisfying all three requirements. \"w\" is write-only (no reading). \"r\" is read-only and requires the file to exist. \"r+\" allows read and write but requires the file to already exist and does not truncate it."
  },
  {
    "id": 228,
    "domain": "Input validation & string formatting",
    "type": "fill_in_blank",
    "question": "The ABC organics company needs a simple program that their call center will use to enter survey data for a new coffee variety.<br><br>The program must accept input and return the average rating based on a five-star scale. The output must be rounded to two decimal places.<br><br>You need to complete the code to meet the requirements.<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>sum = count = done = 0<br>average = 0.0<br><br>while (done != -1):<br><br>&nbsp;&nbsp;&nbsp;&nbsp;rating = ____<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if rating == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;sum+=rating<br>&nbsp;&nbsp;&nbsp;&nbsp;count+=1<br><br>average = float(sum/count)<br><br>____ + ____</div>",
    "options": {
      "input_method": ["print(\"Enter next rating (1-5), -1 for done\")", "float(input(\"Enter next rating (1-5), -1 for done\"))", "input(\"Enter next rating (1-5), -1 for done\")", "int(input(\"Enter next rating (1-5), -1 for done\"))"],
      "output_method": ["output(\"The average star rating for NetVerZleep coffee is: \")", "console.input(\"The average star rating for the new coffee is: \")", "println(\"The average star rating for the new coffee is: \")", "print(\"The average star rating for the new coffee is: \")"],
      "format_method": ["format(average, '.2f')", "format(average, '.2d')", "{average, '.2f'}", "format.average.{2d}"]
    },
    "answer": {
      "input_method": "float(input(\"Enter next rating (1-5), -1 for done\"))",
      "output_method": "print(\"The average star rating for the new coffee is: \")",
      "format_method": "format(average, '.2f')"
    },
    "explanation": "Use float(input()) to convert user input to a floating-point number so arithmetic works correctly, including the -1 sentinel check. Use print(\"The average star rating for the new coffee is: \") — note the closing parenthesis is required for valid Python syntax. Use format(average, '.2f') to round the average to exactly 2 decimal places as required."
  },
  {
    "id": 229,
    "domain": "String formatting & output alignment",
    "type": "fill_in_blank",
    "question": "The ABC company is building a basketball court for its employees to improve company morale.<br><br>You are creating a Python program that employees can use to keep track of their average score.<br><br>The program must allow users to enter their name and current scores. The program will output the user name and the user's average score. The output must meet the following requirements:<br>• The user name must be left-aligned.<br>• If the user name has fewer than 20 characters, additional space must be added to the right.<br>• The average score must have three places to the left of the decimal point and one place to the right of the decimal (XXX.X).<br><br>How should you complete the code? To answer, select the appropriate code segments in the answer area.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = input(\"what is your name?\")<br><br>score = 0<br><br>count = 0<br><br>while(score != -1):<br>&nbsp;&nbsp;&nbsp;&nbsp;score = int(input(\"Enter your scores: (-1 to end)\"))<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if score == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br><br>&nbsp;&nbsp;&nbsp;&nbsp;sum += score<br><br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br><br>average_score = sum / count<br><br>print(\"____, your average score is: ____\"%(name, average_score))</div>",
    "options": {
      "name_format": ["%-20i", "%-20d", "%-20f", "%-20s"],
      "score_format": ["%1.4s", "%4.1f", "%4.1s", "%1.4f"]
    },
    "answer": {
      "name_format": "%-20s",
      "score_format": "%4.1f"
    },
    "explanation": "Use %-20s for the name: 's' is the string type specifier, '20' sets the field width to 20 characters, and '-' makes it left-aligned with right padding. Use %4.1f for the score: 'f' is the float type specifier, '4' sets the total field width (accommodates XXX.X format), and '.1' specifies exactly one decimal place."
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
      "E. Line 05",
      "F. Line 06",
      "G. Line 07",
      "H. Line 08"
    ],
    "explanation": "Line 05 (data = open...) must be indented inside the if block — it currently sits at the same level as the if statement, meaning the file is opened regardless of whether it exists. Line 06 (while line != '') must also be indented inside the if block for the same reason. Line 07 (line = data.readline()) must be indented inside the while block. Line 08 (print(line)) is already correctly indented inside the while block. The corrected structure should be: if block contains lines 05 and 06, while block inside if contains lines 07 and 08."
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
    "explanation": "The code will generate a runtime error (NameError) because the except block references 'file_name', which is never defined anywhere in the code. If in.txt does not exist, the IOError is caught and the except block tries to print 'file_name', causing a NameError at runtime. Note: out.txt opened in 'w+' mode is created automatically if it doesn't exist, so that alone does not cause an error."
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
    "explanation": "Use 'def update_score' to define the function with the required name. Use '(current, value):' to specify the two required parameters with the colon to start the function body. Use 'return current' to return the updated score after the += operation."
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
      "D. Place the notes inside of parentheses on any line"
    ],
    "answer": "A. Place the notes after the # sign on any line",
    "explanation": "In Python, comments start with # and continue to the end of the line. They can appear on their own line or inline after code. The # symbol tells the interpreter to ignore everything that follows on that line."
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
    "explanation": "In Python: bool([False]) = True (non-empty list is truthy, regardless of its contents). bool(3) = True (non-zero number). bool(\"\") = False (empty string is falsy). bool(' ') = True (a space character makes it a non-empty string). Therefore only y equals False."
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
    "explanation": "In Python, integers and floats are immutable. Inside calc1(), the parameters 'rate' and 'item' are local variables. The line `item *= (1 + rate)` computes 12000 * 1.25 = 15000 and rebinds the local 'item' to 15000, but this has no effect on the global 'item' variable. After the function returns, the global variables remain unchanged: rate = 0.25 and item = 12000."
  },
  {
    "id": 235,
    "domain": "String methods & loops",
    "type": "fill_in_blank",
    "question": "You receive a comma-separated string of product codes. You must split the string and print each code.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>raw = \"A101,B202,C303,D404\"<br>codes = raw.____(\",\")<br>for code ____ codes:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(code)</div>",
    "options": {
      "split_method": ["split", "partition", "separate", "divide"],
      "iteration_keyword": ["in", "of", "within", "inside"]
    },
    "answer": {
      "split_method": "split",
      "iteration_keyword": "in"
    },
    "explanation": "`split(\",\")` breaks the string on commas and returns a list. The `for ... in` syntax iterates through each item in the list. `partition` returns a 3-tuple instead of a list, so it wouldn't work here."
  },
  {
    "id": 236,
    "domain": "List operations & loops",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5, 6, 7]<br>result = []<br>for x in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;if x % 2 != 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(x * 2)<br>print(result)</div><br><br>What is the output?",
    "options": [
      "A. [2, 4, 6, 8, 10, 12, 14]",
      "B. [2, 6, 10, 14]",
      "C. [2, 4, 6, 10, 14]",
      "D. [1, 3, 5, 7]"
    ],
    "answer": "B. [2, 6, 10, 14]",
    "explanation": "The condition `x % 2 != 0` keeps only odd numbers: 1, 3, 5, 7. Each is multiplied by 2 before being appended, giving [2, 6, 10, 14]. Option A ignores the filter; Option D forgets the multiplication; Option C includes an even number."
  },
  {
    "id": 237,
    "domain": "Function parameters & default values",
    "type": "multiple_choice",
    "question": "You write the following function:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def greet(name, greeting=\"Hello\"):<br>&nbsp;&nbsp;&nbsp;&nbsp;return greeting + \", \" + name + \"!\"<br><br>print(greet(\"Anna\"))<br>print(greet(\"Ben\", \"Hi\"))</div><br><br>What is the output?",
    "options": [
      "A. Hello, Anna! followed by Hi, Ben!",
      "B. Hello, Anna! followed by Hello, Ben!",
      "C. The code generates a syntax error.",
      "D. Anna, Hello! followed by Ben, Hi!"
    ],
    "answer": "A. Hello, Anna! followed by Hi, Ben!",
    "explanation": "The first call uses the default value \"Hello\" for `greeting`, producing \"Hello, Anna!\". The second call overrides the default with \"Hi\", producing \"Hi, Ben!\". Default parameters are used only when no value is passed for that argument."
  },
  {
    "id": 238,
    "domain": "Nested loops & control flow",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>count = 0<br>for i in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(4):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if i == j:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if j > i:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>print(count)</div><br><br>What value is printed?",
    "options": [
      "A. 6",
      "B. 4",
      "C. 10",
      "D. 16"
    ],
    "answer": "A. 6",
    "explanation": "For each i, the inner loop iterates j from 0. When j == i, `continue` skips. When j > i, `break` exits the inner loop. So count increments only when j < i. For i=0: 0 increments. For i=1: j=0 increments (count=1). For i=2: j=0, j=1 increment (count=3). For i=3: j=0, j=1, j=2 increment (count=6). Total = 6."
  },
  {
    "id": 239,
    "domain": "Dictionary operations & methods",
    "type": "fill_in_blank",
    "question": "You have a dictionary of inventory items. You need to safely retrieve the stock count for an item — returning 0 if the item is not in the dictionary — without raising an error.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>inventory = {\"apples\": 50, \"bread\": 12, \"cheese\": 8}<br><br>stock = inventory.____(\"milk\", 0)<br><br>print(stock)</div>",
    "options": {
      "safe_get": ["get", "fetch", "find", "lookup"]
    },
    "answer": {
      "safe_get": "get"
    },
    "explanation": "`dict.get(key, default)` returns the value for the key if it exists, or the default value (here 0) if it doesn't. This avoids the `KeyError` that would occur with `inventory[\"milk\"]`. The other options are not valid dictionary methods."
  },
  {
    "id": 240,
    "domain": "Loops & accumulator pattern",
    "type": "fill_in_blank",
    "question": "You are writing a program that asks the user to enter numbers one at a time. When the user enters 0, the program stops asking and prints the total of all numbers entered.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>total = 0<br>number = int(input(\"Enter a number (0 to stop): \"))<br><br>____ number != 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;total ____ number<br>&nbsp;&nbsp;&nbsp;&nbsp;number = int(input(\"Enter a number (0 to stop): \"))<br><br>print(\"The total is:\", total)</div>",
    "options": {
      "loop_keyword": ["while", "for", "if", "repeat"],
      "accumulator": ["+=", "==", "=+", "++"]
    },
    "answer": {
      "loop_keyword": "while",
      "accumulator": "+="
    },
    "explanation": "Use `while` to keep looping as long as the user doesn't enter 0. Use `+=` to add the new number to the running total. `=+` would simply assign the positive value of `number` to `total`, overwriting the previous total."
  },
  {
    "id": 241,
    "domain": "String methods & case handling",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>answer = \" YES \"<br>if answer.strip().lower() == \"yes\":<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Confirmed\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Denied\")</div><br><br>What is the output?",
    "options": [
      "A. Confirmed",
      "B. Denied",
      "C. The code generates a syntax error.",
      "D. The code generates a runtime error."
    ],
    "answer": "A. Confirmed",
    "explanation": "`strip()` removes the leading and trailing spaces, turning \" YES \" into \"YES\". `lower()` converts it to \"yes\". The comparison \"yes\" == \"yes\" is True, so \"Confirmed\" is printed. Chaining string methods like this is a common pattern for sanitizing input."
  },
  {
    "id": 243,
    "domain": "Range function & loops",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>total = 0<br>for i in range(2, 11, 2):<br>&nbsp;&nbsp;&nbsp;&nbsp;total += i<br>print(total)</div><br><br>What is the output?",
    "options": [
      "A. 20",
      "B. 30",
      "C. 25",
      "D. 55"
    ],
    "answer": "B. 30",
    "explanation": "`range(2, 11, 2)` generates 2, 4, 6, 8, 10 (start at 2, stop before 11, step by 2). Sum: 2 + 4 + 6 + 8 + 10 = 30. A common mistake is to include 12 (would give 42) or to stop at 8 (would give 20)."
  },
  {
    "id": 245,
    "domain": "Operators & precedence",
    "type": "multiple_choice",
    "question": "Review the following Python code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 6<br>b = 2<br>c = 3<br><br>result = a + b ** c * 2 - 4 // b</div><br><br>What is the value of `result`?",
    "options": [
      "A. 20",
      "B. 22",
      "C. 90",
      "D. 18"
    ],
    "answer": "A. 20",
    "explanation": "Following operator precedence: 1) Exponent first: b ** c = 2 ** 3 = 8. 2) Multiplication and floor division (left to right): 8 * 2 = 16, and 4 // b = 4 // 2 = 2. 3) Addition and subtraction (left to right): 6 + 16 - 2 = 20."
  },
  {
    "id": 246,
    "domain": "System modules & command line",
    "type": "true_false",
    "question": "A file named `Tool.py` contains the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br>print(len(sys.argv))<br>print(sys.argv[-1])</div><br><br>The user runs the following command:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>python Tool.py alpha beta gamma</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "The first print statement outputs 3.",
      "statement2": "The second print statement outputs gamma.",
      "statement3": "The script name Tool.py is included in sys.argv."
    },
    "answer": {
      "statement1": "False: The first print statement outputs 3.",
      "statement2": "True: The second print statement outputs gamma.",
      "statement3": "True: The script name Tool.py is included in sys.argv."
    },
    "explanation": "Statement 1 is False — sys.argv contains 4 items: the script name plus 3 arguments, so len(sys.argv) is 4, not 3. Statement 2 is True — sys.argv[-1] accesses the last element, which is gamma. Statement 3 is True — sys.argv[0] is always the script name."
  },
  {
    "id": 247,
    "domain": "String formatting & methods",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = \"{title} by {author}, published in {year}\"<br>result = data.format(year=1954, author=\"Tolkien\", title=\"The Fellowship\")<br>print(result)</div><br><br>What is the output?",
    "options": [
      "A. The Fellowship by Tolkien, published in 1954",
      "B. 1954 by Tolkien, published in The Fellowship",
      "C. The code generates a syntax error because positional and keyword arguments are mixed.",
      "D. {title} by {author}, published in {year}"
    ],
    "answer": "A. The Fellowship by Tolkien, published in 1954",
    "explanation": "The `format()` method supports named placeholders that match keyword arguments by name, regardless of the order they are passed in. `{title}` is replaced with \"The Fellowship\", `{author}` with \"Tolkien\", and `{year}` with 1954, producing the expected sentence."
  },
  {
    "id": 248,
    "domain": "Random module & list operations",
    "type": "multiple_select",
    "question": "You need to randomly select 3 different prize winners from a list of 20 names. Each name must appear at most once in the result.<br><br>Which two code segments meet the requirements? (Choose 2.)",
    "options": [
      "A. winners = random.sample(names, 3)",
      "B. winners = [random.choice(names) for _ in range(3)]",
      "C. winners = random.choices(names, k=3)",
      "D. winners = []<br>&nbsp;&nbsp;&nbsp;&nbsp;while len(winners) < 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pick = random.choice(names)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if pick not in winners:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;winners.append(pick)"
    ],
    "answer": [
      "A. winners = random.sample(names, 3)",
      "D. winners = []<br>&nbsp;&nbsp;&nbsp;&nbsp;while len(winners) < 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pick = random.choice(names)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if pick not in winners:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;winners.append(pick)"
    ],
    "explanation": "`random.sample(names, 3)` picks 3 unique items without replacement — exactly what is required. Option D uses `random.choice` in a loop but explicitly checks `not in winners` before appending, guaranteeing uniqueness. Option B uses `random.choice` without uniqueness checking, so the same name can appear multiple times. Option C uses `random.choices`, which samples *with* replacement and can return duplicates."
  },
  {
    "id": 249,
    "domain": "Conditional logic & operators",
    "type": "true_false",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>age = 17<br>has_license = True<br><br>if age >= 18 or has_license == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Can drive\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Cannot drive\")</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "The code prints Can drive.",
      "statement2": "Changing or to and would make the code print Cannot drive.",
      "statement3": "If has_license is set to False, the code still prints Can drive."
    },
    "answer": {
      "statement1": "True: The code prints Can drive.",
      "statement2": "True: Changing or to and would make the code print Cannot drive.",
      "statement3": "False: If has_license is set to False, the code still prints Can drive."
    },
    "explanation": "Statement 1 is True — with `or`, only one side needs to be true. `has_license == True` is True, so the condition passes. Statement 2 is True — with `and`, both sides must be true. `age >= 18` is False (17 < 18), so the condition fails. Statement 3 is False — if `has_license` is False, both sides of the `or` are False, so the else branch runs and prints Cannot drive."
  },
  {
    "id": 250,
    "domain": "Exception handling & input validation",
    "type": "fill_in_blank",
    "question": "You are creating a program that divides two numbers entered by the user. The program must handle the case where the user enters non-numeric input, and the case where the user enters zero as the divisor.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____:<br>&nbsp;&nbsp;&nbsp;&nbsp;a = int(input(\"Enter numerator: \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;b = int(input(\"Enter denominator: \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;print(a / b)<br>____ ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Please enter valid numbers.\")<br>____ ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Cannot divide by zero.\")</div>",
    "options": {
      "try_block": ["try", "attempt", "check", "test"],
      "first_except": ["except", "catch", "handle", "error"],
      "second_except": ["except", "catch", "handle", "error"]
    },
    "answer": {
      "try_block": "try",
      "first_except": "except",
      "second_except": "except"
    },
    "explanation": "The `try` block contains code that might raise an exception. A `try` statement can have multiple `except` clauses for different exception types. `ValueError` is raised when `int()` cannot convert the input string, and `ZeroDivisionError` is raised when division by zero is attempted."
  },
  {
    "id": 251,
    "domain": "Loops & control flow",
    "type": "multiple_choice",
    "question": "Review the following code segment:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>total = 1<br>n = 4<br>while (n > 0):<br>&nbsp;&nbsp;&nbsp;&nbsp;total *= n<br>&nbsp;&nbsp;&nbsp;&nbsp;print(total)<br>&nbsp;&nbsp;&nbsp;&nbsp;n -= 1<br>&nbsp;&nbsp;&nbsp;&nbsp;if total > 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break</div><br><br>How many lines of output does the code print?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "B. 2",
    "explanation": "Iteration 1: total = 1 * 4 = 4, print 4 (line 1), n=3, 4 > 10 is False, continue. Iteration 2: total = 4 * 3 = 12, print 12 (line 2), n=2, 12 > 10 is True → break. Total = 2 lines of output."
  },
  {
    "id": 252,
    "domain": "Functions & logic analysis",
    "type": "true_false",
    "question": "Analyze the following function:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calc_shipping(weight=1, distance=10, express=False, freebie=False):<br>&nbsp;&nbsp;&nbsp;&nbsp;if freebie == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0<br>&nbsp;&nbsp;&nbsp;&nbsp;cost = weight * 2 + distance * 0.5<br>&nbsp;&nbsp;&nbsp;&nbsp;if express == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cost = cost * 1.5<br>&nbsp;&nbsp;&nbsp;&nbsp;return cost</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "A function call of calc_shipping() will return 7.0.",
      "statement2": "A function call of calc_shipping(freebie=True, weight=20) will return 40.",
      "statement3": "A function call of calc_shipping(weight=5, express=True) will return 22.5."
    },
    "answer": {
      "statement1": "True: A function call of calc_shipping() will return 7.0.",
      "statement2": "False: A function call of calc_shipping(freebie=True, weight=20) will return 40.",
      "statement3": "True: A function call of calc_shipping(weight=5, express=True) will return 22.5."
    },
    "explanation": "Statement 1 is True — defaults: 1*2 + 10*0.5 = 2 + 5 = 7.0, express is False so no multiplier. Statement 2 is False — freebie=True returns 0 immediately, ignoring weight. Statement 3 is True — 5*2 + 10*0.5 = 10 + 5 = 15, then express multiplies by 1.5 → 15 * 1.5 = 22.5."
  },
  {
    "id": 253,
    "domain": "String slicing & indexing",
    "type": "ordering",
    "question": "You need to identify the results of performing various slicing operations on the following sequence structure:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>word = \"programming\"</div><br><br>Move the appropriate results from the list on the left to the correct slicing operations on the right. You may use each result once, more than once, or not at all.<br><br>word[3:7] → ____<br>word[-4:] → ____<br>word[:5] → ____",
    "options": [
      "gram",
      "ming",
      "progr",
      "gramm",
      "rogra"
    ],
    "answer": [
      "gram",
      "ming",
      "progr"
    ],
    "explanation": "`word[3:7]` gets characters at indices 3, 4, 5, 6 which are g, r, a, m = \"gram\". `word[-4:]` gets the last 4 characters: m, i, n, g = \"ming\". `word[:5]` gets characters at indices 0-4: p, r, o, g, r = \"progr\"."
  },
  {
    "id": 254,
    "domain": "Unit testing & assertions",
    "type": "fill_in_blank",
    "question": "You need to test whether a function returns the expected integer value.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ unittest<br><br>def double(x):<br>&nbsp;&nbsp;&nbsp;&nbsp;return x * 2<br><br>class TestDouble(____.____):<br>&nbsp;&nbsp;&nbsp;&nbsp;def ____(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = double(5)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.____(result, 10)<br><br>if __name__ == \"__main__\":<br>&nbsp;&nbsp;&nbsp;&nbsp;unittest.main()</div>",
    "options": {
      "import_keyword": ["import", "from", "use", "include"],
      "module_part": ["unittest", "test", "TestCase", "unit"],
      "class_part": ["TestCase", "Test", "UnitTest", "Case"],
      "test_method": ["test_double", "double_test", "check_double", "verify_double"],
      "assert_method": ["assertEqual", "assertIsInstance", "assertTrue", "assertIs"]
    },
    "answer": {
      "import_keyword": "import",
      "module_part": "unittest",
      "class_part": "TestCase",
      "test_method": "test_double",
      "assert_method": "assertEqual"
    },
    "explanation": "Use `import` to bring in the unittest module. Test classes inherit from `unittest.TestCase`. Test methods must start with `test_` to be automatically discovered and run — options like `double_test`, `check_double`, and `verify_double` would never execute as tests. Use `assertEqual(actual, expected)` to verify that two values are equal."
  },
  {
    "id": 255,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are creating a function to calculate a movie ticket price (ticket_price) based on the following rules:<br><br>• Anyone under age 3 = free admission<br>• Anyone age 3 or older who is a student = $8<br>• Anyone age 3 to 64 who is not a student = $15<br>• Anyone age 65 or older who is not a student = $10<br><br>price represents the price in dollars.<br><br>Complete the code by selecting the correct code segment from each dropdown list.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def ticket_price(age, student):<br>&nbsp;&nbsp;&nbsp;&nbsp;price = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price = 8<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price = 15<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price = 10<br>&nbsp;&nbsp;&nbsp;&nbsp;return price</div>",
    "options": {
      "first_condition": ["if age >= 3 and student == True", "if age < 3", "if student == True", "if age >= 3"],
      "second_condition": ["elif age >= 3 and age < 65 and student == False", "elif age < 65 and student == False", "elif not student == False", "elif age >= 3 and not student == False"]
    },
    "answer": {
      "first_condition": "if age >= 3 and student == True",
      "second_condition": "elif age >= 3 and age < 65 and student == False"
    },
    "explanation": "The first condition checks if someone is 3 or older AND a student ($8). The elif condition must check for ages 3 to 64 who are NOT students ($15) — it must include 'age >= 3' to avoid catching under-3 children who are not students. The else handles everyone 65 or older not a student ($10). Ages under 3 get free admission since price starts at 0 and no conditions match."
  },
  {
    "id": 256,
    "domain": "Loops & debugging",
    "type": "fill_in_blank",
    "question": "You find errors while evaluating the following code. Line numbers are included for reference only.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 names = [\"Ana\", \"Ben\", \"Carol\", \"Dan\"]<br>02 i = 0<br>03 for name in names # change to: ____<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(name)<br>05 &nbsp;&nbsp;&nbsp;&nbsp;if i = 2 # change to: ____<br>06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>07 &nbsp;&nbsp;&nbsp;&nbsp;i += 1</div><br><br>You need to correct the code at line 03 and line 05.",
    "options": {
      "line_03": ["for name in names:", "for name in names", "for name in names;", "while name in names:"],
      "line_05": ["if i == 2:", "if i = 2:", "if (i == 2)", "if i === 2:"]
    },
    "answer": {
      "line_03": "for name in names:",
      "line_05": "if i == 2:"
    },
    "explanation": "Line 03 needs a colon (:) at the end to properly start the for loop block. Line 05 needs double equals (==) for comparison instead of single equals (=) which is for assignment, and it also needs a colon at the end. The corrected statements are 'for name in names:' and 'if i == 2:'."
  },
  {
    "id": 257,
    "domain": "Functions & error analysis",
    "type": "true_false",
    "question": "The following function is supposed to compute the average of three test scores entered by the user.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def average(a, b, c):<br>&nbsp;&nbsp;&nbsp;&nbsp;return (a + b + c) / 3<br>score1 = input(\"Enter score 1: \")<br>score2 = input(\"Enter score 2: \")<br>score3 = input(\"Enter score 3: \")<br>result = average(score1, score2, score3)<br>print(\"Average is: \" + result)</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "The code will generate an error in line 1 (the function definition).",
      "statement2": "The code will generate an error inside the function body when called.",
      "statement3": "The code will correctly output the average to the console."
    },
    "answer": {
      "statement1": "False: The code will generate an error in line 1 (the function definition).",
      "statement2": "True: The code will generate an error inside the function body when called.",
      "statement3": "False: The code will correctly output the average to the console."
    },
    "explanation": "Statement 1 is False — the function definition is syntactically valid. Statement 2 is True — input() returns strings, so a + b + c concatenates strings (e.g., \"8\" + \"9\" + \"10\" = \"8910\"), and then dividing a string by 3 raises a TypeError. Statement 3 is False — the code fails before producing correct output. Even if division worked, the final concatenation 'Average is: ' + result would also fail if result were numeric."
  },
  {
    "id": 258,
    "domain": "File operations & I/O",
    "type": "fill_in_blank",
    "question": "A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:<br><br>• Opens an existing file in read-only mode.<br>• Reads the entire contents of the file into a single string.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>file = ____<br>contents = ____<br>file.close()</div>",
    "options": {
      "file_open": ["open(\"data.txt\", \"r\")", "open(\"data.txt\", \"w\")", "open(\"data.txt\", \"a\")", "read(\"data.txt\")"],
      "read_operation": ["file.read()", "file.readline()", "file.write()", "file.open()"]
    },
    "answer": {
      "file_open": "open(\"data.txt\", \"r\")",
      "read_operation": "file.read()"
    },
    "explanation": "Use `open(\"data.txt\", \"r\")` to open the file in read-only mode. Use `file.read()` to read the entire contents of the file into a single string. `readline()` would only read one line at a time; `write()` and `open()` are not for reading content."
  },
  {
    "id": 260,
    "domain": "Conditional logic & operator precedence",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = True<br>b = False<br>c = True<br><br>if not a and b or c:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Path 1\")<br>elif a and not b and not c:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Path 2\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Path 3\")</div><br><br>What is the output?",
    "options": [
      "A. Path 1",
      "B. Path 2",
      "C. Path 3",
      "D. The code generates a syntax error."
    ],
    "answer": "A. Path 1",
    "explanation": "Operator precedence is `not` > `and` > `or`. So `not a and b or c` is evaluated as `((not a) and b) or c` = `((False) and False) or True` = `False or True` = `True`. The first branch executes and prints Path 1. A common trap is to read this as `not (a and b or c)`."
  },
  {
    "id": 261,
    "domain": "Nested conditionals & control flow",
    "type": "fill_in_blank",
    "question": "You are writing a function that classifies a temperature reading (temp, in Celsius) into a weather category:<br><br>• Temperature below 0 → \"Freezing\"<br>• Temperature 0 to 14 → \"Cold\"<br>• Temperature 15 to 24 → \"Mild\"<br>• Temperature 25 or higher → \"Hot\"<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def classify(temp):<br>&nbsp;&nbsp;&nbsp;&nbsp;category = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category = \"Freezing\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category = \"Cold\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category = \"Mild\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;category = \"Hot\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return category</div>",
    "options": {
      "first_condition": ["if temp < 0:", "if temp >= 0:", "if temp < 25:", "if temp > 0:"],
      "second_condition": ["elif temp < 15:", "elif temp <= 14:", "elif temp < 0:", "elif temp >= 0 and temp < 15:"],
      "third_condition": ["elif temp < 25:", "elif temp <= 24:", "elif temp >= 15:", "elif temp > 14 and temp < 25:"]
    },
    "answer": {
      "first_condition": "if temp < 0:",
      "second_condition": "elif temp < 15:",
      "third_condition": "elif temp < 25:"
    },
    "explanation": "When using if/elif chains, earlier conditions act as guards for later ones. After `temp < 0` fails, the elif `temp < 15` correctly captures the range 0–14 (since negative values were already handled). After that, `temp < 25` correctly captures 15–24. The simpler forms work because of the order — adding explicit lower bounds is unnecessary and easy to get wrong."
  },
  {
    "id": 262,
    "domain": "Conditional logic & short-circuit evaluation",
    "type": "true_false",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>values = [10, 20, 30]<br>index = 5<br><br>if index < len(values) and values[index] > 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Found positive\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Not found\")</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "The code runs without an error.",
      "statement2": "The code prints Not found.",
      "statement3": "Swapping the two conditions (so values[index] > 0 is checked first) would still run without an error."
    },
    "answer": {
      "statement1": "True: The code runs without an error.",
      "statement2": "True: The code prints Not found.",
      "statement3": "False: Swapping the two conditions (so values[index] > 0 is checked first) would still run without an error."
    },
    "explanation": "Statement 1 is True — Python uses short-circuit evaluation. Since `index < len(values)` is `5 < 3` which is False, the second part `values[index] > 0` is never evaluated, avoiding an IndexError. Statement 2 is True — the condition is False, so the else branch runs. Statement 3 is False — if you swap them, `values[5]` is evaluated first and raises IndexError because index 5 is out of range. Order matters with short-circuit evaluation."
  },
  {
    "id": 263,
    "domain": "Nested if statements & flow analysis",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>score = 75<br>bonus = True<br><br>if score >= 90:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade = \"A\"<br>if score >= 80:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade = \"B\"<br>if score >= 70:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade = \"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;if bonus == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;grade = \"B\"<br>if score >= 60:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade = \"D\"<br><br>print(grade)</div><br><br>What is printed?",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "D. D",
    "explanation": "This uses separate `if` statements (not `elif`), so all conditions are checked independently. With score=75: first if (>=90) False. Second if (>=80) False. Third if (>=70) True → grade=C, then bonus is True → grade=B. Fourth if (>=60) True → grade=D. The last assignment wins, so D is printed. This is a classic trap showing why elif matters — using if everywhere creates unintended overwrites."
  },
  {
    "id": 264,
    "domain": "Conditional logic & input handling",
    "type": "fill_in_blank",
    "question": "You are writing a program that asks the user a yes/no question. The program must accept any of these answers as \"yes\": \"Y\", \"y\", \"Yes\", \"YES\", \"yes\". Any other input is treated as \"no\".<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>response = input(\"Continue? \")<br>response = response.____()<br><br>if response ____ \"y\" ____ response ____ \"yes\":<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Continuing...\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Stopping.\")</div>",
    "options": {
      "normalize": ["lower", "upper", "title", "capitalize"],
      "first_comparison": ["==", "=", "is", "in"],
      "logical_operator": ["or", "and", "not", "if"],
      "second_comparison": ["==", "=", "is", "in"]
    },
    "answer": {
      "normalize": "lower",
      "first_comparison": "==",
      "logical_operator": "or",
      "second_comparison": "=="
    },
    "explanation": "`lower()` converts the input to lowercase so all variations (\"Y\", \"YES\", \"Yes\", etc.) become either \"y\" or \"yes\". Use `==` for equality comparison (`=` is assignment, `is` checks object identity which can give wrong results for strings). Use `or` because the user only needs to match one of the two accepted forms. Using `and` would require the response to equal both \"y\" AND \"yes\" simultaneously — which is impossible."
  },
  {
    "id": 265,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a function that returns the loan interest rate offered to a customer. The function must meet the following requirements:<br><br>• If the customer's credit score is high (credit_high == True):<br>&nbsp;&nbsp;&nbsp;&nbsp;◦ If they have collateral, the rate is 3.5<br>&nbsp;&nbsp;&nbsp;&nbsp;◦ If they do not have collateral, the rate is 5.0<br>• If the customer's credit score is not high:<br>&nbsp;&nbsp;&nbsp;&nbsp;◦ If they have a co-signer, the rate is 6.5<br>&nbsp;&nbsp;&nbsp;&nbsp;◦ If they do not have a co-signer, the rate is 9.0<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def loan_rate(credit_high, collateral, cosigner):<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 3.5<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 5.0<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 6.5<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 9.0<br>&nbsp;&nbsp;&nbsp;&nbsp;return rate</div>",
    "options": {
      "first_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"],
      "second_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"],
      "third_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"],
      "fourth_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"],
      "fifth_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"],
      "sixth_dropdown": ["if credit_high == True:", "if collateral == True:", "if cosigner == True:", "else:", "elif:"]
    },
    "answer": {
      "first_dropdown": "if credit_high == True:",
      "second_dropdown": "if collateral == True:",
      "third_dropdown": "else:",
      "fourth_dropdown": "else:",
      "fifth_dropdown": "if cosigner == True:",
      "sixth_dropdown": "else:"
    },
    "explanation": "The outer split is on credit_high. The first outer branch (if credit_high == True) contains a nested decision on collateral — if collateral == True gives 3.5, the inner else gives 5.0. The outer else (for non-high credit) contains a different nested decision on cosigner — if cosigner == True gives 6.5, the inner else gives 9.0. The key trick is recognizing that the two halves of the function use different secondary variables."
  },
  {
    "id": 266,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a function that returns a delivery label based on a package weight (weight) in kilograms. The function must meet the following requirements:<br><br>• If the weight is unknown (None), the label is \"Unknown\"<br>• Weight 20 or more → \"Heavy\"<br>• Weight 5 or more, but less than 20 → \"Medium\"<br>• Weight less than 5 → \"Light\"<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_label(weight):<br>&nbsp;&nbsp;&nbsp;&nbsp;label = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;return label</div>",
    "options": {
      "if_clause": [
        "if weight is None: label = \"Unknown\"",
        "if weight >= 20: label = \"Heavy\"",
        "if weight >= 5: label = \"Medium\"",
        "if weight < 5: label = \"Light\""
      ],
      "elif1_clause": [
        "elif weight >= 20: label = \"Heavy\"",
        "elif weight >= 5: label = \"Medium\"",
        "elif weight < 5: label = \"Light\"",
        "elif weight is None: label = \"Unknown\""
      ],
      "elif2_clause": [
        "elif weight >= 5: label = \"Medium\"",
        "elif weight >= 20: label = \"Heavy\"",
        "elif weight < 5: label = \"Light\"",
        "elif weight is None: label = \"Unknown\""
      ],
      "else_clause": [
        "else: label = \"Light\"",
        "else: label = \"Medium\"",
        "else: label = \"Heavy\""
      ]
    },
    "answer": {
      "if_clause": "if weight is None: label = \"Unknown\"",
      "elif1_clause": "elif weight >= 20: label = \"Heavy\"",
      "elif2_clause": "elif weight >= 5: label = \"Medium\"",
      "else_clause": "else: label = \"Light\""
    },
    "explanation": "Check `weight is None` first to avoid a TypeError when comparing None to numbers in later conditions. Then check `weight >= 20` for Heavy (the highest bracket comes next). Then `weight >= 5` for Medium (covers 5–19 since 20+ was already handled). The else catches the remaining case (weight less than 5), giving Light."
  },
  {
    "id": 267,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a function that returns a shipping tier from a package weight in pounds (weight):<br><br>• Weight 2 pounds or less → \"Letter\"<br>• Weight more than 2, up to and including 10 → \"Small\"<br>• Weight more than 10, but less than 50 → \"Medium\"<br>• Weight 50 or more → \"Freight\"<br><br>Some of the dropdown options use > instead of <=, which changes the logic depending on what comes before — choose carefully.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def shipping_tier(weight):<br>&nbsp;&nbsp;&nbsp;&nbsp;tier = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;return tier</div>",
    "options": {
      "if_clause": [
        "if weight <= 2: tier = \"Letter\"",
        "if weight > 2: tier = \"Small\"",
        "if weight >= 50: tier = \"Freight\"",
        "if weight < 50: tier = \"Medium\""
      ],
      "elif1_clause": [
        "elif weight <= 10: tier = \"Small\"",
        "elif weight > 10: tier = \"Medium\"",
        "elif weight <= 2: tier = \"Letter\"",
        "elif weight >= 50: tier = \"Freight\""
      ],
      "elif2_clause": [
        "elif weight < 50: tier = \"Medium\"",
        "elif weight > 50: tier = \"Freight\"",
        "elif weight <= 10: tier = \"Small\"",
        "elif weight > 2: tier = \"Small\""
      ],
      "else_clause": [
        "else: tier = \"Freight\"",
        "else: tier = \"Medium\"",
        "else: tier = \"Small\"",
        "else: tier = \"Letter\""
      ]
    },
    "answer": {
      "if_clause": "if weight <= 2: tier = \"Letter\"",
      "elif1_clause": "elif weight <= 10: tier = \"Small\"",
      "elif2_clause": "elif weight < 50: tier = \"Medium\"",
      "else_clause": "else: tier = \"Freight\""
    },
    "explanation": "The chain works because each elif relies on what was already filtered out above it. After `weight <= 2` fails, `weight <= 10` correctly captures the range from just above 2 up to and including 10. After that, `weight < 50` captures 11 to 49. The else catches 50 and above for Freight. Option `elif weight > 10` looks tempting but would wrongly include weights 50 and up as Medium."
  },
  {
    "id": 268,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a function that decides whether a user can access a system. The function must meet the following requirements:<br><br>• If the account is locked, return \"Denied: account locked\"<br>• If the account is not locked and the password is correct, return \"Access granted\"<br>• If the account is not locked and the password is incorrect, return \"Denied: wrong password\"<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def check_access(locked, password_correct):<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = \"Denied: account locked\"<br><br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = \"Access granted\"<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = \"Denied: wrong password\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return result</div>",
    "options": {
      "first_dropdown": ["if locked == True:", "if password_correct == True:", "else:", "elif:"],
      "second_dropdown": ["if locked == True:", "if password_correct == True:", "else:", "elif:"],
      "third_dropdown": ["if locked == True:", "if password_correct == True:", "else:", "elif:"],
      "fourth_dropdown": ["if locked == True:", "if password_correct == True:", "else:", "elif:"]
    },
    "answer": {
      "first_dropdown": "if locked == True:",
      "second_dropdown": "else:",
      "third_dropdown": "if password_correct == True:",
      "fourth_dropdown": "else:"
    },
    "explanation": "The outer if locked == True handles the locked case first since it overrides everything. The outer else covers all unlocked accounts. Within that, the nested if password_correct == True distinguishes between successful access and wrong password. The inner else covers the wrong password case."
  },
  {
    "id": 269,
    "domain": "Functions & conditional logic",
    "type": "fill_in_blank",
    "question": "You are writing a function that calculates the BMI category from a person's BMI value (bmi). The function must meet the following requirements:<br><br>• If bmi is negative or zero, return \"Invalid\"<br>• BMI below 18.5 → \"Underweight\"<br>• BMI 18.5 to below 25 → \"Normal\"<br>• BMI 25 or higher → \"Overweight\"<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def bmi_category(bmi):<br>&nbsp;&nbsp;&nbsp;&nbsp;category = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;return category</div>",
    "options": {
      "if_clause": [
        "if bmi <= 0: category = \"Invalid\"",
        "if bmi < 18.5: category = \"Underweight\"",
        "if bmi < 25: category = \"Normal\"",
        "if bmi >= 25: category = \"Overweight\""
      ],
      "elif1_clause": [
        "elif bmi < 18.5: category = \"Underweight\"",
        "elif bmi <= 0: category = \"Invalid\"",
        "elif bmi < 25: category = \"Normal\"",
        "elif bmi >= 25: category = \"Overweight\""
      ],
      "elif2_clause": [
        "elif bmi < 25: category = \"Normal\"",
        "elif bmi < 18.5: category = \"Underweight\"",
        "elif bmi <= 0: category = \"Invalid\"",
        "elif bmi >= 25: category = \"Overweight\""
      ],
      "else_clause": [
        "else: category = \"Overweight\"",
        "else: category = \"Normal\"",
        "else: category = \"Underweight\"",
        "else: category = \"Invalid\""
      ]
    },
    "answer": {
      "if_clause": "if bmi <= 0: category = \"Invalid\"",
      "elif1_clause": "elif bmi < 18.5: category = \"Underweight\"",
      "elif2_clause": "elif bmi < 25: category = \"Normal\"",
      "else_clause": "else: category = \"Overweight\""
    },
    "explanation": "Check bmi <= 0 first as a guard clause to filter out invalid values before any real classification. Then check bmi < 18.5 for Underweight (since invalid values are gone, this only catches valid low BMI). Then bmi < 25 for Normal (covers 18.5 to just under 25). The else catches everything 25 or higher → Overweight."
  },
  {
    "id": 270,
    "domain": "String formatting & f-strings",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = \"Ana\"<br>score = 87.5421<br>attempts = 3<br><br>result = f\"{name.upper()} scored {score:.2f} in {attempts} tries\"<br>print(result)</div><br><br>What is the output?",
    "options": [
      "A. ANA scored 87.54 in 3 tries",
      "B. Ana scored 87.5421 in 3 tries",
      "C. ANA scored 87.5 in 3 tries",
      "D. The code generates a syntax error."
    ],
    "answer": "A. ANA scored 87.54 in 3 tries",
    "explanation": "f-strings allow method calls and expressions inside the braces. `{name.upper()}` evaluates name.upper() → \"ANA\". The format specifier `:.2f` rounds the float to 2 decimal places → 87.54. `{attempts}` inserts the integer as-is."
  },
  {
    "id": 271,
    "domain": "String formatting & % operator",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>product = \"Coffee\"<br>quantity = 5<br>price = 4.99<br><br>print(\"Item: %-10s Qty: %3d Total: $%6.2f\" % (product, quantity, quantity * price))</div><br><br>What is the output?",
    "options": [
      "A. Item: Coffee     Qty:   5 Total: $ 24.95",
      "B. Item: Coffee Qty: 5 Total: $24.95",
      "C. Item: -Coffee    Qty: 5   Total: $24.950",
      "D. The code generates a runtime error because of mixed format specifiers."
    ],
    "answer": "A. Item: Coffee     Qty:   5 Total: $ 24.95",
    "explanation": "`%-10s` formats the string left-aligned in a 10-character field → \"Coffee\" + 4 spaces. `%3d` formats the integer right-aligned in a 3-character field → 2 spaces + \"5\". `%6.2f` formats the float in a 6-character field with 2 decimal places → 1 space + \"24.95\". Total expression: 5 * 4.99 = 24.95."
  },
  {
    "id": 272,
    "domain": "String formatting methods",
    "type": "fill_in_blank",
    "question": "You need to print the message: <code>Order #42: total = $19.99</code><br><br>The variables are defined as:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>order_id = 42<br>total = 19.99</div><br><br>Match each formatting style on the right with the correct expression by selecting from the dropdowns.",
    "options": {
      "f_string_style": [
        "f\"Order #{order_id}: total = ${total}\"",
        "f\"Order #{order_id}: total = $total\"",
        "f\"Order #order_id: total = ${total}\"",
        "f(\"Order #{order_id}: total = ${total}\")"
      ],
      "format_method_style": [
        "\"Order #{}: total = ${}\".format(order_id, total)",
        "\"Order #{0}: total = $%f\".format(order_id, total)",
        "\"Order #{order_id}: total = ${total}\".format()",
        "\"Order #{}: total = ${}\" % (order_id, total)"
      ],
      "percent_style": [
        "\"Order #%d: total = $%s\" % (order_id, total)",
        "\"Order #%d: total = $%s\".format(order_id, total)",
        "\"Order #{d}: total = ${s}\" % (order_id, total)",
        "\"Order #%d: total = $%s\" % order_id, total"
      ]
    },
    "answer": {
      "f_string_style": "f\"Order #{order_id}: total = ${total}\"",
      "format_method_style": "\"Order #{}: total = ${}\".format(order_id, total)",
      "percent_style": "\"Order #%d: total = $%s\" % (order_id, total)"
    },
    "explanation": "All three produce equivalent output. The f-string embeds variables directly inside {}. The .format() method uses positional {} placeholders filled in order. The % operator uses %d for integers and %s to convert any value to its string form, with the values supplied as a tuple on the right."
  },
  {
    "id": 273,
    "domain": "String formatting with .format()",
    "type": "fill_in_blank",
    "question": "A weather station needs to print a daily temperature report. The output must look like this:<br><br><code>Day 5: high=28.7C low=14.2C</code><br><br>The variables are:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>day = 5<br>high = 28.7<br>low = 14.2<br><br>message = \"Day ____: high=____C low=____C\".format(day, high, low)<br>print(message)</div>",
    "options": {
      "first_placeholder": ["{0}", "{1}", "{2}", "{d}"],
      "second_placeholder": ["{1}", "{0}", "{2}", "{f}"],
      "third_placeholder": ["{2}", "{0}", "{1}", "{f}"]
    },
    "answer": {
      "first_placeholder": "{0}",
      "second_placeholder": "{1}",
      "third_placeholder": "{2}"
    },
    "explanation": "With `.format(day, high, low)`, position 0 is day, position 1 is high, position 2 is low. The placeholders must use positional indices that match the argument order. The format method does not support type letters like {d} or {f} as standalone identifiers — those go after a colon (e.g., {0:d})."
  },
  {
    "id": 274,
    "domain": "String formatting with %",
    "type": "fill_in_blank",
    "question": "You are writing a Python report that displays a student's name, ID, and average grade. The output must meet the following requirements:<br><br>• The student name must be left-aligned in a field of 15 characters.<br>• The ID must be displayed as an integer right-aligned in a field of 6 characters.<br>• The grade must show exactly 1 decimal place.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = \"Maria\"<br>student_id = 482<br>grade = 88.46<br><br>print(\"Name: ____ ID: ____ Grade: ____\" % (name, student_id, grade))</div>",
    "options": {
      "name_format": ["%-15s", "%15s", "%-15d", "%15.5s"],
      "id_format": ["%6d", "%-6d", "%6s", "%6f"],
      "grade_format": ["%.1f", "%1f", "%.1d", "%f.1"]
    },
    "answer": {
      "name_format": "%-15s",
      "id_format": "%6d",
      "grade_format": "%.1f"
    },
    "explanation": "`%-15s` formats a string left-aligned (-) in a 15-character field. `%6d` formats an integer right-aligned (default) in a 6-character field. `%.1f` formats a float with exactly 1 digit after the decimal point. `%-15d` would treat the name as an integer (TypeError), and `%.1d` is not a valid integer format."
  },
  {
    "id": 275,
    "domain": "String formatting with .format()",
    "type": "fill_in_blank",
    "question": "A bookstore needs to print invoice lines that look like this:<br><br><code>Title: Python Basics&nbsp;&nbsp;&nbsp;&nbsp;Copies: &nbsp;3 Price: $&nbsp;&nbsp;&nbsp;19.99</code><br><br>The output must meet the following requirements:<br><br>• Title is left-aligned in a 20-character field.<br>• Copies is right-aligned in a 2-character field.<br>• Price is right-aligned in a 8-character field with 2 decimal places.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>title = \"Python Basics\"<br>copies = 3<br>price = 19.99<br><br>line = \"Title: ____ Copies: ____ Price: $____\".format(title, copies, price)<br>print(line)</div>",
    "options": {
      "title_format": ["{0:<20}", "{0:>20}", "{0:^20}", "{0:20d}"],
      "copies_format": ["{1:>2}", "{1:<2}", "{1:2f}", "{1:.2}"],
      "price_format": ["{2:>8.2f}", "{2:<8.2f}", "{2:.2f8}", "{2:8.2d}"]
    },
    "answer": {
      "title_format": "{0:<20}",
      "copies_format": "{1:>2}",
      "price_format": "{2:>8.2f}"
    },
    "explanation": "In `.format()` mini-language, `<` means left-align, `>` means right-align, and `^` means centered. `{0:<20}` left-aligns the title in 20 characters. `{1:>2}` right-aligns the integer in 2 characters. `{2:>8.2f}` right-aligns a float in 8 characters with 2 decimal places."
  },
  {
    "id": 276,
    "domain": "String formatting with %",
    "type": "fill_in_blank",
    "question": "A company needs to print a sales summary that looks like this:<br><br><code>Region: NORTH&nbsp;&nbsp;&nbsp;sold 1245 units at $ 23.50 each</code><br><br>The variables are:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>region = \"north\"<br>units = 1245<br>price = 23.5</div><br><br>The output must meet the following requirements:<br><br>• The region must be uppercase and left-aligned in a 7-character field.<br>• The units must appear as an integer (no decimal point).<br>• The price must show 2 decimal places in a 6-character field.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>print(\"Region: ____ sold ____ units at $____ each\" % (____, units, price))</div>",
    "options": {
      "region_format": ["%-7s", "%7s", "%-7d", "%.7s"],
      "units_format": ["%d", "%f", "%s", "%.0d"],
      "price_format": ["%6.2f", "%.6f", "%2.6f", "%6.2d"],
      "region_argument": ["region.upper()", "region", "upper(region)", "region.UPPER"]
    },
    "answer": {
      "region_format": "%-7s",
      "units_format": "%d",
      "price_format": "%6.2f",
      "region_argument": "region.upper()"
    },
    "explanation": "`%-7s` left-aligns the string in 7 characters. `%d` formats an integer with no decimal. `%6.2f` formats a float in a 6-character field with 2 decimal places. The uppercase conversion must happen before % substitution, by calling region.upper() as the actual argument. % formatting does not support a built-in uppercase modifier."
  },
  {
    "id": 277,
    "domain": "String formatting — mixed styles",
    "type": "fill_in_blank",
    "question": "You are debugging a coworker's code. Three different lines must all produce the same output:<br><br><code>User alice has 7 messages (priority=high)</code><br><br>The variables are:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>user = \"alice\"<br>count = 7<br>priority = \"high\"</div><br><br>Match each line to the missing piece.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'># Line 1 — f-string<br>line1 = f\"User ____ has ____ messages (priority=____)\"<br><br># Line 2 — .format()<br>line2 = \"User {} has {} messages (priority=____)\".format(user, count, priority)<br><br># Line 3 — % operator<br>line3 = \"User %s has %d messages (priority=____)\" % (user, count, priority)</div>",
    "options": {
      "line1_first": ["{user}", "%s", "{}", "user"],
      "line1_second": ["{count}", "%d", "{}", "count"],
      "line1_third": ["{priority}", "%s", "{}", "priority"],
      "line2_third": ["{}", "{2}", "%s", "{priority}"],
      "line3_third": ["%s", "{}", "{2}", "%priority"]
    },
    "answer": {
      "line1_first": "{user}",
      "line1_second": "{count}",
      "line1_third": "{priority}",
      "line2_third": "{}",
      "line3_third": "%s"
    },
    "explanation": "f-strings (f\"...\") embed variable names directly inside braces — {user}, {count}, {priority}. The .format() method uses empty {} placeholders that are filled positionally from the arguments. The % operator uses type codes — %s for strings, %d for integers — and takes its arguments from the tuple on the right."
  },
  {
    "id": 278,
    "domain": "File operations & writing",
    "type": "fill_in_blank",
    "question": "A logistics company needs a script that creates a new log file from scratch, writes a header line, and closes the file. If the log file already exists, its contents must be erased.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>log = ____<br>log.____(\"=== Daily Log ===\\n\")<br>log.____()</div>",
    "options": {
      "file_open": ["open(\"log.txt\", \"w\")", "open(\"log.txt\", \"r\")", "open(\"log.txt\", \"a\")", "open(\"log.txt\", \"x\")"],
      "write_method": ["write", "append", "print", "save"],
      "close_method": ["close", "end", "stop", "exit"]
    },
    "answer": {
      "file_open": "open(\"log.txt\", \"w\")",
      "write_method": "write",
      "close_method": "close"
    },
    "explanation": "`\"w\"` opens the file in write mode, creating it if it doesn't exist and erasing existing content if it does. `\"a\"` would append instead of erasing. `\"x\"` fails if the file already exists. The write() method adds the text, and close() releases the file handle."
  },
  {
    "id": 279,
    "domain": "File operations & line-by-line reading",
    "type": "fill_in_blank",
    "question": "You are writing a function that opens a text file and returns the number of non-empty lines it contains. Empty lines (lines that contain only a newline) must not be counted.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def count_lines(filename):<br>&nbsp;&nbsp;&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;file = ____<br>&nbsp;&nbsp;&nbsp;&nbsp;for line ____ file:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if line ____ \"\\n\":<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;file.close()<br>&nbsp;&nbsp;&nbsp;&nbsp;return count</div>",
    "options": {
      "open_call": ["open(filename, \"r\")", "open(filename, \"w\")", "open(filename)", "read(filename)"],
      "iteration_keyword": ["in", "of", "within", "from"],
      "comparison_operator": ["!=", "==", "is", "not"]
    },
    "answer": {
      "open_call": "open(filename, \"r\")",
      "iteration_keyword": "in",
      "comparison_operator": "!="
    },
    "explanation": "Open the file in read mode. Iterating over a file object yields each line one at a time, including the trailing newline character. Use != to check that the line is not just a newline — if line != \"\\n\", the line has actual content and should be counted. Note: open(filename, \"w\") would erase the file."
  },
  {
    "id": 280,
    "domain": "Functions & multiple return values",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def stats(numbers):<br>&nbsp;&nbsp;&nbsp;&nbsp;return min(numbers), max(numbers), sum(numbers)<br><br>low, high, total = stats([3, 7, 2, 9, 5])<br>print(high - low)</div><br><br>What is the output?",
    "options": [
      "A. 7",
      "B. 26",
      "C. 9",
      "D. The code generates a runtime error."
    ],
    "answer": "A. 7",
    "explanation": "A function can return multiple values as a tuple by separating them with commas. The values (2, 9, 26) are unpacked into low, high, and total in order. high - low = 9 - 2 = 7. Option B (26) would only be correct if the print used total."
  },
  {
    "id": 281,
    "domain": "Functions & file operations combined",
    "type": "fill_in_blank",
    "question": "A company asks you to write a function that appends a single line of text to an existing file. The function must meet the following requirements:<br><br>• The function is named append_line.<br>• The function takes two parameters: the file name and the text to append.<br>• The text must be written followed by a newline character.<br>• The file must be properly closed before the function returns.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ append_line(____):<br>&nbsp;&nbsp;&nbsp;&nbsp;file = open(filename, ____)<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write(text + \"\\n\")<br>&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
    "options": {
      "function_keyword": ["def", "function", "fn", "func"],
      "parameters": ["filename, text", "text, filename", "(filename, text)", "filename + text"],
      "file_mode": ["\"a\"", "\"w\"", "\"r\"", "\"x\""],
      "close_call": ["file.close()", "close(file)", "file.end()", "file.stop()"]
    },
    "answer": {
      "function_keyword": "def",
      "parameters": "filename, text",
      "file_mode": "\"a\"",
      "close_call": "file.close()"
    },
    "explanation": "`def` defines a function. The parameters are listed inside parentheses as filename, text (without extra parentheses since they're already in the def line). Use \"a\" (append mode) so the file is not erased — \"w\" would overwrite existing content. Finally, file.close() properly releases the file handle."
  },
  {
    "id": 282,
    "domain": "Functions, file operations & exception handling",
    "type": "true_false",
    "question": "Review the following function:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def safe_open(filename):<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file = open(filename, \"r\")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content = file.read()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file.close()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return content<br>&nbsp;&nbsp;&nbsp;&nbsp;except FileNotFoundError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return None</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "If filename refers to an existing file, the function returns the file's contents as a string.",
      "statement2": "If filename does not exist, the function returns None instead of crashing.",
      "statement3": "If the file exists but the user lacks permission to read it, the function returns None."
    },
    "answer": {
      "statement1": "True: If filename refers to an existing file, the function returns the file's contents as a string.",
      "statement2": "True: If filename does not exist, the function returns None instead of crashing.",
      "statement3": "False: If the file exists but the user lacks permission to read it, the function returns None."
    },
    "explanation": "Statement 1 is True — read() returns the whole file content as a string. Statement 2 is True — FileNotFoundError is the specific exception raised when the file is missing, and the except clause catches it. Statement 3 is False — a permission error raises PermissionError, which is NOT caught by except FileNotFoundError. The function would crash with an unhandled exception."
  },
  {
    "id": 283,
    "domain": "File operations & file modes",
    "type": "fill_in_blank",
    "question": "A company asks you to update an existing inventory file. Each time the program runs, it must add a new line at the end of the file without erasing what is already there. If the file does not exist yet, it must be created automatically.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>file = open(\"inventory.txt\", ____)<br>file.write(\"item added on Friday\\n\")<br>file.close()</div>",
    "options": {
      "file_mode": ["\"a\"", "\"w\"", "\"r\"", "\"x\""]
    },
    "answer": {
      "file_mode": "\"a\""
    },
    "explanation": "Mode \"a\" (append) adds new content at the end of the file without erasing existing content, and creates the file if it doesn't exist. Mode \"w\" would erase existing content. Mode \"r\" is read-only. Mode \"x\" (exclusive creation) fails if the file already exists."
  },
  {
    "id": 284,
    "domain": "Functions & default parameters",
    "type": "fill_in_blank",
    "question": "You are writing a function for a delivery system that calculates the total cost of a shipment. The function must meet the following requirements:<br><br>• The function is named shipment_cost.<br>• The first parameter is weight (no default).<br>• The second parameter is rate_per_kg with a default value of 1.5.<br>• The third parameter is surcharge with a default value of 0.<br>• The function returns weight * rate_per_kg + surcharge.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def ____(____, ____, ____):<br>&nbsp;&nbsp;&nbsp;&nbsp;return weight * rate_per_kg + surcharge</div>",
    "options": {
      "function_name": ["shipment_cost", "ShipmentCost", "shipment-cost", "shipmentCost()"],
      "first_param": ["weight", "weight = 0", "weight = None", "weight = 1.5"],
      "second_param": ["rate_per_kg = 1.5", "rate_per_kg", "rate_per_kg == 1.5", "1.5 = rate_per_kg"],
      "third_param": ["surcharge = 0", "surcharge", "surcharge == 0", "0 = surcharge"]
    },
    "answer": {
      "function_name": "shipment_cost",
      "first_param": "weight",
      "second_param": "rate_per_kg = 1.5",
      "third_param": "surcharge = 0"
    },
    "explanation": "Python function names use lowercase with underscores (snake_case). Required parameters must come before parameters with default values, so weight has no default. The defaults are written with a single = (assignment), not == (comparison). The parameter name must always be on the left of the =."
  },
  {
    "id": 285,
    "domain": "Functions & variable scope",
    "type": "true_false",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>count = 0<br><br>def increment():<br>&nbsp;&nbsp;&nbsp;&nbsp;count = count + 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return count<br><br>result = increment()<br>print(count)<br>print(result)</div><br><br>For each statement, select True or False:",
    "options": {
      "statement1": "The code runs without an error.",
      "statement2": "After the function runs, the global count is 1.",
      "statement3": "To modify the global count from inside the function, the global keyword must be used."
    },
    "answer": {
      "statement1": "False: The code runs without an error.",
      "statement2": "False: After the function runs, the global count is 1.",
      "statement3": "True: To modify the global count from inside the function, the global keyword must be used."
    },
    "explanation": "Statement 1 is False — assigning to count inside the function makes it a local variable, so the read count + 1 raises an UnboundLocalError (the local has no value yet). Statement 2 is False — even if the code worked, assignment inside a function does not affect the global by default. Statement 3 is True — declaring global count inside the function tells Python to use the outer variable, allowing both the read and the modification to refer to the global."
  },
  {
    "id": 286,
    "domain": "File operations & with statement",
    "type": "fill_in_blank",
    "question": "A company asks you to rewrite an old file-reading script to use the with statement, so the file is automatically closed even if an error occurs.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ open(\"data.txt\", \"r\") ____ file:<br>&nbsp;&nbsp;&nbsp;&nbsp;content = file.____()<br>&nbsp;&nbsp;&nbsp;&nbsp;print(content)</div>",
    "options": {
      "with_keyword": ["with", "using", "open", "for"],
      "as_keyword": ["as", "to", "into", "="],
      "read_method": ["read", "readline", "write", "load"]
    },
    "answer": {
      "with_keyword": "with",
      "as_keyword": "as",
      "read_method": "read"
    },
    "explanation": "The `with` statement creates a context manager. The syntax is `with <expression> as <variable>:` — here the file object is assigned to file. read() returns the entire file content as a single string. The major benefit of with is that the file is automatically closed when the block ends, even if an exception is raised."
  },
  {
    "id": 287,
    "domain": "Functions & return values",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def check(value):<br>&nbsp;&nbsp;&nbsp;&nbsp;if value < 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return \"negative\"<br>&nbsp;&nbsp;&nbsp;&nbsp;if value == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return \"zero\"<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"positive\")<br><br>result = check(5)<br>print(result)</div><br><br>What is the output?",
    "options": [
      "A. positive then positive",
      "B. positive then None",
      "C. None then positive",
      "D. The code generates a runtime error."
    ],
    "answer": "B. positive then None",
    "explanation": "When check(5) is called, both if conditions are False, so the code reaches the print(\"positive\") line, which outputs positive to the console. The function then ends without a return statement, so it implicitly returns None. That None is stored in result and printed on the next line. A common mistake is to confuse printing with returning — print only displays text, it does not give a value back to the caller."
  },
  {
    "id": 288,
    "domain": "Nested loops & output counting",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>total = 0<br>for i in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += 1<br>print(total)</div><br><br>What is the output?",
    "options": [
      "A. 6",
      "B. 9",
      "C. 12",
      "D. 16"
    ],
    "answer": "B. 9",
    "explanation": "`range(1, 4)` produces 1, 2, 3 (three values). The outer loop runs 3 times, and for each outer iteration the inner loop runs 3 times. Total iterations = 3 × 3 = 9. total is incremented once per inner iteration, so it ends at 9."
  },
  {
    "id": 291,
    "domain": "Nested loops & triangle pattern with range",
    "type": "fill_in_blank",
    "question": "You are writing a Python program that prints the following right triangle pattern:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>*<br>**<br>***<br>****<br>*****</div><br><br>The number of stars in each row matches the row number (row 1 has 1 star, row 2 has 2 stars, etc.). There are 5 rows total.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for row in range(____):<br>&nbsp;&nbsp;&nbsp;&nbsp;for col in range(____):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"*\", end=\"\")<br>&nbsp;&nbsp;&nbsp;&nbsp;print()</div>",
    "options": {
      "outer_range": ["1, 6", "0, 5", "5", "1, 5"],
      "inner_range": ["row", "5", "row + 1", "1, row"]
    },
    "answer": {
      "outer_range": "1, 6",
      "inner_range": "row"
    },
    "explanation": "Using range(1, 6) makes row take the values 1, 2, 3, 4, 5 — which directly match the number of stars in each row. The inner range(row) then runs that many times (e.g., when row=3, the inner loop runs 3 times, printing 3 stars). An alternative valid pairing would be range(5) (0–4) with range(row + 1), but the question dropdown forces matching the simpler pairing."
  },
  {
    "id": 292,
    "domain": "Nested loops & continue",
    "type": "multiple_choice",
    "question": "Review the following code:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result = 0<br>for i in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if i == j:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += i * j<br>print(result)</div><br><br>What is the output?",
    "options": [
      "A. 22",
      "B. 36",
      "C. 14",
      "D. 18"
    ],
    "answer": "A. 22",
    "explanation": "`continue` skips the rest of the current inner iteration when i == j. Trace each (i, j) where i != j: (1,2)→2, (1,3)→3, (2,1)→2, (2,3)→6, (3,1)→3, (3,2)→6. Sum = 2+3+2+6+3+6 = 22. The skipped pairs (1,1), (2,2), (3,3) would have added 1+4+9 = 14 (giving 36 total), which is the trap answer."
  }
]
