import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import Checkbox from '../../../../../components/input/Checkbox';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import SelectField from '../../../../../components/input/SelectField';
import DossierLayout from '../../DossierLayout';

const RemplacementValider = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams();
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
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

    let optionProvince =[
        {
            value: 'Hauts Bassins',
            label: 'Hauts Bassins'
        },
        {
            value: 'Kadiogo',
            label: 'Kadiogo'
        },
        {
            value: 'Province 1',
            label: 'Province 1'
        },
        {
            value: 'Province 2',
            label: 'Province 2'
        },
        {
            value: 'Province 3',
            label: 'Province 3'
        },
    ];
    const [numPermis, setNumPermis] = useState('');
    const [derExtension, setDerExtension] = useState('');
    const [category, setCategory] = useState('');
    const [delivrance, setDelivrance] = useState('');
    const [lieu, setLieu] = useState('');
    const [dateObtention, setDateObtention] = useState('');
    const [lieuObtention, setLieuObtention] = useState('');
    const [modeObtention, setModeObtention] = useState('');
    const [refAnterieure, setRefAnterieure] = useState('');
    const [refAuthentification, setRefAuthentification] = useState('');
    const [dateAuthentification, setDateAuthentification] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanMEdical, setScanMedical] = useState('');

    const changeNumPermis = (val) => {
        setNumPermis(val)
    } 
    const changeDerExtension = (val) => {
        setDerExtension(val)
    } 
    const changeCategory = (val) => {
        setCategory(val)
    } 
    const changeDelivrance = (val) => {
        setDelivrance(val)
    } 
    const changeLieu = (val) => {
        setLieu(val)
    } 
    const changeDateObtention = (val) => {
        setDateObtention(val)
    } 
    const changeLieuObtention = (val) => {
        setLieuObtention(val)
    } 
    const changeModeObtention = (val) => {
        setModeObtention(val)
    } 
    const changeRefAnterieure = (val) => {
        setRefAnterieure(val)
    } 
    const changeRefAuthentification = (val) => {
        setRefAuthentification(val)
    } 
    const changeDateAuthentification = (val) => {
        setDateAuthentification(val)
    } 
    const changeScanCnib = (value) => {
        setScanCnib(value)
    }
    const changeScanBuy = (value) => {
        setScanBuy(value)
    }
    const changeScanBirth = (value) => {
        setScanBirth(value)
    }
    const changeScanMedical = (value) => {
        setScanMedical(value)
    }
    return (
        <DossierLayout here={'validation'}>
            <FileDarianne actuel={'Validation d\'un dossier Remplacement'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/remplacement'}>
                    Gestion des Dossiers Remplacement
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/validation-de-dossier/remplacement'}>
                    Gestion des Dossier Remplacement en attente de validation
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Validation du dossier</h1>
                <div className='sigepec-module-add-head__action has--flex_between'>
                    <button type='button' className='sigepec-btn is--primary'>Valider le dossier</button>
                    <button type='button' className='sigepec-btn is--secondary'>Rejeter le dossier</button>
                </div>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations personnelles du candidat</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Numero de permis :</span><strong>{numPermis}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de dernière extension :</span><strong>{derExtension}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Categorie Obtenue :</span><strong>{category.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance :</span><strong>{delivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de delivrance :</span><strong>{lieu.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'obtention :</span><strong>{dateObtention}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu d'obtention: </span><strong>{lieuObtention.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Mode d'obtention :</span><strong>{modeObtention}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence antérieure :</span><strong>{refAnterieure}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence authentification :</span><strong>{refAuthentification}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'authentification :</span><strong>{dateAuthentification}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu-btn has--flex_between">
                                <Checkbox id={'infos'} style={'is--large'}> 
                                    Valider les informations
                                </Checkbox>
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('info')}}>
                                    Modifier les informations
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <h2>Scan des documents</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <FilePreview id={'buy'} dvaleur={scanBuy}>
                                Scan de la quittance de paiement
                            </FilePreview>
                            <FilePreview id={'cnib'} dvaleur={scanCnib}>
                                Scan de la pièce d’identité légalisée
                            </FilePreview>
                            <FilePreview id={'birth'} dvaleur={scanBirth}>
                                Scan de la photocopie de l’acte de naissance
                            </FilePreview>
                            <FilePreview id={'medicale'} dvaleur={scanMEdical}>
                                Scan de la visite médicale
                            </FilePreview>
                        </div>
                        <div className="sigepec-module-add-apercu-btn has--flex_between">
                            <Checkbox id={'file'} style={'is--large'}> 
                                Valider les informations
                            </Checkbox>
                            <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('files')}}>
                                Modifier les informations
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sigepec-modal' id='info'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('info')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Informations dossier Extension</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numPermis} id={'permis'} type={'text'} label={'Numero de permis'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de permis
                            </NormalTextField>
                            <NormalTextField value={derExtension} id={'der_extension'} type={'date'} label={'Date de la dernière extension'} tooltip={'Entrer la date de la dernière extension'} fnc={changeDerExtension}>
                                Entrer la date de la dernière extension
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'categorie'} dvalue={category} label={'Catégorie obtenue'} options={optionCategorie} tooltip={'Choisir la catégorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la catégorie obtenue
                            </SelectField>
                            <NormalTextField value={delivrance} id={'date_delivrance'} type={'date'} label={'Date de délivrance'} tooltip={'Entrer la date de délivrance'} fnc={changeDelivrance}>
                                Entrer la date de délivrance
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'lieu'} dvalue={lieu} label={'Lieu de délivrance'} options={optionProvince} tooltip={'Choisir le lieu de délivrance'} fnc={changeLieu}>
                                Choisir le lieu de délivrance
                            </SelectField>
                            <NormalTextField value={dateObtention} id={'date_obtention'} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'lieu_obtention'} dvalue={lieuObtention} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuObtention}>
                                Choisir le lieu d'obtention
                            </SelectField>
                            <NormalTextField value={modeObtention} id={'mode_obtention'} type={'text'} label={'Mode d\'obtention'} tooltip={'Entrer le mode d\'obtention'} fnc={changeModeObtention}>
                                Entrer le mode d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={refAnterieure} id={'ref_anterieure'} type={'text'} label={'Référence antérieure'} tooltip={'Entrer la référence antérieure'} fnc={changeRefAnterieure}>
                                Entrer la référence antérieure
                            </NormalTextField>
                            <NormalTextField value={refAuthentification} id={'ref_auth'} type={'text'} label={'Référence d\'authentification'} tooltip={'Entrer la référence d\'authentification'} fnc={changeRefAuthentification}>
                                Entrer la référence d'authentification
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={dateAuthentification} id={'date_auth'} type={'date'} label={'Date d\'anthentification'} tooltip={'Entrer la date d\'anthentification'} fnc={changeDateAuthentification}>
                                Entrer la date d'authentification
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('info')}}>
                                Enrégistrer et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sigepec-modal' id='files'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('files')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Scan des documents</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-form__container is--large has--flex">
                            <FileField id={'quittance'}  dvalue={scanBuy} accept={''} fnc={changeScanBuy}>
                                Scan de la quittance de paiement
                            </FileField>
                            <FileField id={'cnib'}  dvalue={scanCnib} accept={''} fnc={changeScanCnib}>
                                Scan de la pièce d’identité légalisée
                            </FileField>
                            <FileField id={'birth'} accept={''}  dvalue={scanBirth} fnc={changeScanBirth}>
                                Scan de la photocopie de l’acte de naissance
                            </FileField>
                            <FileField id={'certificat'} accept={''}  dvalue={scanMEdical} fnc={changeScanMedical}>
                                Scan de la visite médicale
                            </FileField>
                        </div>

                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('files')}}>
                                Enrégistrer et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default RemplacementValider;