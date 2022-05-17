import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const DuplicataIdCardVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams();
    const [numIdcard, setNumIdcard] = useState('');
    const [reference, setReference] = useState('');
    const [dateAuth, setDateAuth] = useState('');
    const [dateDelivrance, setDateDelivrance] = useState('');
    const [lieuDelivrance, setLieuDelivrance] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanCertificat, setScanCertificat] = useState('');

    return (
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Aperçu d\'un dossier Duplicata idCard'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/duplicata-idcard'}>
                    Gestion des Dossiers Duplicata idCards
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Voir les informations Dossier N 4400</h1>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Numero de l'idcard :</span><strong>{numIdcard}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de dépôt :</span><strong>{'12/01/2020'}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance</span><strong>{dateDelivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de délivrance :</span><strong>{lieuDelivrance}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence d'authenticité</span><strong>{reference}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'authenticité :</span><strong>{dateAuth}</strong>
                                </div>
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
                            <FilePreview id={'permis'} dvaleur={scanBirth}>
                                Scan de la photocopie de l’acte de naissance
                            </FilePreview>
                            <FilePreview id={'certificat'} dvaleur={scanCertificat}>
                                Scan du certificat d’authenticité
                            </FilePreview>
                        </div>
                    </div>
                    <div className="sigepec-module-add-section__container">
                        <h2>Que souhaitez-vous faire</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <Link to={`/gestion-des-dossiers/modifier/duplicata-idcard/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
                                <EditIcon/> <span>Modifier les informations du dossier</span>
                            </Link>
                            <Link to={`/gestion-des-dossiers/valider/duplicata-idcard/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
                                <CheckIcon/> <span>Valider le dossier</span>
                            </Link>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <SavedIcon/> <span>Archiver le dossier</span>
                            </button>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <TrashIcon/> <span>Supprimer le dossier</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default DuplicataIdCardVoir;