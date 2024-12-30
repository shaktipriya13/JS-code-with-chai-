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

const tp=shoppingCart.reduce((ac,item)=>{
    return ac+item.price;
},0)
console.log(tp);