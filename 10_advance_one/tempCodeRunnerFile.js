
async function getAllUsers() {
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    // the value coming from website is stored in response as a string.so to extract values from it,we need tofirst convert it to json
    const data=response.json();
    console.log(data);
}
getAllUsers();