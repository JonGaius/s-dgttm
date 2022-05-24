import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import BackIcon from '../../../../../../assets/icons/BackIcon';
import CheckIcon from '../../../../../../assets/icons/CheckIcon';
import ListIcon from '../../../../../../assets/icons/ListIcon';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../../../components/input/PhoneNumberField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const NPStepTwo = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const {state} = useLocation();
    const [hide, setHide] = useState(0);
    const [address, setAddress] = useState('');
    const [postale, setPostale] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [ecole, setEcole] = useState('');
    const [category, setCategory] = useState('');
    const [physique, setPhysique] = useState('Aucun');
    //
    const [numCNIB, setNumCNIB] = useState('');
    const [numNIP, setNumNIP] = useState('');
    //
    const [passport, setPassport] = useState('');

    let navigate = useNavigate();
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (address && postale && phone && province && ecole && category && physique && hide > 0) {
            
            if (hide === 1 && numCNIB && numNIP) {
                
                navigate('/gestion-des-dossiers/creer/nouveaux-permis/etape-3', {
                    state: {
                        nom: state.nom,
                        nomdejeunefille: state.nomJFille,
                        prenom: state.prenom,
                        fathername: state.fathername,
                        fatherprename: state.fatherprename,
                        mothername: state.mothername,
                        motherprename: state.motherprename,
                        birthday: state.birthday,
                        profession: state.profession,
                        genre: state.genre,
                        nationalite: state.nationalite,
                        address: address,
                        postale: postale,
                        phone: phone,
                        province: province,
                        ecole: ecole,
                        category: category,
                        physique: physique,
                        numCNIB: numCNIB,
                        numNIP: numNIP,
                        passport: passport,
                    }
                });
            }else{

                if (hide === 2 && passport) {
                    navigate('/gestion-des-dossiers/creer/nouveaux-permis/etape-3', {
                        state: {
                            nom: state.nom,
                            nomdejeunefille: state.nomJFille,
                            prenom: state.prenom,
                            fathername: state.fathername,
                            fatherprename: state.fatherprename,
                            mothername: state.mothername,
                            motherprename: state.motherprename,
                            birthday: state.birthday,
                            profession: state.profession,
                            genre: state.genre,
                            nationalite: state.nationalite,
                            address: address,
                            postale: postale,
                            phone: phone,
                            province: province,
                            ecole: ecole,
                            category: category,
                            physique: physique,
                            numCNIB: numCNIB,
                            numNIP: numNIP,
                            passport: passport,
                        }
                    });
                }else{
                    console.log('errors');
                }
            }

        }else{
            console.log('errors');
        }
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

    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/nouveaux-permis"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                    </ul>);
    return (
        <DossierLayout actions={actions}> 
            <FileDarianne actuel={'Ajout d\'un nouveau permis'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/nouveaux-permis'}>
                    Nouveaux permis
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations du candidat</span>
                            </StepCard>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Adresse et Référence</span>
                            </StepCard>
                            <StepCard type={''}>
                                <TimerIcon/> <span>Scan des fichiers</span>
                            </StepCard>
                        </div>
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
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
                                Choisir parmis la liste
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
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <FormBtn type={'submit'} style={'is--primary is--large'}>
                               Enrégistrer et Continuer
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </div>
        </DossierLayout>
    );
};

export default NPStepTwo;