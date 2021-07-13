  
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const url = 'https://coderbyte.com/api/challenges/json/age-counting';

//fetching api... 
let result;
const getData = (async () => {
    const response = await fetch(`${url}`)
    const data = await response.json();
    result = data;
    console.log(result)

    for(let i = 0; i < result.length; i++) {
        if(result.data[age] == 32) {
            fs.createWriteStream(path.join(__dirname, 'output.txt'))
        }
    }

    
    // fs.writeFile(path.join(__dirname, './result', 'output.txt'), JSON.stringify(result), (err) => {
    //     if (err) {
    //         console.log(err)
    //     }
    // })
})();