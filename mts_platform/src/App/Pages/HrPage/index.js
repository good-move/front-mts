import React, {Component} from 'react';
import VacanciesList from '../../Components/VacanciesList';
import { Typography } from 'antd';

import { PageHeader } from 'antd';

import './styles.css';
import Header from '../../Components/Header/header';

const { Text, Title } = Typography;


class HrPage extends Component {
    onBackHandler = () => {
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <Header/>
                <PageHeader onBack={this.onBackHandler} title="HR mode" subTitle="Поиск вакансий, наиболее подходящих сотруднику" />
                <div className="vacListWrapper__center">
                    <div className='vacListWrapper'>
                            <h1>
                                Поиск рекомендованных сотрудников по открытым вакансиям
                            </h1>
                        <VacanciesList />
                    </div>
                </div>
            </div>
        );
    }
}

export default HrPage;
