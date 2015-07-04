var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var ProviderTable = require('./../components/ProviderTable.jsx');
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Navigation = require('react-router').Navigation;
var EditProviderForm = require('./../components/EditProviderForm.jsx');
var EditProviderImageForm = require('./../components/EditProviderImageForm.jsx');
var PageLayout = require('./../components/PageLayout.jsx');

var EditProvider = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('EditProviderImageStore'), Navigation],
    contextTypes: {
        router: React.PropTypes.func
    },
    getStateFromFlux: function () {
        var flux = this.getFlux();
        return {
            image: flux.store('EditProviderImageStore').getImage(),
            loading: flux.store('EditProviderImageStore').isLoading(),
            saving: flux.store('EditProviderImageStore').isSaving(),
            deleteing: flux.store('EditProviderImageStore').isDeleteing(),
            deleted: flux.store('EditProviderImageStore').isDeleted()
        }
    },
    componentWillUpdate: function (newProps, newState) {
        if (newState.deleted === true) {
            this.goBack();
        }
    },
    componentDidMount: function () {
        this.getFlux().actions.loadProviderImageForEditing(this.context.router.getCurrentParams().id);
    },
    saveImage: function (image) {
        this.getFlux().actions.saveProviderImage(this.context.router.getCurrentParams().id, image);
    },
    deleteProvider:function (image) {
        this.getFlux().actions.deleteProviderImage(image);
    },
    back: function () {
        this.goBack();
    },
    render: function() {
        return (
            <PageLayout>
                <div>
                    <EditProviderImageForm
                        image={this.state.image}
                        onSave={this.saveImage}
                        loading={this.state.loading}
                        saving={this.state.saving}
                        deleteing={this.state.deleteing}
                        onDelete={this.deleteProvider}
                        onGoBack={this.back}
                    />
                </div>
            </PageLayout>
        );
    }
});

module.exports = EditProvider;