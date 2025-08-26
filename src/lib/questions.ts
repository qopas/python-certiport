import { Question } from './types';

export const quizQuestions: Question[] = [
  {
    "id": 1,
    "domain": "Data types & operators",
    "type": "true_false",
    "question": "Python makes the distinction between integers and floating variables.",
    "options": [
      "A. Yes",
      "B. No"
    ],
    "answer": "A. Yes",
    "explanation": "Python distinguishes between integers (`int`) and floating-point numbers (`float`)."
  },
  {
    "id": 2,
    "domain": "Data types & operators",
    "type": "true_false",
    "question": "When declaring variables in Python, a data type must be specified.",
    "options": [
      "A. Yes",
      "B. No"
    ],
    "answer": "B. No",
    "explanation": "Python uses dynamic typing, so you don’t need to declare a variable’s type explicitly."
  },
  {
    "id": 3,
    "domain": "Data types & operators",
    "type": "true_false",
    "question": "When setting a Boolean variable, the value must start with a capital letter.",
    "options": [
      "A. Yes",
      "B. No"
    ],
    "answer": "A. Yes",
    "explanation": "Boolean values in Python are `True` and `False`, both with capital first letters."
  },
  {
    "id": 4,
    "domain": "Data types & operators",
    "type": "fill_in_blank",
    "question": "Complete the code:<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>serialnumber =  <br>amount =  <br>message = \"Serial:\" [message_part1] serialnumber [message_part2] amount</div>",
    "options": {
      "serialnumber": ["int", "str", "float"],
      "amount": ["int", "str", "float"],
      "message_part1": ["+", ","],
      "message_part2": ["+", ","]
    },
    "answer": {
      "serialnumber": "str",
      "amount": "float",
      "message_part1": "+",
      "message_part2": ","
    },
    "explanation": "The serial number should be stored as a string (`str`) so it cannot be used in numeric calculations. The amount should be converted to a float (`float`) so it can handle decimals. When concatenating the message, `+` is used with strings, and `,` can be used to join text with variables in the print function."
  },
  {
    "id": 5,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "A developer needs to write code to reverse the character output of a product code. Which variable declaration will reverse one of the product codes?",
    "options": [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::-1]</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[-1::]</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::1]</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[1::]</code>"
    ],
    "answer": "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>[::-1]</code>",
    "explanation": "The slicing operation <code>[::-1]</code> reverses a string or sequence by stepping through it backwards."
  },
  {
    "id": 6,
    "domain": "Data types & operators",
    "type": "multiple_choice",
    "question": "A warehouse manager has partial safety kits in inventory, but needs to make sure that the count of kits is presented as a whole number with the number of complete sets on display. Select the function to the missing code area to convert the <code class='bg-gray-100 px-2 py-1 rounded font-mono'>inventoryCount</code> variable to a value of 19.<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>inventoryCount = 19.95<br>print(\"We have \" + ____ (inventoryCount) + \" complete units in stock.\")</div>",
    "options": [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>round</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>int</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>ceil</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>floor</code>"
    ],
    "answer": "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>int</code>",
    "explanation": "The <code>int()</code> function truncates the decimal part, converting 19.95 to 19, which ensures only complete units are shown."
  },
  {
    "id": 7,
    "domain": "Data structures & control flow",
    "type": "ordering",
    "question": "A developer needs to build a data structure with animals and then sort the structure. Using drag and drop, arrange the lines of code in the correct order to produce this output:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>Bears<br>Jaguars<br>Lions<br>Panthers</div>",
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
    "explanation": "The list is initialized with Bears, Panthers, and Lions. Jaguars is added with <code>.append()</code>. The list is sorted alphabetically. Finally, a loop prints each element. Incorrect syntax options like <code>animals.add()</code> or curly brace loops are invalid in Python."
  },
  {
    "id": 8,
    "domain": "Data structures & indexing",
    "type": "multiple_response",
    "question": "Analyze this code example:<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]<br>pieces.sort()</div><br>Which two commands will display the rook?",
    "options": [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[6])</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[5])</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[3])</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[-1])</code>"
    ],
    "answer": [
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[5])</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>print(pieces[-1])</code>"
    ],
    "explanation": "After sorting, the list becomes ['bishop', 'king', 'knight', 'pawn', 'queen', 'rook']. The rook is at index 5 and also at index -1."
  },
  {
    "id": 9,
    "domain": "Data structures & slicing",
    "type": "fill_in_blank",
    "question": "Select every fifth product from the tuple:<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>products = ('1111','2222','3333','4444','5555','6666','7777','8888','9999')<br>selection = [tester]<br>print(selection)</div>",
    "options": [
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tester = productssslice(1,8,5)</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>for tester in products:</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>products(tester)</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>products[tester]</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>append</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tester = slice(2.9,5)</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tester = slice(1,8,5)</code>"
    ],
    "answer": [
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>tester = slice(1,8,5)</code>",
      "<code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>products[tester]</code>"
    ],
    "explanation": "The slice object <code>slice(1,8,5)</code> selects elements starting from index 1 up to (but not including) index 8, stepping by 5. This corresponds to '2222' and '7777'. Accessing <code>products[tester]</code> applies that slice and allows printing the selected tuple items."
  },
  {
    "id": 10,
    "domain": "Data structures & lists",
    "type": "fill_in_blank",
    "question": "Merge two softball league lists and fix entries:<br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>league1 = ['Angels','Dodgers','Padres']<br>league2 = ['Wheelers','Blasters']<br>league0 = league1 [combine] league2<br>league0.[insert_method]([insert_position], 'Sox')<br>league0.[remove_method]('Blasters')<br>print(league0)</div>",
    "options": {
      "combine": ["+", "append", "extend"],
      "insert_method": ["insert", "append", "extend"],
      "insert_position": ["0", "3", "len(league0)"],
      "remove_method": ["remove", "pop", "discard"]
    },
    "answer": {
      "combine": "+",
      "insert_method": "insert",
      "insert_position": "3",
      "remove_method": "remove"
    },
    "explanation": "The two lists are merged with <code>+</code>. Then <code>insert(3, 'Sox')</code> adds 'Sox' after the first three elements. Finally, <code>remove('Blasters')</code> deletes the unwanted item, leaving the final list ['Angels', 'Dodgers', 'Padres', 'Sox', 'Wheelers']."
  },
  {
    "id": 11,
    "domain": "Operators & precedence",
    "type": "multiple_choice",
    "question": "For the following code, which expression is performed last for calculating the value of <code>z</code>?<br><br><div class='bg-gray-800 text-green-400 p-3 rounded font-mono mt-2'>x = 5<br>y = 3<br>z = x + y > 7 and x * y < 15 or x - y > 2</div>",
    "options": [
      "A. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>z =</code>",
      "B. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x + y > 7 and x * y < 15</code>",
      "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x * y < 15 or x - y > 2</code>",
      "D. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x - y > 2</code>"
    ],
    "answer": "C. <code class='bg-gray-100 px-1 py-0.5 rounded font-mono'>x * y < 15 or x - y > 2</code>",
    "explanation": "Operator precedence in Python evaluates arithmetic first, then comparisons, then logical AND, and finally logical OR. Therefore, <code>x * y < 15 or x - y > 2</code> is the last evaluated expression when calculating <code>z</code>."
  }
];
