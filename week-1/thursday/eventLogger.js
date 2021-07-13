const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const messageLogger = require('./eventModule') //helper function

const openEvent = () => {
    const event = () => {
        process.stdin.on('data', messageLogger)
    }

    eventEmitter.on('message', event);
    eventEmitter.emit('message');
}

module.exports = openEvent