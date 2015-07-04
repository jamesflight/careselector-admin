var React = require('react');
var TinyMCE = require('react-tinymce');
var MoneyInput = require('./MoneyInput.jsx');
var DeleteButton = require('./DeleteButton.jsx');
var ImageInput = require('./ImageInput.jsx');

var LoginForm = React.createClass({
    propTypes: {
        provider: React.PropTypes.object.isRequired,
        onSaveProvider: React.PropTypes.func.isRequired,
        onDeleteProvider:React.PropTypes.func.isRequired,
        loading:React.PropTypes.bool.isRequired,
        saving:React.PropTypes.bool.isRequired,
        deleteing:React.PropTypes.bool.isRequired,
        onUploadImage:React.PropTypes.func.isRequired,
        loadingImage:React.PropTypes.bool.isRequired,
        goToImage:React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            provider: {images:[]}
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            provider:newProps.provider
        });
    },
    updateField: function (event) {
        var state = this.state;
        state.provider[event.target.dataset.field] = event.target.value;
        this.setState(state);
    },
    updatePrice: function (event) {
        var state = this.state;
        state.provider['price'] = event.target.value;
        this.setState(state);
    },
    updateNotes: function (event) {
        this.state.provider['notes'] = event.target.getContent();
    },
    updateCheckbox: function (event) {
        var state = this.state;
        state.provider[event.target.dataset.field] = event.target.checked;
        this.setState(state);
    },
    saveProvider: function () {
        this.props.onSaveProvider(this.state.provider);
    },
    onUploadImage: function (obj) {
        this.props.onUploadImage(obj);
    },
    goToImage: function(event) {
        console.log('adf');
        this.props.goToImage(event.target.dataset.id);
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
                                <h1 className="page-header">{this.state.provider.name}</h1>
                            </div>
                            <div className="col-xs-12">
                                { ! this.props.saving &&
                                <button className="btn btn-lg btn-success" onClick={this.saveProvider}><i className="fa fa-floppy-o fa-lg"></i> Save</button>
                                }
                                { this.props.saving &&

                                    <img src="/careselector-admin/img/ajax.gif" />

                                }
                                <DeleteButton
                                    onDelete={this.props.onDeleteProvider}
                                    text="Delete"
                                    className="pull-right"
                                    payload={this.state.provider}
                                    deleteing={this.props.deleteing}
                                />
                                <hr/>
                            </div>
                            <div className="col-xs-4">
                                <div className="panel panel-red">
                                    <div className="panel-heading">
                                    General Details
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" data-field="name" onChange={this.updateField} value={this.state.provider.name} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Local Authority</label>
                                            <input className="form-control" data-field="local_authority" onChange={this.updateField} value={this.state.provider.local_authority} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Address</label>
                                            <input className="form-control" data-field="address_1" onChange={this.updateField} value={this.state.provider.address_1} type="text" />
                                            <input className="form-control" data-field="address_2" onChange={this.updateField} value={this.state.provider.address_2} type="text" />
                                            <input className="form-control" data-field="address_3" onChange={this.updateField} value={this.state.provider.address_3} type="text" />
                                            <input className="form-control" data-field="address_4" onChange={this.updateField} value={this.state.provider.address_4} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Postcode</label>
                                            <input className="form-control" data-field="postcode" onChange={this.updateField} value={this.state.provider.postcode} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" data-field="phone" onChange={this.updateField} value={this.state.provider.phone} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Website</label>
                                            <input className="form-control" data-field="website" onChange={this.updateField} value={this.state.provider.website} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>Contact Name</label>
                                            <input className="form-control" data-field="contact_name" onChange={this.updateField} value={this.state.provider.contact_name} type="text" />
                                        </div>

                                        <div className="form-group">
                                            <label>CQC Score</label>
                                            <input className="form-control" data-field="cqc_score" onChange={this.updateField} value={this.state.provider.cqc_score} type="number" />
                                        </div>
                                        <div className="form-group">
                                            <label>CQC Location Id</label>
                                            <input className="form-control" data-field="cqc_location" onChange={this.updateField} value={this.state.provider.cqc_location} type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Care Home Manager Name</label>
                                            <input className="form-control" data-field="care_home_manager_name" onChange={this.updateField} value={this.state.provider.care_home_manager_name} type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Care Home Manager Email</label>
                                            <input className="form-control" data-field="care_home_manager_email" onChange={this.updateField} value={this.state.provider.care_home_manager_email} type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Care Home Manager Phone</label>
                                            <input className="form-control" data-field="care_home_manager_phone" onChange={this.updateField} value={this.state.provider.care_home_manager_phone} type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-8">
                                <div className="panel panel-yellow">
                                    <div className="panel-heading">
                                        Notes
                                    </div>
                                    <div className="panel-body" key="tinymce">
                                        <TinyMCE
                                        content={this.state.provider.notes}
                                        config={{
                                            menubar:'',
                                            plugins: '',
                                            toolbar: 'undo redo | bold italic underline'
                                        }}
                                        onChange={this.updateNotes}
                                        />
                                        <div className="form-group">
                                            <br/>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="terms_agreed" onChange={this.updateCheckbox} checked={this.state.provider.terms_agreed} type="checkbox" /> Terms Agreed
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-green">
                                    <div className="panel-heading">
                                        Services
                                    </div>
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label>Service Type</label>
                                            <select className="form-control" onChange={this.updateField} data-field="service_type" value={this.state.provider.service_type}>
                                                <option value="CARE_HOME">Care Home</option>
                                                <option value="NURSING_HOME">Nursing Home</option>
                                                <option value="HOME_CARE">Home Care</option>
                                            </select>
                                        </div>
                                        <div className="form-group">

                                            <label>Specialisms</label>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_under_65" onChange={this.updateCheckbox} checked={this.state.provider.service_under_65} type="checkbox" /> Under 65
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_over_65" onChange={this.updateCheckbox} checked={this.state.provider.service_over_65} type="checkbox" /> Over 65
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_dementia" onChange={this.updateCheckbox} checked={this.state.provider.service_dementia} type="checkbox" /> Dementia
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_learning_disability" onChange={this.updateCheckbox} checked={this.state.provider.service_learning_disability} type="checkbox" /> Learning Disability
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_physical_disability" onChange={this.updateCheckbox} checked={this.state.provider.service_physical_disability} type="checkbox" /> Physical Disability
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_sensory_impairment" onChange={this.updateCheckbox} checked={this.state.provider.service_sensory_impairment} type="checkbox" /> Sensory Impairment
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_mental_health" onChange={this.updateCheckbox} checked={this.state.provider.service_mental_health} type="checkbox" /> Mental Health
                                                </label>
                                            </div>
                                            <div class="checkbox">
                                                <label>
                                                    <input data-field="service_substance_misuse" onChange={this.updateCheckbox} checked={this.state.provider.service_substance_misuse} type="checkbox" /> Substance Misuse
                                                </label>
                                            </div>

                                            <div className="form-group">
                                                <label>Total Beds</label>
                                                <input className="form-control" data-field="total_beds" onChange={this.updateField} value={this.state.provider.total_beds} type="number" />
                                            </div>

                                            <div className="form-group">
                                                <label>Availability</label>
                                                <input className="form-control" data-field="availability" onChange={this.updateField} value={this.state.provider.availability} type="text" />
                                            </div>

                                            <div className="form-group">
                                                <label>Price</label>
                                                <MoneyInput className="form-control" onChange={this.updatePrice} value={this.state.provider.price} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12">
                                <div className="panel panel-yellow">
                                    <div className="panel-heading">
                                        Images
                                    </div>
                                    <div className="panel-body">
                                         {
                                             this.state.provider.images.map(function (image) {
                                                 return (
                                                        <img data-id={image.id} onClick={this.goToImage} src={image.thumbnail_url} style={{'border':'solid 1px #ccc','cursor':'pointer'}} />
                                                 )
                                             }.bind(this))
                                         }
                                        {!this.props.loadingImage &&
                                        <ImageInput onSelect={this.onUploadImage} />
                                        }
                                        { this.props.loadingImage &&
                                        <div>
                                            <div className="text-center">
                                                <img src="/careselector-admin/img/ajax.gif" />
                                            </div>
                                        </div>
                                            }
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