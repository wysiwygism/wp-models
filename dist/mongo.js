"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
exports.ConnectMongoDb = (hosts, dbName, replicaSetName, callback) => {
    if (!Array.isArray(hosts) || hosts.length <= 0) {
        if (callback) {
            return callback(new Error('Missing hosts'));
        }
    }
    else {
        const hostsStr = hosts.join(',');
        mongoose.connect('mongodb://' + hostsStr + '/' + dbName + '?replicaSet=' + replicaSetName + '&readPreference=secondaryPreferred', { useNewUrlParser: true }, (err) => {
            if (err) {
                if (callback) {
                    return callback(err);
                }
            }
            else {
                if (callback) {
                    return callback();
                }
            }
        });
    }
};
