const Logger = require('./logger');
const Server = require('./server');

const logger = new Logger('Boot');

logger.info('Starting up server...');

Server.startServer();
