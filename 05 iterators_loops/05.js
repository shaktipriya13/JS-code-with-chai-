// forEach loop: used mostly
const coding=["cpp","java","python","ruby","c#"]
// some loops are directly made as a property for the arrays like forEach
// callback fxn is fxn without name
//forEach is a higher order fxn 
coding.forEach(function(val){
    console.log(val);
})

coding.forEach(function(val){
    for(const i of val) console.log(i); //in loop prints indices
    console.log("-------------------");
})

coding.forEach((item)=>{ //callback fxn
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach((item)=>{printMe(item)})

coding.forEach(printMe)//giving only refernce of the fxn

//the forEach loop can have 3 parameters: item, index and array☕
coding.forEach((item, index, arr)=>{
    console.log(item,index, arr);
})



//database jo value aati ha wo array ke form me aati ha and har ek value in the array is an object
const myCoding=[
    {
        language: "python",
        short: "py"
    },
    {
        language: "Javascript",
        short: "JS"
    },
    {
        language: "Ruby",
        short: "Rb"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.language}-> ka shortform is : ${item.short}`);
})
