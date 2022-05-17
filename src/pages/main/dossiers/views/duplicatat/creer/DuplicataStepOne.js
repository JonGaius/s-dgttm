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

const DuplicataStepOne = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
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
    const [numPermis, setNumPermis] = useState('');
    const [category, setCategory] = useState('');
    const [delivrance, setDelivrance] = useState('');
    const [lieu, setLieu] = useState('');
    const [dateObtention, setDateObtention] = useState('');
    const [lieuObtention, setLieuObtention] = useState('');
    const [lieuExtension, setLieuExtension] = useState('');
    const [dateAuthentification, setDateAuthentification] = useState('');
    const [refAuthentification, setRefAuthentification] = useState('');
    const [dateExtension, setDateExtension] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(numPermis && category && delivrance && lieu && dateObtention && lieuExtension && lieuObtention && dateAuthentification && refAuthentification && refAuthentification && dateExtension)
        navigate('/gestion-des-dossiers/creer/duplicata/etape-2', {
            state: {
                numPermis: numPermis,
                category: category,
                delivrance: delivrance,
                lieu: lieu,
                dateObtention: dateObtention,
                lieuExtension: lieuExtension,
                lieuObtention: lieuObtention,
                dateAuthentification: dateAuthentification,
                refAuthentification: refAuthentification,
                dateExtension: dateExtension,
            }
        }) 
    }

    return (
        <DossierLayout here={'add'}>
        <FileDarianne actuel={'Gestion des dossiers duplicata'}>
            <OldFileDariane link={'/'}>
                Accueil
            </OldFileDariane>
            <OldFileDariane link={'/gestion-des-dossiers'}>
                Gestion des Dossiers
            </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/duplicata'}>
                    Gestion des Dossiers Duplicata
                </OldFileDariane>
        </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Informations Dossier Duplicatat</span>
                            </StepCard>
                            <StepCard type={''}>
                                <TimerIcon/> <span>Scan des fichiers</span>
                            </StepCard>
                        </div>
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Informations dossier Duplicata</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numPermis} id={'permis'} type={'text'} label={'Numero de permis'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de permis
                            </NormalTextField>
                            <SelectField id={'categorie'} dvalue={category} label={'Catégorie obtenue'} options={optionCategorie} tooltip={'Choisir la catégorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la catégorie obtenue
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={delivrance} id={'date_delivrance'} type={'date'} label={'Date de délivrance'} tooltip={'Entrer la date de délivrance'} fnc={changeDelivrance}>
                                Entrer la date de délivrance
                            </NormalTextField>
                            <SelectField id={'lieu'} dvalue={lieu} label={'Lieu de délivrance'} options={optionProvince} tooltip={'Choisir le lieu de délivrance'} fnc={changeLieu}>
                                Choisir le lieu de délivrance
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
                            <NormalTextField value={dateAuthentification} id={'ref_anterieure'} type={'text'} label={'Date d\'anthenticité'} tooltip={'Entrer la date d\'anthenticité'} fnc={changeRefAnterieure}>
                                Entrer la date d'anthenticité
                            </NormalTextField>
                            <NormalTextField value={refAuthentification} id={'ref_auth'} type={'text'} label={'Référence d\'authenticité'} tooltip={'Entrer la référence d\'authenticité'} fnc={changeRefAuthentification}>
                                Entrer la référence d'authenticité
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

export default DuplicataStepOne;