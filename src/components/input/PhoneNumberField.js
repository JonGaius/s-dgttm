import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
const PhoneNumberField = ({id, label, type,value, fnc,tooltip,facultatif = false, children}) => {
    const handleChange = (e) => {
        fnc(e.target.value)
    }
    return (
        <div className='sigepec-textfield__normal is--large'>
            <div className='sigepec-textfield-normal is--large has--flex_between'>
                <label htmlFor={id}>{label}</label>
                <div className='sigepec-textfield-normal__tooltip'>
                    <button type='button'>
                        <div className='icon'></div>
                    </button>
                    <div className='sigepec-textfield-normal-tooltip__container'>
                        {
                            facultatif ? (
                                <p>{tooltip}</p>
                            ) : (
                                <p>
                                    Ce champs est requis <br />
                                    {tooltip}
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* {
                facultatif ? (
                    <input type={type} defaultValue={value} placeholder={children} id={id} onChange={handleChange}/>
                ) : (
                    <input type={type} defaultValue={value}  placeholder={children} id={id} onChange={handleChange} required/>
                )
            } */}
            <PhoneInput
                placeholder={children}
                value={value}
                onChange={fnc}/>
        </div>
    );
};

export default PhoneNumberField;