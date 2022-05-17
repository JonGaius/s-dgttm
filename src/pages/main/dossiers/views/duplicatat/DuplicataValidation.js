import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const DuplicataValidation = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            dossier: 'Dossier-4400',
            slug: 'extension-1',
            permis: 'Permis-300',
            datextension: '12/12/2020',
            dateobtention: '12/08/2016',
            categorie: 'Permis A',
            mode: 'Code',
            dateValidite: '12/03/2020',
        },
        {
            id: 2,
            dossier: 'Dossier-4400',
            slug: 'extension-2',
            permis: 'Permis-310',
            datextension: '12/12/2021',
            dateobtention: '17/01/2016',
            categorie: 'Permis B',
            mode: 'Code',
            dateValidite: '12/03/2020',
        },
        {
            id: 3,
            dossier: 'Dossier-4400',
            slug: 'extension-3',
            permis: 'Permis-310',
            datextension: '08/12/2020',
            dateobtention: '31/08/2016',
            categorie: 'Permis C',
            mode: 'Code',
            dateValidite: '12/03/2020',
        },
    ]);
    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    return (
        <DossierLayout here={'validation'}>
            <FileDarianne actuel={'Dossiers Duplicata en attente de validation'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/duplicata'}>
                    Gestion des Dossiers Duplicata
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des dossiers duplicata en attente de validation</h2>
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
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Numéro de permis</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed2'>
                                <strong>Date de validité</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed2'>
                                <strong>Date d'extension</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Date d’obtention</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Categorie obtenue</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Statut</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            tableElement.map((element) => (
                                <div className='sigepec-table__body' key={element.id}>
                                    <div className='sigepec-table__column is--little'>
                                        -
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <Link to={`/gestion-des-dossiers/valider/duplicata/${element.slug}`}>{element.dossier}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed2'>
                                        <span>{element.dateValidite}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed2'>
                                        <span>{element.datextension}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.dateobtention}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.categorie}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span className='sigepec-tag is--warning'>En attente</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <Link to={`/gestion-des-dossiers/valider/duplicata/${element.slug}`}>
                                                Valider
                                            </Link>
                                            <button type='button'>
                                                Supprimer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </DossierLayout>
    );
};

export default DuplicataValidation;