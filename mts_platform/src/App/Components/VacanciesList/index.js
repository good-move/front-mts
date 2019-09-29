import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import VacancyItem from './VacancyItem';
import axios from '../../../axios';

import './styles.css'

class VacanciesList extends Component {
    state = {
        vacancies: [],
    };

    onVacancyClickHandler = (id) => {
        this.props.history.push(`/hr/results/${id}`);
    };

    componentDidMount() {
        axios.get('/api/vacancies')
            .then(data => {
                this.setState({
                    vacancies: data.data,
                })
            });
    }

    render() {
        return (
            <div className="vacancyList">
                {this.state.vacancies.map(({id, title}) => (
                    <VacancyItem
                        key={id}
                        name={title}
                        onClick={() => this.onVacancyClickHandler(id)}
                    />
                ))}
            </div>
        );
    }
}

export default withRouter(VacanciesList);