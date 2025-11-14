import calculator from './calculator';
import capitalize from './capitalize';
import reverseString from './reverseString';
import caesar_Cipher from './caesar_Cipher';
import analyze_array from './analyze_array';
const { add, subtract, divide, multiply } = calculator;
const {capital} =capitalize;
const {reverseStr} =reverseString;
const {caesarCipher}=caesar_Cipher;
const {analyzeArray}=analyze_array;
//calculator
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
test('subtract 5-3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});
test('divide 6/3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});
test('multiply 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

//capitalize
test('rohan be equal to Rohan', () => {
  expect(capital('rohan')).toBe('Rohan');
});

//reverse a string
test('government be equal to tnemnrevog', () => {
  expect(reverseStr('government')).toBe('tnemnrevog');
});

//caesar Cipher
test('Hello, World! be equal to Khoor, Zruog!',() => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

//Analyze array
test('[1,2,3,4,5,6] return object with average:3.5,max:6,min:1 and length:6',() => {
  expect(analyzeArray([1,2,3,4,5,6])).toStrictEqual({average: 3.5,min: 1,max: 6,length: 6});
});