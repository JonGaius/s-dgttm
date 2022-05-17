import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const ExtensionVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams();

    const [numPermis, setNumPermis] = useState('');
    const [derExtension, setDerExtension] = useState('');
    const [category, setCategory] = useState('');
    const [delivrance, setDelivrance] = useState('');
    const [lieu, setLieu] = useState('');
    const [dateObtention, setDateObtention] = useState('');
    const [lieuObtention, setLieuObtention] = useState('');
    const [modeObtention, setModeObtention] = useState('');
    const [refAnterieure, setRefAnterieure] = useState('');
    const [refAuthentification, setRefAuthentification] = useState('');
    const [dateAuthentification, setDateAuthentification] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanCertificat, setScanCertificat] = useState('');

    return (
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Aperçu d\'un dossier Extension'}>
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
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Voir les informations</h1>
            </div>

            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                        <h2>Informations personnelles du candidat</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Numero de permis :</span><strong>{numPermis}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de dernière extension</span><strong>{derExtension}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Categorie Obtenue :</span><strong>{category}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance :</span><strong>{delivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de delivrance</span><strong>{lieu}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'obtention :</span><strong>{dateObtention}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu d'obtention</span><strong>{lieuObtention}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Mode d'obtention :</span><strong>{modeObtention}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence antérieure :</span><strong>{refAnterieure}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence authentification</span><strong>{refAuthentification}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'authentification :</span><strong>{dateAuthentification}</strong>
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
                            <FilePreview id={'birth'} dvaleur={scanBirth}>
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
                            <Link to={`/gestion-des-dossiers/modifier/extensions/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
                                <EditIcon/> <span>Modifier les informations du dossier</span>
                            </Link>
                            <Link to={`/gestion-des-dossiers/valider/extensions/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
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

export default ExtensionVoir;