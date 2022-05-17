import React, { useState } from 'react';
import TimerIcon from '../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../components/card/StepCard';
import FileField from '../../../../../components/input/FileField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import DossierLayout from '../../DossierLayout';

const PermisIntlCreate = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [numPermis, setNumPermis] = useState('');
    const [reference, setReference] = useState('');
    const [dateAuth, setDateAuth] = useState('');

    const changeNumPermis = (val) => {
        setNumPermis(val)
    } 
    const changeReference = (val) => {
        setReference(val)
    } 
    const changeDateAuth = (val) => {
        setDateAuth(val)
    } 

    const [scanCnib, setScanCnib] = useState(null);
    const [scanBuy, setScanBuy] = useState(null);
    const [scanPermis, setScanPermis] = useState(null);
    const [scanCertificat, setScanCertificat] = useState(null);

    const changeScanCnib = (value) => {
        setScanCnib(value)
    }
    const changeScanBuy = (value) => {
        setScanBuy(value)
    }
    const changeScanPermis = (value) => {
        setScanPermis(value)
    }
    const changeScanCertificat = (value) => {
        setScanCertificat(value)
    }
    const handleSubmit = (e) => {

    }
    return (
        <DossierLayout here={'add'}>
            <FileDarianne actuel={'Ajout d\'un dossier Permis internationaux'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/permis-internationaux'}>
                    Gestion des Dossiers Permis internationaux
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
                        <h2>Informations dossier Permis international</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numPermis} id={'permis'} type={'text'} label={'Numero de permis'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de permis
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={reference} id={'reference'} type={'text'} label={'Entrer la référence d’authentification'} tooltip={'Entrer la référence d’authentification'} fnc={changeReference}>
                                Entrer la référence d’authentification
                            </NormalTextField>
                            <NormalTextField value={dateAuth} id={'auth'} type={'date'} label={'Date d’authentification'} tooltip={'Entrer la date d’authentification'} fnc={changeDateAuth}>
                                Entrer la date d’authentification
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
                            <FileField id={'permis-s'} accept={''}  dvalue={scanPermis} fnc={changeScanPermis}>
                                Scan du permis de conduire
                            </FileField>
                            <FileField id={'certificat'} accept={''}  dvalue={scanCertificat} fnc={changeScanCertificat}>
                                Scan du certificat d’authenticité
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

export default PermisIntlCreate;