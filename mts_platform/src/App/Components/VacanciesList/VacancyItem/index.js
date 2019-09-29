import React from 'react';


import './styles.css';

const VacancyItem = ({name, onClick}) => {
    return (
        <div className="vacancyButton">
            <button onClick={onClick} size="large">{name}</button>
        </div>
    );
};

export default VacancyItem;
