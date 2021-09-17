async function getApi(url) {
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}

getApi('https://jsonplaceholder.typicode.com/users');