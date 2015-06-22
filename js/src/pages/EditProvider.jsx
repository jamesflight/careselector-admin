var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ProviderTable = require('./../components/ProviderTable.jsx');
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Navigation = require('react-router').Navigation;
var EditProviderForm = require('./../components/EditProviderForm.jsx');
var PageLayout = require('./../components/PageLayout.jsx');

var EditProvider = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('EditProviderStore'), Navigation],
    contextTypes: {
        router: React.PropTypes.func
    },
    getStateFromFlux: function () {
        var flux = this.getFlux();
        return {
            provider: flux.store('EditProviderStore').getProvider(),
            loading: flux.store('EditProviderStore').isLoading(),
            saving: flux.store('EditProviderStore').isSaving()
        }
    },
    componentDidMount: function () {
        this.getFlux().actions.loadProviderForEditing(this.context.router.getCurrentParams().id);
    },
    saveProvider: function (provider) {
        this.getFlux().actions.saveProvider(this.context.router.getCurrentParams().id, provider);
    },
    render: function() {
        return (
            <PageLayout>
                <div>
                    <EditProviderForm
                    provider={this.state.provider}
                    onSaveProvider={this.saveProvider}
                    loading={this.state.loading}
                    saving={this.state.saving}
                    />
                </div>
            </PageLayout>
        );
    }
});

module.exports = EditProvider;