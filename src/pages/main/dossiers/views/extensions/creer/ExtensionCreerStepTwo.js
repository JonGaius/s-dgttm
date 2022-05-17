import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import CheckIcon from '../../../../../../assets/icons/CheckIcon';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import FileField from '../../../../../../components/input/FileField';
import DossierLayout from '../../../DossierLayout';

const ExtensionCreerStepTwo = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let {state} = useLocation();
    let navigate = useNavigate();

    const [scanCnib, setScanCnib] = useState(null);
    const [scanBuy, setScanBuy] = useState(null);
    const [scanBirth, setScanBirth] = useState(null);
    const [scanCertificat, setScanCertificat] = useState(null);

    const changeScanCnib = (value) => {
        setScanCnib(value)
    }
    const changeScanBuy = (value) => {
        setScanBuy(value)
    }
    const changeScanBirth = (value) => {
        setScanBirth(value)
    }
    const changeScanCertificat = (value) => {
        setScanCertificat(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (scanCnib && scanBirth && scanCertificat && scanBuy) {
            navigate('/gestion-des-dossiers/creer/extensions/apercu', {
                state: {
                    numPermis: state.numPermis,
                    derExtension: state.derExtension,
                    category: state.category,
                    delivrance: state.delivrance,
                    lieu: state.lieu,
                    dateObtention: state.dateObtention,
                    modeObtention: state.modeObtention,
                    lieuObtention: state.lieuObtention,
                    refAnterieure: state.refAnterieure,
                    refAuthentification: state.refAuthentification,
                    dateAuthentification: state.dateAuthentification,
                    scanCnib: scanCnib,
                    scanBuy: scanBuy,
                    scanCertificat: scanCertificat,
                    scanBirth: scanBirth,
                }
            });
        }else{
            console.log("error");
        }
    }
    return (
        <DossierLayout here={'add'}>
            <FileDarianne actuel={'Ajout d\'un dossier Extension'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/extensions'}>
                    Gestion des Dossiers Extension
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations Dossier Extension</span>
                            </StepCard>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Scan des fichiers</span>
                            </StepCard>
                        </div>
                    </div>
                </div>

                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Scan des documents</h2>
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
                            <FileField id={'certificat'} accept={''}  dvalue={scanCertificat} fnc={changeScanCertificat}>
                                Scan du certificat d’authenticité
                            </FileField>
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

export default ExtensionCreerStepTwo;