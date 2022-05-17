import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import Checkbox from '../../../../../components/input/Checkbox';
import DossierLayout from '../../DossierLayout';

const PlainteValider = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let params = useParams(); 
    let navigate = useNavigate();
    const [numIdCard, setNumIdCard] = useState('');
    const [objet, setObjet] = useState('');
    const [examen, setExamen] = useState('');
    const [reference, setReference] = useState('');

    const activeModal = (id) => {
        console.log('ok')
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }

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
    return (
        <DossierLayout here={'validation'}>
        
            <FileDarianne actuel={'Validation d\'un dossier Plainte'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/plaintes'}>
                    Gestion des Dossiers Plaintes
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/validation-de-dossier/plaintes'}>
                    Gestion des Dossiers Plaintes en attente de validation
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add__head is--large has--flex_between'>
                <h1>Validation du dossier</h1>
                <button type='button' className='sigepec-btn is--primary' onClick={() => {handleSubmit()}}>Valider le dossier</button>
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
                            <div className="sigepec-module-add-apercu-btn has--flex_between">
                                <Checkbox id={'info'} style={'is--large'}> 
                                    Valider les informations
                                </Checkbox>
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('infos')}}>
                                    Modifier les informations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='sigepec-modal' id='infos'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('infos')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                    <h2>Informations dossier Permis international</h2>
                        <div className='sigepec-h-bar'></div>
                        
                            
                        <div className='sigepec-module-add-form__action has--flex'>
                            <button type='button' className='sigepec-btn is--large is--primary' onClick={() => {removeModal('infos')}}>
                                Enrégistrer et Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default PlainteValider;