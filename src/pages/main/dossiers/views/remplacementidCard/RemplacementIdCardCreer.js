import React, { useState } from 'react';
import TimerIcon from '../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../components/card/StepCard';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import SelectField from '../../../../../components/input/SelectField';
import DossierLayout from '../../DossierLayout';

const RemplacementIdCardCreer = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [numIdcard, setNumIdcard] = useState('');
    const [reference, setReference] = useState('');
    const [dateAuth, setDateAuth] = useState('');
    const [dateDelivrance, setDateDelivrance] = useState('');
    const [lieuDelivrance, setLieuDelivrance] = useState('');

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

    const [scanCnib, setScanCnib] = useState(null);
    const [scanBuy, setScanBuy] = useState(null);
    const [scanBirth, setScanBirth] = useState(null);

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
    return (
        <DossierLayout here={'add'}>
            <FileDarianne actuel={'Ajout d\'un dossier Remplacement Idcard'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/remplacement-idcard'}>
                    Gestion des Dossiers Remplacement idCard
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Informations Dossier</span>
                            </StepCard>
                        </div>
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Informations dossier</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numIdcard} id={'permis'} type={'text'} label={'Numéro de l’IDcard'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de l'idCard
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={dateDelivrance} id={'datedelivrance'} type={'text'} label={'Date de délivrance'} tooltip={'Entrer la date de délivrance'} fnc={changeDateDelivrance}>
                                Entrer la date de délivrance
                            </NormalTextField>
                            <SelectField id={'lieu'} dvalue={lieuDelivrance} label={'Lieu de délivrance'} options={optionProvince} tooltip={'Choisir le lieu de délivrance'} fnc={changeLieuDelivrance}>
                                Choisir le lieu de délivrance
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={reference} id={'reference'} type={'text'} label={'Entrer la référence d’authenticité de l’IDcard'} tooltip={'Entrer la référence d’authenticité de l’IDcard'} fnc={changeReference}>
                                Entrer la référence d’authenticité de l’IDcard
                            </NormalTextField>
                            <NormalTextField value={dateAuth} id={'dateauth'} type={'date'} label={'Date d’authenticité'} tooltip={'Entrer la d’authenticité'} fnc={changeDateAuth}>
                                Entrer la date d’authenticité
                            </NormalTextField>
                        </div>
                        <h2>Scan de dossiers</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-form__container is--large has--flex">
                            <FileField id={'quittance'} dvalue={scanBuy} accept={''} fnc={changeScanBuy}>
                                Scan de la quittance de paiement
                            </FileField>
                            <FileField id={'cnib'} accept={''} dvalue={scanCnib} fnc={changeScanCnib}>
                                Scan de la pièce d’identité légalisée
                            </FileField>
                            <FileField id={'birth'} accept={''}  dvalue={scanBirth} fnc={changeScanBirth}>
                                Scan de l'acte de naissance
                            </FileField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <FormBtn type={'submit'} style={'is--primary is--large'}>
                            Enrégistrer les informations
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </div>
        </DossierLayout>
    );
};

export default RemplacementIdCardCreer;