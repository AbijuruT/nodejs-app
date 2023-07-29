/** Working with file */
// const path = require('path');
// var pathObj = path.parse(__filename);

// console.log(pathObj)

/** working with files */
// const os = require('os');
// var totalMemory = os.freemem()

// console.log(totalMemory)

/** Working with file */
// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files)

// fs.readdir('../../', (error, files) => {
//     if (error) console.log('Error', error)
//     else {
//         files.forEach(file => {
//             console.log(file)
//         })
//     }
// })
/** Event module */

const EventEmitter = require('events')


/** Register an event */


const Logger = require('./logger')
const loggerObj = new Logger()
loggerObj.on('messageLogged', arg => {
    console.log('Listener called', arg);
})

loggerObj.log('message')
/** Raising an event */
// emitter.emit('messageLogged', {id: 1, url: 'http://'});
