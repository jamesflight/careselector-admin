var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Example = require('./../components/Example.jsx');

var Home = React.createClass({
    mixins: [FluxMixin],
    render: function() {
        return (
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-xs-12">
                                <Example />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = Home;