var qwest = require('qwest');
var config = require('./../../config.js');
var GetHeaders = require('./../auth/GetHeaders.js');

module.exports = function (id, provider) {
    console.log(provider);
    return qwest.post(config.API_URL + 'providers/' + id, provider, GetHeaders());
};