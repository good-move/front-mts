import React, {Component} from 'react';

import { Select } from 'antd';
import { Spin } from 'antd';
import { Typography } from 'antd';


import './styles.css'
import Header from '../../../Components/Header/header';
import InfoCard from '../../../Components/Card/card';
import axios from '../../../../axios.js';

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

    updateState = () => {
        const {vacancyId} = this.props.match.params;
        const candidatesPromise = axios.post('/api/candidates', [vacancyId]);

        const vacanciesPromise = axios.get('/api/vacancies');
        Promise.all([candidatesPromise, vacanciesPromise]).then(([candidatesData, vacanciesData]) => {
            console.log(candidatesData, vacanciesData);
            const candidates = candidatesData.data;
            const vacancies = vacanciesData.data;

            const activeVacancy = (vacancies.find(vac => vac.id === Number(vacancyId)) || {}).title;

            this.setState({
                isFetching: false,
                activeVacancy,
                employers: candidates,
                vacancies,
            })
        });
    };

    updateEmps = (vacancyId) => {
        const candidates = axios.post('/api/candidates', [vacancyId]).then(data => {
            this.setState({
                isFetching: false,
                employers: data.data,
            })
        });
    };

    componentDidMount() {
        this.updateState();
    }

    handleChange = (value) => {
        this.setState({
            isFetching: true,
        });

        this.props.history.push(`/hr/results/${value}`);
        const activeVacancy = (this.state.vacancies.find(vac => vac.id == value) || {}).title;
        this.setState({
            activeVacancy,
        });

        this.updateEmps(value);
        // this.updateState();
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
                    <h1>{`Вакансия: ${this.state.activeVacancy}`}</h1>
                </div>
                <div className="selectWrapper">
                    <Select defaultValue={this.state.activeVacancy}
                            style={{ width: 350, }}
                            loading={this.state.isFetching}
                            onChange={this.handleChange} >
                        {this.state.vacancies.map(vacancy => (
                            <Option
                                value={vacancy.id}
                                key={vacancy.id}
                            >
                                {vacancy.title}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="infoCardWrapper">
                    {
                        this.state.employers.map(employer => (
                            <InfoCard
                                title={`${employer.first_name} ${employer.last_name}`}
                                rate={employer.probability}
                                skills={employer.inference}
                                additional={employer.required_skills}
                                job={employer.current_position.title}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default HrResultPage;