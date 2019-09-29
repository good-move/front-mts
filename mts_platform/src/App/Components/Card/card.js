import React, { Component } from 'react';
import { Card, Tag } from 'antd';
import './component.css'
import SkillsDistribution from './SkillsDistribution';
import AdditionalSkills from './Additional';

class InfoCard extends Component {
    render() {
        const { title, rate, skills, additional } = this.props;
        const indexRateColor = rate > 0.8 ? 'green' : rate > 0.4 ? 'yellow' : 'red';
        return (
            <div className="card">
                <Card title={title} style={{ width: 450, height:"100%"}}>
                    <div className="cardRate" style={{marginBottom: 10}}>
                        <div className="cardItemTitle">
                            <h4 style={{marginRight: 10}}>Вероятность соответствия к позиции: </h4>
                        </div>
                        <Tag color={indexRateColor}>{`${rate} %`}</Tag>
                    </div>
                    <SkillsDistribution skillsDistribution={skills} />
                    <AdditionalSkills additional={additional}/>
                </Card>
            </div>
        );
    }
}

export default InfoCard;