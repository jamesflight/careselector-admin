var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.provider = {};
        this.loading = false;

        this.bindActions(
            "LOAD_PROVIDER_FOR_EDITING", this.loadProvider,
            "LOAD_PROVIDER_FOR_EDITING_SUCCESS", this.loadProviderSuccess
        );
    },
    loadProvider: function () {
        this.loading = true;
        this.provider = {};
        this.emit("change");
    },
    loadProviderSuccess: function (response) {
        this.loading = false;
        this.provider = response.data;
        this.emit("change");
    },
    getProvider: function () {
        return this.provider;
    }
});