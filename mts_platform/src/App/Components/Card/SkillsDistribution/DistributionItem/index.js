import React, {Component} from 'react';

import './styles.css'


class DistributionItem extends Component {
    state = {
        width: 0,
    };

    // componentDidMount() {
    //     const grade = ((this.props.weight || 0.66) * 100).toFixed();
    //
    //     this.setState({
    //         width: grade,
    //     });
    // }

    render() {

        const {
            skill = 'Excel', weight = 0.66
        } = this.props;
        const grade = (weight * 100).toFixed();

        return (
            <div className="distribWrapper">
                <div className="dataWrapper">
                    <span>{`${skill}: `}</span>
                    <span>{`${grade}%`}</span>
                </div>
                <div className="outer" onClick={() => this.setState({
                    width: 0.9,
                })}>
                    <div className="inner" style={{width: `${grade}%`}} ></div>
                    {/*<div className="inner" ></div>*/}

                </div>
            </div>
        );
    }
}

export default DistributionItem;
