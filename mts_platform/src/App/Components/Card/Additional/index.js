import React, {Component} from 'react';
import AdditionalItem from './AdditionalItem';

import './styles.css';

class AdditionalSkills extends Component {
    render() {
        return (
            <div>
                <h4>Навыки для развития:</h4>
                <div className="AdditionalWrapper">
                    {
                        this.props.additional.map(item => <AdditionalItem text={item.title} />)
                    }
                </div>
            </div>
        );
    }
}

export default AdditionalSkills;