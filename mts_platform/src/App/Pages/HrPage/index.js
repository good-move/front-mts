import React, {Component} from 'react';
import VacanciesList from '../../Components/VacanciesList';
import { Typography } from 'antd';

import { PageHeader } from 'antd';

import './styles.css';

const { Text, Title } = Typography;


class HrPage extends Component {
    onBackHandler = () => {
        console.log('Handleeer');
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <PageHeader onBack={this.onBackHandler} title="HR mode" subTitle="Поиск сотрудников, наиболее подходящих для открытых вакансий" />
                <div className="vacListWrapper__center">
                    <div className='vacListWrapper'>
                            <Title>
                                Find employers best matching to opened vacancies
                            </Title>
                        <VacanciesList />
                    </div>
                </div>
            </div>
        );
    }
}

export default HrPage;
