const marvel=['thor','superman','ironman'];
const indian=['bheem','hagemaru','veer'];
marvel.push(indian);//indian array will be inserted as a single elmnt and not get merged with marvel
console.log(marvel);
//[ 'thor', 'superman', 'ironman', [ 'bheem', 'hagemaru', 'veer' ] ]

//Here, another array is taken as a single element
console.log(marvel[3][2]);
// ---------------------

const marvel2=['thor','superman','ironman'];
const indian2=['bheem','hagemaru','veer'];
const a3=marvel2.concat(indian2);
console.log(a3);
// Concat fxn merges the elements of 2 arrays
//[ 'thor', 'superman', 'ironman', 'bheem', 'hagemaru', 'veer' ]

// note: push fxn modifies original array but concat returns a  new array
// -------------------------------------



// Spread operator:

// Spreads the value of elements of two/more arrays into one array and returns a new array  
// concat canwork on only 2 arrays at a time


const a4=[...marvel2,...indian2,...indian]; //Called spread operator
console.log(a4);

// it allows you to expand, or "spread out," elements from an iterable (like an array, string, or object) wherever multiple elements or properties are expected.    


// Spread in Function Arguments
const a1=[12,8,100,6];
const a2=[90,56];
console.log(Math.max(...a1,...a2));//100

//  the spread operator (...) should be used directly inside the Math.max() function without surrounding brackets []. When you wrap the spread in [], it becomes an array, and Math.max() doesn’t accept an array as input; it needs individual numbers.



// The spread operator does a shallow copy.
const originalArray = [1, 2, [3, 4]];
const copiedArray = [...originalArray];

// Modify the nested array
copiedArray[2][0] = 99;

console.log(originalArray); // Output: [1, 2, [99, 4]]
console.log(copiedArray);   // Output: [1, 2, [99, 4]]

// Example of Shallow Copy with Objects
const originalObject = { a: 1, b: { c: 2 } };
const copiedObject = { ...originalObject };

// Modify the nested property
copiedObject.b.c = 99;

console.log(originalObject); // Output: { a: 1, b: { c: 99 } }
console.log(copiedObject);   // Output: { a: 1, b: { c: 99 } }
// -------
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log({...obj1,...obj2});//use curly braces for objects

const combined = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
// ---------
// Adding New Elements: Add elements before or after spreading an array.
const arr = [1, 2];
const newArr = [0, ...arr, 3]; // [0, 1, 2, 3]
// -------------------
// FLAT FXN :Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// The flat() method in JavaScript is used to "flatten" nested arrays,
const arr1=[1,2,[9,8,0],[11,28,[55,78,[9,76]]],90];//3-lvls nesting done
console.log(arr1.flat(2));
//[ 1, 2, 9, 8, 0, 11, 28, 55, 78, [ 9, 76 ], 90 ]

console.log(arr1.flat(3));
console.log(arr1.flat(Infinity));
// Instead of specifying the number, you can also write Infinity The depth will be calculated by the compiler itself
/*
[
   1,  2,  9,  8,S  0,
  11, 28, 55, 78, 90
]
  */

// -------------------
// Below is used during data scrapping
// Data scraping (or web scraping) is a technique used to extract data from websites or other digital sources in a structured format, often to analyze or store it for various uses.

console.log(Array.isArray('Hitesh')); //false
// to make chars of a string an array
console.log(Array.from('Hitesh'));//[ 'H', 'i', 't', 'e', 's', 'h' ]

// imp for interview☕
// array can't be formed from onjects directly...we need to mention about the keys or values of which the array has to be made
console.log(Array.from({name:"Hitesh"}));//will return just an empty array

// To create an array from the keys or values of an object, you can use Object.keys(), Object.values(), or Object.entries() and then wrap them in Array.from() if needed.
const obj = { name: "Hitesh" };

// To get an array of keys:
const keysArray = Array.from(Object.keys(obj)); // ["name"]
console.log(keysArray);

// To get an array of values:
const valuesArray = Array.from(Object.values(obj)); // ["Hitesh"]
console.log(valuesArray);

// To get an array of entries (key-value pairs):
const entriesArray = Array.from(Object.entries(obj)); // [["name", "Hitesh"]]
console.log(entriesArray);


// To make an array out of objects, elements ,variables
// of: Returns a new array from a set of elements.
const o1=9;
const o2='uio';
const o3=[9,1,1]
console.log(Array.of(o1,o2,o3)); //[ 9, 'uio', [ 9, 1, 1 ] ]

// learn more for is, of,from : mdn 


