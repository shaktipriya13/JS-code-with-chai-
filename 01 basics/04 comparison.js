console.log(2!=9);
console.log('3'>'9');

// below Comparisons should not give predictable results. So while comparing data types should be same
// Typescript doesn't allow us to compare different data types. This is the only difference between typescript and javascript. Typescript only has much stricter rules than javascript
console.log('2'>9);
console.log('02'>9);


// ☕ Following conversions or comparisons with null and undefined should be avoided

// In JavaScript, == (loose equality) and comparison operators like >, <, >=, <= behave differently with null.
console.log(null > 0);  // Output: false
console.log(null == 0); // Output: false
console.log(null >= 0); // Output: true

// null > 0: This returns false because null is not considered greater than 0.
// null == 0: This returns false because null is only loosely equal to undefined, not to 0.
// null >= 0: This returns true because when >= is used, JavaScript converts null to 0 for numeric comparisons, so 0 >= 0 is true.


// Summary: In JavaScript, comparisons (>, <, >=, <=) convert null to 0 for comparisons with numbers, while loose equality (==) does not. Therefore, null >= 0 is true, but null == 0 is false.

//comparisons with undefined.
console.log(undefined == 0);  // Output: false
console.log(undefined > 0);   // Output: false
console.log(undefined < 0);   // Output: false

// For comparisons involving undefined and numbers:

// Loose equality (==) with 0 returns false because undefined is only loosely equal to null.
// Any numeric comparison (>, <, >=, <=) with undefined results in false because undefined becomes NaN, and comparisons with NaN are always false.
// ---------------------

// === is the strict equality operator. It checks for both value and type equality between two variables or expressions. Unlike the loose equality operator (==), === does not perform type conversion, so both the type and the value must match for the comparison to return true.

console.log(5 === 5);      // true, both are numbers and have the same value
console.log("hello" === "hello"); // true, both are strings and have the same value
console.log(5 === "5");    // false, because one is a number and the other is a string
console.log(true === 1);   // false, because one is a boolean and the other is a number
console.log(7=='7');  //true
console.log("7"=='7');//true

