import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import DossierIcon from '../../../../../assets/icons/ic/DossierIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import Checkbox from '../../../../../components/input/Checkbox';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import SelectField from '../../../../../components/input/SelectField';
import DossierLayout from '../../DossierLayout';

const RemplacementIdCardValider = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    const [numIdcard, setNumIdcard] = useState('');
    const [reference, setReference] = useState('');
    const [dateAuth, setDateAuth] = useState('');
    const [dateDelivrance, setDateDelivrance] = useState('');
    const [lieuDelivrance, setLieuDelivrance] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');

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
    const activeModal = (id) => {
        console.log('ok')
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }

    const changeNumPermis = (val) => {
        setNumIdcard(val)
    } 
    const changeReference = (val) => {
        setReference(val)
    } 
    const changeDateAuth = (val) => {
        setDateAuth(val)
    } 
    const changeDateDelivrance = (val) => {
        setDateDelivrance(val)
    } 
    const changeLieuDelivrance = (val) => {
        setLieuDelivrance(val)
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
    const handleSubmit = (e) => {

    }
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/remplacement-idcard"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/remplacement-idcard"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={`/gestion-des-dossiers/voir/remplacement-idcard/${slug.slug}`}>
                                <DossierIcon/>  {"Editer"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/modifier/remplacement-idcard/${slug.slug}`}>
                                <EditIcon/>  {"Modifier"}
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

            <FileDarianne actuel={'Validation d\'un remplacement Idcard'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/remplacement-idcard'}>
                    Remplacement idCard
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
                                <h2>Informations</h2>
                                <div className='sigepec-h-bar'></div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Numero de l'idcard :</span><strong>{numIdcard}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Date de d??livrance</span><strong>{dateDelivrance}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Lieu de d??livrance :</span><strong>{lieuDelivrance.value}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>R??f??rence d'authenticit??</span><strong>{reference}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Date d'authenticit?? :</span><strong>{dateAuth}</strong>
                                    </div>
                                </div>
                            <div className="sigepec-module-add-apercu-btn has--flex_between">
                                <Checkbox id={'info'} style={'is--large'}> 
                                    Valider les informations
                                </Checkbox>
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('infos')}}>
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
                            <FilePreview id={'permis'} dvaleur={scanBirth}>
                                Scan de la photocopie d'acte de naissance
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
                    <div className="sigepec-module-add-section__container">
                        <h2>Le saviez-vous</h2>
                        <div className='sigepec-h-bar'></div>
                        
                    </div>
                </div>
            </div>

            <div className='sigepec-modal' id='infos'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('infos')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                    
                            <h2>Informations dossier</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={numIdcard} id={'permis'} type={'text'} label={'Num??ro de l???IDcard'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                    Entrer le numero de l'idCard
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={dateDelivrance} id={'datedelivrance'} type={'text'} label={'Date de d??livrance'} tooltip={'Entrer la date de d??livrance'} fnc={changeDateDelivrance}>
                                    Entrer la date de d??livrance
                                </NormalTextField>
                                <SelectField id={'lieu'} dvalue={lieuDelivrance} label={'Lieu de d??livrance'} options={optionProvince} tooltip={'Choisir le lieu de d??livrance'} fnc={changeLieuDelivrance}>
                                    Choisir le lieu de d??livrance
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={reference} id={'reference'} type={'text'} label={'Entrer la r??f??rence d???authenticit?? de l???IDcard'} tooltip={'Entrer la r??f??rence d???authenticit?? de l???IDcard'} fnc={changeReference}>
                                    Entrer la r??f??rence d???authenticit?? de l???IDcard
                                </NormalTextField>
                                <NormalTextField value={dateAuth} id={'dateauth'} type={'date'} label={'Date d???authenticit??'} tooltip={'Entrer la d???authenticit??'} fnc={changeDateAuth}>
                                    Entrer la date d???authenticit??
                                </NormalTextField>
                            </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('infos')}}>
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
                        <h2>Scan de dossiers</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-form__container is--large has--flex">
                            <FileField id={'quittance'} dvalue={scanBuy} accept={''} fnc={changeScanBuy}>
                                Scan de la quittance de paiement
                            </FileField>
                            <FileField id={'cnib'} accept={''} dvalue={scanCnib} fnc={changeScanCnib}>
                                Scan de la pi??ce d???identit?? l??galis??e
                            </FileField>
                            <FileField id={'birth'} accept={''}  dvalue={scanBirth} fnc={changeScanBirth}>
                                Scan de l'acte de naissance
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

export default RemplacementIdCardValider;