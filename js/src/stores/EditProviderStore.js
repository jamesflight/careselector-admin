var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.provider = {};
        this.loading = false;
        this.saving = false;

        this.bindActions(
            "LOAD_PROVIDER_FOR_EDITING", this.loadProvider,
            "LOAD_PROVIDER_FOR_EDITING_SUCCESS", this.loadProviderSuccess,
            "SAVE_PROVIDER", this.saveProvider,
            "SAVE_PROVIDER_SUCCESS", this.saveProviderSuccess
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
    saveProvider: function () {
        this.saving = true;
        this.emit("change");
    },
    saveProviderSuccess: function () {
        this.saving = false;
        this.emit("change");
    },
    getProvider: function () {
        return this.provider;
    },
    isLoading: function () {
        return this.loading;
    },
    isSaving: function () {
        return this.saving;
    }
});