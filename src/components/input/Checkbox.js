import React from 'react';

const Checkbox = ({id,style, dvalue,fnc, children}) => {
    return (
        <div className={`sigepec-checkbox ${style}`}>
            <input type="checkbox" id={id} required/>
            <label htmlFor={id}>
                <span className='sigepec-checkbox__icon'></span>
                <span>{children}</span>
            </label>
        </div>
    );
};

export default Checkbox;
