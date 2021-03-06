import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CancelIcon from '../../../../../../assets/icons/CancelIcon';
import ListIcon from '../../../../../../assets/icons/ListIcon';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import FileField from '../../../../../../components/input/FileField';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const DuplicataApercu = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let {state} = useLocation();
    let navigate = useNavigate();
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
    const [numPermis, setNumPermis] = useState(state.numPermis);
    const [category, setCategory] = useState(state.category);
    const [delivrance, setDelivrance] = useState(state.delivrance);
    const [lieu, setLieu] = useState(state.lieu);
    const [dateObtention, setDateObtention] = useState(state.dateObtention);
    const [lieuObtention, setLieuObtention] = useState(state.lieuObtention);
    const [lieuExtension, setLieuExtension] = useState(state.lieuExtension);
    const [dateAuthentification, setDateAuthentification] = useState(state.dateAuthentification);
    const [refAuthentification, setRefAuthentification] = useState(state.refAuthentification);
    const [dateExtension, setDateExtension] = useState(state.dateExtension);
    const [scanCnib, setScanCnib] = useState(state.scanCnib);
    const [scanBuy, setScanBuy] = useState(state.scanBuy);
    const [scanBirth, setScanBirth] = useState(state.scanBirth);
    const [scanCertificat, setScanCertificat] = useState(state.scanCertificat);
    const [scanMedical, setScanMedical] = useState(state.scanMedical);

    const changeScanCnib = (value) => {
        setScanCnib(value)
    }
    const changeScanBuy = (value) => {
        setScanBuy(value)
    }
    const changeScanBirth = (value) => {
        setScanBirth(value)
    }
    const changeScanCertificat = (value) => {
        setScanCertificat(value)
    }
    const changeScanMedical = (value) => {
        setScanMedical(value)
    }

    const changeNumPermis = (val) => {
        setNumPermis(val)
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
    const changeLieuExtension = (val) => {
        setLieuExtension(val)
    } 
    const changeRefAnterieure = (val) => {
        setDateAuthentification(val)
    } 
    const changeRefAuthentification = (val) => {
        setRefAuthentification(val)
    } 
    const changeDateExtension = (val) => {
        setDateExtension(val)
    } 

    const handleSubmit = () => {
        navigate('/gestion-des-dossiers/duplicata');
    }
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/duplicata"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        
                    </ul>);
    return (
        <DossierLayout actions={actions}>
            <FileDarianne actuel={"Ajout d'un duplicata"}>
                <OldFileDariane link={'/'}> 
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                    <OldFileDariane link={'/gestion-des-dossiers/duplicata'}>
                        Duplicata
                    </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Aper??u</h1>
                <button type='button' className='sigepec-btn is--primary' onClick={() => {handleSubmit()}}>Confirmer et Enr??gistrer les informations</button>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Numero de permis :</span><strong>{numPermis}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de validit?? :</span><strong>{'12/09/2028'}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Categorie Obtenue :</span><strong>{category.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de d??livrance :</span><strong>{delivrance}</strong>
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
                                    <span>Lieu d'obtention :</span><strong>{lieuObtention.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'extension :</span><strong>{dateExtension.value}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu d'extension :</span><strong>{lieuExtension.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>R??f??rence d'authenticit?? :</span><strong>{refAuthentification}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'authenticit?? :</span><strong>{dateAuthentification}</strong>
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
                                Scan de la pi??ce d???identit?? l??galis??e
                            </FilePreview>
                            <FilePreview id={'birth'} dvaleur={scanBirth}>
                                Scan de la photocopie de l???acte de naissance
                            </FilePreview>
                            <FilePreview id={'medicale'} dvaleur={scanMedical}>
                                Scan de la visite m??dicale
                            </FilePreview>
                            <FilePreview id={'certificat'} dvaleur={scanCertificat}>
                                Scan du certificat d???authenticit??
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
                        <h2>Informations dossier Duplicata</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numPermis} id={'permis'} type={'text'} label={'Numero de permis'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de permis
                            </NormalTextField>
                            <SelectField id={'categorie'} dvalue={category} label={'Cat??gorie obtenue'} options={optionCategorie} tooltip={'Choisir la cat??gorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la cat??gorie obtenue
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={delivrance} id={'date_delivrance'} type={'date'} label={'Date de d??livrance'} tooltip={'Entrer la date de d??livrance'} fnc={changeDelivrance}>
                                Entrer la date de d??livrance
                            </NormalTextField>
                            <SelectField id={'lieu'} dvalue={lieu} label={'Lieu de d??livrance'} options={optionProvince} tooltip={'Choisir le lieu de d??livrance'} fnc={changeLieu}>
                                Choisir le lieu de d??livrance
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            
                            <SelectField id={'lieu_obtention'} dvalue={lieuObtention} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuObtention}>
                                Choisir le lieu d'obtention
                            </SelectField>
                            <NormalTextField value={dateObtention} id={'date_obtention'} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={dateExtension} id={'date_auth'} type={'date'} label={'Date d\'extension'} tooltip={'Entrer la date d\'extension'} fnc={changeDateExtension}>
                                Entrer la date d'extension
                            </NormalTextField>
                            <SelectField id={'lieu_obtention'} dvalue={lieuExtension} label={'Lieu d\'extension'} options={optionProvince} tooltip={'Choisir le lieu d\'extension'} fnc={changeLieuExtension}>
                                Choisir le lieu d'extension
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={dateAuthentification} id={'ref_anterieure'} type={'text'} label={'Date d\'anthenticit??'} tooltip={'Entrer la date d\'anthenticit??'} fnc={changeRefAnterieure}>
                                Entrer la date d'anthenticit??
                            </NormalTextField>
                            <NormalTextField value={refAuthentification} id={'ref_auth'} type={'text'} label={'R??f??rence d\'authenticit??'} tooltip={'Entrer la r??f??rence d\'authenticit??'} fnc={changeRefAuthentification}>
                                Entrer la r??f??rence d'authenticit??
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('info')}}>
                                Enr??gistrer et Fermer
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
                            <FileField id={'quittance'} dvalue={scanBuy} accept={''} fnc={changeScanBuy}>
                                Scan de la quittance de paiement
                            </FileField>
                            <FileField id={'cnib'} accept={''} dvalue={scanCnib} fnc={changeScanCnib}>
                                Scan de la pi??ce d???identit?? l??galis??e
                            </FileField>
                            <FileField id={'birth'} accept={''}  dvalue={scanBirth} fnc={changeScanBirth}>
                                Scan de la photocopie de l???acte de naissance
                            </FileField>
                            <FileField id={'medical'} accept={''}  dvalue={scanMedical} fnc={changeScanMedical}>
                                Scan du certificat d???authenticit??
                            </FileField>
                            <FileField id={'certificat'} accept={''}  dvalue={scanCertificat} fnc={changeScanCertificat}>
                                Scan du certificat d???authenticit??
                            </FileField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('files')}}>
                                Enr??gistrer et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default DuplicataApercu;