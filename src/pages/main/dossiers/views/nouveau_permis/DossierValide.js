import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const DossierValide = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            dossier: 'Dossier-4400',
            slug: 'permis-1',
            nom: 'Kabore',
            prenom: 'Edmond',
            ecole: 'Prestige Ecole',
            categorie: 'Permis A',
        },
        {
            id: 2,
            dossier: 'Dossier-4060',
            slug: 'permis-2',
            nom: 'Ouedraogo',
            prenom: 'Alice',
            ecole: 'Awsome Ecole B',
            categorie: 'Permis C',
        },
        {
            id: 3,
            dossier: 'Dossier-4200',
            slug: 'permis-3',
            nom: 'Sanon',
            prenom: 'Madou',
            ecole: 'Incredible Ecole',
            categorie: 'Permis C',
        },
        {
            id: 4,
            dossier: 'Dossier-4000',
            slug: 'permis-4',
            nom: 'Dabiré',
            prenom: 'Alexandra',
            ecole: 'Incredible Ecole',
            categorie: 'Permis B1',
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
    const orderListByName = () => {
       let element = tableElement.sort((a, b) => {
           if(a.nom.toLowerCase() < b.nom.toLowerCase()){
               return -1;
           }
           if(a.nom.toLowerCase() > b.nom.toLowerCase()){
                return 1;
            }
            return 0;
       })
       setTableElement(element);
    }
    const orderListByDossier = () => {
       let element = tableElement.sort((a, b) => {
           if(a.dossier.toLowerCase() < b.dossier.toLowerCase()){
               return -1;
           }
           if(a.dossier.toLowerCase() > b.dossier.toLowerCase()){
                return 1;
            }
            return 0;
       })
       setTableElement(element);
    }
    const orderListBySchool = () => {
       let element = tableElement.sort((a, b) => {
           if(a.ecole.toLowerCase() < b.ecole.toLowerCase()){
               return -1;
           }
           if(a.ecole.toLowerCase() > b.ecole.toLowerCase()){
                return 1;
            }
            return 0;
       })
       setTableElement(element);
    }
    const orderListByCategorie = () => {
       let element = tableElement.sort((a, b) => {
           if(a.categorie.toLowerCase() < b.categorie.toLowerCase()){
               return -1;
           }
           if(a.categorie.toLowerCase() > b.categorie.toLowerCase()){
                return 1;
            }
            return 0;
       })
       setTableElement(element);
    }
    return (
        
        <DossierLayout here={'valide'}>
            <FileDarianne actuel={'Dossiers Nouveau Permis validés'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/nouveaux-permis'}>
                    Gestion des Dossiers Nouveau Permis
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des nouveaux permis validés</h2>
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
                    <div className='sigepec-table style--two'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListByDossier()}}>
                                <strong>Numéro de dossier</strong>
                            </div>
                            <div className='sigepec-table__column is--auto' onClick={() => {orderListByName()}}>
                                <strong>Nom et Prénoms</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Statut</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListBySchool()}}>
                                <strong>Auto-Ecole</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListByCategorie()}}>
                                <strong>Catégorie</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            tableElement.map((element) => (
                                <div className='sigepec-table__body' key={element.id}>
                                    <div className='sigepec-table__column is--little'>
                                        {element.id}
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.dossier}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto'>
                                       <Link to={`/gestion-des-dossiers/voir/nouveaux-permis/${element.slug}`}><span>{element.nom + " " + element.prenom} </span></Link> 
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span className='sigepec-tag is--success'>Validé</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.ecole}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.categorie}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <Link to={`/gestion-des-dossiers/modifier/nouveaux-permis/${element.slug}`}>
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

export default DossierValide;