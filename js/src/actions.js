var constants = require('./constants.js');
var AttemptAuth = require('./services/auth/AttemptAuth.js');
var SetToken = require('./services/auth/SetToken.js');
var GetBristolProviders = require('./services/providers/GetBristolProviders.js');
var GetProvider = require('./services/providers/GetProvider.js');
var SaveProvider = require('./services/providers/SaveProvider.js');
var DeleteProvider = require('./services/providers/DeleteProvider.js');

module.exports = {
    attemptAuth: function (credentials) {
        this.dispatch(constants.ATTEMPT_AUTH);
        return AttemptAuth(credentials)
            .then(function(response) {
                SetToken(response.token);
                this.dispatch(constants.ATTEMPT_AUTH_SUCCESS);
            }.bind(this))
            .catch(function (e, response) {
                this.dispatch(constants.ATTEMPT_AUTH_FAIL, response.errors);
            }.bind(this));
    },
    loadBristolProviders: function() {
        this.dispatch(constants.LOAD_BRISTOL_PROVIDERS);
        return GetBristolProviders().then(function(response) {
            this.dispatch(constants.LOAD_BRISTOL_PROVIDERS_SUCCESS, response);
        }.bind(this));
    },
    loadProviderForEditing: function (id) {
        this.dispatch(constants.LOAD_PROVIDER_FOR_EDITING);
        return GetProvider(id).then(function(response) {
            this.dispatch(constants.LOAD_PROVIDER_FOR_EDITING_SUCCESS, response);
        }.bind(this));
    },
    saveProvider: function (id, provider) {
        this.dispatch(constants.SAVE_PROVIDER);
        SaveProvider(id, provider).then(function () {
            this.dispatch(constants.SAVE_PROVIDER_SUCCESS);
        }.bind(this));
    },
    deleteProvider: function (provider) {
        this.dispatch(constants.DELETE_PROVIDER);

        DeleteProvider(provider.id).then(function () {
            this.dispatch(constants.DELETE_PROVIDER_SUCCESS);
        }.bind(this));
    }
};