const pino = require("pino");
const pinoPretty = require("pino-pretty");

// Create a logging instance
const prettyPrint = process.env.NODE_ENV !== "production"
  ? pinoPretty({ colorize: true }) // Customize pretty print options here if needed
  : false;

const logger = pino({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  // Note: prettyPrint option is not used anymore
}, prettyPrint);

module.exports.logger = logger;
