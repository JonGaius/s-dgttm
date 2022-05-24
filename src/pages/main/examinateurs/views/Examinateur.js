import React, { useState } from 'react';
import AddIcon from '../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import ListIcon from '../../../../assets/icons/ListIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import ModuleCard from '../../../../components/card/ModuleCard';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import NormalTextField from '../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../components/input/PhoneNumberField';
import ExanimateurLayout from '../ExanimateurLayout';

const Examinateur = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const changeNom = (val) => {
        setNom(val)
    }
    const changePrenom = (val) => {
        setPrenom(val)
    }
    const changeEmail = (val) => {
        setEmail(val)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <ExanimateurLayout actions={""}>
            <FileDarianne actuel={'Gestion des examinateurs'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            
            <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                
                <div className='sigepec-module-dossier-accueil__item'>
                    <ModuleCard link={`/gestion-des-examinateurs/liste`}>
                        <ListIcon/> <span>Liste des examinateurs</span>
                    </ModuleCard>
                </div>
                <div className='sigepec-module-dossier-accueil__item'>
                    <button type='button' onClick={() => {activeModal('create-modal')}} className='sigepec-card__module is--large'>
                        <AddIcon/> <span>Ajouter un examinateur</span>
                    </button>
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
                        <h2>Créer un nouvel examinateur</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large' onSubmit={handleSubmit}>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de famille de l\'examinateur'} fnc={changeNom}>
                                    Entrer le nom de famille de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom(s)'} tooltip={'Entrer le/les prenom(s) de l\'examinateur'} fnc={changePrenom}>
                                    Entrer le/les prenom(s) de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={email} id={'email'} type={'email'} label={'Email'} tooltip={'Entrer l\'adresse mail de l\'examinateur'} fnc={changeEmail}>
                                    Entrer l'adresse mail de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={telephone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setTelephone}>
                                Entrer le numéro de téléphone
                            </PhoneNumberField>
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
        </ExanimateurLayout>
    );
};

export default Examinateur;