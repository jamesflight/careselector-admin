var React = require('react');
var Link = require('react-router').Link;

var PageLayout = React.createClass({
    render: function(){
        return (
            <div id="wrapper">
                <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom':0}}>
                    <div className="navbar-header">
                        <span className="navbar-brand">Careselector - Database Admin</span>
                    </div>

                <div className="navbar-default sidebar">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav in" id="side-menu">
                            <li>
                                <Link to="/index">Bristol Care Homes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>

                <div id="page-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = PageLayout;