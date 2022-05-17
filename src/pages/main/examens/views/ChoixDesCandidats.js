import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import ExamenLayout from '../ExamenLayout';

const ChoixDesCandidats = ({title}) => {
    const [candidats, setCandidats] = useState([
        {
            id: 1,
            nom: "Ouedraogo",
            nomjfille: "",
            prenom: "Fabrice",
            ecole: "Auto-Ecole Incredible",
            categorie: 'permis A1',
            slug: "candidat-1",
            dossier: "Dossier-1",
        }, 
        {
            id: 2,
            nom: "Kaboré",
            nomjfille: "",
            genre: "h",
            prenom: "Ali Madou",
            ecole: "Auto-Ecole Awesome",
            categorie: 'permis B',
            slug: "candidat-2",
            dossier: "Dossier-2",
        }, 
        {
            id: 3,
            nom: "Somé",
            nomjfille: "Dabiré",
            genre: "f",
            prenom: "Alice",
            categorie: 'permis B',
            ecole: "Dem Auto-Ecole",
            slug: "candidat-3",
            dossier: "Dossier-3",
        }, 
        {
            id: 4,
            nom: "Kaboré",
            nomjfille: "",
            genre: "h",
            prenom: "Ali Madou",
            ecole: "Auto-Ecole Awesome",
            categorie: 'permis B',
            slug: "candidat-2",
            dossier: "Dossier-2",
        }, 
        {
            id: 5,
            nom: "Somé",
            nomjfille: "Dabiré",
            genre: "f",
            prenom: "Alice",
            categorie: 'permis B',
            ecole: "Dem Auto-Ecole",
            slug: "candidat-3",
            dossier: "Dossier-3",
        }, 
     ]);
    let {state} = useLocation();
    let navigate = useNavigate();

    let date = state.date;
    let lieu = state.lieu;
    let exam = state.exam;
    let examimateur = state.examimateur;
    const langue = state.langue;
    const salle = state.salle;

    const confirmList = () => {
        // Fonction
        navigate('/gestion-des-examens/programmations/apercu', {
            state: {
                date: date,
                lieu: lieu,
                exam: exam,
                examimateur: examimateur,
                langue: langue,
                salle: salle,
                url: state.url
            }
        })
    }
    return (
        <ExamenLayout title={title} here={'program'}>
            <FileDarianne actuel={'Choix des candidats'}>
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
                    <h2>Effectuer la liste pour cet examen</h2>
                    <div className='sigepec-module-dossier-list__actions has--flex'>
                        <div className='sigepec-module-dossier-list__search is--large has--flex_between'>
                            <label htmlFor="search-list">
                                <SearcIcon/>
                            </label>
                            <input type="search" id="search-list" placeholder='Chercher...' />
                            <button type='button' className='sigepec-module-dossier-list-search__option'>
                                <SortIcon/>
                            </button>
                        </div>
                        <button type='button' className='sigepec-btn is--primary' onClick={() => {confirmList()}}>
                            <span>Confirmer la liste</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>N. Dossier</strong>
                            </div>
                            <div className='sigepec-table__column is--auto3'>
                                <strong>Nom et Prénoms</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Auto-école</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Categorie</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            candidats.map((candidat) => (
                                <div className='sigepec-table__body'>
                                    <div className='sigepec-table__column is--little'>
                                        <span>{candidat.id}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{candidat.dossier}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto3'>
                                        <span className='sigepec-table-column__special-span'>
                                            {candidat.nom}{candidat.nomjfille ? "/"+candidat.nomjfille+" " : "" }
                                            {candidat.prenom} 
                                        </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.ecole}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.categorie}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <input type="checkbox" name="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default ChoixDesCandidats;