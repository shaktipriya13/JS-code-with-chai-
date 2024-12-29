

//javascript execution context(ec)☕


//js is single threaded

//js executes our given code in 2 phases: 
// 1.global ec  : it is kept inside the 'this' keyword
//inide browser, this keyword stores Window object☕...all js engines bun, deno, node will diff what they store in this keyword

// 2. function/functional ec
// 3. Eval ec(learnt in mongoose)-> a property of global object, so covered in global ec

// js code is run in 2 phases:
// 1. memory creation phase(MCP) /memory phase/creation phase: only memory alloction is done here to variables..initially all the variables store undefinded

// 2.execution phase: all the operations like +,-etc are done here

// note: fxn execution callstack follow LIFO....for nested fxn calls...last executed fxn comes back first