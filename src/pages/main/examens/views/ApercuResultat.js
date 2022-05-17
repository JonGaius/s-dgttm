import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import ExamenLayout from '../ExamenLayout';

const ApercuResultat = ({title}) => {
    let params = useParams();
    const resultatOption = [
        {
            id: 1,
            value: 1,
            name: "Admis"
        },
        {
            id: 2,
            value: 0,
            name: "Ajourné"
        }
    ];
    const [candidats, setCandidats] = useState([
        {
            id: 1,
            slug: 'candidat-1',
            nom: 'Maxime Barro',
            dateandplace: '12/12/1992 à Ouagadougou',
            point: 25,
            result: 1,
        },
        {
            id: 2,
            slug: 'candidat-2',
            nom: 'Axelle Diallo',
            dateandplace: '12/09/1999 à Bobo-dioulasso',
            point: 15,
            result: 0,
        },
        {
            id: 3,
            slug: 'candidat-3',
            nom: 'Adama Kam',
            dateandplace: '12/09/1989 à Koudougou',
            point: 25,
            result: 1,
        }
    ])
    return (
        <ExamenLayout title={title} here={'resultat'}>
            <FileDarianne actuel={'Résultat'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens/resultats'}>
                    Gestion des résultats
                </OldFileDariane>
            </FileDarianne>
           <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Resultat de l'examen  <br /> Type: Code Permis A</h2>
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
                        <button type='button' className='sigepec-btn is--secondary'>
                            <span>Enrégistrer les modifications</span>
                        </button>
                        <button type='button' className='sigepec-btn is--primary'>
                            <span>Valider les résultats</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--auto5'>
                                <strong>Nom et Prénom</strong>
                            </div>
                            <div className='sigepec-table__column is--auto5'>
                                <strong>Date et lieu de naissance</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Nombre de points</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Résultat</strong>
                            </div>
                        </div>
                        {
                            candidats.map((element) => (
                                <div className='sigepec-table__body' key={element.id}>
                                    <div className='sigepec-table__column is--little'>
                                        {element.id}
                                    </div>
                                    <div className='sigepec-table__column is--auto5'>
                                        <span>{element.nom}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto5'>
                                       <span>{element.dateandplace} </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <div className='sigepec-texfield__tab is--large'>
                                            <input type="number" value={element.point} min={0} placeholder={'Entrer le nombre de points'} required/>
                                        </div>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <div className='sigepec-texfield__tab is--large'>
                                            <select required>
                                                {
                                                    resultatOption.map(resultat => (
                                                       <>
                                                        {
                                                            resultat.value === element.result ? (
                                                                <option value={resultat.value} selected>
                                                                    {resultat.name}
                                                                </option>
                                                            ) : ("")
                                                        }
                                                            <option value={resultat.value}>
                                                                {resultat.name}
                                                            </option>
                                                       </>
                                                    ))
                                                }
                                            </select>
                                        </div>
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

export default ApercuResultat;