// today's js has classes, modules , arrow fxns.
"use strict" //using this means telling compiiler to treat All the code as the newer version of javascript...

// js ka engine browser ke andar chipa ha

// alert ko use krne ka diff. synatx ha node me
// alert(5+5); //is wrong in node but right in browser's consle...We are using node js and not browser in vs code

// code readibility is vimp
/*documenatation:
1. mdn by mozilla firefox; eg: search mdn alert : mdn hi use krna
2. tc39.es : echmaScript...phle alag alag browsers ke alag alag js syntax the....tab sare browsers ne milke 1 organisation banayyi called echma script jisme sab js ke standards define kie gye...ye wo log padhte ha jo khudka browser ya engine banate ha*/

// Dataypes in JS:
let name="Shakti" //string
let age=18
let isLoggedIn=false;

// range for number => 2 to power 53
// bigInt
// string=> " " or ' '
// boolean => true /false
// null => is standalone value along being a datatype. null Is representation of an empty value.eg:
let temperature=null; //mtlb temperature ki value aayi hi nhi ha...its empty
// let temperature=' '; is not a null kyuki pta chal rha ha ki ye ek string value hogi

// undefined :means abhi value assign nhi hui ha
// symbol: This data type is mainly used in 'react' for identifying the different components and also used mostly in figma tools...unique things define krne ke lie mostly use hota ha

// -----------Above are called as "primitive data types"

console.log(typeof "Shakti");;
console.log(typeof null);//☕ object
console.log(typeof undefined);//☕ undefined

// undefined is type in itself butttt..null is an object☕
// undefined is a type in js

// practice krte rho js me