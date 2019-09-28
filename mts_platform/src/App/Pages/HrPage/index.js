import React, {Component} from 'react';
import VacanciesList from '../../Components/VacanciesList';
import { PageHeader } from 'antd';

import './styles.css';

class HrPage extends Component {
    onBackHandler = () => {
        console.log('Handleeer');
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <PageHeader onBack={this.onBackHandler} title="HR mode" subTitle="Поиск релевантных сотрудников" />
                <div className="vacListWrapper__center">
                    <div className='vacListWrapper'>
                        <h1>Find employers matching give vacancies</h1>
                        <VacanciesList />
                    </div>
                </div>
            </div>
        );
    }
}

export default HrPage;
