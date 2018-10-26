"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js = require("log4js");
const settings_1 = require("./settings");
const loggerName = settings_1.Settings.env.LOGGER_NAME;
const appenders = {};
appenders[loggerName] = { type: 'stdout' };
log4js.configure({
    appenders: appenders,
    categories: { default: { appenders: [loggerName], level: settings_1.Settings.env.DEBUG_LEVEL } }
});
const logger = log4js.getLogger(loggerName);
exports.Logger = logger;
