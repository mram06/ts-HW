export default class ActionLogger {
    logAction(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] LOG: ${message}`);
    }
}
