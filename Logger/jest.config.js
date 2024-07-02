// jest.config.js

module.exports = {
  // Use ts-jest as a preset which handles TypeScript files.
  preset: 'ts-jest',

  // Set the environment in which the tests will be executed.
  testEnvironment: 'node',

  // Specify how to transform files using ts-jest for TypeScript files.
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },

  // Resolve modules by mapping paths to their corresponding locations in the src directory.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // Define the file extensions that Jest will handle.
  moduleFileExtensions: ['ts', 'js'],

  // Specify patterns to locate test files.
  testMatch: ['**/tests/**/*.test.ts']
};
