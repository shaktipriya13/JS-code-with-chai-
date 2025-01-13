// settimeout is asynochronous in js
console.log("Hello One");
setTimeout(() => {
    console.log("hello 2 after 2 seconds");
}, 2000);
console.log("Hello three");

//callback -Shraddha
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){ //callback fxn defn
    return sumCallback(a,b);
}

// calling callback fxn
calculator(2,3,sum);//here only the refernce of the callback fxn has to be passed as the parameter

calculator(5,6,(a,b)=>{
    console.log(a*b);
})

//basic exmple of data giving and fetching
function getData(dataID){
    // console.log(data);
    setTimeout(() => {
        console.log("Data", dataID);
    }, 2000);
}
getData(1);
getData(2);
getData(3);
//yha above 3 fxn calls 1,2,3 sabhi ka timer eksath start hua tha islie sabkoi eksath execute hua

// but if u want ki har data thore delay ke sath print ho toh we use callback fxns
//yha 1 and 2 both will get printed after 2 seconds

//below type ke codes aap khud nhi likh skte , ye app practical experience ke through hi likh payenge
function getData2(dataID,getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){//if the fxn parameter if given then execute it
            getNextData();
        }
    },2000)
}
getData2(1,()=>{
    getData2(2);
})

//to get 3 data each at 2 secs interval
getData2(32,()=>{
    getData2(67,()=>{
        getData2(88);
    })
})

// jo codes bhut complex and not easy to understandable hote ha they are called callback hell(or nested callbacks)

// below code me koi error nhi ha but ye developers tak ke lie samajh me aana difficult ha....so callback hell is a prblm in js which is solved through promises
getData2(33,()=>{
    console.log("getting data 2.....");
    getData2(88,()=>{
        console.log("getting data 3.....");
        getData2(72,()=>{
            console.log("getting data 4.....");
            getData2(45);
        })
    })
})

//above code using Promise chaining
getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        return getData(3);
    })  
    .then((res)=>{
        return getData(res);
    });

// note: promise chains are also difficult to understand.so we use and learn further async and await


// using async-await-> in this case we need to make an another fxn which we hv to call later on. this is diff. from callback hell and promises mthd where we don't need to use any extra fxn

// in order to avoid an extra fxn call in async-await, we use IIFE's
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    // jaha bhi code me await mil gya wha execution will stop for the given time
}
// iife can be used only 1 time only where they are written. they hv no names.
getAllData();

// IIFE
(async function(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();
// for better understanding, lecture ko 3-4 bar bar pause kr krke choti se choti chiz ko samajhna hoga