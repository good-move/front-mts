import React, { Component } from 'react';
import './component.css';
import Header from '../../Components/Header/header';
import { Input } from 'antd';
import {withRouter} from 'react-router-dom';    

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
        this.props.history.push('/employers/result/666');
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
                            onChange={this.handleInputChange}
                            allowClear
                            onSearch={this.onSearch}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EmployerPage);