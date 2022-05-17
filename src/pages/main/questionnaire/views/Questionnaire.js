import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import OptionIcon from '../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import QuestionnaireLayout from '../QuestionnaireLayout';

const Questionnaire = ({title}) => {
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
    const [quetions, setQuestions] = useState([
        {
            id: 1,
            slug: 'slug-1',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 2,
            slug: 'slug-2',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 3,
            slug: 'slug-3',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 1,
        },
        {
            id: 4,
            slug: 'slug-4',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 0,
        },
        {
            id: 5,
            slug: 'slug-5',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 1,
        },
        {
            id: 6,
            slug: 'slug-6',
            nquestion: 'Question2',
            category: 'Categorie 1',
            etat: 1,
        },
    ])
    

    return (
        <QuestionnaireLayout title={title} here='question'>
            <FileDarianne actuel={'Gestion des questionnaires'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-questionnaires-et-formations'}>
                    Gestion des formations et questionnaires
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des questionnaires</h2>
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
                        <button type='button' className='sigepec-btn is--secondary'>
                             <span>Associer</span>
                        </button>
                        <Link to={'/gestion-des-questionnaires-et-formations/questionnaires/creer'} className='sigepec-btn is--primary'>
                            <AddIcon/>  <span>Ajouter une question</span>
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
                                <strong>N. Formation</strong>
                            </div>
                            <div className='sigepec-table__column is--auto1'>
                                <strong>Tags</strong>
                            </div>
                            <div className='sigepec-table__column is--auto1'>
                                <strong>Etat</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            quetions.map((question) => (
                                <div className='sigepec-table__body' key={question.id}>
                                    <div className='sigepec-table__column is--little'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <Link to={`/gestion-des-questionnaires-et-formations/questionnaire/${question.slug}`}>{question.nquestion}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <span>{question.category}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto1'>
                                        <span>
                                        {
                                            question.etat ? (
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
                                        <button type='button' onClick={() => {appear(question.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={question.slug}>
                                            <Link to={`/gestion-des-questionnaires-et-formations/questionnaire/modifier/${question.slug}`}>
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

export default Questionnaire;