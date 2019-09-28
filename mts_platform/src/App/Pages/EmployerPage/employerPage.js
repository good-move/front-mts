import React, { Component } from 'react';
import './component.css';
import Header from '../../Components/Header/header';
import { Input } from 'antd';

const { Search } = Input;

class EmployerPage extends Component {
    render() {
        return (
            <div className="employerPage">
                <Header/>
                <div className="employerPageContent">
                    <div className="employerPageContent__search">
                        <Search
                            placeholder="Type to find job offers"
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployerPage;