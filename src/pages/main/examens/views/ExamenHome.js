import React from 'react';
import FileDarianne from '../../../../components/card/FileDarianne';
import ModuleCard from '../../../../components/card/ModuleCard';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import ExamenLayout from '../ExamenLayout';

const ExamenHome = ({title}) => {

    const lists = [
        {
            name: 'Les programmations',
            link: 'programmations'
        },
        {
            name: 'Résultats',
            link: 'resultats'
        },
        {
            name: 'Sujets',
            link: 'sujets'
        }
    ]

    return (
        <ExamenLayout title={title} here={'home'}>
            <FileDarianne actuel={'Gestion des Examens'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-exam-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-examens/${list.link}`}>
                                <span>{list.name}</span>
                            </ModuleCard>
                        </div>
                    ))
                }
            </div>
        </ExamenLayout>
    );
};

export default ExamenHome;