import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const PlainteVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams();
    const [numIdCard, setNumIdCard] = useState('');
    const [objet, setObjet] = useState('');
    const [examen, setExamen] = useState('');
    const [reference, setReference] = useState('');
    return (
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Aperçu d\' un dossier Plainte'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/plaintes'}>
                    Gestion des Dossiers Plaintes
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Voir les informations</h1>
            </div>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className="sigepec-module-add__section">
                    <div className="sigepec-module-add-section__container">
                        <div className='sigepec-module-add-section__box'>
                            <h2>Informations</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Objet de la plainte :</span><strong>{objet}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Numero de l'idCard :</span><strong>{numIdCard}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de dépôt :</span><strong>{'12/12/2022'}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Examen de la plainte</span><strong>{examen}</strong>
                                </div>
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Référence de l'examen</span><strong>{reference}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigepec-module-add__section">
                    
                    <div className="sigepec-module-add-section__container">
                        <h2>Que souhaitez-vous faire</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <Link to={`/gestion-des-dossiers/modifier/plaintes/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
                                <EditIcon/> <span>Modifier les informations du dossier</span>
                            </Link>
                            <Link to={`/gestion-des-dossiers/valider/plaintes/${params.slug}`} className="sigepec-module-list__action is--large has--flex">
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

export default PlainteVoir;