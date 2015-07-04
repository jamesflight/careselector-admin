var qwest = require('qwest');
var config = require('./../../config.js');
var GetHeaders = require('./../auth/GetHeaders.js');

module.exports = function (id, image) {
    return qwest.post(config.API_URL + 'images/' + id, image, {headers:GetHeaders()});
};