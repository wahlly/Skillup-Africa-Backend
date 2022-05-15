const https = require('https');
const fs = require('fs');
const crypto = require('crypto')
const { argv } = require('process')
// const fetch = require('node-fetch');
const path = require('path');
const url = 'https://coderbyte.com/api/challenges/json/age-counting';


https.get(url, (res) => {

    let data = ''
    res.on('data', (d) => {
        data += d.toString()
    })
    
    let sortedArr = []
    res.on('end', async () => {
        const body = JSON.parse(data).data
        const edittedArray = body.split(',')

        edittedArray.forEach((val, index) => {
            if(!val.includes(' age=')) {
                keyVal = val.includes('key=') ? val.replace('key=', '').trim() : val.replace(' key=', '').trim()
                let ageVal = edittedArray[index + 1].replace(' age=', '').trim()

                if(Number(ageVal) == 32) {
                    sortedArr.push({
                        [keyVal]: ageVal
                    })
                }
            }
        })
        console.log(sortedArr)

        const writeStream = fs.createWriteStream('output.txt')
        const streamingPath = writeStream.path
        sortedArr.forEach((entry, index) => {
            index === 0 ? writeStream.write(`${Object.keys(entry)}`) : writeStream.write(`\n${Object.keys(entry)}`)
        })

            const fileBuffer = fs.readFileSync('output.txt')
            const hash = await crypto.createHash('sha256')
            hash.update(fileBuffer)
            const hashString = hash.digest('hex')
            console.log(`${hashString} ${streamingPath}`)
    })

}).on('error', (err) => {
    console.log(err)
})