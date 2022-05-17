import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckIcon from '../../../../../../assets/icons/CheckIcon';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../../../components/input/PhoneNumberField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const EchangeStepTwo = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const {state} = useLocation();
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
    const [physique, setPhysique] = useState('Aucun');
   
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
    const changeCategoryO = (value) => {
        setCategoryO(value)
    }
    const changeCategory = (value) => {
        setCategory(value)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address && postale && phone && province  && category && physique && restriction && dateDelivrance && lieuDelivrance && dateObtention && lieuObtention && reference) {
            navigate('/gestion-des-dossiers/creer/echange/etape-3', {
                state: {
                    typeP: state.typeP,
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
                    category: category,
                    categoryO: categoryO,
                    lieuDelivrance: lieuDelivrance,
                    lieuObtention: lieuObtention,
                    dateDelivrance: dateDelivrance,
                    dateObtention: dateObtention,
                    restriction: restriction,
                    reference: reference,
                    physique: physique,
                }
            });
        }else{
            console.log('errors');
        }
    }
    return (
        <DossierLayout here={'add'}> 
            <FileDarianne actuel={'Ajout d\'un dossier Echange'}>
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
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations</span>
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

export default EchangeStepTwo;