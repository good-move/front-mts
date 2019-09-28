import React, { Component } from 'react';
import Header from '../../../Components/Header/header';
import InfoCard from '../../../Components/Card/card';
import './component.css';

const data = [
    {
        title: 'JavaScript Developer',
        rate: '0.78',
        skills: ['react', 'huyakt', 'js']
    },
    {
        title: 'JavaScript Developer',
        rate: '0.78',
        skills: ['react', 'huyakt', 'js']
    },
    {
        title: 'JavaScript Developer',
        rate: '0.78',
        skills: ['react', 'huyakt', 'js']
    }
];

class EmployerResultPage extends Component {
    render() {
        return (
            <div className="employerResultPage">
                <Header/>
                <div className="employerResultPageContent">
                    <div className="employerResultPageContent-name">
                        Hunt Vue
                    </div>
                    {
                        data.map(item => {
                            return (
                                <InfoCard
                                    title={item.title}
                                    skills={item.skills}
                                    rate={item.rate}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default EmployerResultPage;