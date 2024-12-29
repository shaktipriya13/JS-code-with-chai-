const name="Shakti Priya";
const repoCount=30;
console.log("Shakti "+name);//old syntax : outdated
console.table([name[0],name[1],name[2]]);


console.log(`${name} has repocount as: ${repoCount}`);//modern syntax
// String interpolation is a feature in modern JavaScript (ES6 and later) that allows you to insert (or interpolate) variables directly into strings. This is done using template literals, which are enclosed by backticks (`) instead of quotes (" or ').

// this method has benefit like we can use functions on the go
console.log(`${name.toUpperCase()} has repocount as: ${repoCount}`);//modern syntax

// other way to declare string using 'new' keyword ...it uses js object
const str1=new String("Shiva");
console.log(str1);
// string is always an object and not a character array like in cpp. a string has key-value pairs in js like an object..the keys are indexes of cahracters

// string methods ko master krna ha

console.log(str1[4]);
console.log(str1.indexOf('h'));
console.log(str1.__proto__);
/* __proto__ Property:

The __proto__ property is a reference to the prototype of the object. You can think of it as a way to access the prototype chain directly.

When you use console.log(str1.__proto__), you are logging the prototype object of str1, which will show you the properties and methods available to the String object.*/
console.log(str1.length); //length Is a property/method and not a function

console.log(str1.toUpperCase());//Here the actual string is not changed because a copy has been made in the stack memory And heap is not used as a reference -Important for interview☕

// Go through all the string methods and write an article -interview

// Slicing
let n="Shakti Priya";
let sub1=n.substring(0,4); //will go upto n-1
let sub2=n.substring(-8,4); //starts from 0 only
console.log(sub1);
// Substr cannot be given negative values. Negative values can be given in the slice method. But if you try to give negative values in the substr method, it will start from zero only
/*Using Negative Indexes
When you use a negative index, it counts backwards from the end of the string:

-1 refers to the last character.
-2 refers to the second-to-last character, and so on.*/
const str = "Hello, World!";

// Slice the last 6 characters
const slice1 = str.slice(-6); // "World!"
console.log(slice1); // Output: "World!"

// Slice from the 7th character from the end to the end
const slice2 = str.slice(-6, -1); // "World"
console.log(slice2); // Output: "World"

// Slice the last 5 characters
const slice3 = str.slice(-5, -1); // "orld"
console.log(slice3); // Output: "orld"

// Slice with both positive and negative indexes
const slice4 = str.slice(0, -7); // "Hello,"
console.log(slice4); // Output: "Hello,"
/*
Key Points
-> When using negative values, if startIndex is negative, it counts from the end of the string. If endIndex is also negative, it also counts from the end.
-> If startIndex is greater than endIndex, an empty string will be returned.
-> If startIndex is negative and exceeds the string length, it will default to 0.
-> If endIndex is negative and exceeds the string length, it will default to the string length.
-> Summary
-> Negative indexing allows you to easily access and slice parts of a string from the end without needing to calculate the exact positive index. This feature is particularly useful when you need to work with substrings located towards the end of a string.
*/

const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''



const s2="   Shivam    ";
console.log(s2.trim()); 
// trimeStart and  trimEnd also exists
// Whitespace is defined as white space characters plus line terminators.

/*

Common Line Terminators
1.	Carriage Return (CR): a special character used to move the cursor back to the beginning of a line. It originally comes from typewriters,  mainly used in text files to indicate the end of a line 

console.log("Hello, World!\rHi");
// Output: Hi, World!
Here, \r moves the cursor to the start of the line, so "Hi" overwrites "Hello".


o	Character: \r
o	ASCII Code: 13
o	Often used in older Mac systems.

2.	Line Feed (LF)-> (\n): Moves the cursor to the next line
o	Character: \n
o	ASCII Code: 10
o	Used in Unix and Linux systems, as well as modern Mac systems.

3.	Carriage Return followed by Line Feed (CRLF):
o	Sequence: \r\n
o	Used in Windows systems to indicate the end of a line.
4.	Next Line (NEL):
o	Character: \u0085
o	Used in some environments, such as older versions of Mac.

5.	Vertical Tab (VT):
o	Character: \v
o	ASCII Code: 11
o	Sometimes used in text formatting.

console.log("Hello\vWorld!");
// Output (if supported):
// Hello
//       World!
In most modern systems and applications, \v is generally ignored or treated similarly to a space or line break.


6.	Form Feed (FF):
o	Character: \f
o	ASCII Code: 12
o	Historically used in printers but less common in modern text processing.
7.	Line Separator:
o	Character: \u2028
o	Used in Unicode text.

*/


// replace
// let url ="https://www.codewithharry.com/           notes/";
// If space is added in between of the url, the browser does not understand the space and replaces it with % 20. Example shown below:
// let url2 = "https://www.codewithharry.com/%20%20%20%20%20%20%20%20%20%20notes/";

/*When you include spaces in a URL, browsers and web servers typically do not handle them well because spaces are not valid characters in URLs. Instead, they are replaced with a specific encoding known as URL encoding or percent encoding.

In URL encoding, spaces are replaced with %20, which represents the ASCII value of the space character.*/


let url = "https://www.codewithharry.com/           notes/";

// Simulating URL encoding for the example
let url2 = "https://www.codewithharry.com/%20%20%20%20%20%20%20%20%20%20notes/";

// Replace the first occurrence of '%20' with a space
let x = url2.replace('%20', ' ');
console.log(x); // Output: https://www.codewithharry.com/ %20%20%20%20%20%20%20%20%20%20notes/

// Replace all occurrences of '%20' without regex
let p = x.split('%20').join(' '); // Split and join to replace all occurrences
console.log(p); // Output: https://www.codewithharry.com/                     notes/

// with regex
let url3 = "https://www.codewithharry.com/%20%20%20%20%20%20%20%20%20%20notes/";

// Using regex to replace all occurrences of '%20' with a space
let p1 = url2.replace(/%20/g, ' ');

console.log(p1); // Output: https://www.codewithharry.com/                     notes/


// The more you will get familiar with strings, it will help you in the backend and front end development

console.log(url2.includes('www'));

// Converting string to array using split
let names="Shakti-Priya-Mithi"
console.log(names.split('-'));

// give 15 mins to laern more string fxns
// practice string code


// -----------------------------------------------
// String documentation
// Character access
"shakti".charAt(2);
console.log("shakti".charAt(3));
console.log("shakti"[2]);

// all comparison operators, including === and ==, compare strings case-sensitively. 