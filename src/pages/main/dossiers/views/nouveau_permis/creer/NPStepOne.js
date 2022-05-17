import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const NPStepOne = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
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
    let navigate = useNavigate()
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
        setNationalite(val);
        console.log(nationalite)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(nationalite.value)
        if(nom && prenom && birthday && genre && nationalite && profession && fathername && mothername && fatherprename && motherprename){
            navigate('/gestion-des-dossiers/creer/nouveaux-permis/etape-2', {
                state: {
                    nom: nom,
                    nomdejeunefille: nomJFille,
                    prenom: prenom,
                    fathername: fathername,
                    fatherprename: fatherprename,
                    mothername: mothername,
                    motherprename: motherprename,
                    birthday: birthday,
                    profession: profession,
                    genre: genre,
                    nationalite: nationalite,
                }
            });
        }else{
            console.log("erreur");
        }
    }

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
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Informations du candidat</span>
                            </StepCard>
                            <StepCard type={''}>
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
                            <SelectField id={'profession'} dvalue={profession} label={'Profession'} options={optionProfession} tooltip={'Entrer la profession du candidat'} fnc={changeProfession}>
                                Choisir la profession
                            </SelectField>
                            <SelectField id={'nationalite'} dvalue={nationalite} label={'Nationalité'} options={optionNationalite} tooltip={'Choisir la nationalité du candidat'} fnc={changeNationalite}>
                                Choisir la nationalité du candidat
                            </SelectField>
                        </div>
                        <h2>Informations sur les parents</h2>
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

export default NPStepOne;