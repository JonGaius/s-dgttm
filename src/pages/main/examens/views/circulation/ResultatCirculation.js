import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import SelectField from '../../../../../components/input/SelectField';
import ExamenLayout from '../../ExamenLayout';

const ResultatCirculation = ({title}) => {
    let navigate = useNavigate();
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    const optionExamen = [
        {
            value: 'program-1',
            label: 'Examen Code Français du 01/12/2020',
        },
        {
            value: 'program-2',
            label: 'Examen Creneaux Moore du 12/11/2020',
        },
        {
            value: 'program-3',
            label: 'Examen Circulation Foufouldé du 11/12/2020',
        },
        {
            value: 'program-4',
            label: 'Examen Code Douala du 12/12/2020',
        },
       
    ];

    const [exam, setExam] = useState('');

    const changeExamen = (val) => {
        setExam(val)
    }
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            slug: 'resultat-6',
            exam: 'examen-6',
            effectif: 10,
            admis: 9,
        },
        {
            id: 2,
            slug: 'resultat-8',
            exam: 'examen-8',
            effectif: 5,
            admis: 3,
        },
        {
            id: 3,
            slug: 'resultat-10',
            exam: 'examen-10',
            effectif: 15,
            admis: 9,
        },
        {
            id: 4,
            slug: 'resultat-7',
            exam: 'examen-9',
            effectif: 14,
            admis: 10,
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(exam){
            navigate('/gestion-des-examens/resultats/creer', {
                state: {
                    examen: exam
                }
            });
        }else{
            console.log('error')
        }
    }
    return (
        
        <ExamenLayout title={title} here={'resultat'}>
            <FileDarianne actuel={'Circulation'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens/resultats'}>
                    Gestion des résultats
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des résultats - Circulation</h2>
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
                        <button type='button' className='sigepec-btn is--primary' onClick={() => {activeModal('add-modal')}}>
                            <AddIcon/>  <span>Saisir un resultat</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--auto'>
                                <strong>Examen</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Effectif total</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Admis</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Type de l'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            tableElement.map((element) => (
                                <div className='sigepec-table__body' key={element.id}>
                                    <div className='sigepec-table__column is--little'>
                                        {element.id}
                                    </div>
                                    <div className='sigepec-table__column is--auto'>
                                        <Link to={`/gestion-des-examens/resultats/apercu/${element.slug}`}>{element.exam}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                       <span>{element.effectif} </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.admis}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span className='sigepec-tag is--warning'>Circulation</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <button type='button'>
                                                Modifier
                                            </button>
                                            <button type='button'>
                                                Valider
                                            </button>
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
            <div className='sigepec-modal' id='add-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('add-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <form className='is--large' onSubmit={handleSubmit}>
                            <h2>Choisir l'examen concerné</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'examen'} dvalue={exam} label={'Choix de l\'examen'} options={optionExamen} tooltip={'Choisir le lieu de l\'examen'} fnc={changeExamen}>
                                    Choisir l'examen
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                    Continuer
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default ResultatCirculation;