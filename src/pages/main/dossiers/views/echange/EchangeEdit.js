import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../../components/input/PhoneNumberField';
import SelectField from '../../../../../components/input/SelectField';
import DossierLayout from '../../DossierLayout';

const EchangeEdit = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams();
    let navigate = useLocation();

    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }

    let optionGenre =[
        {
            value: 'f',
            label: 'Femme'
        },
        {
            value: 'h',
            label: 'Homme'
        },
        {
            value: 'a',
            label: 'Autre'
        },
    ];
    let optionNationalite =[
        {
            value: 'Burkina-Faso',
            label: 'Burkina-Faso'
        },
        {
            value: 'Côte d\'Ivoire',
            label: 'Côte d\'Ivoire'
        },
        {
            value: 'Mali',
            label: 'Mali'
        },
        {
            value: 'Ghana',
            label: 'Ghana'
        },
        {
            value: 'Niger',
            label: 'Niger'
        },
    ];
    let optionProfession =[
        {
            value: 'Enseignant',
            label: 'Enseignant'
        },
        {
            value: 'Etudiant',
            label: 'Etudiant'
        },
        {
            value: 'Commerçant',
            label: 'Commerçant'
        },
        {
            value: 'Fonctionnaire',
            label: 'Fonctionnaire'
        },
    ];
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
    let optionPhysique =[
        {
            value: 'Aucun',
            label: 'Aucun'
        },
        {
            value: 'Handicapé Moteur',
            label: 'Handicapé Moteur'
        },
        {
            value: 'Handicapé Auditif',
            label: 'Handicapé Auditif'
        },
        {
            value: 'Faiblesse Visuelle',
            label: 'Faiblesse Visuelle'
        },
    ];

    const [typeP, setTypeP] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nomJFille, setNomJFille] = useState('');
    const [birthday, setBirthday] = useState('');
    const [genre, setGenre] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [profession, setProfession] = useState('');
    const [fathername, setFathername] = useState('');
    const [fatherprename, setFatherprename] = useState('');
    const [mothername, setMothername] = useState('');
    const [motherprename, setMotherprename] = useState('');
    const [address, setAddress] = useState('');
    const [postale, setPostale] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [category, setCategory] = useState('');
    const [categoryO, setCategoryO] = useState('');
    const [dateObtention, setDateObtention] = useState('');
    const [lieuObtention, setLieuObtention] = useState('');
    const [dateDelivrance, setDateDelivrance] = useState('');
    const [lieuDelivrance, setLieuDelivrance] = useState('');
    const [restriction, setRestriction] = useState('');
    const [reference, setReference] = useState('');
    const [physique, setPhysique] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanMedical, setScanMedical] = useState('');
    const [scanCertificat, setScanCertificat] = useState('');

    const changeTypep = (val) => {
        setTypeP(val)
    }
    const changeNom = (val) => {
        setNom(val)
    }
    const changePrenom = (val) => {
        setPrenom(val)
    }
    const changeNomJFille = (val) => {
        setNomJFille(val)
    }
    const changeBirthday = (val) => {
        setBirthday(val)
    }
    const changeGenre = (val) => {
        setGenre(val)
    }
    const changeNationalite = (val) => {
        setNationalite(val)
    }
    const changeProfession = (val) => {
        setProfession(val)
    }
    const changeFathername = (val) => {
        setFathername(val)
    }
    const changeFatherprename = (val) => {
        setFatherprename(val)
    }
    const changeMothername = (val) => {
        setMothername(val)
    }
    const changeMotherprename = (val) => {
        setMotherprename(val)
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
    const changeScanCertificat = (value) => {
        setScanCertificat(value)
    }
    const changeAdresse = (value) => {
        setAddress(value)
    }
    const changePostale = (value) => {
        setPostale(value)
    }
    const changePhone = (value) => {
        setPhone(value)
    }
    const changeProvince = (value) => {
        setProvince(value)
    }
    const changeCategory = (value) => {
        setCategory(value)
    }
    const changeCategoryO = (value) => {
        setCategoryO(value)
    }
    const changePhysique = (value) => {
        setPhysique(value)
    }
    const changeLieuObtention = (value) => {
        setLieuObtention(value)
    }
    const changeDateObtention = (value) => {
        setDateObtention(value)
    }
    const changeLieuDelivrance = (value) => {
        setLieuDelivrance(value)
    }
    const changeDateDelivrance = (value) => {
        setDateDelivrance(value)
    }
    const changeReference = (value) => {
        setReference(value)
    }
    const changeRestriction = (value) => {
        setRestriction(value)
    }
    const handleSubmit = () => {
        navigate('/gestion-des-dossiers/echange');
    }

    return (
        <DossierLayout here={'list'}> 
            <FileDarianne actuel={'Modification d\'un dossier Echange'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/echange'}>
                    Gestion des Dossiers Echange
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Modification du dossier</h1>
                <button type='button' className='sigepec-btn is--primary' onClick={() => {handleSubmit()}}>Confirmer et Enrégistrer les modifications</button>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations personnelles</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Type de permis :</span><strong>{typeP}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Durée de validité</span><strong>5 ans</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nom :</span><strong>{nom}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nom de jeune fille</span><strong>{nomJFille ? (nomJFille) : ("N/D")}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Prenom(s) :</span><strong>{prenom}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Genre :</span>
                                    <strong>
                                        {genre.value === 'f' ? (
                                            "Feminin"
                                        ) : (
                                            <>
                                            {
                                                genre.value === 'h' ? (
                                                    "Masculin"
                                                ) : (
                                                    "Autre"
                                                )
                                            }
                                            </>
                                        )
                                        }
                                    </strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de naissance :</span><strong>{birthday}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nationalité :</span><strong>{nationalite.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Profession :</span><strong>{profession.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nom du père :</span><strong>{fathername}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Prenom du père :</span><strong>{fatherprename}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nom de la mère :</span><strong>{mothername}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Prenom de la mère :</span><strong>{motherprename}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__btn">
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('personal')}}>
                                    Modifier les informations
                                </button>
                            </div>
                            
                        </div>
                        <div className='sigepec-module-add-section__box'>
                            <h2>Adresses, contact et autres références</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Adresse :</span><strong>{address}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>BoÎte postale :</span><strong>{postale}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Téléphone :</span><strong>{phone}</strong>
                                </div>
                            </div>
                        
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie Demandée :</span><strong>{category.value}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie Obtenue:</span><strong>{categoryO.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Aptitude physique :</span><strong>{physique.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Province :</span><strong>{province.value}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Restriction :</span><strong>{restriction}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance :</span><strong>{dateDelivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de délivrance :</span><strong>{lieuDelivrance.value}</strong>
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
                                    <span>Référence antérieure:</span><strong>{reference}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__btn">
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('address')}}>
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
                            <FilePreview id={'certificat'} dvaleur={scanCertificat}>
                            Scan du certificat d’authenticité
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
            <div className='sigepec-modal' id='personal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('personal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                    <h2>Informations personnelles</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={typeP} id={'nom'} type={'text'} label={'Type de permis'} tooltip={'Entrer le type de permis'} fnc={changeTypep}>
                                Entrer le type de permis
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de famille du candidat'} fnc={changeNom}>
                                Entrer le nom de famille
                            </NormalTextField>
                            <NormalTextField value={nomJFille} id={'nom_de_jeune_fille'} type={'text'} label={'Nom de jeune fille (facultatif)'} facultatif={true} tooltip={'Entrer le nom de jeune fille s\'il yen a'} fnc={changeNomJFille}>
                                Entrer le nom de jeune fille
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom(s) '} tooltip={'Entrer le/les prenoms'} fnc={changePrenom}>
                                Entrer le/les prenom(s)
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={birthday} id={'birthday'} label={'Date de naissance du candidat'} type={'date'} tooltip={'Entrer la date de naissance du candidat'} fnc={changeBirthday}>
                                Entrer la date de naissance du candidat
                            </NormalTextField>
                            <SelectField id={'genre'} dvalue={genre} label={'Genre'} options={optionGenre} tooltip={'Choisir le genre'} fnc={changeGenre}>
                                Choisir le genre
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'nationalite'} dvalue={nationalite} label={'Nationalité'} options={optionNationalite} tooltip={'Choisir la nationalité du candidat'} fnc={changeNationalite}>
                                Choisir le pays de naissance du candidat
                            </SelectField>
                            <SelectField id={'profession'} dvalue={profession} label={'Profession'} options={optionProfession} tooltip={'Entrer la profession du candidat'} fnc={changeProfession}>
                                Choisir la profession
                            </SelectField>
                        </div>
                        <h2>Informations sur les parents</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'nom_du_pere'} value={fathername} label={'Nom du père du candidat'} tooltip={'Entrer le nom de famille du père du candidat'} fnc={changeFathername}>
                                Entrer le nom de famille du père
                            </NormalTextField>
                            <NormalTextField id={'prenom_du_pere'} value={fatherprename} type={'text'} label={'Prénoms du père'} tooltip={'Entrer le/les prénoms du père'} fnc={changeFatherprename}>
                                Entrer le/les prénoms du père
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'nom_de_la_mere'} value={mothername} type={'text'} label={'Nom du mère'} tooltip={'Entrer le nom de famille de la mère'} fnc={changeMothername}>
                                Entrer le nom de famille de la mère 
                            </NormalTextField>
                            <NormalTextField id={'prenom_de_mere'} value={motherprename} type={'text'} label={'Prénoms de la mère'} tooltip={'Entrer le/les prénoms de la mère'} fnc={changeMotherprename}>
                                Entrer le/les prénoms de la mère
                            </NormalTextField>
                        </div>
                            
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('personal')}}>
                                Enrégistrer et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='address'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('address')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                    
                    <h2>Adresses et contact</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'adresse'} value={address} type={'text'} label={'Adresse'} tooltip={'Entrer l\'adresse'} fnc={changeAdresse}>
                                Entrer l'adresse
                            </NormalTextField>
                            <NormalTextField id={'postale'} value={postale} type={'text'} label={'Boîte postale'} tooltip={'Entrer la boîte postale'} fnc={changePostale}>
                                Entrer la boîte postale
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={phone} type={'phone'} label={'Téléphone du candidat'} tooltip={'Entrer le numéro de téléphone du candidat'} fnc={setPhone}>
                                Entrer le numéro de téléphone du candidat
                            </PhoneNumberField>
                        </div>
                        <h2>Autres Références</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'province'} dvalue={province} label={'Province'} options={optionProvince} tooltip={'Choisir la province'} fnc={changeProvince}>
                                Choisir la province
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'categorie'} dvalue={categoryO} label={'Catégorie obtenue'} options={optionCategorie} tooltip={'Choisir la catégorie de permis obtenue'} fnc={changeCategoryO}>
                                Choisir la catégorie obtenue
                            </SelectField>
                            <SelectField id={'categorie'} dvalue={category} label={'Catégorie obtenue'} options={optionCategorie} tooltip={'Choisir la catégorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la catégorie demandée
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'physiques'} dvalue={physique} label={'Aptitude physique'} options={optionPhysique} tooltip={'Quelles sont maux physiques du candidat'} fnc={changePhysique}>
                                Choisir parmis la liste
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'restriction'}  value={restriction} type={'text'} label={'Restriction'} tooltip={'Entrer la restiction'} fnc={changeRestriction}>
                                Entrer la restriction
                            </NormalTextField>
                            <NormalTextField id={'reference'}  value={reference} type={'text'} label={'Référence'} tooltip={'Entrer le numéro de téléphone'} fnc={changeReference}>
                                Entrer la référence
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'date_obtention'}  value={dateObtention} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                            <SelectField id={'lieu_obtention'} dvalue={lieuObtention} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuObtention}>
                                Choisir le lieu d'obtention
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'date_delivrance'}  value={dateDelivrance} type={'date'} label={'Date de délivrance'} tooltip={'Entrer la date de délivrance'} fnc={changeDateDelivrance}>
                                Entrer la date de délivrance
                            </NormalTextField>
                            <SelectField id={'lieu'} dvalue={lieuDelivrance} label={'Lieu de délivrance'} options={optionProvince} tooltip={'Choisir le lieu de délivrance'} fnc={changeLieuDelivrance}>
                                Choisir le lieu de délivrance
                            </SelectField>
                        </div>

                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('address')}}>
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
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-form__container is--large has--flex">
                            <FileField id={'quittance'} dvalue={scanBuy} accept={''} fnc={changeScanBuy}>
                                Scan de la quittance de paiement
                            </FileField>
                            <FileField id={'cnib'} accept={''} dvalue={scanCnib} fnc={changeScanCnib}>
                                Scan de la pièce d’identité légalisée
                            </FileField>
                            <FileField id={'birth'} accept={''}  dvalue={scanBirth} fnc={changeScanBirth}>
                                Scan de la photocopie de l’acte de naissance
                            </FileField>
                            <FileField id={'medical'} accept={''}  dvalue={scanMedical} fnc={changeScanMedical}>
                                Scan de la visite médicale
                            </FileField>
                            <FileField id={'certificat'} accept={''}  dvalue={scanCertificat} fnc={changeScanCertificat}>
                                Scan du certificat d’authenticité
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

export default EchangeEdit;