import React from 'react';
import FileDarianne from '../../../components/card/FileDarianne';
import ModuleCard from '../../../components/card/ModuleCard';
import OldFileDariane from '../../../components/card/OldFileDariane';
import AutoEcoleLayout from './AutoEcoleLayout';

const AutoEcoleHome = ({title}) => {
    const lists = [
        {
            name: 'Licences',
            link: 'licences'
        },
        {
            name: 'Agréments',
            link: 'agrements'
        },
        {
            name: 'Auto-Ecoles',
            link: 'vtm'
        }
    ]

    return (
        
        <AutoEcoleLayout title={title} here={'home'}>
             <FileDarianne actuel={'Gestion des auto-écoles'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-exam-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-autoecoles/${list.link}`}>
                                <span>{list.name}</span>
                            </ModuleCard>
                        </div>
                    ))
                }
            </div>
        </AutoEcoleLayout>
    );
};

export default AutoEcoleHome;