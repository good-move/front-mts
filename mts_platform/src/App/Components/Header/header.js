import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import './component.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="headerItem">
                    <NavLink exact to="/">Главная</NavLink>
                </div>
                <div className="headerItem">
                    <NavLink to="/employers">Сотрудникам</NavLink>
                </div>
                <div className="headerItem">
                    <NavLink to="/hr">HR</NavLink>
                </div>
            </div>
        );
    }
}

export default Header;