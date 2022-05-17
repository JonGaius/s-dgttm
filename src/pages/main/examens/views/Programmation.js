import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../assets/icons/CancelIcon';
import SearcIcon from '../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../assets/icons/SortIcon';
import FormBtn from '../../../../components/button/FormBtn';
import FileDarianne from '../../../../components/card/FileDarianne';
import ModuleCard from '../../../../components/card/ModuleCard';
import OldFileDariane from '../../../../components/card/OldFileDariane';
import MultiSelectField from '../../../../components/input/MultiSelectField';
import NormalTextField from '../../../../components/input/NormalTextField';
import SelectField from '../../../../components/input/SelectField';
import ExamenLayout from '../ExamenLayout';

const Programmation = ({title}) => {
    let navigate = useNavigate()
    const lists = [
        {
            name: 'Code',
            link: 'code'
        },
        {
            name: 'Creneaux',
            link: 'creneaux'
        },
        {
            name: 'Circulation',
            link: 'circulation'
        }
    ]
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

    const [date, setDate] = useState('');
    const [lieu, setLieu] = useState('');
    const [exam, setExam] = useState('');
    const [examimateur, setExaminateur] = useState('');
    const [langue, setLangue] = useState('');
    const [salle, setSalle] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(date && lieu && exam && examimateur && langue && salle){
            document.getElementById('add-modal').classList.remove('is--show');
            document.getElementById('generate-modal').classList.add('is--show');
        }else{
            console.log('erreur')
        }
    }

    const automatique = () => {
        // Fonction
        navigate('/gestion-des-examens/programmations/apercu', {
            state: {
                date: date,
                lieu: lieu,
                exam: exam,
                examimateur: examimateur,
                langue: langue,
                salle: salle,
                url: '/gestion-des-examens/programmations/',
            }
        })
    }

    const manual = () => {
        // Fonction
        navigate('/gestion-des-examens/programmations/liste-des-candidats', {
            state: {
                date: date,
                lieu: lieu,
                exam: exam,
                examimateur: examimateur,
                langue: langue,
                salle: salle,
                url: '/gestion-des-examens/programmations/'
            }
        })
    }
    return (
        <ExamenLayout title={title} here={'program'}>
            <FileDarianne actuel={'Gestion des Programmations'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Programmations</h2>
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
                        <button type='button' className='sigepec-btn is--primary' onClick={() => {activeModal('add-modal')}}>
                            <AddIcon/>  <span>Ajouter une nouvelle Programmation</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-exam-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-examens/programmations/${list.link}`}>
                                <span>{list.name}</span>
                            </ModuleCard>
                        </div>
                    ))
                }
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
                        <form className='is--large' onSubmit={handleSubmit}>
                            <h2>Ajout d'une nouvelle programmation</h2>
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
                            <div className='sigepec-module-add-form__action has--flex'>
                                <FormBtn type={'reset'} style={'is--large'}>
                                    Effacer
                                </FormBtn>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                    Enrégistrer et Continuer
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='sigepec-modal' id='generate-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('generate-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Choix de la liste des candidats</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="is--large has--flex_between sigepec-modal-flex">
                            <button className="sigepec-card__module is--large" type='button' onClick={() => {automatique()}}>
                                
                                <span>Générer la liste automatiquement</span>
                            </button>
                            <button className="sigepec-card__module is--large" type='button' onClick={() => {manual()}}>
                                
                                <span>Générer la liste manuellement</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default Programmation;