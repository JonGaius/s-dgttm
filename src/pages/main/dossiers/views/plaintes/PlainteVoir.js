import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import EditIcon from '../../../../../assets/icons/EditIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import SavedIcon from '../../../../../assets/icons/SavedIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const PlainteVoir = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    const [numIdCard, setNumIdCard] = useState('');
    const [objet, setObjet] = useState('');
    const [examen, setExamen] = useState('');
    const [reference, setReference] = useState('');

    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/remplacement-idcard"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/plaintes"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/modifier/plaintes/${slug.slug}`}>
                                <EditIcon/>  {"Modifier"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={`/gestion-des-dossiers/valider/plaintes/${slug.slug}`}>
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
        <DossierLayout actions={actions}>
            <FileDarianne actuel={'Aperçu d\' une plainte'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/plaintes'}>
                    Plaintes
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>N° de la plainte 8800</h1>
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
                        <h2>Le saviez-vous?</h2>
                        <div className='sigepec-h-bar'></div>
                        
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default PlainteVoir;