// map
const arr=[1,2,3,4,5,6,7,8,9,10]
// adding 10 to each value in arr
// "map returns value"
const newNums=arr.map((n)=>n+10)
//agar scope open kroge using{} then return keyword has to be used
const newNums2=arr.map((n)=>{return n+10})
console.log(newNums);
console.log(newNums2);


const a=arr.map((n)=>{
    return n*10+1;
})
console.log(a);

// chaining in maps
const newNums3=arr
                  .map((num)=>num*10)
                  .map((num)=>num+1)
console.log(newNums3);

const nums4=arr
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=> num>=40)
console.log(nums4);