const sensorService = {}
const lampService = require('./lamp-service')

sensorService.getInput = (sensor) => {
    if (sensor === true) {
        lampService.setLight('red');
    } else {
        lampService.setLight('green');
    }
}