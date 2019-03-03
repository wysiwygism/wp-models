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
        let url = 'mongodb://' + hostsStr + '/' + dbName;
        if (replicaSetName) {
            url = 'mongodb://' + hostsStr + '/' + dbName + '?replicaSet=' + replicaSetName + '&readPreference=secondaryPreferred';
        }
        mongoose.connect(url, { useNewUrlParser: true }, (err) => {
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
