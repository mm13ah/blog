---
path: '/blog/javascript-basics/variables'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/absolute-basics'
next: '/types'
---

## Variables
In programming, variables are descriptive identifiers that we use to hold our data. They are essentially just named placeholders that allow us to easily reference and modify pieces of information we want to store. There are three things you need to understand to get a grasp of variables:
1. Declaration
2. Initialisation
3. Assignment

These three concepts are much simpler than you might think!

### Declaration
To create a variable in JavaScript, we use one of the keywords `const`, `let` or `var`, followed by the name we want to give that variable. This process of creating variables is called *declaration*. So if we wanted to declare a variable called `name`, we could write:
```js
let name; // Declare a variable called name
```

### Initialisation
When we declare a variable, we often set it to an initial value, which is the piece of data we want that variable to hold. Hence this process is called *initialisation* (or *initialization*, if you're from the US). This is shown below:
```js
let name = 'Alex'; // Declare a variable called name and initialise it to the value 'Alex'
```
If you declare a variable but don't initialise it, JavaScript will automatically set it to have value `undefined`. We'll look at `undefined` in detail when we look at types.

### Assignment
*Assignment* is the process of setting a variable to a value, which we do using the assignment `=` operator. In the above example we initialised the variable `name` by setting it to the value `'Alex'`, or in other words *assigning* it the value `'Alex'`. So all assignment really is is giving your variable a value. Note that this is not the exact same thing as initialisation - initialisation is assigning a variable a value when it is declared, whereas assignment can happen after a variable is declared. Here are some examples:
```js
let firstName; // Declare a variable called name - JavaScript sets this to undefined
name = 'Alex'; // Assign name to 'Alex'

let age = 23; // Declare a variable called age and initialise it to 23
age = 24; // Assign age to 24
```
That's all there really is to declaration, initialisation and assignment. Now let's take a look at how we should name variables.

### Naming variables
There are a couple of rules you must follow when naming variables in JavaScript, which are:
1. The first character of a variable name must be a letter or an underscore.
2. Characters succeeding the first can be any letter or number, or an underscore. Other values, such as special characters, punctuation marks or spaces, aren't allowed.
3. Reserved words, which are words that have a special use case in JavaScript, cannot be used as variable names. An example of this is `let`, which we used in the code above to declare our variables. See <a href="https://www.w3schools.com/js/js_reserved.asp" target="_blank" rel="noreferrer noopener">here</a> for a list of reserved words.
4. Variable names are case sensitive, so a variable declared as `name` will be different to a variable declared as `Name`.

Although these are the rules that MUST be followed when naming variables, there are a few other 'guidelines' that should be followed to ensure code readability and maintainability. These include, but are not limited to:
1. Use descriptive names for your variables - this ensures your code is much more readable.
2. Don't be afraid of using multiple words in your variable names. Although spaces aren't allowed, the two main ways to do this are using:
    - lowerCamelCase: Make the first word in your variable start with a lowercase letter and succeeding words start with capital letters.
    - snake_case: Use underscores to separate words.
3. Try to keep your variable names short - although there's no limit on how long your variable names can be, try keeping them short and concise to improve readability and save yourself some typing.

### const vs. let vs. var
In the above examples we used `let` to declare our variables, but we also mentioned that you can use `const` and `var`. So what's the difference? Let's start with `const` and `let`. These are part of ES6 (ECMAScript 2015), a fairly recent update to JavaScript that contains lots of new features. The difference between `const` and `let` is that `const` cannot be reassigned, whereas `let` can. This is illustrated below:
```js
let age = 23;
age = 24; // Allowed

const year = 2019;
year = 2020; // Not allowed - throws TypeError: Assignment to constant variable
```
In previous examples we've shown that variables don't have to be initialised straight away. This is not true for variables declared using `const`, as we won't later be able to assign a value to variables declared this way! Trying to do so will give us an error:
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
