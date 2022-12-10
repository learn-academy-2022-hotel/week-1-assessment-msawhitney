# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:
It's a statement that uses if/else and checks for a condition to be true or false. Then it performs an action based on the result of the condition check.

Researched answer:
Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. There are multiple different types of conditionals in JavaScript including: “If” statements: where if a condition is true it is used to specify execution for a block of code.

1. What is git? What is the difference between git and Github?

Your answer:
Git is a system that allows people to contribute to the same code. Github is a particular program that uses git to allow developers to share their code and work together on it.

Researched answer:
Git is a tool used to manage source code. It was invented by Linus Torvalds in 2005. (He  created the Linex operating system, also.) It helps manage software versions and is used widely. It is used for version control and is free and open sourced.
The way it works is different from most systems that manage file-based changes. Git deals with content in little snapshots, each time new content is "committed."

GitHub, on the other hand, is a for-profit company. It is a cloud-based service and website that developers use to store and manage their code and track changes to their code. It makes it easier to collaborate on code development. Github is free for hosting a public repository.

You can use Git without GitHub, but GitHub is more user-friendly.

2. Which JavaScript operators will return a Boolean value?

Your answer:
Equality operators (==, ===), logical operators (&&, ||, !), and Relational operators (>, <, etc)

Researched answer: A Boolean value is a T/F value.
Equality operators compare one value to another. This one (==) is called the loose equality operator. The two values that are being compared are converted to the same data type before it compares them and returns a T/F value. The strictly equal sign is (===) and is like just one equal sign in normal mathematics. (One equal sign in Javascript is an assignment operator and not an equality operator.)

Logical operators are below:
&& (logical and) - like "and", it puts together two statements that must both be true in order for it to return a true value.
|| (logical or)- this is like "or" and says that at least one of the statements must be true to return a true value.
! (bang operator)- this sets the logical opposite and returns true if the value is opposite of what is written after it.

Relational operators for example (>, <) compare values. The following (12 > 3) reads as "12 is greater than 3". The result of this comparison is a Boolean value (T or F)

3. What is an index? What is the difference between index and value?

Your answer: An index is a place in an array or string where a value is. Arrays and strings are zero-indexed. A value is a piece of data that lives in that place.

Researched answer:  An index is the position of an element in an array or string. The value is what is in that position.
For example:
Array: [ "cat", "dog", "pig"]    String: "elephant"
-------->  0      1       2               012345678

For the array, dog is the value in the index position 1. Pig is the value in position 2.
For the string, h is the value in the position 4, l is the value in the position 1.


4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Arrays are comma-separated elements. The elements can be any data-type that is accepted by Javascript. Strings are a data type that contains characters between quotation marks. Both arrays and strings are zero-indexed.

Researched answer:
Arrays
An array is an object that can store many values in a single variable. Arrays can hold any of the primitive data types recognized by JavaScript. They are ordered and zero-indexed and opened and closed with square brackets []. They can be changed with built-in methods.
Strings
A string is a sequence of characters (one or more) enclosed in quotation marks (example: "my name is aileen"). They are a primitive data type and are unchanging.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming is when two people work on the same piece of code at the same time. One person is the driver - they set up the file and do the typing. The second person is the navigator - they do research and tell the driver what to type. The pair work together on figuring out what code to use and communicate as they go along. However, the driver mostly types as the navigator watches for typos, errors, etc and directs the driver as they type. It's a way of solving issues together and insuring there are fewer errors in the final code. The driver/navigator positions are switched on a regular basis as the code is written.

Researched answer: Pair programming is a technique for software development where two programmers work together at one workstation (or sharing a screen on Zoom). The two programmers work on the same piece of code. The programmers switch roles frequently. Here are the roles:

1. Driver:
She or he writes code while the other reviews the code. The driver focuses all of their attention on the typing and completing the task at hand.

2. Observer or Navigator:
She or he reviews the code that the Driver types, let's the Driver know if there is a mistake that needs correcting, and comes up with ideas for improvement, etc..

This technique helps to catch errors as they occur and uses the knowledge of both programmers together.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: a higher-order function is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result. (All other functions are first-order functions)

2. Jest: Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. Jest was created by Facebook and used by Twitter, Spotify, and Airbnb.

3. Objects: Objects are the intersection of data and behavior. An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).

4. Method: A method is a property of an object that contains a function definition. Methods are functions stored as object properties.

5. Classes: Classes are the blueprint or templates for objects. Classes are reusable and customizable, much like functions. They are a particular type of function that contain data and behavior. Classes are the blueprints of objects.
