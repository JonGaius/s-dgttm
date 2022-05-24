import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import DossierIcon from '../../../../../assets/icons/ic/DossierIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../components/card/StepCard';
import NormalTextField from '../../../../../components/input/NormalTextField';
import DossierLayout from '../../DossierLayout';

const PlaintesEdit = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [numIdCard, setNumIdCard] = useState('');
    const [objet, setObjet] = useState('');
    const [examen, setExamen] = useState('');
    const [reference, setReference] = useState('');
    let slug = useParams();
    const changeNumIdCard = (val) => {
        setNumIdCard(val)
    } 
    const changeReference = (val) => {
        setReference(val)
    } 
    const changeObjet = (val) => {
        setObjet(val)
    } 
    const changeExamen = (val) => {
        setExamen(val)
    } 
    const handleSubmit = (e) => {

    }
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/plaintes"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/plaintes"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={`/gestion-des-dossiers/voir/plaintes/${slug.slug}`}>
                                <DossierIcon/>  {"Editer"}
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
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Modification d\'une plainte'}>
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
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes à suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--success'}>
                                <CheckIcon/> <span>Informations Dossier</span>
                            </StepCard>
                        </div>
                    </div>
                    <div className="sigepec-module-add-section__container">
                        <h2>Le saviez-vous</h2>
                        <div className='sigepec-h-bar'></div>
                        
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Informations dossier Permis international</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={objet} id={'objet'} type={'text'} label={'Objet de la plainte'} tooltip={'Entrer le numero de idCard'} fnc={changeObjet}>
                                Entrer l'objet
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numIdCard} id={'idcard'} type={'text'} label={'Numero de l\'idCard'} tooltip={'Entrer le numero de idCard'} fnc={changeNumIdCard}>
                                Entrer le numero de l'idCard
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={reference} id={'reference'} type={'text'} label={'Entrer la référence de l\'examen'} tooltip={'Entrer la référence de l\'examen'} fnc={changeReference}>
                                Entrer la référence de l'examen
                            </NormalTextField>
                            <NormalTextField value={examen} id={'examen'} type={'text'} label={'Examen de la plainte'} tooltip={'Entrer l\'examen de la plainte'} fnc={changeExamen}>
                                Entrer l'examen de la plainte
                            </NormalTextField>
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

export default PlaintesEdit;