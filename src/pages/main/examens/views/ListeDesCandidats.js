import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import ExamenLayout from '../ExamenLayout';

const ListeDesCandidats = ({title}) => {
    let navigate = useNavigate();
    let params = useParams()
    const [candidats, setCandidats] = useState([
        {
            id: 1,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 2,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 3,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 4,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 5,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        }
    ])
    const changeList = () => {
        navigate('/gestion-des-examens/programmations/liste-des-candidats')
    }
    return (
        <ExamenLayout title={title} here={'program'}>
            <FileDarianne actuel={'Liste des candidats'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens/programmations'}>
                    Gestion des programmations
                </OldFileDariane>
            </FileDarianne>
             <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des candidats programmés</h2>
                </div>
                <div className='sigepec-module-add is--large'>
                    <div className="sigepec-module-add-section__container  is--large">
                        <div className='sigepec-table'>
                            <div className='sigepec-table__head'>
                                <div className='sigepec-table__column is--auto2'>
                                    <strong>Numéro Dossier</strong>
                                </div>
                                <div className='sigepec-table__column is--auto2'>
                                    <strong>Nom et Prénom</strong>
                                </div>
                                <div className='sigepec-table__column is--auto2'>
                                    <strong>Auto-Ecole</strong>
                                </div>
                            </div>
                            {
                                candidats.map((candidat) => (
                                    <div className='sigepec-table__body' key={candidat.id}>
                                        <div className='sigepec-table__column is--auto2'>
                                            <span>{candidat.dossier}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto2'>
                                            <span>{candidat.nom}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto2'>
                                            <span>{candidat.ecole}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </ExamenLayout>
    );
};

export default ListeDesCandidats;