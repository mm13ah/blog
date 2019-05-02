---
path: '/blog/javascript-basics/absolute-basics'
title: 'JavaScript Basics'
index: '/blog/javascript-basics'
prev: '/'
next: '/variables'
---

## Absolute basics
Before we get stuck in to the main content of this post, there are some basics we should cover. These basics are comments, `console.log` and semi-colons. If you are already familiar with these things, feel free to skip to the <a href="/blog/javascript-basics/variables">next page</a>.

### Comments
Comments are pieces of code that don't actually 'do' anything. They are a good starting point because they are easy to understand, easy to write and help to explain our code.

Although comments don't actually 'do' anything, that's not to say they don't have a purpose. We use comments to explain things about our code, or as Wikipedia succinctly puts it, comments have 'the purpose of making source code easier for humans to understand'. This is because it may be obvious to us what our code does or how it does something when we write it, but who's to say this will be true in a month's or a year's time? And even if it is obvious to you, that doesn't mean it will be obvious to someone else! That's why we use comments; to 'comment' things about our code.

So how do we write comments in JavaScript? There are two ways. Inline comments are written using a double slash `//`, and multiline comments are written with an opening `/*` and a closing `*/` slash. For example:
```js
// this is an inline comment
/* this
   is 
   a
   multiline
   comment */
```
Note that comments should be used sparingly! It's much better to write self-documenting code that can be easily understood than it is to have unreadable code covered in comments. We'll look at how to write self-documenting code when we look at naming variables, but for now just try to remember that you shouldn't be commenting every line of code that you write.

### console.log
The `console.log` command allows us to print things out to the console. If you open up your web browser, right click on a web page and click *Inspect* (Chrome) / *Inspect Element* (Firefox), you'll see a tab called *console*. The `console.log` command allows us to print things out to this console. For example, if we wanted to print `Hello!` to the console, we would write:
```js
console.log('Hello!');
```
Try doing this in your browser and you'll see that `Hello!` is printed to the console (ignore the `undefined` bit underneath it for now). This command is really useful for finding out information about pieces of data or debugging your code when you can't get it to work. We'll use this command multiple times in this blog post, along with comments, to explain what's going on!

### Semi-colons
Notice that in the above example, there is a semi-colon `;` at the end of the line. In JavaScript semi-colons are used to separate statements (lines of code), and although you are not technically required to write them (the JavaScript interpreter will try to automatically add them for you), it's usually considered best practice to use them - see <a href="https://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript" target="_blank" rel="noopener noreferrer">this post</a> for more details.