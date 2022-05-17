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

const DecisionList = ({title}) => {
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
    const [decisions, setDecisions] = useState([
        {
            id: 1,
            slug: 'decesion-1',
            code: 'decesion-n1',
            intitule: 'Intitule 1',
            statut: 1,
        },
        {
            id: 2,
            slug: 'decesion-2',
            code: 'decesion-n2',
            intitule: 'Intitule 2',
            statut: 0,
        },
        {
            id: 3,
            slug: 'decesion-3',
            code: 'decesion-n3',
            intitule: 'Intitule 3',
            statut: 1,
        },
        {
            id: 4,
            slug: 'decesion-1',
            code: 'decesion-n1',
            intitule: 'Intitule 1',
            statut: 2,
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
    const [intitule, setIntitule] = useState('');
    const [statut, setStatut] = useState('');

    const changeName = (val) => {
        setIntitule(val)
    }
    const changeFName = (val) => {
        setStatut(val)
    }
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setIntitule(decisions[num].intitule);
        // setStatut(decisions[num].statut);
    }
    const handleCreate = (e) => {
        e.preventDefault();
        
    }
    const handleEdit = (e) => {
        e.preventDefault();
        
    }
    return (
        <MainLayout>
            <FileDarianne actuel={'Configuration des décisions'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/configuration'}>
                    Configuration
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Configuration des Décisions</h1>
                </div>
                <div className='sigepec-module-dossier-list'>
                    <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                        <h2>Liste des decisions</h2>
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
                                <AddIcon/>  <span>Ajouter une décision</span>
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
                                    <strong>Intitulé</strong>
                                </div>
                                <div className='sigepec-table__column is--auto3'>
                                    <strong>Statut</strong>
                                </div>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                            </div>
                            {
                                decisions.map((decision) => (
                                    <div className='sigepec-table__body' key={decision.id}>
                                        <div className='sigepec-table__column is--little'>
                                            {decision.id}
                                        </div>
                                        <div className='sigepec-table__column is--lilmed'>
                                            <span>{decision.code}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                            <span>{decision.intitule}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto3'>
                                        {
                                            (decision.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>En attente</span>) : 
                                            (
                                                <>
                                                    {
                                                        (decision.statut === 1) ? (
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
                                            <button type='button' onClick={() => {appear(decision.slug)}}>
                                                <OptionIcon/>
                                            </button>
                                            <div className='sigepec-table__option' id={decision.slug}>
                                                <button id={`modal-${decision.slug}`} type={'button'} onClick={() => {editModal('edit-modal', decision.id)}}>
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
                        <h2>Créer une décision </h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleCreate}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={intitule} id={'intitule'} type={'text'} label={'Intitulé de la décison'} tooltip={'Entrer l\'intitulé de la décison'} fnc={changeName}>
                                    Entrer l'intitulé de la décison
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'satut'} dvalue={statut} label={'Statut'} options={optionStatut} tooltip={'Choisir le statut de la décision'} fnc={changeFName}>
                                Choisir le statut de la décision
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
                        <h2>Modifier les informations de la Décision {intitule}</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleEdit}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={intitule} id={'intitule'} type={'text'} label={'Intitulé de la décison'} tooltip={'Entrer l\'intitulé de la décison'} fnc={changeName}>
                                    Entrer l'intitulé de la décison
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'satut'} dvalue={statut} label={'Statut'} options={optionStatut} tooltip={'Choisir le statut de la décision'} fnc={changeFName}>
                                Choisir le statut de la décision
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

export default DecisionList;