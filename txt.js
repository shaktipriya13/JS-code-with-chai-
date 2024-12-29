function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter valid name.");
        return;
    }
    console.log(`${username} just logged in.`);
}
loginUserMessage("Dolly")