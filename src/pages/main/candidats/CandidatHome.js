import React, { useState } from 'react';
import CancelIcon from '../../../assets/icons/CancelIcon';
import OptionIcon from '../../../assets/icons/OptionIcon';
import SearcIcon from '../../../assets/icons/SearcIcon';
import SortIcon from '../../../assets/icons/SortIcon';
import FormBtn from '../../../components/button/FormBtn';
import FileDarianne from '../../../components/card/FileDarianne';
import OldFileDariane from '../../../components/card/OldFileDariane';
import SelectField from '../../../components/input/SelectField';
import MainLayout from '../../../components/layout/main/MainLayout';

const CandidatHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [candidats, setCandidats] = useState([
       {
           id: 1,
           nom: "Ouedraogo",
           nomjfille: "",
           genre: "h",
           prenom: "Fabrice",
           perenom: "Ouedraogo",
           pereprenom: "Maxime",
           merenom: "Ouedraogo",
           mereprenom: "Alice",
           ecole: "Auto-Ecole Incredible",
           date: "12/12/1992",
           nation: "Burkina Faso",
           profession: "Medecin",
           slug: "candidat-1",
           dossier: "Dossier-1",
       }, 
       {
           id: 2,
           nom: "Kaboré",
           nomjfille: "",
           genre: "h",
           prenom: "Ali Madou",
           perenom: "Kaboré",
           pereprenom: "Mohamed",
           merenom: "Sanon",
           mereprenom: "Mariam",
           nation: "Burkina Faso",
           ecole: "Auto-Ecole Awesome",
           date: "12/12/1999",
           profession: "Etudiant",
           slug: "candidat-2",
           dossier: "Dossier-2",
       }, 
       {
           id: 3,
           nom: "Somé",
           nomjfille: "",
           genre: "h",
           prenom: "Alex",
           perenom: "Somé",
           pereprenom: "François",
           merenom: "Dabiré",
           mereprenom: "Miriam",
           nation: "Burkina Faso",
           profession: "Commerçant",
           ecole: "Dem Auto-Ecole",
           date: "12/02/1989",
           slug: "candidat-3",
           dossier: "Dossier-3",
       }, 
    ]);
    const [province, setProvince] = useState('');
    const [ecole, setEcole] = useState('');
    const [nom, setNom] = useState('');
    const [nomjfille, setNomjfille] = useState('');
    const [prenom, setPrenom] = useState('');
    const [birth, setBirth] = useState('');
    const [nationalite, setNationalite] = useState('');
    const [profession, setProfession] = useState('');
    const [perenom, setPereNom] = useState('');
    const [pereprenom, setPereprenom] = useState('');
    const [merenom, setMereNom] = useState('');
    const [mereprenom, setMereprenom] = useState('');
    const [genre, setGenre] = useState('');

    let optionProvince =[
        {
            value: 'Hauts Bassins',
            label: 'Hauts Bassins'
        },
        {
            value: 'Kadiogo',
            label: 'Kadiogo'
        },
        {
            value: 'Province 1',
            label: 'Province 1'
        },
        {
            value: 'Province 2',
            label: 'Province 2'
        },
        {
            value: 'Province 3',
            label: 'Province 3'
        },
    ];
    let optionAutoEcole =[
        {
            value: 'Auto Awesome',
            label: 'Auto Awesome'
        },
        {
            value: 'Auto Ecole',
            label: 'Auto Ecole'
        },
        {
            value: 'Voiture Ecole',
            label: 'Voiture Ecole'
        },
        {
            value: 'Incredible auto Ecole',
            label: 'Incredible auto Ecole'
        },
        {
            value: 'Incredible auto Ecole 2',
            label: 'Incredible auto Ecole 2'
        },
    ];
    const changeProvince = (value) => {
        setProvince(value)
    }
    const changeEcole = (value) => {
        setEcole(value)
    }
    const appear = (id) => {
        document.getElementById(id).classList.toggle('active');
        document.querySelectorAll('.sigepec-table__option').forEach((item) => {
            if(item.getAttribute('id') !== id){
                item.classList.remove('active');
            }
        })
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const transferModal = (id, num) => {
        document.getElementById('show-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(candidats[num]);
    }
    const showModal = (id, num) => {
        document.getElementById(id).classList.add('is--show');
        setNom(candidats[num].nom);
        setPrenom(candidats[num].prenom);
        setNomjfille(candidats[num].nomjfille);
        setBirth(candidats[num].date);
        setNationalite(candidats[num].nation);
        setProfession(candidats[num].profession);
        setPereNom(candidats[num].perenom);
        setMereNom(candidats[num].merenom);
        setPereprenom(candidats[num].perenom);
        setMereprenom(candidats[num].mereprenom);
        setGenre(candidats[num].genre);
    }
    return (
        <MainLayout>
            <FileDarianne actuel={'Gestion des candidats'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-module__layout is--large'>

                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h1>Gestion des candidats</h1>
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
                                <strong>N. Dossier</strong>
                            </div>
                            <div className='sigepec-table__column is--auto3'>
                                <strong>Nom et Prénoms</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Nom du père</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Nom de la mère</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Auto-école</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed3'>
                                <strong>Date de naissance</strong>
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
                                        <span className='sigepec-table-column__special-span' onClick={() => {showModal('show-modal', candidat.id)}}>{candidat.nom + " " + candidat.prenom}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.perenom + " " + candidat.pereprenom}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.merenom + " " + candidat.mereprenom}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.ecole}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed3'>
                                        <span>{candidat.date}</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(candidat.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={candidat.slug}>
                                            <button type='button' onClick={() => {transferModal('transfert-modal', candidat.slug)}}>
                                                Transférer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className='sigepec-modal' id='transfert-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('transfert-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Transfert vers une autre région</h2>
                        <div className='sigepec-h-bar'></div>
                        <form className='is--large'>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'province'} dvalue={province} label={'Province'} options={optionProvince} tooltip={'Choisir la province'} fnc={changeProvince}>
                                    Choisir la province
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'autoecole'} dvalue={ecole} label={'Auto Ecole'} options={optionAutoEcole} tooltip={'Choisir l\'auto-école'} fnc={changeEcole}>
                                    Choisir l'auto école
                                </SelectField>
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
            <div className='sigepec-modal' id='show-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('show-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Information du candidat</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nom :</span><strong>{nom}</strong>
                            </div>
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nom de jeune fille</span><strong>{nomjfille ? (nomjfille) : ("N/D")}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Prenom(s) :</span><strong>{prenom}</strong>
                            </div>
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Genre :</span>
                                <strong>
                                    {genre === 'f' ? (
                                        "Feminin"
                                    ) : (
                                        <>
                                        {
                                            genre === 'h' ? (
                                                "Masculin"
                                            ) : (
                                                "Autre"
                                            )
                                        }
                                        </>
                                    )
                                    }
                                </strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Date de naissance :</span><strong>{birth}</strong>
                            </div>
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nationalité :</span><strong>{nationalite}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Profession :</span><strong>{profession}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nom du père :</span><strong>{perenom}</strong>
                            </div>
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Prenom du père :</span><strong>{pereprenom}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Nom de la mère :</span><strong>{merenom}</strong>
                            </div>
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Prenom de la mère :</span><strong>{mereprenom}</strong>
                            </div>
                        </div>
                        <h2>Etat actuel</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Statut :</span><span className='sigepec-tag is--warning'>Code en cours...</span>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Durée d'attente de passage :</span><strong>N/D</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <button type='button' className='is--large sigepec-btn is--primary' onClick={() => {transferModal('transfert-modal', 1)}}>
                                    Transférer vers une autre région
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CandidatHome;