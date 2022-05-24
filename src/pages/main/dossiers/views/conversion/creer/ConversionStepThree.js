import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import CheckIcon from '../../../../../../assets/icons/CheckIcon';
import ListIcon from '../../../../../../assets/icons/ListIcon';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import FileField from '../../../../../../components/input/FileField';
import DossierLayout from '../../../DossierLayout';

const ConversionStepThree = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let navigate = useNavigate();
    const {state} = useLocation();

    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanMedical, setScanMedical] = useState('');
    const [scanCertificat, setScanCertificat] = useState('');
    const [scanPermis, setScanPermis] = useState('');

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
    const changeScanPermis = (value) => {
        setScanPermis(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (scanCnib && scanBirth && scanMedical && scanBuy && scanPermis && scanCertificat) {
            navigate('/gestion-des-dossiers/creer/conversions/apercu', {
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
                    address: state.address,
                    postale: state.postale,
                    phone: state.phone,
                    province: state.province,
                    category: state.category,
                    categoryO: state.categoryO,
                    lieuDelivrance: state.lieuDelivrance,
                    lieuObtention: state.lieuObtention,
                    dateDelivrance: state.dateDelivrance,
                    dateObtention: state.dateObtention,
                    restriction: state.restriction,
                    reference: state.reference,
                    physique: state.physique,
                    scanCnib: scanCnib,
                    scanBuy: scanBuy,
                    scanMedical: scanMedical,
                    scanBirth: scanBirth,
                    scanCertificat: scanCertificat,
                    scanPermis: scanPermis,
                }
            });
        }else{
            console.log("error");
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
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations</span>
                            </StepCard>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Adresse et Référence</span>
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
                            <FileField id={'medical'} accept={''}  dvalue={scanMedical} fnc={changeScanMedical}>
                                Scan de la visite médicale
                            </FileField>
                            <FileField id={'certificat'} accept={''}  dvalue={scanCertificat} fnc={changeScanCertificat}>
                                Scan du certificat d’appartenance au corps militaire
                            </FileField>
                            <FileField id={'permis'} accept={''}  dvalue={scanPermis} fnc={changeScanPermis}>
                                Scan de l’original du permis militaire
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

export default ConversionStepThree;