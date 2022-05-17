import React, { useState } from 'react';
import AddIcon from '../../../assets/icons/AddIcon';
import CancelIcon from '../../../assets/icons/CancelIcon';
import OptionIcon from '../../../assets/icons/OptionIcon';
import SearcIcon from '../../../assets/icons/SearcIcon';
import SortIcon from '../../../assets/icons/SortIcon';
import FormBtn from '../../../components/button/FormBtn';
import FileDarianne from '../../../components/card/FileDarianne';
import OldFileDariane from '../../../components/card/OldFileDariane';
import NormalTextField from '../../../components/input/NormalTextField';
import MainLayout from '../../../components/layout/main/MainLayout';

const DRT = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const [drt, setDrt] = useState([
        {
            id: 1,
            slug: 'drt-1',
            code: 'drt-n1',
            nom: 'Nom court 1',
            fullname: 'Nom complet 1',
        },
        {
            id: 2,
            slug: 'drt-2',
            code: 'drt-n2',
            nom: 'Nom court 2',
            fullname: 'Nom complet 2',
        },
        {
            id: 3,
            slug: 'drt-3',
            code: 'drt-n3',
            nom: 'Nom court 3',
            fullname: 'Nom complet 3',
        },
        {
            id: 4,
            slug: 'drt-4',
            code: 'drt-n4',
            nom: 'Nom court 4',
            fullname: 'Nom complet 4',
        },
        {
            id: 5,
            slug: 'drt-5',
            code: 'drt-n5',
            nom: 'Nom court 5',
            fullname: 'Nom complet 5',
        },
    ]);

    const [name, setName] = useState('');
    const [fname, setFName] = useState('');

    const changeName = (val) => {
        setName(val)
    }
    const changeFName = (val) => {
        setFName(val)
    }

    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setFName(drt[num].fullname);
        setName(drt[num].nom);
    }
    return (
        <MainLayout>
            <FileDarianne actuel={'Configuration des DRT'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/configuration'}>
                    Configuration
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Configuration des DRT</h1>
                </div>
                <div className='sigepec-module-dossier-list'>
                    <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                        <h2>Liste des examinateurs</h2>
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
                            <button type='button' className='sigepec-btn is--primary' onClick={() => {activeModal('create-modal')}}>
                                <AddIcon/>  <span>Ajouter une DRT</span>
                            </button>
                        </div>
                    </div>
                    <div className='sigepec-module-dossier-list__container is--large'>
                        <div className='sigepec-table'>
                            <div className='sigepec-table__head'>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                                <div className='sigepec-table__column is--lilmed'>
                                    <strong>N.</strong>
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Nom court</strong>
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Nom complet</strong>
                                </div>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                            </div>
                            {
                                drt.map((dr) => (
                                    <div className='sigepec-table__body' key={dr.id}>
                                        <div className='sigepec-table__column is--little'>
                                            {dr.id}
                                        </div>
                                        <div className='sigepec-table__column is--lilmed'>
                                            <span>{dr.code}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{dr.nom}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{dr.fullname}</span>
                                        </div>
                                        <div className='sigepec-table__column is--little'>
                                            <button type='button' onClick={() => {appear(dr.slug)}}>
                                                <OptionIcon/>
                                            </button>
                                            <div className='sigepec-table__option' id={dr.slug}>
                                                <button id={`modal-${dr.slug}`} type={'button'} onClick={() => {editModal('edit-modal', dr.id)}}>
                                                    Modifier
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
            </section>
            <div className='sigepec-modal' id='create-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('create-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Créer une DRT </h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'nom'} type={'text'} label={'Nom court de la DRT'} tooltip={'Entrer le nom court de la DRT'} fnc={changeName}>
                                    Entrer le nom court de la DRT
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={fname} id={'prenom'} type={'text'} label={'Nom complet de la DRT'} tooltip={'Entrer le nom complet de la DRT'} fnc={changeFName}>
                                    Entrer le nom complet de la DRT
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
                        <h2>Modifier les informations de la DRT {fname}</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'nom'} type={'text'} label={'Nom court de la DRT'} tooltip={'Entrer le nom court de la DRT'} fnc={changeName}>
                                    Entrer le nom court de la DRT
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={fname} id={'prenom'} type={'text'} label={'Nom complet de la DRT'} tooltip={'Entrer le nom complet de la DRT'} fnc={changeFName}>
                                    Entrer le nom complet de la DRT
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
        </MainLayout>
    );
};

export default DRT;