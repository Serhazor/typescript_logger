// Logger.ts
import { LogLevel } from './LogLevel';

export class Logger {
    private static instance: Logger;
    private logLevel: LogLevel = LogLevel.INFO;

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public setLogLevel(level: LogLevel): void {
        this.logLevel = level;
    }

    private log(message: any, level: LogLevel): void {
        if (level >= this.logLevel) {
            const formattedMessage = typeof message === 'object' ? JSON.stringify(message, this.replacerFunction()) : message;
            console.log(`${LogLevel[level]}: ${formattedMessage}`); 
        }
    }
    
    private replacerFunction() {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return "[Circular]"; 
                }
                seen.add(value);
            }
            return value;
        };
    }
    

    public logVerbose(message: any): void { this.log(message, LogLevel.VERBOSE); }
    public logInfo(message: any): void { this.log(message, LogLevel.INFO); }
    public logWarning(message: any): void { this.log(message, LogLevel.WARNING); }
    public logError(message: any): void { this.log(message, LogLevel.ERROR); }
}
