class ModuleError extends Error {
    constructor(message, errorCode) {
        super(message); // Add a "message" property
        this.code = errorCode; // Adds a "code" property
    }
}

module.exports = ModuleError;