import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../assets/icons/EditIcon';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import OptionIcon from '../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import NormalTextField from '../../../../components/input/NormalTextField';
import AutoEcoleLayout from '../AutoEcoleLayout';

const EcoleHome = ({title}) => {
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            slug: 'ecole-1',
            statut: 1,
            ecole: 'Prestige Ecole',
            region: 'Hauts Bassins',
        },
        {
            id: 2,
            slug: 'ecole-2',
            statut: 1,
            ecole: 'Prestige Ecole Awesome',
            region: 'Kadiogo',
        },
        {
            id: 3,
            slug: 'ecole-3',
            statut: 0,
            ecole: 'Prestige Ecole Awesome',
            region: 'Kadiogo',
        },
        {
            id: 4,
            slug: 'ecole-4',
            statut: 1,
            ecole: 'Prestige Ecole Awesome',
            region: 'Kadiogo',
        },
        {
            id: 5,
            slug: 'ecole-5',
            statut: 1,
            ecole: 'Prestige Ecole Incredible',
            region: 'Kadiogo',
        },
    ]);
    const [ecole, setEcole] = useState('');
    const [region, setRegion] = useState('');
    const [number, setNumber] = useState('');
    const [slug, setSlug] = useState('');

    const changeEcole = (val) => {
        setEcole(val)
    }
    const changeRegion = (val) => {
        setRegion(val)
    }
    
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
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.querySelector('#show-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setEcole(tableElement[num].ecole);
        setRegion(tableElement[num].region);
    }
    const showModal = (id, num) => {
        document.getElementById(id).classList.add('is--show');
       
        setSlug(tableElement[num].slug);
        setEcole(tableElement[num].ecole);
        setRegion(tableElement[num].region);
        setNumber(num)
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const handleCreate = (e) => {
        e.preventDefault();
        
    }
    const handleEdit = (e) => {
        e.preventDefault();
        
    }
    return (
        <AutoEcoleLayout title={title} here={'vtm'}>
            <FileDarianne actuel={'Les auto-écoles'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-autoecoles'}>
                    Gestion des auto-écoles
                </OldFileDariane>
            </FileDarianne>
            
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des auto-écoles</h2>
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
                        <button className='sigepec-btn is--primary'  onClick={() => {activeModal('create-modal')}}>
                            <AddIcon/>  <span>Ajouter une nouvelle auto-école </span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--auto9'>
                                <strong>Auto Ecoles</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Région</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Statut</strong>
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
                                    <div className='sigepec-table__column is--auto9'>
                                       <span className='sigepec-table-column__special-span' onClick={() => {showModal('show-modal', element.id)}}>{element.ecole} </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.region}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        {
                                            (element.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>Inactif</span>) : 
                                            (
                                                <>
                                                    {
                                                        (element.statut === 1) ? (
                                                            <span className='sigepec-tag is--success'>Actif</span>
                                                        ) : (

                                                            <span className='sigepec-tag is--error'>Suspendu</span>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <button type='button' onClick={() => {editModal('edit-modal',  element.id)}}>
                                                Modifier
                                            </button>
                                            <button type='button'>
                                                Suspendre
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
            <div className='sigepec-modal' id='create-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('create-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Ajouter une auto-école</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={ecole} id={'ecole'} type={'text'} label={'Nom de l\'auto-école'} tooltip={'Entrer le nom de l\'auto-école'} fnc={changeEcole}>
                                    Entrer le nom de l'auto-école
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={region} id={'region'} type={'text'} label={'Région'} tooltip={'Entrer la région'} fnc={changeRegion}>
                                    Entrer la région
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__action has--flex'>
                                <FormBtn type={'reset'} style={'is--large'}>
                                    Annuler
                                </FormBtn>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                    Enrégistrer les informations
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='edit-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('edit-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Modifier les informations de l'auto-école {ecole}</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={ecole} id={'ecole'} type={'text'} label={'Nom de l\'auto-école'} tooltip={'Entrer le nom de l\'auto-école'} fnc={changeRegion}>
                                    Entrer le nom de l'auto-école
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={region} id={'region'} type={'text'} label={'Région'} tooltip={'Entrer la région'} fnc={changeRegion}>
                                    Entrer la région
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__action has--flex'>
                                <FormBtn type={'reset'} style={'is--large'}>
                                    Annuler
                                </FormBtn>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                Enrégistrer les modifications
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
                        <h2>Information de l'auto-école</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nom de l'Auto-Ecole :</span><strong>{ecole}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Region :</span><strong>{region}</strong>
                            </div>
                        </div>
                        <h2>Actions</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <button type='button' className='sigepec-module-list__action is--large has--flex' onClick={() => {editModal('edit-modal', number)}}>
                                <EditIcon/> <span>Modifier les informations de l'auto-école</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <CheckIcon/> <span>Suspendre l'auto-école</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <TrashIcon/> <span>Supprimer l'auto-école</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AutoEcoleLayout>
    );
};

export default EcoleHome;