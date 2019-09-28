import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import VacancyItem from './VacancyItem';

import './styles.css'

class VacanciesList extends Component {
    state = {
        vacancies: ['Аналитик', 'Тестировщик','Менеджер', 'Дизайнер','Аналк', 'Тестировщиааак', 'Тесщик','Аналтик','Аналdasdasdadитик'],
    };

    onVacancyClickHandler = (id) => {
        this.props.history.push(`/hr/results/${id}`);
    };

    render() {
        return (
            <div className="vacancyList">
                {this.state.vacancies.map(vac => (
                    <VacancyItem
                        key={vac}
                        name={vac}
                        onClick={() => this.onVacancyClickHandler("someId")}
                    />
                ))}
            </div>
        );
    }
}

export default withRouter(VacanciesList);