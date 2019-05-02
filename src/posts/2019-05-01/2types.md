---
path: '/blog/javascript-basics/types'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/variables'
next: '/arrays'
---

## Types
We've learnt about variables, now let's dive into types. Every variable you declare in JavaScript has a type, which is essentially the type of data that variable holds. There are seven basic types in JavaScript, which are:
- string
- number
- boolean
- null
- undefined
- symbol
- object

### Strings
A string is a data type used to stored text - strings can include letters, numbers, special characters and pretty much anything else. Strings can be declared in three different ways in JavaScript. Single line strings can be declared using either single `''` or double `""` quotes. For example:
```js
const greeting = 'hello';
const farewell = "goodbye";
```
If we want to include single or double quotes within our string, then we have two options. We can either use a different quotation mark from the one we want to use to declare the string:
```js
const sentence = "It can't be";
```
or we can use a backslash `\` to escape the quotation mark we want to use:
```js
const sentence = 'It can\'t be';
```
Joining two strings in programming is known as *concatenation*. We can concatenate two strings in JavaScript using the `+` operator. For example:
```js
const greeting = 'hello';
const place = 'world';
console.log(greeting + place); // Outputs 'helloworld' - we need to concatenate a space in between our variables!
console.log(greeting + ' ' + place); // Outputs 'hello world' - that's better!
```
The third way to declare strings in JavaScript is by using backticks ``` `` ```. Backtick string declaration was introduced in ES6, and it has a few benefits compared to using single and double quotes. Firstly, backticks allow us to declare multiline strings, for example:
```js
const multilineString = `I am 
a string declared
on multiple lines!`;
```
Multiline strings can be really useful when we need to store large pieces of text in variables. Also using backticks means we can use both single `'` and double `"` quotes within our string!

Another great feature of backticks is that they allow us to embed variables into strings directly, instead of using concatenation. We do this using the syntax `${}` within the string, putting the variable name we want to embed between the curly braces `{}`. This is best illustrated with an example:
```js
const name = 'Alex';
const age = '23';
const sentence = `Hi, I'm ${name} and I'm ${age} years old.`;
console.log(sentence); // Outputs 'Hi, I'm Alex and I'm 23 years old.'
```
It should be clear from the above example that embedding our variables into strings directly has the advantage of being easier to read and quicker to write!

### Numbers
Numbers in JavaScript are exactly what they sound like - numerical values! They can be written as either integer or decimal values. Interestingly, JavaScript always stores numbers as floating point (decimal) numbers, rather than differentiating between different types of numbers (like many other programming languages do). We declare numbers like so:
```js
let age = 23;
const pi = 3.1415;
```
We can carry out arithmetic on numbers using the `+` (plus), `-` (minus), `*` (times) and `/` (divide) operators. For example:
```js
const payPerHour = 11;
const hoursWorked = 15;
const totalPay = payPerHour * hoursWorked;
console.log(totalPay); // Outputs 165

const months = 24;
const years = months / 12;
console.log(years); // Outputs 2

const four = 2 + 2;
console.log(four); // Outputs 4
```
Notice that the operator for adding numbers `+` is the same as the operator for concatenating strings, so be careful! When you want to carry out addition, make sure you are adding two numbers! Otherwise you might get some unexpected results, as demonstrated below:
```js
console.log(4 + '5'); /* Outputs '45' because JavaScript thinks we are 
trying to do concatenation (because '5' is a string), so it converts 4 
to a string and concatenates them! */
```

Another operator we can use on numbers is the modulo operator `%`. This operator returns the remainder of one number divided by another. For example:
```js
const months = 14;
const monthsThisYear = months % 12;
console.log(monthsThisYear); /* Outputs 2 - because 14 goes into 12 once 
with a remainder of 2! */
```
Infinity can be represented in JavaScript using the appropriately named keyword `Infinity`. We get `Infinity` when we try to divide a number by 0, or try to store a number that is too large to be represented in JavaScript, e.g.
```js
console.log(1 / 0); // Outputs Infinity
```
JavaScript also has a special numerical value, `NaN`, which stands for *Not a Number*. `NaN` can crop up in a few places, for instance:
- Results from numerical operations that have an undefined numerical result
- Trying to convert a non-numeric type to a number (apart from the the empty string `''`, `null` and empty arrays `[]` - which convert to `0`)

An example of this is shown below:
```js
console.log(0 / 0); // Outputs NaN
```
Check out <a href="https://javascriptrefined.io/nan-and-typeof-36cd6e2a4e43" target="_blank" rel="noopener noreferrer">this post</a> for more detail about `NaN`. 

### Booleans
Booleans (often abbreviated as bools) are variables that can have only have one of two values. In JavaScript these values are `true` or `false`, declared without quotes (otherwise they would be strings). You can think of booleans as variables that should only be in one of two states, like a light switch being either on or off. We declare them as:
```js
const dayTime = false;
const myBankAccountIsEmpty = true;
```
We'll return to booleans when we look at conditionals and their usefulness will become more apparent!

### Undefined and null
Undefined and null are a little bit more confusing than the types we have covered so far. Undefined is a special type that is given to variables that have not been initialised or assigned a value. So if we write:
```js
let age;
console.log(age); // Outputs undefined because age has not been initialised
```
Undefined appears in a couple of other places, namely arrays, functions and objects, all of which we will cover.

Null, on the other hand, is a special type that is used to specify that a variable doesn't have a value but is not undefined. Usually null is used as a placeholder, when you don't know what the value of your variable is going to be but you also don't want it to be undefined.
```js
let age = null;
console.log(age); // Outputs null
```
Checkout <a href="http://exploringjs.com/impatient-js/ch_undefined-null.html" target="_blank" rel="noopener noreferrer">this link</a> or the summary in <a href="https://codeburst.io/javascript-null-vs-undefined-20f955215a2" target="_blank" rel="noopener noreferrer">this blog post</a> for more information on undefined and null.

### typeof
To check the type of a variable in JavaScript, we can use the `typeof` keyword before the variable name, which returns the data type of that variable as a string. Here are some examples of it in practice:
```js
const age = 23;
console.log(typeof age); // Outputs 'number'

const name = 'Alex';
console.log(typeof name); // Outputs 'string'

let time;
console.log(typeof time); // Outputs 'undefined'

const unknown = null;
console.log(typeof unknown) // Outputs 'object' --> what?!
```
Notice that `typeof null` in the above example returns object! This is largely considered as a mistake in the implementation of JavaScript. Although we haven't covered objects yet, this is something to take note of. Try not to worry too much about it for now, though.

That's all we're going to cover for types for now. The two remaining types - symbols and objects - are going to be covered in the objects section later in this post.