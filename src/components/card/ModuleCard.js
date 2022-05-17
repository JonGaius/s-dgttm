import React from 'react';
import { Link } from 'react-router-dom';

const ModuleCard = ({children, link}) => {
    return (
        <Link to={link} className='sigepec-card__module is--large'>
            {children}
        </Link>
    );
};

export default ModuleCard;