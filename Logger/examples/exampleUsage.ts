// exampleUsage.ts
import { Logger } from '../src/Logger';
import { LogLevel } from '../src/LogLevel';

// Access the logger's single instance
const logger = Logger.getInstance();

// Initialize the log level to INFO
logger.setLogLevel(LogLevel.INFO);

// Logging messages of various importance
logger.logInfo('This is an informational message');
logger.logWarning('This is a warning message');
logger.logError('This is an error message');

// Adjust the log level to VERBOSE to see more details
logger.setLogLevel(LogLevel.VERBOSE);
logger.logVerbose('Detailed debugging information here');

// Log structured data, returning to INFO level
logger.setLogLevel(LogLevel.INFO);
logger.logInfo({
    event: 'UserLoginAttempt',
    status: 'Success',
    username: 'exampleUser'
});

// Prepare for future expansion to log messages to files
logger.logToFile('This message will be saved to a file', './logs/user-actions.log');
