import React from 'react';

const FileDarianne = ({actuel, children}) => {
    return (
        <div className='sigepec-fil-darianne has--flex'>
            {children} <span>{actuel}</span>
        </div>
    );
};

export default FileDarianne;