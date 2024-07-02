// Logger.test.ts
import { Logger } from '../src/Logger';
import { LogLevel } from '../src/LogLevel';

describe('Logger Class', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        // Set up a spy on console.log to check if it logs correctly
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Reset console.log to its original state after each test
        consoleSpy.mockRestore();
    });

    test('logs messages at the correct log level', () => {
        const logger = Logger.getInstance();
        logger.setLogLevel(LogLevel.INFO);

        // Verbose log should not trigger at INFO level
        logger.logVerbose('This is a verbose log');
        expect(consoleSpy).not.toHaveBeenCalled();

        // Info log should appear
        logger.logInfo('This is an info log');
        expect(consoleSpy).toHaveBeenCalledWith('INFO: This is an info log');

        // Warning log should appear
        logger.logWarning('This is a warning log');
        expect(consoleSpy).toHaveBeenCalledWith('WARNING: This is a warning log');

        // Error log should appear
        logger.logError('This is an error log');
        expect(consoleSpy).toHaveBeenCalledWith('ERROR: This is an error log');
    });

    test('changes log levels', () => {
        const logger = Logger.getInstance();
        logger.setLogLevel(LogLevel.ERROR);

        // Info log should not appear at ERROR level
        logger.logInfo('This info should not be logged');
        expect(consoleSpy).not.toHaveBeenCalled();

        // Error log should appear
        logger.logError('This error should be logged');
        expect(consoleSpy).toHaveBeenCalledWith('ERROR: This error should be logged');
    });



    test('handles non-string messages', () => {
        const logger = Logger.getInstance();
        const testObject: any = { message: 'This is an object', important: true };
        testObject.self = testObject;  
    
        logger.logInfo(testObject);
        console.log(consoleSpy.mock.calls); 
    
        
        const loggedOutput = consoleSpy.mock.calls.map(call => call.join(' '));
        console.log("Logged outputs:", loggedOutput);
    
        
        expect(loggedOutput.some(entry => entry.includes('INFO:') && entry.includes('This is an object'))).toBeTruthy();
    });
    
});
