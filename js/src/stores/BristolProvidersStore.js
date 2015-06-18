var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.providers = [];
        this.loading = false;

        this.bindActions(
            "LOAD_BRISTOL_PROVIDERS", this.isLoading,
            "LOAD_BRISTOL_PROVIDERS_SUCCESS", this.loadProviders
        );
    },
    isLoading: function () {
        this.loading = true;
        this.emit("change");
    },
    loadProviders: function (response) {
        this.loading = false;
        this.providers = response.data;
        this.emit("change");
    },
    getProviders: function () {
        return this.providers;
    }
});