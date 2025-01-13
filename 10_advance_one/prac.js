const p1=new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
        let error = true;
        if (error) {
            reject("404 error occured.")
        } else {
            resolve({ name: 'Shyam', roll: 989 })
        }
    }, 2000);
});

(async function() {
    try {
        const o1=await p1;
        console.log(o1);
    } catch (err) {
        console.log(err);
    }
})();
