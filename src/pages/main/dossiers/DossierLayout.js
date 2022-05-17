import React from 'react';
import { Link } from 'react-router-dom';
import CancelIcon from '../../../assets/icons/CancelIcon';
import ModuleCard from '../../../components/card/ModuleCard';
import MainLayout from '../../../components/layout/main/MainLayout';

const DossierLayout = ({here, children}) => {
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
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    return (
        <MainLayout>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des dossiers</h1>
                    <ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item ${(here === 'list') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-dossiers'}>
                                Liste des dossiers
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'add') ? 'is--active' : ''}`} >
                            <button type='button' onClick={() => {activeModal('choice-type-file')}}>
                                Ajouter un dossier
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'validation') ? 'is--active' : ''}`}>
                            <button type='button' onClick={() => {activeModal('validation-type-file')}}>
                                Validation des dossiers
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'valide') ? 'is--active' : ''}`}>
                            <button type='button' onClick={() => {activeModal('valides-type-file')}}>
                                Dossiers validés
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'bordereaux') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-dossiers/'}>
                                Les bordereaux et les archives
                            </Link>
                        </li>
                    </ul>
                </div>
                {children}
            </section>
            <div className='sigepec-modal' id='choice-type-file'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <strong>
                            Ajout d'un nouveau dossier
                        </strong>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('choice-type-file')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <h1>Choisissez le type de dossier</h1>
                    <div className='sigepec-modal__body sigepec-module-dossier-accueil has--flex_center has--wrap is--large'>
                    {
                        lists.map(list => (
                            <div className='sigepec-module-dossier-accueil__item' key={list.name}>
                                <ModuleCard link={`/gestion-des-dossiers/creer/${list.link}`}>
                                    <span>{list.name}</span>
                                </ModuleCard>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='validation-type-file'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <strong>
                            Validation des dossiers
                        </strong>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('validation-type-file')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <h1>Choisissez le type de dossier</h1>
                    <div className='sigepec-modal__body sigepec-module-dossier-accueil has--flex_center has--wrap is--large'>
                    {
                        lists.map(list => (
                            <div className='sigepec-module-dossier-accueil__item' key={list.name}>
                                <ModuleCard link={`/gestion-des-dossiers/validation-de-dossier/${list.link}`}>
                                    <span>{list.name}</span>
                                </ModuleCard>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='valides-type-file'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <strong>
                            Validation des dossiers
                        </strong>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('valides-type-file')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <h1>Choisissez le type de dossier</h1>
                    <div className='sigepec-modal__body sigepec-module-dossier-accueil has--flex_center has--wrap is--large'>
                    {
                        lists.map(list => (
                            <div className='sigepec-module-dossier-accueil__item' key={list.name}>
                                <ModuleCard link={`/gestion-des-dossiers/dossiers-valides/${list.link}`}>
                                    <span>{list.name}</span>
                                </ModuleCard>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default DossierLayout;