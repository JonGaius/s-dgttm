import React from 'react';
import CheckIcon from '../../assets/icons/CheckIcon';

const FilePreview = ({dvaleur, children}) => {
    
    return (
        <>
            <div className='sigepec-module-add-file__box is--large has--flex_between'>
                <div className='sigepec-module-add-file__text'>
                    {children}
                    {
                        (dvaleur.name) ? (
                            <div className="sigepec-module-add-file-text__result is--large has--flex">
                                <CheckIcon/> <span>{dvaleur.name} (téléchargé)</span>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
                
            </div>
           
        </>
    );
};

export default FilePreview;