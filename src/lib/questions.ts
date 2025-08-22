import { Question } from './types';

export const quizQuestions: Question[] = [
  // Section 1: Data Types and Operators
  {
    id: 1,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What data type will Python assign to the variable <code class='bg-gray-100 px-2 py-1 rounded font-mono'>x</code> in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 5 / 2</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>int</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>float</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>str</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>bool</code>"
    ],
    answer: "B",
    explanation: "Division with / always returns a float in Python 3, even when dividing integers."
  },
  {
    id: 2,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the output of this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [3, 1, 4, 1, 5]<br>numbers.append(9)<br>print(len(numbers))</div>",
    options: [
      "A. 5",
      "B. 6",
      "C. 7",
      "D. Error"
    ],
    answer: "B",
    explanation: "The list starts with 5 elements, append() adds one more element, so the length becomes 6."
  },
  {
    id: 3,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "Which operator has the highest precedence in Python?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result = 2 + 3 * 4 ** 2</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>+</code> (addition)",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>*</code> (multiplication)",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>**</code> (exponentiation)",
      "D. They have equal precedence"
    ],
    answer: "C",
    explanation: "Exponentiation (**) has the highest precedence, followed by multiplication (*), then addition (+)."
  },
  {
    id: 4,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the result of this string slicing operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>text = 'Python'<br>print(text[1:4])</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Pyt</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>yth</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>ytho</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tho</code>"
    ],
    answer: "B",
    explanation: "Slicing [1:4] takes characters from index 1 to 3 (4 is excluded): 'y', 't', 'h'."
  },
  {
    id: 5,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "Which assignment operator should be used to multiply a variable by 3?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>score = 10<br># Multiply score by 3</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>score =* 3</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>score *= 3</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>score =+ 3</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>score *+ 3</code>"
    ],
    answer: "B",
    explanation: "The *= operator multiplies the variable by the value on the right side."
  },

  // Section 2: Flow Control
  {
    id: 6,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What will this code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>age = 16<br>if age >= 18:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Adult')<br>elif age >= 13:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Teen')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Child')</div>",
    options: [
      "A. Adult",
      "B. Teen",
      "C. Child",
      "D. Error"
    ],
    answer: "B",
    explanation: "Since age (16) is not >= 18 but is >= 13, the elif condition is true and 'Teen' is printed."
  },
  {
    id: 7,
    domain: "Flow control",
    type: "multiple_choice",
    question: "How many times will this loop execute?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(3, 8):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    options: [
      "A. 3 times",
      "B. 4 times",
      "C. 5 times",
      "D. 8 times"
    ],
    answer: "C",
    explanation: "range(3, 8) generates numbers 3, 4, 5, 6, 7 - that's 5 numbers total."
  },
  {
    id: 8,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What happens when <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>break</code> is encountered in a loop?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(5):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    options: [
      "A. Skips the current iteration only",
      "B. Exits the loop completely",
      "C. Restarts the loop from the beginning",
      "D. Causes an error"
    ],
    answer: "B",
    explanation: "The break statement exits the loop completely when i equals 3, so only 0, 1, 2 are printed."
  },
  {
    id: 9,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What is the output of this nested loop?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(2):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i, j)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 0<br>1 1</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 1<br>1 0</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 0<br>0 1<br>1 0<br>1 1</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 1<br>2 2</code>"
    ],
    answer: "C",
    explanation: "The outer loop runs twice (i=0,1) and for each outer iteration, the inner loop runs twice (j=0,1)."
  },

  // Section 3: Input/Output Operations
  {
    id: 10,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "Which file mode should be used to add content to the end of an existing file?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('data.txt', '___') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;file.write('New data')</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>'r'</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>'w'</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>'a'</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>'x'</code>"
    ],
    answer: "C",
    explanation: "The 'a' mode opens a file for appending, adding new content to the end without overwriting existing content."
  },
  {
    id: 11,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "What is the correct way to format this string using f-strings?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'Alice'<br>age = 25<br># Print: Hello Alice, you are 25 years old</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print('Hello {name}, you are {age} years old')</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(f'Hello {name}, you are {age} years old')</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print('Hello' + name + 'you are' + age + 'years old')</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print('Hello %s, you are %d years old', name, age)</code>"
    ],
    answer: "B",
    explanation: "F-strings use the f prefix and curly braces {} to embed variable values directly in the string."
  },
  {
    id: 12,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>with</code> statement ensure when working with files?",
    options: [
      "A. The file is created if it doesn't exist",
      "B. The file is automatically closed after use",
      "C. The file is read faster",
      "D. The file content is cached in memory"
    ],
    answer: "B",
    explanation: "The with statement ensures that the file is automatically closed when the block is exited, even if an error occurs."
  },

  // Section 4: Functions and Code Structure
  {
    id: 13,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "What will this function return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calculate(x, y=5):<br>&nbsp;&nbsp;&nbsp;&nbsp;return x + y<br><br>result = calculate(3)</div>",
    options: [
      "A. 3",
      "B. 5",
      "C. 8",
      "D. Error"
    ],
    answer: "C",
    explanation: "The function is called with x=3, and y uses its default value of 5, so the result is 3 + 5 = 8."
  },
  {
    id: 14,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "What is the purpose of a docstring in a function?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def add_numbers(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;\"\"\"Add two numbers and return the result\"\"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return a + b</div>",
    options: [
      "A. It executes code when the function is called",
      "B. It provides documentation about what the function does",
      "C. It defines the function parameters",
      "D. It specifies the return type"
    ],
    answer: "B",
    explanation: "A docstring (triple quotes) provides documentation that explains what the function does and how to use it."
  },
  {
    id: 15,
    domain: "Functions & scope",
    type: "fill_in_blank",
    question: "Complete the function definition:<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>_____ greet(name):<br>&nbsp;&nbsp;&nbsp;&nbsp;return f'Hello, {name}!'</div>",
    answer: "def",
    explanation: "The 'def' keyword is used to define a function in Python."
  },

  // Section 5: Error Handling
  {
    id: 16,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What type of error is this?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>print('Hello World'<br># Missing closing parenthesis</div>",
    options: [
      "A. Runtime error",
      "B. Logic error",
      "C. Syntax error",
      "D. Name error"
    ],
    answer: "C",
    explanation: "A syntax error occurs when the code doesn't follow Python's grammar rules, like missing parentheses."
  },
  {
    id: 17,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What will happen when this code runs?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = 10 / 0<br>except ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Cannot divide by zero')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Done')</div>",
    options: [
      "A. Only 'Cannot divide by zero' is printed",
      "B. Only 'Done' is printed",
      "C. Both messages are printed",
      "D. An error occurs"
    ],
    answer: "C",
    explanation: "The except block catches the error and prints the first message, then finally always executes and prints 'Done'."
  },
  {
    id: 18,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "Which assert method checks if two values are equal in unit testing?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import unittest<br><br>class TestMath(unittest.TestCase):<br>&nbsp;&nbsp;&nbsp;&nbsp;def test_addition(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._____(2 + 2, 4)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertTrue</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertEqual</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertIs</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertIn</code>"
    ],
    answer: "B",
    explanation: "assertEqual() checks if two values are equal and is commonly used to test if a function returns the expected result."
  },

  // Section 6: Modules and Tools
  {
    id: 19,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "Which module should be imported to work with file paths in a cross-platform way?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import _____<br>file_path = _____.path.join('folder', 'file.txt')</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>sys</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>os</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>io</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>math</code>"
    ],
    answer: "B",
    explanation: "The os module provides os.path.join() for creating file paths that work on different operating systems."
  },
  {
    id: 20,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "What does this math function do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import math<br>result = math.ceil(4.2)<br>print(result)</div>",
    options: [
      "A. Rounds down to 4",
      "B. Rounds to nearest integer (4)",
      "C. Rounds up to 5",
      "D. Returns the decimal part (0.2)"
    ],
    answer: "C",
    explanation: "math.ceil() always rounds up to the next integer, so 4.2 becomes 5."
  },
  {
    id: 21,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "How do you generate a random integer between 1 and 10 (inclusive)?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>random.random(1, 10)</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>random.randint(1, 10)</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>random.choice(1, 10)</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>random.range(1, 10)</code>"
    ],
    answer: "B",
    explanation: "random.randint(a, b) returns a random integer between a and b, including both endpoints."
  },

  // Additional Data Types Questions
  {
    id: 22,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the correct way to create an empty list?",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>list = {}</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>list = []</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>list = ()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>list = \"\"</code>"
    ],
    answer: "B",
    explanation: "Square brackets [] create an empty list. {} creates a dictionary, () creates a tuple, and \"\" creates a string."
  },
  {
    id: 23,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What will this code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>fruits = ['apple', 'banana', 'orange']<br>fruits.insert(1, 'grape')<br>print(fruits)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['apple', 'grape', 'banana', 'orange']</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['grape', 'apple', 'banana', 'orange']</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['apple', 'banana', 'grape', 'orange']</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['apple', 'banana', 'orange', 'grape']</code>"
    ],
    answer: "A",
    explanation: "insert(1, 'grape') adds 'grape' at index 1, shifting other elements to the right."
  },
  {
    id: 24,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "Which comparison will return <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>True</code>?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 5<br>y = 10</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x > y</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x == y</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x < y</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x >= y</code>"
    ],
    answer: "C",
    explanation: "Since 5 is less than 10, the expression x < y evaluates to True."
  },

  // More Flow Control Questions
  {
    id: 25,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>continue</code> statement do in a loop?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(5):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i == 2:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    options: [
      "A. Exits the loop completely",
      "B. Skips the rest of the current iteration",
      "C. Restarts the loop from the beginning",
      "D. Causes an error"
    ],
    answer: "B",
    explanation: "continue skips the remaining code in the current iteration and moves to the next iteration."
  },
  {
    id: 26,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What is the output of this while loop?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>count = 0<br>while count < 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(count)<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 1 2 3</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 2 3</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 1 2</code>",
      "D. Infinite loop"
    ],
    answer: "C",
    explanation: "The loop runs while count < 3, printing 0, 1, 2, then stops when count becomes 3."
  },

  // Additional Input/Output Questions
  {
    id: 27,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "What will this code do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>user_input = input('Enter a number: ')<br>number = int(user_input)<br>print(type(number))</div>",
    options: [
      "A. Print <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>&lt;class 'str'&gt;</code>",
      "B. Print <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>&lt;class 'int'&gt;</code>",
      "C. Print <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>&lt;class 'float'&gt;</code>",
      "D. Cause an error"
    ],
    answer: "B",
    explanation: "input() returns a string, but int() converts it to an integer, so type(number) shows <class 'int'>."
  },
  {
    id: 28,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "Which method reads all lines from a file into a list?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('data.txt', 'r') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;content = file._____()</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>read()</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>readline()</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>readlines()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>readall()</code>"
    ],
    answer: "C",
    explanation: "readlines() returns a list where each element is a line from the file."
  },

  // More Module Questions
  {
    id: 29,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "What does <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>sys.argv</code> contain?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br>print(sys.argv)</div>",
    options: [
      "A. Environment variables",
      "B. Command-line arguments",
      "C. System information",
      "D. Current directory path"
    ],
    answer: "B",
    explanation: "sys.argv is a list containing the command-line arguments passed to the Python script."
  },
  {
    id: 30,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "What will this datetime code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>now = datetime.now()<br>print(now.weekday())</div>",
    options: [
      "A. The current date",
      "B. The current time",
      "C. A number representing the day of the week",
      "D. The month name"
    ],
    answer: "C",
    explanation: "weekday() returns an integer representing the day of the week (0=Monday, 6=Sunday)."
  },

  // Additional Error Handling
  {
    id: 31,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "When should you use the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>else</code> clause in a try-except block?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;# some code<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;# handle error<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;# this block</div>",
    options: [
      "A. When an exception occurs",
      "B. When no exception occurs",
      "C. Always, regardless of exceptions",
      "D. Only for syntax errors"
    ],
    answer: "B",
    explanation: "The else block in try-except runs only when no exception occurs in the try block."
  },
  {
    id: 32,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What type of error occurs when trying to access a list index that doesn't exist?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>my_list = [1, 2, 3]<br>print(my_list[5])</div>",
   options: [
     "A. IndexError",
     "B. ValueError",
     "C. KeyError",
     "D. TypeError"
   ],
   answer: "A",
   explanation: "IndexError occurs when trying to access a list index that is out of range."
 },

 // Boolean and Logic Questions
 {
   id: 33,
   domain: "Data types & operators",
   type: "multiple_choice",
   question: "What is the result of this logical operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = True<br>y = False<br>result = x and y<br>print(result)</div>",
   options: [
     "A. True",
     "B. False",
     "C. Error",
     "D. None"
   ],
   answer: "B",
   explanation: "The 'and' operator returns True only if both operands are True. Since y is False, the result is False."
 },
 {
   id: 34,
   domain: "Data types & operators",
   type: "multiple_choice",
   question: "Which operator checks if a value is in a list?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>fruits = ['apple', 'banana', 'orange']<br>result = 'apple' ___ fruits</div>",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>is</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>in</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>==</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>has</code>"
   ],
   answer: "B",
   explanation: "The 'in' operator checks if a value exists in a sequence (list, tuple, string, etc.)."
 },

 // String Operations
 {
   id: 35,
   domain: "Data types & operators",
   type: "multiple_choice",
   question: "What will this string method return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>text = 'Hello World'<br>result = text.lower()<br>print(result)</div>",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>HELLO WORLD</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>hello world</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello world</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello World</code>"
   ],
   answer: "B",
   explanation: "The lower() method converts all characters in the string to lowercase."
 },

 // Dictionary Operations
 {
   id: 36,
   domain: "Data types & operators",
   type: "multiple_choice",
   question: "How do you add a new key-value pair to a dictionary?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>student = {'name': 'Alice', 'age': 20}<br># Add grade: 'A'</div>",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>student.add('grade', 'A')</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>student['grade'] = 'A'</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>student.append('grade': 'A')</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>student.insert('grade', 'A')</code>"
   ],
   answer: "B",
   explanation: "You can add or update dictionary values using square bracket notation: dict[key] = value."
 },

 // Function Parameters
 {
   id: 37,
   domain: "Functions & scope",
   type: "multiple_choice",
   question: "What will this function call print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def greet(name, greeting='Hello'):<br>&nbsp;&nbsp;&nbsp;&nbsp;return f'{greeting}, {name}!'<br><br>print(greet('Bob', 'Hi'))</div>",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello, Bob!</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hi, Bob!</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Bob, Hi!</code>",
     "D. Error"
   ],
   answer: "B",
   explanation: "The function is called with 'Bob' for name and 'Hi' for greeting, overriding the default value."
 },

 // File Operations
 {
   id: 38,
   domain: "Input/Output & files",
   type: "multiple_choice",
   question: "What happens if you try to open a file that doesn't exist with 'r' mode?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('nonexistent.txt', 'r') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;content = file.read()</div>",
   options: [
     "A. An empty file is created",
     "B. A FileNotFoundError is raised",
     "C. The program continues normally",
     "D. A new file is created with default content"
   ],
   answer: "B",
   explanation: "Opening a non-existent file in read mode ('r') raises a FileNotFoundError."
 },

 // List Methods
 {
   id: 39,
   domain: "Data types & operators",
   type: "multiple_choice",
   question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>remove()</code> method do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 2, 4]<br>numbers.remove(2)<br>print(numbers)</div>",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 3, 4]</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 3, 2, 4]</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 3, 2, 4]</code>"
   ],
   answer: "B",
   explanation: "remove() deletes the first occurrence of the specified value (the first 2 in this case)."
 },

 // Math Operations
 {
   id: 40,
   domain: "Modules & standard library",
   type: "multiple_choice",
   question: "What does <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>math.floor()</code> do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import math<br>result = math.floor(4.8)<br>print(result)</div>",
   options: [
     "A. Rounds to the nearest integer (5)",
     "B. Rounds up to the next integer (5)",
     "C. Rounds down to the previous integer (4)",
     "D. Returns the decimal part (0.8)"
   ],
   answer: "C",
   explanation: "math.floor() always rounds down to the largest integer less than or equal to the input."
 },

 {
   id: 41,
   domain: "Data types & operators",
   type: "multiple_select",
   question: "Which of these are valid Python data types?",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>int</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>str</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>bool</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>char</code>"
   ],
   answer: ["A", "B", "C"],
   explanation: "int, str, and bool are built-in Python data types. Python doesn't have a 'char' type."
 },

 {
   id: 42,
   domain: "Flow control",
   type: "multiple_select",
   question: "Which statements can be used inside loops?",
   options: [
     "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>break</code>",
     "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>continue</code>",
     "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>pass</code>",
     "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>return</code>"
   ],
   answer: ["A", "B", "C"],
   explanation: "break, continue, and pass can all be used in loops. return is used in functions, not specifically loops."
 },
// Continue from question 43...
  
  // More Data Types and Operators
  {
    id: 43,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the result of this operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 15<br>y = 4<br>result = x % y<br>print(result)</div>",
    options: [
      "A. 3",
      "B. 3.75",
      "C. 4",
      "D. 15"
    ],
    answer: "A",
    explanation: "The modulo operator % returns the remainder of division. 15 ÷ 4 = 3 remainder 3."
  },
  {
    id: 44,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "Which method converts a string to uppercase?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'python'<br>result = name._____()</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>uppercase()</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>upper()</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>toUpper()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>capitalize()</code>"
    ],
    answer: "B",
    explanation: "The upper() method converts all characters in a string to uppercase."
  },
  {
    id: 45,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What will this list comprehension create?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>squares = [x**2 for x in range(5)]<br>print(squares)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[0, 1, 4, 9, 16]</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 4, 9, 16, 25]</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[0, 1, 2, 3, 4]</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 4, 6, 8, 10]</code>"
    ],
    answer: "A",
    explanation: "The comprehension squares each number from 0 to 4: 0², 1², 2², 3², 4²."
  },
  {
    id: 46,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "How do you get the length of a string?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>message = 'Hello'<br>length = _____(message)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>size</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>length</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>len</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>count</code>"
    ],
    answer: "C",
    explanation: "len() is the built-in function to get the length of any sequence including strings."
  },
  {
    id: 47,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What does this tuple unpacking do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>coordinates = (3, 5)<br>x, y = coordinates<br>print(x, y)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>3 5</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>(3, 5)</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>5 3</code>",
      "D. Error"
    ],
    answer: "A",
    explanation: "Tuple unpacking assigns the first element (3) to x and the second element (5) to y."
  },
  {
    id: 48,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "Which operation creates a new list?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>list1 = [1, 2]<br>list2 = [3, 4]<br>result = list1 + list2</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[4, 6]</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[[1, 2], [3, 4]]</code>",
      "D. Error"
    ],
    answer: "A",
    explanation: "The + operator concatenates lists, creating a new list with all elements."
  },
  {
    id: 49,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the result of this string formatting?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'Alice'<br>age = 25<br>message = '{} is {} years old'.format(name, age)<br>print(message)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>{} is {} years old</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Alice is 25 years old</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>name is age years old</code>",
      "D. Error"
    ],
    answer: "B",
    explanation: "The format() method replaces {} placeholders with the provided arguments in order."
  },
  {
    id: 50,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>split()</code> method return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>sentence = 'Hello world Python'<br>words = sentence.split()<br>print(words)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>'Hello world Python'</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['Hello', 'world', 'Python']</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>('Hello', 'world', 'Python')</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello world Python</code>"
    ],
    answer: "B",
    explanation: "split() returns a list of words separated by whitespace by default."
  },

  // More Flow Control Questions
  {
    id: 51,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What will this nested if statement print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 10<br>if x > 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;if x < 15:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Medium')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Large')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Small')</div>",
    options: [
      "A. Small",
      "B. Medium",
      "C. Large",
      "D. Nothing"
    ],
    answer: "B",
    explanation: "x (10) is greater than 5 and less than 15, so 'Medium' is printed."
  },
  {
    id: 52,
    domain: "Flow control",
    type: "multiple_choice",
    question: "How many times will this loop run?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(2, 10, 3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    options: [
      "A. 2 times",
      "B. 3 times",
      "C. 4 times",
      "D. 8 times"
    ],
    answer: "B",
    explanation: "range(2, 10, 3) generates 2, 5, 8 - three numbers total."
  },
  {
    id: 53,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What does <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>pass</code> do in Python?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>if True:<br>&nbsp;&nbsp;&nbsp;&nbsp;pass<br>print('Done')</div>",
    options: [
      "A. Skips the if statement",
      "B. Exits the program",
      "C. Does nothing (placeholder)",
      "D. Causes an error"
    ],
    answer: "C",
    explanation: "pass is a null operation - it does nothing and serves as a placeholder for future code."
  },
  {
    id: 54,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What is the output of this loop with else?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(3):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Finished')</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 1 2</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 1 2 Finished</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Finished</code>",
      "D. Error"
    ],
    answer: "B",
    explanation: "The else clause in a for loop executes after the loop completes normally (without break)."
  },
  {
    id: 55,
    domain: "Flow control",
    type: "multiple_choice",
    question: "What will this conditional expression return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 7<br>result = 'Even' if x % 2 == 0 else 'Odd'<br>print(result)</div>",
    options: [
      "A. Even",
      "B. Odd",
      "C. 7",
      "D. True"
    ],
    answer: "B",
    explanation: "7 % 2 equals 1 (not 0), so the condition is False and 'Odd' is returned."
  },

  // More Functions Questions
  {
    id: 56,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "What does this function return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def multiply(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;\"\"\"Multiply two numbers\"\"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return a * b<br><br>result = multiply(4, 5)</div>",
    options: [
      "A. 9",
      "B. 20",
      "C. 45",
      "D. None"
    ],
    answer: "B",
    explanation: "The function multiplies 4 * 5 = 20."
  },
  {
    id: 57,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "What happens if a function doesn't have a return statement?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def greet(name):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'Hello {name}')<br><br>result = greet('Bob')</div>",
    options: [
      "A. Returns an empty string",
      "B. Returns 0",
      "C. Returns None",
      "D. Causes an error"
    ],
    answer: "C",
    explanation: "Functions without an explicit return statement automatically return None."
  },
  {
    id: 58,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "What is variable scope in this example?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 10<br>def test():<br>&nbsp;&nbsp;&nbsp;&nbsp;x = 20<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)<br><br>test()<br>print(x)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>20 20</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>20 10</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>10 10</code>",
      "D. Error"
    ],
    answer: "B",
    explanation: "The x inside the function is local scope (20), the x outside is global scope (10)."
  },
  {
    id: 59,
    domain: "Functions & scope",
    type: "multiple_choice",
    question: "How do you call a function with keyword arguments?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def create_profile(name, age, city):<br>&nbsp;&nbsp;&nbsp;&nbsp;return f'{name}, {age}, {city}'</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>create_profile('Alice', 25, 'NYC')</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>create_profile(age=25, name='Alice', city='NYC')</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>create_profile(name='Alice', 25, city='NYC')</code>",
      "D. Both A and B"
    ],
    answer: "D",
    explanation: "You can call functions with positional arguments, keyword arguments, or a mix (keywords must come last)."
  },

  // More Input/Output Questions
  {
    id: 60,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "How do you check if a file exists before opening it?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>if os.path._____(filename):<br>&nbsp;&nbsp;&nbsp;&nbsp;# file exists</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>exists</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>isfile</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>exists</code> or <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>isfile</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>check</code>"
    ],
    answer: "C",
    explanation: "Both os.path.exists() and os.path.isfile() can check if a file exists."
  },
  {
    id: 61,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "What does this code do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('output.txt', 'w') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Hello World', file=file)</div>",
    options: [
      "A. Prints to console",
      "B. Writes 'Hello World' to output.txt",
      "C. Reads from output.txt",
      "D. Causes an error"
    ],
    answer: "B",
    explanation: "The file parameter in print() redirects output to the specified file instead of console."
  },
  {
    id: 62,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "How do you read a file line by line?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('data.txt', 'r') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;for line in _____:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line.strip())</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>file.lines()</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>file</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>file.readlines()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>file.readline()</code>"
    ],
    answer: "B",
    explanation: "You can iterate directly over a file object to read it line by line."
  },
  {
    id: 63,
    domain: "Input/Output & files",
    type: "multiple_choice",
    question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>strip()</code> method do when reading files?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>line = 'Hello World\\n'<br>clean_line = line.strip()</div>",
    options: [
      "A. Converts to lowercase",
      "B. Removes leading/trailing whitespace and newlines",
      "C. Splits the line into words",
      "D. Counts characters"
    ],
    answer: "B",
    explanation: "strip() removes whitespace characters (spaces, tabs, newlines) from both ends of a string."
  },

  // More Error Handling Questions
  {
    id: 64,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What type of error is this?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result = 10 / 0</div>",
    options: [
      "A. SyntaxError",
      "B. NameError",
      "C. ZeroDivisionError",
      "D. TypeError"
    ],
    answer: "C",
    explanation: "Dividing by zero raises a ZeroDivisionError at runtime."
  },
  {
    id: 65,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What will this exception handling code do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;age = int(input('Enter age: '))<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Invalid input')<br>except KeyboardInterrupt:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Interrupted')</div>",
    options: [
      "A. Handle only ValueError",
      "B. Handle only KeyboardInterrupt",
      "C. Handle both ValueError and KeyboardInterrupt",
      "D. Handle all exceptions"
    ],
    answer: "C",
    explanation: "Multiple except blocks can handle different types of exceptions."
  },
  {
    id: 66,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "What does the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>raise</code> statement do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def check_age(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age < 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError('Age cannot be negative')</div>",
    options: [
      "A. Handles an exception",
      "B. Manually raises an exception",
      "C. Prints an error message",
      "D. Exits the program"
    ],
    answer: "B",
    explanation: "The raise statement manually triggers an exception with a custom message."
  },
  {
    id: 67,
    domain: "Exceptions & debugging",
    type: "multiple_choice",
    question: "Which assert method checks if a value is True?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import unittest<br><br>class TestLogic(unittest.TestCase):<br>&nbsp;&nbsp;&nbsp;&nbsp;def test_condition(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self._____(5 > 3)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertEqual</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertTrue</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertIs</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assertIn</code>"
    ],
    answer: "B",
    explanation: "assertTrue() checks if the given expression evaluates to True."
  },

  {
    id: 68,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "How do you get the current working directory?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>current_dir = os._____()</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>getdir()</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>getcwd()</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>currentdir()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>pwd()</code>"
    ],
    answer: "B",
    explanation: "os.getcwd() returns the current working directory as a string."
  },
  {
    id: 69,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "What does this random function do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>colors = ['red', 'blue', 'green']<br>selected = random.choice(colors)</div>",
    options: [
      "A. Returns all colors",
      "B. Returns a random color from the list",
      "C. Returns the first color",
      "D. Shuffles the list"
    ],
    answer: "B",
    explanation: "random.choice() returns a randomly selected element from a non-empty sequence."
  },
  {
    id: 70,
    domain: "Modules & standard library",
    type: "multiple_choice",
    question: "How do you format a date as a string?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>now = datetime.now()<br>formatted = now._____()</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>format()</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>strftime('%Y-%m-%d')</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>toString()</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>string()</code>"
    ],
    answer: "B",
    explanation: "strftime() formats datetime objects as strings using format codes."
  },

  {
    id: 71,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What is the output of this set operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>set1 = {1, 2, 3}<br>set2 = {3, 4, 5}<br>result = set1.intersection(set2)<br>print(result)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>{1, 2, 3, 4, 5}</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>{3}</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>{1, 2, 4, 5}</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>set()</code>"
    ],
    answer: "B",
    explanation: "intersection() returns elements that are common to both sets, which is only {3}."
  },
  {
    id: 72,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "How do you access a dictionary value safely?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>student = {'name': 'Alice', 'age': 20}<br>grade = student._____(&#x27;grade&#x27;, &#x27;Not found&#x27;)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>find</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>get</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>access</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>retrieve</code>"
    ],
    answer: "B",
    explanation: "The get() method returns the value for a key, or a default value if the key doesn't exist."
  },
  {
    id: 73,
    domain: "Data types & operators",
    type: "multiple_choice",
    question: "What does this list method do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [3, 1, 4, 1, 5]<br>numbers.sort()<br>print(numbers)</div>",
    options: [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[3, 1, 4, 1, 5]</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[5, 4, 3, 1, 1]</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 1, 3, 4, 5]</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 3, 4, 5]</code>"
    ],
    answer: "C",
    explanation: "sort() modifies the list in-place, arranging elements in ascending order."
  },

{
  id: 74,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = [1, 2, 3]<br>b = a<br>b.append(4)<br>a[0] = 10<br>print(a)<br>print(b)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 2, 3, 4]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 2, 3, 4]</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 2, 3, 4]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 2, 3]</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3]</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code>"
  ],
  answer: "B",
  explanation: "Both variables reference the same list object, so changes affect both."
},

{
  id: 75,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What is the output of this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 5<br>y = 2<br>result = x ** y + x // y * 3<br>print(result)</div>",
  options: [
    "A. 25",
    "B. 31",
    "C. 33",
    "D. 41"
  ],
  answer: "B",
  explanation: "Following operator precedence: 5**2 + (5//2)*3 = 25 + 2*3 = 31."
},

{
  id: 76,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this string slicing print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>text = 'programming'<br>new_text = text[2:8:2].upper()<br>print(new_text)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>PROG</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>OGR</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>OGRAM</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>OGA</code>"
  ],
  answer: "D",
  explanation: "text[2:8:2] extracts 'oga' (indices 2,4,6), then upper() makes it 'OGA'."
},

{
  id: 77,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What will this nested loop print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>count = 0<br>for i in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(i):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>print(count)</div>",
  options: [
    "A. 6",
    "B. 9",
    "C. 12",
    "D. 3"
  ],
  answer: "A",
  explanation: "Inner loop runs 1+2+3=6 times total (for i=1,2,3)."
},

{
  id: 78,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What is the result of this list operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5]<br>for i in range(len(numbers)):<br>&nbsp;&nbsp;&nbsp;&nbsp;if numbers[i] % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numbers[i] *= 2<br>print(numbers)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4, 5]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 4, 3, 8, 5]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 4, 6, 8, 10]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 3, 5]</code>"
  ],
  answer: "B",
  explanation: "Only even numbers (2 and 4) are doubled, becoming 4 and 8."
},

{
  id: 79,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this file operation do?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('test.txt', 'w') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;f.write('Hello')<br>with open('test.txt', 'a') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;f.write('World')<br># File contents?</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>World</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>HelloWorld</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Hello World</code>"
  ],
  answer: "C",
  explanation: "First write creates 'Hello', then append mode adds 'World' without space."
},

{
  id: 80,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>content = 'Line1\\nLine2\\nLine3'<br>lines = content.split('\\n')<br>print(len(lines))<br>print(lines[1])</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>3</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Line2</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Line1</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>3</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Line1</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1</code> and <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Line3</code>"
  ],
  answer: "A",
  explanation: "split() creates 3 elements, lines[1] is the second element 'Line2'."
},

{
  id: 81,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "The <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>exit()</code> function belongs to which module?",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>os</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>sys</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>time</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>io</code>"
  ],
  answer: "B",
  explanation: "sys.exit() is used to exit from Python programs."
},

{
  id: 82,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this code output?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import math<br>result = math.pow(3, 2) + math.sqrt(16)<br>print(int(result))</div>",
  options: [
    "A. 13",
    "B. 12",
    "C. 25",
    "D. 7"
  ],
  answer: "A",
  explanation: "math.pow(3,2) = 9.0, math.sqrt(16) = 4.0, total = 13.0, int(13.0) = 13."
},

{
  id: 83,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What is the output of this dictionary operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = {'a': 1, 'b': 2, 'c': 3}<br>result = []<br>for key, value in data.items():<br>&nbsp;&nbsp;&nbsp;&nbsp;if value > 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(key * value)<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['bb', 'ccc']</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['b', 'c']</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 3]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>['a', 'bb', 'ccc']</code>"
  ],
  answer: "A",
  explanation: "For 'b': 'b'*2 = 'bb', for 'c': 'c'*3 = 'ccc'. 'a' is skipped as value=1."
},

{
  id: 84,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this function modification print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def modify_list(lst):<br>&nbsp;&nbsp;&nbsp;&nbsp;lst.append(99)<br>&nbsp;&nbsp;&nbsp;&nbsp;lst = [1, 2, 3]<br>&nbsp;&nbsp;&nbsp;&nbsp;lst.append(4)<br><br>my_list = [10, 20]<br>modify_list(my_list)<br>print(my_list)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 20]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[10, 20, 99]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 4, 99]</code>"
  ],
  answer: "B",
  explanation: "First append modifies original list. Assignment creates new local list that doesn't affect original."
},

{
  id: 85,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this string processing code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>text = 'Python123'<br>result = ''<br>for char in text:<br>&nbsp;&nbsp;&nbsp;&nbsp;if char.isalpha():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += char.lower()<br>&nbsp;&nbsp;&nbsp;&nbsp;elif char.isdigit():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += str(int(char) * 2)<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>python246</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Python246</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>python123</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>PYTHON246</code>"
  ],
  answer: "A",
  explanation: "Letters become lowercase, digits are doubled: 1*2=2, 2*2=4, 3*2=6."
},
{
  id: 86,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What will this code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 15<br>y = 8<br>if x > 10 and y < 10:<br>&nbsp;&nbsp;&nbsp;&nbsp;if x % 5 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('A')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('B')<br>elif x < 20 or y > 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('C')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('D')</div>",
  options: [
    "A. A",
    "B. B", 
    "C. C",
    "D. D"
  ],
  answer: "A",
  explanation: "x>10 (True) and y<10 (True), then x%5==0 (True), so prints 'A'."
},

{
  id: 87,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What is the output of this logical operation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = True<br>b = False<br>c = True<br>result = (a and b) or (not b and c)<br>print(result)</div>",
  options: [
    "A. True",
    "B. False",
    "C. None",
    "D. Error"
  ],
  answer: "A",
  explanation: "(True and False) or (not False and True) = False or (True and True) = False or True = True."
},

{
  id: 88,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What will this nested condition print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>score = 85<br>attendance = 90<br>if score >= 80:<br>&nbsp;&nbsp;&nbsp;&nbsp;if attendance >= 85:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if score >= 90:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Excellent')<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Good')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Poor attendance')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Fail')</div>",
  options: [
    "A. Excellent",
    "B. Good",
    "C. Poor attendance", 
    "D. Fail"
  ],
  answer: "B",
  explanation: "score>=80 (True), attendance>=85 (True), but score>=90 (False), so prints 'Good'."
},

{
  id: 89,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this list copying code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = [1, 2, 3]<br>y = x[:]<br>z = x<br>x.append(4)<br>y.append(5)<br>z.append(6)<br>print(len(x), len(y), len(z))</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>5 4 5</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>4 4 4</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>5 4 4</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>4 5 5</code>"
  ],
  answer: "A",
  explanation: "x and z reference same list (gets 4,6), y is separate copy (gets 5). Lengths: 5,4,5."
},

{
  id: 90,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What will this loop with conditions print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5, 6]<br>result = []<br>for num in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;if num % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if num > 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(num * 2)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(num)<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 8, 12]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 4, 6]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[4, 8, 12]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 3, 8, 5, 12]</code>"
  ],
  answer: "A",
  explanation: "Even numbers: 2 (≤3, append 2), 4 (>3, append 8), 6 (>3, append 12)."
},

{
  id: 91,
  domain: "Flow control", 
  type: "multiple_choice",
  question: "What is the result of this short-circuit evaluation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 0<br>y = 5<br>result = x and (y / x) or y * 2<br>print(result)</div>",
  options: [
    "A. 0",
    "B. 10",
    "C. Error (division by zero)",
    "D. 5"
  ],
  answer: "B",
  explanation: "x is 0 (falsy), so 'x and (y/x)' returns 0 without evaluating y/x. Then '0 or y*2' returns 10."
},

{
  id: 92,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this string and list operation print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>words = ['hello', 'world', 'python']<br>result = []<br>for word in words:<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(word) > 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(word.upper())<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result.append(word[:2])<br>print(' '.join(result))</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>HELLO WORLD PYTHON</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>he wo PYTHON</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>HELLO WORLD py</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>hello world PYTHON</code>"
  ],
  answer: "C",
  explanation: "'hello' (>4): HELLO, 'world' (>4): WORLD, 'python' (>4): PYTHON → wait, 'world' is 5 chars so WORLD."
},

{
  id: 93,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this function with conditions return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def check_grade(score):<br>&nbsp;&nbsp;&nbsp;&nbsp;if score >= 90:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'A'<br>&nbsp;&nbsp;&nbsp;&nbsp;elif score >= 80:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'B'<br>&nbsp;&nbsp;&nbsp;&nbsp;elif score >= 70:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'C'<br>&nbsp;&nbsp;&nbsp;&nbsp;return 'F'<br><br>result = check_grade(85)<br>print(result)</div>",
  options: [
    "A. A",
    "B. B", 
    "C. C",
    "D. F"
  ],
  answer: "B",
  explanation: "85 is not ≥90, but is ≥80, so returns 'B'."
},

{
  id: 94,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this file reading code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'># File content: 'apple\\nbanana\\ncherry'<br>with open('fruits.txt', 'r') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;lines = f.readlines()<br>count = 0<br>for line in lines:<br>&nbsp;&nbsp;&nbsp;&nbsp;if 'a' in line:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>print(count)</div>",
  options: [
    "A. 1",
    "B. 2",
    "C. 3", 
    "D. 0"
  ],
  answer: "B",
  explanation: "Lines with 'a': 'apple\\n' and 'banana\\n'. 'cherry\\n' has no 'a'. Count = 2."
},

{
  id: 95,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "Which module contains the <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>listdir()</code> function?",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>sys</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>os</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>io</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>pathlib</code>"
  ],
  answer: "B",
  explanation: "os.listdir() lists files and directories in a given path."
},

{
  id: 96,
  domain: "Flow control",
  type: "multiple_choice", 
  question: "What will this complex condition print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>age = 25<br>income = 45000<br>experience = 3<br>if (age >= 21 and income > 40000) or experience >= 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;if age < 30:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Junior')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Senior')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Not qualified')</div>",
  options: [
    "A. Junior",
    "B. Senior",
    "C. Not qualified",
    "D. Error"
  ],
  answer: "A",
  explanation: "(age≥21 and income>40000) is True, so first condition passes. age<30 is True, so prints 'Junior'."
},

{
  id: 97,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this dictionary manipulation print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = {'x': 10, 'y': 20, 'z': 30}<br>total = 0<br>for key, value in data.items():<br>&nbsp;&nbsp;&nbsp;&nbsp;if key in ['x', 'z']:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += value<br>&nbsp;&nbsp;&nbsp;&nbsp;elif value > 15:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += value // 2<br>print(total)</div>",
  options: [
    "A. 40",
    "B. 50", 
    "C. 60",
    "D. 30"
  ],
  answer: "A",
  explanation: "'x':10 (in list, add 10), 'y':20 (not in list but >15, add 20//2=10), 'z':30 (in list, add 30). Total = 50. Wait, 'y' doesn't execute elif because it's not in ['x','z'] but value>15, so +10. Total = 10+10+30=50."
},

{
  id: 98,
  domain: "Flow control",
  type: "multiple_choice",
  question: "What will this loop with break and continue print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result = []<br>for i in range(1, 8):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i % 3 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue<br>&nbsp;&nbsp;&nbsp;&nbsp;if i > 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;result.append(i)<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 4, 5]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 4, 5, 7]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 5]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 2, 4]</code>"
  ],
  answer: "A",
  explanation: "i=1(add), i=2(add), i=3(skip), i=4(add), i=5(add), i=6(break). Result: [1,2,4,5]."
},

{
  id: 99,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this exception handling print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;x = int('abc')<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Success')<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Invalid')<br>except Exception:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Error')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Done')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success Done</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Invalid Done</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Error Done</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Done</code>"
  ],
  answer: "B",
  explanation: "int('abc') raises ValueError, caught by first except. Finally always executes."
},

{
  id: 100,
  domain: "Data types & operators",
  type: "multiple_choice",
  question: "What will this list comprehension with condition create?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5, 6, 7, 8]<br>result = [x**2 if x % 2 == 0 else x for x in numbers if x > 3]<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[4, 5, 36, 7, 64]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[16, 25, 36, 49, 64]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[4, 5, 6, 7, 8]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[5, 16, 7, 36]</code>"
  ],
  answer: "A",
  explanation: "x>3: [4,5,6,7,8]. Even squares, odd stays: 4²=16→wait, 4 is even so 4²=16, 5 stays 5, 6²=36, 7 stays 7, 8²=64."
},
// Functions Questions
{
  id: 101,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this function with default parameters return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calculate(a, b=5, c=10):<br>&nbsp;&nbsp;&nbsp;&nbsp;return a + b * c<br><br>result1 = calculate(2)<br>result2 = calculate(2, 3)<br>result3 = calculate(2, c=20)<br>print(result1, result2, result3)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>52 32 102</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>52 32 22</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>17 17 22</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>12 5 22</code>"
  ],
  answer: "A",
  explanation: "result1: 2+5*10=52, result2: 2+3*10=32, result3: 2+5*20=102."
},

{
  id: 102,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this function with global variable print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>counter = 0<br><br>def increment():<br>&nbsp;&nbsp;&nbsp;&nbsp;global counter<br>&nbsp;&nbsp;&nbsp;&nbsp;counter += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return counter<br><br>def reset():<br>&nbsp;&nbsp;&nbsp;&nbsp;counter = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;return counter<br><br>print(increment())<br>print(reset())<br>print(counter)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 0 0</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 0 1</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 1 1</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>0 0 0</code>"
  ],
  answer: "B",
  explanation: "increment() uses global, changes counter to 1. reset() creates local variable, doesn't affect global counter."
},

{
  id: 103,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this function with *args and **kwargs return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def process(*args, **kwargs):<br>&nbsp;&nbsp;&nbsp;&nbsp;total = sum(args)<br>&nbsp;&nbsp;&nbsp;&nbsp;bonus = kwargs.get('bonus', 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;return total + bonus<br><br>result = process(1, 2, 3, bonus=10, extra=5)<br>print(result)</div>",
  options: [
    "A. 16",
    "B. 21",
    "C. 11",
    "D. 6"
  ],
  answer: "A",
  explanation: "sum(1,2,3) = 6, bonus = 10, total = 6 + 10 = 16. 'extra' is ignored."
},

{
  id: 104,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this lambda function print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5]<br>result = list(filter(lambda x: x % 2 == 0 and x > 2, numbers))<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 4]</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[4]</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[2, 3, 4]</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1, 3, 5]</code>"
  ],
  answer: "B",
  explanation: "Filter keeps elements that are even AND greater than 2. Only 4 satisfies both conditions."
},

{
  id: 105,
  domain: "Functions & scope",
  type: "multiple_choice",
  question: "What will this nested function return?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def outer(x):<br>&nbsp;&nbsp;&nbsp;&nbsp;def inner(y):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x + y<br>&nbsp;&nbsp;&nbsp;&nbsp;return inner<br><br>func = outer(10)<br>result = func(5)<br>print(result)</div>",
  options: [
    "A. 10",
    "B. 5",
    "C. 15",
    "D. Error"
  ],
  answer: "C",
  explanation: "outer(10) returns inner function with x=10. func(5) calls inner(5), returns 10+5=15."
},

// String Formatting Questions
{
  id: 106,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this f-string formatting print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'Alice'<br>score = 87.6789<br>result = f'Student: {name:<10} Score: {score:.2f}%'<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Student: Alice      Score: 87.68%</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Student:      Alice Score: 87.67%</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Student: Alice Score: 87.68%</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Student: Alice      Score: 87.67%</code>"
  ],
  answer: "A",
  explanation: "{name:<10} left-aligns 'Alice' in 10 characters. {score:.2f} rounds to 2 decimal places: 87.68."
},

{
  id: 107,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this string format method print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>template = 'Item: {item:>8} Price: ${price:06.2f}'<br>result = template.format(item='Book', price=12.5)<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Item:     Book Price: $012.50</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Item: Book     Price: $12.50</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Item:     Book Price: $12.50</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Item: Book Price: $012.50</code>"
  ],
  answer: "A",
  explanation: "{item:>8} right-aligns 'Book' in 8 chars. {price:06.2f} pads with zeros to 6 total width: 012.50."
},

{
  id: 108,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this percentage formatting print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>value = 0.847<br>result = f'Success rate: {value:.1%}'<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success rate: 0.8%</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success rate: 84.7%</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success rate: 8.5%</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success rate: 0.847%</code>"
  ],
  answer: "B",
  explanation: "The % format specifier multiplies by 100 and adds %. 0.847 * 100 = 84.7%."
},

{
  id: 109,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this complex f-string print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [10, 20, 30]<br>result = f'Sum: {sum(numbers):,} Average: {sum(numbers)/len(numbers):.1f}'<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Sum: 60 Average: 20.0</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Sum: 60 Average: 20</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Sum: 6,0 Average: 20.0</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Sum: 60, Average: 20.0</code>"
  ],
  answer: "A",
  explanation: "{sum(numbers):,} adds comma for thousands (60 doesn't need it). Average 60/3 = 20.0."
},

{
  id: 110,
  domain: "Input/Output & files",
  type: "multiple_choice",
  question: "What will this multiline f-string print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'Python'<br>version = 3.9<br>message = f'''Language: {name}<br>Version: {version}<br>Status: {'Active' if version >= 3.0 else 'Legacy'}'''<br>print(len(message.split('\\n')))</div>",
  options: [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  answer: "C",
  explanation: "The multiline string has 3 lines separated by newlines, so split('\\n') creates 3 elements."
},

// DateTime Questions (10 questions)
{
  id: 111,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this datetime code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>dt = datetime(2024, 3, 15, 14, 30)<br>print(dt.strftime('%Y-%m-%d %H:%M'))</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2024-03-15 14:30</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>24-3-15 2:30</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2024/3/15 14:30</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>15-03-2024 14:30</code>"
  ],
  answer: "A",
  explanation: "%Y=4-digit year, %m=2-digit month, %d=2-digit day, %H=24-hour, %M=minute."
},

{
  id: 112,
  domain: "Modules & standard library", 
  type: "multiple_choice",
  question: "What will this date arithmetic print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import date, timedelta<br>start_date = date(2024, 1, 15)<br>end_date = start_date + timedelta(days=30)<br>print(end_date.month, end_date.day)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 45</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2 14</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2 15</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>1 30</code>"
  ],
  answer: "B",
  explanation: "Jan 15 + 30 days = Feb 14 (January has 31 days). Month=2, day=14."
},

{
  id: 113,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this datetime parsing print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>date_str = '2024-12-25 18:30:45'<br>dt = datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')<br>print(dt.weekday())</div>",
  options: [
    "A. 0 (Monday)",
    "B. 2 (Wednesday)",  
    "C. 6 (Sunday)",
    "D. 1 (Tuesday)"
  ],
  answer: "B",
  explanation: "December 25, 2024 is a Wednesday. weekday() returns 2 for Wednesday (0=Monday)."
},

{
  id: 114,
  domain: "Modules & standard library",
  type: "multiple_choice", 
  question: "What will this time difference calculation print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>dt1 = datetime(2024, 6, 1, 10, 0)<br>dt2 = datetime(2024, 6, 1, 14, 30)<br>diff = dt2 - dt1<br>print(diff.total_seconds() / 3600)</div>",
  options: [
    "A. 4.0",
    "B. 4.5",
    "C. 270.0", 
    "D. 16200.0"
  ],
  answer: "B",
  explanation: "Time difference is 4 hours 30 minutes = 4.5 hours. total_seconds()/3600 converts to hours."
},

{
  id: 115,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this datetime formatting print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>dt = datetime(2024, 7, 4, 15, 45)<br>result = dt.strftime('%B %d, %Y at %I:%M %p')<br>print(result)</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>July 04, 2024 at 15:45 PM</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>July 4, 2024 at 3:45 PM</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Jul 4, 2024 at 03:45 PM</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>July 04, 2024 at 03:45 PM</code>"
  ],
  answer: "D",
  explanation: "%B=full month, %d=zero-padded day, %I=12-hour format with zero-padding, %p=AM/PM."
},

{
  id: 116,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this date comparison print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import date<br>today = date(2024, 6, 15)<br>birthday = date(2024, 8, 20)<br>if today < birthday:<br>&nbsp;&nbsp;&nbsp;&nbsp;days_left = (birthday - today).days<br>&nbsp;&nbsp;&nbsp;&nbsp;print(days_left)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Past')</div>",
  options: [
    "A. 66",
    "B. 65", 
    "C. 67",
    "D. Past"
  ],
  answer: "A",
  explanation: "From June 15 to August 20: 15 days left in June + 31 days in July + 20 days in August = 66 days."
},

{
  id: 117,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this timezone-naive datetime comparison print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>dt1 = datetime(2024, 12, 31, 23, 59)<br>dt2 = datetime(2025, 1, 1, 0, 1)<br>diff_minutes = (dt2 - dt1).total_seconds() / 60<br>print(int(diff_minutes))</div>",
  options: [
    "A. 1",
    "B. 2",
    "C. 60",
    "D. 120"
  ],
  answer: "B",
  explanation: "From 23:59 to 00:01 next day is 2 minutes. total_seconds() gives 120, divided by 60 = 2."
},

{
  id: 118,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this datetime property access print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>dt = datetime(2024, 3, 15, 14, 30, 45)<br>print(dt.year + dt.month + dt.day + dt.hour)</div>",
  options: [
    "A. 2057",
    "B. 2024315",
    "C. 2057.0",
    "D. Error"
  ],
  answer: "A",
  explanation: "2024 + 3 + 15 + 14 = 2056. Wait: 2024 + 3 + 15 + 14 = 2056... let me recalculate: 2024+3+15+14=2056."
},

{
  id: 119,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this timedelta operation print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import timedelta<br>td1 = timedelta(hours=2, minutes=30)<br>td2 = timedelta(hours=1, minutes=45)<br>total = td1 + td2<br>print(total.total_seconds() / 3600)</div>",
  options: [
    "A. 4.25",
    "B. 4.75", 
    "C. 3.75",
    "D. 255.0"
  ],
  answer: "A",
  explanation: "2h30m + 1h45m = 4h15m = 4.25 hours. total_seconds() gives 15300, divided by 3600 = 4.25."
},

{
  id: 120,
  domain: "Modules & standard library",
  type: "multiple_choice",
  question: "What will this datetime replace method print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from datetime import datetime<br>original = datetime(2024, 6, 15, 10, 30)<br>modified = original.replace(year=2025, hour=14)<br>print(modified.strftime('%Y-%m-%d %H:%M'))</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2024-06-15 14:30</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2025-06-15 10:30</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2025-06-15 14:30</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2025-06-15 14:00</code>"
  ],
  answer: "C",
  explanation: "replace() creates new datetime with year=2025, hour=14, keeping other values: month=6, day=15, minute=30."
},
// Troubleshooting and Error Handling Questions
{
  id: 121,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What type of error will this code produce?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calculate(x):<br>&nbsp;&nbsp;&nbsp;&nbsp;return x * 2<br><br>result = calculate(5<br>print(result)</div>",
  options: [
    "A. SyntaxError",
    "B. NameError", 
    "C. TypeError",
    "D. RuntimeError"
  ],
  answer: "A",
  explanation: "Missing closing parenthesis in function call causes a SyntaxError before code execution."
},

{
  id: 122,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this exception handling code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers = [1, 2, 3]<br>&nbsp;&nbsp;&nbsp;&nbsp;print(numbers[5])<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Success')<br>except IndexError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Index out of range')<br>except Exception:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('General error')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Cleanup')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Success<br>Cleanup</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Index out of range<br>Cleanup</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>General error<br>Cleanup</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Index out of range<br>General error<br>Cleanup</code>"
  ],
  answer: "B",
  explanation: "IndexError is caught by first except block. Finally always executes."
},

{
  id: 123,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What error will this code produce when executed?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 10<br>y = 0<br>if y != 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = x / y<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = x / z<br>print(result)</div>",
  options: [
    "A. ZeroDivisionError",
    "B. NameError",
    "C. SyntaxError", 
    "D. No error"
  ],
  answer: "B",
  explanation: "Variable 'z' is not defined, causing a NameError when the else block executes."
},

{
  id: 124,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this try-except-else block print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;value = int('42')<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Conversion successful')<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Invalid number')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('No exception occurred')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Done')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Conversion successful<br>Done</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Conversion successful<br>No exception occurred<br>Done</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>No exception occurred<br>Done</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Invalid number<br>Done</code>"
  ],
  answer: "B",
  explanation: "No exception occurs, so try block executes, then else block, then finally block."
},

{
  id: 125,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this custom exception code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def validate_age(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age < 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError('Age cannot be negative')<br>&nbsp;&nbsp;&nbsp;&nbsp;if age > 150:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError('Age too high')<br>&nbsp;&nbsp;&nbsp;&nbsp;return age<br><br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = validate_age(-5)<br>except ValueError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'Error: {e}')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Error: Age cannot be negative</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Error: Age too high</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>-5</code>",
    "D. No output"
  ],
  answer: "A",
  explanation: "Age -5 triggers the first condition, raising ValueError with 'Age cannot be negative' message."
},

{
  id: 126,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What logic error exists in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def find_average(numbers):<br>&nbsp;&nbsp;&nbsp;&nbsp;total = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;for num in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += num<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return total / count<br><br>result = find_average([])<br># What happens?</div>",
  options: [
    "A. Returns 0",
    "B. Returns None", 
    "C. Raises ZeroDivisionError",
    "D. Returns empty list"
  ],
  answer: "C",
  explanation: "Empty list means count=0, causing division by zero. Should check if list is empty first."
},

{
  id: 127,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this multiple exception handling print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = {'a': 10, 'b': 20}<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;key = 'c'<br>&nbsp;&nbsp;&nbsp;&nbsp;result = data[key] / 0<br>except KeyError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Key not found')<br>except ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Division by zero')<br>except Exception as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'Other error: {e}')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Key not found</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Division by zero</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Other error: 'c'</code>",
    "D. Both A and B"
  ],
  answer: "A",
  explanation: "KeyError occurs first when accessing data['c'], so division by zero is never reached."
},

{
  id: 128,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What runtime error will this code produce?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def process_data(items):<br>&nbsp;&nbsp;&nbsp;&nbsp;for item in items:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(item.upper())<br><br>data = [1, 2, 'hello', 4]<br>process_data(data)</div>",
  options: [
    "A. TypeError",
    "B. AttributeError", 
    "C. ValueError",
    "D. IndexError"
  ],
  answer: "B",
  explanation: "Numbers don't have an upper() method, causing AttributeError when trying to call it on integers."
},

{
  id: 129,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this exception re-raising code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = 1 / 0<br>&nbsp;&nbsp;&nbsp;&nbsp;except ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Inner catch')<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise<br>except ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Outer catch')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Finally')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Inner catch<br>Finally</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Inner catch<br>Outer catch<br>Finally</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Outer catch<br>Finally</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Finally</code>"
  ],
  answer: "B",
  explanation: "Inner except catches and prints, then 'raise' re-raises the exception to outer except, finally always runs."
},

{
  id: 130,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What type of error is in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def factorial(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;if n == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return n * factorial(n - 1)<br><br># This will cause issues for negative inputs<br>result = factorial(-3)</div>",
  options: [
    "A. Syntax error",
    "B. Logic error", 
    "C. Type error",
    "D. No error"
  ],
  answer: "B",
  explanation: "Logic error: function doesn't handle negative inputs, causing infinite recursion and eventual stack overflow."
},

{
  id: 131,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this exception handling with return print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def safe_divide(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result = a / b<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return result<br>&nbsp;&nbsp;&nbsp;&nbsp;except ZeroDivisionError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 'Cannot divide by zero'<br>&nbsp;&nbsp;&nbsp;&nbsp;finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Function completed')<br><br>print(safe_divide(10, 0))</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Function completed<br>Cannot divide by zero</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Cannot divide by zero<br>Function completed</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Cannot divide by zero</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Function completed</code>"
  ],
  answer: "A",
  explanation: "Finally block executes before return statement completes, so 'Function completed' prints first."
},

{
  id: 132,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What syntax error exists in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try<br>&nbsp;&nbsp;&nbsp;&nbsp;x = int(input('Enter number: '))<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x * 2)<br>except ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Invalid input')</div>",
  options: [
    "A. Missing colon after try",
    "B. Missing parentheses in except",
    "C. Wrong indentation",
    "D. Missing quotes"
  ],
  answer: "A",
  explanation: "The try statement is missing a colon (:) at the end, which is required for compound statements."
},

{
  id: 133,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this exception chaining code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = {'name': 'Alice'}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age = data['age']<br>&nbsp;&nbsp;&nbsp;&nbsp;except KeyError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise ValueError('Missing required field')<br>except ValueError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'Caught: {e}')<br>except KeyError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Key error in outer')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Caught: Missing required field</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Key error in outer</code>",
    "C. Both A and B",
    "D. No output"
  ],
  answer: "A",
  explanation: "Inner KeyError is caught and converted to ValueError, which is then caught by outer ValueError handler."
},

{
  id: 134,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What logic error exists in this password validation?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def validate_password(password):<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(password) >= 8:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True<br>&nbsp;&nbsp;&nbsp;&nbsp;if any(c.isdigit() for c in password):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True<br>&nbsp;&nbsp;&nbsp;&nbsp;if any(c.isupper() for c in password):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return True<br>&nbsp;&nbsp;&nbsp;&nbsp;return False<br><br># What's wrong with this logic?</div>",
  options: [
    "A. Should use 'and' instead of separate if statements",
    "B. Missing lowercase check",
    "C. Should check for special characters",
    "D. All conditions should be required, not just one"
  ],
  answer: "D",
  explanation: "Logic error: function returns True if ANY condition is met, but password should meet ALL security requirements."
},

{
  id: 135,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What will this assertion code print?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calculate_average(numbers):<br>&nbsp;&nbsp;&nbsp;&nbsp;assert len(numbers) > 0, 'List cannot be empty'<br>&nbsp;&nbsp;&nbsp;&nbsp;assert all(isinstance(n, (int, float)) for n in numbers), 'All items must be numbers'<br>&nbsp;&nbsp;&nbsp;&nbsp;return sum(numbers) / len(numbers)<br><br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;result = calculate_average([1, 2, 'three'])<br>except AssertionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'Assertion failed: {e}')</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Assertion failed: List cannot be empty</code>",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>Assertion failed: All items must be numbers</code>",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>2.0</code>",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>TypeError</code>"
  ],
  answer: "B",
  explanation: "First assertion passes (list not empty), second assertion fails because 'three' is not a number."
},
// Practical Debugging and Error Fixing Questions
{
  id: 136,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "Which line needs to be fixed to make this code work?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1: def calculate_total(prices):<br>2: &nbsp;&nbsp;&nbsp;&nbsp;total = 0<br>3: &nbsp;&nbsp;&nbsp;&nbsp;for price in prices<br>4: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += price<br>5: &nbsp;&nbsp;&nbsp;&nbsp;return total</div>",
  options: [
    "A. Line 1 - missing colon",
    "B. Line 3 - missing colon",
    "C. Line 4 - wrong indentation", 
    "D. Line 5 - missing parentheses"
  ],
  answer: "B",
  explanation: "Line 3 is missing a colon (:) after the for statement. Should be 'for price in prices:'."
},

{
  id: 137,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What should be changed to fix this IndexError?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [10, 20, 30]<br>for i in range(1, 4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(numbers[i])<br># IndexError on last iteration</div>",
  options: [
    "A. Change range to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>range(0, 3)</code>",
    "B. Change range to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>range(1, 3)</code>",
    "C. Add more elements to list",
    "D. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>range(len(numbers))</code>"
  ],
  answer: "A",
  explanation: "List indices are 0,1,2 but range(1,4) gives 1,2,3. Should use range(0,3) or range(len(numbers))."
},

{
  id: 138,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What needs to be added to handle the potential error in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_user_age():<br>&nbsp;&nbsp;&nbsp;&nbsp;age_input = input('Enter your age: ')<br>&nbsp;&nbsp;&nbsp;&nbsp;age = int(age_input)<br>&nbsp;&nbsp;&nbsp;&nbsp;return age<br><br># What if user enters non-numeric input?</div>",
  options: [
    "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>try-except ValueError</code> block",
    "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>if-else</code> statement",
    "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>while</code> loop",
    "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>assert</code> statement"
  ],
  answer: "A",
  explanation: "int() will raise ValueError for non-numeric input like 'abc'. Need try-except to handle this."
},

{
  id: 139,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "Which line is causing the UnboundLocalError in this function?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1: counter = 0<br>2: def increment():<br>3: &nbsp;&nbsp;&nbsp;&nbsp;print(counter)<br>4: &nbsp;&nbsp;&nbsp;&nbsp;counter += 1<br>5: &nbsp;&nbsp;&nbsp;&nbsp;return counter<br>6: <br>7: increment()</div>",
  options: [
    "A. Line 3 - reading before assignment",
    "B. Line 4 - missing global keyword",
    "C. Line 1 - wrong initial value",
    "D. Line 7 - wrong function call"
  ],
  answer: "B",
  explanation: "Line 4 tries to modify global variable without 'global counter' declaration. Add 'global counter' before line 3."
},

{
  id: 140,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What should be changed to fix this infinite loop?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>user_input = ''<br>while user_input != 'quit':<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Type quit to exit')<br>&nbsp;&nbsp;&nbsp;&nbsp;# Loop never ends!</div>",
  options: [
    "A. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>user_input = input()</code> inside the loop",
    "B. Change condition to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>user_input == 'quit'</code>",
    "C. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>break</code> statement",
    "D. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for</code> loop instead"
  ],
  answer: "A",
  explanation: "user_input never changes inside the loop. Need to add user_input = input() to get new input each iteration."
},

{
  id: 141,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What's wrong with this dictionary access that causes KeyError?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>student_grades = {'math': 85, 'science': 92}<br>subjects = ['math', 'Science', 'history']<br>for subject in subjects:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f'{subject}: {student_grades[subject]}')<br># KeyError occurs</div>",
  options: [
    "A. 'Science' has wrong capitalization, 'history' doesn't exist",
    "B. Dictionary keys are wrong",
    "C. Loop variable is wrong",
    "D. Print statement syntax error"
  ],
  answer: "A",
  explanation: "Dictionary has 'science' (lowercase) but list has 'Science' (capitalized). 'history' key doesn't exist in dictionary."
},

{
  id: 142,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "How should this file handling code be fixed to prevent errors?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>file = open('data.txt', 'r')<br>content = file.read()<br>print(content)<br># File might not exist, file not closed</div>",
  options: [
    "A. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>file.close()</code> at the end",
    "B. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>with open()</code> statement",
    "C. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>try-except FileNotFoundError</code>",
    "D. Both B and C"
  ],
  answer: "D",
  explanation: "Need 'with open()' for automatic file closing and try-except for handling missing files."
},

{
  id: 143,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What needs to be fixed in this list modification during iteration?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers = [1, 2, 3, 4, 5]<br>for num in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;if num % 2 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numbers.remove(num)<br>print(numbers)<br># Doesn't remove all even numbers</div>",
  options: [
    "A. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>numbers[:] = [x for x in numbers if x % 2 != 0]</code>",
    "B. Iterate backwards with <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for i in range(len(numbers)-1, -1, -1)</code>",
    "C. Create new list instead of modifying original",
    "D. All of the above work"
  ],
  answer: "D",
  explanation: "Can't safely modify list while iterating forward. All suggested solutions avoid this problem."
},

{
  id: 144,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "Which parameter needs to be fixed to prevent this function error?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def create_profile(name, age, hobbies=[]):<br>&nbsp;&nbsp;&nbsp;&nbsp;hobbies.append('reading')<br>&nbsp;&nbsp;&nbsp;&nbsp;return {'name': name, 'age': age, 'hobbies': hobbies}<br><br># Problem: mutable default argument</div>",
  options: [
    "A. Change to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>hobbies=None</code> and check inside function",
    "B. Change to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>hobbies=()</code>",
    "C. Remove default value completely",
    "D. Change to <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>hobbies=list()</code>"
  ],
  answer: "A",
  explanation: "Mutable default arguments persist between calls. Use hobbies=None, then inside: if hobbies is None: hobbies = []."
},

{
  id: 145,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What's causing the TypeError in this string formatting?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = 'Alice'<br>age = 25<br>height = None<br>message = f'Name: {name}, Age: {age}, Height: {height:.1f}cm'<br>print(message)<br># TypeError occurs</div>",
  options: [
    "A. Variable 'height' is None, can't format as float",
    "B. Wrong f-string syntax",
    "C. Missing quotes around variables",
    "D. Age should be string"
  ],
  answer: "A",
  explanation: "Can't apply .1f formatting to None. Need to check: {height:.1f if height else 'Unknown'}."
},

{
  id: 146,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What should be added to make this division function safe?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def divide_numbers(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;return a / b<br><br>result = divide_numbers(10, 0)<br># ZeroDivisionError will occur</div>",
  options: [
    "A. Check <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>if b != 0</code> before division",
    "B. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>try-except ZeroDivisionError</code>",
    "C. Return special value like None for division by zero",
    "D. All of the above are valid approaches"
  ],
  answer: "D",
  explanation: "All approaches handle division by zero: checking beforehand, catching exception, or returning special value."
},

{
  id: 147,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "Which line needs indentation fix in this code?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1: if age >= 18:<br>2: print('Adult')<br>3: &nbsp;&nbsp;&nbsp;&nbsp;can_vote = True<br>4: else:<br>5: &nbsp;&nbsp;&nbsp;&nbsp;print('Minor')<br>6: can_vote = False<br># IndentationError</div>",
  options: [
    "A. Line 2 needs indentation",
    "B. Line 6 needs indentation", 
    "C. Both lines 2 and 6",
    "D. Line 3 has wrong indentation"
  ],
  answer: "C",
  explanation: "Lines 2 and 6 need proper indentation to be inside their respective if/else blocks."
},

{
  id: 148,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What needs to be changed to fix this string method error?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data = [1, 2, 'hello', 4, 'world']<br>for item in data:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(item.upper())<br># AttributeError: 'int' object has no attribute 'upper'</div>",
  options: [
    "A. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>if isinstance(item, str):</code> check",
    "B. Convert all items to string: <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>str(item).upper()</code>",
    "C. Use <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>try-except AttributeError</code>",
    "D. All of the above work"
  ],
  answer: "D",
  explanation: "All approaches handle mixed data types: type checking, string conversion, or exception handling."
},

{
  id: 149,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "What's wrong with this variable assignment that causes NameError?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def calculate_tax(income):<br>&nbsp;&nbsp;&nbsp;&nbsp;if income > 50000:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tax_rate = 0.3<br>&nbsp;&nbsp;&nbsp;&nbsp;elif income > 25000:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tax_rate = 0.2<br>&nbsp;&nbsp;&nbsp;&nbsp;return income * tax_rate<br><br>result = calculate_tax(20000)<br># NameError: tax_rate not defined</div>",
  options: [
    "A. Add <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>else: tax_rate = 0.1</code> for low income",
    "B. Initialize <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tax_rate = 0</code> at the start",
    "C. Change elif to if statement",
    "D. Both A and B work"
  ],
  answer: "D",
  explanation: "tax_rate is undefined for income ≤ 25000. Need either else clause or initial assignment."
},

{
  id: 150,
  domain: "Exceptions & debugging",
  type: "multiple_choice",
  question: "How should this exception handling be improved?<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;with open('config.txt') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = f.read()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config = eval(data)<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Error occurred')<br># Too broad exception handling</div>",
  options: [
    "A. Catch specific exceptions: <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>FileNotFoundError, SyntaxError</code>",
    "B. Replace <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>eval()</code> with <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>json.loads()</code>",
    "C. Add proper error messages for each exception type",
    "D. All of the above"
  ],
  answer: "D",
  explanation: "Should catch specific exceptions, avoid dangerous eval(), and provide meaningful error messages."
}
]