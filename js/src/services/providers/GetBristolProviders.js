var qwest = require('qwest');
var config = require('./../../config.js');
var GetHeaders = require('./../auth/GetHeaders.js');

module.exports = function () {
    return qwest.get(config.API_URL + 'providers/bristol', {},{headers:GetHeaders()});
};