var qwest = require('qwest');
var config = require('./../../config.js');
var GetHeaders = require('./../auth/GetHeaders.js');

module.exports = function (id) {
    return qwest.get(config.API_URL + 'providers/' + id, {},{headers:GetHeaders()});
};