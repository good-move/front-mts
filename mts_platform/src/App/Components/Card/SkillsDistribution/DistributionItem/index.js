import React, {Component} from 'react';

import './styles.css'


class DistributionItem extends Component {
    state = {
        width: 0,
    };

    render() {

        const {
            name, weight,
        } = this.props;
        const grade = (weight * 100).toFixed();

        return (
            <div className="distribWrapper">
                <div className="dataWrapper">
                    <span>{`${name}: `}</span>
                    <span style={{fontWeight: 'bold'}}>{`${grade}%`}</span>
                </div>
                <div className="outer" onClick={() => this.setState({
                    width: 0.9,
                })}>
                    <div className="inner" style={{width: `${grade}%`}} ></div>
                </div>
            </div>
        );
    }
}

export default DistributionItem;
