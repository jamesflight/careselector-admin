var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.image = {};
        this.loading = false;
        this.saving = false;
        this.deleteing = false;
        this.deleted = false;

        this.bindActions(
            "LOAD_PROVIDER_IMAGE_FOR_EDITING", this.loadProviderImage,
            "LOAD_PROVIDER_IMAGE_FOR_EDITING_SUCCESS", this.loadProviderImageSuccess,
            "SAVE_PROVIDER_IMAGE", this.saveProviderImage,
            "SAVE_PROVIDER_IMAGE_SUCCESS", this.saveProviderImageSuccess,
            "DELETE_PROVIDER_IMAGE", this.deleteProviderImage,
            "DELETE_PROVIDER_IMAGE_SUCCESS", this.deleteProviderImageSuccess
        );
    },
    loadProviderImage: function () {
        this.deleted = false;
        this.loading = true;
        this.emit("change");
    },
    loadProviderImageSuccess: function (image) {
        this.image = image;
        this.loading = false;
        this.emit("change");
    },
    saveProviderImage: function () {
        this.saving = true;
        this.emit("change");
    },
    saveProviderImageSuccess: function () {
        this.saving = false;
        this.emit("change");
    },
    deleteProviderImage: function () {
        this.deleteing = true;
        this.emit("change");
    },
    deleteProviderImageSuccess: function () {
        this.deleteing = false;
        this.deleted = true;
        this.emit("change");
    },
    getImage: function () {
        return this.image;
    },
    isLoading: function () {
        return this.loading;
    },
    isSaving: function () {
        return this.saving;
    },
    isDeleteing: function () {
        return this.deleteing;
    },
    isDeleted: function () {
        return this.deleted;
    }
});