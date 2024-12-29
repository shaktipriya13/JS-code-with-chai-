//following are some looops which are specialized to be used only with arrays

["","",""] //strings in array
[{},{},{}] //objects in array

// loops can be applied on any type of iterables
const arr=['dog','cat','pie']
for (const val of arr) {
    console.log(val);
}   

for (const char of "Hongkong") {
    console.log(char);
}

const greetings="Hello World!";
for (const greet of greetings) {
    if(greet==' ') continue;
    console.log(`Each char is ${greet}`);
}

// maps are new datatypes in js like arrays
// maps store "unique" key-value pairs
const map=new Map();
map.set("IN","INDIa");
map.set("USa","united states")
map.set("Fr","France")
map.set("IN","INDIa");

console.log(map);
// Map(3) { 'IN' => 'INDIa', 'USa' => 'united states', 'Fr' => 'France' }

for (const key of map) {
    console.log(key);//prints in array form
}

// to print only keys, we hav to use following syntax: this does destructuring of array
for (const [key,value] of map) {
    console.log(key);
    console.log(value);
}

const myObj={name:"Shakti",age:22,city:"Ranchi",name:"Shakti"}
console.log(myObj);
// objects are not iterable but maps are iterable
for (const [key,val] of myObj) {
    console.log(`${key} -> ${val}`);//gives error
}
/*The main difference is that:

Maps allow keys of any data type and maintain insertion order.

Objects have keys that are always strings or symbols, and they don’t guarantee any specific order for non-integer keys.*/