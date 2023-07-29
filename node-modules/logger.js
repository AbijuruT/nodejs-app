const EventEmitter = require('events')

var url = 'http://loggering.io/log';
class Logger extends EventEmitter{
    log(message) {
        // send and http
        console.log(message)
    
        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' });
    }

}

// Making this available even outside of this file

module.exports = Logger