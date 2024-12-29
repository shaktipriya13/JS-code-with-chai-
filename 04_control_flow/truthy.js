// imp. ☕
const userEmail='priyashakti68@gmal.com';
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't hv user email");
}
// note: it will give false for empty string as it is assumed as false
const userEmail2='';
if(userEmail2){
    console.log("Got user Email");
}
else{
    console.log("Don't hv user email");
}
const userEmail3=[];
if(userEmail3){
    console.log("Got user Email");
}
else{
    console.log("Don't hv user email");
}
// In JavaScript, values are categorized as truthy or falsy based on how they evaluate in a Boolean context, such as in an if statement.
/*Falsy Values
A value is considered falsy if it evaluates to false when converted to a Boolean.

The 6 Falsy Values in JavaScript:
false — The Boolean false itself.
-0 : negative zero
BigInt 0n
0 — The number zero.
"" or '' — Empty strings (both single and double quotes).
null — Represents the intentional absence of any object value.
undefined — A variable that has been declared but not assigned a value.
NaN — Represents a computational error (Not a Number).


All other values in JavaScript are considered truthy, meaning they evaluate to true in a Boolean context.

Common Truthy Values:
true — The Boolean true.
Any non-zero number (positive or negative): 42, -1.
Non-empty strings: "hello", 'world', " ".
Objects and arrays (even if empty): {} empty object, [].
Functions . also function(){} is truthy values
Special values like Infinity, -Infinity , "0",'false'," " are truthy values.
*/ 

// to chk array is empty use:
if(userEmail.length()==0){
    console.log("array is object");

}
const empObj={}
// to chk object is empty check its keys:
if(Object.keys(empObj)===0){
    console.log("object is empty");
}

/*in web console ,we get true for below: 

false == 0
false == ''
'' == 0
*/
// ++++++++++++++++++++++++++++++++++++++++++++++
// 
// Nullish Coalescing Operator(??) : works only for null and undefined, null aur undefined ke instead agar koi aur value ha to bas whi assign hoga

let val1;
val1=5??10; 
val1=null??9; //yha 9 ke instead complex fxns hoge jinse koi value aa rhi hogi return hoke and the fxn may be from a 3rd party like appwrite, firebase
val1=8??undefined;
val1=null??7??5;//jo pehli value ha bas whi assign hogi

console.log(val1);
// variables must never hav null or undefined...instead u can use flag values (true/false) 


// Ternary operator
const toyPrice=100;
toyPrice>=80?console.log("buy it"):console.log("don't buy");