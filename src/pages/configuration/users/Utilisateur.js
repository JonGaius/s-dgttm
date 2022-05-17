import React, { useState } from 'react';
import AddIcon from '../../../assets/icons/AddIcon';
import CancelIcon from '../../../assets/icons/CancelIcon';
import OptionIcon from '../../../assets/icons/OptionIcon';
import SearcIcon from '../../../assets/icons/SearcIcon';
import SortIcon from '../../../assets/icons/SortIcon';
import FormBtn from '../../../components/button/FormBtn';
import FileDarianne from '../../../components/card/FileDarianne';
import OldFileDariane from '../../../components/card/OldFileDariane';
import NormalTextField from '../../../components/input/NormalTextField';
import PhoneNumberField from '../../../components/input/PhoneNumberField';
import MainLayout from '../../../components/layout/main/MainLayout';

const Utilisateur = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    const [users, setUsers] = useState([
        {
            id: 1,
            slug: 'user-1',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 2
        },
        {
            id: 2,
            slug: 'user-2',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 1
        },
        {
            id: 3,
            slug: 'user-3',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 0
        },
        {
            id: 4,
            slug: 'user-4',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 1
        },
        {
            id: 5,
            slug: 'user-5',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 0
        },
        {
            id: 6,
            slug: 'user-6',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 0
        },
        {
            id: 7,
            slug: 'user-7',
            nom: 'Coulibaly',
            prenom: 'Jeanne',
            email: 'jeanne.coulibaly@email.com',
            telephone: '+226 XX XX XX XX',
            statut: 1
        },
    ]);
    const [name, setName] = useState('');
    const [prename, setPrename] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const editModal = (id, num) => {
        document.querySelector('#create-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        setName(users[num].nom);
        setPrename(users[num].prenom);
        setEmail(users[num].email);
        setPhone(users[num].telephone);
    }
    const changeName = (val) => {
        setName(val)
    }
    const changePrename = (val) => {
        setPrename(val)
    }
    const changeEmail = (val) => {
        setEmail(val)
    }
    const changePhone = (val) => {
        setPhone(val)
    }
    const changePassword = (val) => {
        setPassword(val)
    }

    return (
        <MainLayout>

            <FileDarianne actuel={'Configuration des utilisateurs'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/configuration'}>
                    Configuration
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Configuration des utilisateurs</h1>
                </div>
                <div className='sigepec-module-dossier-list'>
                    <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                        <h2>Liste des utilisateurs</h2>
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
                            <button type='button' className='sigepec-btn is--primary' onClick={() => {activeModal('create-modal')}}>
                                <AddIcon/>  <span>Ajouter un utilisateur</span>
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
                                    <strong>Nom complet</strong>
                                </div>
                                <div className='sigepec-table__column is--auto5'>
                                    <strong>Email</strong>
                                </div>
                                <div className='sigepec-table__column is--auto5'>
                                    <strong>Téléphone</strong>
                                </div>
                                <div className='sigepec-table__column is--lilmed2'>
                                    <strong>Statut</strong>
                                </div>
                                <div className='sigepec-table__column is--little'>
                                    -
                                </div>
                            </div>
                            {
                                users.map((user) => (

                                    <div className='sigepec-table__body' key={user.id}>
                                        <div className='sigepec-table__column is--little'>
                                            {user.id}
                                        </div>
                                        <div className='sigepec-table__column is--auto5'>
                                            <span>{user.prenom + " " + user.nom} </span>
                                        </div>
                                        <div className='sigepec-table__column is--auto5'>
                                            <span>{user.email}</span>
                                        </div>
                                        <div className='sigepec-table__column is--auto5'>
                                            <span>{user.telephone}</span>
                                        </div>
                                        <div className='sigepec-table__column is--lilmed2'>
                                        {
                                            (user.statut === 0) ? 
                                            (<span className='sigepec-tag is--warning'>En attente</span>) : 
                                            (
                                                <>
                                                    {
                                                        (user.statut === 1) ? (
                                                            <span className='sigepec-tag is--success'>Actif</span>
                                                        ) : (

                                                            <span className='sigepec-tag is--error'>Inactif</span>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                        </div>
                                        <div className='sigepec-table__column is--little'>
                                            <button type='button' onClick={() => {appear(user.slug)}}>
                                                <OptionIcon/>
                                            </button>
                                            <div className='sigepec-table__option' id={user.slug}>
                                                <button id={`modal-${user.slug}`} type={'button'} onClick={() => {editModal('edit-modal', user.id)}}>
                                                    Modifier
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
            </section>
            <div className='sigepec-modal' id='create-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('create-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Créer un utilisateur </h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de l\'utilisateur'} fnc={changeName}>
                                    Entrer le nom de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prename} id={'prenom'} type={'text'} label={'Prenom'} tooltip={'Entrer le prenom de l\'utilisateur'} fnc={changePrename}>
                                    Entrer le prenom de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={email} id={'prenom'} type={'text'} label={'Email'} tooltip={'Entrer l\'email de l\'utilisateur'} fnc={changeEmail}>
                                    Entrer l'adresse mail de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <PhoneNumberField id={'phone'}  value={phone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setPhone}>
                                Entrer le numéro de téléphone
                            </PhoneNumberField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={password} id={'password'} type={'text'} label={'Mot de passe'} tooltip={'Entrer le mot de passe de l\'utilisateur'} fnc={changePassword}>
                                    Entrer le mot de passe
                                </NormalTextField>
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
                        <h2>Modifier les information de  l'utilisateur</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={name} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom de l\'utilisateur'} fnc={changeName}>
                                    Entrer le nom de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={prename} id={'prenom'} type={'text'} label={'Prenom'} tooltip={'Entrer le prenom de l\'utilisateur'} fnc={changePrename}>
                                    Entrer le prenom de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <NormalTextField value={email} id={'prenom'} type={'text'} label={'Email'} tooltip={'Entrer l\'email de l\'utilisateur'} fnc={changeEmail}>
                                    Entrer l'adresse mail de l'utilisateur
                                </NormalTextField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <PhoneNumberField id={'phone'}  value={phone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setPhone}>
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
        </MainLayout>
    );
};

export default Utilisateur;