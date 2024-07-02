// index.ts
// Makes the Logger class, LogLevel enum, and utilities available for external use.

import { Logger } from './Logger';
import { LogLevel } from './LogLevel';
import * as loggerUtilities from './utilities/format';

// Export the Logger, LogLevel, and any utility functions for use in other parts of the application.
export { Logger, LogLevel, loggerUtilities };
