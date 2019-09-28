import React, { Component } from 'react';
import './component.css';
import Header from '../../Components/Header/header';
import { Input, Dropdown } from 'antd';

const { Search } = Input;
const data = [
    'Alina',
    'Katya',
    'Ivan',
    'Alex'
];

class EmployerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            isListVisible: false
        };
    }

    handleInputChange = (event) => {
        this.setState({currentValue: event.target.value, isListVisible: true}, () => {
            data.forEach(item => {
                if (item.includes(this.state.currentValue) && this.state.currentValue !== '') {
                    console.log(item);
                }
            });
        });
    };

    onSearch = () => {
        console.log('luckySearch');
    };

    render() {
        return (
            <div className="employerPage">
                <Header/>
                <div className="employerPageContent">
                    <div className="employerPageContent__search">
                        <Search
                            placeholder="Type your name to find job offers"
                            enterButton="Search"
                            size="large"
                            onSearch={this.onSearch}
                            onChange={this.handleInputChange}
                            allowClear
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployerPage;