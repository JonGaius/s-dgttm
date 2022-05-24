import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import PrintIcon from '../../../../assets/icons/PrintIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import NormalTextField from '../../../../components/input/NormalTextField';
import ExanimateurLayout from '../ExanimateurLayout';

const ExaminateurEtats = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    const [etats, setEtats] = useState([
        {
            id: 1,
            slug: 'etat-1',
            datededebut: "12/11/2020",
            datedefin: "12/12/2020",
            datecreation: '12/11/2020'
        },
        {
            id: 2,
            slug: 'etat-2',
            datededebut: "13/12/2020",
            datedefin: "01/01/2021",
            datecreation: '13/12/2020'
        },
        {
            id: 3,
            slug: 'etat-3',
            datededebut: "12/12/2017",
            datedefin: "12/04/2019",
            datecreation: '18/12/2020'
        },
        {
            id: 4,
            slug: 'etat-4',
            datededebut: "11/01/2021",
            datedefin: "12/08/2021",
            datecreation: '18/02/2022'
        },
    ]);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [datedebut, setDateDebut] = useState('');
    const [datefin, setDateFin] = useState('');
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const changeDebut = (value) => {
        setDateDebut(value)
    }
    const changeFin = (value) => {
        setDateFin(value)
    }
    return (
        
        <ExanimateurLayout>
            <FileDarianne actuel={'Gestion des Etats'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examinateurs'}>
                    Gestion des examinateurs
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Etats de l'examinateur</h2>
                </div>
                <div className='sigepec-module-add is--two is--large has--flex_between'>
                    <div className="sigepec-module-add__section">
                        <div className="sigepec-module-add-section__container">
                            <h2>Information de l'examinateur</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Nom :</span><strong>{nom}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Prenom :</span><strong>{prenom}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Email :</span><strong>{email}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Téléphone :</span><strong>{telephone}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <button type='button' className='sigepec-btn is--primary is--large' onClick={() => {activeModal('create-etat')}}>
                                    Créer un état
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sigepec-module-add__section">
                        <div className="sigepec-module-add-section__container">
                            <h2>Les Etats de l'examinateur</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-table'>
                                <div className='sigepec-table__head'>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Période</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Date de création</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>-</strong>
                                    </div>
                                </div>
                                {
                                    etats.map((etat) => (
                                    <div className='sigepec-table__body' key={etat.id}>
                                        <div className='sigepec-table__column is--auto2'>
                                            <span>{etat.datededebut + " - " + etat.datedefin}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto2'>
                                            <span>{etat.datecreation}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto2'>
                                            <Link to={`/gestion-des-examinateurs/etats/preview/${etat.slug}`} className='sigepec-tab-btn'>
                                                <PrintIcon/> Imprimer
                                            </Link>
                                        </div>
                                    </div>
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='create-etat'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('create-etat')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Créer un nouvel état</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={datedebut} id={'debut'} type={'date'} label={'Date de debut'} tooltip={''} fnc={changeDebut}>
                                    Entrer la date de début de la  période
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={datefin} id={'fin'} type={'date'} label={'Date de fin'} tooltip={''} fnc={changeFin}>
                                    Entrer  la date de fin de la période
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
            </div>
        </ExanimateurLayout>
    );
};

export default ExaminateurEtats;