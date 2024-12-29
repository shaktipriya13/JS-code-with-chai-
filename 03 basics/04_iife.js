// IIFE: immediately invoked fxn expression: used to avoid confusion with the global scope variables☕ and to immediately execute the fxn

(function chai(){
    console.log("DB connected");
})();

(()=>{//arrow fxn
    console.log('DB connected2');
})();

//IIFI
((name)=>{
    console.log(`${name}`);
})('Shakti');

(function f1(name){
    console.log(`${name}`);
})('Shakti');
//f1 is called 'named IIFI'☕

(()=>{

})();