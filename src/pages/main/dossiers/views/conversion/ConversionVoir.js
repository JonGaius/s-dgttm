import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import PermisIcon from '../../../../../assets/icons/ic/PermisIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const ConversionVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    const [typeP, setTypeP] = useState('');
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
    const [physique, setPhysique] = useState('');
    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanMedical, setScanMedical] = useState('');
    const [scanCertificat, setScanCertificat] = useState('');
    const [scanPermis, setScanPermis] = useState('');

    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/conversions"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/conversions"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/modifier/conversions/${slug.slug}`}>
                                <EditIcon/>  {"Modifier"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/valider/conversions/${slug.slug}`}>
                                <CheckIcon/>  {"Valider"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <ExportIcon/> {"Exporter"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <PrintIcon/> {"Imprimer"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item is--danger`}>
                            <button type='button'>
                                <TrashIcon/> {"Supprimer"}
                            </button>
                        </li>
                    </ul>);
    return (
        
        <DossierLayout actions={actions} >
            <FileDarianne actuel={"Apercu d'une conversion"}>
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
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Jonh Doe</h1>
            </div>

            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                                <h2>Informations personnelles</h2>
                                <div className='sigepec-h-bar'></div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Type de permis :</span><strong>{typeP}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Durée de validité</span><strong>5 ans</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Nom :</span><strong>{nom}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Nom de jeune fille</span><strong>{nomJFille ? (nomJFille) : ("N/D")}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Prenom(s) :</span><strong>{prenom}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Genre :</span>
                                        <strong>
                                            {genre === 'f' ? (
                                                "Feminin"
                                            ) : (
                                                <>
                                                {
                                                    genre === 'h' ? (
                                                        "Masculin"
                                                    ) : (
                                                        "Autre"
                                                    )
                                                }
                                                </>
                                            )
                                            }
                                        </strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Date de naissance :</span><strong>{birthday}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Nationalité :</span><strong>{nationalite}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Profession :</span><strong>{profession}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Nom du père :</span><strong>{fathername}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Prenom du père :</span><strong>{fatherprename}</strong>
                                    </div>
                                </div>
                                <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Nom de la mère :</span><strong>{mothername}</strong>
                                    </div>
                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                        <span>Prenom de la mère :</span><strong>{motherprename}</strong>
                                    </div>
                                </div>
                        </div>
                        <div className='sigepec-module-add-section__box'>
                            <h2>Adresses, contact et autres références</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Adresse :</span><strong>{address}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>BoÎte postale :</span><strong>{postale}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Téléphone :</span><strong>{phone}</strong>
                                </div>
                            </div>
                            
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie Demandée :</span><strong>{category}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie Obtenue:</span><strong>{categoryO}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Aptitude physique :</span><strong>{physique}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Province :</span><strong>{province}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Restriction :</span><strong>{restriction}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de délivrance :</span><strong>{dateDelivrance}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de délivrance :</span><strong>{lieuDelivrance}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date d'obtention :</span><strong>{dateObtention}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu d'obtention :</span><strong>{lieuObtention}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence antérieure:</span><strong>{reference}</strong>
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
                            <FilePreview id={'medicale'} dvaleur={scanMedical}>
                                Scan de la visite médicale
                            </FilePreview>
                            <FilePreview id={'permis'} dvaleur={scanPermis}>
                                Scan de l’original du permis militaire
                            </FilePreview>
                            <FilePreview id={'certificat'} dvaleur={scanCertificat}>
                            Scan du certificat d’appartenance au corps militaire
                            </FilePreview>
                        </div>
                    </div>
                    <div className="sigepec-module-add-section__container">
                        <h2>Le saviez-vous</h2>
                        <div className='sigepec-h-bar'></div>
                        
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default ConversionVoir;