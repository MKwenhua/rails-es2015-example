
<strong>Steps needed to set up:</strong>
<ol>
<li>npm install</li>
<li>bundle install</li>
</ol>

<strong>This demo has three key gems:</strong>
<blockquote>
	<strong><a href="https://github.com/reactjs/react-rails" target="_block" >gem 'react-rails'</a></strong>
	<p>React Rails to generate component scaffolding</p>
	<strong><a href="https://github.com/Shopify/sprockets-commoner" target="_block" >gem 'sprockets-commoner'</a></strong>
	<p>an actively maintained gem from Shopify to compile JavaScript modules for the browser in Sprockets with Babel.</p>
	<strong><a href="https://libraries.io/rubygems/sprockets/4.0.0.beta2" target="_block" >gem 'sprockets', '4.0.0.beta2'</a></strong>
	<p>Upcomming Sprockets version that supports plugins. Read: <a href="https://github.com/rails/sprockets/blob/master/UPGRADING.md#es6-support"  target="_block">ES6 Support</a></p>
	
</blockquote>
<p><b>FYI: </b> the <a href="https://github.com/MKwenhua/rails-es2015-example/tree/constructors">constructors branch</a> is the better solution.</p>
</section>
#File Overview
<strong>interface.js</strong>
![interface.js](https://s3.amazonaws.com/canvasmp3/interface_js.png)
<strong>layout.js</strong>
![layout.js top](https://s3.amazonaws.com/canvasmp3/layout1.png)
![layout.js bottom](https://s3.amazonaws.com/canvasmp3/layout2.png)
<strong>components/table.js</strong>
![layout.js bottom](https://s3.amazonaws.com/canvasmp3/table.png)
#React Overview:

<p>will add later</p>


#Some neat ES2015 Features:
<strong>deconstruction:</strong>
```javascript
const player1 = {name: 'Ryu', country: '日本', hp: 100, moves: ['kick', 'punch', 'spin thing']}

let {name, country, hp, moves} = player1;

console.log('name', name, 'country', country, 'hp', hp, 'moves', moves);
```
<strong>deconstruct an array:</strong>
```javascript
let numberArray = [1,2,3,4,55,66];

let [first, ...rest] = numberArray;

console.log('first', first, 'rest', rest);

let [firstLetter, ...otherLetters] = "sandwich";

console.log('firstLetter', firstLetter, 'otherLetters', otherLetters);
```
<strong>map:</strong>
##### mapping over array of numbers
```javascript
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
 26,27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
 39, 40];

var numSquared = nums.map((itm, i) => {
   return itm * itm; 
});
```

##### alternatively, if you write the whole function in one line, you can omit the return statement
```javascript
var numSquared2 = nums.map((itm, i) => itm * itm );
```

##### filter, removes all items where the callback does not return true. So here all numbers are filtered;
```javascript
var evenNums = numSquared2.filter((itm) => itm % 2 === 0);

// or 

var evenNums = numSquared2.filter((itm) => itm % 2 < 1);
```
<strong>reduce:</strong>
```javascript
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
 26,27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
 39, 40];

 var sum = nums.reduce((sum, num, i) =>{
         sum += num;
         return sum;
  },0);
 ```
##### get sum of a word's ASCII numbers

```javascript
var word = "Pete"
var wordSum = word.split('').reduce((sum,letter) => {
	sum += letter.charCodeAt();
	return sum;
}, 0);

console.log('wordSum', wordSum);
 ```
 ##### convert letters to ASCII numbers

```javascript
var word = "Pete"
var wordAscii = word.split('').reduce((asciiSet,letter, i) => {
	asciiSet += letter.charCodeAt();
	return asciiSet;
}, '' );

console.log('wordAscii', wordAscii);
```

### alternatively just map over the word

```javascript
var word = "Pete"
var wordAsciiMap = word.split('').map((letter) => {
	return letter.charCodeAt();
}).join('_');

console.log('wordAsciiMap', wordAsciiMap);
```
<strong>Object Assign:</strong>

### merge two objects, modifying the first object

```javascript
let p1 = {name: 'Ryu', country: '日本', hp: 100, moves: ['kick', 'punch', 'spin thing']}

let mutated = Object.assign(p1, {country: 'Japan'})

console.log('mutated', mutated, 'p1', p1);
```

### merge two objects, but avoid modifying by passing an empty object literal

```javascript
let p1again = {name: 'Ryu', country: '日本', hp: 100, moves: ['kick', 'punch', 'spin thing']}

let newone = Object.assign({}, p1again,{country: 'Japan'});

console.log('newone', newone, 'p1again', p1again)
```
