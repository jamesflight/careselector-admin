var React = require('react');
var TinyMCE = require('react-tinymce');
var MoneyInput = require('./MoneyInput.jsx');
var DeleteButton = require('./DeleteButton.jsx');
var ImageInput = require('./ImageInput.jsx');

var LoginForm = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onDelete:React.PropTypes.func.isRequired,
        loading:React.PropTypes.bool.isRequired,
        saving:React.PropTypes.bool.isRequired,
        deleteing:React.PropTypes.bool.isRequired
    },
    getInitialState: function () {
        return {
            image: {}
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            image:newProps.image
        });
    },
    updateField: function (event) {
        var state = this.state;
        state.image[event.target.dataset.field] = event.target.value;
        this.setState(state);
    },
    updateCheckbox: function (event) {
        var state = this.state;
        state.image[event.target.dataset.field] = event.target.checked;
        this.setState(state);
    },
    save: function () {
        this.props.onSave(this.state.image);
    },
    render: function(){
        return (
            <div>
                { this.props.loading &&
                    <div>
                        <br/><br/><br/>
                        <div className="text-center">
                            <img src="/careselector-admin/img/ajax.gif" />
                        </div>
                    </div>
                }
                { ! this.props.loading &&
                    <div>
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 className="page-header"><i onClick={this.props.onGoBack} className="fa fa-chevron-left fa-lg text-primary" style={{"cursor":"pointer"}}/> Edit Image</h1>
                            </div>
                            <div className="col-xs-12">
                                { ! this.props.saving &&
                                <button className="btn btn-lg btn-success" onClick={this.save}><i className="fa fa-floppy-o fa-lg"></i> Save</button>
                                }
                                { this.props.saving &&

                                    <img src="/careselector-admin/img/ajax.gif" />

                                }
                                <DeleteButton
                                    onDelete={this.props.onDelete}
                                    text="Delete"
                                    className="pull-right"
                                    payload={this.state.image.id}
                                    deleteing={this.props.deleteing}
                                />
                                <hr/>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 text-center">
                                    <img src={this.state.image.url} />

                                </div>
                            </div>
                            <br/>
                            <div className="col-xs-12">

                                <div className="panel panel-green">
                                    <div className="panel-heading">
                                        Settings
                                    </div>
                                    <div className="panel-body">

                                        <div className="form-group">
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="internal" onChange={this.updateCheckbox} checked={this.state.image.internal} type="checkbox" /> Internal
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="external" onChange={this.updateCheckbox} checked={this.state.image.external} type="checkbox" /> External
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="primary" onChange={this.updateCheckbox} checked={this.state.image.primary} type="checkbox" /> Primary
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
            </div>
        );
    }
});

module.exports = LoginForm;