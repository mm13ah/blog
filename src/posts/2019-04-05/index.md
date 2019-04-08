---
path: '/blog/javascript-basics'
title: 'JavaScript Basics'
date: '2019-04-05'
image: './image.jpg'
---

## Introduction

JavaScript is a great language to learn. It has many applications and is used everywhere - in the browser, on the server, for creating both desktop apps and mobile apps! If you want to learn the basics, then this a great place to start. In this post we'll be covering the basics of JavaScript, so no prerequisite knowledge is required. We're going to be covering:
- Comments, printing data and semicolons
- Variables
- Types
- Arrays
- Conditionals
- Loops
- Functions
- Scope
- Objects
- Classes

## Why JavaScript?

So why should you learn JavaScript? Here are just a few reasons:
- It is one of the fundamental building blocks of web development, alongside HTML and CSS, so if you're
planning to create websites or web apps, it is an essential.
- It can be used outside of web development for building native mobile apps (e.g. NativeScript, React Native)
and desktop apps (e.g. Electron, NW.js).
- It is the most used programming language in the world (sources: <a href="https://githut.info/" target="_blank" rel="noopener noreferrer">GitHut</a>, <a href="https://insights.stackoverflow.com/survey/2018#most-popular-technologies" target="_blank" rel="noopener noreferrer">Stack Overflow survey</a>) and without a doubt one of the most popular.
- It has a thriving community that offers lots of support and resources. For example, it has the largest Stack Overflow
community.

As an introduction, let's look at an extract from the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="noopener noreferrer">MDN Docs</a>:
```
"JavaScript is a prototype based, multi-paradigm, dynamic language, supporting object-orientated,
imperative and declarative (e.g. functional programming) styles."
```
Hopefully the above doesn't make any sense to you, which is why we're covering the basics of JavaScript! We'll return to this definition at the end of the post, and, equipped with our knowledge, we'll tackle it piece by piece. 

So let's get started! 

## Absolute basics

### Comments
Comments are pieces of code that don't actually do anything. So why are we starting with pieces of code that don't do anything? Because they are easy to understand and easy to write!

Although comments don't actually 'do' anything, that's not to say they don't have a purpose. They are used to
explain to yourself or others what your code does. However, they should be used sparingly! It's much better to have code
that is self-documenting and easily understandable than it is to have messy code covered in comments. We'll look at how to write self-documenting code when we look at naming variables, but for now just try to remember that you shouldn't be commenting every line of code that you write.

So how do we write comments in JavaScript? There are two ways. Inline comments are written using a double slash `//`, and multiline comments are written with an opening `/*` and a closing `*/`. For example:
```js
// this is an inline comment
/* this
   is 
   a
   multiline
   comment */
```
Simple enough! Now let's move on.

### console.log
The `console.log` command allows us to print out things to the console. If you open up your web browser, right click on a web page and click *Inspect* (Chrome) / *Inspect Element* (Firefox), you'll see a tab called *console*. The `console.log` command allows us to print things out to this console. For example, if we wanted to print `Hello!` to the console, we would write:
```js
console.log('Hello!');
```
Try doing this in your browser and you'll see that `Hello!` is printed to the console (ignore the `undefined` bit underneath it for now). This command is really useful for debugging your code when you can't get it to work or for finding out information about pieces of data.

### Semi-colons
Notice that in the above example, we have used a semi-colon at the end of the line. In JavaScript semi-colons are used to separate statements, and although you are not technically required to write them (the JavaScript interpreter will try to automatically add them for you), it's usually considered best practice to use them - see <a href="https://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript" target="_blank" rel="noopener noreferrer">this post</a> for more details.

## Variables
### Declaration and initialisation
In programming, variables are descriptive identifiers that we use to hold our data. They are used so we can easily reference and modify pieces of information we want to store. To create a variable we use one of the keywords `const`, `let` or `var` (we'll get into the differences of these words in a moment), followed by the variable name. This process is called *declaration*, as we are declaring that we want to create a variable. So if we wanted to declare a variable called `name`, we could write:
```js
let name; // Declare a variable called name
```
When we declare a variable, we often set it equal to an initial value, which is the piece of data we want that variable to hold. Hence this process is called *initialisation* (or *initialization*, if you're from the US). This is shown below:
```js
let name = 'Alex'; // Declare a variable called name and initialise it to the value 'Alex'
```
If you declare a variable but don't initialise it, JavaScript will automatically initialise it to have value `undefined`. We'll look at `undefined` in detail when we look at types. If you declare a variable but don't initialise it, you can still set it to a value later on in your program (provided you are using either `let` or `var`, covered below):
```js
let name; // Declare a variable called name - JavaScript initialises this to undefined
name = 'Alex'; // Set the variable value to 'Alex'
```
Although it may not be obvious why you would want to declare a variable without initialising it, there are few use cases, one of which we'll look at when we go into conditionals.

### Naming variables
There are a couple of rules you must follow when naming variables in JavaScript, which are:
1. The first character of a variable name must be a letter or an underscore.
2. Characters succeeding the first can be any letter or number, or an underscore. Other values, such as special characters, punctuation marks or spaces, aren't allowed.
3. Reserved words, which are words that have a special use case in JavaScript, cannot be used as variable names. An example of this is `let`, which we used in the code above to declare the variable `name`. See <a href="https://www.w3schools.com/js/js_reserved.asp" target="_blank" rel="noreferrer noopener">here</a> for a list of reserved words.
4. Variable names are case sensitive, so a variable declared as `name` will be different to a variable declared as `Name`.

Although these are the rules that MUST be followed when naming variables, there are a few other 'guidelines' that should be followed to ensure code readability and maintainability. These include, but are not limited to:
1. Use descriptive names for your variables - this ensures your code is much more readable.
2. Don't be afraid of using multiple words in your variable names. Although spaces aren't allowed, the two main ways to do this are using:
    - lowerCamelCase: Make the first word in your variable start with a lowercase letter and succeeding words start with capital letters.
    - snake_case: Use underscores to separate words.
3. Try to keep your variable names short - although there's no limit on how long your variable names can be, try keeping them short and concise to improve readability and save yourself some typing.

### const vs. let vs. var
In the above examples we used `let` to declare our variables, but we also mentioned that you can use `const` and `var`. So what's the difference? Let's start with `const` and `let`. These are part of ES6 (ECMAScript 2015), a fairly recent update to JavaScript that contains lots of new features. The difference between `const` and `let` is that `const` cannot be reassigned, whereas `let` can. This is illustrated below
```js
let age = 23;
age = 24; // Allowed

const year = 2019;
year = 2020; // Not allowed - throws TypeError: Assignment to constant variable
```
Earlier we mentioned that variables that are declared don't have to be initialised straight away. This is not true for variables declared using `const`, as we won't later be able to assign a value to variables declared this way! Trying to do so will give us an error:
```js
const age; // Not allowed - throws SyntaxError: Missing initializer in const declaration
```
`const` and `let` variables also can't be redeclared. What we mean by this is, once we declare a variable using either `let` or `const`, we can't then declare a variable with the same name. For example:
```js
let age = 23;
let age = 24; // Not allowed - throws SyntaxError: Identifier 'age' has already been declared
```
This is different to reassigning the variable, which we can do using `let` (but not `const`) - we can set `age` to a different value, but we can't declare it again once it has already been declared!

Now there's `var`. `var` is pre-ES6, and similarly to `let` it can be reassigned. It can also be redeclared! So this is perfectly valid JavaScript:
```js
var age = 23;
var age = 24; // Allowed
```
This is generally not considered good practice and can lead to errors in your program if you're not careful. In large code bases you may forget that you've used a variable name and accidentally overwrite it!

There are some other differences between `const`, `let` and `var`, which we are going to cover when we look at scope. For now try and remember that `const` can't be reassigned or redeclared, `let` can be reassigned but not redeclared, and `var` can be both reassigned and redeclared.

So which one should you use? You may hear varying opinions on this, but in general it is considered best practice to use `const` as often as possible unless you need to reassign your variable, in which case you should use `let`, and avoid using `var`.

## Types
We've learnt about variables, now let's dive in to types. Every variable you declare in JavaScript has a type, which is essentially the type of data that variable holds. There are seven basic types in JavaScript, which are:
- string
- number
- boolean
- null
- undefined
- symbol
- object

https://javascript.info/types#objects-and-symbols

### Strings
A string is a data type used to stored text - strings can include letters, numbers, special characters and pretty much anything else. Strings can be declared in three different ways in JavaScript. Single line strings can be declared using either single `''` or double `""` quotes. For example:
```js
const greeting = 'hello';
const farewell = "goodbye";
```
Concatenation is what we call joining two strings in programming. We can concatenate two strings in JavaScript using the `+` operator. For example
```js
const greeting = 'hello';
const place = 'world';
console.log(greeting + place); // Outputs 'helloworld' - we need to concatenate a space in between our variables!
console.log(greeting + ' ' + place); // Outputs 'hello world' - that's better!
```
String concatenation is useful, but there is an even cleaner way to join strings using the third way to declare them, which is by using backticks ``` `` ```. Backtick string declaration was introduced in ES6, and it has a few benefits compared to using single and double quotes. Firstly, backticks allow us to declare multiline strings, for example:
```js
const multilineString = `I am 
a string declared
on multiple lines!`;
```
Multiline strings can be really useful when we need to store large pieces of text in variables. Another great feature of backticks is that they allow us to embed variables into strings directly, instead of using concatenation. We do this using the syntax `${}` within the string, putting the variable name we want to embed between the curly braces `{}`. This is best illustrated with an example:
```js
const name = 'Alex';
const age = 23;
const sentence = `Hi, I'm ${name} and I'm ${age} years old.`;
console.log(sentence); // Outputs 'Hi, I'm Alex and I'm 23 years old.'
```
It should be clear from the above example that embedding our variables into strings directly has the advantage of being easier to read and quicker to write!

### Numbers
Numbers in JavaScript are exactly what they sound like - numerical values! They can be either integer or floating-point (decimal) numbers. Numbers are declared in JavaScript like so:
```js
let age = 23;
const pi = 3.1415;
```
We can carry out arithmetic on numbers using the `+` (plus), `-` (minus), `*` (times) and `/` (divide) operators. For example:
```js
const months = 24;
const years = months / 12;
console.log(years); // Outputs 2
```
Another operator we can use on numbers is the modulo operator `%`. This operator returns the remainder of one number divided by another. For example:
```js
const months = 14;
const monthsThisYear = months % 12;
console.log(monthsThisYear); // Outputs 2 - because 14 goes into 12 once with a remainder of 2!
```
JavaScript also has a special numerical value, `NaN`, which stands for *Not a Number*. `NaN` is used to represent values that should be numerical in practice but can't be represent as a number, for instance if we divide by 0:
```js
const age = 23;
console.log(age / 0); // Outputs NaN
```
This behaviour is different to most programming languages, that would result in an error if we tried to divide by 0...

### Booleans
Booleans (often abbreviated as bools) are variables that can have only have one of two values. In JavaScript these values are `true` or `false`, declared without quotes (otherwise they would be strings). You can think of booleans as variables that should only be in one of two states, like a light switch being either on or off. We declare them as:
```js
const dayTime = false;
const myBankAccountIsEmpty = true;
```
We'll return to booleans when we look at conditionals and their usefulness will become more apparent!

### Undefined and null
Undefined and null types are a little bit more confusing than the types we have covered so far. Undefined is a special type that is given to variables that have not been initialised. So if we write:
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
Checkout the summary in <a href="https://codeburst.io/javascript-null-vs-undefined-20f955215a2" target="_blank" rel="noopener noreferrer">this blog post</a> for more information on the difference between the undefined and null.

### typeof
To check the type of a variable in JavaScript, we can use `typeof` before the variable name, which returns the data type of that variable as a string. Here are some examples of it in practice:
```js
const age = 23;
console.log(typeof age); // Outputs 'number'

const name = 'Alex';
console.log(typeof name); // Outputs 'string'

let time;
console.log(time); // Outputs 'undefined'
```
Some care must be taken when using `typeof`, as it doesn't always behave as expected. For example, using `typeof` before a variable that has been assigned the `null` value returns an unexpected result:
```js
let name = null;
console.log(name); // Outputs 'object'
```

That's all we're going to cover for types for now. The two remaining types - symbols and objects - are going to be covered when we look at objects.

## Arrays

## Conditionals
In programming, conditionals are groups of statements that are only executed if a condition is satisfied (hence the name). In JavaScript, there are a few ways to write conditionals, which include:
- If and if/else statements
- Switch statements
- Ternary operator (ES6)

### If statement
The `if` statement is the simplest of all the conditionals. We use the `if` statement by passing it a condition in parentheses `()`, and if that condition is true, the code inside of the `if` statement block will execute. This is best demonstrated through an example:
```js
let over18 = true;
if (over18) {
  console.log('Have a beer!'); // Will output 'Have a beer!' because over18 is true
}

let nightTime = false;
if (nightTime) {
  console.log('Go to bed!'); // Will not execute because nightTime is false
}
```
Notice above that the `if` statement block - which is the code that executes if the condition is true - is surrounded by curly braces `{}`. The code within the curly braces is the code that will execute if the condition passes. Also note that the `if` statement block does not have a semi-colon after it. This is because semi-colons are only used to end single statements (for example `console.log('Have a beer!')`) but curly brackets `{}` are used to begin and end groups of statements.

### If else statement

### Comparison operators
- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Equal to: `===`
- 

### Logical operators
- Logical OR: `||`
- Logical AND: `&&`

```js
const isPoor = true;
const isDrunk = false;

if (isPoor || isDrunk) {
  console.log('Go home');
} else {
  console.log('Have another beer');
}
```

### Truthy vs falsy
What happens if we pass a condition into our if statement that doesn't evaluate to `true` or `false`? This is where the concept of *truthy* and *falsy* values come in. In JavaScript, falsy values are any of the following:
- `false`
- `0`
- `''` (the empty string)
- `null`
- `undefined`
- `NaN`

Any other values are considered truthy.

### Switch statement

### Ternary Operator


Maybe we would want to store whether the age was greater than 18 in a variable, so that we can reuse it throughout our program.
```js
let age = 23;
let over18 = false;
if (age) {
  over18 = true;
}
```


## Loops

## Functions

## Scope

### const vs. let vs. var (part 2)  

## Summary

```
"JavaScript is a prototype based, multi-paradigm, dynamic language, supporting object-orientated,
imperative and declarative (e.g. functional programming) styles."
```

Let's break down what that means:
1. Prototype based: Instead of being class-based, where classes and instances are distinct (like Java, for example), all objects in JavaScript are instances.
2. Multi-paradigm: JavaScript supports multiple programming paradigms, including object-orientated, imperative and declarative paradigms.
3. Dynamic language: In JavaScript, the type of variables is not known at runtime, unlike static languages.
4. Supporting object-orientated, imperative and declarative styles: See 2.

Key points:
- Comments are written using `//` (inline) and `/* */` (multiline)
- We can print to the console using the `console.log` function
- JavaScript statements should end in semi-colons `;`
- Variables can be declared using `const`, `let` or `var`
  - `const` can't be reassigned or redeclared and is block scope
  - `let` can be reassigned, can't be redeclared and is block scope
  - `var` can be reassigned and redeclared and is function scope
- There are seven basic types in JavaScript: string, number, boolean, undefined, null, object and symbol
- We can check the type of a variable using the `typeof` keyword

Next steps:
- DOM Manipulation