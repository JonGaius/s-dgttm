import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import OptionIcon from '../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import QuestionnaireLayout from '../QuestionnaireLayout';

const Formation = ({title}) => {
    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const [formations, setFormations] = useState([
        {
            id: 1,
            slug: 'slug-1',
            nquestion: 'Formation-1',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 2,
            slug: 'slug-2',
            nquestion: 'Formation-2',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 3,
            slug: 'slug-3',
            nquestion: 'Formation-2',
            category: 'Categorie 1',
            etat: 1,
        },
        {
            id: 4,
            slug: 'slug-4',
            nquestion: 'Formation-2',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 5,
            slug: 'slug-5',
            nquestion: 'Formation-2',
            category: 'Categorie 1',
            etat: 1,
        },
        {
            id: 6,
            slug: 'slug-6',
            nquestion: 'Formation-2',
            category: 'Categorie 1',
            etat: 1,
        },
    ])
    return (
       
        <QuestionnaireLayout title={title} here='formation'>
            <FileDarianne actuel={'Gestion des formations'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations'}>
                    Gestion des formations et questionnaires
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des formations</h2>
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
                        <Link to={'/gestion-des-questionnaires-et-formations/formations/creer'} className='sigepec-btn is--primary'>
                            <AddIcon/>  <span>Ajouter une formation</span>
                        </Link>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--auto1'>
                                <strong>N. Questionnaire</strong>
                            </div>
                            <div className='sigepec-table__column is--auto1'>
                                <strong>Catégorie</strong>
                            </div>
                            <div className='sigepec-table__column is--auto1'>
                                <strong>Etat</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            formations.map((formation) => (
                                <div className='sigepec-table__body' key={formation.id}>
                                    <div className='sigepec-table__column is--little'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <Link to={`/gestion-des-questionnaires-et-formations/formation/${formation.slug}`}>{formation.nquestion}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <span className='sigepec-tag'>{formation.category}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <span>
                                        {
                                            formation.etat ? (
                                                <span className='sigepec-tag is--error'>
                                                    Inactif
                                                </span>
                                            ) : (
                                                <span className='sigepec-tag is--success'>
                                                    Actif
                                                </span> 
                                            )
                                        }
                                        </span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(formation.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={formation.slug}>
                                            <Link to={`/gestion-des-questionnaires-et-formations/formation/modifier/${formation.slug}`}>
                                                Modifier
                                            </Link>
                                            <button type='button'>
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </QuestionnaireLayout>
    );
};

export default Formation;