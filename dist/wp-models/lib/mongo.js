"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const settings_1 = require("../../wi-ms-website/src/services/settings");
const logger_1 = require("../../wi-ms-website/src/services/logger");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + settings_1.Settings.env.MONGO_HOST1 + ',' + settings_1.Settings.env.MONGO_HOST2 + '/' + settings_1.Settings.env.MONGO_DB + '?replicaSet=rs0&readPreference=secondaryPreferred', {}, (err) => {
    if (err) {
        logger_1.Logger.error('Could not connect to MongoDB');
        logger_1.Logger.error(err.message);
    }
    else {
        logger_1.Logger.info('MongoDB connected');
    }
});
