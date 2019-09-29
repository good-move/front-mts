import React, { Component } from 'react';
import Header from '../../../Components/Header/header';
import InfoCard from '../../../Components/Card/card';
import './component.css';
import axios from 'axios';

class EmployerResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: '',
            data: [],
            suggestions: []
        };
    }

    componentDidMount() {
        const arr = this.props.location.pathname.split('/');
        this.setState({currentId: arr[arr.length - 1]}, () => {
            axios.get('/api/employees')
                .then(res => {
                    this.setState({data: res.data})
                })
                .catch(e => console.log(e))

            axios.get(`/api/employees/${this.state.currentId}/suggestions`)
                .then(res => {
                    this.setState({suggestions: res.data.inference})
                })
                .catch(e => console.log(e))
        });

    }

    render() {
        const {data, currentId, suggestions} = this.state;
        const name = data[currentId] !== undefined ? data[currentId].first_name : '';
        const surname = data[currentId] !== undefined ? data[currentId].last_name : '';
        
        return (
            <div className="employerResultPage">
                <Header/>
                <div className="employerResultPageContent">
                    <div className="employerResultPageContent-name">
                        {name + ' ' + surname}
                    </div>
                    {
                        suggestions.map(item => {
                            return (
                                <InfoCard
                                    title={item.title}
                                    additional={item.required_skills}
                                    skills={item.inference}
                                    rate='0.6'
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default EmployerResultPage;