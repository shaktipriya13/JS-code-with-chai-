// Promises 
// Promises can either be rejected or resolved(fulfilled)
// Promise keyword is used in code, it is a class in js which is used to create a new promise 

// to create a new promise we a pass a fxn within it with 2 parameters
// resolve and reject are called as fxn handlers . they are also themselves fxns or callbacks
// reject means promise fullfill toh ho jayega but us kam me aapka error aa jayega
// a promise can hv 3 states: pending, fulfilled(resolved) and rejected state

// resolve and reject fxn is created by js only internally
let p1= new Promise((resolve,reject)=>{
    console.log("I am a promise");
    // resolve(123);
    // resolve("sucess");
    reject("some error occured");
})
//  the resolve function is used to indicate that the Promise has been successfully completed. The value you pass to resolve is the result of the successful operation. This value can then be accessed in the .then() method of the Promise chain.

// in reject we can pass some error value
//Pending: The initial state of the Promise, which means that the operation has not yet completed or failed.

/*note: 
in general we don't create a promise code.  if we request an API for some data, then the API returns us a promise and our job is to handle the promises */

// following code is vimp for understand. watch again: 45:00
// example of how an API generates a promise: 
function getData(dataID,getNextData){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("data", dataID);
            resolve("sucess");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}

//++++++++++++++++++++++++++++++++++++++++++++++++
// we need to learn how to use promises: to use them we hav 2 fxns
/*

Consuming a Promise
Promises are consumed using the .then(), .catch(), and .finally() methods.

1> .then(): Used to handle the result of a fulfilled Promise.it is used more than .catch
.then ke andar koi fxn hoga jo tabhi execute hoga jab promise is fulfilled

2> .catch(): Used to handle error msgs when the Promise is rejected.

3> .finally(): Executes a block of code after the Promise is settled (fulfilled or rejected), regardless of the outcome.
*/

//Illustration:
//an api returning a promise
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise.");
        // resolve("sucess");
        reject("ERROR 404")
    });
};

//calling the api
let p=getPromise();

//.then will get executed only if resolved is written in promise
p.then(()=>{
    console.log("Promise fulfilled");
})

// to catch error(reject)
p.catch(()=>{
    console.log("error occured");
})
// .then and . catch are predfined fxns in js .they both hv 1 parameter in js called as res or result in then and err/error in catch
// through res and err we can access the proper values of resolve and reject
p.then((res)=>{
    console.log("Promise fulfilled",res); 
})

// to catch error(reject)
p.catch((err)=>{
    console.log("error occured",err);//output: ERROR 404
})

// Promise chain: imp. concept to use
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data1");
            resolve("Sucess");
        }, 4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some data2");
            resolve("Sucess");
        }, 4000);
    });
}
console.log("Fetching data1.........");
let p2=asyncFunc();
p2.then((res)=>{
    console.log(res);
});
console.log("Fetching data2.........");
let p3=asyncFunc2();
p3.then((res)=>{
    console.log(res);
});


//Chaining of Promises 
console.log("Fetching data1........");
let p21=asyncFunc();
p21.then((res)=>{
    console.log("Fetching data2......");
    let p31=asyncFunc2();
    p31.then((res)=>{
    });
});

// ++++++++++++++++++++++++++++++++++++++++++++
// async and await
// hum kisi bhi normal fxn ko async bana skte ha...any async fxn has to return a promise
async function hello(){
    console.log("Hello World!");//will return a promise
}

// await keyword can only be used in a async fxn only 
// in websites 200 reprstnts a sucessful api call
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000);
    })
}
async function getWeatherData(){
    await api();//it means that wait until api fxn data is fetched
    await api();//2nd call
    // here all the api calls will be executed one by one and not in asynchronus manner
}