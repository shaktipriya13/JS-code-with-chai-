function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("a");
    console.log("K");
    console.log("T");
    console.log("I");
}
// sayMyName;   // ->fxn refernce
sayMyName();   // ->fxn execute

function add(a, b){ //fxn defn me called parameters
    return a+b;
}
a=add(3,9);//fxn call me called argumnts
console.log(a);

function loginUserMessage(username="sam"){//sam is default value
    //kuch pass nhi ha mtlb undefined ha parameter
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username.");
        return
    }
    console.log(`${username} just logged in.`);
}
loginUserMessage("Shakti");
loginUserMessage();//undefined just logged in.

//in js, following values are evaluated to false alwayss: "" ->empty string, undefined 
if(undefined){}
if(""){}

// -------------------------------------------------------------------
// both rest and spread opertors are same only it depends on the usecase whether we call them rest or spread operator(denoted by ...)

//In JavaScript, the rest operator (...) is used inside a function to represent an indefinite number of arguments as an array. This is particularly useful when you don't know how many arguments will be passed to the function.
//It gathers all remaining arguments into an array.

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400));

//The rest parameter must be the last parameter in the function definition.
//If no arguments are provided for the rest parameter, it will default to an empty array. 
function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(5000,200,300,400));//5000 in val1,200 stored in val2,rest got in num1

const object={
    user:"Shivam",
    age:19
}
function info(anyobj){
    console.log(`${anyobj.user} is aged ${anyobj.age}`);
}
info(object);

// dirctly objct can be passed as argumnt
info({
    user:"Mithi",
    age:20
});

const myArr=[30,1,39,45];
function return2(anyarr){
    console.log(anyarr[2]);
}
return2(myArr);
// ----
//dom means how webpages are manipulated
//var se andar wale scope ki values bahar se bhi access kr skte ha