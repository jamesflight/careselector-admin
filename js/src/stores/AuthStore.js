var Fluxxor = require('Fluxxor');
var constants = require('./../constants.js');

module.exports = Fluxxor.createStore({
    initialize: function () {
        this.providers = [];
        this.loading = false;
        this.errors = [];

        this.bindActions(
            "ATTEMPT_AUTH", this.attemptAuth,
            "ATTEMPT_AUTH_SUCCESS", this.attemptAuthSuccess,
            "ATTEMPT_AUTH_FAIL", this.attemptAuthFail
        );
    },
    attemptAuth: function () {
        this.loading = true;
        this.emit("change");
    },
    attemptAuthSuccess: function () {
        this.loading = false;
        this.errors = [];
        this.emit("change");
    },
    attemptAuthFail: function (errors) {
        this.errors = errors.auth;
        this.loading = false;
        this.emit("change");
    },
    isLoading: function () {
        return this.loading;
    },
    getErrors: function () {
        return this.errors;
    }
});