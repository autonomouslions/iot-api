const http = require('http');
const Logger = require('./logger');

const logger = new Logger('Backend Service');
const HOST = '192.168.43.150';
const PORT = 3000;
const ENDPOINT_PREFIX = '/';
const ENCODING_UTF8 = 'utf8';

const backendService = {};

backendService.get = async (resource) => {
    return new Promise((resolve, reject) => {
        const parameters = createGetRequest(resource);
        const request = http.get(parameters, (response) => {
            response.setEncoding(ENCODING_UTF8);
            let body = '';
            response.on('data', (chunk) => {
                body += chunk;
            });
            response.on('end', () => {
                resolve(body);
            });
        });
        handleErrors(request, reject);
    });
};

function createGetRequest (resource) {
    return {
        hostname: HOST,
        port: PORT,
        path: ENDPOINT_PREFIX + resource,
        agent: new http.Agent({
            maxCachedSessions: 0
        })
    };
}

function handleErrors (request, reject) {
    request.on('error', (error) => {
        logger.error('A problem has occurred while sending a request. ' +
            error);
        reject();
    });
}

module.exports = backendService;
