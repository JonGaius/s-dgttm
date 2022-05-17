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
import SelectField from '../../../components/input/SelectField';
import MainLayout from '../../../components/layout/main/MainLayout';

const SalleDexamen = ({title}) => {
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
    const [salles, setSalles] = useState([
        {
            id: 1,
            slug: 'salle-1',
            nom: 'Salle A',
            place: 25,
            statut: 1
        },
        {
            id: 2,
            slug: 'salle-2',
            nom: 'Salle A1',
            place: 50,
            statut: 1
        },
        {
            id: 3,
            slug: 'salle-3',
            nom: 'Salle B',
            place: 35,
            statut: 1
        },
        {
            id: 4,
            slug: 'salle-4',
            nom: 'Salle B2',
            place: 35,
            statut: 0
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
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [statut, setStatut] = useState('');

    const changeName = (val) => {
        setName(val)
    }
    const changePlace = (val) => {
        setPlace(val)
    }
    const changeFName = (val) => {
        setStatut(val)
    }
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        setName(salles[num].nom);
        setPlace(salles[num].place);
        // setStatut(salles[num].statut);
    }
    const handleCreate = (e) => {
        e.preventDefault();
    }
    const handleEdit = (e) => {
        e.preventDefault();   
    }
    return (
        <MainLayout>
            <FileDarianne actuel={'Configuration des salles'}>
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
                    <h1>Configuration des Salles</h1>
                </div>
                <div className='sigepec-module-dossier-list'>
                    <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                        <h2>Liste des salles</h2>
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
                                <AddIcon/>  <span>Ajouter une salle</span>
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
                                    <strong>Nom de la Salle</strong>
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Nombre de place</strong>
                                </div>
                                <div className='sigepec-table__column is--lilmed'>
                                    <strong>Statut</strong>
                                </div>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                            </div>
                            {
                                salles.map((salle) => (
                                    <div className='sigepec-table__body' key={salle.id}>
                                        <div className='sigepec-table__column is--little'>
                                            {salle.id}
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{salle.nom}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{salle.place}</span>
                                        </div>
                                        <div className='sigepec-table__column is--lilmed'>
                                        {
                                            (salle.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>En attente</span>) : 
                                            (
                                                <>
                                                    {
                                                        (salle.statut === 1) ? (
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
                                            <button type='button' onClick={() => {appear(salle.slug)}}>
                                                <OptionIcon/>
                                            </button>
                                            <div className='sigepec-table__option' id={salle.slug}>
                                                <button id={`modal-${salle.slug}`} type={'button'} onClick={() => {editModal('edit-modal', salle.id)}}>
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
                        <h2>Ajouter une salle de classe </h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleCreate}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'delai'} type={'text'} label={'Nom de la salle'} tooltip={'Entrer le nom de la salle'} fnc={changeName}>
                                    Entrer le nom de la salle
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={place} id={'place'} type={'number'} label={'Nombre de place'} tooltip={'Entrer le nombre de place'} fnc={changePlace}>
                                    Entrer le nombre de place
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
                        <h2>Modifier les informations de la salle</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleEdit}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'delai'} type={'text'} label={'Nom de la salle'} tooltip={'Entrer le nom de la salle'} fnc={changeName}>
                                    Entrer le nom de la salle
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={place} id={'place'} type={'number'} label={'Nombre de place'} tooltip={'Entrer le nombre de place'} fnc={changePlace}>
                                    Entrer le nombre de place
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

export default SalleDexamen;