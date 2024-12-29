// named as nine.js in sir's repo

// reduce fxn:
// In JavaScript, the reduce() method is used to process an array and return a single accumulated value. 

const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`accumulator:${acc} and current value: ${currval}`);
    return acc+currval;
},0)//initializing accumulator with 0...instead of 0 we can also pass any other value in acc.

console.log(myTotal);

const myTotal2=myNums.reduce((acc, num)=>{
    console.log(`accumulator:${acc} and current value: ${num}`);
    return acc+num;
},0)
console.log(myTotal2);

const myTotal3=myNums.reduce((acc,cur)=>acc+cur,0);//using pure arrow fxn
console.log(myTotal3);

// ---------------------
const shoppingCart=[
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "C++ Course",
        price: 1999
    },
    {
        itemName: "web dev Course",
        price: 2999
    },
    {
        itemName: "ML AI Course",
        price: 6999
    }
]
// add the prices of all the courses☕
const PriceToPay=shoppingCart.reduce((acc,curval)=>acc+curval.price,0)
console.log(PriceToPay);