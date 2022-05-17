import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import BtnLink from '../../../../../components/button/BtnLink';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const RemplacementList = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            dossier: 'Dossier-4400',
            slug: 'remplacement-1',
            permis: 'Permis-300',
            datextension: '12/12/2020',
            dateobtention: '12/08/2016',
            categorie: 'Permis A',
            mode: 'Code',
            lieu: 'Ouagadougou',
        },
        {
            id: 2,
            dossier: 'Dossier-4400',
            slug: 'remplacement-2',
            permis: 'Permis-310',
            datextension: '12/12/2021',
            dateobtention: '17/01/2016',
            categorie: 'Permis B',
            mode: 'Code',
            lieu: 'Bobo-Dioulasso',
        },
        {
            id: 3,
            dossier: 'Dossier-4400',
            slug: 'remplacement-3',
            permis: 'Permis-310',
            datextension: '08/12/2020',
            dateobtention: '31/08/2016',
            categorie: 'Permis C',
            mode: 'Code',
            lieu: 'Fada N\'Gourma',
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
        <DossierLayout here={'list'}>
            <FileDarianne actuel={'Gestion de dossiers Remplacement'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des dossiers de remplacement</h2>
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
                        <BtnLink link={'/gestion-des-dossiers/creer/remplacement'} style={'is--primary'}>
                            <AddIcon/>  <span>Ajouter un nouveau dossier</span>
                        </BtnLink>
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
                                <strong>Lieu de délivrance</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed2'>
                                <strong>Date dernière extension</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Date d’obtention</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Categorie obtenue</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Mode d’obtention</strong>
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
                                        <Link to={`/gestion-des-dossiers/voir/remplacement/${element.slug}`}>{element.dossier}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed2'>
                                        <span>{element.lieu}</span>
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
                                        <span>{element.mode}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <Link to={`/gestion-des-dossiers/modifier/remplacement/${element.slug}`}>
                                                Modifier
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

export default RemplacementList;