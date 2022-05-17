import React from 'react';
import FileDarianne from '../../../../components/card/FileDarianne';
import ModuleCard from '../../../../components/card/ModuleCard';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import QuestionnaireLayout from '../QuestionnaireLayout';

const House = ({title}) => {
    const lists = [
        {
            name: 'Les questionnaires',
            link: 'questionnaires'
        },
        {
            name: 'Les formations',
            link: 'formations'
        },
        {
            name: 'Les archives',
            link: 'archives'
        }
    ]
    return (
        <QuestionnaireLayout title={title} here={'home'}>
            <FileDarianne actuel={'Gestion des formations et questionnaires'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-exam-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-questionnaires-et-formations/${list.link}`}>
                                <span>{list.name}</span>
                            </ModuleCard>
                        </div>
                    ))
                }
            </div>
        </QuestionnaireLayout>
    );
};

export default House;