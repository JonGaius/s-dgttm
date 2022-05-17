import React, { useState } from 'react';
import AddIcon from '../../../assets/icons/AddIcon';
import CancelIcon from '../../../assets/icons/CancelIcon';
import OptionIcon from '../../../assets/icons/OptionIcon';
import SearcIcon from '../../../assets/icons/SearcIcon';
import SortIcon from '../../../assets/icons/SortIcon';
import FormBtn from '../../../components/button/FormBtn';
import FileDarianne from '../../../components/card/FileDarianne';
import OldFileDariane from '../../../components/card/OldFileDariane';
import MultiSelectField from '../../../components/input/MultiSelectField';
import NormalTextField from '../../../components/input/NormalTextField';
import SelectField from '../../../components/input/SelectField';
import MainLayout from '../../../components/layout/main/MainLayout';

const DelaisDePassage = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
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
    const [delais, setDelais] = useState([
        {
            id: 1,
            slug: 'delais-1',
            nbre: 4,
            delais: '1',
            statut: 1
        },
        {
            id: 1,
            slug: 'delais-2',
            nbre: 10,
            delais: '2',
            statut: 1
        },
        {
            id: 1,
            slug: 'delais-3',
            nbre: 2,
            delais: '3',
            statut: 1
        },
    ]);
    const optionStatut = [
        {
            label: 'Actif',
            value: 1,
        },
        {
            label: 'En attente',
            value: 0,
        },
        {
            label: 'Inactif',
            value: 2,
        },
    ]
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
    const [delaie, setDelaie] = useState('');
    const [exam, setExam] = useState('');
    const [statut, setStatut] = useState('');

    const changeName = (val) => {
        setDelaie(val)
    }
    const changeExam = (val) => {
        setExam(val)
    }
    const changeFName = (val) => {
        setStatut(val)
    }
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        setDelaie(delais[num].delais);
        // setStatut(delais[num].statut);
    }
    const handleCreate = (e) => {
        e.preventDefault();
    }
    const handleEdit = (e) => {
        e.preventDefault();   
    }
    return (
        <MainLayout>
            <FileDarianne actuel={'Configuration des délais de passage'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/configuration'}>
                    Configuration
                </OldFileDariane>
                <OldFileDariane link={'/configuration/examens'}>
                    Configuration des examens
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Configuration des Delais de passage</h1>
                </div>
                <div className='sigepec-module-dossier-list'>
                    <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                        <h2>Liste des delais de passage</h2>
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
                                <AddIcon/>  <span>Ajouter un delai de passage</span>
                            </button>
                        </div>
                    </div>
                    <div className='sigepec-module-dossier-list__container is--large'>
                        <div className='sigepec-table'>
                            <div className='sigepec-table__head'>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Nombre d'examen</strong>
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Delais de passage</strong>
                                </div>
                                <div className='sigepec-table__column is--lilmed'>
                                    <strong>Statut</strong>
                                </div>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                            </div>
                            {
                                delais.map((delai) => (
                                    <div className='sigepec-table__body' key={delai.id}>
                                        <div className='sigepec-table__column is--little'>
                                            {delai.id}
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{delai.nbre}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{delai.delais}</span>
                                        </div>
                                        <div className='sigepec-table__column is--lilmed'>
                                        {
                                            (delai.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>En attente</span>) : 
                                            (
                                                <>
                                                    {
                                                        (delai.statut === 1) ? (
                                                            <span className='sigepec-tag is--success'>Actif</span>
                                                        ) : (

                                                            <span className='sigepec-tag is--error'>Inactif</span>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        
                                        </div>
                                        <div className='sigepec-table__column is--little'>
                                            <button type='button' onClick={() => {appear(delai.slug)}}>
                                                <OptionIcon/>
                                            </button>
                                            <div className='sigepec-table__option' id={delai.slug}>
                                                <button id={`modal-${delai.slug}`} type={'button'} onClick={() => {editModal('edit-modal', delai.id)}}>
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
                        <h2>Ajouter un delai de passage </h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleCreate}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <MultiSelectField id={'exams'} dvalue={exam} label={'Examens Concernés'} options={optionExamen} tooltip={'Choisir le statut du motif'} fnc={changeExam}>
                                Choisir les examens concernés
                            </MultiSelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={delaie} id={'delai'} type={'number'} label={'Nombre de delais'} tooltip={'Entrer le nombre de delais'} fnc={changeName}>
                                    Entrer le nombre de delais
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'statut'} dvalue={statut} label={'Statut'} options={optionStatut} tooltip={'Choisir le statut'} fnc={changeFName}>
                                Choisir le statut
                            </SelectField>
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
                        <h2>Modifier les informations du delais de passage</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleEdit}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <MultiSelectField id={'exams'} dvalue={exam} label={'Examens Concernés'} options={optionExamen} tooltip={'Choisir le statut du motif'} fnc={changeExam}>
                                Choisir les examens concernés
                            </MultiSelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={delaie} id={'delai'} type={'number'} label={'Nombre de delais'} tooltip={'Entrer le nombre de delais'} fnc={changeName}>
                                    Entrer le nombre de delais
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'statut'} dvalue={statut} label={'Statut'} options={optionStatut} tooltip={'Choisir le statut'} fnc={changeFName}>
                                Choisir le statut
                            </SelectField>
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

export default DelaisDePassage;