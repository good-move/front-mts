import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './component.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerItem">
                    <NavLink exact to="/">Home</NavLink>
                </div>
                <div className="headerItem">
                    <NavLink to="/employers">Employers</NavLink>
                </div>
                <div className="headerItem">
                    <NavLink to="/hr">HR</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;