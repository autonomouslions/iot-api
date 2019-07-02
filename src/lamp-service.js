const Logger = require('./logger');

const logger = new Logger('Lamp Service');
const lampService = {};

lampService.setLight = (color) => {
    switch (color) {
        case 'orange':
            logger.warning('Parking spot booked');
            break;
        case 'green':
            logger.success('Parking spot open');
            break;
        case 'red':
            logger.error('Parking spot occupied');
            break;
    }
};

module.exports = lampService;
