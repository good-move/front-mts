import React, { Component } from 'react';
import { Card, Tag } from 'antd';
import './component.css'

class InfoCard extends Component {
    render() {
        const { title, rate, skills } = this.props;
        const indexRateColor = rate > 0.8 ? 'green' : rate > 0.4 ? 'yellow' : 'red';
        return (
            <div className="card">
                <Card title={title} style={{ width: 550}}>
                    <p className="cardRate">
                        <div className="cardItemTitle">
                                Rate:
                        </div>
                        <Tag color={indexRateColor}>{rate}</Tag>
                    </p>
                    <div className="cardItemTitle">
                                Skills:
                        </div>
                    {
                        skills.map(item => {
                            return (
                                <div className="cardItemSkill">
                                    <Tag>{item}</Tag>
                                </div>
                            )
                        })
                    }
                </Card>
            </div>
        );
    }
}

export default InfoCard;