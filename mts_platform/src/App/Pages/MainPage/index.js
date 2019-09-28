import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import './component.css';

class MainPage extends Component {
    render() {
        return (
            <div className="mainPage">
                <Header/>

                <div>
                    <h1>
                        Привет! Нужна помощь в поиске вакансии или подборе персонала? Я помогу, просто выбери подходящий режим!
                    </h1>
                </div>
            </div>
        );
    }
}

export default MainPage;