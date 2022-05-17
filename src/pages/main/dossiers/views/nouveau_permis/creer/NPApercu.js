import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackIcon from '../../../../../../assets/icons/BackIcon';
import CancelIcon from '../../../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../../../assets/icons/CheckIcon';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import FileField from '../../../../../../components/input/FileField';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../../../components/input/PhoneNumberField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const NPApercu = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const {state} = useLocation();
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
    let optionAutoEcole =[
        {
            value: 'Auto Awesome',
            label: 'Auto Awesome'
        },
        {
            value: 'Auto Ecole',
            label: 'Auto Ecole'
        },
        {
            value: 'Voiture Ecole',
            label: 'Voiture Ecole'
        },
        {
            value: 'Incredible auto Ecole',
            label: 'Incredible auto Ecole'
        },
        {
            value: 'Incredible auto Ecole 2',
            label: 'Incredible auto Ecole 2'
        },
    ];
    let optionPhysique =[
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

    let navigate = useNavigate();
    const [nom, setNom] = useState(state.nom);
    const [prenom, setPrenom] = useState(state.prenom);
    const [nomJFille, setNomJFille] = useState(state.nomdejeunefille);
    const [birthday, setBirthday] = useState(state.birthday);
    const [genre, setGenre] = useState(state.genre);
    const [nationalite, setNationalite] = useState(state.nationalite);
    const [profession, setProfession] = useState(state.profession);
    const [fathername, setFathername] = useState(state.fathername);
    const [fatherprename, setFatherprename] = useState(state.fatherprename);
    const [mothername, setMothername] = useState(state.mothername);
    const [motherprename, setMotherprename] = useState(state.motherprename);
    const [hide, setHide] = useState(0);
    const [address, setAddress] = useState(state.address);
    const [postale, setPostale] = useState(state.postale);
    const [phone, setPhone] = useState(state.phone);
    const [province, setProvince] = useState(state.province);
    const [ecole, setEcole] = useState(state.ecole);
    const [category, setCategory] = useState(state.category);
    const [physique, setPhysique] = useState(state.physique);
    //
    const [numCNIB, setNumCNIB] = useState(state.numNIP);
    const [numNIP, setNumNIP] = useState(state.numCNIB);
    //
    const [passport, setPassport] = useState(state.passport);

    const [scanCnib, setScanCnib] = useState(state.scanCnib);
    const [scanBuy, setScanBuy] = useState(state.scanBuy);
    const [scanBirth, setScanBirth] = useState(state.scanBirth);
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
    const changeScanMedical = (value) => {
        setScanMedical(value)
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
    const changeHide = (value) => {
        setHide(value);
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
    const changeEcole = (value) => {
        setEcole(value)
    }
    const changeCategory = (value) => {
        setCategory(value)
    }
    const changePhysique = (value) => {
        setPhysique(value)
    }
    const changeNumCnib = (value) => {
        setNumCNIB(value)
    }
    const changeNumNIP = (value) => {
        setNumNIP(value)
    }
    const changeNumPassport = (value) => {
        setPassport(value)
    }
    const handleSubmit = () => {
        navigate('/gestion-des-dossiers/nouveaux-permis');
    }

    useEffect(() => {
        if(passport){
            setHide(2)
        }else{
            setHide(1)
        }
    }, [])

    return (
        <DossierLayout here={'add'}> 
            <FileDarianne actuel={'Ajout d\'un Nouveau Permis'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/nouveaux-permis'}>
                    Gestion des Nouveaux permis
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Aperçu</h1>
                <button type='button' className='sigepec-btn is--primary' onClick={() => {handleSubmit()}}>Confirmer et Enrégistrer les informations</button>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations personnelles du candidat</h2>
                            <div className='sigepec-h-bar'></div>
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
                            <h2>Adresses, contact et autres références du candidat</h2>
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
                                {
                                    (hide === 2) ? (
                                        <>
                                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                <span>Numero Passport :</span><strong>{passport}</strong>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                (hide === 1) ? (
                                                    <>
                                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                        <span>Numero NIP :</span><strong>{numNIP}</strong>
                                                    </div>
                                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                        <span>Numéro CNIB :</span><strong>{numCNIB}</strong>
                                                    </div>
                                                    </>
                                                
                                                ) : (
                                                    null
                                                )
                                            }
                                            
                                        </>
                                    )
                                }
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie :</span><strong>{category.value}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Aptitude physique :</span><strong>{physique.value}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Province :</span><strong>{province.value}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Auto-Ecole :</span><strong>{ecole.value}</strong>
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
                       
                            <h2>Informations personnelles du candidat</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom du candidat'} tooltip={'Entrer le nom de famille du candidat'} fnc={changeNom}>
                                    Entrer le nom de famille du candidat
                                </NormalTextField>
                                <NormalTextField value={nomJFille} id={'nom_de_jeune_fille'} type={'text'} label={'Nom de jeune fille (facultatif)'} facultatif={true} tooltip={'Entrer le nom de jeune fille de la candidate s\'il yen a'} fnc={changeNomJFille}>
                                    Entrer le nom de jeune fille de la candidate
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom(s) du candidat'} tooltip={'Entrer le/les prenoms du candidat'} fnc={changePrenom}>
                                    Entrer le/les prenom(s) du candidat
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={birthday} id={'birthday'} label={'Date de naissance du candidat'} type={'date'} tooltip={'Entrer la date de naissance du candidat'} fnc={changeBirthday}>
                                    Entrer la date de naissance du candidat
                                </NormalTextField>
                                <SelectField id={'genre'} dvalue={genre} label={'Genre'} options={optionGenre} tooltip={'Choisir le genre du candidat'} fnc={changeGenre}>
                                    Choisir le genre du candidat
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'nationalite'} dvalue={nationalite} label={'Nationalité'} options={optionNationalite} tooltip={'Choisir la nationalité du candidat'} fnc={changeNationalite}>
                                    Choisir le pays de naissance du candidat
                                </SelectField>
                                <NormalTextField id={'profession'} value={profession} type={'text'} label={'Profession du candidat'} tooltip={'Entrer la profession du candidat'} fnc={changeProfession}>
                                    Entrer la profession
                                </NormalTextField>
                            </div>
                            <h2>Informations sur les parents/tuteurs du candidat</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField id={'nom_du_pere'} value={fathername} label={'Nom du père du candidat'} tooltip={'Entrer le nom de famille du père du candidat'} fnc={changeFathername}>
                                    Entrer le nom de famille du père du candidat
                                </NormalTextField>
                                <NormalTextField id={'prenom_du_pere'} value={fatherprename} type={'text'} label={'Prénoms du père du du candidat'} tooltip={'Entrer le/les prénoms du père du du candidat'} fnc={changeFatherprename}>
                                    Entrer le/les prénoms du père du du candidat
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField id={'nom_de_la_mere'} value={mothername} type={'text'} label={'Nom du mère de la candidat'} tooltip={'Entrer le nom de famille de la mère du candidat'} fnc={changeMothername}>
                                    Entrer le nom de famille de la mère du candidat
                                </NormalTextField>
                                <NormalTextField id={'prenom_de_mere'} value={motherprename} type={'text'} label={'Prénoms de la mère du du candidat'} tooltip={'Entrer le/les prénoms du père du du candidat'} fnc={changeMotherprename}>
                                    Entrer le/les prénoms de la mère du du candidat
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
                    <h2>Adresses et contact du candidat</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'adresse'} value={address} type={'text'} label={'Adresse du candidat'} tooltip={'Entrer l\'adresse du candidat'} fnc={changeAdresse}>
                                Entrer l'adresse
                            </NormalTextField>
                            <NormalTextField id={'postale'} value={postale} type={'text'} label={'Boîte postale du candidat'} tooltip={'Entrer la boîte postale'} fnc={changePostale}>
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
                            <SelectField id={'autoecole'} dvalue={ecole} label={'Auto Ecole'} options={optionAutoEcole} tooltip={'Choisir l\'auto-école'} fnc={changeEcole}>
                                Choisir l'auto école
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'categorie'} dvalue={category} label={'Catégorie demandée'} options={optionCategorie} tooltip={'Choisir la catégorie de permis demandée'} fnc={changeCategory}>
                                Choisir la catégorie demandée
                            </SelectField>
                            <SelectField id={'physiques'} dvalue={physique} label={'Aptitude physique'} options={optionPhysique} tooltip={'Quelles sont maux physiques du candidat'} fnc={changePhysique}>
                                Aucun
                            </SelectField>
                        </div>
                        <h2>Référence CNIB ou Passport</h2>
                        <div className='sigepec-h-bar'></div>
                        {
                            (hide === 0) ? (
                                <div className='sigepec-module-add-form__special has--flex_between is--large'>
                                    <strong>Veuillez choisir entre</strong>
                                    <div className='sigepec-module-add-form-special has--flex is--large'>
                                        <button type='button' className='has--flex_center' onClick={() => {changeHide(1)}}>
                                            <CheckIcon/>
                                            <span>CNIB</span>
                                        </button>
                                        <button type='button' className='has--flex_center' onClick={() => {changeHide(2)}}>
                                            <CheckIcon/>
                                            <span>Passport</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                {
                                    (hide === 1) ? (
                                        <>
                                            <div className="sigepec-module-add-form-special__head is--large has--flex" onClick={() => {changeHide(0)}}>
                                                <BackIcon/>
                                                <strong>Informations CNIB</strong>
                                            </div>
                                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                                <NormalTextField value={numCNIB} id={'cnib_num'} type={'text'} label={'Numero CNIB'} tooltip={'Entrer le numero CNIB du candidat'} fnc={changeNumCnib}>
                                                    Entrer le numero CNIB
                                                </NormalTextField>
                                                <NormalTextField id={'nip'} value={numNIP} type={'text'} label={'NIP'} tooltip={'Entrer le nip'} fnc={changeNumNIP}>
                                                    Entrer le NIP
                                                </NormalTextField>
                                            </div>
                                        </>
                                    ) : (
                                    <>
                                            <div className="sigepec-module-add-form-special__head is--large has--flex" onClick={() => {changeHide(0)}}>
                                                <BackIcon/>
                                                <strong>Informations passport</strong>
                                            </div>
                                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                                <NormalTextField id={'cnib_num'} type={'text'} label={'Numero Passport'} tooltip={'Entrer le numero se trouvant sur le passport du candidat'} fnc={changeNumPassport} value={passport}>
                                                    Entrer le numero du passport
                                                </NormalTextField>
                                            </div>
                                    </>)
                                }
                                </>
                            )
                        }

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
                            <FileField id={'Medical'} accept={''}  dvalue={scanMedical} fnc={changeScanMedical}>
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

export default NPApercu;