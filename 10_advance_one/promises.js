// in most of the cases we are consuming the promises and not creating them 
// promise in js is the promise of code execution
// every promise gets fulfilled either in form of response or reject

// promises are an object

// creating a promise and holding it in a variable
const promiseOne= new Promise((resolve,reject)=>{
    // do an async task
    // db calls, cryptography, network
    setTimeout(() => {
        console.log('async task is completed.');
        resolve();
    }, 2000);
})
// then is related to .then
// consuming the promise
// jab async task gets completed , resolve automaticlly informs .then and the attached work to.then is executed
promiseOne.then(function(){
    console.log("Promise consumed.");
})


// in one go: promise creation and consumption
new Promise((resolve,reject)=>{
    // inside the Promise keyword we write a callback fxn
    // async task
    setTimeout(() => {
        console.log("async task complete...data fetched...");
        resolve();
    }, 1000);
}).then(()=>{
    console.log(".then executed  as promise is resolved and consumed. so SUCESS!");
})

// resolve me jo bhi parameter krte ha wo hume .then me mil jata ha
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"Chai aur Code",email:'chai@gmal.com'})
        // in resolve we can pass anything like array, fxn but mostly objects are passed
    }, 1000);
})
promiseThree.then((x)=>{//x is parameter passed
    console.log(x);
})


// 
const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
            // ho skta ha jis site me chale gye waha se aapne data fetch kia and that data is sent to resolve as an object
            resolve({username:"ShaktiPriya",password:"135"});
        }else{
            reject("ERROR: Something went wrong!");
        }
    }, 1000);
})

// consuming the promise:
// .then for resolve and .catch  for error/reject and dono ke andar ek fxn pass krna ha
promiseFour.then((a)=>{
    console.log("a");
}).catch(()=>{

})

// aap promise me jitne chahe utne .then and .catch laga skte ha

// how to fetch data from the dataSet returnd by a promise?
// in chaining of promises, jo value upar wale promise se return hogi whi as parametr is passed to the next promise

const promiseFour1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            // ho skta ha jis site me chale gye waha se aapne data fetch kia and that data is sent to resolve as an object
            resolve({username:"ShaktiPriya",password:"135"});
        }else{
            reject("ERROR: Something went wrong!");
        }
    }, 1000);
})


promiseFour1.then((userInfo)=>{
    console.log(userInfo);
    return userInfo.username;
}).then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("the promise is either resolved or rejected.");
})


// why finally is used? it is kinda a default value which gets always gets executed whther the promise if fullfilled or rejected


const promiseFive=new Promise((resolve,reject)=>{
    console.log("Data fetching...");
    setTimeout(() => {
        let error=false;
        if(error){
            reject("unknown ntwrk error occured.");
        }
        else{
            resolve({id:'143',userName:"Mithi",city:"Ranchi"});
        }
    }, 1000);
});
// using promise chaining
// promiseFive.then(()=>{

// }).then(()=>{

// }).catch(()=>{

// }).finally(()=>{

// })

// using async await: it waits sometime for the code to get executed and executes the code in sequential manner. isme ache se catch is not handled

// following async fxn is a fxn and not a callback fxn
async function consumePromise5(){
    // promise5 will return an object
    const obj=await promiseFive;//await means wait for the promise5 to get fetched before moving frwd
    console.log(obj);
}
consumePromise5();


// using async await
// async await cannot handle errors directly


// async function f1(){
//     let fxn=await promise1;
//     console.log(fxn);
// }
// f1(); //fxn called


// to handle errors in async await, we hv to use try catch
async function f2() {
    try {
        let obj = await promiseFive;
        console.log(obj);
    } catch (error) {
        console.log(error);
    }
}
f2();

// async fxn can also be written in an IIFE
(async function() {
    try {
        const o1=await p1;
        console.log(o1);
    } catch (err) {
        console.log(err);
    }
})();

async function getAllUsers() {
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    // the value coming from website is stored in response as a string.so to extract values from it,we need tofirst convert it to json
    const data=response.json();
    console.log(data);
}
getAllUsers();