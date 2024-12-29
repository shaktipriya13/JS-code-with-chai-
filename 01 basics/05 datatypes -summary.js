// There are mainly two types of data types:  Primitive and non primitive based on their mutability (whether they can be changed or not) and memory allocation (how they're stored in memory)....Important for interview☕

/*
1. Primitive Data Types (7)
Primitive data types are immutable and stored directly by value. Once created, the value of a primitive data type cannot be altered. If you assign a new value to a primitive variable, JavaScript creates a new value in memory rather than modifying the original.

Characteristics of Primitives:
-> Stored by value: Each variable holds its own copy of the data.
-> Immutable: The value cannot be changed (although the variable can point to a new value).
-> Types of Primitive Data Types:
-> Number: For both integer and floating-point numbers.
-> String: For textual data, a sequence of characters.
-> Boolean: Representing true or false.
-> Undefined: A variable that has been declared but not assigned a value.
-> Null: Represents the intentional absence of any object value.
-> Symbol: A unique and immutable identifier, introduced in ES6.
-> BigInt: For integers larger than the Number type can safely represent, introduced in ES-2020. Example: used for scientific values
*/
let a = 5;
let b = a;    // `b` gets its own copy of 5
a = 10;       // Changing `a` doesn’t affect `b`
console.log(b); // Outputs: 5
// jo bhi changes hoge b me wo copy me change hoge and will not reflect in Original value of a


/*2. Non-Primitive (Reference) Data Types
Non-primitive types, also called reference types, are mutable and stored by reference. This means that when you assign or pass non-primitive data, JavaScript doesn't create a copy; instead, it creates a reference to the original memory location.

-> Characteristics of Non-Primitives:
-> Stored by reference: Variables reference the memory location where data is stored.
-> Mutable: The contents can be changed without changing the reference.

-> Types of Non-Primitive Data Types:
-> Object: Used to store collections of data and more complex entities. Objects include:
-> Arrays
-> Objects
-> Functions
-----------
-> Date
-> RegExp
*/
let arr1 = [1, 2, 3];
let arr2 = arr1; // `arr2` is a reference to `arr1`
arr1.push(4);
console.log(arr2); // Outputs: [1, 2, 3, 4], showing that `arr2` reflects changes in `arr1`


// To mastere javascript=>  master: objects and browser events.
// , you can use the following shortcut to jump to the end of a file:  Ctrl + End



// /--------------------------------------------
/*Dynamic Typing in JavaScript:

->JavaScript is dynamically typed, meaning variable types are determined at runtime.
->No need to explicitly declare the type of a variable.
->Variables can hold values of different types over their lifetime.*/
let x = 10; // x is a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
/*Static Typing in Other Languages:

Statically typed languages require explicit type declaration.
->Type checking occurs at compile-time, before code execution.
->Examples include Java, C++, and TypeScript.*/

int x = 10; // x is an integer
String name = "John"; // name is a String

/*Pros and Cons:

-> Dynamic Typing (JavaScript): Offers more flexibility but can lead to runtime errors if types are not handled carefully.
-> Static Typing: Provides type safety and error-checking at compile-time, though it may require more initial strictness and verbosity.*/

// Float values or decimal values are also considered under the number data type in javascript. They don't have any other special class named as float


/*Characteristics of Symbols
Uniqueness:

-> Each Symbol is guaranteed to be unique, even if they are created with the same description.
-> This uniqueness makes Symbol useful for creating private or hidden properties on objects, as no two symbols are ever the same.*/
const id1=Symbol('123')
const id2=Symbol('123')
console.log(id1===id2); // false, because each Symbol is unique 

const bigNum=81237891738917381737n; //bigInt
console.log(typeof bigNum);

// Non Primitive
let arr4=['Shakti','Priya','Shiva']
// anything inside {} braces is Considered as an object. objects can also be declared without a variable
let ob1={
    name:"Shakti",
    age:22,
}
// Data types inside the object can also be an array or another object

// fxn
const myFunc=function(){
    console.log("Hello World");
}
myFunc();
console.log(typeof myFunc); //Function

// ☕Saari non primitive data types data type "object" hi aata ha
// Symbol ka data type is symbol


/*


Return type of variables in JavaScript☕

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object☕
       undefined  =>  undefined☕
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object */



// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap memory in javascript


// In JavaScript, memory is managed in two main areas: the Stack and the Heap
//Stack(Primitive), Heap(Non -primitive)
//Memory in JavaScript is allocated automatically, thanks to its Garbage Collector (GC).
// When a variable is declared, memory is allocated in the Stack or Heap.
//  When values are assigned, primitives are stored directly in stack, while references to objects point to the Heap.
//  JavaScript’s garbage collector frees up Heap memory when it finds that an object is no longer referenced anywhere in the program.

// stack is faster than heap but heaps can hold much more data.


// primitive eg: stack
let name1="Shakti"
let name2=name1;
name2="Priya";//it don't changes name1, means name2 has created a copy of name1 and not refernced it

console.log(name1);
console.log(name2);

// non-primitive eg: heap
let user1={
    id:123,
    class:'B'
}
let user2=user1;
user2.class='C'; //since was non-primitive object so also changed value of user1

// user1 ,user2 variable will be stored in stack but their content is stored in heap..jisse bar-bar refrence liya jayega
console.table([user1]);
console.table([user2]);
