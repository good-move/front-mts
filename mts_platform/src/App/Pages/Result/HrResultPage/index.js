import React, {Component} from 'react';

import { Select } from 'antd';
import { Spin } from 'antd';

import './styles.css'

const { Option } = Select;


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
                <div className="spinWrapper" >
                    <Spin />
                </div>
            );
        }

        if (this.state.employers.length === 0 || this.state.vacancies.length === 0) {
            return <NoEmployers/>
        }

        return (
            <div>
                <h1>{this.state.activeVacancy}</h1>
                <Select defaultValue={this.state.activeVacancy} style={{ width: 350, }} loading={this.state.isFetching} onChange={this.handleChange}>
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
        );
    }
}

export default HrResultPage;