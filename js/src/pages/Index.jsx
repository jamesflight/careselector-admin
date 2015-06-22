var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ProviderTable = require('./../components/ProviderTable.jsx');
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Navigation = require('react-router').Navigation;
var PageLayout = require('./../components/PageLayout.jsx');

var Index = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('BristolProvidersStore'), Navigation],
    getStateFromFlux: function () {
        var flux = this.getFlux();
        return {
            providers: flux.store('BristolProvidersStore').getProviders(),
            loading:flux.store('BristolProvidersStore').isLoading()
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
            <PageLayout>
                <div className="row">
                    <div className="col-xs-12">
                        <ProviderTable onSelectProvider={this.redirect} providers={this.state.providers} loading={this.state.loading}/>
                    </div>
                </div>
            </PageLayout>
        );
    }
});

module.exports = Index;