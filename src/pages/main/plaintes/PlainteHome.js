import React from 'react';
import AddIcon from '../../../assets/icons/AddIcon';
import SearcIcon from '../../../assets/icons/SearcIcon';
import SortIcon from '../../../assets/icons/SortIcon';
import FileDarianne from '../../../components/card/FileDarianne';
import OldFileDariane from '../../../components/card/OldFileDariane';
import MainLayout from '../../../components/layout/main/MainLayout';

const PlainteHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    return (
        <MainLayout>
            <FileDarianne actuel={'Gestion des plaintes'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h1>Gestion des plaintes</h1>
                    <div className='sigepec-module-dossier-list__actions has--flex'>
                        <div className='sigepec-module-dossier-list__search is--large has--flex_between'>
                            <label htmlFor="search-list">
                                <SearcIcon/>
                            </label>
                            <input type="search" id="search-list" placeholder='Chercher...' />
                            <button type='button' className='sigepec-module-dossier-list-search__option'>
                                <SortIcon/>
                            </button>
                        </div>
                        <button className='sigepec-btn is--primary'>
                            <AddIcon/> <span>Ajouter une plainte</span>
                        </button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default PlainteHome;