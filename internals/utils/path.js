const path = require('path');

const fromRoot = (...pathes) => path.resolve(__dirname, '../..', ...pathes);
const fromApp = (...pathes) => path.resolve(__dirname, '../../app', ...pathes);

module.exports = { fromRoot, fromApp };
