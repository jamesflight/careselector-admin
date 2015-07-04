var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App.jsx');
var routes = require('./routes.jsx');
var actions = require('./actions.js');
var Fluxxor = require("fluxxor");
var BristolProvidersStore = require('./stores/BristolProvidersStore.js');
var EditProviderStore = require('./stores/EditProviderStore.js');
var AuthStore = require('./stores/AuthStore.js');
var EditProviderImageStore = require('./stores/EditProviderImageStore.js');

var stores = {
    BristolProvidersStore: new BristolProvidersStore(),
    EditProviderStore: new EditProviderStore(),
    AuthStore: new AuthStore(),
    EditProviderImageStore: new EditProviderImageStore()
};

var flux = new Fluxxor.Flux(stores, actions);
Router.run(routes, function (Handler) {
    React.render(<Handler flux={flux} />, document.getElementById("app"));
});