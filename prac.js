// for(const char of "aji sunte ho") console.log(char," ");

const mapw=new Map();
mapw.set(1,"shena");
mapw.set(2,"kite");

// console.log(mapw);
for(const [key,val] of mapw){
    console.log(`${key} ka value is ${val}`);
}