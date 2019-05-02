---
path: '/blog/javascript-basics/loops'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/conditionals'
next: '/functions'
---

## Loops
In programming, loops are used to perform tasks we want to happen repeatedly. As a not particularly useful example, say you wanted to print `hello` to the console 100 times. You could write `console.log('hello');` 100 times, or you could use a loop to do it for you.

In JavaScript, there are three types of loops we can use:
- For loops
- While loops
- Do while loops

You can usually use all of them to achieve the same task. Let's have a look at each one in detail.

### For loops
There are two parts to a for loop. The first part is a statement or group of statements we pass to it, and the second is the block of code we want to execute in each iteration of the loop. The first part is dependent on which type of for loop we use - in JavaScript there are three types of for loop:
- For loop with an iterator
- For in loop
- For of loop

#### For loop with an iterator

The most basic for loop is the for loop with an iterator. For this type, we pass in three statements in the first part, which are:
1. Define an iterator to be used within the loop
2. Define the condition for which the loop should terminate
3. Define a statement that should be executed after each iteration

This is perhaps best illustrated with an example. Earlier we mentioned printing `hello` out to the console, so let's demonstrate how you would do that with a for loop with an iterator:
```js
for (let i = 0; i < 100; i = i + 1) {
  console.log('hello');
}
```
In the above example we are defining a variable (an iterator) by writing `let i = 0`, we are giving it a condition for which the loop should terminate `i < 100`, and passing a statement that should be executed after each iteration of the loop. The loop terminates when the condition we pass it becomes false, i.e. when `i < 100` is false.

So we set `i = 0`, add 1 to `i` after each iteration, and when `i < 100` is false we terminate the loop. The result is that we get `hello` printed to the console 100 times.

We can write the third statement we passed to the for loop slightly neater. Instead of writing `i = i + 1`, we can write `i += 1`. You can do this with any of the mathematical operators (e.g. `i *= 2` would multiply `i` by 2).

Note that we can use the iterator in our block of code. For example, say we wanted to print the numbers 1 to 100 to the console. We would write:
```js
for (let i = 1; i <= 100; i += 1) {
  console.log(i);
}
```
Notice that we are defining our iterator using the `let` keyword, as we want the value of `i` to change after each iteration. 

#### For in loops
For in loops are used to iterate through the properties of an object. We haven't covered objects yet, so we'll have another look at the for in loop when we cover them, but for the sake of completeness we'll give an example below:
```js
const person = { name: 'Alex', age: '23' }; // Define an object with properties name and age
for (let property in person) {
  console.log(person[property]); // Print each property to the console
}
```

#### For of loops

### While loops


### Do while loops