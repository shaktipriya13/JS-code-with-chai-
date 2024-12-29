const map2=new Map();
map2.set(1,"Rekha");
map2.set(2,"Shyama");
map2.set(3,"Kanhu");

for (const key in map2) {
   console.log(key);
//    console.log(`${key} -> ${map2[key]}`);
}