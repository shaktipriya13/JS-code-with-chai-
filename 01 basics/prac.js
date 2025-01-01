const a1=[1,2,4];
const a2=[9,1,22];
const a3=[...a1,...a2];
console.log(a3);
a3[4]=99;
console.table([a1,a2,a3]);