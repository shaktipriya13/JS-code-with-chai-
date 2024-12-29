const obj={
    js:"javascript",
    rb:"ruby",
    cpp:"c++",
    swift:"swift"
}

// for iterating objects we can use forin loops
for (const key in obj) {
    console.log(`${key} is shortcut for ${obj[key]}`);
}

// forin used for arrays
const arr=[3,2,30,44]
// arrays also have keys. their index is their keys...objects were designed so that keys could also hv datatypes other than numbers
for (const i in arr) {
    console.log(arr[i]);    
}


// forin loop with maps -> not possible bcoz maps are not iteratable
const map2=new Map();
map2.set(1,"Rekha");
map2.set(2,"Shyama");
map2.set(3,"Kanhu");

for (const key in map2) {
   console.log(key);//will not print anything
   console.log(`${key} -> ${map2[key]}`);
}

// forin-arrays
//forof , forin- objects
// maps- not iterable