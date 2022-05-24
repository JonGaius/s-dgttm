import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import ExportIcon from '../../../../../assets/icons/ExportIcon';
import ListIcon from '../../../../../assets/icons/ListIcon';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import PrintIcon from '../../../../../assets/icons/PrintIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import TrashIcon from '../../../../../assets/icons/TrashIcon';
import BtnLink from '../../../../../components/button/BtnLink';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import DossierLayout from '../../DossierLayout';

const RemplacementIdCardList = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            dossier: 'Dossier-4400',
            slug: 'idcardd-1',
            numIdcard: 'XXXXX1',
            dateDelivrance: '12/12/2020',
            statut: 0,
            lieuDelivrance: 'Bobo-Dioulasso',
            ref: 'RefXXXXX',
        },
        {
            id: 2,
            dossier: 'Dossier-4500',
            slug: 'idcardd-2',
            numIdcard: 'XXXXX2',
            dateDelivrance: '12/12/2020',
            statut: 1,
            lieuDelivrance: 'Bobo-Dioulasso',
            ref: 'RefXXXXX',
        },
        {
            id: 3,
            dossier: 'Dossier-4600',
            slug: 'idcardd-3',
            numIdcard: 'XXXXX3',
            dateDelivrance: '12/12/2020',
            statut: 1,
            lieuDelivrance: 'Bobo-Dioulasso',
            ref: 'RefXXXXX',
        },
        {
            id: 4,
            dossier: 'Dossier-4900',
            slug: 'idcardd-4',
            numIdcard: 'XXXXX4',
            dateDelivrance: '12/12/2020',
            statut: 0,
            lieuDelivrance: 'Bobo-Dioulasso',
            ref: 'RefXXXXX',
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
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/remplacement-idcard"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <Link to={"/gestion-des-dossiers/creer/remplacement-idcard"}>
                                <AddIcon/>  {"Ajouter"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <ExportIcon/> {"Exporter"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button'>
                                <PrintIcon/> {"Imprimer"}
                            </button>
                        </li>
                        <li className={`sigepec-module-nav__item is--danger`}>
                            <button type='button'>
                                <TrashIcon/> {"Supprimer"}
                            </button>
                        </li>
                    </ul>);
    return (
        <DossierLayout actions={actions}>
            <FileDarianne actuel={'Remplacement Idcard'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des Dossiers
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des dossiers remplacement idcard</h2>
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
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListByDossier()}}>
                                <strong>Numéro de dossier</strong>
                            </div>
                            <div className='sigepec-table__column is--auto' onClick={() => {orderListByName()}}>
                                <strong>Numero Idcard</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Statut</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListBySchool()}}>
                                <strong>Date de délivrance</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed' onClick={() => {orderListByCategorie()}}>
                                <strong>Lieu de délivrance</strong>
                            </div>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                        </div>
                        {
                            tableElement.map((element) => (
                                <div className='sigepec-table__body' key={element.id}>
                                    <div className='sigepec-table__column is--little'>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.dossier}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto'>
                                       <Link to={`/gestion-des-dossiers/voir/remplacement-idcard/${element.slug}`}><span>{element.numIdcard} </span></Link> 
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        {
                                            (element.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>En attente</span>) : 
                                            (
                                                <>
                                                    {
                                                        (element.statut === 1) ? (
                                                            <span className='sigepec-tag is--success'>Validé</span>
                                                        ) : (

                                                            <span className='sigepec-tag is--error'>Erreur</span>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.dateDelivrance}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.lieuDelivrance}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <Link to={`/gestion-des-dossiers/voir/remplacement-idcard/${element.slug}`}>
                                                Editer
                                            </Link>
                                            <Link to={`/gestion-des-dossiers/modifier/remplacement-idcard/${element.slug}`}>
                                                Modifier
                                            </Link>
                                            <Link to={`/gestion-des-dossiers/valider/remplacement-idcard/${element.slug}`}>
                                                Valider
                                            </Link>
                                            <button type='button'>
                                                Imprimer
                                            </button>
                                            <button type='button'>
                                                Exporter
                                            </button>
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

export default RemplacementIdCardList;