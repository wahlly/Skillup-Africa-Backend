const fs = require('fs').promises;
const path = require('path');

const copier = async (directory) => {
    const files = await fs.readdir(directory)
    console.log(files)

    let duplicate = await fs.mkdir('duplicate', {recursive: true});
    for(file of files) {
        let source = path.join(directory, file);
        console.log(source);
        let filepath = path.dirname(file)
        console.log(filepath);
        let filename = path.parse(file).name
        console.log(path.parse(file));
        let fileext = path.extname(file)

        await fs.copyFile(source, path.join(duplicate, filepath, `${filename}0${fileext}`))
   }
}
copier(__dirname);