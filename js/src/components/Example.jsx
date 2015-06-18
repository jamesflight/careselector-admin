var React = require('react');
var Navigation = require('react-router').Navigation;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var SubmitEmailBox = React.createClass({
    mixins: [FluxMixin, Navigation],
    render: function(){
        return (
            <div>
                <h1>Example</h1>
            </div>
        );
    }
});

module.exports = SubmitEmailBox;