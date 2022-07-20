/* commonJs way
function outputMessage(message){
    console.log(`The message is: ${message}`)
}

module.exports = outputMessage
*/

// EcmaScript Modules

function outputMessage(message) {
    console.log(`The message is: ${message}`)
}

export default outputMessage;