import { Question } from './types';

export const quizQuestions: Question[] = [
  {
    "id": 1,
    "domain": "Data types & variable assignment",
    "type": "multiple_choice",
    "question": "Consider the following Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>age=0<br>minor=False<br>name='Durga'</div>The types of age, minor and name variables respectively:",
    "options": [
      "A. int, bool, str",
      "B. bool, bool, str",
      "C. int, bool, char",
      "D. float, bool, str"
    ],
    "answer": "A. int, bool, str",
    "explanation": "The literal 0 has no decimal point so it creates an int, False is one of the two bool literals, and quoted text creates a str. Python has no char type, which rules out option C, and 0 is an int rather than a float, which rules out option D."
  },
  {
    "id": 2,
    "domain": "Data types & variable assignment",
    "type": "multiple_choice",
    "question": "Consider the following Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>weight = 62.4<br>zip='880098'<br>value=+23E4</div>The types of weight, zip and value variables respectively:",
    "options": [
      "A. float, str, str",
      "B. int, str, float",
      "C. double, str, float",
      "D. float, str, float"
    ],
    "answer": "D. float, str, float",
    "explanation": "62.4 is a float literal, '880098' is quoted so it is a str even though it looks numeric, and exponent notation such as +23E4 always produces a float (230000.0). Python has no double type, so option C is wrong, and option A wrongly treats the exponent literal as a string."
  },
  {
    "id": 3,
    "domain": "Data types & variable assignment",
    "type": "fill_in_blank",
    "question": "You create the following program to locate a conference room and display the room name. Line numbers are included for reference only. Colleagues report that the program sometimes produces incorrect results. You need to troubleshoot the program. Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 rooms = {1: 'Left Conference Room', 2: 'Right conference Room'}<br>02 room = input('Enter the room number: ')<br>03 if not room in rooms:<br>04&nbsp;&nbsp;&nbsp;&nbsp;print('Room does not exist.')<br>05 else:<br>06&nbsp;&nbsp;&nbsp;&nbsp;print(\"The room name is \" + rooms[room])<br><br>Which two data types are stored in the rooms list at line 01? ____<br>What is the data type of room at line 02? ____<br>Why does line 03 fail to find the rooms? ____</div>",
    "options": {
      "rooms_data_types": [
        "bool and string",
        "float and bool",
        "int and string",
        "float and int"
      ],
      "room_data_type": [
        "bool",
        "float",
        "int",
        "string"
      ],
      "failure_reason": [
        "Invalid syntax",
        "Mismatched data type(s)",
        "Misnamed variable(s)"
      ]
    },
    "answer": {
      "rooms_data_types": "int and string",
      "room_data_type": "string",
      "failure_reason": "Mismatched data type(s)"
    },
    "explanation": "The literal at line 01 stores int keys (1 and 2) paired with str values (the room names). input() always returns a str, so room holds '1' rather than the number 1, and testing a str against int keys never matches. The code parses fine and the names are spelled correctly, so the fault is a data type mismatch, not syntax or naming."
  },
  {
    "id": 4,
    "domain": "Data types & variable assignment",
    "type": "fill_in_blank",
    "question": "You are writing a program that calculates a user's year of birth. The program asks users for their age and the current year, then outputs the user's year of birth. You write the following code. Line numbers are included for reference only. You need to ensure that the program uses the appropriate data types. Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 age = input('Enter your age: ')<br>02 year = input('Enter the four digit year: ')<br>03 born = eval(year) - eval(age)<br>04 message = 'You were born in ' + str(born)<br>05 print(message)<br><br>What data type is age in line 01? ____<br>What data type is born in line 03? ____<br>What data type is message in line 04? ____</div>",
    "options": {
      "age_type": [
        "int",
        "str",
        "float",
        "bool"
      ],
      "born_type": [
        "int",
        "str",
        "float",
        "bool"
      ],
      "message_type": [
        "int",
        "str",
        "float",
        "bool"
      ]
    },
    "answer": {
      "age_type": "str",
      "born_type": "int",
      "message_type": "str"
    },
    "explanation": "input() always hands back a str, so age is a str even when the user types digits. eval() turns those digit strings back into whole numbers, so the subtraction at line 03 is int arithmetic and born is an int. Line 04 concatenates a str literal with str(born), which produces a str."
  },
  {
    "id": 5,
    "domain": "Data types & variable assignment",
    "type": "true_false",
    "question": "During school holidays, you volunteer to explain some basic programming concepts to your younger siblings. You want to introduce the concept of data types in Python. You create the following three code segments:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'># Code segment 1<br>x1 = \"20\"<br>y1 = 3<br>a = x1 * y1<br># Code segment 2<br>x2 = 6<br>y2 = 4<br>b = x2 / y2<br># Code segment 3<br>x3 = 2.5<br>y3 = 1<br>c = x3 / y3</div>You need to evaluate the code segments. For each of the following statements, select True if the statement is correct. Otherwise, select False.",
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
    "explanation": "Multiplying a str by an int repeats the string, so a becomes '202020', a str. True division with the single slash operator always returns a float, so b is 1.5 and c is 2.5. Because c is a float and not an int, the third statement is false."
  },
  {
    "id": 6,
    "domain": "Data types & variable assignment",
    "type": "ordering",
    "question": "Match the data type to the type operations. To answer, drag the appropriate data type to the correct type operation. Each data type may be used once, more than once, or not at all.<br>type(+1E10) &rarr; ____<br>type(5.0) &rarr; ____<br>type(\"True\") &rarr; ____<br>type(False) &rarr; ____",
    "options": [
      "int",
      "float",
      "str",
      "bool",
      "float"
    ],
    "answer": [
      "float",
      "float",
      "str",
      "bool"
    ],
    "explanation": "Exponent notation such as +1E10 always produces a float, and 5.0 is a float literal because of the decimal point. \"True\" is quoted, so it is a str rather than a bool, while the bare keyword False is a bool. None of these expressions produces an int."
  },
  {
    "id": 7,
    "domain": "Data types & variable assignment",
    "type": "ordering",
    "question": "You are writing a Python program. The program collects customer data and stores it in a database. The program handles a wide variety of data. You need to ensure that the program handles the data correctly so that it can be stored in the database correctly. Match the data type to the code segment. Each data type may be used once, more than once, or not at all.<br>age = 2 &rarr; ____<br>minor = False &rarr; ____<br>name = \"Contoso\" &rarr; ____<br>weight = 123.5 &rarr; ____<br>zip = \"81000\" &rarr; ____",
    "options": [
      "bool",
      "float",
      "int",
      "str",
      "str"
    ],
    "answer": [
      "int",
      "bool",
      "str",
      "float",
      "str"
    ],
    "explanation": "An unquoted whole number is an int, the keyword False is a bool, quoted text is a str, and a number written with a decimal point is a float. zip = \"81000\" is quoted, so it is a str even though every character is a digit."
  },
  {
    "id": 8,
    "domain": "Data types & variable assignment",
    "type": "multiple_select",
    "question": "Consider the variable declarations:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a='5'<br>b='2'</div>Which of the following expressions are of type str? (Choose 2.)",
    "options": [
      "A. a+b",
      "B. a*b",
      "C. a-b",
      "D. a*2"
    ],
    "answer": [
      "A. a+b",
      "D. a*2"
    ],
    "explanation": "Because a and b are both strings, a+b concatenates them into '52' and a*2 repeats a into '55', so both results are str. a*b raises a TypeError because a sequence can only be multiplied by an int, and a-b raises a TypeError because subtraction is not defined for strings."
  },
  {
    "id": 9,
    "domain": "Data types & variable assignment",
    "type": "multiple_choice",
    "question": "You are writing a Python program. You are required to handle data types properly. Consider the code segment:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) a=10+20<br>2) b='10'+'20'<br>3) c='10'*3</div>Identify the types of a, b and c.",
    "options": [
      "A. a is of int type, b is of str type and c is of str type",
      "B. a is of int type, b is of str type and c is of int type",
      "C. a is of int type, b is of int type and c is of int type",
      "D. a is of int type, b and c are invalid declarations"
    ],
    "answer": "A. a is of int type, b is of str type and c is of str type",
    "explanation": "10+20 is integer arithmetic, so a is an int equal to 30. '10'+'20' concatenates two strings into '1020' and '10'*3 repeats a string into '101010', so b and c are both str. Neither of those operations is invalid, so option D is wrong."
  },
  {
    "id": 10,
    "domain": "Data types & variable assignment",
    "type": "fill_in_blank",
    "question": "You are writing a function that returns the data type of the value that is passed in. You write the following code. Line numbers are included for reference only. Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def checkType(value):<br>02&nbsp;&nbsp;&nbsp;&nbsp;dataType = type(value)<br>03&nbsp;&nbsp;&nbsp;&nbsp;return dataType<br>04 print(checkType(True))<br>05 print(checkType(1.0))<br>06 print(checkType(1))<br>07 print(checkType('True'))<br><br>What is printed at line 04? ____<br>What is printed at line 05? ____<br>What is printed at line 06? ____<br>What is printed at line 07? ____</div>",
    "options": {
      "line_04_output": [
        "<class 'bool'>",
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>"
      ],
      "line_05_output": [
        "<class 'bool'>",
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>"
      ],
      "line_06_output": [
        "<class 'bool'>",
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>"
      ],
      "line_07_output": [
        "<class 'bool'>",
        "<class 'int'>",
        "<class 'float'>",
        "<class 'str'>"
      ]
    },
    "answer": {
      "line_04_output": "<class 'bool'>",
      "line_05_output": "<class 'float'>",
      "line_06_output": "<class 'int'>",
      "line_07_output": "<class 'str'>"
    },
    "explanation": "checkType returns the class object produced by type(), and printing a class object shows it in the class repr form. True is a bool, 1.0 is a float because of the decimal point, 1 is an int, and the quoted 'True' is a str rather than a bool."
  },
  {
    "id": 11,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You have the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) a=bool([False])<br>2) b=bool(3)<br>3) c=bool(\"\")<br>4) d=bool(' ')</div>Which of the variables will represent False?",
    "options": [
      "A. a",
      "B. b",
      "C. c",
      "D. d"
    ],
    "answer": "C. c",
    "explanation": "bool() is False only for empty or zero values. The empty string \"\" is falsy, so c is False, while [False] is a non-empty list, 3 is a non-zero number, and ' ' is a one-character string containing a space, so a, b and d are all True."
  },
  {
    "id": 12,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the following variable declarations:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) a= bool([])<br>2) b= bool(())<br>3) c= bool(range(0))<br>4) d= bool({})<br>5) e= bool(set())</div>Which of the above variables represent True?",
    "options": [
      "A. c",
      "B. a, b, c, d",
      "C. All Variables represent True",
      "D. None of the variables represents True"
    ],
    "answer": "D. None of the variables represents True",
    "explanation": "Every value here is an empty container: an empty list, an empty tuple, range(0), an empty dict and an empty set. Empty containers are falsy in Python, so all five variables are False and none of them represents True."
  },
  {
    "id": 13,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) a=bool(0)<br>2) b=bool(3)<br>3) c=bool(0.5)<br>4) d=bool(0.0)</div>Which variables represent True?",
    "options": [
      "A. a,b",
      "B. b,c",
      "C. c,d",
      "D. d,a",
      "E. All Variables"
    ],
    "answer": "B. b,c",
    "explanation": "For numbers, only zero is falsy, so bool(0) and bool(0.0) are False while bool(3) and bool(0.5) are True. That makes b and c the only variables representing True, so any answer including a or d is wrong."
  },
  {
    "id": 14,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You are writing a Python program to read two int values from the keyboard and print the sum.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) x=input('Enter First Number:')<br>2) y=input('Enter Second Number:')<br>3) #Line-1</div>Which of the following code should we write at Line-1 to print the sum of the given numbers?",
    "options": [
      "A. print('The Result:'+(int(x)+int(y)))",
      "B. print('The Result:'+(int(x+y)))",
      "C. print('The Result:'+str(int(x)+int(y)))",
      "D. print('The Result:'+str(int(x+y)))"
    ],
    "answer": "C. print('The Result:'+str(int(x)+int(y)))",
    "explanation": "input() returns strings, so each value must be converted with int() before adding, and the numeric total must be converted back with str() before it can be joined to a string. Option D writes int(x+y), which concatenates '10' and '20' into '1020' first and prints the wrong total, while options A and B raise a TypeError because a str cannot be concatenated with an int."
  },
  {
    "id": 15,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) result=str(bool(1) + float(10)/float(2))<br>2) print(result)</div>What is the output?",
    "options": [
      "A. SyntaxError",
      "B. TypeError",
      "C. 6",
      "D. 6.0"
    ],
    "answer": "D. 6.0",
    "explanation": "bool(1) is True, which behaves as 1 in arithmetic, and float(10)/float(2) is 5.0, so the sum is the float 6.0. Converting that float to a string keeps the decimal point, so 6.0 is printed rather than 6, and mixing bool with float is perfectly legal, so no error is raised."
  },
  {
    "id": 16,
    "domain": "Data type operations",
    "type": "fill_in_blank",
    "question": "You write the following code. Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 'Config1'<br>print(a)<br>b = a<br>a += 'Config2'<br>print(a)<br>print(b)<br><br>What is displayed after the first print? ____<br>What is displayed after the second print? ____<br>What is displayed after the third print? ____</div>",
    "options": {
      "first_print": [
        "Config1",
        "Config1Config2",
        "Config2"
      ],
      "second_print": [
        "Config1",
        "Config1Config2",
        "Config2"
      ],
      "third_print": [
        "Config1",
        "Config1Config2",
        "Config2"
      ]
    },
    "answer": {
      "first_print": "Config1",
      "second_print": "Config1Config2",
      "third_print": "Config1"
    },
    "explanation": "Strings are immutable, so a += 'Config2' builds a brand new string and rebinds a to it instead of changing the original object. b was bound to the original 'Config1' before that, so it still refers to the old value, giving Config1, Config1Config2 and Config1 in order."
  },
  {
    "id": 17,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You develop an application for your school. A list named colors contains 200 colors. You need to slice the list to display every other color starting with the second color. Which code should you use?",
    "options": [
      "A. colors[1:2]",
      "B. colors[::2]",
      "C. colors[2:2]",
      "D. colors[1::2]"
    ],
    "answer": "D. colors[1::2]",
    "explanation": "A slice written as list[start::step] begins at start and then takes every step-th item, so colors[1::2] starts at index 1 (the second color) and returns every other one to the end. colors[::2] starts at the first color instead, while colors[1:2] returns a single color and colors[2:2] returns an empty list."
  },
  {
    "id": 18,
    "domain": "Data type operations",
    "type": "multiple_select",
    "question": "You develop an application for your company. A list named employees contains 200 employee names, the last five being company management. You need to slice the list to display all employees excluding management. Which two code segments should you use? Each correct answer presents a complete solution. (Choose 2.)",
    "options": [
      "A. employees[0:-4]",
      "B. employees[1:-5]",
      "C. employees[:-5]",
      "D. employees[0:-5]",
      "E. employees[1:-4]"
    ],
    "answer": [
      "C. employees[:-5]",
      "D. employees[0:-5]"
    ],
    "explanation": "A negative stop of -5 excludes the last five items, and an omitted start is the same as a start of 0, so employees[:-5] and employees[0:-5] both return all 195 non-management names. Stopping at -4 leaves one manager in the result, and starting at 1 drops the first employee."
  },
  {
    "id": 19,
    "domain": "Data type operations",
    "type": "multiple_select",
    "question": "You are developing a Python application for your company. A list named employees contains 600 employee names, the last 3 being company management. You need to slice employees to display all employees excluding management. Which two code segments should you use? (Choose 2.)",
    "options": [
      "A. employees[1:-2]",
      "B. employees[:-3]",
      "C. employees[1:-3]",
      "D. employees[0:-2]",
      "E. employees[0:-3]"
    ],
    "answer": [
      "B. employees[:-3]",
      "E. employees[0:-3]"
    ],
    "explanation": "An omitted start behaves exactly like a start of 0, and a stop of -3 drops the last three names, so employees[:-3] and employees[0:-3] both return all 597 non-management employees. Slices stopping at -2 still include a manager, and slices starting at 1 skip the first employee."
  },
  {
    "id": 20,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You are developing a Python application for your company. A list named employees contains 500 employee names, the last 3 being company management. Which of the following represents only management employees?",
    "options": [
      "A. employees[497:]",
      "B. employees[-3:]",
      "C. employees[497:500]",
      "D. All the above"
    ],
    "answer": "D. All the above",
    "explanation": "With 500 names the managers sit at indices 497, 498 and 499. Slicing from 497 to the end, slicing the last three with a negative start, and slicing 497 to 500 all describe exactly that range, so every listed option is correct."
  },
  {
    "id": 21,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You write the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>list_1 = [1, 2]<br>list_2 = [3, 4]<br>list_3 = list_1 + list_2<br>list_4 = list_3 * 3<br>print(list_4)</div>You run the code. What is the output value?",
    "options": [
      "A. [3, 6, 9, 12]",
      "B. [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]",
      "C. [[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]]",
      "D. [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]"
    ],
    "answer": "B. [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]",
    "explanation": "The + operator concatenates the two lists into [1, 2, 3, 4], and multiplying a list by 3 repeats its elements into one flat list of 12 items. Multiplication does not scale the numbers, which rules out option A, and it does not nest the lists, which rules out options C and D."
  },
  {
    "id": 22,
    "domain": "Data type operations",
    "type": "multiple_select",
    "question": "Woodgrove Bank must generate a report that shows the average balance for all customers each day. The report must truncate the decimal portion of the balance. Which two code segments should you use? Each correct answer presents a complete solution. (Choose 2.)",
    "options": [
      "A. average_balance = total_deposits**number_of_customers",
      "B. average_balance = total_deposits//number_of_customers",
      "C. average_balance = int(total_deposits/number_of_customers)",
      "D. average_balance = float(total_deposits//number_of_customers)"
    ],
    "answer": [
      "B. average_balance = total_deposits//number_of_customers",
      "C. average_balance = int(total_deposits/number_of_customers)"
    ],
    "explanation": "Floor division with // and wrapping true division in int() both drop the fractional part and leave a whole-number average. The ** operator raises one value to the power of the other instead of dividing, and wrapping the floor division in float() turns the whole number back into a value with a decimal portion."
  },
  {
    "id": 23,
    "domain": "Data type operations",
    "type": "ordering",
    "question": "You are creating a script to evaluate input and check for upper and lower case. Which four code segments should you use to develop the solution? Arrange the correct code segments in order. Not all code segments will be used.<br>Line 1 &rarr; ____<br>Line 2 &rarr; ____<br>Line 3 &rarr; ____<br>Line 4 &rarr; ____",
    "options": [
      "name = input(\"Enter your name: \")",
      "if name.lower() == name: print(name, \"is all lower case.\")",
      "elif name.upper() == name: print(name, \"is all upper case.\")",
      "else: print(name, \"is mixed case.\")",
      "else: print(name, \"is lower case.\")",
      "else: print(name, \"is upper case.\")"
    ],
    "answer": [
      "name = input(\"Enter your name: \")",
      "if name.lower() == name: print(name, \"is all lower case.\")",
      "elif name.upper() == name: print(name, \"is all upper case.\")",
      "else: print(name, \"is mixed case.\")"
    ],
    "explanation": "The script must read the name first, then test the all-lowercase case with if, chain the all-uppercase test with elif, and finish with a single else that catches everything remaining, which is mixed case. An elif or else has to follow an if, and only one else may close the chain, so the alternative else blocks that report lower or upper case are not used."
  },
  {
    "id": 24,
    "domain": "Data type operations",
    "type": "ordering",
    "question": "You are writing a Python program to perform arithmetic operations. You create the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 11<br>b = 4</div>What is the result of each arithmetic expression? Drag the appropriate expression to its result.<br>2 &rarr; ____<br>3 &rarr; ____<br>2.75 &rarr; ____",
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
    "explanation": "With a = 11 and b = 4, floor division // discards the fractional part and gives 2, the modulo operator % returns the remainder 3, and true division / keeps the fraction and gives 2.75. Only the single slash produces a float result."
  },
  {
    "id": 25,
    "domain": "Data type operations",
    "type": "ordering",
    "question": "You have the following string:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>alph = \"abcdefghijklmnopqrstuvwxyz\"</div>You need to evaluate the result of performing various slicing operations. Drag the appropriate result to its slicing operation. Each result may be used once, more than once, or not at all.<br>alph[3:15] &rarr; ____<br>alph[3:15:3] &rarr; ____<br>alph[3:15:-3] &rarr; ____<br>alph[15:3:-3] &rarr; ____<br>alph[15:3] &rarr; ____<br>alph[::-3] &rarr; ____",
    "options": [
      "zwtqnkheb",
      "pmjg",
      "defghijklmno",
      "ponmlkjihgfe",
      "defghijklmnop",
      "dgjm",
      "olif",
      "(empty string)"
    ],
    "answer": [
      "defghijklmno",
      "dgjm",
      "(empty string)",
      "pmjg",
      "(empty string)",
      "zwtqnkheb"
    ],
    "explanation": "A positive step walks left to right and a negative step walks right to left, and a slice whose bounds contradict its direction returns nothing. alph[3:15] takes indices 3 through 14, alph[3:15:3] keeps every third of those, alph[15:3:-3] walks backwards from index 15, and alph[::-3] reverses the whole string in steps of three, while alph[3:15:-3] and alph[15:3] are both empty because their start and stop run the wrong way for their step."
  },
  {
    "id": 26,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What is a variable defined outside a function referred to as?",
    "options": [
      "A. A static variable",
      "B. A global variable",
      "C. A local variable",
      "D. An automatic variable"
    ],
    "answer": "B. A global variable",
    "explanation": "A name bound at module level lives in the module's global namespace, so it is called a global variable and is visible to every function in that module. A local variable is one bound inside a function body, and Python has no 'static' or 'automatic' storage classes as C does."
  },
  {
    "id": 27,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = 10<br>b = 20<br><br>def change():<br>&nbsp;&nbsp;&nbsp;&nbsp;global b<br>&nbsp;&nbsp;&nbsp;&nbsp;a = 45<br>&nbsp;&nbsp;&nbsp;&nbsp;b = 56<br><br>change()<br>print(a)<br>print(b)</div>",
    "options": [
      "A. 10,56",
      "B. 45,56",
      "C. 10, 20",
      "D. Syntax Error"
    ],
    "answer": "A. 10,56",
    "explanation": "Only b is declared global, so b = 56 rebinds the module-level b, while a = 45 creates a new local variable inside change() and leaves the global a at 10. The code therefore prints 10 and then 56; it is syntactically valid, so no error occurs."
  },
  {
    "id": 28,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def change(i=1, j=2):<br>&nbsp;&nbsp;&nbsp;&nbsp;i = i + j<br>&nbsp;&nbsp;&nbsp;&nbsp;j = j + 1<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i, j)<br><br>change(j=1, i=2)</div>",
    "options": [
      "A. An exception is thrown because of conflicting values",
      "B. 1 2",
      "C. 3 3",
      "D. 3 2"
    ],
    "answer": "D. 3 2",
    "explanation": "Keyword arguments may be passed in any order, so change(j=1, i=2) simply binds i to 2 and j to 1, overriding both defaults without any conflict. Then i becomes 2 + 1 = 3 and j becomes 1 + 1 = 2, so the function prints 3 2."
  },
  {
    "id": 29,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>names=['itvedant','Thane','Andheri','Navi Mumbai']<br>print(names[-1][-1])</div>",
    "options": [
      "A. Navi Mumbai",
      "B. Mumbai",
      "C. i",
      "D. a"
    ],
    "answer": "C. i",
    "explanation": "names[-1] selects the last element of the list, the string 'Navi Mumbai', and the second [-1] then indexes that string to get its last character. The last character of 'Navi Mumbai' is 'i', so a single character is printed rather than the whole string or a word."
  },
  {
    "id": 30,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What is the return type of the function id()?",
    "options": [
      "A. int",
      "B. float",
      "C. bool",
      "D. str"
    ],
    "answer": "A. int",
    "explanation": "id() returns the identity of an object as an integer that is unique and constant for that object during its lifetime, so type(id(x)) is int. It is a memory-address-like number, not a textual or floating point value."
  },
  {
    "id": 31,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f=lambda x:bool(x%2)<br>print(f(20), f(21))</div>",
    "options": [
      "A. False True",
      "B. False False",
      "C. True True",
      "D. True False"
    ],
    "answer": "A. False True",
    "explanation": "The lambda returns bool(x % 2), which is False for even numbers because 20 % 2 is 0 and bool(0) is False. For 21 the remainder is 1 and bool(1) is True, so the call prints False True in that order."
  },
  {
    "id": 32,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the following lists:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>n1=[10,20,30,40,50]<br>n2=[10,20,30,40,50]<br>print(n1 is n2)<br>print(n1 == n2)</div><br>What is the output?",
    "options": [
      "A. False, False",
      "B. True, True",
      "C. True, False",
      "D. False, True"
    ],
    "answer": "D. False, True",
    "explanation": "The two list literals build two separate objects, so the identity test n1 is n2 is False even though the contents match. The == operator compares lists element by element, so n1 == n2 is True; identity and equality are different questions in Python."
  },
  {
    "id": 33,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the following lists:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>n1=[10,20,30,40,50]<br>n2=[10,20,30,40,50]<br>print(n1 is n2)<br>print(n1 == n2)<br>n1=n2<br>print(n1 is n2)<br>print(n1 == n2)</div><br>What is the result?",
    "options": [
      "A. False, False, True, True",
      "B. False, True, False, True",
      "C. False, True, True, True",
      "D. True, False, True, False"
    ],
    "answer": "C. False, True, True, True",
    "explanation": "Initially the two literals are distinct objects with equal contents, giving False for is and True for ==. After n1 = n2 both names refer to the very same list object, so is becomes True and == stays True, producing False, True, True, True."
  },
  {
    "id": 34,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the lists:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers=[10,20,30,40,50]<br>alphabets=['a','b','c','d','e']<br>print( numbers is alphabets)<br>print( numbers == alphabets)<br>numbers=alphabets<br>print( numbers is alphabets)<br>print( numbers == alphabets)</div><br>What is the result?",
    "options": [
      "A. False, False, True, True",
      "B. False, True, False, True",
      "C. True, False, True, False",
      "D. False, True, True, True"
    ],
    "answer": "A. False, False, True, True",
    "explanation": "Before the assignment the two lists are different objects holding different values, so both is and == are False. The statement numbers = alphabets rebinds numbers to the same object, after which is and == are both True, giving False, False, True, True."
  },
  {
    "id": 35,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>s='AB CD'<br>list=list(s)<br>list.append('EF')<br>print(list)</div><br>What is the result?",
    "options": [
      "A. ['A', 'B', 'C', 'D', 'E', 'F']",
      "B. {'A', 'B', ' ', 'C', 'D', 'EF'}",
      "C. ['A', 'B', ' ', 'C', 'D', 'EF']",
      "D. ('A', 'B', ' ', 'C', 'D', 'EF')"
    ],
    "answer": "C. ['A', 'B', ' ', 'C', 'D', 'EF']",
    "explanation": "list(s) splits the string into one element per character, including the space, giving ['A', 'B', ' ', 'C', 'D']. append() adds the two-character string 'EF' as a single element, and the result is still a list, so it prints with square brackets rather than the braces of a set or the parentheses of a tuple."
  },
  {
    "id": 36,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x='ACROTE'<br>y='APPLE'<br>z='TOMATO'</div><br>Which of the following will NOT print 'CAT' to the console?",
    "options": [
      "A. print(x[1]+y[0]+z[0])",
      "B. print(x[2]+y[1]+z[1])",
      "C. print(x[-5]+y[0]+z[0])",
      "D. print(x[-5]+y[0]+z[-2])"
    ],
    "answer": "B. print(x[2]+y[1]+z[1])",
    "explanation": "Option B picks x[2] = 'R', y[1] = 'P' and z[1] = 'O', which concatenate to 'RPO'. The other three all select 'C' (x[1] and x[-5] are the same character), 'A' from y[0], and 'T' from z[0] or z[-2], so they each print CAT."
  },
  {
    "id": 37,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>s='Python is easy'<br>s1=s[-7:]<br>s2=s[-4:]<br>print(s1+s2)</div><br>What is the result?",
    "options": [
      "A. is easyeasy",
      "B. easyeasy",
      "C. iseasyeasy",
      "D. s easyeasy",
      "E. is easy easy"
    ],
    "answer": "A. is easyeasy",
    "explanation": "s[-7:] takes the last seven characters, 'is easy', and s[-4:] takes the last four, 'easy'. Concatenation adds no separator, so the two pieces run together as 'is easyeasy'."
  },
  {
    "id": 38,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>s='Python is easy'<br>s1=s[6:-4]<br>#Line-1<br>print(len(s2))</div><br>To print 2 as the output, which code do we have to insert at Line-1?",
    "options": [
      "A. s2 = s1.lstrip()",
      "B. s2 = s1.rstrip()",
      "C. s2 = s1.lrstrip()",
      "D. s2 = s1.strip()"
    ],
    "answer": "D. s2 = s1.strip()",
    "explanation": "s[6:-4] is the four-character slice ' is ', with a space on both sides. Only strip() removes whitespace from both ends, leaving 'is' with length 2; lstrip() and rstrip() each remove one side and leave length 3, and lrstrip() is not a string method at all."
  },
  {
    "id": 39,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>t=([10,20],10,False)</div><br>Which line of the code assigns &lt;class 'list'&gt; to x?",
    "options": [
      "A. x = type(t)",
      "B. x = type(t[0])",
      "C. x = type(t[1])",
      "D. x = type(t[0:])"
    ],
    "answer": "B. x = type(t[0])",
    "explanation": "t is a tuple whose first element is the list [10, 20], so type(t[0]) is the list type. type(t) and type(t[0:]) both report tuple because slicing a tuple returns a tuple, and type(t[1]) reports int."
  },
  {
    "id": 40,
    "domain": "Data type operations",
    "type": "multiple_select",
    "question": "Consider the variable declaration:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>b = 'BANANA'</div><br>Which of the following lines will print 'AA' to the console? (Choose 3.)",
    "options": [
      "A. print(b[1]+b[2])",
      "B. print(b[1]+b[3])",
      "C. print(b[1]+b[5])",
      "D. print(b[3]+b[5])"
    ],
    "answer": [
      "B. print(b[1]+b[3])",
      "C. print(b[1]+b[5])",
      "D. print(b[3]+b[5])"
    ],
    "explanation": "In 'BANANA' the letter A sits at indexes 1, 3 and 5, so any pair drawn from those positions concatenates to 'AA'. Option A uses index 2, which is 'N', so it prints 'AN' instead."
  },
  {
    "id": 41,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the list:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>list = ['Apple', 'Banana', 'Carrot', 'Mango']</div><br>Which of the following are valid ways of accessing 'Mango'?<br>Option A: list[3]<br>Option B: list[4]<br>Option C: list[-1]<br>Option D: list[0]",
    "options": [
      "A. A and B",
      "B. B and D",
      "C. A and C",
      "D. All options"
    ],
    "answer": "C. A and C",
    "explanation": "The list has four items, so the last one is at index 3 counting forward or index -1 counting backward, and both reach 'Mango'. Index 4 is out of range and raises IndexError, while index 0 returns 'Apple'."
  },
  {
    "id": 42,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "You are given the following Python code snippet:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 'TEXT'</div><br>Which line of code will assign the string 'TT' to the variable output?",
    "options": [
      "A. output = x[1] + x[1]",
      "B. output = x[1] + x[4]",
      "C. output = x[0] + x[2]",
      "D. output = x[0] + x[-1]"
    ],
    "answer": "D. output = x[0] + x[-1]",
    "explanation": "'TEXT' has T at index 0 and T at the last position, which is index -1, so x[0] + x[-1] gives 'TT'. Option A yields 'EE', option C yields 'TX', and option B raises IndexError because index 4 is past the end of a four-character string."
  },
  {
    "id": 43,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=['a','b','c','d']<br>for i in a:<br>&nbsp;&nbsp;&nbsp;&nbsp;a.append(i.upper())<br>print(a)</div><br>What is the result?",
    "options": [
      "A. ['A', 'B', 'C', 'D']",
      "B. ['a', 'b', 'c', 'd']",
      "C. SyntaxError",
      "D. MemoryError thrown at runtime"
    ],
    "answer": "D. MemoryError thrown at runtime",
    "explanation": "A for loop over a list walks it by index while the body appends a new item on every pass, so the list grows faster than the iterator can reach its end and the loop never terminates. The list keeps expanding until the interpreter runs out of memory and raises MemoryError, so print(a) is never reached and the code is syntactically valid."
  },
  {
    "id": 44,
    "domain": "Data type operations",
    "type": "true_false",
    "question": "Evaluate each of the following statements about Python expressions and decide whether it is valid (true) or invalid (false).",
    "options": {
      "statement1": "After result = 456 + 456.0 the type of result is int.",
      "statement2": "The assignment s = \"Durga Sir's Python Classes are Good\" causes an error because double quotes and single quotes cannot be combined.",
      "statement3": "The line print((7/2) + (False or True) + (9%3)) prints the result 4.5.",
      "statement4": "The expression b = False+5-True+35//4 makes b equal to 12."
    },
    "answer": {
      "statement1": "False: After result = 456 + 456.0 the type of result is int.",
      "statement2": "False: The assignment s = \"Durga Sir's Python Classes are Good\" causes an error because double quotes and single quotes cannot be combined.",
      "statement3": "True: The line print((7/2) + (False or True) + (9%3)) prints the result 4.5.",
      "statement4": "True: The expression b = False+5-True+35//4 makes b equal to 12."
    },
    "explanation": "Adding an int to a float gives a float, so result is 4.5 rather than an int, and a double-quoted literal may freely contain an apostrophe, so no error occurs. In statement 3, 7/2 is 3.5, (False or True) is 1 and 9%3 is 0, giving 4.5; in statement 4, 0 + 5 - 1 + 8 equals 12 because // has higher precedence than + and -."
  },
  {
    "id": 45,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>t=([10,20],10,False)</div><br>Which line of the code assigns &lt;class 'list'&gt; to x?",
    "options": [
      "A. x = type(t)",
      "B. x = type(t[0])",
      "C. x = type(t[1])",
      "D. x = type(t[0:1])"
    ],
    "answer": "B. x = type(t[0])",
    "explanation": "Indexing the tuple with t[0] returns the list object [10, 20], so type(t[0]) is the list type. Slicing with t[0:1] returns a one-element tuple, not the list itself, and type(t) is tuple while type(t[1]) is int."
  },
  {
    "id": 46,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>count=input('Enter the number of customers of the bank:')<br>#Line-1<br>print(output)</div><br>Which code inserted at Line-1 will print 20 to the console if we pass 15 as the count value from the console?",
    "options": [
      "A. output=int(count)+5",
      "B. output=count+5",
      "C. output=str(count)+5",
      "D. output=float(count)+5"
    ],
    "answer": "A. output=int(count)+5",
    "explanation": "input() always returns a string, so the value must be converted before arithmetic; int('15') + 5 is 20 and prints exactly 20. Adding 5 to a string, or to str(count), raises TypeError, and float('15') + 5 evaluates to 20.0, which prints as 20.0 rather than 20."
  },
  {
    "id": 47,
    "domain": "Data type operations",
    "type": "multiple_choice",
    "question": "In which of the following cases will we get &lt;class 'int'&gt; as output?",
    "options": [
      "A. x=47.0<br>print(type(x))",
      "B. x='47'<br>print(type(x))",
      "C. x=10+20j<br>print(type(x))",
      "D. x=2**2**2<br>print(type(x))"
    ],
    "answer": "D. x=2**2**2<br>print(type(x))",
    "explanation": "The ** operator is right associative, so 2**2**2 is 2**(2**2) = 16, an integer. A literal with a decimal point is a float, a quoted literal is a str, and a literal ending in j is a complex number."
  },
  {
    "id": 48,
    "domain": "Data type operations",
    "type": "multiple_select",
    "question": "Which of the following are valid statements? (Choose 2.)",
    "options": [
      "A. 5+False evaluates to False",
      "B. True+1 evaluates to 2",
      "C. True and False evaluates to False",
      "D. True or False evaluates to False",
      "E. type('') is &lt;class 'bool'&gt;"
    ],
    "answer": [
      "B. True+1 evaluates to 2",
      "C. True and False evaluates to False"
    ],
    "explanation": "bool is a subclass of int, so True counts as 1 and False as 0 in arithmetic: True + 1 is 2, while 5 + False is 5, not False. The and operator returns False when either operand is false, but or returns True when at least one operand is true, and an empty pair of quotes is a str, not a bool."
  },
  {
    "id": 49,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=15<br>b=5<br>print(a/b)</div><br>What is the result?",
    "options": [
      "A. 3",
      "B. 3.0",
      "C. 0",
      "D. 0.0"
    ],
    "answer": "B. 3.0",
    "explanation": "In Python 3 the single slash is true division and always produces a float, even when the division comes out exact. 15/5 is therefore 3.0, not the integer 3; you would need the // operator to obtain 3."
  },
  {
    "id": 50,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=21<br>b=6<br>print(a/b)<br>print(a//b)<br>print(a%b)</div><br>What is the result?",
    "options": [
      "A. 3 3 3",
      "B. 3.5 3 3",
      "C. 3.0 3 3",
      "D. 3.5 3.5 3"
    ],
    "answer": "B. 3.5 3 3",
    "explanation": "True division 21/6 gives the float 3.5, floor division 21//6 discards the fraction and gives the integer 3, and the modulus 21%6 gives the remainder 3. Only one of the three results is a float, so the output is 3.5, 3, 3."
  },
  {
    "id": 51,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "You have the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=3<br>b=5<br>a += 2**3<br>a -= b//2//3<br>print(a)</div><br>What is the result?",
    "options": [
      "A. 13",
      "B. 12",
      "C. 11",
      "D. 10"
    ],
    "answer": "C. 11",
    "explanation": "The exponent binds tighter than the augmented assignment, so a += 2**3 makes a equal 3 + 8 = 11. Floor division is left associative, so b//2//3 is (5//2)//3 = 2//3 = 0, and subtracting 0 leaves a at 11."
  },
  {
    "id": 52,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the following expression:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result=8//6%5+2**3-2<br>print(result)</div><br>What is the result?",
    "options": [
      "A. 6",
      "B. 7",
      "C. 8",
      "D. 9"
    ],
    "answer": "B. 7",
    "explanation": "Exponentiation runs first, so 2**3 is 8; then // and % share the next precedence level and evaluate left to right, giving 8//6 = 1 and 1%5 = 1. Finally the additions and subtractions run left to right: 1 + 8 - 2 = 7."
  },
  {
    "id": 53,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Which of the following expressions will generate the maximum value?",
    "options": [
      "A. 8%3*4",
      "B. 8-3*4",
      "C. 8//3*4",
      "D. 8/3*4"
    ],
    "answer": "D. 8/3*4",
    "explanation": "%, //, / and * all share the same precedence and evaluate left to right, so each expression is computed as (first operation) then *4. 8/3*4 uses true division and gives about 10.67, the largest value; 8%3*4 and 8//3*4 both give 8, and 8-3*4 gives -4 because * binds tighter than the subtraction."
  },
  {
    "id": 54,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Which expression would evaluate to 2?",
    "options": [
      "A. 3**2",
      "B. 22%5",
      "C. 13//4",
      "D. 11/2"
    ],
    "answer": "B. 22%5",
    "explanation": "The modulo operator returns the remainder, and 22 divided by 5 leaves a remainder of 2. 3**2 is 9, 13//4 floor-divides to 3, and 11/2 is the float 5.5."
  },
  {
    "id": 55,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=7<br>b=3<br>c=5<br>d=1</div>Which line of code assigns 9 to output?",
    "options": [
      "A. output=a%c+1",
      "B. output=a+c//d",
      "C. output=c*d-1",
      "D. output=a+d*2"
    ],
    "answer": "D. output=a+d*2",
    "explanation": "Multiplication has higher precedence than addition, so a+d*2 is 7+(1*2), which is 9. Option A gives 7%5+1 = 3, option B gives 7+(5//1) = 12, and option C gives (5*1)-1 = 4."
  },
  {
    "id": 56,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x=3<br>x += 1<br>#Line-1</div>Which statement should be inserted at Line-1 so that the value of x becomes 16?",
    "options": [
      "A. x+=2",
      "B. x-=2",
      "C. x*=2",
      "D. x**=2"
    ],
    "answer": "D. x**=2",
    "explanation": "After x += 1 the value of x is 4, and x **= 2 raises it to the power of 2, giving 16. Adding 2 gives 6, subtracting 2 gives 2, and multiplying by 2 gives only 8."
  },
  {
    "id": 57,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Which expression evaluates to 4?",
    "options": [
      "A. 7/2*3",
      "B. 7%2+3",
      "C. 7//2-3",
      "D. 7-2*3"
    ],
    "answer": "B. 7%2+3",
    "explanation": "Modulo binds tighter than addition, so 7%2+3 is (7%2)+3, which is 1+3 = 4. Option A gives 10.5, option C gives (7//2)-3 = 0, and option D gives 7-(2*3) = 1."
  },
  {
    "id": 58,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the following expression:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>6//4%5+2**3-2//3</div>This expression results in:",
    "options": [
      "A. 9",
      "B. 3",
      "C. -1",
      "D. 25"
    ],
    "answer": "A. 9",
    "explanation": "** is evaluated first (2**3 = 8), then // and % left to right ((6//4)%5 = 1%5 = 1 and 2//3 = 0), and finally + and - left to right: 1+8-0 = 9. Answers such as 3 or 25 come from evaluating strictly left to right, which applies the + and - before the exponent; Python evaluates ** first."
  },
  {
    "id": 59,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x=2<br>y=6<br>x+=2**3<br>x//=y//2//3<br>print(x)</div>What is the output?",
    "options": [
      "A. 0",
      "B. 9",
      "C. 10",
      "D. 7"
    ],
    "answer": "C. 10",
    "explanation": "x += 2**3 evaluates the exponent first, so x becomes 2+8 = 10. The right side y//2//3 evaluates left to right as (6//2)//3 = 3//3 = 1, so x //= 1 leaves x at 10."
  },
  {
    "id": 60,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x=3/3+3**3-3<br>print(x)</div>What is the output?",
    "options": [
      "A. 25",
      "B. 32",
      "C. 0.11",
      "D. 25.0"
    ],
    "answer": "D. 25.0",
    "explanation": "** is applied first (3**3 = 27), then / (3/3 = 1.0), giving 1.0+27-3 = 25.0. Because true division always produces a float, the result prints as 25.0 rather than the integer 25."
  },
  {
    "id": 61,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "In which of the following cases will True be printed to the console? (Choose 2.)",
    "options": [
      "A. a=45<br>b=45<br>print(a is not b)",
      "B. s1='Python'<br>s2='Python'.upper()<br>print(s1 is s2)",
      "C. x=[1,2,3]<br>y=[1,2,3]<br>print(x is y)",
      "D. print('r' in 'durga')",
      "E. print('is' in 'This IS a Fake News')"
    ],
    "answer": [
      "D. print('r' in 'durga')",
      "E. print('is' in 'This IS a Fake News')"
    ],
    "explanation": "The in operator tests for a substring, and both 'r' in 'durga' and 'is' in 'This IS a Fake News' are true, since the word This ends with the letters i and s. In option A small integers are cached so a is b, making a is not b False; in option B upper() builds a new string object; and in option C two equal lists are still two distinct objects, so is returns False."
  },
  {
    "id": 62,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "You evaluate the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numList = [0,1,2,3,4]<br>print(5 in numList)</div>What is the output of the print statement?",
    "options": [
      "A. 4",
      "B. False",
      "C. True",
      "D. 5"
    ],
    "answer": "B. False",
    "explanation": "The containment operator in returns a boolean, not an element or an index. The list holds 0 through 4, so 5 is not a member and the expression evaluates to False."
  },
  {
    "id": 63,
    "domain": "Operator precedence",
    "type": "fill_in_blank",
    "question": "You develop an application for your company. You have the following code. Line numbers are included for reference only.<br>01 def main(a,b,c,d):<br>02&nbsp;&nbsp;&nbsp;&nbsp;value = a+b*c-d<br>03&nbsp;&nbsp;&nbsp;&nbsp;return value<br><br>Use the drop-down menus to select the answer choice that answers each question based on the information presented in the code segment.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Which part of the expression will be evaluated first? ____<br>Which operation will be evaluated second? ____<br>Which expression is equivalent to the expression in the function? ____</div>",
    "options": {
      "evaluated_first": [
        "a+b",
        "b*c",
        "c-d"
      ],
      "second_operation": [
        "addition",
        "subtraction",
        "multiplication"
      ],
      "equivalent_expression": [
        "(a+b) * (c-d)",
        "(a + (b*c)) - d",
        "a + ((b * c) - d)"
      ]
    },
    "answer": {
      "evaluated_first": "b*c",
      "second_operation": "addition",
      "equivalent_expression": "(a + (b*c)) - d"
    },
    "explanation": "Multiplication has higher precedence than addition and subtraction, so b*c is computed first. Addition and subtraction share the same precedence and associate left to right, so the addition a + (b*c) happens second and the subtraction of d last, which is exactly the grouping ((a + (b*c)) - d)."
  },
  {
    "id": 64,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "Consider the expression:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result=a-b*c+d</div>Which of the following statements are valid? (Choose 2.)",
    "options": [
      "A. First b*c will be evaluated followed by subtraction and addition",
      "B. First b*c will be evaluated followed by addition and subtraction",
      "C. First a-b will be evaluated followed by multiplication and addition",
      "D. The above expression is equivalent to a-(b*c)+d"
    ],
    "answer": [
      "A. First b*c will be evaluated followed by subtraction and addition",
      "D. The above expression is equivalent to a-(b*c)+d"
    ],
    "explanation": "Multiplication outranks both + and -, so b*c is evaluated first, which is the same as writing a-(b*c)+d. The remaining + and - share one precedence level and associate left to right, so the subtraction runs before the addition, making option B's order wrong and ruling out option C entirely."
  },
  {
    "id": 65,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=2<br>a += 1<br># Line-1</div>To make the value of a equal to 9, which expression is required at Line-1?",
    "options": [
      "A. a*=2",
      "B. a**=2",
      "C. a+=2",
      "D. a-=2"
    ],
    "answer": "B. a**=2",
    "explanation": "After a += 1 the value of a is 3, and a **= 2 squares it to 9. Multiplying by 2 gives 6, adding 2 gives 5, and subtracting 2 gives 1."
  },
  {
    "id": 66,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=1<br>b=3<br>c=5<br>d=7</div>In which of the following cases is the value of result 0? (Choose 2.)",
    "options": [
      "A. result = a+b*2",
      "B. result = a%b-1",
      "C. result = a-b//d",
      "D. result = a**d-1"
    ],
    "answer": [
      "B. result = a%b-1",
      "D. result = a**d-1"
    ],
    "explanation": "% and ** both bind tighter than the trailing subtraction, so a%b-1 is (1%3)-1 = 0 and a**d-1 is (1**7)-1 = 0. Option A gives 1+(3*2) = 7 and option C gives 1-(3//7) = 1-0 = 1."
  },
  {
    "id": 67,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "In which of the following cases will we get the same result? (Choose 3.)",
    "options": [
      "A. 23%5",
      "B. 3**1",
      "C. 11/3",
      "D. 13//4"
    ],
    "answer": [
      "A. 23%5",
      "B. 3**1",
      "D. 13//4"
    ],
    "explanation": "23%5 leaves remainder 3, 3**1 is 3, and 13//4 floor-divides to 3, so those three agree. 11/3 uses true division and produces the float 3.666..., which is not equal to 3."
  },
  {
    "id": 68,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=1<br>b=2<br>c=4<br>d=6</div>Which of the following expressions results in -4?",
    "options": [
      "A. (a+b)//c%d",
      "B. (b+c)//a%d",
      "C. (a+b)//c*d",
      "D. (a+b)//d-c"
    ],
    "answer": "D. (a+b)//d-c",
    "explanation": "Parentheses run first, so (1+2)//6 is 0, and the lower-precedence subtraction then gives 0-4 = -4. Options A, B and C all evaluate to 0 because 3//4 is 0, 6%6 is 0, and 0*6 is 0."
  },
  {
    "id": 69,
    "domain": "Operator precedence",
    "type": "true_false",
    "question": "You are developing a Python application for your company. You write the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numList = [1,2,3,4,5]<br>alphaList = [\"a\",\"b\",\"c\",\"d\",\"e\"]<br>print(numList is alphaList)<br>print(numList == alphaList)<br>numList = alphaList<br>print(numList is alphaList)<br>print(numList == alphaList)</div>For each of the following statements, select True if the statement is correct. Otherwise, select False.",
    "options": {
      "statement1": "The first print statement displays True.",
      "statement2": "The second print statement displays True.",
      "statement3": "The third print statement displays True.",
      "statement4": "The fourth print statement displays True."
    },
    "answer": {
      "statement1": "False: The first print statement displays True.",
      "statement2": "False: The second print statement displays True.",
      "statement3": "True: The third print statement displays True.",
      "statement4": "True: The fourth print statement displays True."
    },
    "explanation": "Before the assignment the two lists are separate objects with different contents, so is prints False and == prints False. After numList = alphaList both names refer to the same list object, so is prints True, and an object is always equal to itself, so == prints True as well."
  },
  {
    "id": 70,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>subjects=['java','python','sap']<br>more_subjects=['java','python','sap']<br>extra_subjects=more_subjects</div>In which cases will True be printed to the console? (Choose 2.)",
    "options": [
      "A. print(extra_subjects is more_subjects)",
      "B. print(subjects is more_subjects)",
      "C. print(subjects is extra_subjects)",
      "D. print(subjects == extra_subjects)"
    ],
    "answer": [
      "A. print(extra_subjects is more_subjects)",
      "D. print(subjects == extra_subjects)"
    ],
    "explanation": "The assignment extra_subjects = more_subjects binds a second name to the same list object, so is returns True for that pair, and == compares contents so it is True for the two identical lists. Options B and C use is on lists that were built separately, which are distinct objects even though their contents match."
  },
  {
    "id": 71,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numbers=[10,20,30,40]<br>x=0</div>In which of the following cases will 10 be printed to the console? (Choose 2.)",
    "options": [
      "A. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+5<br>print(x)",
      "B. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i not in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+5<br>print(x)",
      "C. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i not in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+10<br>print(x)",
      "D. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+10<br>print(x)"
    ],
    "answer": [
      "A. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+5<br>print(x)",
      "C. for i in (30,40,50):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i not in numbers:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=x+10<br>print(x)"
    ],
    "explanation": "Of the values 30, 40 and 50, exactly two are in numbers and exactly one is not. Option A adds 5 twice for the two matches and option C adds 10 once for the single non-match, so both print 10; option B prints 5 and option D prints 20."
  },
  {
    "id": 72,
    "domain": "Operator precedence",
    "type": "multiple_select",
    "question": "Which of the following code snippets will produce the output shown below? (Choose 2.)<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Boy<br>Cat<br>Dog</div>",
    "options": [
      "A. l=['Apple','Boy','Cat','Dog']<br>for x in l:<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(x) == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(x)",
      "B. l=['Apple','Boy','Cat','Dog']<br>for x in l:<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(x) != 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(x)",
      "C. l=['Apple','Boy','Cat','Dog']<br>for x in l:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)",
      "D. l=['Apple','Boy','Cat','Dog']<br>l1=l[1:]<br>for x in l1:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)"
    ],
    "answer": [
      "A. l=['Apple','Boy','Cat','Dog']<br>for x in l:<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(x) == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(x)",
      "D. l=['Apple','Boy','Cat','Dog']<br>l1=l[1:]<br>for x in l1:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x)"
    ],
    "explanation": "Boy, Cat and Dog are the three-letter items and also the items from index 1 onward, so filtering on len(x) == 3 and slicing with l[1:] both yield the same three names in order. Option B keeps only Apple, and option C prints all four items including Apple."
  },
  {
    "id": 73,
    "domain": "Operator precedence",
    "type": "ordering",
    "question": "The ABC company is converting an existing application to Python. You are creating documentation that will be used by several interns who are working on the team. You need to ensure that arithmetic expressions are coded correctly. What is the correct order of operations for the six classes of operations, ordered from first to last in order of precedence?<br>1st (evaluated first) &rarr; ____<br>2nd &rarr; ____<br>3rd &rarr; ____<br>4th &rarr; ____<br>5th &rarr; ____<br>6th (evaluated last) &rarr; ____",
    "options": [
      "Parenthesis",
      "Exponents",
      "And",
      "Multiplication and Division",
      "Addition and Subtraction",
      "Unary positive, negative, not"
    ],
    "answer": [
      "Parenthesis",
      "Exponents",
      "Unary positive, negative, not",
      "Multiplication and Division",
      "Addition and Subtraction",
      "And"
    ],
    "explanation": "Parentheses always override precedence, then exponentiation, then the unary sign and not operators, then multiplication and division, then addition and subtraction, and finally the logical and. Placing and anywhere but last is the common mistake, because logical operators are evaluated after every arithmetic operator."
  },
  {
    "id": 74,
    "domain": "Operator precedence",
    "type": "ordering",
    "question": "You are writing a Python program that evaluates an arithmetic formula. The formula is described as b equals a multiplied by negative one, then raised to the second power, where a is the value that will be input and b is the result. You create the following code segment; line numbers are included for reference only.<br>01 a = eval(input('Enter a number for the equation: '))<br>02 b =<br><br>You need to ensure that the result is correct. Drag the appropriate code segments into the five slots of line 02, in order.<br>Slot 1 &rarr; ____<br>Slot 2 &rarr; ____<br>Slot 3 &rarr; ____<br>Slot 4 &rarr; ____<br>Slot 5 &rarr; ____",
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
    "explanation": "The negation must be applied before the exponent, so a is negated inside parentheses and the whole grouped value is squared, giving b = (-a) ** 2. Without the parentheses Python applies ** before the unary minus, so -a ** 2 would compute the negative of a squared instead."
  },
  {
    "id": 75,
    "domain": "Operator precedence",
    "type": "fill_in_blank",
    "question": "You are developing a Python program that compares numbers. You need to ensure that you are using the correct comparison operators. Evaluate each expression and indicate the correct result.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>0 or 5 &rarr; ____<br>bool(0) &rarr; ____<br>None is None &rarr; ____<br>-5 &lt; 0 &lt; 5 &rarr; ____</div>",
    "options": {
      "zero_or_five": [
        "True",
        "False",
        "5",
        "None"
      ],
      "bool_of_zero": [
        "True",
        "False",
        "5",
        "None"
      ],
      "none_is_none": [
        "True",
        "False",
        "5",
        "None"
      ],
      "chained_comparison": [
        "True",
        "False",
        "5",
        "None"
      ]
    },
    "answer": {
      "zero_or_five": "5",
      "bool_of_zero": "False",
      "none_is_none": "True",
      "chained_comparison": "True"
    },
    "explanation": "The or operator returns one of its operands rather than a boolean, and since 0 is falsy it returns the object 5. bool(0) converts the falsy 0 to False, None is None compares an object with itself and is True, and the chained comparison is True because -5 is less than 0 and 0 is less than 5."
  },
  {
    "id": 76,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "What will be the value of X in the following Python expression?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>X = 2+9*((3*12)-8)/10</div>",
    "options": [
      "A. 30.0",
      "B. 30.8",
      "C. 28.4",
      "D. 27.2"
    ],
    "answer": "D. 27.2",
    "explanation": "The innermost parentheses give 3*12 = 36, then 36-8 = 28. Multiplication and division then run left to right, so 9*28 = 252 and 252/10 = 25.2, and the final addition gives 2+25.2 = 27.2."
  },
  {
    "id": 77,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Operators with the same precedence are evaluated in which manner?",
    "options": [
      "A. Left to Right",
      "B. Right to Left",
      "C. Can't say",
      "D. None of the mentioned"
    ],
    "answer": "A. Left to Right",
    "explanation": "Python's arithmetic and comparison operators are left-associative, so equal-precedence operators such as * and / or + and - are applied from left to right. Right-to-left associativity applies only to a few special cases such as exponentiation and assignment, not to operators in general."
  },
  {
    "id": 78,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "You are writing a Python program that evaluates an arithmetic expression. The expression is described as b equals a multiplied by negative one, then raised to the second power, where a is the value that will be input and b is the result.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=eval(input('Enter a number for the expression:'))</div>Which of the following is a valid expression for the given requirement?",
    "options": [
      "A. b = (a) ** -2",
      "B. b = (-a) ** 2",
      "C. b = (a-) ** 2",
      "D. b = -(a) ** 2"
    ],
    "answer": "B. b = (-a) ** 2",
    "explanation": "Negating a inside parentheses first and then squaring the grouped value matches the described formula, so b = (-a) ** 2 is correct. Option A raises a to the power of -2, option C is a syntax error, and option D squares a before applying the minus because ** binds tighter than a leading unary minus."
  },
  {
    "id": 79,
    "domain": "Operator precedence",
    "type": "multiple_choice",
    "question": "Which expression evaluates to 4?",
    "options": [
      "A. 7//2-3",
      "B. 7%2+3",
      "C. 7/2*3",
      "D. 7-2*3"
    ],
    "answer": "B. 7%2+3",
    "explanation": "Modulo has higher precedence than addition, so 7%2+3 is (7%2)+3 = 1+3 = 4. Option A gives 3-3 = 0, option C gives 3.5*3 = 10.5, and option D gives 7-6 = 1."
  },
  {
    "id": 80,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Evaluate the following arithmetic expression:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>(3*(1+2)**2 - (2**2)*3)</div>What is the result?",
    "options": [
      "A. 3",
      "B. 13",
      "C. 15",
      "D. 69"
    ],
    "answer": "C. 15",
    "explanation": "Python evaluates parentheses first, then ** (exponent), then * and /, and finally + and -. So (1+2)**2 is 9 and 3*9 is 27, while (2**2)*3 is 4*3 = 12, giving 27 - 12 = 15. The answer 69 would only appear if you multiplied 3*(1+2) before applying the exponent, but ** binds tighter than *."
  },
  {
    "id": 81,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the following expression:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>result = (2*(3+4)**2-(3**3)*3)</div>What is the value of result?",
    "options": [
      "A. 17",
      "B. 16",
      "C. 18",
      "D. 19"
    ],
    "answer": "A. 17",
    "explanation": "Parentheses are resolved first, then exponentiation, then multiplication, then subtraction. (3+4)**2 is 49 so 2*49 = 98, and 3**3 is 27 so 27*3 = 81, leaving 98 - 81 = 17. Answers such as 16 or 18 come from applying * before ** or from mis-squaring 7."
  },
  {
    "id": 82,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Which of the following expressions results in an error?",
    "options": [
      "A. float('10')",
      "B. int('10')",
      "C. float('10.8')",
      "D. int('10.8')"
    ],
    "answer": "D. int('10.8')",
    "explanation": "int() only accepts a string that is a valid whole-number literal, so int('10.8') raises ValueError: invalid literal for int() with base 10. float() happily parses both '10' and '10.8', and int('10') is a valid integer literal, so those three succeed."
  },
  {
    "id": 83,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = '10'<br>y = '20'</div>What is the type of x+y?",
    "options": [
      "A. int",
      "B. float",
      "C. str",
      "D. complex"
    ],
    "answer": "C. str",
    "explanation": "Both x and y are string literals, so + is the concatenation operator rather than addition: x+y produces '1020', whose type is str. Python never silently converts numeric-looking strings to numbers, so int and float are wrong."
  },
  {
    "id": 84,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = float('123.456')</div>Which expression evaluates to 2?",
    "options": [
      "A. int(a)+False",
      "B. bool(a)+True",
      "C. str(a)",
      "D. bool(a)"
    ],
    "answer": "B. bool(a)+True",
    "explanation": "bool is a subclass of int, so True counts as 1 and False as 0 in arithmetic. bool(123.456) is True, so bool(a)+True is 1+1 = 2. int(a)+False is 123+0 = 123, str(a) is the string '123.456', and bool(a) alone is just True (1)."
  },
  {
    "id": 85,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) x = 'Durga'<br>2) y = 'Durga'<br>3) result = condition<br>4) print(result)</div>For which of the following conditions will True be printed to the console?",
    "options": [
      "A. x is y",
      "B. x is not y",
      "C. x != y",
      "D. x &lt; y"
    ],
    "answer": "A. x is y",
    "explanation": "CPython interns short identifier-like string literals, so both names refer to the very same string object and x is y evaluates to True. Because the two strings are also equal in value, x is not y and x != y are both False, and x is not alphabetically before y so x &lt; y is False too."
  },
  {
    "id": 86,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) x = 8<br>2) y = 10<br>3) result = x//3*3/2+y%2**2<br>4) print(result)</div>What is the result?",
    "options": [
      "A. 5",
      "B. 5.0",
      "C. 6.0",
      "D. 7.0"
    ],
    "answer": "B. 5.0",
    "explanation": "** binds tighter than %, and //, * , / and % all share the same precedence and evaluate left to right. So 8//3 = 2, 2*3 = 6, 6/2 = 3.0 (true division always yields a float), and 10 % (2**2) = 10 % 4 = 2, giving 3.0 + 2 = 5.0. The value is a float, so the integer 5 is not what is printed."
  },
  {
    "id": 87,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) l1=['sunny','bunny','chinny','vinny']<br>2) l2=['sunny','bunny','chinny','vinny']<br>3) print(l1 is not l2)<br>4) print(l1 != l2)<br>5) l1=l2<br>6) print(l1 is not l2)<br>7) print(l1 != l2)</div>What is the result?",
    "options": [
      "A. True, True, False, False",
      "B. True, False, True, False",
      "C. True, False, False, True",
      "D. True, False, False, False"
    ],
    "answer": "D. True, False, False, False",
    "explanation": "is not compares object identity while != compares values. Lines 1 and 2 build two separate list objects with equal contents, so l1 is not l2 is True but l1 != l2 is False. After l1 = l2 both names point to the same object, so both the identity test and the inequality test become False."
  },
  {
    "id": 88,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) l1=['sunny','bunny','chinny','vinny']<br>2) l2=['sunny','bunny','chinny','vinny']<br>3) print(l1 is l2)<br>4) print(l1 == l2)<br>5) l1=l2<br>6) print(l1 is l2)<br>7) print(l1 == l2)</div>What is the result?",
    "options": [
      "A. False, True, True, True",
      "B. False, False, True, True",
      "C. False, True, False, True",
      "D. False, True, True, False"
    ],
    "answer": "A. False, True, True, True",
    "explanation": "Two list literals with the same contents are still two distinct objects, so l1 is l2 is False while l1 == l2 is True. The assignment l1 = l2 rebinds l1 to the same object, after which both the identity test and the equality test are True."
  },
  {
    "id": 89,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) print(10==10 and 20!=20)<br>2) print(10==10 or 20!=20)<br>3) print( not 10==10)</div>What is the result?",
    "options": [
      "A. True, True, False",
      "B. False, True, True",
      "C. False, True, False",
      "D. False, False, False"
    ],
    "answer": "C. False, True, False",
    "explanation": "Comparison operators run before the logical operators. 10==10 is True and 20!=20 is False, so and yields False while or yields True. In line 3, not applies to the result of 10==10, which is True, so not True prints False."
  },
  {
    "id": 90,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) print(not 0)<br>2) print(not 10)<br>3) print(not '')<br>4) print(not 'durga')<br>5) print(not None)</div>What is the result?",
    "options": [
      "A. True, False, False, False, True",
      "B. True, False, True, False, True",
      "C. False, False, True, False, True",
      "D. True, False, True, False, False"
    ],
    "answer": "B. True, False, True, False, True",
    "explanation": "not returns True for falsy values and False for truthy ones. The number 0, the empty string, and None are all falsy, so those three print True; the non-zero number 10 and the non-empty string 'durga' are truthy, so they print False."
  },
  {
    "id": 91,
    "domain": "Selecting operators",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) lst = [7, 8, 9]<br>2) b = lst[:]<br>3) print(b is lst)<br>4) print(b == lst)</div>What is the result?",
    "options": [
      "A. False, True",
      "B. False, False",
      "C. True, False",
      "D. True, True"
    ],
    "answer": "A. False, True",
    "explanation": "A full slice lst[:] builds a brand-new list object that shares the same elements, so b is lst is False. Because the two lists hold equal items in the same order, b == lst is True. Only a plain assignment such as b = lst would make the identity test True."
  },
  {
    "id": 93,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "A classmate has asked you to debug the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 4<br>while x &gt;= 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;if x % 4 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"party\")<br>&nbsp;&nbsp;&nbsp;&nbsp;elif x - 2 &lt; 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"cake\")<br>&nbsp;&nbsp;&nbsp;&nbsp;elif x / 3 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"greeting\")<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"birthday\")<br>&nbsp;&nbsp;&nbsp;&nbsp;x = x - 1</div>What is the output that is printed to the screen?",
    "options": [
      "A. birthday, party, greeting, cake",
      "B. party, birthday, birthday, cake",
      "C. party, greeting, birthday, cake",
      "D. birthday, greeting, party, cake"
    ],
    "answer": "B. party, birthday, birthday, cake",
    "explanation": "The loop runs for x = 4, 3, 2, 1 and only the first matching branch of the if/elif chain executes. x=4 satisfies x % 4 == 0 so it prints party; x=3 and x=2 fail every test (3/3 is 1.0, not 0) so both fall to else and print birthday; x=1 makes x-2 negative so it prints cake. The greeting branch can never fire because x / 3 is never exactly 0 for these values."
  },
  {
    "id": 94,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You are writing a Python application for a dance studio. The studio wants to encourage youth and seniors to sign up. Minors and seniors must receive a 10% discount.<br>You write the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def get_discount(minor, senior):<br>02 &nbsp;&nbsp;&nbsp;&nbsp;discount = .1<br>03 &nbsp;&nbsp;&nbsp;&nbsp;____<br>04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;discount = 0<br>05 &nbsp;&nbsp;&nbsp;&nbsp;return discount</div>You need to complete the code. Which code should you add on line 03?",
    "options": [
      "A. if not (minor and senior):",
      "B. if not (minor or senior):",
      "C. if (not minor) and senior:",
      "D. if (not minor) or senior:"
    ],
    "answer": "B. if not (minor or senior):",
    "explanation": "discount starts at 0.1 and line 04 wipes it out, so the condition must be true only for people who are neither minors nor seniors: not (minor or senior). Option A, not (minor and senior), is true for a person who is only a minor, so it would wrongly remove that discount; options C and D are true for seniors, which also removes a discount they are entitled to."
  },
  {
    "id": 95,
    "domain": "Branching statements",
    "type": "true_false",
    "question": "You are creating a Python program that compares numbers. You create the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 num1 = eval(input(\"Please enter the first number: \"))<br>02 num2 = eval(input(\"Please enter the second number: \"))<br>03 if num1 == num2:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;print(\"The two numbers are equal. \")<br>05 if num1 &lt;= num2:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;print(\"Number 1 is less than number 2. \")<br>07 if num1 &gt; num2:<br>08 &nbsp;&nbsp;&nbsp;&nbsp;print(\"Number 1 is greater than number 2. \")<br>09 if num2 = num1:<br>10 &nbsp;&nbsp;&nbsp;&nbsp;print(\"The two numbers are the same. \")</div>You need to ensure that the comparisons are accurate. For each of the following statements, select True if the statement is true. Otherwise, select False.",
    "options": {
      "statement1": "The print statement at line 04 will only print if the two numbers are equal in value.",
      "statement2": "The print statement at line 06 will only print if num1 is less than num2.",
      "statement3": "The print statement at line 08 will only print if num1 is greater than num2.",
      "statement4": "The statement at line 09 is an invalid comparison."
    },
    "answer": {
      "statement1": "True: The print statement at line 04 will only print if the two numbers are equal in value.",
      "statement2": "False: The print statement at line 06 will only print if num1 is less than num2.",
      "statement3": "True: The print statement at line 08 will only print if num1 is greater than num2.",
      "statement4": "True: The statement at line 09 is an invalid comparison."
    },
    "explanation": "Line 03 uses ==, which is true only when the values are equal, so statement 1 holds. Line 05 uses the less-than-or-equal operator, so its message also appears when the two numbers are equal, which makes statement 2 false. Line 07 uses a strict greater-than test, so statement 3 holds, and line 09 uses a single = which is assignment, not comparison, so Python raises a SyntaxError and statement 4 holds."
  },
  {
    "id": 96,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You are developing a loan collection agent application. Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) collected_amount=3000<br>2) commission=0<br>3) if collected_amount &lt;= 2000:<br>4) &nbsp;&nbsp;&nbsp;&nbsp;commission=50<br>5) elif collected_amount &gt; 2500 and collected_amount &lt; 3000:<br>6) &nbsp;&nbsp;&nbsp;&nbsp;commission=100<br>7) elif collected_amount &gt; 2500:<br>8) &nbsp;&nbsp;&nbsp;&nbsp;commission=150<br>9) if collected_amount &gt;= 3000:<br>10) &nbsp;&nbsp;&nbsp;commission+=200</div>What will be the value of commission?",
    "options": [
      "A. 350",
      "B. 200",
      "C. 150",
      "D. 100"
    ],
    "answer": "A. 350",
    "explanation": "In the first chain 3000 is not less than or equal to 2000, and the second test fails because 3000 is not less than 3000, so the third branch sets commission to 150. Line 9 starts a brand-new if statement rather than continuing the chain, so it also runs and adds 200, giving 350. Answering 150 assumes line 9 is part of the earlier elif chain, which it is not."
  },
  {
    "id": 97,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You are developing an online shopping application. Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 order_value = 1500<br>02 state = 'ap'<br>03 delivery_charge = 0<br>04 if state in ['up', 'mp', 'ts']:<br>05 &nbsp;&nbsp;&nbsp;&nbsp;if order_value &lt;= 1000:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge = 50<br>07 &nbsp;&nbsp;&nbsp;&nbsp;elif 1000 &lt; order_value &lt; 2000:<br>08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge = 100<br>09 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge = 150<br>11 else:<br>12 &nbsp;&nbsp;&nbsp;&nbsp;delivery_charge = 25<br>13 if state in ['lp', 'kp', 'ap']:<br>14 &nbsp;&nbsp;&nbsp;&nbsp;if order_value &gt; 1000:<br>15 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge += 20<br>16 &nbsp;&nbsp;&nbsp;&nbsp;if order_value &lt; 2000 and state in ['kp', 'ap']:<br>17 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge += 30<br>18 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>19 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery_charge += 15<br>20 print(delivery_charge)</div>What is the result?",
    "options": [
      "A. 65",
      "B. 75",
      "C. 85",
      "D. 55"
    ],
    "answer": "B. 75",
    "explanation": "'ap' is not in the first list, so the else on line 11 sets delivery_charge to 25. 'ap' is in the second list, and 1500 is greater than 1000, so line 15 adds 20 to give 45; the test on line 16 is also true, so line 17 adds 30 for a total of 75. The else on line 18 belongs to the if on line 16, so its 15 is never added."
  },
  {
    "id": 98,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You are designing a decision structure to convert a student's numeric grade to a letter grade. The program must assign a letter grade as specified in the following table:<br>90 through 100 &rarr; A<br>80 through 89 &rarr; B<br>70 through 79 &rarr; C<br>65 through 69 &rarr; D<br>0 through 64 &rarr; F<br><br>For example, if the user enters 90 the output should be \"Your letter grade is : A\", and if a user enters 89 the output should be \"Your letter grade is : B\".<br><br>How should you complete the code? To answer, select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Letter Grade converter<br>grade = int(input(\"Enter a numeric grade\"))<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;letter_grade = 'A'<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;letter_grade = 'B'<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;letter_grade = 'C'<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;letter_grade = 'D'<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;letter_grade = 'F'<br>print(\"Your letter grade is : \", letter_grade)</div>",
    "options": {
      "grade_a_condition": [
        "if grade >= 90:",
        "if grade <= 90:",
        "if grade > 90:",
        "elif grade >= 90:"
      ],
      "grade_b_condition": [
        "elif grade >= 80:",
        "elif grade > 80:",
        "if grade >= 80:",
        "elif grade <= 80:"
      ],
      "grade_c_condition": [
        "elif grade >= 70:",
        "elif grade > 70:",
        "if grade >= 70:",
        "elif grade <= 70:"
      ],
      "grade_d_condition": [
        "elif grade >= 65:",
        "elif grade > 65:",
        "if grade >= 65:",
        "elif grade <= 65:"
      ]
    },
    "answer": {
      "grade_a_condition": "if grade >= 90:",
      "grade_b_condition": "elif grade >= 80:",
      "grade_c_condition": "elif grade >= 70:",
      "grade_d_condition": "elif grade >= 65:"
    },
    "explanation": "A grade-band decision must be a single if/elif/else chain tested from the highest boundary downward, so that once a branch matches the rest are skipped. Starting with a greater-than-or-equal test against 90 and then using elif for 80, 70 and 65 gives exactly one letter per score, and the trailing else catches everything below 65 as F. Using separate if statements would let a later branch overwrite the grade, and a strict greater-than test would misclassify boundary values such as 90 and 80."
  },
  {
    "id": 99,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You are writing a Python script to convert student marks into a grade. The grades are defined as follows:<br>90 through 100 &rarr; A grade<br>80 through 89 &rarr; B grade<br>70 through 79 &rarr; C grade<br>65 through 69 &rarr; D grade<br>0 through 64 &rarr; E grade<br><br>The developed application is:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 #Grade converter<br>02 marks=int(input(\"Enter Student marks:\"))<br>03 if marks &gt;= 90:<br>04 &nbsp;&nbsp;&nbsp;&nbsp;grade = 'A'<br>05 if marks &gt;= 80:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;grade = 'B'<br>07 if marks &gt;= 70:<br>08 &nbsp;&nbsp;&nbsp;&nbsp;grade = 'C'<br>09 if marks &gt;= 65:<br>10 &nbsp;&nbsp;&nbsp;&nbsp;grade = 'D'<br>11 else:<br>12 &nbsp;&nbsp;&nbsp;&nbsp;grade = 'E'<br>13 print(\"Your grade is : \", grade)</div>Which of the following changes should be performed to fulfill the requirement?",
    "options": [
      "A. Line 3 should be replaced with if marks &lt;= 90:",
      "B. Line 5 should be replaced with if marks &gt;= 80 and marks &lt;= 90:",
      "C. Line 7 should be replaced with if marks &gt;= 70 and marks &lt;= 80:",
      "D. Lines 5, 7, and 9 should be replaced with elif statements."
    ],
    "answer": "D. Lines 5, 7, and 9 should be replaced with elif statements.",
    "explanation": "As written, lines 3, 5, 7 and 9 are four independent if statements, so a mark of 95 satisfies all of them and grade ends up as 'D'. Turning lines 5, 7 and 9 into elif makes them one chain, so the first matching band wins and the final else correctly assigns 'E'. Narrowing individual conditions, as options A, B and C do, still leaves the later independent ifs free to overwrite the grade."
  },
  {
    "id": 100,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You are developing a school automation application. If a student's marks are between 80 and 100 inclusive, you have to offer the 'A' grade. Which code block should you use?",
    "options": [
      "A. if marks &gt;= 80 and marks &gt;= 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade='A'",
      "B. if marks &gt;= 80 or marks &lt;= 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade='A'",
      "C. if 80 &lt;= marks &lt;= 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade='A'",
      "D. if marks &gt; 80:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade='A'"
    ],
    "answer": "C. if 80 &lt;= marks &lt;= 100:<br>&nbsp;&nbsp;&nbsp;&nbsp;grade='A'",
    "explanation": "Python supports chained comparisons, so 80 &lt;= marks &lt;= 100 is exactly the closed range required and is true only for 80 through 100. Option A requires marks to be at least 100, option B is true for every possible number because at least one side always holds, and option D excludes 80 itself while accepting anything above 100."
  },
  {
    "id": 101,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) marks=[30,40,50,45,50,100]<br>2) average=sum(marks)//len(marks)<br>3) grades={1:'A',2:'B',3:'C',4:'D'}<br>4) if average &gt;= 90 and average &lt;= 100:<br>5) &nbsp;&nbsp;&nbsp;key=1<br>6) elif average &gt;= 80 and average &lt; 90:<br>7) &nbsp;&nbsp;&nbsp;key=2<br>8) elif average &gt;= 50 and average &lt; 80:<br>9) &nbsp;&nbsp;&nbsp;key=3<br>10) else:<br>11) &nbsp;&nbsp;key=4<br>12) print(grades[key])</div>Which grade will be printed to the console?",
    "options": [
      "A. A",
      "B. B",
      "C. C",
      "D. D"
    ],
    "answer": "C. C",
    "explanation": "The marks total 315 and floor division by the 6 elements gives an average of 52. That value fails the first two branches and satisfies the third one, so key becomes 3 and grades[3] prints C. Answer D would require the average to fall below 50, which floor division does not produce here."
  },
  {
    "id": 103,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You are coding a math utility by using Python. You are writing a function to compute roots. The function must meet the following requirements:<br>&bull; If a is non-negative, return a**(1/b)<br>&bull; If a is negative and even, return \"Result is an imaginary number\"<br>&bull; If a is negative and odd, return -(-a)**(1/b)<br><br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def safe_root(a, b):<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = a**(1/b)<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = \"Result is an imaginary number\"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer = -(-a)**(1/b)<br>&nbsp;&nbsp;&nbsp;&nbsp;return answer</div>",
    "options": {
      "outer_if": [
        "if a >= 0:",
        "if a % 2 == 0:",
        "else:",
        "elif:"
      ],
      "outer_else": [
        "if a >= 0:",
        "if a % 2 == 0:",
        "else:",
        "elif:"
      ],
      "inner_if": [
        "if a >= 0:",
        "if a % 2 == 0:",
        "else:",
        "elif:"
      ],
      "inner_else": [
        "if a >= 0:",
        "if a % 2 == 0:",
        "else:",
        "elif:"
      ]
    },
    "answer": {
      "outer_if": "if a >= 0:",
      "outer_else": "else:",
      "inner_if": "if a % 2 == 0:",
      "inner_else": "else:"
    },
    "explanation": "The outer test separates non-negative values, which can be raised to a fractional power directly, from negative values, so it is 'if a >= 0:' followed by 'else:'. Inside the negative branch a second test on 'a % 2 == 0' splits even values, which give an imaginary result, from odd values, which are handled by negating the root of -a. 'elif:' is not valid Python because elif always requires a condition, and putting 'if a % 2 == 0:' in the outer slot would send positive odd numbers into the negative-value branch, where they would be wrongly reported as imaginary or negated."
  },
  {
    "id": 104,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You work for a company that distributes media for all ages. You are writing a function that assigns a rating based on a user's age. The function must meet the following requirements:<br>&bull; Anyone 18 years old or older receives a rating of \"A\".<br>&bull; Anyone 13 or older, but younger than 18, receives a rating of \"T\".<br>&bull; Anyone 12 years old or younger receives a rating of \"C\".<br>&bull; If the age is unknown, the rating is set to \"C\".<br><br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;rating = \"\"<br>&nbsp;&nbsp;&nbsp;&nbsp;if ____<br>&nbsp;&nbsp;&nbsp;&nbsp;elif ____<br>&nbsp;&nbsp;&nbsp;&nbsp;elif ____<br>&nbsp;&nbsp;&nbsp;&nbsp;else ____<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating</div>",
    "options": {
      "if_clause": [
        "age < 13 : rating = \"C\"",
        "age < 18 : rating = \"T\"",
        ":rating = \"A\"",
        "age== None:rating = \"C\""
      ],
      "first_elif_clause": [
        "age < 13 : rating = \"C\"",
        "age < 18 : rating = \"T\"",
        ":rating = \"A\"",
        "age== None:rating = \"C\""
      ],
      "second_elif_clause": [
        "age < 13 : rating = \"C\"",
        "age < 18 : rating = \"T\"",
        ":rating = \"A\"",
        "age== None:rating = \"C\""
      ],
      "else_clause": [
        "age < 13 : rating = \"C\"",
        "age < 18 : rating = \"T\"",
        ":rating = \"A\"",
        "age== None:rating = \"C\""
      ]
    },
    "answer": {
      "if_clause": "age== None:rating = \"C\"",
      "first_elif_clause": "age < 13 : rating = \"C\"",
      "second_elif_clause": "age < 18 : rating = \"T\"",
      "else_clause": ":rating = \"A\""
    },
    "explanation": "The unknown-age test must come first, because comparing None with an integer raises a TypeError in Python 3, so any ordering that reaches 'age < 13' before the None check crashes on an unknown age. After that the remaining tests run from smallest to largest: under 13 gives \"C\", then under 18 gives \"T\", and the final else catches everyone 18 and over with \"A\". Because elif branches are evaluated in order, putting the \"A\" rule anywhere but last would swallow the younger cases."
  },
  {
    "id": 105,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "You work for a company that distributes media for all ages. You are writing a function that assigns a rating based on a user's age. The function must meet the following requirements:<br>&bull; Anyone 18 years old or older receives a rating of \"A\".<br>&bull; Anyone 13 or older, but younger than 18, receives a rating of \"T\".<br>&bull; Anyone 12 years old or younger receives a rating of \"C\".<br><br>Which of the following code segments meets the requirements?",
    "options": [
      "A. def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;=18:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif age&gt;=13:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"T\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating",
      "B. def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;=18:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;=13:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"T\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating",
      "C. def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;18:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif age&gt;13:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"T\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating",
      "D. def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;=18:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif age&gt;=13:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"T\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;pass rating"
    ],
    "answer": "A. def get_rating(age):<br>&nbsp;&nbsp;&nbsp;&nbsp;if age&gt;=18:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"A\"<br>&nbsp;&nbsp;&nbsp;&nbsp;elif age&gt;=13:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"T\"<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rating=\"C\"<br>&nbsp;&nbsp;&nbsp;&nbsp;return rating",
    "explanation": "Only option A chains the tests with elif and uses the inclusive comparisons for 18 and 13, so age 18 gives \"A\", ages 13 through 17 give \"T\", and everything else gives \"C\". Option B starts a second independent if, so an 18-year-old is re-tested and overwritten with \"T\". Option C uses strict greater-than and therefore misclassifies exactly 18 and exactly 13, and option D ends with 'pass rating', which is not valid Python."
  },
  {
    "id": 106,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "Southridge Video needs a way to determine the cost that a customer will pay for renting a DVD. The cost depends on the time of day the DVD is returned, and there are also special rates on Thursdays and Sundays. The fee structure is:<br>&bull; The cost is $1.59 per night.<br>&bull; If the DVD is returned after 8 PM, the customer is charged an extra day.<br>&bull; If the video is rented on a Sunday, the customer gets 30% off for as long as they keep the video.<br>&bull; If the video is rented on a Thursday, the customer gets 50% off for as long as they keep the video.<br><br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Southridge Video, DVD Rental calculator<br>ontime = input(\"Was video returned before 8 pm? y or n\").lower()<br>days_rented = int(input(\"How many days was video rented? \"))<br>day_rented = input(\"What day was the video rented?\").capitalize()<br>cost_per_day = 1.59<br>if ontime ____<br>&nbsp;&nbsp;&nbsp;&nbsp;days_rented +=1<br>if day_rented ____<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) * .7<br>elif day_rented ____<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) * .5<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;total = days_rented * cost_per_day<br>print(\"Cost of the DVD rental is : $\", total)</div>",
    "options": {
      "ontime_condition": [
        "!= \"n\":",
        "== \"n\":",
        "== \"y\":"
      ],
      "sunday_condition": [
        "== \"Sunday\":",
        ">= \"Sunday\":",
        "is \"Sunday\":"
      ],
      "thursday_condition": [
        "== \"Thursday\":",
        "<= \"Thursday\":",
        "is \"Thursday\":"
      ]
    },
    "answer": {
      "ontime_condition": "== \"n\":",
      "sunday_condition": "== \"Sunday\":",
      "thursday_condition": "== \"Thursday\":"
    },
    "explanation": "The prompt asks whether the video was returned before 8 pm, so the answer \"n\" means it came back late and an extra day must be added, which makes 'if ontime == \"n\":' the correct test. The day comparisons must use == because the goal is to match one exact string, and capitalize() has already normalised the input to \"Sunday\" or \"Thursday\". Ordering comparisons such as greater-or-equal would match many unrelated day names alphabetically, and 'is' compares object identity rather than value, which is unreliable for strings built at runtime."
  },
  {
    "id": 107,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "The XYZ Book Company needs a way to determine the cost that a student will pay for renting a book. The cost is $3.00 per night. If the book is returned after 9 PM, the student is charged an extra day. If the book is rented on a Sunday, the student gets 50% off for as long as they keep the book. If the book is rented on a Saturday, the student gets 30% off for as long as they keep the book.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'># XYZ Book Rented Amount Calculator<br>ontime = input(\"Was Book returned before 9 pm? y or n\").lower()<br>days_rented = int(input(\"How many days was book rented? \"))<br>day_rented = input(\"What day was the book rented?\").capitalize()<br>cost_per_day = 3.00<br>if ontime == 'n':<br>&nbsp;&nbsp;&nbsp;&nbsp;days_rented = days_rented + 1<br>if day_rented == 'Sunday':<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) *0.5<br>elif day_rented == 'Saturday':<br>&nbsp;&nbsp;&nbsp;&nbsp;total = (days_rented * cost_per_day) *0.7<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;total = days_rented * cost_per_day<br>print(\"The Cost of the Book rental is : $\", total)</div>If the book is rented on 'Sunday', the number of days the book is rented is 5, and the book is returned after 9 PM, what is the result?",
    "options": [
      "A. The Cost of Book Rental is: $7.0",
      "B. The Cost of Book Rental is: $8.0",
      "C. The Cost of Book Rental is: $9.0",
      "D. The Cost of Book Rental is: $10.0"
    ],
    "answer": "C. The Cost of Book Rental is: $9.0",
    "explanation": "Returning after 9 PM makes ontime equal 'n', so days_rented becomes 5 + 1 = 6. Sunday matches the first day test, giving total = 6 * 3.00 * 0.5 = 9.0. None of $7.0, $8.0 or $10.0 corresponds to a whole number of days at either the full $3.00 or the Sunday-discounted $1.50 nightly rate."
  },
  {
    "id": 108,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "We are developing a gold loan application for XYZ company.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>amount=float(input('Enter Loan Amount:'))<br>interest_rate=0<br>if amount &gt; 0 and amount&lt;= 50000:<br>&nbsp;&nbsp;&nbsp;&nbsp;interest_rate = 10<br>elif amount &gt; 50000 and amount&lt;100000:<br>&nbsp;&nbsp;&nbsp;&nbsp;interest_rate = 12<br>elif amount &gt;= 100000 and amount&lt;150000:<br>&nbsp;&nbsp;&nbsp;&nbsp;interest_rate = 16<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;interest_rate = 22</div>For which of the following user inputs will interest_rate be 12?",
    "options": [
      "A. 50000",
      "B. 50001",
      "C. 100000",
      "D. 100001",
      "E. 150000"
    ],
    "answer": "B. 50001",
    "explanation": "interest_rate is set to 12 only by the second branch, which requires the amount to be strictly greater than 50000 and strictly less than 100000, so 50001 is the only listed value that qualifies. 50000 satisfies the first branch and gives 10, 100000 and 100001 fall in the third branch and give 16, and 150000 falls through to the else and gives 22."
  },
  {
    "id": 109,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You are writing a Python program that asks the user to enter a number and determines whether the number is 1 digit, 2 digits, or more than 2 digits long.<br><br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>num = int(input(\"Enter a number with 1 or 2 digits: \"))<br>digits = 0<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"1\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"2\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;digits = \"&gt;2\"<br>print(digits + \" digits.\")</div>",
    "options": {
      "one_digit_condition": [
        "if num > -10 and num < 10:",
        "if num > -100 and num < 100:"
      ],
      "two_digit_condition": [
        "if num > -100 and num < 100:",
        "elif num > -100 and num < 100:",
        "if num > -10 and num < 10:",
        "elif num > -10 and num < 10:"
      ],
      "more_digits_clause": [
        "else:",
        "elif:"
      ]
    },
    "answer": {
      "one_digit_condition": "if num > -10 and num < 10:",
      "two_digit_condition": "elif num > -100 and num < 100:",
      "more_digits_clause": "else:"
    },
    "explanation": "A single-digit number lies strictly between -10 and 10, so that test has to come first. A two-digit number lies between -100 and 100 but has already failed the first test, so the second slot must be an elif on that wider range, and anything failing both is longer than two digits and is caught by the final else. Using a second plain 'if' instead of elif would re-test every one-digit number and overwrite its result with \"2\", and 'elif:' is not valid Python because elif requires a condition."
  },
  {
    "id": 110,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You are creating a function to calculate admission fees by using Python. Admission fees are calculated based on the following rules:<br>&bull; Anyone under age 5 = free admission<br>&bull; Anyone age 5 or older who is in school = 10 USD<br>&bull; Anyone age 5 to 17 who is not in school = 20 USD<br>&bull; Anyone older than age 17 who is not in school = 50 USD<br><br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def admission_fee(age, school):<br>&nbsp;&nbsp;&nbsp;&nbsp;rate = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 10<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 20<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate = 50<br>&nbsp;&nbsp;&nbsp;&nbsp;return rate</div>",
    "options": {
      "in_school_condition": [
        "if age >= 5 and school == True:",
        "if age >= 5 and age <= 17:",
        "if age >= 5 and school == False:"
      ],
      "not_in_school_condition": [
        "elif age >= 5 and school == False:",
        "else age >= 5 and school == False:",
        "elif age >= 5 and school == True:"
      ],
      "age_range_condition": [
        "if age >= 5 and school == True:",
        "if age >= 5 and school == False:",
        "if age <= 17:"
      ]
    },
    "answer": {
      "in_school_condition": "if age >= 5 and school == True:",
      "not_in_school_condition": "elif age >= 5 and school == False:",
      "age_range_condition": "if age <= 17:"
    },
    "explanation": "rate starts at 0, so anyone under 5 simply falls through both branches and pays nothing. The first branch charges 10 for anyone 5 or older who is in school, the elif catches everyone 5 or older who is not in school, and inside it a nested 'if age <= 17:' splits the 20 USD and 50 USD cases. 'else age >= 5 and school == False:' is a syntax error because else never takes a condition, and repeating the school test in the nested slot would leave the older-than-17 case unhandled."
  },
  {
    "id": 111,
    "domain": "Branching statements",
    "type": "fill_in_blank",
    "question": "You develop a Python application for your company. How should you complete the code so that the print statements are accurate? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>numList = [1,2,3,4,5]<br>alphaList = [\"a\",\"b\",\"c\",\"d\",\"e\"]<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"The values in numList are equal to alphaList\")<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"The values in numList are not equal to alphaList\")</div>",
    "options": {
      "equality_check": [
        "if numList == alphaList:",
        "if numList == alphaList",
        "else:",
        "else"
      ],
      "else_clause": [
        "if numList == alphaList:",
        "if numList == alphaList",
        "else:",
        "else"
      ]
    },
    "answer": {
      "equality_check": "if numList == alphaList:",
      "else_clause": "else:"
    },
    "explanation": "Exactly one of the two messages must print, so the second block has to be the else of the first test rather than a second independent if. Python requires a colon at the end of every if and else header, so the versions without a colon raise a SyntaxError. With these two lists the comparison is False, so the else branch runs and the 'not equal' message is printed."
  },
  {
    "id": 112,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "Consider the following Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=5<br>b=10<br>c=2<br>d=True<br><br>x=a+b*c<br>y=a+b/d<br><br>if(condition):<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Valid')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Invalid')</div>Which condition must be used in the if statement so that 'Valid' is printed to the console?",
    "options": [
      "A. x &gt; y",
      "B. x == y",
      "C. x &lt; y",
      "D. x &lt;= y"
    ],
    "answer": "A. x &gt; y",
    "explanation": "Multiplication binds tighter than addition, so x = 5 + 10*2 = 25. True behaves as the integer 1 in arithmetic and the / operator always produces a float, so y = 5 + 10/True = 15.0. Since 25 is greater than 15.0, only 'x greater than y' is True; the equality test and both less-than forms are False and would print 'Invalid'."
  },
  {
    "id": 113,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "We are developing an online shopping application. Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>d = input('Enter day of the week:')<br>discount_percentage = 3<br>if d == 'Monday':<br>&nbsp;&nbsp;&nbsp;&nbsp;discount_percentage+=5<br>elif d == 'Tuesday':<br>&nbsp;&nbsp;&nbsp;&nbsp;discount_percentage+=7<br>elif d == 'Saturday':<br>&nbsp;&nbsp;&nbsp;&nbsp;discount_percentage+=10<br>elif d == 'Sunday':<br>&nbsp;&nbsp;&nbsp;&nbsp;discount_percentage+=20<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;discount_percentage+=2</div>To get 5 as discount_percentage, which of the following inputs should the end user provide?",
    "options": [
      "A. Monday",
      "B. Tuesday",
      "C. Thursday",
      "D. Saturday",
      "E. Sunday"
    ],
    "answer": "C. Thursday",
    "explanation": "discount_percentage starts at 3, so reaching 5 requires an increase of exactly 2, which only the else branch provides. Thursday is the only listed day that does not match any of the explicit tests, so it falls through to the else. Monday gives 8, Tuesday gives 10, Saturday gives 13 and Sunday gives 23."
  },
  {
    "id": 114,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "Which of the following is true about the else block of a try statement?",
    "options": [
      "A. The else block is executed if no exception is raised in the try block",
      "B. Without writing an except block we cannot write an else block",
      "C. For the same try statement we can write at most one else block",
      "D. All the above"
    ],
    "answer": "D. All the above",
    "explanation": "The else clause of a try statement runs only when the try body completes without raising an exception, so statement A is true. Python's grammar attaches else to the except clauses, so a try with an else but no except is a SyntaxError, which makes statement B true, and a try statement accepts at most one else, which makes statement C true. Because all three statements hold individually, 'All the above' is the answer."
  },
  {
    "id": 115,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "We are developing an application for leave approval in XYZ Company.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>days=int(input('Enter number of days for leave:'))<br>cause=input('Enter the cause:')<br>if days==1:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Leave will be approved immediately')<br>elif days&gt;1 and days&lt;=3:<br>&nbsp;&nbsp;&nbsp;&nbsp;if cause=='Sick':<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Leave will be approved immediately')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Needs Lead Approval')<br>elif days&gt;3 and days&lt;5:<br>&nbsp;&nbsp;&nbsp;&nbsp;if cause=='Sick':<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Needs Manager Approval')<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Needs Director Approval')<br>elif days&gt;=5 and days&lt;=10:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Needs Director Approval')</div>In which of the following cases will 'Needs Director Approval' be printed to the console?",
    "options": [
      "A. days = 2 and cause='sick'",
      "B. days = 3 and cause='personal'",
      "C. days = 4 and cause='Sick'",
      "D. days = 4 and cause='official'"
    ],
    "answer": "D. days = 4 and cause='official'",
    "explanation": "With days = 4 the third branch runs, because 4 is greater than 3 and less than 5. Inside it the cause is compared with 'Sick', and 'official' does not match, so the else prints 'Needs Director Approval'. days = 4 with cause 'Sick' matches the inner test and prints 'Needs Manager Approval' instead, while 2 or 3 days land in the second branch, which never prints the director message."
  },
  {
    "id": 116,
    "domain": "Branching statements",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=12<br>b=4<br>s='He shall not be happy if he does not work'</div>In which of the following cases will the value of result become 9?",
    "options": [
      "A. result=3 if None else a/b",
      "B. result=s.find('not') if s else None",
      "C. result=s.rfind('not') if s else None",
      "D. result=5 if len(s)&gt;4 else 6"
    ],
    "answer": "B. result=s.find('not') if s else None",
    "explanation": "A non-empty string is truthy, so the conditional expression in option B evaluates s.find('not'), which returns the index of the first occurrence of 'not' in the string: 9. Option C uses rfind, which finds the last occurrence at index 33. Option A evaluates a/b because None is falsy, giving 3.0, and option D gives 5 because the string is longer than 4 characters."
  },
  {
    "id": 117,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "You find errors while evaluating the following code. Line numbers are included for reference only. You need to correct the code at line 03 and line 06. Use the drop-down menus to select the correct code segment for each line.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01&nbsp;numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>02&nbsp;index = 0<br>03&nbsp;____<br>04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(numbers[index])<br>05&nbsp;<br>06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>07&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>08&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>09&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index += 1</div>",
    "options": {
      "line_03": [
        "while (index < 10) :",
        "while [index < 10]",
        "while (index < 5) :",
        "while [index < 5]"
      ],
      "line_06": [
        "if numbers[index] == 6",
        "if numbers[index] == 6 :",
        "if numbers(index) = 6 :",
        "if numbers(index) != 6"
      ]
    },
    "answer": {
      "line_03": "while (index < 10) :",
      "line_06": "if numbers[index] == 6 :"
    },
    "explanation": "A while header needs a condition followed by a colon, and the list holds ten elements indexed 0 through 9, so the loop must run while index is below 10; the square-bracket versions build a list instead of a condition and are also missing the colon. Line 06 must index the list with square brackets, compare with == rather than assign with =, and end with a colon, which only 'if numbers[index] == 6 :' does. Round brackets would try to call the list as a function and raise a TypeError."
  },
  {
    "id": 118,
    "domain": "Iteration & loops",
    "type": "ordering",
    "question": "You are building a Python program that displays all of the prime numbers from 2 to 100. The program must stop testing divisors for a candidate as soon as one is found.<br>Drag the appropriate code segments into slots 1 to 4 of the following skeleton. Each code segment may be used once, more than once, or not at all.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>[slot 1]<br>&nbsp;&nbsp;&nbsp;&nbsp;[slot 2]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[slot 3]<br>&nbsp;&nbsp;&nbsp;&nbsp;if is_prime == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(p)<br>&nbsp;&nbsp;&nbsp;&nbsp;[slot 4]</div>Slot 1 &rarr; ____<br>Slot 2 &rarr; ____<br>Slot 3 &rarr; ____<br>Slot 4 &rarr; ____",
    "options": [
      "p = 2\nwhile p <= 100:\n    is_prime = True",
      "p = 2\nis_prime = True\nwhile p <= 100:",
      "for i in range(2, p):\n    if p % i == 0:\n        is_prime = False",
      "for i in range(2, p):\n    if p / i == 0:\n        is_prime = False",
      "break",
      "continue",
      "p = p + 1"
    ],
    "answer": [
      "p = 2\nwhile p <= 100:\n    is_prime = True",
      "for i in range(2, p):\n    if p % i == 0:\n        is_prime = False",
      "break",
      "p = p + 1"
    ],
    "explanation": "The candidate p is set to 2 once, but is_prime must be reset to True on every pass, so the flag assignment belongs inside the while loop rather than before it. Divisibility is tested with the modulus operator, because p / i == 0 is only ever true when p is 0 and would never mark anything as composite. Once a divisor is found the inner for loop can stop, which is what break does, whereas continue would keep testing the remaining divisors, which the requirement forbids, and the final p = p + 1 advances the candidate so the while loop terminates."
  },
  {
    "id": 119,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "You are creating a Python program that lets a user guess a number from 1 to 10. The user is allowed up to three guesses. You write the following code. Line numbers are included for reference only. The program must allow three guesses, and if the user guesses the correct number the program must stop asking for guesses. How should you complete lines 05, 13 and 14?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01&nbsp;from random import randint<br>02&nbsp;target = randint(1, 10)<br>03&nbsp;chance = 1<br>04&nbsp;print(\"Guess an integer from 1 to 10. You will have 3 chances.\")<br>05&nbsp;____<br>06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guess = int(input(\"Guess an integer: \"))<br>07&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if guess &gt; target:<br>08&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"Guess is too high\")<br>09&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif guess &lt; target:<br>10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"Guess is too low\")<br>11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"Guess is just right!\")<br>13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>14&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
    "options": {
      "line_05": [
        "while chance <= 3:",
        "while chance < 3",
        "break",
        "pass",
        "chance += 1",
        "chance = 2"
      ],
      "line_13": [
        "while chance <= 3:",
        "while chance < 3",
        "break",
        "pass",
        "chance += 1",
        "chance = 2"
      ],
      "line_14": [
        "while chance <= 3:",
        "while chance < 3",
        "break",
        "pass",
        "chance += 1",
        "chance = 2"
      ]
    },
    "answer": {
      "line_05": "while chance <= 3:",
      "line_13": "break",
      "line_14": "chance += 1"
    },
    "explanation": "chance starts at 1 and is incremented once per pass, so 'while chance <= 3:' runs the body for chance 1, 2 and 3, giving exactly three guesses; 'while chance < 3' would allow only two and is also missing its colon. Line 13 sits inside the else branch that fires on a correct guess, so break is what stops the loop early, while pass would simply keep asking. Line 14 must advance the counter with 'chance += 1', because 'chance = 2' would pin the counter and loop forever."
  },
  {
    "id": 120,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "You are developing a Python application for an online product distribution company. You need the program to iterate through a list of products and escape (stop looping) as soon as a target product ID is found.<br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br>index = 0<br>____ (index &lt; 10) :<br>&nbsp;&nbsp;&nbsp;&nbsp;print(productIdList[index])<br>&nbsp;&nbsp;&nbsp;&nbsp;if productIdList[index] == 6 :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;else :<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
    "options": {
      "loop_keyword": [
        "while",
        "for",
        "if",
        "break"
      ],
      "found_action": [
        "while",
        "for",
        "if",
        "break"
      ],
      "index_update": [
        "continue",
        "break",
        "index += 1",
        "index = 1"
      ]
    },
    "answer": {
      "loop_keyword": "while",
      "found_action": "break",
      "index_update": "index += 1"
    },
    "explanation": "A condition-controlled loop is needed because the loop must end early, so the header is a while statement guarded by the index test. break immediately leaves the loop the moment the target ID 6 is found, and index += 1 advances to the next product otherwise. continue would skip the increment and loop forever, and index = 1 would reset the counter instead of advancing it."
  },
  {
    "id": 121,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "Lucerne Publishing Company needs a way to find the count of particular letters in their publications to ensure that there is a good balance. There have been complaints about overuse of the letter e. You need to create a function that counts how many words in a list contain a given letter.<br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Function accepts list of words from a file,<br>#and letter to search for.<br>#Returns count of a particular letter in that list.<br>def count_letter(letter, word_list):<br>&nbsp;&nbsp;&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;for ____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return count<br>word_list = []<br>#word_list is populated from a file, code not shown.<br>letter = input(\"Which letter would you like to count? \")<br>letter_count = count_letter(letter, word_list)<br>print(\"There are: \", letter_count, \" instances of \" + letter)</div>",
    "options": {
      "for_clause": [
        "word_list in word:",
        "word in word_list:",
        "word == word_list:",
        "word is word_list:"
      ],
      "if_condition": [
        "word is letter:",
        "letter is word:",
        "word in letter:",
        "letter in word:"
      ]
    },
    "answer": {
      "for_clause": "word in word_list:",
      "if_condition": "letter in word:"
    },
    "explanation": "A for loop iterates over the collection and binds each element to the loop variable, so for word in word_list: walks the list one word at a time. The membership operator in tests whether the substring appears in the string, so letter in word: is true when that word contains the letter. Reversing the operands (word in letter:) tests the wrong direction, and is compares object identity rather than containment."
  },
  {
    "id": 122,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the following Python code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def count_letter(letter, word_list):<br>&nbsp;&nbsp;&nbsp;&nbsp;count = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;for word in word_list:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if letter in word:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;return count<br>word_list = ['apple', 'pears', 'orange', 'mango']<br>letter = input('Enter some alphabet symbol:')<br>letter_count = count_letter(letter, word_list)<br>print(letter_count)</div><br>If the user provides the input 'a', what is the result?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "D. 4",
    "explanation": "The function counts words that contain the letter, not total occurrences of the letter. Every one of 'apple', 'pears', 'orange' and 'mango' contains an 'a', so count is incremented four times and 4 is printed. Answers such as 2 or 3 would require some word without an 'a'."
  },
  {
    "id": 123,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "Best For You Organics Company needs a simple program that their call center will use to enter survey data for a new coffee variety. The program must accept input and return the average rating based on a five-star scale, and the output must be rounded to two decimal places.<br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>sum = count = done = 0<br>average = 0.0<br>while (done != -1):<br>&nbsp;&nbsp;&nbsp;&nbsp;rating = ____<br>&nbsp;&nbsp;&nbsp;&nbsp;if rating == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;sum += rating<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>average = float(sum / count)<br>____ + ____</div>",
    "options": {
      "rating_input": [
        "print(\"Enter next rating (1-5), -1 for done\")",
        "float(input(\"Enter next rating (1-5), -1 for done\"))",
        "input(\"Enter next rating (1-5), -1 for done\")",
        "input \"Enter next rating (1-5), -1 for done\""
      ],
      "output_call": [
        "output(\"The average star rating for NetVerZleep coffee is: \"",
        "console.input(\"The average star rating for the new coffee is: \"",
        "printline(\"The average star rating for the new coffee is: \"",
        "print(\"The average star rating for the new coffee is: \""
      ],
      "format_expression": [
        "format(average, '.2f'))",
        "format(average, '.2d'))",
        "{average, '.2f'}",
        "format.average .{2d}"
      ]
    },
    "answer": {
      "rating_input": "float(input(\"Enter next rating (1-5), -1 for done\"))",
      "output_call": "print(\"The average star rating for the new coffee is: \"",
      "format_expression": "format(average, '.2f'))"
    },
    "explanation": "input() always returns a string, so it must be wrapped in float() before it can be compared with -1 and added to sum. print() is Python's output function, and format(average, '.2f') renders the float with exactly two decimal places so it can be concatenated to the message string. The '.2d' variants raise a ValueError because the d presentation type does not accept a float."
  },
  {
    "id": 124,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "The XYZ Organics company needs a simple program that their call center will use to enter survey data for a new coffee variety. The program must accept input and return the average rating based on a five-star scale. The output must be rounded to two decimal places.<br>Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>sum = count = done = 0<br>average = 0.0<br>while(done != -1):<br>&nbsp;&nbsp;&nbsp;&nbsp;rating = float(input('Enter Next Rating(1-5),-1 for done'))<br>&nbsp;&nbsp;&nbsp;&nbsp;if rating == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;sum += rating<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>average = float(sum/count)<br>#Line-1</div><br>Which print() statement should be placed at Line-1 to meet the requirement?",
    "options": [
      "A. print('The average star rating for the new coffee is:{:.2f}'.format(average))",
      "B. print('The average star rating for the new coffee is:{:.2d}'.format(average))",
      "C. print('The average star rating for the new coffee is:{:2f}'.format(average))",
      "D. print('The average star rating for the new coffee is:{:2.2d}'.format(average))"
    ],
    "answer": "A. print('The average star rating for the new coffee is:{:.2f}'.format(average))",
    "explanation": "In a format specification the number after the dot is the precision, so {:.2f} prints the float with exactly two digits after the decimal point. {:2f} sets only a minimum field width of 2 and therefore prints the default six decimals, while both {:.2d} and {:2.2d} raise ValueError because the d presentation type cannot format a float."
  },
  {
    "id": 125,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>l = [10, 20, [30, 40], [50, 60]]<br>count = 0<br>for i in range(len(l)):<br>&nbsp;&nbsp;&nbsp;&nbsp;if type(l[i]) == list:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count = count + 1<br>print(count)</div><br>What is the result?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "B. 2",
    "explanation": "The loop inspects each top-level element of l and increments count only when that element is itself a list. 10 and 20 are integers, while [30, 40] and [50, 60] are lists, so count ends at 2. The nested elements such as 30 and 40 are never visited, so the count is not 4."
  },
  {
    "id": 126,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>l = [10, (20,), {30}, {}, {}, [40, 50]]<br>count = 0<br>for i in range(len(l)):<br>&nbsp;&nbsp;&nbsp;&nbsp;if type(l[i]) == list:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == tuple:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 2<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == set:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 3<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == dict:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 4<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 5<br>print(count)</div><br>What is the result?",
    "options": [
      "A. 17",
      "B. 18",
      "C. 19",
      "D. 20"
    ],
    "answer": "C. 19",
    "explanation": "Empty braces {} create a dict, not a set, so the elements are int, tuple, set, dict, dict and list. That gives 5 + 2 + 3 + 4 + 4 + 1 = 19. Treating {} as a set would give 5 + 2 + 3 + 3 + 3 + 1 = 17, which is the trap in option A."
  },
  {
    "id": 127,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>t = (2, 4, 6, 8, 10, 12)<br>d = {1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F'}<br>result = 1<br>for t1 in t:<br>&nbsp;&nbsp;&nbsp;&nbsp;if t1 in d:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += t1<br>print(result)</div><br>What is the result?",
    "options": [
      "A. 12",
      "B. 13",
      "C. 19",
      "D. 6"
    ],
    "answer": "B. 13",
    "explanation": "Using in on a dictionary tests membership against its keys, which are 1 through 6. Only 2, 4 and 6 from the tuple are keys, so result becomes 1 + 2 + 4 + 6 = 13. Option A (12) forgets that result starts at 1 rather than 0."
  },
  {
    "id": 128,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>t = (2, 4, 6, 8, 10, 12)<br>d = {1:'A', 2:'B', 3:'C', 4:'D', 5:'E', 6:'F'}<br>result = 1<br>for t1 in t:<br>&nbsp;&nbsp;&nbsp;&nbsp;if t1 in d:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result += t1<br>print(result)</div><br>What is the result?",
    "options": [
      "A. 29",
      "B. 30",
      "C. 31",
      "D. 32"
    ],
    "answer": "C. 31",
    "explanation": "continue skips the rest of the body for every tuple value that is a key of d (2, 4 and 6), so only 8, 10 and 12 are added. result is 1 + 8 + 10 + 12 = 31. Option B (30) omits the initial value of 1."
  },
  {
    "id": 129,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>values = [[3, 4, 5, 1], [33, 6, 1, 2]]<br><br>v = values[0][0]<br>for lst in values:<br>&nbsp;&nbsp;&nbsp;&nbsp;for element in lst:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if v &gt; element:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v = element<br><br>print(v)</div><br>What is the result?",
    "options": [
      "A. 3",
      "B. 2",
      "C. 1",
      "D. 4"
    ],
    "answer": "C. 1",
    "explanation": "The nested loops walk every element of both inner lists and keep the smallest value seen, starting from values[0][0], which is 3. The minimum across 3, 4, 5, 1, 33, 6, 1 and 2 is 1, so 1 is printed. Option B (2) would be the answer only if the second list were scanned in isolation."
  },
  {
    "id": 130,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "Tailspin Toys is building a basketball court for its employees. You are creating a Python program that employees can use to keep track of their average score. The output must meet the following requirements:<br>&bull; The user name must be left-aligned.<br>&bull; If the user name has fewer than 20 characters, additional space must be added to the right.<br>&bull; The average score must have three places to the left of the decimal point and one place to the right of the decimal (XXX.X).<br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>name = input(\"What is your name? \")<br>score = 0<br>count = 0<br>sum = 0<br>while(score != -1):<br>&nbsp;&nbsp;&nbsp;&nbsp;score = int(input(\"Enter your scores: (-1 to end) \"))<br>&nbsp;&nbsp;&nbsp;&nbsp;if score == -1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;sum += score<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>average_score = sum / count<br>print(\"____ , your average score is: ____ \" %(name, average_score))</div>",
    "options": {
      "name_format": [
        "%-20i",
        "%-20d",
        "%-20f",
        "%-20s"
      ],
      "score_format": [
        "%1.4s",
        "%4.1f",
        "%4.1s",
        "%1.4f"
      ]
    },
    "answer": {
      "name_format": "%-20s",
      "score_format": "%4.1f"
    },
    "explanation": "In printf-style formatting s is the conversion for a string and the minus sign left-aligns it inside the given field width, so %-20s pads the name on the right up to 20 characters. For the score, f is the float conversion and the digit after the dot is the precision, so %4.1f prints exactly one digit after the decimal point as XXX.X. %1.4f would print four decimals, and the %s-based or integer conversions cannot render a float with one decimal place."
  },
  {
    "id": 131,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "Relecloud Virtual Learning asks you to debug some code that is causing problems with their payroll. The following variables have been declared:<br>employee_pay = [15000, 120000, 35000, 45000]<br>count = 0<br>sum = 0<br><br>There are two errors in the following code: the loop misses the last employee, and the average is computed with floor division.<br>for index in range(0, len(employee_pay)-1):<br>&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;sum += employee_pay[index]<br>average = sum//count<br><br>Which code should you use to fix the errors? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for index in range ____<br>&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;sum += employee_pay[index]<br>average = ____<br>print(\"The total payroll is: \", sum )<br>print(\"The average salary is: \", average)</div>",
    "options": {
      "range_expression": [
        "(size(employee_pay)):",
        "(size(employee_pay)-1):",
        "(len(employee_pay)+1):",
        "(len(employee_pay)):"
      ],
      "average_expression": [
        "sum/count",
        "sum**count",
        "sum*count"
      ]
    },
    "answer": {
      "range_expression": "(len(employee_pay)):",
      "average_expression": "sum/count"
    },
    "explanation": "range(len(employee_pay)) yields every valid index 0..3, whereas subtracting 1 drops the last salary and adding 1 causes an IndexError. Python has no built-in size() function, so those choices raise NameError. True division with / returns the exact average 53750.0, while // would truncate it and ** or * would not compute an average at all."
  },
  {
    "id": 132,
    "domain": "Iteration & loops",
    "type": "fill_in_blank",
    "question": "Adventure Works Cycles sales are so exceptional that they decide to give a bonus to all employees who do not make $150,000 or more. The following formula applies to each eligible employee:<br><b>New salary = current salary x 3% + a $500 bonus.</b><br>You write code that reads the employee salaries into a variable named salary_list. You need to complete the code that applies the increase to each eligible employee's salary.<br>How should you complete the code? Select the appropriate code segment for each blank.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Each salary in the list is updated based on the increase. Employees making<br>#$150,000 or more will not get a raise.<br>#Salary list is populated from the employee database, code not shown.<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;if salary_list[index] &gt;= 150000:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;salary_list[index] = (salary_list[index] * 1.03) + 500</div>",
    "options": {
      "loop_header": [
        "for index in range(len(salary_list)+1):",
        "for index in range(len(salary_list)-1):",
        "for index in range(len(salary_list)):",
        "for index in salary_list:"
      ],
      "skip_statement": [
        "exit()",
        "continue",
        "break",
        "end"
      ]
    },
    "answer": {
      "loop_header": "for index in range(len(salary_list)):",
      "skip_statement": "continue"
    },
    "explanation": "The body assigns through salary_list[index], so the loop must produce indexes: range(len(salary_list)) covers every position exactly once, while +1 causes an IndexError, -1 skips the last employee, and iterating the list directly would bind salaries rather than indexes. continue abandons only the current iteration so a high earner is skipped and the rest of the list is still processed; break would stop the loop entirely and end is not Python."
  },
  {
    "id": 133,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>True = False<br>while True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(True)<br>&nbsp;&nbsp;&nbsp;&nbsp;break</div>",
    "options": [
      "A. True",
      "B. False",
      "C. None",
      "D. none of the mentioned"
    ],
    "answer": "D. none of the mentioned",
    "explanation": "In Python 3 True is a reserved keyword, so the assignment True = False is rejected at compile time with SyntaxError: cannot assign to True. Nothing is ever printed, so none of True, False or None is produced and the only fitting choice is none of the mentioned."
  },
  {
    "id": 134,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 123<br>for i in x:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    "options": [
      "A. 1 2 3",
      "B. 123",
      "C. error",
      "D. none of the mentioned"
    ],
    "answer": "C. error",
    "explanation": "A for loop needs an iterable, and an int is not iterable, so the code raises TypeError: 'int' object is not iterable. Digits would only be produced if x were the string '123', which is what options A and B assume."
  },
  {
    "id": 135,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(5):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i == 5:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Here\")</div>",
    "options": [
      "A. 0 1 2 3 4 Here",
      "B. 0 1 2 3 4 5 Here",
      "C. 0 1 2 3 4",
      "D. 1 2 3 4 5"
    ],
    "answer": "A. 0 1 2 3 4 Here",
    "explanation": "range(5) produces 0 through 4, so i never equals 5 and the inner else prints each value. Because the loop finishes without ever executing break, the for/else clause runs and prints Here. Option C forgets the for/else, and option B wrongly assumes range(5) includes 5."
  },
  {
    "id": 136,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>for i in range(0):<br>print(i)</div>",
    "options": [
      "A. 0",
      "B. no output",
      "C. error",
      "D. None of the mentioned."
    ],
    "answer": "C. error",
    "explanation": "A compound statement must have an indented block after the colon, and print(i) sits at column 0, so Python raises IndentationError: expected an indented block after 'for' statement before anything runs. Option B would be right only if the body were correctly indented, since range(0) is empty."
  },
  {
    "id": 137,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a = [0, 1, 2, 3]<br>i = -2<br>for i not in a:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)<br>&nbsp;&nbsp;&nbsp;&nbsp;i += 1</div>",
    "options": [
      "A. -2 -1",
      "B. 0",
      "C. error",
      "D. none of the mentioned"
    ],
    "answer": "C. error",
    "explanation": "The for statement grammar is 'for TARGET in ITERABLE:'; not in is a comparison operator and cannot appear in a for header, so the file fails to compile with SyntaxError. Because the failure happens at parse time, no value is ever printed."
  },
  {
    "id": 138,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 1567<br>for i in x:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</div>",
    "options": [
      "A. 1 5 6 7",
      "B. 1567",
      "C. error",
      "D. none of the mentioned"
    ],
    "answer": "C. error",
    "explanation": "Integers do not implement the iterator protocol, so for i in x raises TypeError: 'int' object is not iterable. Digit-by-digit output would require iterating str(x) instead."
  },
  {
    "id": 139,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>l = [10, (20,), {30}, {}, {}, [48, 50]]<br>count = 0<br>for i in range(len(l)):<br>&nbsp;&nbsp;&nbsp;&nbsp;if type(l[i]) == list:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == tuple:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 2<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == set:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 3<br>&nbsp;&nbsp;&nbsp;&nbsp;elif type(l[i]) == dict:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 4<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count += 5<br>print(count)</div><br>What is the result?",
    "options": [
      "A. 17",
      "B. 18",
      "C. 19",
      "D. 20"
    ],
    "answer": "C. 19",
    "explanation": "The elements are int, tuple, set, dict, dict and list because empty braces {} build a dict rather than a set. Adding 5 + 2 + 3 + 4 + 4 + 1 gives 19. Counting {} as a set instead would give 17, the distractor in option A."
  },
  {
    "id": 140,
    "domain": "Iteration & loops",
    "type": "multiple_choice",
    "question": "You are writing a Python program that displays all prime numbers from 2 to 200.<br>Which of the following is the proper code to fulfil the requirement?<br><b>Code A</b><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>p = 2<br>is_prime = True<br>while p &lt;= 200:<br>&nbsp;&nbsp;for i in range(2, p):<br>&nbsp;&nbsp;&nbsp;&nbsp;if p % i == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is_prime = False<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;if is_prime == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(p)<br>&nbsp;&nbsp;p = p + 1</div><br><b>Code B</b><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>p = 2<br>while p &lt;= 200:<br>&nbsp;&nbsp;is_prime = True<br>&nbsp;&nbsp;for i in range(2, p):<br>&nbsp;&nbsp;&nbsp;&nbsp;if p % i == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is_prime = False<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;if is_prime == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(p)<br>&nbsp;&nbsp;p = p + 1</div><br><b>Code C</b><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>p = 2<br>while p &lt;= 200:<br>&nbsp;&nbsp;is_prime = True<br>&nbsp;&nbsp;for i in range(2, p):<br>&nbsp;&nbsp;&nbsp;&nbsp;if p % i == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is_prime = False<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;if is_prime == False:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(p)<br>&nbsp;&nbsp;p = p + 1</div><br><b>Code D</b><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>p = 2<br>while p &lt;= 200:<br>&nbsp;&nbsp;is_prime = True<br>&nbsp;&nbsp;for i in range(2, p):<br>&nbsp;&nbsp;&nbsp;&nbsp;if p % i == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is_prime = False<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;if is_prime == True:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(p)</div>",
    "options": [
      "A. Code A",
      "B. Code B",
      "C. Code C",
      "D. Code D"
    ],
    "answer": "B. Code B",
    "explanation": "The is_prime flag has to be reset at the top of every iteration of the while loop, which only Code B does; Code A sets it once, so after 4 is found composite the flag stays False and only 2 and 3 are printed. Code C and Code D indent break one level too far and fail with IndentationError, and in addition Code C prints composites and Code D never increments p."
  },
  {
    "id": 141,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are writing a program to automate inventory. Your first task is to read a file of inventory transactions. The file contains sales from the previous day, including the item id, price, and quantity. The following shows a sample of data from the file:<br>10, 200, 5<br>20, 100, 1<br>The code must meet the following requirements:<br>&bull; Each line of the file must be read and printed<br>&bull; If a blank line is encountered, it must be ignored<br>&bull; When all lines have been read, the file must be closed<br>You create the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 inventory = open(\"inventory.txt\", 'r')<br>02 eof = False<br>03 while eof == False:<br>04   line = inventory.readline()<br>05<br>06<br>07       print(line)<br>08     else:<br>09       print(\"End of file\")<br>10       eof = True<br>11 inventory.close()</div><br>Which code should you write for line 05 and line 06?",
    "options": [
      "A. 05 if line != '':<br>&nbsp;&nbsp;&nbsp;06     if line != \"\":",
      "B. 05 if line != '\\n':<br>&nbsp;&nbsp;&nbsp;06     if line != None:",
      "C. 05 if line != '\\n':<br>&nbsp;&nbsp;&nbsp;06     if line != \"\":",
      "D. 05 if line != '':<br>&nbsp;&nbsp;&nbsp;06     if line != \"\\n\":"
    ],
    "answer": "C. 05 if line != '\\n':<br>&nbsp;&nbsp;&nbsp;06     if line != \"\":",
    "explanation": "readline() returns '\\n' for a blank line and '' only at end of file. The outer test on line 05 must therefore skip blank lines, and the inner test on line 06 must distinguish real content from the empty string so its else branch can print End of file and set eof = True. Any option that tests for '' on line 05 never reaches that else branch and loops forever, and comparing with None is useless because readline() never returns None."
  },
  {
    "id": 142,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are creating a function that reads a data file and prints each line of that file. Consider the following code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) import os<br>2) def read_file(file):<br>3)   line = None<br>4)   if os.path.isfile(file):<br>5)     data = open(file, 'r')<br>6)   while line != '':<br>7)     line = data.readline()<br>8)     print(line)</div><br>The code attempts to read the file even if the file does not exist. You need to correct the code. Which lines have indentation problems?",
    "options": [
      "A. First 3 lines inside the function",
      "B. Last 3 lines inside the function",
      "C. Last 2 lines inside the function",
      "D. There is no indentation problem"
    ],
    "answer": "B. Last 3 lines inside the function",
    "explanation": "Lines 6, 7 and 8 sit at the same level as the if statement, so the while loop runs even when os.path.isfile returns False and data was never assigned, raising UnboundLocalError. Indenting those last three lines of the function into the if block makes the read happen only when the file exists. The first three lines (import, def and the line = None initialisation) are already at the correct level."
  },
  {
    "id": 143,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You develop a Python application for your school. You need to read and write data to a text file. If the file does not exist it must be created. If the file has content, the content must be removed.<br>Which code should you use?",
    "options": [
      "A. open(\"local_data\", \"r+\")",
      "B. open(\"local_data\", \"w+\")",
      "C. open(\"local_data\", \"r\")",
      "D. open(\"local_data\", \"w\")"
    ],
    "answer": "B. open(\"local_data\", \"w+\")",
    "explanation": "Mode w+ opens a file for both writing and reading, creates the file when it is missing, and truncates it to zero length when it already exists. Mode r+ also allows reading and writing but raises FileNotFoundError when the file does not exist and it keeps the existing content; r is read-only and w is write-only, so neither supports reading and writing together."
  },
  {
    "id": 144,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You develop a Python application for your school. You need to read and write data to a text file. If the file does not exist, it must be created. If the file has content, the content must be removed.<br>Which code should you use?",
    "options": [
      "A. open('abc.txt', 'w+')",
      "B. open('abc.txt', 'r')",
      "C. open('abc.txt', 'a')",
      "D. open('abc.txt', 'r+')"
    ],
    "answer": "A. open('abc.txt', 'w+')",
    "explanation": "Only w+ gives read and write access while creating a missing file and truncating an existing one. Mode r is read-only and fails when the file is missing, a appends instead of clearing the content, and r+ needs the file to already exist and preserves what is in it."
  },
  {
    "id": 145,
    "domain": "Input & output operations",
    "type": "multiple_select",
    "question": "You are creating a function that reads a data file and prints each line of the file. You write the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 import os<br>02 def read_file(file):<br>03 &nbsp;&nbsp;&nbsp;&nbsp;line = None<br>04 &nbsp;&nbsp;&nbsp;&nbsp;if os.path.isfile(file):<br>05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = open(file, 'r')<br>06 &nbsp;&nbsp;&nbsp;&nbsp;while line != '':<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line = data.readline()<br>08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)</div>The code attempts to read the file even if the file does not exist. You need to correct the code. Which three lines have indentation problems? Each correct answer presents part of the solution. (Choose 3.)",
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
    "explanation": "Lines 06, 07 and 08 are indented at the function body level, so the reading loop runs even when os.path.isfile() returns False and data was never assigned, which raises UnboundLocalError. Indenting those three lines one more level moves the whole loop inside the if block so the file is only read when it exists. Lines 01 to 05 are already at the correct level: line 05 is properly nested under the if statement."
  },
  {
    "id": 146,
    "domain": "Input & output operations",
    "type": "ordering",
    "question": "You are writing a function that works with files. You need to ensure that the function returns None if the file does not exist. If the file does exist, the function must return the first line.<br>You write the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>def get_first_line(filename, mode):</div>In which order should you arrange the code segments to complete the function body? Every segment is used exactly once.<br>Segment 1 &rarr; ____<br>Segment 2 &rarr; ____<br>Segment 3 &rarr; ____<br>Segment 4 &rarr; ____<br>Segment 5 &rarr; ____",
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
    "explanation": "The existence test must come first so the file is only opened when os.path.isfile() is True. Inside that branch the with statement opens the file and readline() returns its first line, and the else branch returns None for a missing file. Putting the with statement or the return before the if test would either crash on a missing file or make the existence check useless."
  },
  {
    "id": 147,
    "domain": "Input & output operations",
    "type": "multiple_select",
    "question": "Consider the following code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>def get_data(filename, mode):<br>&nbsp;&nbsp;&nbsp;&nbsp;if os.path.isfile(filename):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with open(filename, 'r') as file:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return file.readline()<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return None</div>Which two statements are valid about this code? (Choose 2.)",
    "options": [
      "A. This function returns the first line of the file if it is available",
      "B. This function returns None if the file does not exist",
      "C. This function returns the total data present in the file",
      "D. This function returns the last line of the file"
    ],
    "answer": [
      "A. This function returns the first line of the file if it is available",
      "B. This function returns None if the file does not exist"
    ],
    "explanation": "readline() reads a single line and the return statement exits the function immediately, so only the first line is ever produced, and the else branch returns None when os.path.isfile() is False. Returning the whole file would require read() and returning the last line would require reading to the end of the file, so neither C nor D describes this code."
  },
  {
    "id": 148,
    "domain": "Input & output operations",
    "type": "fill_in_blank",
    "question": "Northwind Electric Cars needs help updating their file system using Python code. You must create a simple file manipulation program that performs the following actions:<br>- Checks to see if a file exists.<br>- If the file exists, displays its contents.<br>- If the file does not exist, creates a file using the specified name.<br>- Appends the phrase \"End of listing\" to the file. The file must be reopened for writing only, with no read access.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import os<br>if ____<br>&nbsp;&nbsp;&nbsp;&nbsp;file = open('myFile.txt')<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;file.close()<br>file = ____<br>____(\"End of listing\")</div>",
    "options": {
      "file_exists_check": [
        "isfile('myFile.txt'):",
        "os.exist('myFile.txt'):",
        "os.find('myFile.txt'):",
        "os.path.isfile('myFile.txt'):"
      ],
      "display_contents": [
        "output('myFile.txt')",
        "print(file.get('myFile.txt'))",
        "print(file.read())",
        "print('myFile.txt')"
      ],
      "open_for_append": [
        "open('myFile.txt', 'a')",
        "open('myFile.txt', 'a+')",
        "open('myFile.txt', 'w')",
        "open('myFile.txt', 'w+')"
      ],
      "write_call": [
        "append",
        "file.add",
        "file.write",
        "write"
      ]
    },
    "answer": {
      "file_exists_check": "os.path.isfile('myFile.txt'):",
      "display_contents": "print(file.read())",
      "open_for_append": "open('myFile.txt', 'a')",
      "write_call": "file.write"
    },
    "explanation": "os.path.isfile() is the standard existence test, and file.read() returns the whole content of the opened file so print() can display it. Mode a creates the file when it is missing and positions the stream at the end so new text is appended, while w and w+ would erase the existing content and a+ would add read access the requirements exclude. Writing is done through the file object's write() method, so the call must be file.write(\"End of listing\")."
  },
  {
    "id": 149,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Which of the following statements about opening files in Python are true?",
    "options": [
      "A. When you open a file for reading, if the file does not exist, an error occurs",
      "B. When you open a file for writing, if the file does not exist, a new file is created",
      "C. When you open a file for writing, if the file exists, the existing file is overwritten with the new file",
      "D. All of the mentioned"
    ],
    "answer": "D. All of the mentioned",
    "explanation": "Opening a missing file with mode r raises FileNotFoundError, opening a missing file with mode w creates it, and opening an existing file with mode w truncates it to zero length. Since statements A, B and C are all correct descriptions of Python's file modes, the complete answer is D."
  },
  {
    "id": 150,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "To read the entire remaining contents of the file as a string from a file object named infile, we use ____",
    "options": [
      "A. infile.read(2)",
      "B. infile.read()",
      "C. infile.readline()",
      "D. infile.readlines()"
    ],
    "answer": "B. infile.read()",
    "explanation": "Calling read() with no size argument returns everything left in the file as a single string. read(2) returns only two characters, readline() returns just the next line, and readlines() returns a list of lines rather than one string."
  },
  {
    "id": 151,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "What is the use of the tell() method in Python?",
    "options": [
      "A. tells you the current position within the file",
      "B. tells you the end position within the file",
      "C. tells you the file is opened or not",
      "D. none of the mentioned"
    ],
    "answer": "A. tells you the current position within the file",
    "explanation": "tell() returns the current offset of the file pointer, which is the position where the next read or write will happen. To reach the end of the file you would have to seek(0, 2) first, and whether a file is open is exposed by the closed attribute, not by tell()."
  },
  {
    "id": 152,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Which of the following string declarations spans more than one line and considers whitespace properly when the string is printed to the console?",
    "options": [
      "A. s1='durga<br>software<br>solutions'",
      "B. s1=\"durga<br>software<br>solutions\"",
      "C. s1='durga\\n<br>software\\n<br>solutions'",
      "D. s1='''durga<br>software<br>solutions'''"
    ],
    "answer": "D. s1='''durga<br>software<br>solutions'''",
    "explanation": "Only a triple-quoted literal may contain real line breaks, and it keeps every newline and space exactly as typed. Single- and double-quoted literals must end on the line they start on, so options A, B and C all raise SyntaxError: unterminated string literal."
  },
  {
    "id": 153,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Consider the following code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>print(type(input('Enter some value:')))</div>If you enter 10 on the first run and 10.0 on the second run, what is the output?",
    "options": [
      "A. 1) &lt;class 'str'&gt;<br>2) &lt;class 'str'&gt;",
      "B. 1) &lt;class 'int'&gt;<br>2) &lt;class 'float'&gt;",
      "C. 1) &lt;class 'int'&gt;<br>2) &lt;class 'int'&gt;",
      "D. 1) &lt;class 'float'&gt;<br>2) &lt;class 'float'&gt;"
    ],
    "answer": "A. 1) &lt;class 'str'&gt;<br>2) &lt;class 'str'&gt;",
    "explanation": "In Python 3 input() always returns the typed characters as a str and never converts them, so both runs report the str type. Getting int or float would require wrapping the call in int(), float() or eval()."
  },
  {
    "id": 154,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Consider the following code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>print(type(eval(input('Enter some value:'))))</div>If you enter 10 on the first run and 10.0 on the second run, what is the output?",
    "options": [
      "A. 1) &lt;class 'str'&gt;<br>2) &lt;class 'str'&gt;",
      "B. 1) &lt;class 'int'&gt;<br>2) &lt;class 'float'&gt;",
      "C. 1) &lt;class 'int'&gt;<br>2) &lt;class 'int'&gt;",
      "D. 1) &lt;class 'float'&gt;<br>2) &lt;class 'float'&gt;"
    ],
    "answer": "B. 1) &lt;class 'int'&gt;<br>2) &lt;class 'float'&gt;",
    "explanation": "eval() evaluates the entered text as a Python expression, so the literal 10 becomes an int and the literal 10.0 becomes a float. Without eval() both results would stay str, and eval() does not force every value to a single numeric type."
  },
  {
    "id": 155,
    "domain": "Input & output operations",
    "type": "true_false",
    "question": "For each of the following statements, select True if the statement is valid, or False if it is not.",
    "options": {
      "statement1": "The assignment s = \"Durga Sir's Python Classes are Good\" causes an error because double quotes and single quotes cannot be used at the same time.",
      "statement2": "After result = 456 + 456.0, the type of result is int.",
      "statement3": "The expression False + 5 - True + 35 // 4 evaluates to 12.",
      "statement4": "The statement print('result:', (7/2) + (False or True) + (9%3)) prints result: 4.5 to the console."
    },
    "answer": {
      "statement1": "False: The assignment s = \"Durga Sir's Python Classes are Good\" causes an error because double quotes and single quotes cannot be used at the same time.",
      "statement2": "False: After result = 456 + 456.0, the type of result is int.",
      "statement3": "True: The expression False + 5 - True + 35 // 4 evaluates to 12.",
      "statement4": "True: The statement print('result:', (7/2) + (False or True) + (9%3)) prints result: 4.5 to the console."
    },
    "explanation": "A single quote inside a double-quoted literal is perfectly legal, so statement 1 is wrong, and adding an int to a float produces a float, so statement 2 is wrong. In statement 3, bool acts as 0 and 1, giving 0 + 5 - 1 + 8 = 12. In statement 4, 7/2 is 3.5, False or True is True which counts as 1, and 9%3 is 0, so print outputs result: 4.5."
  },
  {
    "id": 156,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Consider the file abc.txt:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Durga:10<br>Ravi:20<br>Shiva:30<br>Pavan:40</div>Consider the Python file test.py, stored in the same folder as abc.txt:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>values = 0<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;f = open('abc.txt', 'r')<br>&nbsp;&nbsp;&nbsp;&nbsp;content = f.readlines()<br>&nbsp;&nbsp;&nbsp;&nbsp;for line in content:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values += float(line.split(':')[1])<br>&nbsp;&nbsp;&nbsp;&nbsp;f.close()<br>except Exception:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Unable to open the file')<br>print(values)</div>What is the result?",
    "options": [
      "A. Unable to open the file",
      "B. 100",
      "C. 100.0",
      "D. 10.0"
    ],
    "answer": "C. 100.0",
    "explanation": "The file opens successfully, so no exception is raised, and each line contributes float(line.split(':')[1]), that is 10.0 + 20.0 + 30.0 + 40.0. Adding floats to the int 0 promotes the total to float, so print shows 100.0 rather than the int 100."
  },
  {
    "id": 157,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "To write the text Python Certificaton to the file abc.txt, which of the following is valid code?",
    "options": [
      "A. f=open('abc.txt','b')<br>f.write('Python Certificaton')<br>f.close()",
      "B. f=open('abc.txt','r')<br>f.write('Python Certificaton')<br>f.close()",
      "C. f=open('abc.txt')<br>f.write('Python Certificaton')<br>f.close()",
      "D. f=open('abc.txt','w')<br>f.write('Python Certificaton')<br>f.close()"
    ],
    "answer": "D. f=open('abc.txt','w')<br>f.write('Python Certificaton')<br>f.close()",
    "explanation": "Mode w opens the file for writing, creating or truncating it, so write() succeeds. Mode b on its own is not a valid mode string and raises ValueError, while r and the default mode open the file read-only, so write() raises io.UnsupportedOperation: not writable."
  },
  {
    "id": 158,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Consider the data present in the file abc.txt:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>DURGASOFT,50,60,70,80,90<br>MICROSOFT,10,20,30,40,50</div>Which of the following is valid code to read the total data from the file?",
    "options": [
      "A. with open('abc.txt','r') f:<br>&nbsp;&nbsp;&nbsp;&nbsp;data=f.read()",
      "B. with open('abc.txt') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;data=f.read()",
      "C. with open('abc.txt','w') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;data=f.read()",
      "D. with open('abc.txt') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;data=f.readline()"
    ],
    "answer": "B. with open('abc.txt') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;data=f.read()",
    "explanation": "The default mode of open() is r, and read() returns the whole file as one string, so option B collects all the data. Option A omits the as keyword and is a SyntaxError, option C opens in w mode which truncates the file and makes read() raise io.UnsupportedOperation, and option D reads only the first line."
  },
  {
    "id": 159,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Assume that you are writing Python code for a voting application. You need to open the file voters_list.txt, add new voter information, and print the total data to the console.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>with open('voters_list.txt', 'a+') as f:<br>&nbsp;&nbsp;&nbsp;&nbsp;f.write('New voters info')<br>&nbsp;&nbsp;&nbsp;&nbsp;#Line-1<br>&nbsp;&nbsp;&nbsp;&nbsp;data = f.read()<br>&nbsp;&nbsp;&nbsp;&nbsp;print(data)</div>Which line should be inserted at Line-1?",
    "options": [
      "A. f.seek(0)",
      "B. f.flush()",
      "C. f.begin()",
      "D. f.close()"
    ],
    "answer": "A. f.seek(0)",
    "explanation": "After the write in a+ mode the file pointer sits at the end of the file, so read() returns an empty string until the pointer is moved back with seek(0). flush() only pushes buffered bytes to disk without moving the pointer, close() would make the following read() fail on a closed file, and file objects have no begin() method."
  },
  {
    "id": 160,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You write the following code.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import datetime<br>d = datetime.datetime(2017, 4, 7)<br>print('{:%B-%d-%y}'.format(d))<br><br>num = 1234567.890<br>print('{:,.4f}'.format(num))</div>You run the program. What is the output?",
    "options": [
      "A. 2017-April-07<br>1,234,567.890",
      "B. Apr-07-2017<br>1,234,567,8900",
      "C. April-07-17<br>1,234,567.8900",
      "D. April-07-17<br>1234567.89"
    ],
    "answer": "C. April-07-17<br>1,234,567.8900",
    "explanation": "In the date format, %B is the full month name, %d is the zero-padded day and %y is the two-digit year, so the first line prints April-07-17. In the number format the comma turns on thousands separators and .4f forces four digits after the decimal point, producing 1,234,567.8900."
  },
  {
    "id": 161,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Northwind Traders has hired you as an intern on the coding team that creates e-commerce applications. You must write a script that asks the user for a value. The value must be used as a whole number in a calculation, even if the user enters a decimal value.<br>Which code segment should you use?",
    "options": [
      "A. totalItems = int(input(\"How many items would you like?\"))",
      "B. totalItems = str(input(\"How many items would you like?\"))",
      "C. totalItems = float(input(\"How many items would you like?\"))",
      "D. totalItems = input(\"How many items would you like?\")"
    ],
    "answer": "A. totalItems = int(input(\"How many items would you like?\"))",
    "explanation": "Only int() converts the entered text into a whole number that can be used directly in arithmetic. float() keeps a decimal part, while str() and a bare input() leave the value as text, so any calculation would raise a TypeError or concatenate strings instead of adding numbers."
  },
  {
    "id": 162,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You develop a Python application for your company. You need to accept input from the user and print that information to the user screen. You have started with the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 print(\"What is your name?\")<br>02<br>03 print(name)</div>Which code should you write at line 02?",
    "options": [
      "A. name = input",
      "B. input(name)",
      "C. name = input()",
      "D. input(\"name\")"
    ],
    "answer": "C. name = input()",
    "explanation": "input() must be called with parentheses and its return value assigned so that line 03 has a variable to print. Option A binds the built-in function object itself rather than the typed text, while options B and D never assign anything and would additionally raise NameError for the undefined name in option B."
  },
  {
    "id": 163,
    "domain": "Input & output operations",
    "type": "multiple_select",
    "question": "If the user enters 12345 as input, which of the following code segments will print 12346 to the console? (Choose 3.)",
    "options": [
      "A. count=input('Enter count value:')<br>print(count+1)",
      "B. count=input('Enter count value:')<br>print(int(count)+1)",
      "C. count=eval(input('Enter count value:'))<br>print(count+1)",
      "D. count=int(input('Enter count value:'))<br>print(count+1)"
    ],
    "answer": [
      "B. count=input('Enter count value:')<br>print(int(count)+1)",
      "C. count=eval(input('Enter count value:'))<br>print(count+1)",
      "D. count=int(input('Enter count value:'))<br>print(count+1)"
    ],
    "explanation": "input() returns the text '12345', so it must be turned into a number before 1 can be added: int() does that in options B and D, and eval() evaluates the typed digits as the int literal 12345 in option C. Option A adds 1 to a str and raises TypeError: can only concatenate str (not \"int\") to str."
  },
  {
    "id": 164,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are creating a program that shows a congratulation message to employees on their service anniversary. You need to calculate the number of years of service and print a congratulatory message. You have written the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 start = input(\"How old were you on your start date?\")<br>02 end = input(\"How old are you today?\")<br>03</div>Which code should you use at line 03?",
    "options": [
      "A. print(\"congratulations on \" + int(end - start) + \" years of service!\")",
      "B. print(\"congratulations on \" + (int(end) - int(start)) + \" years of service!\")",
      "C. print(\"congratulations on \" + str(end - start) + \" years of service!\")",
      "D. print(\"congratulations on \" + str(int(end) - int(start)) + \" years of service!\")"
    ],
    "answer": "D. print(\"congratulations on \" + str(int(end) - int(start)) + \" years of service!\")",
    "explanation": "start and end are strings, so each must be converted with int() before subtracting, and the numeric result must be converted back with str() before it can be joined to the surrounding text. Options A and C subtract two strings and raise TypeError: unsupported operand type(s) for -, and option B tries to concatenate an int to a str, which also raises TypeError."
  },
  {
    "id": 165,
    "domain": "Input & output operations",
    "type": "fill_in_blank",
    "question": "You are an intern for Northwind Electric Cars. You must create a function that calculates the average velocity of their vehicles on a 1320 foot (1/4 mile) track. The output must be as precise as possible.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Speed calculator<br>distance = ____(input(\"Enter the distance traveled in feet\"))<br>distance_miles = distance / 5280&nbsp;&nbsp;&nbsp;&nbsp;#convert to miles<br>time = ____(input(\"Enter the time elapsed in seconds\"))<br>time_hours = time / 3600&nbsp;&nbsp;&nbsp;&nbsp;#convert to hours<br>velocity = distance_miles / time_hours<br>print(\"The average velocity is : \", velocity, \" miles/hour\")</div>",
    "options": {
      "distance_conversion": [
        "int",
        "float",
        "str"
      ],
      "time_conversion": [
        "int",
        "float",
        "str"
      ]
    },
    "answer": {
      "distance_conversion": "float",
      "time_conversion": "float"
    },
    "explanation": "float() keeps the fractional part of whatever the user types, which is what makes the calculated velocity as precise as possible. int() would discard any decimals entered for the distance or the elapsed time and lose accuracy, and str() would leave the values as text so the divisions would raise TypeError."
  },
  {
    "id": 166,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are an intern for XYZ Cars Company. You have to create a function that calculates the average velocity of a vehicle on a 2640 foot (1/2 mile) track. Consider the following Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>distance = xxx(input('Enter the distance travelled in feet:'))&nbsp;&nbsp;&nbsp;&nbsp;#Line-1<br>distance_miles = distance / 5280<br>time = yyy(input('Enter the time elapsed in seconds:'))&nbsp;&nbsp;&nbsp;&nbsp;#Line-2<br>time_hours = time / 3600<br>velocity = distance_miles / time_hours<br>print('The average Velocity:', velocity, 'miles/hour')</div>To generate the most precise output, which modifications should be done at Line-1 and at Line-2?",
    "options": [
      "A. xxx should be replaced with float and yyy should be replaced with float",
      "B. xxx should be replaced with float and yyy should be replaced with int",
      "C. xxx should be replaced with int and yyy should be replaced with float",
      "D. xxx should be replaced with int and yyy should be replaced with int"
    ],
    "answer": "A. xxx should be replaced with float and yyy should be replaced with float",
    "explanation": "Both the distance and the elapsed time can be entered with decimals, so converting each with float() preserves the full precision of the input. Any option that uses int() truncates the fractional part of that value before the division, which makes the resulting velocity less accurate."
  },
  {
    "id": 167,
    "domain": "Input & output operations",
    "type": "multiple_select",
    "question": "You are creating an ecommerce script that accepts input from the user and outputs the data in a comma delimited format. You write the following lines of code to accept input:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>item = input('Enter the item name: ')<br>sales = input('Enter the quantity: ')</div>The output must meet the following requirements:<br>- Strings must be enclosed inside of double-quotes<br>- Numbers must not be enclosed in quotes or other characters<br>- Each item must be separated with a comma<br>You need to complete the code to meet the requirements. Which three code segments should you use? Each correct answer presents a complete solution. (Choose 3.)",
    "options": [
      "A. print('\"{0}\",{1}'.format(item, sales))",
      "B. print(item + ',' + sales)",
      "C. print('\"' + item + '\",' + sales)",
      "D. print(\"{0},{1}\".format(item, sales))",
      "E. print('\"%s\", %s' % (item, sales))"
    ],
    "answer": [
      "A. print('\"{0}\",{1}'.format(item, sales))",
      "C. print('\"' + item + '\",' + sales)",
      "E. print('\"%s\", %s' % (item, sales))"
    ],
    "explanation": "Options A, C and E each wrap the item name in literal double quotes, leave the quantity bare, and separate the two values with a comma, producing output such as \"widget\",5. Options B and D print the item name without any surrounding double quotes, so they fail the first requirement."
  },
  {
    "id": 168,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are developing an app in which students provide a college name and a city as input. If the student provides the college name DURGASOFT and the city Hyderabad, the application must display the greeting message: Welcome to DURGASOFT in Hyderabad<br>Which of the following code segments can be used for this requirement?",
    "options": [
      "A. college_name=input('Enter Your College Name:')<br>city=input('Enter Your City:')<br>print('Welcome to {} in {}'.format(college_name,city))",
      "B. college_name=read('Enter Your College Name:')<br>city=read('Enter Your City:')<br>print('Welcome to {} in {}'.format(college_name,city))",
      "C. college_name=eval('Enter Your College Name:')<br>city=eval('Enter Your City:')<br>print('Welcome to {} in {}'.format(college_name,city))",
      "D. college_name=str('Enter Your College Name:')<br>city=str('Enter Your City:')<br>print('Welcome to {} in {}'.format(college_name,city))"
    ],
    "answer": "A. college_name=input('Enter Your College Name:')<br>city=input('Enter Your City:')<br>print('Welcome to {} in {}'.format(college_name,city))",
    "explanation": "input() is the only built-in that displays the prompt and returns what the user types, which the format() call then substitutes into the greeting. read() is not a built-in function and raises NameError, eval() on the prompt text tries to evaluate it as Python source and raises SyntaxError, and str() simply returns the prompt itself so the message would repeat the prompt instead of the user's answer."
  },
  {
    "id": 169,
    "domain": "Input & output operations",
    "type": "ordering",
    "question": "You are writing a function to read a data file and print the results as a formatted table. The data file contains information about fruit. Each record contains the name of the fruit, the weight and the price.<br>You need to print the data so that it looks like the following sample:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Oranges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.6&nbsp;&nbsp;&nbsp;&nbsp;1.33<br>Apples&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.0&nbsp;&nbsp;&nbsp;&nbsp;0.54<br>Grapes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2&nbsp;&nbsp;&nbsp;10.96</div>The print out must meet the following requirements:<br>&bull; The fruit name must print left-aligned in a column 10 spaces wide.<br>&bull; The weight must print right-aligned in a column 5 spaces wide with up to one digit after the decimal point.<br>&bull; The price must print right-aligned in a column 7 spaces wide with up to two digits after the decimal point.<br>You write the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def print_table(file):<br>02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = open(file, 'r')<br>03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for record in data:<br>04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fields = record.split(',')<br>05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;slot 1&gt;&lt;slot 2&gt; &lt;slot 3&gt; &lt;slot 4&gt;\".format(fields[0], eval(fields[1]), eval(fields[2])))</div>Drag the appropriate code segments into the four slots of line 05.<br>Slot 1 &rarr; ____<br>Slot 2 &rarr; ____<br>Slot 3 &rarr; ____<br>Slot 4 &rarr; ____",
    "options": [
      "print(\"",
      "{:<10}",
      "{:>5.1f}",
      "{:>7.2f}",
      "{:>10}",
      "{:<5.1f}",
      "{:<7.2f}"
    ],
    "answer": [
      "print(\"",
      "{:<10}",
      "{:>5.1f}",
      "{:>7.2f}"
    ],
    "explanation": "In a format specification the alignment character comes right after the colon: '<' forces left alignment and '>' forces right alignment, the number after it is the field width, and '.1f'/'.2f' fix the number of decimals. So {:<10} pads the name on the right to 10 columns, {:>5.1f} right-aligns the weight in 5 columns with one decimal and {:>7.2f} right-aligns the price in 7 columns with two decimals. The distractors carry the opposite alignment character, so the name would be pushed right and the numbers left, and the columns would not line up."
  },
  {
    "id": 170,
    "domain": "Input & output operations",
    "type": "fill_in_blank",
    "question": "You are writing a Python program to validate employee numbers. The employee number must have the format ddd-dd-dddd and consist only of numbers and dashes. The program must print True if the format is correct and print False if the format is incorrect. The program keeps asking for numbers until the user types the sentinel value.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____<br>parts = \"\"<br>____<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;employee_number = input('Enter employee number (ddd-dd-dddd): ')<br>&nbsp;&nbsp;&nbsp;&nbsp;parts = employee_number.split('-')<br>&nbsp;&nbsp;&nbsp;&nbsp;if len(parts) == 3:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(parts[0]) == 3 and len(parts[1]) == 2 and len(parts[2]) == 4:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;print(valid)</div>",
    "options": {
      "initial_value": [
        "employee_number = \"\"",
        "employee_number = \"sentinel\""
      ],
      "loop_statement": [
        "while employee_number != \"\":",
        "while employee_number != \"sentinel\":"
      ],
      "reset_flag": [
        "valid = False",
        "valid = True"
      ],
      "set_flag": [
        "valid = False",
        "valid = True"
      ]
    },
    "answer": {
      "initial_value": "employee_number = \"\"",
      "loop_statement": "while employee_number != \"sentinel\":",
      "reset_flag": "valid = False",
      "set_flag": "valid = True"
    },
    "explanation": "A sentinel-controlled loop must start with the control variable holding a value that is NOT the sentinel, otherwise the loop body never runs, so employee_number is primed with the empty string and the loop keeps going until the user types 'sentinel'. valid must be reset to False at the top of every iteration and only set to True once all three format tests pass. Setting valid = True first and False inside the nested ifs would print True for every invalid number."
  },
  {
    "id": 171,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "You are writing a Python program to validate employee numbers. The employee number must have the format dd-ddd-dddd and consist only of numbers and dashes. The program must print True if the format is correct, otherwise print False.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) employee_number = input('Enter Your Employee Number(dd-ddd-dddd):')<br>2) parts = employee_number.split('-')<br>3) valid = False<br>4) if len(parts) == 3:<br>5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if len(parts[0]) == 2 and len(parts[1]) == 3 and len(parts[2]) == 4:<br>6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():<br>7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;valid = True<br>8) print(valid)</div>Which of the following is true about this code?",
    "options": [
      "A. It will throw an error because of misuse of the split() method",
      "B. It will throw an error because of misuse of the isDigit() method",
      "C. There is no error but it will not fulfill our requirement.",
      "D. No changes are required for this code and it can fulfill the requirement."
    ],
    "answer": "D. No changes are required for this code and it can fulfill the requirement.",
    "explanation": "split('-') correctly breaks the string into three parts and the method is named isdigit(), which is exactly what the code calls, so neither A nor B applies. The three length tests 2, 3 and 4 match the dd-ddd-dddd pattern and isdigit() rejects anything that is not made of digits, so the code prints True only for a correctly formatted number. Note that Python has no isDigit() method, so option B describes a method the code never uses."
  },
  {
    "id": 172,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following program?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 x = \"ITVEDANT\"<br>02 print(\"%20s\", x)</div>",
    "options": [
      "A. 20 blank spaces after \"ITVEDANT\"",
      "B. 20 blank spaces before \"ITVEDANT\"",
      "C. None of these.",
      "D. ITVEDANT padded to a width of 20 characters"
    ],
    "answer": "C. None of these.",
    "explanation": "The % formatting operator is never applied here: the comma makes '%20s' and x two separate arguments to print(), so Python simply prints them side by side separated by a space, giving %20s ITVEDANT. Padding would only happen with print('%20s' % x), which uses the % operator instead of a comma."
  },
  {
    "id": 173,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python program?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 d = '{a}{b}{a}'.format(a='hello', b='world')<br>02 print(d)</div>",
    "options": [
      "A. hello world",
      "B. hello world hello",
      "C. helloworldhello",
      "D. hello hello world"
    ],
    "answer": "C. helloworldhello",
    "explanation": "Named replacement fields are substituted wherever they appear, and {a} appears twice, so the template becomes hello + world + hello. There are no spaces or separators between the fields in the template string, so nothing is inserted between the words and the result is one run-on string."
  },
  {
    "id": 174,
    "domain": "Input & output operations",
    "type": "multiple_choice",
    "question": "Consider the following statements:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1. print('V:{:.2f}'.format(123.45678)) will print to the console V:123.46<br>2. print('V:{:.2f}'.format(123.4)) will print to the console V:123.40<br>3. print('V:{:8.2f}'.format(1.45678)) will print to the console V:1.46<br>4. print('V:{:08.2f}'.format(1.45678)) will print to the console V:00001.46</div>Which of the above statements are true?",
    "options": [
      "A. only 1 and 2",
      "B. only 1, 2 and 4",
      "C. only 2 and 4",
      "D. 1, 2, 3 and 4"
    ],
    "answer": "B. only 1, 2 and 4",
    "explanation": "'.2f' rounds to two decimals and pads with a trailing zero, so statements 1 and 2 hold, and '08.2f' zero-fills the value to a total width of 8 characters, producing 00001.46, so statement 4 holds. Statement 3 is wrong because '8.2f' pads with spaces, not nothing, so the output is V: followed by four spaces and 1.46, not V:1.46."
  },
  {
    "id": 175,
    "domain": "Code documentation",
    "type": "multiple_choice",
    "question": "You develop an application for your company. You want to add notes to your code so other team members will understand it. What should you do?",
    "options": [
      "A. Place the notes after the last line of code separated by a blank line.",
      "B. Place the notes inside of parentheses on any line.",
      "C. Place the notes after the # sign on any line.",
      "D. Place the notes before the first line of code separated by a blank line."
    ],
    "answer": "C. Place the notes after the # sign on any line.",
    "explanation": "In Python the hash character starts a comment, and everything after it on that line is ignored by the interpreter, so notes can be placed after a # anywhere in the file. Text placed on its own line without a # (options A and D) would be parsed as code and raise a syntax error, and parentheses group expressions rather than mark comments."
  },
  {
    "id": 176,
    "domain": "Code documentation",
    "type": "multiple_choice",
    "question": "You are writing an application that uses the sqrt function. The program must reference the function using the name squareRoot. You need to import the function. Which code segment should you use?",
    "options": [
      "A. from math import sqrt as squareRoot",
      "B. from math.sqrt as squareRoot",
      "C. import math.sqrt as squareRoot",
      "D. import sqrt from math as squareRoot"
    ],
    "answer": "A. from math import sqrt as squareRoot",
    "explanation": "The form 'from module import name as alias' pulls a single object out of a module and binds it to a new name, which is exactly what is required here. 'from math.sqrt as squareRoot' is not valid syntax because from must be followed by import, 'import math.sqrt' fails because sqrt is a function and not a submodule, and 'import sqrt from math' reverses the required keyword order."
  },
  {
    "id": 177,
    "domain": "Code documentation",
    "type": "multiple_choice",
    "question": "Woodgrove Bank is migrating their legacy bank transaction code to Python. You have been hired to document the migrated code. Which documentation syntax is correct?",
    "options": [
      "A. Returns the current balance of the bank account<br>def get_balance():<br>&nbsp;&nbsp;&nbsp;&nbsp;return balance",
      "B. def get_balance():<br>&nbsp;&nbsp;&nbsp;&nbsp;/*Returns the current balance of the bank account*/<br>&nbsp;&nbsp;&nbsp;&nbsp;return balance",
      "C. //Returns the current balance of the bank account<br>def get_balance():<br>&nbsp;&nbsp;&nbsp;&nbsp;return balance",
      "D. def get_balance():<br>&nbsp;&nbsp;&nbsp;&nbsp;#Returns the current balance of the bank account<br>&nbsp;&nbsp;&nbsp;&nbsp;return balance"
    ],
    "answer": "D. def get_balance():<br>&nbsp;&nbsp;&nbsp;&nbsp;#Returns the current balance of the bank account<br>&nbsp;&nbsp;&nbsp;&nbsp;return balance",
    "explanation": "Python marks a comment with the hash character, so only the option that puts # in front of the descriptive text is valid. /* */ is the C-style block comment and // is the C-style line comment; both are syntax errors in Python, and bare text with no marker at all is parsed as code."
  },
  {
    "id": 178,
    "domain": "Code documentation",
    "type": "true_false",
    "question": "You create a function to calculate the power of a number. You need to ensure that the function is documented with comments. You create the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 # The calc_power function calculates exponents<br>02 # x is the base<br>03 # y is the exponent<br>04 # The value of x raised to the y power is returned<br>05 def calc_power(x, y):<br>06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;comment = \"#Return the value\"<br>07&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x**y # raise x to the y power</div>For each of the following statements, select True if the statement is correct. Otherwise, select False.",
    "options": {
      "statement1": "Lines 01 through 04 will be ignored for syntax checking.",
      "statement2": "The pound sign (#) is optional for lines 02 and 03.",
      "statement3": "The string in line 06 will be interpreted as a comment.",
      "statement4": "Line 07 contains an inline comment."
    },
    "answer": {
      "statement1": "True: Lines 01 through 04 will be ignored for syntax checking.",
      "statement2": "False: The pound sign (#) is optional for lines 02 and 03.",
      "statement3": "False: The string in line 06 will be interpreted as a comment.",
      "statement4": "True: Line 07 contains an inline comment."
    },
    "explanation": "Every line that begins with # is stripped by the tokenizer, so lines 01 to 04 are never parsed as code, and the text after # on line 07 is an inline comment. Each comment line needs its own # character, so removing it from lines 02 and 03 would turn them into invalid statements. Line 06 assigns a string literal to a variable; the # is inside quotes, so it is ordinary string data and not a comment."
  },
  {
    "id": 179,
    "domain": "Function definitions",
    "type": "multiple_select",
    "question": "Adventure Works Cycles is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs. You create the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01<br>02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name = input(\"What is your name? \")<br>03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return name<br>04<br>05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calories = miles * calories_per_mile<br>06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return calories<br>07 distance = int(input(\"How many miles did you bike this week? \"))<br>08 burn_rate = 50<br>09 biker = get_name()<br>10 calories_burned = calc_calories(distance, burn_rate)<br>11 print(biker, \", you burned about\", calories_burned, \"calories.\")</div>You need to define the two required functions. Which code segments should you use for line 01 and line 04? Each correct answer presents part of the solution. (Choose 2.)",
    "options": [
      "A. 01 def get_name():",
      "B. 01 def get_name(biker):",
      "C. 01 def get_name(name):",
      "D. 04 def calc_calories():",
      "E. 04 def calc_calories(miles, burn_rate):",
      "F. 04 def calc_calories(miles, calories_per_mile):"
    ],
    "answer": [
      "A. 01 def get_name():",
      "F. 04 def calc_calories(miles, calories_per_mile):"
    ],
    "explanation": "Line 09 calls get_name() with no arguments, so its definition must declare no parameters, and the body on line 05 uses the names miles and calories_per_mile, so the second header must declare exactly those two parameter names. Choosing def calc_calories(miles, burn_rate) would make calories_per_mile an undefined name and raise a NameError, and def calc_calories() would fail because line 10 passes two arguments."
  },
  {
    "id": 180,
    "domain": "Function definitions",
    "type": "true_false",
    "question": "You are writing a function that increments the player score in a game. The function has the following requirements:<br>&bull; If no value is specified for points, then points start at one.<br>&bull; If bonus is True, then points must be doubled.<br>You write the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def increment_score(score, bonus, points):<br>02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if bonus == True:<br>03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;points = points * 2<br>04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;score = score + points<br>05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return score<br>06 points = 5<br>07 score = 10<br>08 new_score = increment_score(score, True, points)</div>For each of the following statements, select True if the statement is correct. Otherwise, select False.",
    "options": {
      "statement1": "To meet the requirements, line 01 must be changed to def increment_score(score, bonus, points = 1):",
      "statement2": "Once any parameter is defined with a default value, any parameters to the right must also be defined with default values.",
      "statement3": "If the function is called with only two parameters, the value of the third parameter will be None.",
      "statement4": "Line 03 will also modify the value of the variable points declared at line 06."
    },
    "answer": {
      "statement1": "True: To meet the requirements, line 01 must be changed to def increment_score(score, bonus, points = 1):",
      "statement2": "True: Once any parameter is defined with a default value, any parameters to the right must also be defined with default values.",
      "statement3": "False: If the function is called with only two parameters, the value of the third parameter will be None.",
      "statement4": "False: Line 03 will also modify the value of the variable points declared at line 06."
    },
    "explanation": "Giving points the default value 1 is the only way to satisfy the rule that points start at one when no value is supplied, and Python requires that every parameter after the first defaulted parameter also have a default. Omitting an argument for a parameter with no default raises a TypeError rather than passing None. Line 03 only rebinds the local name points to a new integer, so the module-level points from line 06 still equals 5 after the call."
  },
  {
    "id": 181,
    "domain": "Function definitions",
    "type": "ordering",
    "question": "You are writing a function in Python that must meet the following requirements:<br>&bull; The function accepts a list and a string as parameters.<br>&bull; The function must search for the string in the list.<br>&bull; If the string is found in the list, the function must print a message indicating that the string was found and then stop iterating through the list.<br>&bull; If the string is not found, the function must print a message indicating that the string was not found in the list.<br>In which order should you arrange the code segments to develop the solution?<br>Line 1 &rarr; ____<br>Line 2 &rarr; ____<br>Line 3 &rarr; ____<br>Line 4 &rarr; ____<br>Line 5 &rarr; ____",
    "options": [
      "for i in range(len(items)):",
      "if items[i] == term: print(\"{0} was found in the list.\".format(term))",
      "break",
      "def search(items, term):",
      "else: print(\"{0} was not found in the list.\".format(term))"
    ],
    "answer": [
      "def search(items, term):",
      "for i in range(len(items)):",
      "if items[i] == term: print(\"{0} was found in the list.\".format(term))",
      "break",
      "else: print(\"{0} was not found in the list.\".format(term))"
    ],
    "explanation": "The def header has to come first, then the loop that walks the indexes, then the test that prints the success message, then break to stop iterating. The final else belongs to the for loop, not to the if: a for/else block runs its else only when the loop finished without hitting break, which is exactly the 'not found' case. Attaching the else to the if instead would print the not-found message once for every element that does not match."
  },
  {
    "id": 182,
    "domain": "Function definitions",
    "type": "fill_in_blank",
    "question": "You are developing a Python application for an online game. You need to create a function that meets the following criteria:<br>&bull; The function is named update_score<br>&bull; The function receives the current score and a value<br>&bull; The function adds the value to the current score<br>&bull; The function returns the new score<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>____ ____<br>&nbsp;&nbsp;&nbsp;&nbsp;current += value<br>&nbsp;&nbsp;&nbsp;&nbsp;____</div>",
    "options": {
      "function_header": [
        "update_score",
        "def update_score",
        "return update_score"
      ],
      "parameter_list": [
        "(current, value):",
        "(current, value)",
        "():",
        "()"
      ],
      "return_statement": [
        "pass current",
        "return current",
        "return",
        "pass"
      ]
    },
    "answer": {
      "function_header": "def update_score",
      "parameter_list": "(current, value):",
      "return_statement": "return current"
    },
    "explanation": "A function is created with the def keyword followed by its name, a parenthesised parameter list and a colon that opens the body. The two parameters current and value are needed so the caller can pass the score and the amount to add. The value must be handed back with return current; pass does nothing and a bare return would give back None instead of the new score."
  },
  {
    "id": 183,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "You are developing a Python application for an online game. You need to create a function that meets the following criteria:<br>&bull; The function is named update_score<br>&bull; The function receives the current score and a value.<br>&bull; The function adds the value to the current score.<br>&bull; The function returns the new score.<br>Which of the following is a valid function to fulfill this requirement?",
    "options": [
      "A. update_score(score,value):<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score=score+value<br>&nbsp;&nbsp;&nbsp;&nbsp;return new_score",
      "B. def update_score(score,value):<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score=score+value<br>&nbsp;&nbsp;&nbsp;&nbsp;return new_score",
      "C. def update_score(score,value):<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score=score+value<br>&nbsp;&nbsp;&nbsp;&nbsp;pass new_score",
      "D. def update_score():<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score=score+value<br>&nbsp;&nbsp;&nbsp;&nbsp;return new_score"
    ],
    "answer": "B. def update_score(score,value):<br>&nbsp;&nbsp;&nbsp;&nbsp;new_score=score+value<br>&nbsp;&nbsp;&nbsp;&nbsp;return new_score",
    "explanation": "A function definition needs the def keyword, a name, the parameters it receives and a return statement that hands the result back. Option A omits def so it is a syntax error, option C writes 'pass new_score' which is not valid because pass takes no operand, and option D declares no parameters so score and value would be undefined names."
  },
  {
    "id": 184,
    "domain": "Function definitions",
    "type": "fill_in_blank",
    "question": "A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name. You need to write a Python function that outputs the characters in a name in the correct order.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Function reverses characters in a string.<br>#returns new string in reversed order.<br>def reverse_name(backwards_name):<br>&nbsp;&nbsp;&nbsp;&nbsp;forward_name = ''<br>&nbsp;&nbsp;&nbsp;&nbsp;for index in ____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forward_name += ____<br>&nbsp;&nbsp;&nbsp;&nbsp;return forward_name<br>print(reverse_name(\"leinad\"))&nbsp;&nbsp;&nbsp;#test case</div>",
    "options": {
      "loop_sequence": [
        "backwards_name:",
        "len(backwards_name):",
        "range(0, len(backwards_name),-1):",
        "range(len(backwards_name)-1,-1,-1):"
      ],
      "character_expression": [
        "backwards_name[index-1]",
        "backwards_name[len(forward_name)-1]",
        "backwards_name[len(backwards_name)-len(forward_name)]",
        "backwards_name[index]"
      ]
    },
    "answer": {
      "loop_sequence": "range(len(backwards_name)-1,-1,-1):",
      "character_expression": "backwards_name[index]"
    },
    "explanation": "To walk a string backwards you need a range that starts at the last index, stops just past index 0 and steps by -1, which is range(len(backwards_name)-1, -1, -1); each pass then appends the character at that index. range(0, len(backwards_name), -1) is empty because a negative step can never move from 0 up to a larger stop value, and iterating over backwards_name directly would make index a character, not a position, so backwards_name[index] would fail."
  },
  {
    "id": 185,
    "domain": "Function definitions",
    "type": "fill_in_blank",
    "question": "You are writing a function to perform safe division. You need to ensure that a denominator and numerator are passed to the function and that the denominator is not zero.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def safe_divide(numerator, denominator):<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"A required value is missing.\")<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(\"The denominator is zero.\")<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return numerator / denominator</div>",
    "options": {
      "missing_value_check": [
        "if numerator is None or denominator is None:",
        "if numerator is None and denominator is None:",
        "if numerator = None or denominator = None:",
        "if numerator = None and denominator = None:"
      ],
      "zero_check": [
        "elif denominator == 0:",
        "elif denominator = 0:",
        "elif denominator != 0:",
        "elif denominator in 0:"
      ]
    },
    "answer": {
      "missing_value_check": "if numerator is None or denominator is None:",
      "zero_check": "elif denominator == 0:"
    },
    "explanation": "Either missing argument must trigger the warning, so the two None tests are joined with or, not and, and identity with None is tested using 'is'. A single = is assignment and is a syntax error inside a condition. The second branch must fire when the denominator equals zero, so it uses ==; 'elif denominator != 0' would print the zero warning for every valid divisor instead."
  },
  {
    "id": 186,
    "domain": "Function definitions",
    "type": "fill_in_blank",
    "question": "Wingtip Toys is creating an interactive Times Table Helper program intended for elementary school children. You need to complete a function that computes and displays all multiplication table combinations from 2 to 12.<br>How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>#Displays times tables 2 - 12<br>def times_tables():<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(row*col, end=\" \")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print()<br>#main<br>times_tables()</div>",
    "options": {
      "outer_loop": [
        "for col in range(13):",
        "for col in range(2, 12, 1):",
        "for col in range(2, 13):",
        "for col in range(12):"
      ],
      "inner_loop": [
        "for row in range(13):",
        "for row in range(2, 12, 1):",
        "for row in range(2, 13):",
        "for row in range(12):"
      ]
    },
    "answer": {
      "outer_loop": "for col in range(2, 13):",
      "inner_loop": "for row in range(2, 13):"
    },
    "explanation": "range(start, stop) includes start but excludes stop, so range(2, 13) is exactly the numbers 2 through 12 that the table needs. range(2, 12, 1) stops at 11 and misses the twelve times table, while range(13) and range(12) both start at 0 and would add unwanted 0 and 1 rows and columns."
  },
  {
    "id": 187,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def get_score(total=0, valid=0):<br>&nbsp;&nbsp;&nbsp;&nbsp;result = int(valid)/int(total)<br>&nbsp;&nbsp;&nbsp;&nbsp;return result</div>For which of the function calls will we get an error?",
    "options": [
      "A. score = get_score('40', '4')",
      "B. score = get_score(0, 10)",
      "C. score = get_score(40, 4)",
      "D. score = get_score(40)"
    ],
    "answer": "B. score = get_score(0, 10)",
    "explanation": "The first positional argument fills total and the second fills valid, so get_score(0, 10) computes 10/0 and raises ZeroDivisionError. The other calls all divide by a non-zero total: the strings '40' and '4' are converted by int() without trouble, and get_score(40) leaves valid at its default 0, giving 0/40 which is 0.0."
  },
  {
    "id": 188,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def get_names():<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;names = ['Sunny','Bunny','Chinny','Vinny','Pinny']<br>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return names[2:]<br>4)<br>5) def update_names(elements):<br>6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_names = []<br>7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for name in elements:<br>8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new_names.append(name[:3].upper())<br>9)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new_names<br>10)<br>11) print(update_names(get_names()))</div>What is the result?",
    "options": [
      "A. ['CHI', 'VIN', 'PIN']",
      "B. ['VIN', 'PIN']",
      "C. ['CH', 'VI', 'PI']",
      "D. ['SU', 'BU']"
    ],
    "answer": "A. ['CHI', 'VIN', 'PIN']",
    "explanation": "names[2:] slices from index 2 to the end, giving ['Chinny', 'Vinny', 'Pinny'], and name[:3] keeps the first three characters of each before upper() converts them. That produces three items of three letters each; options with two letters use a [:2] slice and the two-item option starts the slice at index 3."
  },
  {
    "id": 189,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def my_list(x):<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lst.append(a)<br>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return lst<br>4)<br>5) my_list('chicken')<br>6) my_list('mutton')<br>7) print(my_list('fish'))</div>The code must print the following to the console:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>['chicken','mutton','fish']</div>x should be replaced with:",
    "options": [
      "A. a,lst=[]",
      "B. a,lst=()",
      "C. a,lst={}",
      "D. a,lst=None"
    ],
    "answer": "A. a,lst=[]",
    "explanation": "Replacing x with a, lst=[] gives the second parameter a mutable default list, and because a default value is created once when the def executes, the same list object is reused and grows on every call, accumulating all three items. A tuple, a dict or None have no append method, so those choices raise an AttributeError on line 2."
  },
  {
    "id": 190,
    "domain": "Function definitions",
    "type": "multiple_select",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def f1(x=0, y=0):<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x+y</div>Which of the following method calls are valid? (Choose 3.)",
    "options": [
      "A. f1()",
      "B. f1('10','20')",
      "C. f1(10)",
      "D. f1('10')"
    ],
    "answer": [
      "A. f1()",
      "B. f1('10','20')",
      "C. f1(10)"
    ],
    "explanation": "Both parameters have defaults, so any number of arguments from zero to two is accepted; f1() adds 0+0, f1('10','20') concatenates the two strings into '1020', and f1(10) adds 10+0. f1('10') is the only invalid call because it leaves y at the integer default 0 and Python refuses to concatenate a str with an int, raising TypeError."
  },
  {
    "id": 191,
    "domain": "Function definitions",
    "type": "multiple_select",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def f1(x=0, y=0):<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x*y</div>Which of the following method calls are valid? (Choose 3.)",
    "options": [
      "A. f1()",
      "B. f1('10','20')",
      "C. f1(10)",
      "D. f1('10')"
    ],
    "answer": [
      "A. f1()",
      "C. f1(10)",
      "D. f1('10')"
    ],
    "explanation": "Multiplying a string by an integer is legal repetition, so f1('10') returns the empty string because y defaults to 0, while f1() and f1(10) are plain integer multiplications returning 0. f1('10','20') fails because a sequence can only be repeated by an integer, and multiplying two strings raises TypeError."
  },
  {
    "id": 192,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) numbers = [100,20,10,70,50,60,40,30,90,80]<br>2) #Insert Code Here<br>3) print('The highest Number:{} and Least Number:{}'.format(high, low))</div>Which of the following code should be inserted to print the highest number as 100 and the least number as 10?",
    "options": [
      "A. def find_numbers():<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>&nbsp;&nbsp;&nbsp;&nbsp;return numbers[0],numbers[-1]<br>low,high = find_numbers()",
      "B. def find_numbers():<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>&nbsp;&nbsp;&nbsp;&nbsp;return numbers[0],numbers[len(numbers)]<br>low,high = find_numbers()",
      "C. def find_numbers():<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>&nbsp;&nbsp;&nbsp;&nbsp;return numbers[0],numbers[-1]<br>low = find_numbers()<br>high = find_numbers()",
      "D. def find_numbers():<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>&nbsp;&nbsp;&nbsp;&nbsp;return numbers[2],numbers[0]<br>low,high = find_numbers()"
    ],
    "answer": "A. def find_numbers():<br>&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>&nbsp;&nbsp;&nbsp;&nbsp;return numbers[0],numbers[-1]<br>low,high = find_numbers()",
    "explanation": "After sort() the list runs from smallest to largest, so numbers[0] is 10 and numbers[-1] is 100, and returning them as a tuple lets low, high = find_numbers() unpack them into the right names. numbers[len(numbers)] is one past the end and raises IndexError, calling the function twice binds whole tuples to low and high so the tuples themselves get printed, and numbers[2] is 30, not the maximum."
  },
  {
    "id": 193,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) numbers = [100,20,10,70,50,60,40,30,90,80]<br>2)<br>3) def find_numbers():<br>4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numbers.sort()<br>5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return numbers[0],numbers[-1]<br>6)<br>7) low = find_numbers()<br>8) high = find_numbers()<br>9) #Line-1</div>To print 10 100 to the console, which of the following code do we have to use at Line-1?",
    "options": [
      "A. print(low,high)",
      "B. print(low[0],high[-1])",
      "C. print(low[-1],high[0])",
      "D. print(low[2],high[0])"
    ],
    "answer": "B. print(low[0],high[-1])",
    "explanation": "find_numbers() returns the whole tuple (10, 100), so both low and high hold that same tuple and each has to be indexed. low[0] is 10 and high[-1] is 100. Printing the variables directly would show two tuples, low[-1] and high[0] give them in the wrong order, and low[2] is out of range for a two-item tuple."
  },
  {
    "id": 194,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def calculate(amount=6, factor=3):<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if amount&gt;6:<br>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return amount*factor<br>4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return amount*factor*2</div>Which of the following function calls returns 30?",
    "options": [
      "A. calculate()",
      "B. calculate(10)",
      "C. calculate(5,2)",
      "D. calculate(1)"
    ],
    "answer": "B. calculate(10)",
    "explanation": "calculate(10) sets amount to 10, which is greater than 6, so the first branch returns 10*3 = 30 using the default factor. calculate() takes the else branch and returns 6*3*2 = 36, calculate(5,2) returns 5*2*2 = 20, and calculate(1) returns 1*3*2 = 6."
  },
  {
    "id": 195,
    "domain": "Function definitions",
    "type": "multiple_choice",
    "question": "Consider the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>1) def fib_seq(n):<br>2)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if n==0:<br>3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0<br>4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif n==1:<br>5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>6)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>7)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return fib_seq(n-1)+fib_seq(n-2)<br>8) for i in range(7):<br>9)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(fib_seq(i), end=',')</div>What is the result?",
    "options": [
      "A. 0,1,1,2,3,5,8,",
      "B. 0,1,2,4,8,16,32,",
      "C. 0,1,0,2,0,4,0,",
      "D. None of these"
    ],
    "answer": "A. 0,1,1,2,3,5,8,",
    "explanation": "The function is the classic recursive Fibonacci definition: 0 and 1 are the base cases and every later term is the sum of the two before it. Printing fib_seq(i) for i from 0 to 6 therefore gives 0, 1, 1, 2, 3, 5, 8, and end=',' appends a comma after each value including the last. Option B doubles each term, which is not what the recursion computes."
  },
  {
    "id": 196,
    "domain": "Error detection & fixing",
    "type": "multiple_choice",
    "question": "Tailspin Toys uses Python to control its new toy Happy Clown. The program has errors that cause the clown to run around in an infinite circle. You have been hired to help debug the following Happy Clown code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 import math<br>02 #default motion for happy clown<br>03 power = True<br>04 move = 0<br>05 while(power):<br>06 &nbsp;&nbsp;&nbsp;&nbsp;if move == 0:<br>07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;turnValue = math.pi/move<br>08 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move+=5<br>09 &nbsp;&nbsp;&nbsp;&nbsp;else:<br>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;turnValue = 0<br>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;move = 0</div>Which statement correctly describes the error in this code?",
    "options": [
      "A. Line 05 has a syntax error because it should read (power == True).",
      "B. Line 08 has a syntax error because + = is an invalid statement.",
      "C. Line 07 causes a runtime error due to division by zero.",
      "D. Line 05 causes a runtime error because the expression is incomplete."
    ],
    "answer": "C. Line 07 causes a runtime error due to division by zero.",
    "explanation": "move starts at 0, so the very first pass through the loop evaluates math.pi/move, which raises ZeroDivisionError at line 07. Line 05 is fine because while(power) tests the truth value of power directly, and move+=5 on line 08 is the ordinary augmented assignment operator, so neither is a syntax error."
  },
  {
    "id": 197,
    "domain": "Error detection & fixing",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def area(b,w):<br>&nbsp;&nbsp;&nbsp;&nbsp;return B*w<br>print(area(10,20))</div>What is the result?",
    "options": [
      "A. AttributeError will be raised at runtime",
      "B. IndentationError will be raised at runtime",
      "C. NameError will be raised at runtime",
      "D. 200"
    ],
    "answer": "C. NameError will be raised at runtime",
    "explanation": "Python identifiers are case sensitive, so the parameter is b while the body refers to B, a name that is never defined. Looking up an undefined name raises NameError when the function runs, not AttributeError (which needs an object missing a member) and not IndentationError (the indentation is consistent), so 200 is never printed."
  },
  {
    "id": 198,
    "domain": "Error detection & fixing",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>data=[]<br>def get_data():<br>&nbsp;&nbsp;&nbsp;&nbsp;for i in range(1,5):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;marks=input('Enter Marks:')<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data.append(marks)<br><br>def get_avg():<br>&nbsp;&nbsp;&nbsp;&nbsp;sum=0<br>&nbsp;&nbsp;&nbsp;&nbsp;for mark in data:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum += mark<br>&nbsp;&nbsp;&nbsp;&nbsp;return sum/len(data)<br><br>get_data()<br>print(get_avg())</div>For the input 10, 20, 30, 40 what is the result?",
    "options": [
      "A. 25",
      "B. 25.0",
      "C. NameError is thrown at runtime",
      "D. TypeError is thrown at runtime"
    ],
    "answer": "D. TypeError is thrown at runtime",
    "explanation": "input() always returns a string, so data holds ['10', '20', '30', '40']. Adding a string to the integer accumulator sum raises TypeError: unsupported operand type(s) for +=: 'int' and 'str'. The values are never converted with int(), so neither 25 nor 25.0 is ever produced, and every name used is defined so no NameError occurs."
  },
  {
    "id": 199,
    "domain": "Error detection & fixing",
    "type": "multiple_select",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=10<br>b=0<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(a/b)</div>Which except blocks print the name of the exception class that was raised? (Choose 2.)",
    "options": [
      "A. except ZeroDivisionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Exception Type:', e.__class__.__name__)",
      "B. except ZeroDivisionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Exception Type:', type(e).__name__)",
      "C. except ZeroDivisionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Exception Type:', e)",
      "D. All of these"
    ],
    "answer": [
      "A. except ZeroDivisionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Exception Type:', e.__class__.__name__)",
      "B. except ZeroDivisionError as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Exception Type:', type(e).__name__)"
    ],
    "explanation": "e.__class__ and type(e) both give the exception's class, and __name__ on that class is the string 'ZeroDivisionError'. Printing the exception object itself prints its message ('division by zero'), not the class name, so option C fails and therefore 'All of these' is wrong too."
  },
  {
    "id": 200,
    "domain": "Error detection & fixing",
    "type": "multiple_choice",
    "question": "Which of the following is a valid way of creating our own custom exception?",
    "options": [
      "A. class MyException:<br>&nbsp;&nbsp;&nbsp;&nbsp;pass",
      "B. class MyException():<br>&nbsp;&nbsp;&nbsp;&nbsp;pass",
      "C. class MyException(Exception):<br>&nbsp;&nbsp;&nbsp;&nbsp;pass",
      "D. It is not possible to define custom exceptions in Python"
    ],
    "answer": "C. class MyException(Exception):<br>&nbsp;&nbsp;&nbsp;&nbsp;pass",
    "explanation": "A custom exception must inherit from BaseException, and the recommended base is Exception. Options A and B both create a plain object subclass, so raising one fails with 'TypeError: exceptions must derive from BaseException', and Python clearly does allow user defined exceptions, so option D is false."
  },
  {
    "id": 201,
    "domain": "Error detection & fixing",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x=int(input('Enter First Number:'))<br>y=int(input('Enter Second Number:'))<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(x/y)</div>Which of the following is a valid except block that handles both ZeroDivisionError and ValueError?",
    "options": [
      "A. except(ZeroDivisionError,ValueError) from e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(e)",
      "B. except(ZeroDivisionError,ValueError) as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(e)",
      "C. except(ZeroDivisionError | ValueError) as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(e)",
      "D. except(ZeroDivisionError, ValueError as e):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(e)"
    ],
    "answer": "B. except(ZeroDivisionError,ValueError) as e:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(e)",
    "explanation": "To catch several exception types with one handler you list them in a tuple and bind the instance with 'as': except (ZeroDivisionError, ValueError) as e. 'from' is only used with raise, the pipe form tries to bitwise-or two classes and fails, and putting 'as e' inside the parentheses is a syntax error."
  },
  {
    "id": 202,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "You write the following code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in = open(\"in.txt\", 'r')<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out = open(\"out.txt\", 'w+')<br>except IOError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('cannot open', file_name)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;i = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;for line in file_in:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line.rstrip())<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file_out.write(\"line \" + str(i) + \": \" + line)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i = i + 1<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in.close()<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out.close()</div>The in.txt file exists but the out.txt file does not exist. You run the code. Review the underlined text: <b>The code will execute without error.</b> If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct.",
    "options": [
      "A. No change is needed.",
      "B. The code runs but generates a logic error.",
      "C. The code will generate a runtime error.",
      "D. The code will generate a syntax error."
    ],
    "answer": "C. The code will generate a runtime error.",
    "explanation": "Opening a file in 'w+' mode creates it when it does not already exist, so no IOError is raised, the else block runs and the file is copied line by line. Because the except branch never executes, the undefined name file_name inside it is never evaluated, so there is no runtime error, and the syntax is valid throughout."
  },
  {
    "id": 203,
    "domain": "Exception handling",
    "type": "true_false",
    "question": "For each of the following statements about the Python try statement, select True if the statement is true. Otherwise, select False.",
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
    "explanation": "A try statement may list any number of except clauses, and try/finally is legal on its own as well as combined with except clauses. However the grammar allows at most one finally clause, so a second one is a SyntaxError, which makes the last statement false."
  },
  {
    "id": 204,
    "domain": "Exception handling",
    "type": "fill_in_blank",
    "question": "You are creating a program that accepts user input. The program must cast the input into an integer. You must properly handle the error if the code cannot cast the input to an integer. How should you complete the code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>while True:<br>&nbsp;&nbsp;&nbsp;&nbsp;____<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = int(input('Please enter a number: '))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>&nbsp;&nbsp;&nbsp;&nbsp;____ ValueError:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print('Not a valid number. Try again...')</div>",
    "options": {
      "block_opener": [
        "try:",
        "else:",
        "except:",
        "finally:"
      ],
      "handler_keyword": [
        "except",
        "else",
        "raise",
        "finally"
      ]
    },
    "answer": {
      "block_opener": "try:",
      "handler_keyword": "except"
    },
    "explanation": "The risky conversion goes in a try: block, and the handler for a failed int() conversion is except ValueError:. else: and finally: cannot start a protected block, and raise would throw a new exception instead of catching one, so the loop would never recover and re-prompt the user."
  },
  {
    "id": 205,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "When will the else part of try-except-else be executed?",
    "options": [
      "A. always",
      "B. when no exception occurs",
      "C. when an error exception occurs",
      "D. when an exception occurs in the except block"
    ],
    "answer": "B. when no exception occurs",
    "explanation": "The else clause of a try statement runs only if the try block completed without raising anything. If an exception is raised the matching except clause runs instead and else is skipped, so it is neither unconditional nor tied to an error, which rules out the other choices; the clause that always runs is finally."
  },
  {
    "id": 206,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Is the following Python code structure valid?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try :<br>&nbsp;&nbsp;&nbsp;&nbsp;# try block<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;# except block<br>finally :<br>&nbsp;&nbsp;&nbsp;&nbsp;# finally block</div>",
    "options": [
      "A. no, there is no such thing as finally",
      "B. no, finally cannot be used with except",
      "C. no, finally must come before except",
      "D. yes"
    ],
    "answer": "D. yes",
    "explanation": "try/except/finally is a legal statement: finally exists, it may be combined with except, and it must come last, after any except and else clauses. Placing finally before except is what would be a SyntaxError, so options A, B and C all describe rules that do not exist."
  },
  {
    "id": 207,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def foo():<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>&nbsp;&nbsp;&nbsp;&nbsp;finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 2<br>k = foo()<br>print(k)</div>",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. error, there is more than one return statement in a single try-finally block"
    ],
    "answer": "B. 2",
    "explanation": "The finally block always runs before the function actually leaves, and a return inside finally discards the pending return value from the try block. So the value 1 is thrown away and 2 is returned and printed. Multiple return statements are perfectly legal, so no error is raised."
  },
  {
    "id": 208,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>def f1():<br>&nbsp;&nbsp;&nbsp;&nbsp;try:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>&nbsp;&nbsp;&nbsp;&nbsp;finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 2<br><br>x = f1()<br>print(x)</div>What is the result?",
    "options": [
      "A. 1",
      "B. 2",
      "C. print both 1 and 2",
      "D. Error, because more than one return statement is not allowed"
    ],
    "answer": "B. 2",
    "explanation": "A return in a finally block overrides the value the try block was about to return, so f1() returns 2 and only that single value is printed. A function can contain as many return statements as you like, but it returns exactly once, so it can never print both values and no error is raised."
  },
  {
    "id": 209,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = open('abc.txt')<br>print(f.read())<br>f.close()</div>You are required to add exception handling code to handle FileNotFoundError. Which of the following is appropriate code for this requirement?<br>Code A:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = None<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;f = open('abc.txt')<br>except FileNotFoundError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"File does not exist\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f.read())<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;if f is not None:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.close()</div>Code B:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = None<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;f = open('abc.txt')<br>except FileNotFoundException:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"File does not exist\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f.read())<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;if f is not None:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.close()</div>Code C:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = None<br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;f = open('abc.txt')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(f.read())<br>except FileNotFoundError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"File does not exist\")<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;if f is not None:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.close()</div>",
    "options": [
      "A. Code A",
      "B. Code B",
      "C. Code C",
      "D. None of these"
    ],
    "answer": "A. Code A",
    "explanation": "Code A uses the real built-in name FileNotFoundError and puts the clauses in the only legal order: try, except, else, finally. Code B names FileNotFoundException, which does not exist in Python and raises NameError while handling the error, and Code C places else before except, which is a SyntaxError so the file never even compiles."
  },
  {
    "id": 210,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import sys<br><br>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in = open('in.txt', 'r')<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out = open('out.txt', 'w+')<br>except IOError:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Cannot open file:', 'in.txt')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;i = 1<br>&nbsp;&nbsp;&nbsp;&nbsp;for line in file_in:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line.rstrip())<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file_out.write(str(i) + \": \" + line)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i += 1<br>&nbsp;&nbsp;&nbsp;&nbsp;file_in.close()<br>&nbsp;&nbsp;&nbsp;&nbsp;file_out.close()</div>Assume that the in.txt file is available but the out.txt file does not exist. Which of the following is true about this code?",
    "options": [
      "A. The code runs, but generates a logical error",
      "B. This program will copy data from in.txt to out.txt",
      "C. The code will generate a runtime error",
      "D. The code will generate a syntax error"
    ],
    "answer": "B. This program will copy data from in.txt to out.txt",
    "explanation": "Mode 'w+' opens a file for reading and writing and creates it if it is missing, so the missing out.txt is not a problem and no IOError is raised. The else block therefore runs and writes every line of in.txt, prefixed with its line number, into out.txt, so the program behaves exactly as intended with no syntax or runtime error."
  },
  {
    "id": 211,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "The file abc.txt contains several paragraphs of text. You have to write Python code that reads the whole content of the file and prints it to the console.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;f=open('abc.txt','r')<br>&nbsp;&nbsp;&nbsp;&nbsp;#Line-1<br>&nbsp;&nbsp;&nbsp;&nbsp;print(data)<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('Unable to open the file')</div>Which code should be inserted at Line-1 to meet the given requirement?",
    "options": [
      "A. data = f.readlines()",
      "B. data = f.readline()",
      "C. data = f.read()",
      "D. data = f.load()"
    ],
    "answer": "C. data = f.read()",
    "explanation": "f.read() with no argument returns the entire contents of the file as a single string, which is exactly what printing the whole file needs. f.readline() returns only the first line, f.readlines() returns a list whose repr would be printed with brackets and escaped newlines instead of the text, and file objects have no load() method at all."
  },
  {
    "id": 212,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "The base class for all exceptions in Python is:",
    "options": [
      "A. Exception",
      "B. ExceptionBase",
      "C. BaseException",
      "D. ArithmeticError"
    ],
    "answer": "C. BaseException",
    "explanation": "Every built-in exception inherits from BaseException, which sits at the top of the hierarchy. Exception is itself a subclass of BaseException and excludes SystemExit, KeyboardInterrupt and GeneratorExit, ArithmeticError only covers numeric errors, and ExceptionBase is not a real Python name."
  },
  {
    "id": 213,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>a=10<br>b=20<br>c='30'<br>result=a+b+c</div>What is the result?",
    "options": [
      "A. 102030",
      "B. 3030",
      "C. TypeError",
      "D. ArithmeticError"
    ],
    "answer": "C. TypeError",
    "explanation": "a+b evaluates to the integer 30, and adding the string '30' to an int raises TypeError: unsupported operand type(s) for +: 'int' and 'str'. Python never implicitly converts between numbers and strings, so no concatenated result such as 102030 or 3030 is produced, and ArithmeticError covers numeric failures like division by zero, not type mismatches."
  },
  {
    "id": 214,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('try')<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('except')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('else')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('finally')</div>What is the result?",
    "options": [
      "A. try<br>except<br>else<br>finally",
      "B. try<br>else<br>finally",
      "C. try<br>except<br>finally",
      "D. try<br>finally"
    ],
    "answer": "B. try<br>else<br>finally",
    "explanation": "The try block prints 'try' and raises nothing, so the except clause is skipped and the else clause runs, printing 'else'. The finally clause always runs last, printing 'finally', giving the three lines try, else, finally."
  },
  {
    "id": 215,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('try')<br>&nbsp;&nbsp;&nbsp;&nbsp;print(10/0)<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('except')<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('else')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('finally')</div>What is the result?",
    "options": [
      "A. try<br>except<br>else<br>finally",
      "B. try<br>else<br>finally",
      "C. try<br>except<br>finally",
      "D. try<br>finally"
    ],
    "answer": "C. try<br>except<br>finally",
    "explanation": "'try' is printed, then 10/0 raises ZeroDivisionError, so control jumps to the bare except clause and prints 'except'. The else clause runs only when the try block finishes without an exception, so it is skipped, and finally still runs, giving try, except, finally."
  },
  {
    "id": 216,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>try:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('try')<br>&nbsp;&nbsp;&nbsp;&nbsp;print(10/0)<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('else')<br>except:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('except')<br>finally:<br>&nbsp;&nbsp;&nbsp;&nbsp;print('finally')</div>What is the result?",
    "options": [
      "A. try<br>except<br>else<br>finally",
      "B. try<br>else<br>finally",
      "C. try<br>except<br>finally",
      "D. SyntaxError: invalid syntax"
    ],
    "answer": "D. SyntaxError: invalid syntax",
    "explanation": "The clauses of a try statement must appear in the order try, except, else, finally. Here else comes before except, so the file fails to compile and a SyntaxError is reported before anything runs. Because no code executes, none of the printed-output options can be correct."
  },
  {
    "id": 217,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>prices=[30.5,'40.5',10.5]<br>total=0<br>for price in prices:<br>&nbsp;&nbsp;&nbsp;&nbsp;total += price<br>print(total)</div>While executing this code we get the following error:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Traceback (most recent call last):<br>&nbsp;&nbsp;&nbsp;&nbsp;File \"test.py\", line 4, in &lt;module&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total += price<br>TypeError: unsupported operand type(s) for +=: 'float' and 'str'</div>Which of the following code segments should be used to fix this error?",
    "options": [
      "A. total += str(price)",
      "B. total += int(price)",
      "C. total += float(price)",
      "D. total = total+price"
    ],
    "answer": "C. total += float(price)",
    "explanation": "The list mixes floats with the string '40.5', so each item must be converted to a number before it is added; float(price) handles both the floats and the string and gives 81.5. int('40.5') raises ValueError because the string has a decimal point, str(price) makes the problem worse by turning every item into text, and total = total+price is just another way of writing the failing addition."
  },
  {
    "id": 218,
    "domain": "Exception handling",
    "type": "multiple_select",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>prices=[10,'20',30,'40']<br>total=0<br>for price in prices:<br>&nbsp;&nbsp;&nbsp;&nbsp;total +=price<br>print(total)</div>While executing this code we get the following error:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Traceback (most recent call last):<br>&nbsp;&nbsp;&nbsp;&nbsp;File \"test.py\", line 4, in &lt;module&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total +=price<br>TypeError: unsupported operand type(s) for +=: 'int' and 'str'</div>By using which of the following code segments can we fix this problem? (Choose 2.)",
    "options": [
      "A. total += str(price)",
      "B. total += int(price)",
      "C. total += float(price)",
      "D. total = total+price"
    ],
    "answer": [
      "B. total += int(price)",
      "C. total += float(price)"
    ],
    "explanation": "Every element of the list is a whole number, written either as an int or as a string of digits, so int(price) converts them all and totals 100, and float(price) works equally well and totals 100.0. str(price) would try to add a string to the integer accumulator and raise the same TypeError, and total = total+price simply repeats the original failing expression."
  },
  {
    "id": 219,
    "domain": "Exception handling",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>courses={1:'Java',2:'Scala',3:'Python'}<br>for i in range(1,5):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(courses[i])</div>While executing this code we get the following error:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Traceback (most recent call last):<br>&nbsp;&nbsp;&nbsp;&nbsp;File \"test.py\", line 3, in &lt;module&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(courses[i])<br>KeyError: 4</div>By using which of the following code segments can we fix this problem?",
    "options": [
      "A. courses={1:'Java',2:'Scala',3:'Python'}<br>for i in range(1,5):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i in courses:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(courses[i])",
      "B. courses={1:'Java',2:'Scala',3:'Python'}<br>for i in courses:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(courses[i])",
      "C. courses={1:'Java',2:'Scala',3:'Python'}<br>for i in range(1,4):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(courses[i])",
      "D. All of these"
    ],
    "answer": "D. All of these",
    "explanation": "The KeyError happens because range(1,5) produces the key 4, which the dictionary does not contain. Guarding the lookup with 'if i in courses', iterating over the dictionary's own keys, and shrinking the range to range(1,4) all stop the missing key from ever being looked up, so each of the three segments prints Java, Scala and Python without error."
  },
  {
    "id": 220,
    "domain": "Unit testing",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 30<br>y = 10<br>assert x &gt; y, 'x is smaller than y'</div>",
    "options": [
      "A. Assertion Error",
      "B. 10 8",
      "C. No output",
      "D. 108"
    ],
    "answer": "C. No output",
    "explanation": "An assert statement only raises AssertionError when its condition is false; when the condition is true it does nothing at all. Here x is 30 and y is 10, so the condition x greater than y is true and the message is never used, producing no output. AssertionError would only appear if x were less than or equal to y."
  },
  {
    "id": 221,
    "domain": "Unit testing",
    "type": "multiple_choice",
    "question": "Which type of exception will be raised if we try to call a method on an inappropriate object (an object that does not define that method)?",
    "options": [
      "A. IndexError",
      "B. TypeError",
      "C. AttributeError",
      "D. None of these"
    ],
    "answer": "C. AttributeError",
    "explanation": "Attribute and method lookup that fails on an object raises AttributeError, because the name simply is not an attribute of that object. IndexError is for out-of-range sequence indexes and TypeError is for using an object in an unsupported operation, such as calling something that is not callable."
  },
  {
    "id": 222,
    "domain": "Unit testing",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>f = open('abc.txt')<br>f.readall()</div>Which exception will be raised?",
    "options": [
      "A. AttributeError",
      "B. EOFError",
      "C. SystemError",
      "D. SyntaxError"
    ],
    "answer": "A. AttributeError",
    "explanation": "A text file object supports read, readline and readlines, but there is no readall method, so the attribute lookup fails and Python raises AttributeError. The code is syntactically valid, so SyntaxError is impossible, and EOFError is only raised by input() when it hits end of file."
  },
  {
    "id": 223,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "You write a function that reads a data file and prints each line of the file. You write the following code. Line numbers are included for reference only.<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>01 def read_file(file):<br>02 &nbsp;&nbsp;&nbsp;&nbsp;line = None<br>03 &nbsp;&nbsp;&nbsp;&nbsp;if os.path.isfile(file):<br>04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data = open(file, 'r')<br>05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for line in data:<br>06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(line)</div>When you run the program, you receive an error on line 03.<br>What is causing the error?",
    "options": [
      "A. The path method does not exist in the os object.",
      "B. The isfile method does not exist in the path object.",
      "C. You need to import the os library.",
      "D. The isfile method does not accept one parameter."
    ],
    "answer": "C. You need to import the os library.",
    "explanation": "The snippet never imports os, so evaluating os.path.isfile on line 03 raises NameError: name 'os' is not defined. Adding import os at the top fixes it; os.path is a real submodule and os.path.isfile does take exactly one path argument, so the other options describe things that are not actually wrong."
  },
  {
    "id": 224,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "What is the type of sys.argv?",
    "options": [
      "A. set",
      "B. list",
      "C. tuple",
      "D. string"
    ],
    "answer": "B. list",
    "explanation": "sys.argv is a plain Python list of strings holding the command-line arguments, so it is ordered, indexable and mutable. It is not a tuple or a set, and although each element is a string, the container itself is a list."
  },
  {
    "id": 225,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "Which of the following is NOT true about main modules?",
    "options": [
      "A. When a Python file is directly executed, it is considered the main module of a program",
      "B. Main modules may import any number of modules",
      "C. The special name given to main modules is: _main_",
      "D. Other modules can import the main module"
    ],
    "answer": "C. The special name given to main modules is: _main_",
    "explanation": "The interpreter sets __name__ to __main__, with two leading and two trailing underscores, for the file that is run directly, so the single-underscore spelling _main_ is wrong. The other statements are accurate: the directly executed file is the main module, it may import any number of modules, and it can itself be imported by other modules."
  },
  {
    "id": 226,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "From the sys module, which variable do we use to access command-line arguments?",
    "options": [
      "A. argv",
      "B. argsv",
      "C. args",
      "D. arguments"
    ],
    "answer": "A. argv",
    "explanation": "The sys module exposes the command-line arguments as sys.argv, a name inherited from C's argv convention. There are no sys.args, sys.argsv or sys.arguments attributes, so referencing any of them raises AttributeError or ImportError."
  },
  {
    "id": 227,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "Given the command invocation:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>python tests.py Itvedant</div>Which of the following code segments prints 'Itvedant' to the console?",
    "options": [
      "A. from sys import argv; print(argv[1])",
      "B. from sys import argv; print(argv[0])",
      "C. from sys import args; print(args[0])",
      "D. from sys import args; print(args[1])"
    ],
    "answer": "A. from sys import argv; print(argv[1])",
    "explanation": "argv[0] is the script name (tests.py) and the user-supplied arguments start at argv[1], so argv[1] is 'Itvedant'. Options C and D fail immediately with ImportError because sys has no name called args."
  },
  {
    "id": 228,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from sys import argv<br>print(argv[0])</div>and given the command invocation:<br>py test.py DURGASOFT<br>What is the result?",
    "options": [
      "A. DURGASOFT",
      "B. test.py",
      "C. IndexError will be thrown at runtime",
      "D. ImportError will be thrown at runtime"
    ],
    "answer": "B. test.py",
    "explanation": "Element 0 of sys.argv is always the name of the script being run, so argv[0] prints test.py. DURGASOFT is argv[1]; there is no IndexError because argv has two elements, and argv is a genuine attribute of sys so the import succeeds."
  },
  {
    "id": 229,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from sys import argv<br>print(argv[1] + argv[2])</div>and given the command invocation:<br>py test.py 10 20<br>What is the result?",
    "options": [
      "A. 30",
      "B. 1020",
      "C. IndexError will be thrown at runtime",
      "D. ImportError will be thrown at runtime"
    ],
    "answer": "B. 1020",
    "explanation": "Command-line arguments always arrive as strings, so argv[1] is '10' and argv[2] is '20' and the plus operator concatenates them into '1020'. Getting 30 would require converting them first, for example int(argv[1]) + int(argv[2])."
  },
  {
    "id": 230,
    "domain": "File system & command-line modules",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from sys import argv<br>total = 0<br>for i in range(2, len(argv)):<br>&nbsp;&nbsp;&nbsp;&nbsp;total += float(argv[i])<br>print(\"The Average for {0} is {1:.2f}\".format(argv[1], total / (len(argv) - 2)))</div>Which of the following command invocations will generate the output:<br>The Average for Durga is 20.00",
    "options": [
      "A. py test.py Durga 10 20 30",
      "B. py test.py Durga 10 20",
      "C. py test.py Durga 10",
      "D. py test.py 20"
    ],
    "answer": "A. py test.py Durga 10 20 30",
    "explanation": "The script averages every argument from index 2 onward and labels it with argv[1]. With Durga 10 20 30 the sum is 60 over 3 values, giving exactly 20.00; Durga 10 20 averages to 15.00, Durga 10 averages to 10.00, and py test.py 20 leaves nothing after argv[1] so it raises ZeroDivisionError."
  },
  {
    "id": 231,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "You need to write code that generates a random float with a minimum value of 0.0 and a maximum value of 1.0.<br>Which statement should you use?",
    "options": [
      "A. random.randrange()",
      "B. random.randrange(0.0, 1.0)",
      "C. random.random()",
      "D. random.randint(0, 1)"
    ],
    "answer": "C. random.random()",
    "explanation": "random.random() is defined to return a float in the interval from 0.0 up to 1.0, which is exactly what is required. randrange needs integer arguments, so calling it with no arguments or with floats raises TypeError, and randint(0, 1) returns only the integers 0 or 1, not a float."
  },
  {
    "id": 232,
    "domain": "Built-in modules",
    "type": "multiple_select",
    "question": "You are writing code that generates a random integer with a minimum value of 5 and a maximum value of 11. Which two functions should you use? Each correct answer presents a complete solution. (Choose 2.)",
    "options": [
      "A. random.randint(5, 11)",
      "B. random.randrange(5, 12, 1)",
      "C. random.randint(5, 12)",
      "D. random.randrange(5, 11, 1)"
    ],
    "answer": [
      "A. random.randint(5, 11)",
      "B. random.randrange(5, 12, 1)"
    ],
    "explanation": "randint includes both endpoints, so randint(5, 11) yields 5 through 11, while randrange excludes its stop value, so randrange(5, 12, 1) also yields 5 through 11. randint(5, 12) can return 12, which is too high, and randrange(5, 11, 1) stops at 10, so it can never return 11."
  },
  {
    "id": 233,
    "domain": "Built-in modules",
    "type": "multiple_select",
    "question": "You work on a team that is developing a game for AdventureWorks. You need to write code that generates a random number that meets the following requirements:<br>&bull; The number is a multiple of 5.<br>&bull; The lowest number is 5.<br>&bull; The highest number is 100.<br>Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose 2.)",
    "options": [
      "A. from random import randrange<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randrange(5, 101, 5))",
      "B. from random import randint<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randint(1, 20) * 5)",
      "C. from random import randint<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randint(0, 20) * 5)",
      "D. from random import randrange<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randrange(0, 100, 5))"
    ],
    "answer": [
      "A. from random import randrange<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randrange(5, 101, 5))",
      "B. from random import randint<br>&nbsp;&nbsp;&nbsp;&nbsp;print(randint(1, 20) * 5)"
    ],
    "explanation": "randrange(5, 101, 5) walks 5, 10, ... up to but not including 101, so it produces every multiple of 5 from 5 to 100. randint(1, 20) * 5 gives 1 through 20 scaled by 5, which is also 5 through 100. randint(0, 20) * 5 can return 0, and randrange(0, 100, 5) can return 0 and stops at 95, so neither matches the required range."
  },
  {
    "id": 234,
    "domain": "Built-in modules",
    "type": "multiple_select",
    "question": "You are creating a function that manipulates a number. The function has the following requirements:<br>&bull; A float is passed into the function<br>&bull; The function must take the absolute value of the float<br>&bull; Any decimal points after the integer must be removed<br>Which two math functions should you use? Each correct answer is part of the solution. (Choose 2.)",
    "options": [
      "A. math.ceil(x)",
      "B. math.fmod(x)",
      "C. math.floor(x)",
      "D. math.frexp(x)",
      "E. math.fabs(x)"
    ],
    "answer": [
      "C. math.floor(x)",
      "E. math.fabs(x)"
    ],
    "explanation": "math.fabs returns the absolute value as a float, and math.floor then discards the fractional part and returns an int; applied to an already positive value, flooring simply drops the decimals. math.ceil would round the magnitude up instead of removing the decimals, math.fmod needs two arguments and computes a remainder, and math.frexp returns a mantissa and exponent pair."
  },
  {
    "id": 235,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>from math import factorial<br>print(math.factorial(5))</div>",
    "options": [
      "A. 120",
      "B. Nothing is printed",
      "C. Error, method factorial doesn't exist in math module",
      "D. Error, the statement should be: print(factorial(5))"
    ],
    "answer": "D. Error, the statement should be: print(factorial(5))",
    "explanation": "from math import factorial binds only the name factorial, it does not bind the name math, so math.factorial(5) raises NameError: name 'math' is not defined. Writing print(factorial(5)) uses the imported name and correctly prints 120; factorial certainly does exist in the math module."
  },
  {
    "id": 236,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "You are writing an application that uses the pow() function. The program must reference the function using the name power. You need to import the function.<br>Which code segment should you use?",
    "options": [
      "A. import math.pow as power",
      "B. import pow from math as power",
      "C. from math import pow as power",
      "D. from math.pow as power"
    ],
    "answer": "C. from math import pow as power",
    "explanation": "The from module import name as alias form is the only way to import a single function under a new name, so from math import pow as power lets you call power(2, 3). import math.pow as power fails because math is a module, not a package containing a pow submodule, and the other two are simply not valid Python syntax."
  },
  {
    "id": 237,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "What is returned by math.ceil(10.4)?",
    "options": [
      "A. 11",
      "B. 10",
      "C. 11.0",
      "D. 10.0"
    ],
    "answer": "A. 11",
    "explanation": "math.ceil rounds up to the smallest integer that is not less than its argument, so 10.4 becomes 11. In Python 3 math.ceil returns an int rather than a float, so the result is 11 and not 11.0; 10 would be the result of math.floor."
  },
  {
    "id": 238,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "What will be the output of the following Python code if the system date is 23rd September, 2020?<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import datetime<br>t = datetime.date.today()<br>print(t.month)</div>",
    "options": [
      "A. September",
      "B. Sept",
      "C. 09",
      "D. 9"
    ],
    "answer": "D. 9",
    "explanation": "date.today() returns a date object whose month attribute is a plain integer, so printing it for September gives 9 with no leading zero and no month name. Getting 'September' or '09' would require formatting, for example t.strftime('%B') or t.strftime('%m')."
  },
  {
    "id": 239,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import math<br>l = [str(round(math.pi)) for i in range(1, 6)]<br>print(l)</div>What is the result?",
    "options": [
      "A. ['3', '3', '3', '3', '3']",
      "B. ['3', '3', '3', '3', '3', '3']",
      "C. ['1', '2', '3', '4', '5']",
      "D. ['1', '2', '3', '4', '5', '6']"
    ],
    "answer": "A. ['3', '3', '3', '3', '3']",
    "explanation": "The loop variable i is never used in the expression, so every element is the same value: round(math.pi) is 3 and str() makes it '3'. range(1, 6) yields 5 values (1 through 5), so the list has five copies of '3', not six."
  },
  {
    "id": 240,
    "domain": "Built-in modules",
    "type": "multiple_select",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>fruits = ['Apple', 'Mango', 'Orange', 'Lemon']</div>Which of the following will print some random value from the list? (Choose 2.)",
    "options": [
      "A. print(random.sample(fruits))",
      "B. print(random.sample(fruits, 3)[0])",
      "C. print(random.choice(fruits))",
      "D. print(random.choice(fruits)[0])"
    ],
    "answer": [
      "B. print(random.sample(fruits, 3)[0])",
      "C. print(random.choice(fruits))"
    ],
    "explanation": "random.choice(fruits) returns one randomly selected element, and random.sample(fruits, 3)[0] builds a random 3-element sample and prints its first element, which is also an element of the list. random.sample requires the sample size k, so calling it with one argument raises TypeError, and random.choice(fruits)[0] prints only the first character of the chosen fruit rather than the value itself."
  },
  {
    "id": 241,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "We are developing an application for a client requirement. As part of that we have to create a list of 7 random integers between 1 and 7 inclusive.<br>Which of the following code segments should be used?",
    "options": [
      "A. import random<br>randints = [random.randint(1, 7) for i in range(1, 8)]",
      "B. import random<br>randints = [random.randint(1, 8) for i in range(1, 8)]",
      "C. import random<br>randints = random.randrange(1, 7)",
      "D. import random<br>randints = random.randint(1, 7)"
    ],
    "answer": "A. import random<br>randints = [random.randint(1, 7) for i in range(1, 8)]",
    "explanation": "randint(1, 7) includes both endpoints so it produces values 1 through 7, and range(1, 8) repeats the comprehension seven times, giving a list of exactly 7 values. Option B allows 8, which is out of range, and options C and D assign a single integer rather than a list."
  },
  {
    "id": 242,
    "domain": "Built-in modules",
    "type": "multiple_select",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>fruits = ['Apple', 'Mango', 'Orange', 'Lemon']<br>random_list = [random.choice(fruits)[:2] for i in range(3)]<br>print(''.join(random_list))</div>Which of the following are possible outputs? (Choose 3.)",
    "options": [
      "A. ApApAp",
      "B. ApMaOr",
      "C. LeMaOr",
      "D. OrOraM"
    ],
    "answer": [
      "A. ApApAp",
      "B. ApMaOr",
      "C. LeMaOr"
    ],
    "explanation": "Each iteration picks a fruit and keeps its first two characters, so the only possible pieces are Ap, Ma, Or and Le, and three of them are joined into a six-character string with repeats allowed. ApApAp, ApMaOr and LeMaOr are all built from those pieces, but OrOraM would need the piece aM, which no fruit can produce."
  },
  {
    "id": 243,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "We are developing a mathematical function to find the area of a given circle. If r is the radius then the area is pi*r**2.<br>Which of the following is a valid function for this requirement?",
    "options": [
      "A. import math<br>def find_area(r):<br>&nbsp;&nbsp;&nbsp;&nbsp;return math.pi * math.fmod(r, 2)",
      "B. import math<br>def find_area(r):<br>&nbsp;&nbsp;&nbsp;&nbsp;return math.pi * math.fabs(r)",
      "C. import math<br>def find_area(r):<br>&nbsp;&nbsp;&nbsp;&nbsp;return math.pi * math.pow(r, 2)",
      "D. None of these"
    ],
    "answer": "C. import math<br>def find_area(r):<br>&nbsp;&nbsp;&nbsp;&nbsp;return math.pi * math.pow(r, 2)",
    "explanation": "math.pow(r, 2) raises the radius to the power 2, so math.pi * math.pow(r, 2) is exactly pi*r**2; for r = 3 it returns about 28.27. math.fmod(r, 2) computes the remainder of r divided by 2 and math.fabs(r) just takes the absolute value, so neither squares the radius."
  },
  {
    "id": 244,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "Consider the Python code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>print(int(random.random() * 5))</div>Which of the following is true?",
    "options": [
      "A. It will print a random int value from 0 to 5",
      "B. It will print a random int value from 1 to 5",
      "C. It will print a random float value from 0.0 to 5.0",
      "D. It will print a random int value from 0 to 4",
      "E. It will print 5"
    ],
    "answer": "D. It will print a random int value from 0 to 4",
    "explanation": "random.random() returns a float in the range 0.0 up to but not including 1.0, so multiplying by 5 gives a value below 5.0. int() truncates toward zero, so the printed integer is always 0, 1, 2, 3 or 4 and can never reach 5."
  },
  {
    "id": 245,
    "domain": "Built-in modules",
    "type": "multiple_choice",
    "question": "Consider the code:<div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>import random<br>print(random.sample(range(10), 7))</div>Which of the following is valid?",
    "options": [
      "A. It will print a list of 10 unique random numbers from 0 to 6",
      "B. It will print a list of 7 unique random numbers from 0 to 9",
      "C. It will print a list of 7 unique random numbers from 0 to 10",
      "D. It will print a list of 7 unique random numbers from 1 to 10"
    ],
    "answer": "B. It will print a list of 7 unique random numbers from 0 to 9",
    "explanation": "random.sample(population, k) returns k distinct items drawn from the population, so k = 7 fixes the list length at 7. range(10) is the integers 0 through 9, so 10 is never a candidate and 0 always is."
  }
];
