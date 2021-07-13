const http = require('http');
const fs = require('fs');
const port = 8080;
const host = '127.0.0.1';
const eventLogger = require('../thursday/eventLogger2')

http.createServer((req, res) => {
    res.writeHead(201, {'content-type': 'video/mp4'})

    const videoStream = fs.createReadStream('stream.mp4')
    videoStream.pipe(res)
})
    .listen(port, host, () => {
        console.log(`server is running on ${port}`);
    });
    eventLogger('hello world')