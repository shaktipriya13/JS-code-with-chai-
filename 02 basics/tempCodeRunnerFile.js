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
console.log(ob4);