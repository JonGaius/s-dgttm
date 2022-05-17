import React from 'react';
import FileDarianne from '../../../../components/card/FileDarianne';
import ModuleCard from '../../../../components/card/ModuleCard';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import DossierLayout from '../DossierLayout';

const DossierHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const lists = [
        {
            name: 'Dossier de nouveaux permis',
            link: 'nouveaux-permis'
        },
        {
            name: 'Dossier d\'extension',
            link: 'extensions'
        },
        {
            name: 'Dossier de conversions',
            link: 'conversions'
        },
        {
            name: 'Dossier de permis internationaux',
            link: 'permis-internationaux'
        },
        {
            name: 'Dossier de remplacement',
            link: 'remplacement'
        },
        {
            name: 'Dossier des échanges',
            link: 'echange'
        },
        {
            name: 'Dossier de duplicata',
            link: 'duplicata'
        },
        {
            name: 'Dossier de duplicata idCard',
            link: 'duplicata-idcard'
        },
        {
            name: 'Dossier de remplacement idCard',
            link: 'remplacement-idcard'
        },
        {
            name: 'Dossier de plaintes',
            link: 'plaintes'
        },
    ]
    return (
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Gestion des Dossiers'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-dossier-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-dossiers/${list.link}`}>
                                <span>{list.name}</span>
                            </ModuleCard>
                        </div>
                    ))
                }
            </div>
        </DossierLayout>
    );
};

export default DossierHome;