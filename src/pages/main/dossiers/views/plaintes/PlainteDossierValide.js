import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const PlainteDossierValide = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            numIdCard: 'idCard-4400',
            slug: 'plainte-1',
            objet: 'Objet de la plainte',
            examen: 'Code',
            ref: 'Examen-Code-1',
            date: '12/12/2022',
        },
        {
            id: 2,
            numIdCard: 'idCard-4400',
            slug: 'plainte-2',
            objet: 'Objet de la plainte',
            examen: 'Code',
            ref: 'Examen-Code-1',
            date: '12/12/2022',
        },
        {
            id: 3,
            numIdCard: 'idCard-4400',
            slug: 'plainte-3',
            objet: 'Objet de la plainte',
            examen: 'Code',
            ref: 'Examen-Code-1',
            date: '12/12/2022',
        },
        {
            id: 4,
            numIdCard: 'idCard-4400',
            slug: 'plainte-4',
            objet: 'Objet de la plainte',
            examen: 'Code',
            ref: 'Examen-Code-1',
            date: '12/12/2022',
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
       
        <DossierLayout here={'valide'}>
            <FileDarianne actuel={'Dossiers Plainte validés'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/plaintes'}>
                    Gestion des Dossiers Plaintes
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des dossiers de plaintes validés</h2>
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
                                <strong>Numéro de idCard</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed2'>
                                <strong>Object de la plainte</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed2'>
                                <strong>Examen de la plainte</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Reference de l’examen</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Date de dépôt</strong>
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
                                        <Link to={`/gestion-des-dossiers/voir/plaintes/${element.slug}`}>{element.numIdCard}</Link>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed2'>
                                        <span>{element.objet}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed2'>
                                        <span>{element.examen}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.ref}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.date}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span className='sigepec-tag is--success'>Validés</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <Link to={`/gestion-des-dossiers/modifier/plaintes/${element.slug}`}>
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

export default PlainteDossierValide;