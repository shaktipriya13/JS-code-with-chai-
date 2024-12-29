const accID=18988;
let accEmail="shaktipriya68@gmail.com"
var accPwd="123459"
accCity="Ranchi" //Variable in javascript can be declared without using const or let keyword, but it is preferable not to declare like this

let accState; //not defined

// accID=8982; //not allowed

console.log(accID);

accEmail="sp56@gmail.com"
accPwd="99798"
accCity="Bengaluru"
//☕
console.table([accID,accEmail,accPwd,accCity,accState]); //prints all values in a table

// var keyword doesn't recognizes scope which caused prblms at scope levels. so instead of var only let is used now. let has no scope issues.
/*Prefer not to use var bcoz of issue in block scope and functional scope.*/
