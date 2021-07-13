const  fs = require('fs');
const {promisify} = require('util');

const readMyFile = promisify(fs.readdir);

const fileResult = async () => {
    let result = await readMyFile(__dirname);
    console.log(result);
};

fileResult();
