const BackendService = require('./backend-service');
const Logger = require('./logger');

const logger = new Logger('Spod Service');

const spodService = {};

spodService.park = () => {
    return new Promise((resolve, reject) => {
        logger.info('Car parked');

        BackendService.get('park')
            .then(() => {
                logger.success('Join event fired');
                resolve();
            })
            .catch(() => {
                logger.error('Failed to send park event');
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

        BackendService.get('unpark')
            .then(() => {
                logger.success('Unpark event fired');
                resolve();
            })
            .catch(() => {
                logger.error('Failed to send unpark event');
                reject({
                    code: 500,
                    message: 'Error: Failed to send leave event.'
                });
            });
    });
};

module.exports = spodService;
