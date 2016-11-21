let numberArray = [1,2,3,4,55,66];

let [first, ...rest] = numberArray;

console.log('first', first, 'rest', rest);

let [firstLetter, ...otherLetters] = "sandwich";

console.log('firstLetter', firstLetter, 'otherLetters', otherLetters);