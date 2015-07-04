var qwest = require('qwest');
var config = require('./../../config.js');
var GetHeaders = require('./../auth/GetHeaders.js');

module.exports = function (id) {
    return qwest.delete(config.API_URL + 'images/' + id, {}, {headers:GetHeaders()});
};