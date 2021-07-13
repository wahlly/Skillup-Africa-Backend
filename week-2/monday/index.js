const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.use('/', require('./routes'))


app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})