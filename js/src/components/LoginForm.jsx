var React = require('react');
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var LoginForm = React.createClass({
    mixins: [FluxMixin, Navigation],
    propTypes: {
       onSubmit: React.PropTypes.func
    },
    submit: function () {
        var email = React.findDOMNode(this.refs.email).value;
        var password = React.findDOMNode(this.refs.password).value;

        this.props.onSubmit({
            email:email,
            password:password
        });
    },
    render: function(){
        return (
            <div className="row">
                <br/><br/><br/>
                <div className="col-xs-4 col-xs-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <input ref="email" className="form-control" placeholder="E-mail" name="email" type="email" autofocus=""/>
                            </div>
                            <div className="form-group">
                                <input ref="password" className="form-control" placeholder="Password" name="password" type="password"/>
                            </div>

                            <button onClick={this.submit} className="btn btn-lg btn-success btn-block">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LoginForm;