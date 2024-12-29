// Objects can be declared in two ways in javascript, as a literal or as a constructor
// When the object is made using a constructor, it is called a singleton object
// jab literal ke through declare krte ha toh singleton nhi banta ha☕..it is the only diff. b\w constructor and literal method

//1. constructor method
Object.create() //singleton

// 2. literal method
const ob2={}
const ob3={
    name:"shakti",
    'name2':"Dona"
    // Case can be skipped to be write under double quotes..They are processed itself by the system as a string
    // Keys can be of any data type string ,function,number boolean, another array or another object. 
    
}

const JsUser={
    name:"Shakti",
    age:22,
    location:"Ranchi",
    email:"shakti@msw.com",
    isLoggedIn:false,
    hobbies:['play','sing','dance'], //array
    marks:{maths:100,english:90,hindi:99},//object
    "full name":"Shakti Priya"
}
// How to access the elements of object?
console.log(JsUser.marks.hindi); //1 : using dot
// console.log(JsUser[email]);//wrong as the Names of the keys are processed as strings behind the scene by the programme 
console.log(JsUser['email']); //2 : using double quotes

console.log(JsUser["full name"]);//can't be accessed using dot

// Interview: take a symbol, make it a key of an object and print it
const mySym=Symbol('key1');
const ob4={
    name:'shakti',
    mySym:'mykey1',//although u used here the same variable used in declaration of symbol, but here it inside object it is treated as a string
    // // to make mysym treated as symbol ,write it in square brackets
    [mySym]:'mykey1'//a symbol's syntax in object☕
}
/*
const mySym = Symbol('key1');
const ob4 = {
    name: 'shakti',
    mySym: 'mykey1', // Here, 'mySym' is treated as a string key in the object
    [mySym]: 'mykey1' // Here, mySym is treated as a symbol key because of square brackets
};

-> In JavaScript, if you want to use a symbol as an object key, you must use bracket notation ([ ]). This is because symbol keys are not strings, and JavaScript expects symbol keys to be wrapped in brackets for differentiation.
-> Without the brackets, as in mySym: 'mykey1', JavaScript interprets mySym as a regular string key, not as the symbol created by Symbol('key1').
*/
console.log(ob4.mySym);
console.log(typeof ob4.mySym); //string and NOT SYMBOL
console.log(typeof ob4[mySym]);
console.log(ob4); //{ name: 'shakti', mySym: 'mykey1', [Symbol(key1)]: 'mykey1' }
//here symbol is specified in output


JsUser.email='sp@gmail.com';
Object.freeze(JsUser);//freeze Prevents the modification of existing property attributes and values, and prevents the addition of new properties

console.log(JsUser.email);//email: 'sp@gmail.com',