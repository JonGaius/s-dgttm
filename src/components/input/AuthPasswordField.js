import React, { useState } from 'react';

const AuthPasswordField = ({fnc, children}) => {
    const [type, setType] = useState('password');
    const handleChange = (e) => {
        fnc(e.target.value);
    }

    const toggleHide = () => {
        if(type === "password"){
            setType('text');
        }else{
            setType('password');
        }
    }

    return (
        <div className='sigepec-textfield__auth is--large'>
            <input type={type} className='sigepec-textfield-auth__input is--large' onChange={handleChange} defaultValue="" required/>
            <label>
                {children}
            </label>
            <button type='button' onClick={toggleHide}>
                {
                    (type === 'password') ? (
                        "Afficher"
                    ) : (
                        "Masquer"
                    )
                }
            </button>
        </div>
    );
};

export default AuthPasswordField;