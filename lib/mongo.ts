import * as mongoose from 'mongoose';

(<any>mongoose).Promise = global.Promise;

export const ConnectMongoDb = (hosts: string[], dbName: string, replicaSetName: string, callback?: (err?: Error) => void) => {
    if (!Array.isArray(hosts) || hosts.length <= 0) {
        if (callback) {
            return callback(new Error('Missing hosts'));
        }
    } else {
        const hostsStr: string = hosts.join(',');
        let url: string = 'mongodb://' + hostsStr + '/' + dbName;
        if (replicaSetName) {
            url = 'mongodb://' + hostsStr + '/' + dbName + '?replicaSet=' + replicaSetName + '&readPreference=secondaryPreferred';
        }
        mongoose.connect(url, {useNewUrlParser: true}, (err: Error) => {
            if (err) {
                if (callback) {
                    return callback(err);
                }
            } else {
                if (callback) {
                    return callback();
                }
            }
        });
    }
};