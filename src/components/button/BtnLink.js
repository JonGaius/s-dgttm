import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = ({link, style, children}) => {
    return (
        <Link to={link} className={`sigepec-btn ${style}`}>
            {children}
        </Link>
    );
};

export default BtnLink;