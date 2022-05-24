import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import DossierIcon from '../../../../../assets/icons/ic/DossierIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import SelectField from '../../../../../components/input/SelectField';
import DossierLayout from '../../DossierLayout';

const RemplacementEdit = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    // let navigate = useNavigate();
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
    const [scanMedical, setScanMedical] = useState('');
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
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/remplacement"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/remplacement"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={`/gestion-des-dossiers/voir/remplacement/${slug.slug}`}>
                                <DossierIcon/>  {"Editer"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/valider/remplacement/${slug.slug}`}>
                                <CheckIcon/>  {"Valider"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <ExportIcon/> {"Exporter"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <PrintIcon/> {"Imprimer"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item is--danger`}>
                            <button type='button'>
                                <TrashIcon/> {"Supprimer"}
                            </button>
                        </li>
                    </ul>);
    return (
        <DossierLayout actions={actions}>
            <FileDarianne actuel={'Modification d\'un remplacement'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/remplacement'}>
                    Remplacement
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Modification des informations</h1>
                <button type='button' className='sigepec-btn is--primary'>Confirmer et Enrégistrer les modifications</button>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations du dossier</h2>
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
                                    <span>Categorie Obtenue :</span><strong>{category}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance :</span><strong>{delivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de delivrance :</span><strong>{lieu}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'obtention :</span><strong>{dateObtention}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu d'obtention: </span><strong>{lieuObtention}</strong>
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
                            <div className="sigepec-module-add-apercu__btn">
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
                            <FilePreview id={'medicale'} dvaleur={scanMedical}>
                                Scan de la visite médicale
                            </FilePreview>
                        </div>
                        <div className="sigepec-module-add-apercu__btn">
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
                            <NormalTextField value={lieu} id={'lieu_delivrance'} type={'text'} label={'Lieu de délivrance'} tooltip={'Entrer le lieu de délivrance'} fnc={changeLieu}>
                                Entrer le lieu de délivrance
                            </NormalTextField>
                            <NormalTextField value={dateObtention} id={'date_obtention'} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={lieuObtention} id={'lieu_obtention'} type={'text'} label={'Lieu d\'obtention'} tooltip={'Entrer le lieu de délivrance'} fnc={changeLieuObtention}>
                                Entrer le lieu d'obtention
                            </NormalTextField>
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
                            <FileField id={'medical'} accept={''}  dvalue={scanMedical} fnc={changeScanMedical}>
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

export default RemplacementEdit;