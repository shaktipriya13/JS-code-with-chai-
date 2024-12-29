let score="33";
score="33abc";//this is not a pure number but can be converted to number in JS..but its type is NaN after conversion to Number

console.log(typeof score);
console.log(typeof(score)); //written as a method

let valueInNum=Number(score); //conversion to number
console.log(typeof valueInNum); //number
console.log(valueInNum);//NaN

/*JavaScript’s Number function returns NaN (Not-a-Number) when a string contains non-numeric characters that prevent it from being converted to a valid number.

Therefore, valueInNum will be NaN.*/

let temperature=null;
let numTemperature=Number(temperature);
console.log(numTemperature); //0 ...null is converted to 0 in Number☕
console.log(typeof numTemperature); //number

let un=undefined;
let unNum=Number(un);
console.log(typeof unNum);
console.log(unNum); //NaN
// for boolean values, we get numers as 1 or 0, for string values like "Shakti"  , we get Number as NaN

// coversion to boolean
let x=0;
x="";//empty string ->false
x=" ";//not empty string ->true
x="shakti";
let boolx=Boolean(x);
console.log(boolx); //true
// empty string gets converted to 'false' bool value and a string to 'true' bool value

// coversion to string
let str=123;
str=String(str);
console.log(typeof str);


//*************************Operations************************* */

let val=9;
let negVal=-val;
console.log(negVal);

console.log(2**3); //power operaotr
// modulo % operator has many uses in cryptography and other algorithms.

let s1="shakti"
let s2=" priya"
let s3=s1+s2;
console.log(s3);

// ☕
console.log(1+'2');
console.log('1'+2);
console.log('1'+'2'+2+7); //1227
console.log('1'+'2'+(2+7)); //9
// so use brackets to avoid any confusion

console.log(1+12+'2'); //132
// so in js jo pehle hota ha..uska hi datatype me baki sare convert hote ha

// following things bas yadd rkhna....for question pattern
// + symbol aage likhne se conversion ho jata ha to number 
console.log(true);//true
console.log(+true);//1
console.log(true+);//not possible
console.log(+"");//0 //empty string is false in boolean..so converted to 0

console.log(+"Shyam");//NaN

let n1,n2,n3;
n1=n2=n3= 6+6;
console.log(n3);


// Prefix Postfix : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// When you use ++, it first checks what kind of value it’s working with. If it can turn the value into a BigInt, it will use BigInt rules to increment it. If not, it just uses regular number rules   
let a=8;
y=a++;
z=++a;
console.log(`a: ${a}, y:${y}, z:${z}`);
// ++(++x) is wrong

let x1 = 3;
const y = x1++;
// x is 4; y is 3

console.log(x1);
console.log(y);

let x2 = 3n;
let y2 = x2++;
// x2 is 4n; y2 is 3n
console.log(x2);
console.log(y2);
// In JavaScript, 3n is a BigInt literal, where the n at the end specifies that it’s a BigInt rather than a regular number. BigInt is a special type in JavaScript used to represent integers that are too large (or too small) to be represented by the Number type.



let x2 = 3n;
const y2 = --x2;
// x2 is 2n; y2 is 2n

// type conversion link: https://tc39.es/ecma262/#sec-abstract-operations