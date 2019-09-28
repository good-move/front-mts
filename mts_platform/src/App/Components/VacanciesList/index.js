import React, {Component} from 'react';

import VacancyItem from './VacancyItem';
import './styles.css'

class VacanciesList extends Component {
    state = {
        vacancies: ['Аналитик', 'Тестировщик','Менеджер', 'Дизайнер','Аналк', 'Тестировщиааак', 'Тесщик','Аналтик','Аналdasdasdadитик'],
    };

    render() {
        return (
            <div className="vacancyList">
                {this.state.vacancies.map(vac => <VacancyItem name={vac} onClick={null}/>)}
            </div>
        );
    }
}

export default VacanciesList;