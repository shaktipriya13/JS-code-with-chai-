const coding=["cpp","java","python","ruby","c#"]

coding.forEach((val)=>{
    console.log(val);
})

// the forEach loop doesn't returns any value
let items= coding.forEach((val)=>{
    return val;
})
// sometimes we want to chk some of the values only conditionally / return some of the values in the array....this can be done with help of filter fxn
// filter also takes callback fxn
const myNums=[1,2,3,4,5,6,7,8,9,10];
const a1 = myNums.filter((num)=>{return num>4}) //{} lagane ek nya scope start ho gya isliye return keyword likhna hi hoga

//If you don't use curly braces {} (and instead use an implicit return), you can skip the return keyword:
const a2 = myNums.filter((num)=>num>4) //no {} is used

console.log(a1);
// -----------------------------------------


// by using forEach loop 
const myNums=[1,2,3,4,5,6,7,8,9,10];
const arr=[];
myNums.forEach((val)=>{
    if(val>4) arr.push(val);
})

console.log(arr);



//--------------------------------------
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

books.filter((book)=>{
    console.log(book.edition);
})

const userBooks=books.filter((book)=>{return book.genre==='History'})
console.log(userBooks);

const userBooks2=books.filter((bk)=>{return bk.publish>2000 && bk.genre==='Science'})
console.log(userBooks2);