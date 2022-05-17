import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import FileDarianne from '../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import MultiSelectField from '../../../../components/input/MultiSelectField';
import NormalTextField from '../../../../components/input/NormalTextField';
import SelectField from '../../../../components/input/SelectField';
import ExamenLayout from '../ExamenLayout';

const ApercuProgrammation = ({title}) => {
    const [candidats, setCandidats] = useState([
        {
            id: 1,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 2,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 3,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 4,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        },
        {
            id: 5,
            nom: "Fabien Ouedraogo",
            dossier: "Candidat-2",
            ecole: "Yo AutoEcole",
        }
    ])
    let {state} = useLocation();
    console.log(state);
    let navigate = useNavigate();

    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    let optionExam =[
        {
            value: 'Code',
            label: 'Code'
        },
        {
            value: 'Creneaux',
            label: 'Creneaux'
        },
        {
            value: 'Circulation',
            label: 'Circulation'
        },
    ];
    let optionLang =[
        {
            value: 'fr',
            label: 'Français'
        },
        {
            value: 'douala',
            label: 'Douala'
        },
        {
            value: 'moore',
            label: 'Mooré'
        },
        {
            value: 'foufoulde',
            label: 'Foufouldé'
        },
    ];
    let optionVille =[
        {
            value: 'ouagadougou',
            label: 'Ouagadougou'
        },
        {
            value: 'bobo-dioulasso',
            label: 'Bobo-Dioulasso'
        },
        {
            value: 'dori',
            label: 'Dori'
        },
        {
            value: 'gaoua',
            label: 'Gaoua'
        },
    ];
    let optionSalle =[
        {
            value: 'salle-1',
            label: 'Salle 1'
        },
        {
            value: 'salle-2',
            label: 'Salle 2'
        },
        {
            value: 'salle-3',
            label: 'Salle 3'
        },
        {
            value: 'salle-4',
            label: 'Salle 4'
        },
        {
            value: 'salle-5',
            label: 'Salle 5'
        },
    ];
    let optionExaminateur = [
        {
            name: 'Kabore Edmond',
            label: 'examinateur-1',
        },
        {
            value: 'examinateur-2',
            label: 'Ouattara Charlotte',  
        },
        {
            value: 'examinateur-3',
            label: 'Sanou Alice',
        },
        {
            value: 'examinateur-4',
            label: 'Ouedraogo Axel',
        },
    ];


    const [date, setDate] = useState(state.date);
    const [lieu, setLieu] = useState(state.lieu);
    const [exam, setExam] = useState(state.exam);
    const [examimateur, setExaminateur] = useState(state.examimateur);
    const [langue, setLangue] = useState(state.langue);
    const [salle, setSalle] = useState(state.salle);

    const changeDate = (val) => {
        setDate(val)
    }
    const changeLieu = (val) => {
        setLieu(val)
    }
    const changeExam = (val) => {
        setExam(val)
    }
    const changeExaminateur = (val) => {
        setExaminateur(val)
    }
    const changeLangue = (val) => {
        setLangue(val)
    }
    const changeSalle = (val) => {
        setSalle(val)
    }
    const changeList = () => {
        navigate('/gestion-des-examens/programmations/liste-des-candidats', {
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
    const saveInformation = () => {
        // function
        navigate(state.url)
    }
    return (
        <ExamenLayout title={title} here={'program'}>
            <FileDarianne actuel={'Programmation'}>
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
                    <h2>Aperçu</h2>
                    <div className='sigepec-module-dossier-list__actions has--flex'>
                        <button type='button' className='sigepec-btn is--primary' onClick={() => {saveInformation()}}>
                            <span>Enrégistrer les informations</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-add is--large has--flex_between'>
                    <div className="sigepec-module-add__section">
                        <div className="sigepec-module-add-section__container">
                            <h2>Les candidats programmés</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-table'>
                                <div className='sigepec-table__head'>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Numéro Dossier</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Nom et Prénom</strong>
                                    </div>
                                    <div className='sigepec-table__column is--auto2'>
                                        <strong>Auto-Ecole</strong>
                                    </div>
                                </div>
                                {
                                    candidats.map((candidat) => (
                                        <div className='sigepec-table__body' key={candidat.id}>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{candidat.dossier}</span>
                                            </div>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{candidat.nom}</span>
                                            </div>
                                            <div className='sigepec-table__column is--auto2'>
                                                <span>{candidat.ecole}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="sigepec-module-add-apercu__btn">
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {changeList()}}>
                                    Modifier la liste
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="sigepec-module-add__section">
                        <div className="sigepec-module-add-section__container">
                            <h2>Information sur la programmation</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Date de l'examen :</span><strong>{date}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Lieu de l'examen :</span><strong>{lieu.label}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Type de l'examen :</span><strong>{exam.label}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Langue de l'examen :</span><strong>{langue.label}</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                                <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                    <span>Examinateur :</span><strong>{
                                    examimateur.map((examina , key) => (
                                        <>{examina.label} </>
                                    ))
                                    }</strong>
                                </div>
                            </div>
                            <div className="sigepec-module-add-apercu__btn">
                                <button type='button' className='sigepec-btn is--secondary' onClick={() => {activeModal('add-modal')}}>
                                    Modifier les informations
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sigepec-modal' id='add-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('add-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Modification des informations de la programmation</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={date} id={'date'} type={'date'} label={'Date de l\'examen'} tooltip={'Entrer la date de l\'examen'} fnc={changeDate}>
                                Entrer la date de l\'examen
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'lieu'} dvalue={lieu} label={'Lieu de l\'examen'} options={optionVille} tooltip={'Choisir le lieu de l\'examen'} fnc={changeLieu}>
                                Choisir le lieu de l'examen
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'exam'} dvalue={exam} label={'Type de l\'examen'} options={optionExam} tooltip={'Choisir le type de l\'examenr'} fnc={changeExam}>
                                Choisir le type de l'examen
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <MultiSelectField id={'examinateur'} dvalue={examimateur} label={'Choix de l\'examinateur'} options={optionExaminateur} tooltip={'Choisir l\'examinateur '} fnc={changeExaminateur}>
                                Choisir l'examinateur
                            </MultiSelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'langue'} dvalue={langue} label={'Choix de la langue de l\'examen'} options={optionLang} tooltip={'Choisir de la langue '} fnc={changeLangue}>
                                Choisir la langue de l'examen
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'salle'} dvalue={salle} label={'Choix de la salle de l\'examen'} options={optionSalle} tooltip={'Choisir de la langue '} fnc={changeSalle}>
                                Choisir la salle de l'examen
                            </SelectField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <button type='button' className='sigepec-btn is--large is--secondary' onClick={() => {removeModal('add-modal')}}>
                                Modifier et Fermer
                            </button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default ApercuProgrammation;