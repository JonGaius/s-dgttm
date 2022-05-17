import React from 'react';
import { Link } from 'react-router-dom';

const OldFileDariane = ({link, children}) => {
    return (
        <Link to={link} className='sigepec-fil-darianne__ol'>
            {children} /
        </Link>
    );
};

export default OldFileDariane;