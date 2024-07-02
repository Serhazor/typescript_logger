```markdown
# TypeScript Logger

A simple yet powerful logging library for TypeScript applications, providing clear and structured logging capabilities to aid in development and production monitoring.

## Features

- **Multiple Log Levels**: Supports verbose, info, warning, and error logs to suit different stages of application development and deployment.
- **Singleton Pattern**: Ensures a single instance of the logger throughout the application lifecycle, maintaining consistency across logging calls.
- **Circular Reference Handling**: Safely logs complex objects, including those with circular references.
- **Future-Proof Design**: Ready for future extensions such as file logging and integration with external logging services.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software and how to install them:

```bash
node --version // Ensure Node.js is installed
npm --version  // Ensure npm is installed
```

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:

```bash
git clone https://github.com/Serhazor/typescript_logger.git
```

2. Install dependencies:

```bash
cd typescript_logger
npm install
```

3. Build the project:

```bash
npm run build
```

### Usage

Here's a quick example to show how to use the logger in your project:

```typescript
import { Logger, LogLevel } from './src/Logger';

const logger = Logger.getInstance();
logger.setLogLevel(LogLevel.INFO);

logger.logInfo("Application has started.");
logger.logWarning("This is a warning message.");
logger.logError("This is an error message.");

const complexObject = { user: 'exampleUser', details: { login: 'success' } };
complexObject.details.self = complexObject; // Creating a circular reference

logger.logInfo(complexObject);
```

## Running the tests

Explain how to run the automated tests for this system:

```bash
npm run test
```

## Built With

* [TypeScript](https://www.typescriptlang.org/) - The primary programming language
* [Node.js](https://nodejs.org/) - Runtime environment
* [Jest](https://jestjs.io/) - Testing framework

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Serhazor/typescript_logger/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Sergej Dikun** - *Initial work* - [Serhazor](https://github.com/Serhazor)



