var React = require('react');

var DeleteButton = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        onDelete: React.PropTypes.func.isRequired,
        className:React.PropTypes.string,
        payload:React.PropTypes.object,
        deleteing:React.PropTypes.bool.isRequired
    },
    getInitialState: function () {
        return {
            showConfimation:false
        }
    },
    toggleConfirmation: function () {
        this.setState({
            showConfirmation: ! this.state.showConfirmation
        });
    },
    actionDelete: function () {
        this.props.onDelete(this.props.payload);
        this.toggleConfirmation();
    },
    render: function(){
        return (
            <span className={this.props.className}>
            {! this.props.deleteing &&
                <div>
                    { ! this.state.showConfirmation &&
                        <button className="btn btn-danger btn-lg" onClick={this.toggleConfirmation}><i className="fa fa-trash fa-lg"></i> { this.props.text }</button>
                    }
                    { this.state.showConfirmation &&
                        <p>
                        <span className="text-muted">Are you sure&#63; </span>
                        <button onClick={this.actionDelete} className="btn btn-danger btn-lg" style={{'marginRight':'5px'}}>Yes</button>
                        <button onClick={this.toggleConfirmation} className="btn btn-default btn-lg">No</button>
                        </p>
                    }
                </div>
            }
            { this.props.deleteing &&
                <img src="/careselector-admin/ajax.gif" />
            }


            </span>
        );
    }
});

module.exports = DeleteButton;