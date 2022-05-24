import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import BanIcon from '../../../../assets/icons/BanIcon';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import EditIcon from '../../../../assets/icons/EditIcon';
import EventIcon from '../../../../assets/icons/EventIcon';
import ExportIcon from '../../../../assets/icons/ExportIcon';
import ListIcon from '../../../../assets/icons/ListIcon';
import OptionIcon from '../../../../assets/icons/OptionIcon';
import PrintIcon from '../../../../assets/icons/PrintIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import TrashIcon from '../../../../assets/icons/TrashIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import NormalTextField from '../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../components/input/PhoneNumberField';
import ExanimateurLayout from '../ExanimateurLayout';

const ExaminateurHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [number, setNumber] = useState('');
    const [slug, setSlug] = useState('');

    const changeNom = (val) => {
        setNom(val)
    }
    const changePrenom = (val) => {
        setPrenom(val)
    }
    const changeEmail = (val) => {
        setEmail(val)
    }
    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            nexaminateur: 'Exanimateur-4400',
            slug: 'examinateur-1',
            nom: 'Kabore',
            prenom: 'Edmond',
            email: 'kaboreedmond@gmail.com',
            telephone: '+226 70 00 00 00',
        },
        {
            id: 2,
            nexaminateur: 'Exanimateur-4100',
            slug: 'examinateur-2',
            nom: 'Ouattara',
            prenom: 'Charlotte',
            email: 'charlotte.ouattara@gmail.com',
            telephone: '+226 75 80 90 90',
        },
        {
            id: 3,
            nexaminateur: 'Exanimateur-4500',
            slug: 'examinateur-3',
            nom: 'Sanou',
            prenom: 'Alice',
            email: 'alice.sanou@gmail.com',
            telephone: '+226 78 80 90 90',
        },
        {
            id: 4,
            nexaminateur: 'Exanimateur-4800',
            slug: 'examinateur-4',
            nom: 'Ouedraogo',
            prenom: 'Axel',
            email: 'axel.oued@gmail.com',
            telephone: '+226 77 80 90 90',
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
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.querySelector('#show-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setNom(tableElement[num].nom);
        setPrenom(tableElement[num].prenom);
        setEmail(tableElement[num].email);
        setTelephone(tableElement[num].telephone);
    }
    const showModal = (id, num) => {
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setNom(tableElement[num].nom);
        setPrenom(tableElement[num].prenom);
        setEmail(tableElement[num].email);
        setTelephone(tableElement[num].telephone);
        setSlug(tableElement[num].slug);
        setNumber(num)
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-examinateurs/liste"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item`}>
                            <button type='button' onClick={() => {activeModal('create-modal')}}>
                                <AddIcon/>  {"Ajouter"}
                            </button>
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
        <ExanimateurLayout actions={actions}>
            <FileDarianne actuel={'Liste des examinateurs'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examinateurs'}>
                    Gestion des examinateurs
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Liste des examinateurs</h2>
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
                                <strong>N. Examinateur</strong>
                            </div>
                            <div className='sigepec-table__column is--auto3'>
                                <strong>Nom et Prénoms</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Email</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Telephone</strong>
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
                                        <span>{element.nexaminateur}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto3'>
                                       <span className='sigepec-table-column__special-span' onClick={() => {showModal('show-modal', element.id)}}>{element.nom + " " + element.prenom} </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{element.email}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{element.telephone}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <button id={`modal-${element.slug}`} type={'button'} onClick={() => {showModal('show-modal', element.id)}}>
                                                Editer
                                            </button>
                                            <button id={`modal-${element.slug}`} type={'button'} onClick={() => {editModal('edit-modal', element.id)}}>
                                                Modifier
                                            </button>
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
            <div className='sigepec-modal' id='create-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('create-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Créer un nouvel examinateur</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de famille de l\'examinateur'} fnc={changeNom}>
                                    Entrer le nom de famille de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom(s)'} tooltip={'Entrer le/les prenom(s) de l\'examinateur'} fnc={changePrenom}>
                                    Entrer le/les prenom(s) de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={email} id={'email'} type={'email'} label={'Email'} tooltip={'Entrer l\'adresse mail de l\'examinateur'} fnc={changeEmail}>
                                    Entrer l'adresse mail de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={telephone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setTelephone}>
                                Entrer le numéro de téléphone
                            </PhoneNumberField>
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
            <div className='sigepec-modal' id='edit-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('edit-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Modifier les informations de l'examinateur {nom + " " + prenom}</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de famille de l\'examinateur'} fnc={changeNom}>
                                    Entrer le nom de famille de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom(s)'} tooltip={'Entrer le/les prenom(s) de l\'examinateur'} fnc={changePrenom}>
                                    Entrer le/les prenom(s) de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={email} id={'email'} type={'email'} label={'Email'} tooltip={'Entrer l\'adresse mail de l\'examinateur'} fnc={changeEmail}>
                                    Entrer l'adresse mail de l'examinateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={telephone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setTelephone}>
                                Entrer le numéro de téléphone
                            </PhoneNumberField>
                            </div>
                            <div className='sigepec-module-add-form__action has--flex'>
                                <FormBtn type={'reset'} style={'is--large'}>
                                    Annuler
                                </FormBtn>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                Enrégistrer les modifications
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='show-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('show-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
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
                        <h2>Actions</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <button type='button' className='sigepec-module-list__action is--large has--flex' onClick={() => {editModal('edit-modal', number)}}>
                                <EditIcon/> <span>Modifier les informations de l'examinateur</span>
                            </button>
                            <Link to={`/gestion-des-examinateurs/etats/${slug}`} className="sigepec-module-list__action is--large has--flex">
                                <EventIcon/> <span>Voir ses états</span>
                            </Link>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <BanIcon/> <span>Désactiver l'examinateur</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ExanimateurLayout>
    );
};

export default ExaminateurHome;