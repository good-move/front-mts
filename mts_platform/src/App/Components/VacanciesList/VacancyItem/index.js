import React from 'react';

import { Button} from 'antd';

import './styles.css';

const VacancyItem = ({name, onClick}) => {
    return (
        <div className="vacancyButton">
            <Button onClick={onClick} size="large">{name}</Button>
        </div>
    );
};

export default VacancyItem;
