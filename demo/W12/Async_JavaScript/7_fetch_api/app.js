const url = './api/people.json';

fetch(url)
.then( (response)=> response.json())
.then( (response)=> response.json())
.catch((err)=> console.log(err));
