import React from 'react';
import FileDarianne from '../../components/card/FileDarianne';
import OldFileDariane from '../../components/card/OldFileDariane';
import MainLayout from '../../components/layout/main/MainLayout';

const PageNotFoundPage = ({title}) => {
    document.querySelector('title').innerHTML = title + " | SIGEPEC"
    return (
        
        <MainLayout>
            <FileDarianne actuel={'Page d\'erreur'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-home is--large'>
                <div className='sigepec-home__title'>
                    <h1>Bonjour Jannie DOE</h1>
                </div>
                <div className='sigepec-error__msg'>
                    <h1>
                        Cette page n'est pas encore disponible ou n'existe pas...
                    </h1>
                </div>
            </section>
        </MainLayout>
    );
};

export default PageNotFoundPage;