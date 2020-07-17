
const winston = require('winston');

// Set up logger
const logger = new winston.Logger({
  exitOnError: false
});


logger.stream = {
    write: function(message, encoding){
        logger.info(message.slice(0, -1));
    }
};

export default logger;
