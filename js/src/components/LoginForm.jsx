var React = require('react');
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var LoginForm = React.createClass({
    mixins: [FluxMixin, Navigation],
    propTypes: {
        onSubmit: React.PropTypes.func.isRequired,
        loading: React.PropTypes.bool.isRequired,
        errors: React.PropTypes.array.isRequired
    },
    submit: function () {
        var email = React.findDOMNode(this.refs.email).value;
        var password = React.findDOMNode(this.refs.password).value;

        this.props.onSubmit({
            email:email,
            password:password
        });
        return false;
    },
    render: function(){
        return (
            <form onSubmit={this.submit} className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Please Sign In</h3>
                </div>

                <div className="panel-body">
                    {this.props.errors.map(function(error) {
                        return (
                            <div>
                                <div className="alert alert-danger">
                           {error}
                                </div>
                            </div>
                        )
                    }.bind(this))}

                    <div className="form-group">
                        <input ref="email" className="form-control" placeholder="E-mail" name="email" type="email" autofocus=""/>
                    </div>
                    <div className="form-group">
                        <input ref="password" className="form-control" placeholder="Password" name="password" type="password"/>
                    </div>

                    { ! this.props.loading &&
                        <button className="btn btn-lg btn-success btn-block">Login</button>
                    }

                    { this.props.loading &&
                        <div className="text-center">
                            <img src="/careselector-admin/img/ajax.gif" />
                        </div>
                    }

                </div>
            </form>
        );
    }
});

module.exports = LoginForm;