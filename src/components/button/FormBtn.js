import React from 'react';

const FormBtn = ({type, style, children}) => {
    return (
        <button type={type} className={`sigepec-btn ${style}`}>
            {children}
        </button>
    );
};

export default FormBtn;