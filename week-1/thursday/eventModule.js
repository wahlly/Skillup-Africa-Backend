const messageLogger = (message) => {
    process.stdout.write(`message: ${message} date:${new Date().toString()}

    `)
}

module.exports = messageLogger;