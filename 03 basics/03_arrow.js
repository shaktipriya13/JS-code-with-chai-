//ES6 introduced this keyword
//this keyword tells about currnt context

const user={
    name:"Shakti",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.name}, Welcome to our website!`);
        //this used for curnt context
        console.log(`${user.name} purchased of item rated ${user.price}`)
        console.log(this);//entire object will get printed
    }   
}
console.log(this); //{} currnt context is printed as empty, as we are in node envrnmnt so curnt contxt refers to empty object
user.welcomeMsg();
// console.log(user.welcomeMsg());

// arrow fxn me this keyword use nhi hota ha
user.name="Samarth";
user.welcomeMsg();

//note: now we have browser's engine as standalone ,called as bun, deno, or node etc by diff. producers☕
// when the js engine runs inside the browser , then the global object is the window object...pehle js engine was found only in browser's console☕

console.log(this);//in browser's cnsle gives window object

// ----------------------------
function chai(){
    console.log(this);
}
chai();
/* output of above:
In a Browser Environment:

When you run the chai() function in a browser, the this keyword inside the function will refer to the global object, which is the window object.
Therefore, the output will be the window object.


In a Node.js Environment:

When you run the chai() function in Node.js, the this keyword inside the function will refer to the global object in Node.js, which is not the window object as in the browser.
The output will be the global object in Node.js, which includes various properties and methods available in the Node.js environment.*/
function chai2(){
    let username="shakti"
    console.log(this.username); //will give undefined bcz the this context will work inside the objects only and not in fxns
}
chai2();

// arrow fxn:bas fxn keyword hatakr arrow laga do
const chai3=()=>{
    console.log("Chai aur Code");
}
chai3();

// ☕why this keyword can't be used in arrow fxns unlike in regular fxns? //12:00: video 23

()=>{}//pure arrow fxn

const add=(n1,n2)=>{//holding arrow fxn in a variable
    return n1+n2;
}
console.log(add(8,1));

// implicit return: in this we don't hv to use {}
// ie. for 1 line statemnts we don't need to write return keyword
const sub=(n1,n2)=>n1-n2;
const sub1=(n1,n2)=>(n1-n2);
console.log(sub(8,4));

// implictly returning object
const f1=()=>({name:"Shakti",age:"23"});//parethesis() lagane se ek alag hi block ban jata ha
console.log(f1());

// fxn syntaxes inside loops
const myArr=[2,3,4,1];
myArr.forEach(function(){});
myArr.forEach(()=>{})
