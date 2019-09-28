import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './component.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerItem">
                    <Link to="/">Home</Link>
                </div>
                <div className="headerItem">
                    <Link to="/employers">Employers</Link>
                </div>
                <div className="headerItem">
                    <Link to="/jobs">Jobs</Link>
                </div>
            </div>
        );
    }
}

export default Header;