var c=9000;
{
    //called block scope
    let a=1;
    const b=3;
    // var c=18;
    c=8;
}
// console.log(a);//error
// console.log(b);//error
console.log(c);//var has global scope , so not used

//bas var ke sath prblm ha

// note: global scope is diff. for the node environmnt and the browser's console☕

// nested curly braces always keeps on making new level scopes as more nesting of {} is done

//--------------------------------------------------------

//a fxn can be inside another fxn
function one(){
    const username="Shakti";
    function two(){
        const website="portfolio";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();//ek hi bar one execute ...and jab hua tab uske andar two ko call kia gya tha islie wo bhi execute hua

/*Call Stack: Keeps track of function calls. Functions are added to the stack when called and removed when they finish executing.

Closure: An inner function retains access to the variables of its outer function, even after the outer function has finished executing. This is due to the inner function maintaining a reference to its lexical scope.

In the provided code, two() is a closure that accesses the username variable from one(), demonstrating the concept of closures in JavaScript.

In the provided code, two() is a closure because it has access to the username variable defined in one(), even though one() has finished executing by the time two() is called.
*/

if(1){
    const user="Shakti"
    if(user==="Shakti"){
        const website="youtube";
        console.log(user+website);
    }
    // console.log(website);
}
// console.log(user);

// ++++++++++++

console.log(addone(10));//fxn dclaration se phle bhi use kr skte ha
function addone(num){
    return num+1;
}
addone(9);


console.log(addTwo(9));//☕will give error bcoz addTwo was decalred as an expression 
// called js hoisting( means you can call the function before its declaration in the code.)

const addTwo=function(num){//this fxn is also called as expression in js, as in js variables can also hold fxns
    return num+2;
}
addTwo(8);


