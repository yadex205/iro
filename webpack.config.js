const merge = require('webpack-merge');

const SETTINGS_COMMON = require('./webpack/common.config');
const SETTINGS_SERVER = require('./webpack/server.config');

module.exports = [
  merge(SETTINGS_COMMON, SETTINGS_SERVER)
];
