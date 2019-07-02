const lampService = require('./lamp-service');
const spodService = require('./spod-service');

const controller = {};

controller.postBook = () => {
    lampService.setLight('orange');
};

controller.carParked = () => {
    spodService.park();
    lampService.setLight('red');
};

controller.carUnparked = () => {
    spodService.unpark();
    lampService.setLight('green');
};

module.exports = controller;
