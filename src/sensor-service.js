const Logger = require('./logger');
const controller = require('./controller');

const logger = new Logger('Sensor Service');
const sensorService = {};

sensorService.getInput = (sensor) => {
    if (sensor === true) {
        controller.carParked();
    } else {
        controller.carUnparked();
    }
}