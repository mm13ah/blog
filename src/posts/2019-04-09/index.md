---
path: '/blog/javascript-basics'
title: 'JavaScript Basics'
subtitle: 'Introduction'
indexPage: true
index: '/blog/javascript-basics'
next: '/absolute-basics'
date: '2019-04-09'
image: './image.jpg'
---

JavaScript is a great language to learn. It has many applications and can be used everywhere - in the browser, on the server, for creating mobile apps and even desktop apps! In this post we'll be going over the basics of JavaScript, so no prerequisite knowledge is required. We're going to be covering:
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
- It is the most used programming language in the world (sources: <a href="https://githut.info/" target="_blank" rel="noopener noreferrer">GitHut</a>, <a href="https://insights.stackoverflow.com/survey/2019#most-popular-technologies" target="_blank" rel="noopener noreferrer">Stack Overflow survey</a>) and without a doubt one of the most popular.
- It has a thriving community that offers lots of support and resources. For example, it has the largest Stack Overflow
community.

As an introduction, let's look at an extract from the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="noopener noreferrer">MDN Docs</a>:
```
"JavaScript is a prototype based, multi-paradigm, dynamic language, supporting object-orientated,
imperative and declarative (e.g. functional programming) styles."
```
Hopefully the above doesn't make any sense to you, which is why we're covering the basics of JavaScript! We'll return to this definition at the end of the post, and, equipped with our knowledge, we'll tackle it piece by piece. 

Please note that in this blog post, I've tried to separate different topics so that each new topic builds upon things previously learnt. That being said, somethings need to be mentioned before they are looked at in detail - and I've noted this throughout and stated where these things will be covered later on in the post.

So let's get started!

<!-- ## Loops

## Functions

## Scope

### const vs. let vs. var (part 2)  
Hoisting

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
- DOM Manipulation -->