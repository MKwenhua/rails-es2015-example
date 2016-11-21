var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
 26,27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
 39, 40];

 var sum = nums.reduce((sum, num, i) =>{
         sum += num;
         return sum;
      },0);

console.log('sum', sum);
var word = "Pete"
var wordSum = word.split('').reduce((sum,letter) => {
	sum += letter.charCodeAt();
	return sum;
}, 0);

console.log('wordSum', wordSum);

var wordAscii = word.split('').reduce((asciiSet,letter, i) => {
	asciiSet += letter.charCodeAt();
	return asciiSet;
}, '' );

console.log('wordAscii', wordAscii);

var wordAsciiMap = word.split('').map((letter) => {
	return letter.charCodeAt();
}).join('_');

console.log('wordAsciiMap', wordAsciiMap);