var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var LoginForm = require('./../components/LoginForm.jsx');
var Navigation = require('react-router').Navigation;
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Login = React.createClass({
    mixins: [FluxMixin, Navigation, StoreWatchMixin('AuthStore')],
    getStateFromFlux: function () {
        var flux = this.getFlux();

        return {
            loading:flux.store('AuthStore').isLoading(),
            errors:flux.store('AuthStore').getErrors()
        }
    },
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
                                <div className="row">
                                    <br/><br/><br/>
                                    <div className="col-xs-4 col-xs-offset-4">
                                        <LoginForm onSubmit={this.attemptLogin} loading={this.state.loading} errors={this.state.errors}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = Login;