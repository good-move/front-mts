import React, {Component} from 'react';
import {Card, Tag} from 'antd';
import './component.css'
import SkillsDistribution from './SkillsDistribution';
import AdditionalSkills from './Additional';

class InfoCard extends Component {
    render() {
        const {title, rate, skills, additional, job} = this.props;
        console.log(additional)
        const indexRateColor = rate > 0.8 ? 'green' : rate > 0.4 ? 'yellow' : 'red';
        return (
            <div className="card">
                <h3 style={{marginBottom: 0}}>{title}</h3>
                {
                    job &&
                        <div className="cardLabel">{job}</div>
                }
                <div className="cardRate" style={{marginBottom: 10}}>
                    <div className="cardItemTitle">
                        <h4 style={{marginRight: 10}}>Вероятность соответствия к позиции: </h4>
                    </div>
                    <span className="CardTag">{`${rate} %`}</span>
                </div>
                <SkillsDistribution skillsDistribution={skills}/>
                <AdditionalSkills additional={additional}/>
            </div>
        );
    }
}

export default InfoCard;