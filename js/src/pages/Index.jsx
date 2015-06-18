var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ProviderTable = require('./../components/ProviderTable.jsx');
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Navigation = require('react-router').Navigation;

var Index = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('BristolProvidersStore'), Navigation],
    getStateFromFlux: function () {
        return {
            providers: this.getFlux().store('BristolProvidersStore').getProviders()
        }
    },
    componentDidMount: function () {
        this.getFlux().actions.loadBristolProviders();
    },
    redirect: function (id) {
        this.getFlux().actions.loadProviderForEditing(id);
        this.transitionTo('EditProvider', {id:id});
    },
    render: function() {
        return (
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-xs-12">
                            <ProviderTable onSelectProvider={this.redirect} providers={this.state.providers}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Index;