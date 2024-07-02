// format.ts

/**
 * Adds a timestamp to messages and ensures all messages are strings.
 * @param message - The content to be logged.
 * @returns The message formatted with a timestamp.
 */
export function formatMessage(message: any): string {
    const timestamp = new Date().toISOString();
    let formattedMessage: string;

    // Convert non-string messages to a string format
    if (typeof message !== 'string') {
        try {
            formattedMessage = JSON.stringify(message);
        } catch (error) {
            formattedMessage = "Error converting message to string.";
        }
    } else {
        formattedMessage = message;
    }

    return `[${timestamp}] ${formattedMessage}`;
}
