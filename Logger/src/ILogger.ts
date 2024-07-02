// ILogger.ts
import { LogLevel } from './LogLevel';

interface ILogger {
    // Adjusts the level of detail shown in the logs
    setLogLevel(level: LogLevel): void;

    // Logs detailed debug information
    logVerbose(message: string): void;

    // Logs general information about application processes
    logInfo(message: string): void;

    // Logs warnings that could potentially cause problems
    logWarning(message: string): void;

    // Logs critical errors that need immediate attention
    logError(message: string): void;
}

export default ILogger;
