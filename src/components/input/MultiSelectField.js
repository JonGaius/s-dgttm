import React from 'react';
import Select from 'react-select';
const MultiSelectField = ({id, label,options, fnc,tooltip,facultatif = false}) => {
    
    // const handleChange = (e) => {
    //     fnc(e.target.value)
    // }
    
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
           
            <Select 
                className='is--large select' 
                isSearchable={true} 
                isMulti 
                isClearable={true} 
                options={options} 
                onChange = {(item) => fnc(item)}
            />

        </div>
    );
};

export default MultiSelectField;