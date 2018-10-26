"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const _ = require("underscore");
let Models = {};
exports.Models = Models;
fs
    .readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file.indexOf('index') !== 0) && (file.indexOf('.d.') === -1) && (file !== "node_modules");
})
    .forEach(function (file) {
    let model = require(path.join(__dirname, file));
    exports.Models = Models = _.extend(Models, model);
});
