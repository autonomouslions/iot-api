

sensorService.getInput = (sensor) => {
    if (sensor === true) {
        lampService.setLight('Red');
        logger.info('There\'s a car in this parking spot');
    } else {
        lampService.setLight('Green');
        logger.info('A car just left this parking spot')
    }
}