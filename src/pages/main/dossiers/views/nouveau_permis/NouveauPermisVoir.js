import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import FilePreview from '../../../../../components/card/FilePreview';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const NouveauPermisVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
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
    const [hide, setHide] = useState(0);
    const [address, setAddress] = useState('');
    const [postale, setPostale] = useState('');
    const [phone, setPhone] = useState('');
    const [province, setProvince] = useState('');
    const [ecole, setEcole] = useState('');
    const [category, setCategory] = useState('');
    const [physique, setPhysique] = useState('');
    //
    const [numCNIB, setNumCNIB] = useState('');
    const [numNIP, setNumNIP] = useState('');
    //
    const [passport, setPassport] = useState('');

    const [scanCnib, setScanCnib] = useState('');
    const [scanBuy, setScanBuy] = useState('');
    const [scanBirth, setScanBirth] = useState('');
    const [scanMedical, setScanMedical] = useState('');
    

    useEffect(() => {
        if(passport){
            setHide(2)
        }else{
            setHide(1)
        }
    }, [])
    return (
       
        <DossierLayout here={'list'}> 
            <FileDarianne actuel={'Apercu d\'un Dossier Nouveau Permis'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/nouveaux-permis'}>
                    Gestion des Dossiers Nouveau Permis
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
                            <h2>Adresses, contact et autres références du candidat</h2>
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
                                {
                                    (hide === 2) ? (
                                        <>
                                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                <span>Numero Passport :</span><strong>{passport}</strong>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                (hide === 1) ? (
                                                    <>
                                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                        <span>Numero NIP :</span><strong>{numNIP}</strong>
                                                    </div>
                                                    <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                                        <span>Numéro CNIB :</span><strong>{numCNIB}</strong>
                                                    </div>
                                                    </>
                                                
                                                ) : (
                                                    null
                                                )
                                            }
                                            
                                        </>
                                    )
                                }
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Catégorie :</span><strong>{category}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Aptitude physique :</span><strong>{physique}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Province :</span><strong>{province}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Auto-Ecole :</span><strong>{ecole}</strong>
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
                        </div>
                    </div>
                    <div className="sigepec-module-add-section__container">
                        <h2>Que souhaitez-vous faire</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <Link to={`/gestion-des-dossiers/modifier/nouveaux-permis/${slug.slug}`} className="sigepec-module-list__action is--large has--flex">
                                <EditIcon/> <span>Modifier les informations du dossier</span>
                            </Link>
                            <Link to={`/gestion-des-dossiers/valider/nouveaux-permis/${slug.slug}`} className="sigepec-module-list__action is--large has--flex">
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

export default NouveauPermisVoir;