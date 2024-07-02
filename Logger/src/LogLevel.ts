// LogLevel.ts

/**
 * Defines various levels of logging detail.
 * VERBOSE: Most detailed, used for granular debugging information.
 * INFO: General information about the application's operation.
 * WARNING: Indicates a possible issue that should be watched.
 * ERROR: Critical problems that need immediate attention.
 */
export enum LogLevel {
    VERBOSE = 0, // Detailed debugging information
    INFO = 1,    // General operational messages
    WARNING = 2, // Potential issues that could become errors
    ERROR = 3    // Serious issues requiring immediate action
}
