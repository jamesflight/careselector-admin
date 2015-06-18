var App = require('./App.jsx');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Example = require('./pages/Example.jsx');


var routes = (
    <Route handler={App} path="/">
        <Route name="example" path="/example" handler={Example} />
    </Route>
);

module.exports = routes;