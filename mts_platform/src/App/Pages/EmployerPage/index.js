import React, { Component } from 'react';
import './component.css';
import Header from '../../Components/Header/header';
import { Select, Button } from 'antd';
import {withRouter} from 'react-router-dom'; 
import axios from 'axios';   

const { Option } = Select;

class EmployerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: '',
            isListVisible: false,
            data: [],
            currentId: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get('/api/employees')
            .then((response) => {
                this.setState({data: response.data})
            })
            .catch((e) => console.log(e))
    }

    onChange = (value) => {
        this.setState({currentId: value})
    }
      
    onBlur() {
    }
      
    onFocus() {
    }
      
    onSearch(val) {
    }
    
    handleClick = () => {
        this.props.history.push(`/employers/result/${this.state.currentId}`)
    };

    render() {
        const {data} = this.state;

        return (
            <div className="employerPage">
                <Header/>
                <div className="employerPageContent">
                    <div className="employerPageContent__search">
                    <Select
                        showSearch
                        style={{ width: 400 }}
                        placeholder="Type your name"
                        optionFilterProp="children"
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onSearch={this.onSearch}
                        filterOption={(input, option) =>
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            data && data.map(item => {
                                const name = `${item.first_name} ${item.last_name}`;
                                return (<Option value={item.id}>{name}</Option>)
                            })
                        }
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