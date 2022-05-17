import React from 'react';

const StepCard = ({type, children}) => {
    return (
        <div className={`sigepec-module-dossier-add-step__item ${type}`}>
            {children}
        </div>
    );
};

export default StepCard;