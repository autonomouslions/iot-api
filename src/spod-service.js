const BackendService = require('./backend-service');
const Logger = require('./logger');

const logger = new Logger('Spod Service');
const spodService = {};

spodService.join = () => {
    return new Promise((resolve, reject) => {
        logger.info('Car parked');

        BackendService.get('join')
            .then(() => {
                logger.success('Join event fired');
                resolve();
            })
            .catch(() => {
                logger.error('Failed to send join event');
                reject({
                    code: 500,
                    message: 'Error: Failed to send join event.'
                });
            });
    });
};

spodService.leave = () => {
    return new Promise((resolve, reject) => {
        logger.info('Car left');

        BackendService.get('leave')
            .then(() => {
                logger.success('Leave event fired');
                resolve();
            })
            .catch(() => {
                logger.error('Failed to send leave event');
                reject({
                    code: 500,
                    message: 'Error: Failed to send leave event.'
                });
            });
    });
};

module.exports = spodService;
