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
import SelectField from '../../../../components/input/SelectField';
import ExamenLayout from '../ExamenLayout';

const Resultat = ({title}) => {
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
    ];
    const optionExamen = [
        {
            value: 'program-1',
            label: 'Examen Code Français du 01/12/2020',
        },
        {
            value: 'program-2',
            label: 'Examen Creneaux Moore du 12/11/2020',
        },
        {
            value: 'program-3',
            label: 'Examen Circulation Foufouldé du 11/12/2020',
        },
        {
            value: 'program-4',
            label: 'Examen Code Douala du 12/12/2020',
        },
       
    ];
    let navigate = useNavigate();
    const [exam, setExam] = useState('');

    const changeExamen = (val) => {
        setExam(val)
    }
    const activeModal = (id) => {
        document.getElementById(id).classList.add('is--show');
    }
    const removeModal = (id) => {
        document.getElementById(id).classList.remove('is--show');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(exam){
            navigate('/gestion-des-examens/resultats/creer', {
                state: {
                    examen: exam
                }
            });
        }else{
            console.log('error')
        }
    }
    return (
        <ExamenLayout title={title} here={'resultat'}>

            <FileDarianne actuel={'Gestion des Resultats'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-examens'}>
                    Gestion des exmens
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-dossier-list'>
                <div className='sigepec-module-dossier-list__head has--flex_between is--large'>
                    <h2>Resultat</h2>
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
                            <AddIcon/>  <span>Saisir un résultat</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-accueil is--large has--flex_center has--wrap'>
                {
                    lists.map(list => (
                        <div className='sigepec-module-exam-accueil__item' key={list.name}>
                            <ModuleCard link={`/gestion-des-examens/resultat/${list.link}`}>
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
                        <form className='is--large' onClick={handleSubmit}>
                            <h2>Choisir l'examen concerné</h2>
                            <div className='sigepec-h-bar'></div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <SelectField id={'examen'} dvalue={exam} label={'Choix de l\'examen'} options={optionExamen} tooltip={'Choisir l\'examen'} fnc={changeExamen}>
                                    Choisir l'examen
                                </SelectField>
                            </div>
                            <div className='sigepec-module-add-form__group has--flex_between is--large'>
                                <FormBtn type={'submit'} style={'is--primary is--large'}>
                                    Continuer
                                </FormBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default Resultat;