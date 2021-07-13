const route = require('express').Router()

route.get('/users', (req, res) => {
    res.send('get the list of users')
});

route.get('/users/:name', (req, res) => {
    res.send(`${req.params.name} is among our users!`)
});

route.post('/users/register', (req, res) => {
    
    res.send( req.body )
});

module.exports = route