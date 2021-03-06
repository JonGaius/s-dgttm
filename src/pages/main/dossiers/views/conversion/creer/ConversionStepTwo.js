import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

const ConversionStepTwo = ({title}) => {
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
            value: 'Handicap?? Moteur',
            label: 'Handicap?? Moteur'
        },
        {
            value: 'Handicap?? Auditif',
            label: 'Handicap?? Auditif'
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
            navigate('/gestion-des-dossiers/creer/conversions/etape-3', {
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
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/conversions"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                    </ul>);
    return (
        <DossierLayout actions={actions}> 
            <FileDarianne actuel={'Ajout d\'une conversion'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/conversions'}>
                    Conversion
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes ?? suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations</span>
                            </StepCard>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Adresse et R??f??rence</span>
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
                            <NormalTextField id={'postale'} value={postale} type={'text'} label={'Bo??te postale'} tooltip={'Entrer la bo??te postale'} fnc={changePostale}>
                                Entrer la bo??te postale
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={phone} type={'phone'} label={'T??l??phone du candidat'} tooltip={'Entrer le num??ro de t??l??phone du candidat'} fnc={setPhone}>
                                Entrer le num??ro de t??l??phone du candidat
                            </PhoneNumberField>
                        </div>
                        <h2>Autres R??f??rences</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'province'} dvalue={province} label={'Province'} options={optionProvince} tooltip={'Choisir la province'} fnc={changeProvince}>
                                Choisir la province
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'categorie'} dvalue={categoryO} label={'Cat??gorie obtenue'} options={optionCategorie} tooltip={'Choisir la cat??gorie de permis obtenue'} fnc={changeCategoryO}>
                                Choisir la cat??gorie obtenue
                            </SelectField>
                            <SelectField id={'categorie'} dvalue={category} label={'Cat??gorie obtenue'} options={optionCategorie} tooltip={'Choisir la cat??gorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la cat??gorie demand??e
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
                            <NormalTextField id={'reference'}  value={reference} type={'text'} label={'R??f??rence'} tooltip={'Entrer le num??ro de t??l??phone'} fnc={changeReference}>
                                Entrer la r??f??rence
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'date_obtention'}  value={dateObtention} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                            
                            <SelectField id={'lieuObtention'} dvalue={lieuObtention} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuObtention}>
                                Choisir le lieu d'obtention
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField id={'date_delivrance'}  value={dateDelivrance} type={'date'} label={'Date de d??livrance'} tooltip={'Entrer la date de d??livrance'} fnc={changeDateDelivrance}>
                                Entrer la date de d??livrance
                            </NormalTextField>
                            <SelectField id={'lieu_delivrance'} dvalue={lieuDelivrance} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuDelivrance}>
                                Choisir le lieu de d??livrance
                            </SelectField>
                        </div>
                        
                        <div className='sigepec-module-add-form__action has--flex'>
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <FormBtn type={'submit'} style={'is--primary is--large'}>
                               Enr??gistrer et Continuer
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </div>
        </DossierLayout>
    );
};

export default ConversionStepTwo;