import React, { useEffect, useState } from 'react';
import AddIcon from '../../assets/icons/AddIcon';
import CheckIcon from '../../assets/icons/CheckIcon';

const FileField = ({id,fnc, accept="image/png, image/jpeg", dvalue = null, multiple=false, children}) => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.files[0].name);
        fnc(e.target.files[0]);
    }
    useEffect(() => {
        if(dvalue){
            setName(dvalue.name);
        }else{
            setName('')
        }
    }, [])
    
    return (
        <div className='sigepec-field__file is--large'>
            {
                multiple ? (
                    <input type="file" id={id} accept=".png, .jpeg, .pdf" onChange={handleChange} multiple />
                ) : (
                    <input type="file" id={id} onChange={handleChange} accept=".png, .jpeg, .pdf" />
                )
            }
            <div className='sigepec-field-file__text'>
                {children}
                {
                    (name) ? (
                        <div className="sigepec-field-file-text__result is--large has--flex">
                            <CheckIcon/> <span>{name} (téléchargé)</span>
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
            <label htmlFor={id} className='sigepec-btn is--secondary'>
                <AddIcon/> Ajouter un fichier
            </label>
        </div>
    );
};

export default FileField;