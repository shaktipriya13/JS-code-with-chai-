// arrays  ->objects ->fxns
//Data types Of elements inside an array can be different in javascript
// JavaScript arrays are resizable and can contain a mix of different data types. 
// All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies☕

//deep copies: Properties do not share the same reference point
//shallow copies: Properties do share the same reference point

// array can contain even objects and array inside array

const arr1=["shakti",true,6,'a',89,[1,2,3],{"name":"suman",age:9}];
//index starts from 0
console.log(arr1[5]);
console.log(arr1[6]);

// Array can also be declared as:
const a1=new Array(2,2,1,5);
console.log(a1);
// We can also access prototypes and length of array (inspect elmnt)

a1.push(90);
console.log(a1);
a1.pop();
console.log(a1);

// unshift is used to add elmnt in array from begin
a1.unshift(89);
console.log(a1);//It's not optimised method as if the array is very long, then it will become very time consuming, as all the indexes of all the elements have to be shifted. But sometime it is used when the number of elements is smaller, or you need to add the element at the beginning only
// shift is used to pop begin elmnt
a1.shift();
a1.shift();
console.log(a1);

// more methods that asks questions
console.log(a1.includes(9));//false
console.log(arr1.indexOf('a')); //3

// join: Adds all the elements of an array into a string, separated by the specified separator string.
const arr2=[6,1,2,4];
const ab1=arr2.join();  //6,1,2,4
const ab=arr2.join('-');  //6-1-2-4
console.log(ab1);
console.log(ab);
console.log(typeof ab); ///string



/*☕✨
slice() is non-destructive and returns a copy of selected elements without changing the original array.

splice() is destructive and directly modifies the original array by adding or removing elements.

+++++++++++++++++
slice()
Purpose: Extracts a section of an array without modifying the original array.

Syntax: array.slice(start, end)

Parameters:

start (optional): The beginning index (inclusive). Defaults to 0 if not specified.

end (optional): The ending index (exclusive). Defaults to the length of the array if not specified.

Return: A new array containing the extracted elements.

+++++++++++++===
splice()
Purpose: Adds, removes, or replaces elements in the array and modifies the original array.


Syntax: array.splice(start, deleteCount, item1, item2, ...)

Parameters:

start: The index at which to start changing the array.
deleteCount (optional): The number of elements to remove from the start index.

item1, item2, ... (optional): Elements to add at the start index.
Return: An array containing the deleted elements.

*/

const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3); // ["banana", "cherry"]
// `fruits` remains unchanged: ["apple", "banana", "cherry", "date"]

const fruits2 = ["apple", "banana", "cherry", "date"];
const splicedFruits = fruits2.splice(1, 2, "orange", "kiwi"); // ["banana", "cherry"]
// `fruits` is now modified: ["apple", "orange", "kiwi", "date"]


const f1=['apple','goa','purple','dog']
const v1=f1.splice(1,3,"abhi","sattupani");
//3 is the second argumnt: The second argument 3 is the number of elements to be removed from f1, starting from index 0.
console.log(v1);//[ 'goa', 'purple', 'dog' ]
console.log(f1);//[ 'apple', 'abhi', 'sattupani' ]
/*note:
const does not prevent the contents of an array (or object) from being modified. It only prevents the variable itself from being reassigned to a different value or reference.

For example, with const slicedFruits = fruits.slice(1, 3);:

const here means: You cannot reassign slicedFruits to another array or value. For instance, slicedFruits = ["new", "array"] would throw an error.
However, the elements of the array can still be modified: You can modify the contents of slicedFruits by using methods like .push() or directly setting elements.*/
