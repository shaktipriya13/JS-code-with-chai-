//for

for(let i=0;i<10;++i){
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        if(i==7){
            console.log("Detected 7");
            break;
        }
        console.log(`${i} x ${j} = ${i*j}`);
        // expression likhne se easy ha backticks use krna
    }
}

// loops on array
const myArray=['shakti','khushi','abhi','sonam'];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// in js,  we don't hv out of bound exceptions rather we have undefined

// continue is like trials in games which says ek bar maaf krdo