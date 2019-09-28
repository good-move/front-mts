import React, { Component } from 'react';
import './component.css';
import Header from '../../Components/Header/header';
import { Select, Button } from 'antd';
import {withRouter} from 'react-router-dom';    

const { Option } = Select;


class EmployerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            isListVisible: false
        };
    }

    onChange(value) {
        console.log(`selected ${value}`);
    }
      
    onBlur() {
        console.log('blur');
    }
      
    onFocus() {
        console.log('focus');
    }
      
    onSearch(val) {
        console.log('search:', val);
    }
    
    handleClick = () => {
        this.props.history.push('/employers/result/666')
    };

    render() {
        return (
            <div className="employerPage">
                <Header/>
                <div className="employerPageContent">
                    <div className="employerPageContent__search">
                    <Select
                        showSearch
                        style={{ width: 400 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Hunt Vue</Option>
                        <Option value="jack">Burke Alison</Option>
                        <Option value="jack">Berry Mary</Option>
                        <Option value="jack">Abbott Lily</Option>
                    </Select>
                    <div className="submitButton">
                        <Button type="primary" icon="search" onClick={this.handleClick}>
                            Search
                        </Button>
                    </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EmployerPage);