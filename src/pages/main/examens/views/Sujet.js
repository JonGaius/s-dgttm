import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import PrintIcon from '../../../../assets/icons/PrintIcon';
import OptionIcon from '../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import NormalTextField from '../../../../components/input/NormalTextField';
import SelectField from '../../../../components/input/SelectField';
import ExamenLayout from '../ExamenLayout';
import ExportIcon from '../../../../assets/icons/ExportIcon';

const Sujet = ({title}) => {
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
    let optionCategorie =[
        {
            value: 'PermisA',
            label: 'Permis A'
        },
        {
            value: 'PermisA1',
            label: 'Permis A1'
        },
        {
            value: 'PermisB',
            label: 'Permis B'
        },
        {
            value: 'PermisB1',
            label: 'Permis B1'
        },
        {
            value: 'PermisC',
            label: 'Permis C'
        },
    ];
    let optionMode =[
        {
            value: 'papier',
            label: 'Sur papier'
        },
        {
            value: 'oral',
            label: 'Orale'
        },
        {
            value: 'telephone',
            label: 'Téléphone'
        },
        {
            value: 'tablette',
            label: 'Tablette'
        },
        {
            value: 'ordinateur',
            label: 'Ordinateur'
        },
    ];
    const [sujets, setSujets] = useState([
        {
            id: 1,
            num: 'Examen-1',
            date: '12/11/2021',
            categorie: 'Permis A',
            mode: 'Tablette',
            slug: 'examen-1',
        },
        {
            id: 2,
            num: 'Examen-2',
            date: '12/10/2020',
            categorie: 'Permis B',
            mode: 'Telephone',
            slug: 'examen-2',
        },
        {
            id: 3,
            num: 'Examen-3',
            date: '13/10/2020',
            categorie: 'Permis C1',
            mode: 'Oral',
            slug: 'examen-3',
        },
        {
            id: 4,
            num: 'Examen-4',
            date: '13/10/2020',
            categorie: 'Permis C1',
            mode: 'Ordinateur',
            slug: 'examen-4',
        },
        {
            id: 5,
            num: 'Examen-5',
            date: '13/05/2020',
            categorie: 'Permis B1',
            mode: 'Sur papier',
            slug: 'examen-5',
        },
    ]);
    const [modeExam, setModeExam] = useState('');
    const [examen, setExamen] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [exam, setExam] = useState('');
    const [mode, setMode] = useState('');
    const [categorie, setCategorie] = useState('');


    const changeCategory = (value) => {
        setCategory(value)
    }
    const changeModeExam = (value) => {
        setModeExam(value)
    }
    const changeExamen = (value) => {
        setExamen(value)
    }

    const showModal = (id, num) => {
        document.getElementById(id).classList.add('is--show');
        // setDate(sujets[num].date);
        // setExam(sujets[num].num);
        // setCategorie(sujets[num].categorie);
        // setMode(sujets[num].mode);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <ExamenLayout title={title} here={'sujet'}>
             <FileDarianne actuel={'Gestion des sujets'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des sujets</h2>
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
                            <AddIcon/>  <span>Générer un sujet</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--auto4'>
                                <strong>Numero Examen</strong>
                            </div>
                            <div className='sigepec-table__column is--auto4'>
                                <strong>Date d'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--auto4'>
                                <strong>Categorie Permis</strong>
                            </div>
                            <div className='sigepec-table__column is--auto4'>
                                <strong>Mode d'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            sujets.map(sujet => (

                                <div className='sigepec-table__body' key={sujet.id}>
                                    <div className='sigepec-table__column is--little'>
                                        <span>{sujet.id}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto4'>
                                        <span>{sujet.num}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto4'>
                                        <span className='sigepec-table-column__special-span' onClick={() => {showModal('show-modal', sujet.id)}}>{sujet.date}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto4'>
                                        <span>{sujet.categorie}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto4'>
                                        <span>{sujet.mode}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(sujet.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={sujet.slug}>
                                            <button type='button'>
                                                Imprimer
                                            </button>
                                            <button type='button'>
                                                Exporter
                                            </button>
                                            <button type='button'>
                                                Valider
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
                            <h2>Générer un sujet</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'examen'} dvalue={examen} label={'Choix de l\'examen'} options={optionExamen} tooltip={'Choisir l\'examen'} fnc={changeExamen}>
                                    Choisir l'examen
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'modeexamen'} dvalue={modeExam} label={'Choix du mode d\'examen'} options={optionMode} tooltip={'Choisir le mode d\'examen'} fnc={changeModeExam}>
                                    Choisir mode d'examen
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'categorie'} dvalue={category} label={'Choix du type de permis'} options={optionCategorie} tooltip={'Choisir le mode d\'examen'} fnc={changeCategory}>
                                    Choisir la type de permis
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                    Générer le sujet
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='show-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('show-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Information du sujet</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Date :</span><strong>{date}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Catégorie du permis :</span><strong>{categorie.value}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Examen :</span><strong>{exam.value}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Mode d'examen :</span><strong>{mode.value}</strong>
                            </div>
                        </div>
                        <h2>Actions</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <PrintIcon/> <span>Imprimer le sujet</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <ExportIcon/> <span>Exporter le sujet</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <CheckIcon/> <span>Valider le sujet</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <TrashIcon/> <span>Supprimer le sujet</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default Sujet;