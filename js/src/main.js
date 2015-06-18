var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./App.jsx');
var routes = require('./routes.jsx');
var actions = require('./actions.js');
var Fluxxor = require("fluxxor");
var BristolProvidersStore = require('./stores/BristolProvidersStore.js');
var EditProviderStore = require('./stores/EditProviderStore.js');

var stores = {
    BristolProvidersStore: new BristolProvidersStore(),
    EditProviderStore: new EditProviderStore()
};

var flux = new Fluxxor.Flux(stores, actions);
Router.run(routes, function (Handler) {
    React.render(<Handler flux={flux} />, document.getElementById("app"));
});