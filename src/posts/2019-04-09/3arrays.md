---
path: '/blog/javascript-basics/arrays'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/types'
next: '/conditionals'
---

## Arrays
An array is an ordered list of values that we can use to hold multiple pieces of data. They are declared using square brackets `[]` and each value in an array should be separated by a comma `,`. For example, if we wanted to declare an array containing the first five letters of the alphabet, we would write:
```js
const firstFiveLetters = ['a', 'b', 'c', 'd', 'e'];
```
Each value in an array is known as an *element*. We mentioned that arrays are *ordered* lists - each element has what's called an *index*, which is its numbered position in the array. Be careful here - JavaScript uses *zero-based* indexing, which means the first index of an array isn't 1 - it's 0! That is, instead of counting from 1, we start at 0. 

To access an element of an array, we use the syntax `arrayName[index]` - where `arrayName` is the name of the array variable and `index` is the numbered position we want to access. Here are some examples:
```js
const firstFiveLetters = ['a', 'b', 'c', 'd', 'e'];
console.log(firstFiveLetters[0]); // Outputs 'a' because 'a' is the first element of the array
console.log(firstFiveLetters[2]); // Outputs 'c' because 'c' is the third element of the array
console.log(firstFiveLetters[4]); // Outputs 'e' because 'e' is the fifth element of the array
```
We can also update existing elements in our array or define new ones in a similar way:
```js
const firstFiveLetters = ['a', 'b', 'c', 'd', 'e'];
firstFiveLetters[2] = 'x';
firstFiveLetters[5] = 'y';
console.log(firstFiveLetters); // Outputs ['a', 'b', 'x', 'd', 'e', 'y'];
```
If we try to access an index of an array that does not exist, we'll get undefined:
```js
const firstFiveLetters = ['a', 'b', 'c', 'd', 'e'];
console.log(firstFiveLetters[6]); // Outputs undefined because there is no seventh element in the array
```
Note that arrays can hold different types of values:
```js
const diffTypesArray = ['Hello', 12, true];
```
And they can also hold variables:
```js
const message = 'Fancy a drink?';
const reply = 'Sure thing!';
const conversation = [message, reply];
```
Note that if we use `typeof` on an array, we get `object`:
```js
const anotherArray = [1, 2, 3, 4];
console.log(typeOf anotherArray); 
```
As we've mentioned before, we're going to look at objects in more detail later on, as they are vital to understanding JavaScript.
Don't worry about them for now.

You can get the number of items in an array by using the `.length` property:
```js
const firstFiveLetters = ['a', 'b', 'c', 'd', 'e'];
console.log(firstFiveLetters.length); // Outputs 5
```
Arrays also have a number of *methods* that can be used on them to carry out useful operations. These are used for things like sorting arrays, adding or removing elements, or checking if a value exists within an array. We'll cover the concept of both methods and properties when we look at objects, but array methods are a large and useful topic in their own right and will be covered in another blog post. If you want to know more about array methods, check out the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">MDN docs</a> detailing the available array methods. <a href="https://syntax.fm/show/043/20-javascript-array-and-object-methods-to-make-you-a-better-developer">Syntax FM</a> (a web development podcast) also have a really great episode on array methods.
