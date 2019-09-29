import React, {Component} from 'react';

import { Select } from 'antd';
import { Spin } from 'antd';
import { Typography } from 'antd';


import './styles.css'
import Header from '../../../Components/Header/header';
import InfoCard from '../../../Components/Card/card';

const { Option } = Select;
const {Title} = Typography;


const NoEmployers = () => {
    return (
        <div>
            <h2>Sorry, no employers were not found</h2>
        </div>
    )
};

class HrResultPage extends Component {
    state = {
        isFetching: true,
        activeVacancy: '',
        employers: [],
        vacancies: [],
    };

    componentDidMount() {
        const {vacancyId} = this.props.match.params;

        setTimeout(() => {
            this.setState({
                activeVacancy: vacancyId,
            })
        }, 500);

        setTimeout(() => {
            this.setState({
                vacancies: ['Аналитик', 'Тестировщик','Менеджер', 'Дизайнер','Аналк', 'Тестировщиааак', 'Тесщик','Аналтик','Аналdasdasdadитик'],
            })
        }, 2000);

        setTimeout(() => {
            this.setState({
                employers: [{
                    firstName: 'Kek',
                    lastName: 'Cheburek',
                    rate: 0.87,
                    skills: [{
                        skill: 'Программирование',
                        weight: 0.1,
                    }, {
                        skill: 'Дизайн',
                        weight: 0.42,
                    },{
                        skill: 'Пинание балды',
                        weight: 0.65,
                    },{
                        skill: 'Кулинария',
                        weight: 0.99,
                    }, {
                        skill: 'Agile',
                        weight: 0.65,
                    }]
                }, {
                    firstName: 'Lol',
                    lastName: 'Lolita',
                    rate: 0.27,
                    skills: [{
                        skill: 'SQL',
                        weight: 0.3,
                    }, {
                        skill: 'Ответсвенность',
                        weight: 0.52,
                    },{
                        skill: 'Agile',
                        weight: 0.15,
                    }]
                }],
            })
        }, 1000);

        setTimeout(() => {
            this.setState({
                isFetching: false,
            })
        }, 2500);
    }

    handleChange = (value) => {
        this.props.history.push(`/hr/results/${value}`);
        this.setState({
            activeVacancy: value,
            isFetching: true,
        });

        setTimeout(() => {
            this.setState({
                isFetching: false,
            })
        }, 500);
    };

    render() {
        if (this.state.isFetching) {
            return (
                <div>
                    <Header/>
                    <div className="spinWrapper" >
                        <Spin />
                    </div>
                </div>
            );
        }

        if (this.state.employers.length === 0 || this.state.vacancies.length === 0) {
            return (
                <div>
                    <Header/>
                    <NoEmployers/>
                </div>
            )
        }

        return (
            <div>
                <Header/>
                <div className="hrResultHeader">
                    <Title>{this.state.activeVacancy}</Title>
                </div>
                <div className="selectWrapper">
                    <Select defaultValue={this.state.activeVacancy}
                            style={{ width: 350, }}
                            loading={this.state.isFetching}
                            onChange={this.handleChange} >
                        {this.state.vacancies.map(vacancy => (
                            <Option
                                value={vacancy}
                                key={vacancy}
                            >
                                {vacancy}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="infoCardWrapper">
                    {
                        this.state.employers.map(employer => (
                            <InfoCard
                                title={`${employer.firstName} ${employer.lastName}`}
                                rate={employer.rate}
                                skills={employer.skills}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default HrResultPage;