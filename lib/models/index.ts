import * as fs from 'fs'
import * as path from 'path'
import * as _ from 'underscore'

let Models: any = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file.indexOf('index') !== 0) && (file.indexOf('.d.') === -1) && (file !== "node_modules");
  })
  .forEach(function (file) {
    let model = require(path.join(__dirname, file));
    Models = _.extend(Models, model);
  });

export {Models}