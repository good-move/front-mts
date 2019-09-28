import React from 'react';
import DistributionItem from './DistributionItem';

const SkillsDistribution = ({skillsDistribution}) => {
    return (
        <div style={{paddingRight: 50}}>
            <h4>Весовое распределение навыков:</h4>
            {
                skillsDistribution.map(distribution => <DistributionItem {...distribution} />)
            }
        </div>
    );
};

export default SkillsDistribution;
