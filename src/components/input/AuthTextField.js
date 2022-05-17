import React from 'react';

const AuthTextField = ({type,fnc, children}) => {

    const handleChange = (e) => {
        fnc(e.target.value);
    }

    return (
        <div className='sigepec-textfield__auth is--large'>
            <input type={type} className='sigepec-textfield-auth__input is--large' onChange={handleChange} defaultValue="" required/>
            <label>
                {children}
            </label>
        </div>
    );
};

export default AuthTextField;