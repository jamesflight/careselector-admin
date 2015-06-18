var React = require('react');

var LoginForm = React.createClass({
    propTypes: {
        provider: React.PropTypes.object,
        onSaveProvider: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            provider: {}
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            provider:newProps.provider
        });
        console.log(newProps);
    },
    updateField: function (event) {
        var state = this.state;
        state.provider[event.target.dataset.field] = event.target.value;
        this.setState(state);
    },
    updateCheckbox: function (event) {
        var state = this.state;
        state.provider[event.target.dataset.field] = event.target.checked;
        this.setState(state);
    },
    saveProvider: function () {
        this.props.onSaveProvider(this.state.provider);
    },
    render: function(){
        return (
            <div>

                <section className="orange">
                    <h1>Home Details</h1>

                    <h2>Details</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered grey">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td tabindex="1"><input className="form-control" data-field="name" onChange={this.updateField} value={this.state.provider.name} type="text" /></td>
                                </tr>

                                <tr>
                                    <th>Local Authority</th>
                                    <td tabindex="1"><input className="form-control" data-field="local_authority" onChange={this.updateField} value={this.state.provider.local_authority} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Address 1</th>
                                    <td tabindex="1"><input className="form-control" data-field="address_1" onChange={this.updateField} value={this.state.provider.address_1} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Address 2</th>
                                    <td tabindex="1"><input className="form-control" data-field="address_2" onChange={this.updateField} value={this.state.provider.address_2} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Address 3</th>
                                    <td tabindex="1"><input className="form-control" data-field="address_3" onChange={this.updateField} value={this.state.provider.address_3} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Address 4</th>
                                    <td tabindex="1"><input className="form-control" data-field="address_4" onChange={this.updateField} value={this.state.provider.address_4} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Postcode</th>
                                    <td tabindex="1"><input className="form-control" data-field="postcode" onChange={this.updateField} value={this.state.provider.postcode} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td tabindex="1"><input className="form-control" data-field="phone" onChange={this.updateField} value={this.state.provider.phone} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Website</th>
                                    <td tabindex="1"><input className="form-control" data-field="website" onChange={this.updateField} value={this.state.provider.website} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>Contact Name</th>
                                    <td tabindex="1"><input className="form-control" data-field="contact_name" onChange={this.updateField} value={this.state.provider.contact_name} type="text" /></td>
                                </tr>
                                <tr>
                                    <th>CQC Score</th>
                                    <td tabindex="1"><input className="form-control" data-field="cqc_score" onChange={this.updateField} value={this.state.provider.cqc_score} type="number" /></td>
                                </tr>
                                <tr>
                                    <th>CQC Location ID</th>
                                    <td tabindex="1"><input className="form-control" data-field="cqc_location" onChange={this.updateField} value={this.state.provider.cqc_location} type="text" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="purple">

                    <h1>Home Features</h1>


                        <h2>Main Features</h2>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Service Type</th>
                                        <td tabindex="1">
                                            <select className="form-control" value={this.state.provider.service_type}>
                                                <option value="CARE_HOME">Care Home</option>
                                                <option value="NURSING_HOME">Nursing Home</option>
                                                <option value="HOME_CARE">Home Care</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>Total Beds</th>
                                        <td tabindex="1"><input className="form-control" data-field="total_beds" onChange={this.updateField} value={this.state.provider.total_beds}  type="number" /></td>
                                    </tr>
                                    <tr>
                                        <th>Under 65</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_under_65" onChange={this.updateCheckbox} checked={this.state.provider.service_under_65} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Over 65</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_over_65" onChange={this.updateCheckbox} checked={this.state.provider.service_over_65} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Dementia</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_dementia" onChange={this.updateCheckbox} checked={this.state.provider.service_dementia} type="checkbox" /></td>
                                    </tr>

                                    <tr>
                                        <th>Learning Disability</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_learning_disability" onChange={this.updateCheckbox} checked={this.state.provider.service_learning_disability} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Physical Disability</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_physical_disability" onChange={this.updateCheckbox} checked={this.state.provider.service_physical_disability} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Sensory Impairment</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_sensory_impairment" onChange={this.updateCheckbox} checked={this.state.provider.service_sensory_impairment} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Mental Health</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_mental_health" onChange={this.updateCheckbox} checked={this.state.provider.service_mental_health} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Substance Misuse</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_substance_misuse" onChange={this.updateCheckbox} checked={this.state.provider.service_substance_misuse} type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <th>Eating Disorders</th>
                                        <td tabindex="1"><input className="form-control" data-field="service_eating_disorders" onChange={this.updateCheckbox} checked={this.state.provider.service_eating_disorders} type="checkbox" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                <div className="text-center">
                    <button className="btn btn-lg btn-warning" onClick={this.saveProvider}>Save Provider</button>
                </div>

                </section>
            </div>
        );
    }
});

module.exports = LoginForm;