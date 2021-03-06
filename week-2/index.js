const express = require('express');
const app = express();
const route = require('./tuesday/routes/index')
require('dotenv').config()
const port = process.env.PORT || 5050;
const bodyParser = require('./tuesday/middlewares/middleware.js')
const mongoose = require('mongoose');
require('./tuesday/models/sequelize/index')

// mongoose.connect(process.env.MONGO_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then(() => {
//     console.log(`mongodb is connected successfully`)
// }).catch((err) => {
//     console.error(err)
// });

bodyParser(app)
route(app)



app.listen(port, () => {
    console.log(`server is listening on ${port}`)
});