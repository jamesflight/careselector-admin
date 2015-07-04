var App = require('./App.jsx');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Example = require('./pages/Example.jsx');
var Login = require('./pages/Login.jsx');
var Index = require('./pages/Index.jsx');
var EditProvider = require('./pages/EditProvider.jsx');
var EditProviderImage = require('./pages/EditProviderImage.jsx');


var routes = (
    <Route handler={App} path="/">
        <Route name="Login" path="/login" handler={Login} />
        <Route name="Index" path="/index" handler={Index} />
        <Route name="EditProvider" path="/providers/:id" handler={EditProvider} />
        <Route name="EditProviderImage" path="/providerimages/:id" handler={EditProviderImage} />
    </Route>
);

module.exports = routes;