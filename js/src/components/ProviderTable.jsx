var React = require('react');

var LoginForm = React.createClass({
    propTypes: {
        providers: React.PropTypes.array,
        onSelectProvider: React.PropTypes.func
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
            <table className="table table-striped">
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
                                <td><span className="link" onClick={this.selectProvider} data-id={provider.id}>{provider.name}</span></td>
                                <td>{provider.cqc_id}</td>
                            </tr>
                        )
                    }.bind(this))}
                </tbody>
            </table>
            </div>
        );
    }
});

module.exports = LoginForm;