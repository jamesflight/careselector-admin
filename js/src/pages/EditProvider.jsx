var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ProviderTable = require('./../components/ProviderTable.jsx');
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Navigation = require('react-router').Navigation;
var EditProviderForm = require('./../components/EditProviderForm.jsx');

var EditProvider = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('EditProviderStore'), Navigation],
    contextTypes: {
        router: React.PropTypes.func
    },
    getStateFromFlux: function () {
        return {
            provider: this.getFlux().store('EditProviderStore').getProvider()
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
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <EditProviderForm provider={this.state.provider} onSaveProvider={this.saveProvider} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EditProvider;