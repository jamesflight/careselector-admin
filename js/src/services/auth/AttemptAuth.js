var qwest = require('qwest');
var config = require('./../../config.js');

module.exports = function (credentials) {
    return qwest.post(config.API_URL + 'auth', credentials);
};