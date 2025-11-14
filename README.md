This project contains several JavaScript functions that must be tested using a testing framework (such as Jest). After writing the tests, implement the functions so that all tests pass.

Functions to Implement & Test
1. capitalize

A function that takes a string and returns it with the first character capitalized.

Example:

capitalize('hello'); // "Hello"

2. reverseString

A function that takes a string and returns it reversed.

Example:

reverseString('hello'); // "olleh"

3. calculator

An object containing functions for the basic operations:

add(a, b)

subtract(a, b)

multiply(a, b)

divide(a, b)

Example:

calculator.add(2, 3);      // 5
calculator.subtract(5, 2); // 3
calculator.multiply(3, 4); // 12
calculator.divide(10, 2);  // 5

4. caesarCipher

A function that applies a Caesar cipher shift to a string.

Requirements:

✔ Wrap letters from z → a
✔ Preserve uppercase / lowercase
✔ Keep punctuation and spaces unchanged

Examples:

caesarCipher('xyz', 3);         // "abc"
caesarCipher('HeLLo', 3);       // "KhOOr"
caesarCipher('Hello, World!', 3); // "Khoor, Zruog!"

5. analyzeArray

A function that takes an array of numbers and returns an object with:

average

min

max

length

Example:

analyzeArray([1,2,3,4,5,6]);
// { average: 3.5, min: 1, max: 6, length: 6 }


Running Tests

Make sure you have Jest installed:

npm install --save-dev jest


Run the test suite:

npx jest


All functions should be implemented so that every test passes.