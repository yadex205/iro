const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: IS_DEVELOPMENT ? 'development' : 'production'
};
