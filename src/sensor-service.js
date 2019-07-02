

sensorService.getInput = (sensor) => {
    if (sensor === true) {
        lampService.park();
        logger.info('There\'s a car in this parking spot');
    } else {
        lampService.unPark();
        logger.info('A car just left this parking spot')
    }
}