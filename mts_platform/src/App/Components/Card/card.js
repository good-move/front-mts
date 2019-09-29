import React, {Component} from 'react';
import {Button} from 'antd';
import './component.css'
import SkillsDistribution from './SkillsDistribution';
import AdditionalSkills from './Additional';
import { thisExpression } from '@babel/types';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailVisible: false,
            isPhoneVisible: false
        }
    }

    handleEmailButtonClick = () => {
        this.setState({isEmailVisible: true}, () => this.setState({isPhoneVisible: false}))
    };

    handlePhoneButtonClick = () => {
        this.setState({isPhoneVisible: true}, () => this.setState({isEmailVisible: false}))
    };

    render() {
        const {title, rate, skills, additional, job} = this.props;
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
                        <h4 style={{marginRight: 10}}>Вероятность соответствия позиции: </h4>
                    </div>
                    <span className="CardTag">{`${rate} %`}</span>
                </div>
                <SkillsDistribution skillsDistribution={skills}/>
                <AdditionalSkills additional={additional}/>
                {
                    job && <div>
                        <Button onClick={this.handleEmailButtonClick} style={{marginTop: '25px', background: '#e30613', border: '5px solid #e30613'}} icon='mail' type="primary" shape="circle"/>
                    <Button onClick={this.handlePhoneButtonClick} style={{marginTop: '25px', marginLeft: '10px', background: '#e30613', border: '5px solid #e30613'}} icon='phone' type="primary" shape="circle"/>
                    <div className="contacts">
                    {
                        this.state.isEmailVisible && <div>disper@gmail.com</div>
                    }
                    {
                        this.state.isPhoneVisible && <div>+7(932)283-38-28</div>
                    }
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default InfoCard;