import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import './component.css';

class MainPage extends Component {
    render() {
        const data = ['js', 'react'];
        return (
            <div className="mainPage">
                <Header/>
            </div>
        );
    }
}

export default MainPage;