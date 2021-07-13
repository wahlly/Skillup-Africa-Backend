const openEvents = require('./eventLogger')

const eventLogger = (message) => {
   return process.stdout.write(`${message} 
    ${new Date().toString()}`)
}
openEvents()
module.exports = eventLogger; 