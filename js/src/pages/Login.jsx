var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var LoginForm = require('./../components/LoginForm.jsx');
var Navigation = require('react-router').Navigation;

var Login = React.createClass({
    mixins: [FluxMixin, Navigation],
    attemptLogin: function (credentials) {
        this.getFlux().actions.attemptAuth(credentials)
            .then(function () {
                this.transitionTo('Index');
            }.bind(this));
    },
    render: function() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-xs-12">
                            <LoginForm onSubmit={this.attemptLogin} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Login;