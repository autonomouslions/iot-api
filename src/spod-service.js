const BackendService = require('./backend-service');
const Logger = require('./logger');

const logger = new Logger('Spod Service');

const spodService = {};

spodService.park = () => {
    return new Promise((resolve, reject) => {
        logger.info('Car parked');

        BackendService.get('busy')
            .then(() => {
                logger.info('Join event fired');
                resolve();
            })
            .catch(() => {
                logger.info('Failed to send park event');
                reject({
                    code: 500,
                    message: 'Error: Failed to send park event.'
                });
            });
    });
};

spodService.unpark = () => {
    return new Promise((resolve, reject) => {
        logger.info('Car unparked');

        BackendService.get('free')
            .then(() => {
                logger.info('Unpark event fired');
                resolve();
            })
            .catch(() => {
                logger.info('Failed to send unpark event');
                reject({
                    code: 500,
                    message: 'Error: Failed to send leave event.'
                });
            });
    });
};

module.exports = spodService;
