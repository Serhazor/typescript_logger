// custom-types.d.ts

/**
 * Custom type definitions that enhance type checking across the project.
 */

// LogMetadata can be used to add detailed context to log entries.
interface LogMetadata {
  user?: string;            // Optional user identifier
  session?: string;         // Optional session identifier
  [key: string]: any;       // Supports any number of additional properties
}

// Extends the NodeJS environment to include custom environment variable types.
declare namespace NodeJS {
  interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'; // Defines possible values for NODE_ENV
  }
}
