import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import './component.css';

class MainPage extends Component {
    onButtonClickHandler = (path) => {
        this.props.history.push(`${path}`);
    };

    render() {
        return (
            <div className="mainPage">
                <Header/>
                <div className="mainPageWrapper">
                    <div className="logo">
                    </div>
                    <h1 className="mainHeader">
                        <span>
                            Привет!
                        </span>
                        Нужна помощь в поиске вакансии или подборе персонала? Я помогу, просто выбери подходящий режим!
                    </h1>
                    <div className="mainPageButtonsWrapper">
                        <button onClick={() => this.onButtonClickHandler('/hr')}>HR</button>
                        <button onClick={() => this.onButtonClickHandler('/employers')}>Employer</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;