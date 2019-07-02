const Controller = require('./controller');
const Logger = require('./logger');

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const logger = new Logger('Server');
const PORT = 3001;

const server = {};

server.startServer = () => {
    const app = express();

    app.use(bodyParser.json());

    app.get('/book', (request, response) => {
        Controller.postBook();
        response.json({message: 'spot booked'});
    });

    app.get('/park', (request, response) => {
        Controller.carParked();
        response.json({message: 'car parked'});
    });

    app.get('/unpark', (request, response) => {
        Controller.carUnparked();
        response.json({message: 'car unparked'});
    });

    app.use((request, response) => {
        throw new HttpError(
            404,
            'Invalid Route: ' + request.method + ' ' + request.url
        );
    });

    app.use(errorHandler);

    app.listen(PORT, () => {
        logger.info('Started listening on http://localhost:' + PORT + '/');
    }).on('error', () => {
        logger.error('Server already running.');
        logger.warning('To restart it, find and kill the process or ' +
            'reboot the device: `sudo reboot`');
        process.exit();
    });
};

function errorHandler (error, request, response, next) {
    response.status(error.statusCode).json({message: error.message});
}

module.exports = server;
