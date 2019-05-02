---
path: '/blog/javascript-basics/conditionals'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/arrays'
next: '/loops'
---

## Conditionals
In programming, conditionals are groups of statements that are only executed if a condition is satisfied (hence the name). In JavaScript, there are a few ways to write conditionals, which include:
- If statements
- Switch statements
- Ternary operator (ES6)

### If statement
The `if` statement is the simplest of all the conditionals. We use the `if` statement by passing it a condition in parentheses `()`, and if that condition is true, then the code inside of the `if` statement block will execute. This is best demonstrated through an example:
```js
const over18 = true;
if (over18) {
  console.log('Have a beer!'); // Will output 'Have a beer!' because over18 is true
}

const nightTime = false;
if (nightTime) {
  console.log('Go to bed!'); // Will not execute because nightTime is false
}
```
Notice above that we surround the code after the `if` statement by curly braces `{}` - we call this a *block* of code. Also notice that blocks of code don't need semi-colons after them - this is because we use semi-colons to end single statements, whereas we use curly braces to begin and end groups of statements. If this doesn't make too much sense at the moment, don't worry, as we'll return to this when we look at scope.

### If else
The `if` statement can be extended so that an additional block of code is executed if the condition passed to the `if` statement is `false`. To do this, we pass a condition to an `if` as before, and if that condition passes the code block after it will execute. The difference here is that we can add an `else` statement and block of code after the `if` block, which will only execute if the condition we pass to the if statement is `false`. For example:
```js
const over18 = true;
if (over18) {
  console.log('Have a beer!'); // over18 is true so this statement will execute
} else {
  console.log('Not old enough'); // over18 is true so this statement WON'T execute
}

const nightTime = false;
if (nightTime) {
  console.log('Go to bed!'); // nightTime is false so this statement won't execute
} else {
  console.log('Go outside!'); // nightTime is false so this statement WILL execute
}
```
The `if` and `else` statements allow us to execute two mutually exclusive blocks of code based on a binary condition - or in simpler terms they allow us to execute one of two blocks of code dependent on whether a condition is `true` or `false`.

### Comparison operators
In the conditionals we've looked at so far, the variables we've passed to the `if` statements have been explicitly assigned a value of `true` or `false`. But what if we want to test something other than a variable being `true` or `false`? One way to do so is using comparison operators. The comparison operators in JavaScript are:
- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Strict equality: `===`
- Loose equality: `==`

Hopefully the first four operators in this list are pretty self-explanatory - they are used to compare numbers. When we use comparison operators in JavaScript, they evaluate to either `true` or `false`. This is why they are useful when used with conditionals. Here are some examples:
```js
const age = 23;
if (age < 18) { // age is greater than 18, so age < 18 evaluates to false
  console.log('Not old enough'); // so this statement doesn't execute
} else {
  console.log('Have a beer!'); // but this statement does!
}

const year = 2019;
if (year >= 2000) { // year is greater than 2000, so year >= 2000 evaluates to true
  console.log('21st century'); // so this statement executes
} else {
  console.log(`Party like it's 1999`); // and this one doesn't
}

```
Make sure you are comparing numbers when using these operators - if you try and compare other values, JavaScript will try and convert these values to numbers - which could result in `NaN`!

### Strict equality vs. loose equality
So the first four comparison operators we looked at are pretty straight forward, but what about strict equality and loose equality? These operators are used to check whether one value is equal to another. The difference between them is:
- Strict equality compares type and value
- Loose equality compares only value

What we mean by this is that strict equality checks whether two values are the same and checks whether they are of the same type, whereas loose equality only checks whether the values are the same. Perhaps this is better illustrated with an example:
```js
const age = 23;
console.log(age == '23'); // Outputs true because of loose equality, age and '23' have the same value
console.log(age === '23'); // Outputs false because of strict equality, age and '23' have different types
console.log(age === 23); // Outputs true, age and 23 have same value and type
```
In most cases you'll want to use the strict equality comparison operator, as it's more likely you'll want to test for type and value instead of just value. Also make sure that you're not using the assignment operator `=` when you want to test for equality!

### Else if
We've looked at the `if` and `else` statements, which allows us to execute code based on a binary decision - if the condition is `true` or `false` - but what if we want to test for more than two things? This is where we can use the `else if` statement. The `else if` statement is, unsurprisingly, a combination of the `else` statement and the `if` statement. It allows us to chain multiple `if` statements together. For example:
```js
const age = 18;
if (age < 18) { // age is greater than 18, so age < 18 is false
  console.log(`You're a child`); // so this statement won't execute
} else if (age === 18) { // age equals 18, so age === 18 is true
  console.log(`You've become an adult`); // so this statement will execute
} else {
  console.log(`You're old`); // and this statement won't execute
}
```
When using `else if` statements, you can use as many as you want! It's worth noting that only the block of code which belongs to the first condition which is passed will execute. For example:
```js
const age = 18;
if (age === 18) { // age equals 18, so age === is true
  console.log(`You've become an adult`); // so this statement will execute
} else if (age < 21) { // age is less than 21, so age < 21 is true, but the first condition was already satisfied
  console.log(`You're young`); // so this statement won't execute
} else {
  console.log(`You're old`); // and this statement won't execute
}
```

### Logical operators
Earlier we mentioned you can use comparison operators in your conditionals. There's also another category of operators we can use, which are called *logical* operators. Logical operators are named so because of there origin in mathematical logic. The first two logical operators in JavaScript are:
- Logical OR: `||`
- Logical AND: `&&`

These operators allow us to chain two or more conditions together, and will evaluate to either `true` or `false`. 
We use these operators in between two or more conditions or values. `||` (OR) evaluates to `true` if one of the conditions or values are `true`, and otherwise evaluates to `false`, whereas `&&` (AND) evaluates to `true` if only both of the conditions or values are `true`, and otherwise evaluates to `false`. This is demonstrated below:
```js
const isPoor = true;
const isDrunk = false;

if (isPoor || isDrunk) { // isPoor is true, so isPoor || isDrunk evaluates to true
  console.log('Go home'); // so this statement executes
} else {
  console.log('Have another beer'); // this one doesn't execute
}

if (isPoor && isDrunk) { // isPoor is true but isDrunk is false, so isPoor && isDrunk evaluates to false
  console.log('You definitely need to go home!'); // so this statement doesn't execute
}
```

### Bang operator
There is one more logical operator in JavaScript which we haven't mentioned. This is known as the bang (NOT) operator `!`. The bang operator switches the value of `true` or `false`. For example:
```js
const bankAccountIsEmpty = !false;
console.log(bankAccountIsEmpty); // Outputs true, because ! switches the value of false to true
```
It may be easier to read the bang operator as 'not', so in the above example we would say `bankAccountIsEmpty` is not `false` (so it's `true`).

### Switch statement
The switch statement provides us with an alternative to way execute blocks of code based on different conditions. The way the switch statement works

To use the switch statement, we pass it a variable, and then define a number of cases that only execute if that variable equals that case. This might sound confusing, but is best illustrated with an example:
```js
const category = 'adult';
switch(category) {
  case 'adult': {
    console.log(`You're an adult`);
    break;
  }
  case y: {
    code block
    break;
  }
  default: {
    code block
  }
}
```
So we use the switch statement to check whether a variable is equal to certain values - we can't use comparison or logical operators here as these will evaluate to `true` or `false`

Note that switch statements use strict equality for comparison!


### Ternary operator
The ternary operator was introduced in ES6 and is often considered as an inline if statement. We can use the ternary operator by writing the following syntax:

```js
condition ? valueIfTrue : valueIfFalse
```
So converting an example we used above:
```js
const age = 23;
age < 18 ? console.log('Not old enough') : console.log('Have a beer');
```
I often read the `?` as `if` and `:` as `else`, which has a nice correspondence with the if else statement. I find I use the ternary operator the most for assigning variables based on a condition, for example:
```js
const age = 23;
const category = age < 18 ? 'child' : 'adult';
console.log(category); // Will output 'adult'
```
Note that you can chain multiple ternary operators together:
```js
const age = 23;
const category = age < 18 ? 'child' : age < 30 ? 'young adult' : 'adult';
console.log(category); // Will output 'young adult'
```

In practice it's probably a better idea to use if/else if statements or the switch statement rather than multiple ternary operators, as they can quickly become hard to read.

### Truthy vs. falsy
So we've covered if statements, switch statements and the ternary operator, as well as comparison and logical operators. In all of these examples our conditionals have been executed on whether a condition was `true` or `false`. But what happens if, for example, we pass a condition into an if statement that doesn't evaluate to `true` or `false`? This is where the concept of *truthy* and *falsy* values come in. As stated in the <a href="" target="_blank" rel="noopener noreferrer">MDN Docs</a> "a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy".

In JavaScript, falsy values are any of the following:
- `false`
- `0`
- `''` (the empty string)
- `null`
- `undefined`
- `NaN`

All other values in JavaScript are considered truthy. What this essentially means is that, if we pass in any of the above values to an `if` statement, they will evaluate to `false`. Any other values we pass in will evaluate to `true`. Truthy and falsy values can be really useful if we want to check whether a variable exists/has been initialised or not. For example:
```js
let name;
if (name) {
  console.log(`Hi ${name}`);
} else {
  console.log(`Hello`);
}

const age = 23;
if (age) {
  console.log(`You are ${age} years old`);
} else {
  console.log(`I don't know how old you are`);
}
```
Note that the bang operator `!` also switches the value of truthy and falsy values!

