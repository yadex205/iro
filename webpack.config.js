const merge = require('webpack-merge');

const SETTINGS_COMMON = require('./webpack/common.config');
const SETTINGS_SERVER = require('./webpack/server.config');
const SETTINGS_CLIENT = require('./webpack/client.config');

module.exports = [
  merge(SETTINGS_COMMON, SETTINGS_CLIENT),
  merge(SETTINGS_COMMON, SETTINGS_SERVER)
];
