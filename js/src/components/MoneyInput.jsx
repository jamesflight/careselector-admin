var React = require('react');

var MoneyInput = React.createClass({
    propTypes:{
        value:React.PropTypes.number.isRequired,
        className:React.PropTypes.string,
        onChange:React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            amount:this.props.value/100
        }
    },
    componentWillReceiveProps: function (newProps) {
        this.setState({
            amount:(newProps.value / 100)
        });
    },
    changeAmount: function (e) {
        var val = e.target.value;
        this.setState({
            amount: val
        });
        e.target.value = Math.floor(val * 100);
        this.props.onChange(e);
    },
    render: function(){
        return (
                <div className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">£</div>
                            <input onChange={this.changeAmount} value={this.state.amount} type="number" step="1" className="form-control" />
                            <div className="input-group-addon">.00</div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = MoneyInput;