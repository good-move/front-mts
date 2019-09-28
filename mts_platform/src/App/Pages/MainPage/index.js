import React, { Component } from 'react';
import Header from '../../Components/Header/header';
import './component.css';
import { Cat } from 'react-kawaii';

class MainPage extends Component {
    render() {
        return (
            <div className="mainPage">
                <Header/>

                <div className="mainPageContent">
                    <div className="mainPageTitle">
                        Hello there, need to find some job or are you into recruitment? Just choose the mode and go on!
                    </div>
                    <div className="mainPageCat">
                        <Cat size={220} mood="excited" color="#596881" />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;