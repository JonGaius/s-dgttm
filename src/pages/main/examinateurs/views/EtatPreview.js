import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import ExanimateurLayout from '../ExanimateurLayout';

const EtatPreview = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let slug = useParams();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [exams, setExams] = useState([
        {
            id: 1,
            code: "Coden22",
            date: "12/01/2021",
            type: "Code",
            nbre: 50,
        },
        {
            id: 2,
            code: "Coden26",
            date: "17/12/2020",
            type: "Circulation",
            nbre: 2,
        },
        {
            id: 3,
            code: "Coden29",
            date: "06/01/2021",
            type: "Créneaux",
            nbre: 15,
        },
        {
            id: 4,
            code: "Coden30",
            date: "22/02/2021",
            type: "Code",
            nbre: 30,
        },
        {
            id: 5,
            code: "Coden31",
            date: "25/02/2021",
            type: "Creneaux",
            nbre: 10,
        },
    ]);
    const nbreCandidat = (tabs) => {
        let sum = 0;
        tabs.forEach(tabs => {
            sum = sum + tabs.nbre
        });

        return sum;
    }
    return (
        <ExanimateurLayout>

            <FileDarianne actuel={'Prévisualisation des Etats'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examinateurs'}>
                    Gestion des examinateurs
                </OldFileDariane>
            </FileDarianne>
             <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Previsualisation de l'état de la période 12/02/2020 - 01/03/2021</h2>
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
                        </div>
                    </div>
                    <div className="sigepec-module-add__section">
                        <div className="sigepec-module-add-section__container">
                            <h2>Les Examens effectués pendant cette période</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-table'>
                                <div className='sigepec-table__head'>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Code de l’examen</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Date de l’examen</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Type de l’examen</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Nombre de candidat</strong>
                                    </div>
                                </div>
                                {
                                    exams.map((exam) => (

                                        <div className='sigepec-table__body' key={exam.id}>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{exam.code}</span>
                                            </div>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{exam.date}</span>
                                            </div>
                                            <div className='sigepec-table__column is--auto2'>
                                                {
                                                    (exam.type.toLowerCase() === 'code') ? (
                                                        <span className='sigepec-tag is--info'>{exam.type}</span>
                                                    ) : (
                                                        <>
                                                        {
                                                            (exam.type.toLowerCase() === 'circulation') ? (
                                                                <span className='sigepec-tag is--success'>{exam.type}</span>
                                                            ) : (
                                                                <span className='sigepec-tag is--warning'>{exam.type}</span>
                                                            )
                                                        }
                                                        </>
                                                    )
                                                }
                                            </div>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{exam.nbre}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='sigepec-stats is--large has--flex_between'>
                                <div className='sigepec-stats__container'>
                                    <div className="sigepec-stats__item has--flex_between">
                                        <span>Nombre d'examen: </span><strong>{exams.length}</strong>
                                    </div>
                                    <div className="sigepec-stats__item has--flex_between">
                                        <span>Nombre de candidat: </span><strong>{nbreCandidat(exams)}</strong>
                                    </div>
                                </div>
                                <div className='sigepec-stats__action'>
                                    <button type='button' className='sigepec-btn is--primary'>
                                        Imprimer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ExanimateurLayout>
    );
};

export default EtatPreview;