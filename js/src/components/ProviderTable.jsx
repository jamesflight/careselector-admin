var React = require('react');

var LoginForm = React.createClass({
    propTypes: {
        providers: React.PropTypes.array.isRequired,
        onSelectProvider: React.PropTypes.func.isRequired,
        loading:React.PropTypes.bool.isRequired
    },
    submit: function () {
        var email = React.findDOMNode(this.refs.email).value;
        var password = React.findDOMNode(this.refs.password).value;

        this.props.onSubmit({
            email:email,
            password:password
        });
    },
    selectProvider: function (event) {
        this.props.onSelectProvider(event.target.dataset.id);
    },
    render: function(){
        return (
            <div>
                <h1 className="page-header">Bristol Care Homes</h1>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CQC Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.providers.map(function (provider) {
                            return (
                                <tr>
                                    <td><span style={{'cursor':'pointer'}} onClick={this.selectProvider} data-id={provider.id} className="text-primary" >{provider.name}</span></td>
                                    <td>{provider.cqc_id}</td>
                                </tr>
                            )
                        }.bind(this))}
                    </tbody>
                </table>
                { this.props.loading &&
                    <div className="text-center">
                        <img src="/careselector-admin/img/ajax.gif" />
                    </div>
                }
            </div>
        );
    }
});

module.exports = LoginForm;