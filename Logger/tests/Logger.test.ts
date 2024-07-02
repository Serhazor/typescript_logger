// Logger.test.ts
import { Logger } from '../src/Logger';
import { LogLevel } from '../src/LogLevel';

describe('Logger Class', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.clearAllMocks();
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('logs messages at the correct log level', () => {
        const logger = Logger.getInstance();
        logger.setLogLevel(LogLevel.INFO);

        logger.logVerbose('This is a verbose log');
        expect(consoleSpy).not.toHaveBeenCalled();

        logger.logInfo('This is an info log');
        expect(consoleSpy).toHaveBeenCalledWith('INFO: This is an info log');

        logger.logWarning('This is a warning log');
        expect(consoleSpy).toHaveBeenCalledWith('WARNING: This is a warning log');

        logger.logError('This is an error log');
        expect(consoleSpy).toHaveBeenCalledWith('ERROR: This is an error log');
    });

    test('changes log levels', () => {
        const logger = Logger.getInstance();
        logger.setLogLevel(LogLevel.ERROR);

        logger.logInfo('This info should not be logged');
        expect(consoleSpy).not.toHaveBeenCalled();

        logger.logError('This error should be logged');
        expect(consoleSpy).toHaveBeenCalledWith('ERROR: This error should be logged');
    });

    test('handles non-string messages', () => {
        const logger = Logger.getInstance();
        const testObject: any = { message: 'This is an object', important: true };
        testObject.self = testObject;  

        logger.setLogLevel(LogLevel.INFO); 
        console.log("Before logging");
        logger.logInfo(testObject);
        console.log("After logging", consoleSpy.mock.calls); 

        expect(consoleSpy).toHaveBeenCalled(); 

        const loggedOutput = consoleSpy.mock.calls.map(call => call.join(' '));
        console.log("Logged outputs:", loggedOutput);

        expect(loggedOutput.some(entry => entry.includes('INFO:') && entry.includes('This is an object'))).toBeTruthy();
    });
});
