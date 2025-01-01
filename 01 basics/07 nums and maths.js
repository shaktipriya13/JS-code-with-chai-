const score1=400;
console.log(score1);

const score2= new Number(900); //this is syntax to define an object ...of number type
// creates a Number object in JavaScript, rather than a primitive number
//  Number objects are rarely used and usually only when you need an object with additional properties or methods.
console.log(typeof score2);
console.log(score2);
console.log(score2.__proto__);//write and see all the fxns available in browser's console

// Converting the number object to string and applying the properties of string in the same line
// console.log(score2.toString());
console.log(score2.toString().indexOf('9'));//score2 = 900

// below syntax is useful for e-commerce application. We generally use the "fixed" keyword for fixing two decimal or 1 decimal places after the number, because the clients don't have the experience to see such a large number of digits after the decimal. So in E-Commerce application, generally 'fixed' is used

const balance=new Number(100);
console.log(balance.toFixed(2));

const num1=23.8966
console.log(num1.toPrecision(3)); //23.9

const num2=123.8966
console.log(num2.toPrecision(3)); //124
console.log(num2.toPrecision(4)); //123.9

const num3=1123.8966
console.log(num3.toPrecision(3)); //1.12e+3



const hundreds=100000
console.log(hundreds.toLocaleString());// 1,00,000:  puts commas and represnt the number accc to US standards
console.log(hundreds.toLocaleString('en-IN')); //1,00,000 : puts comma acc to indian standards


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);//The value of the largest integer n such that n and n + 1 are both exactly representable as a Number value. The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.

// ++++++++++++++MATHS++++++++++++++++
// JS has by default maths library
console.log(Math);
console.log(Math.PI); //dot put krke aap math ke sare fxns/properties ko access kr skte ha

console.log(Math.abs(-7));
console.log(Math.round(8.91));
console.log(Math.round(8.5)); //9
console.log(Math.ceil(4.2));//5
console.log(Math.floor(7.9));//7 

console.log(Math.sqrt(81));
console.log(Math.pow(2,3));

console.log(2**3);

// min and max fxns can beused to fin minm and maxm elmnts in the array
console.log(Math.min(3,1,9,6));
console.log(Math.max(9,2,10,33));
//max and min don't work on arrays

console.log(Math.random()); //gives value always b/w between 0 (inclusive) and 1 (exclusive)

// questions will be asked to generate random no.s in a given range for game like dice
// to generate no.s b/w 0 and 10(exclusive)
console.log(Math.floor(Math.random()*10));

// to generate no.s b/w 1 and 10(both inclusive)
console.log(Math.floor((Math.random()*10)+1));


// fom 1 to 6 (inclusive)
console.log(Math.floor(Math.random()*6)+1);


/*
Explanation
1. Math.random() * 6 generates a random floating-point number between 0 and 6 (exclusive).
2. Math.floor(...) converts this to an integer between 0 and 5.
3. Adding 1 shifts the range to be between 1 and 6 (inclusive). */


// to find a value b/w a min and max range :general formula
const max=30,min =40;

console.log((Math.floor(Math.random()*(max-min+1)))+min); //jo bhi minm value chhiye usko add krlo
// max-min+1 range batata ha ki kitni aage tak values chhiye