const https = require('https');
const HOST = 'placeholder.placeholder.io';
const PORT = 443;
const ENDPOINT_PREFIX = '/placeholder/';
const ENCODING_UTF8 = 'utf8';

const backendService = {};

backendService.get = async (resource) => {
    return new Promise((resolve, reject) => {
        const parameters = createGetRequest(resource);
        const request = https.get(parameters, (response) => {
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
        agent: new https.Agent({
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
