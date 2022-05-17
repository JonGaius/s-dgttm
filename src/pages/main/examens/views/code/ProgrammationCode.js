import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '../../../../../assets/icons/AddIcon';
import CancelIcon from '../../../../../assets/icons/CancelIcon';
import CheckIcon from '../../../../../assets/icons/CheckIcon';
import OptionIcon from '../../../../../assets/icons/OptionIcon';
import SearcIcon from '../../../../../assets/icons/SearcIcon';
import SortIcon from '../../../../../assets/icons/SortIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import MultiSelectField from '../../../../../components/input/MultiSelectField';
import NormalTextField from '../../../../../components/input/NormalTextField';
import SelectField from '../../../../../components/input/SelectField';
import ExamenLayout from '../../ExamenLayout';

const ProgrammationCode = ({title}) => {
    let navigate = useNavigate();
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

    const [tableElement, setTableElement] = useState([
        {
            id: 1,
            slug: 'program-1',
            lieu: 'Ouagadougou',
            examimateur: 'Sankara Edmond, Ouedraogo Charles',
            salle: 'Salle 1',
            date: '12/12/2020',
            langue: 'Français',
        },
        {
            id: 2,
            slug: 'program-2',
            lieu: 'Ouagadougou',
            examimateur: 'Sankara Edmond, Ouedraogo Charles',
            salle: 'Salle 2',
            date: '12/12/2020',
            langue: 'Français',
        },
        {
            id: 3,
            slug: 'program-3',
            lieu: 'Ouagadougou',
            examimateur: 'Sankara Edmond, Ouedraogo Charles',
            salle: 'Salle 3',
            date: '12/12/2020',
            langue: 'Français',
        },
        {
            id: 4,
            slug: 'program-4',
            lieu: 'Ouagadougou',
            examimateur: 'Sankara Edmond, Ouedraogo Charles',
            salle: 'Salle 4',
            date: '12/12/2020',
            langue: 'Français',
        },
       
    ]);
    const [date, setDate] = useState('');
    const [lieu, setLieu] = useState('');
    const [exam, setExam] = useState('Code');
    const [examimateur, setExaminateur] = useState('');
    const [langue, setLangue] = useState('');
    const [salle, setSalle] = useState('');
    const [number, setNumber] = useState('');

    const editModal = (id, num) => {
        document.querySelector('#add-modal').classList.remove('is--show');
        document.querySelector('#show-modal').classList.remove('is--show');
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        // setDate(tableElement[num].date);
        // setLieu(tableElement[num].lieu);
        // // setExam(tableElement[num].exam);
        // setExaminateur(tableElement[num].examimateur);
        // setSalle(tableElement[num].salle);
    }
    const showModal = (id, num) => {
        document.getElementById(id).classList.add('is--show');
        // console.log(tableElement[num]);
        // setDate(tableElement[num].date);
        // setLieu(tableElement[num].lieu);
        // setLangue(tableElement[num].langue);
        // // setExam(tableElement[num].exam);
        // setExaminateur(tableElement[num].examimateur);
        // setSalle(tableElement[num].salle);
        setNumber(num)
    }
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
    const handleSubmit2 = (e) => {
        e.preventDefault();
        if(date && lieu && exam && examimateur && langue && salle){
            document.getElementById('edit-modal').classList.remove('is--show');
            document.getElementById('edit-generate-modal').classList.add('is--show');
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
                url: '/gestion-des-examens/programmations/code',
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
                url: '/gestion-des-examens/programmations/code'
            }
        })
    }
    return (
        
        <ExamenLayout title={title} here={'program'}>

            <FileDarianne actuel={'Code'}>
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
                    <h2>Liste des programmations - Code</h2>
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
                            <AddIcon/>  <span>Ajouter une nouvelle programmation</span>
                        </button>
                    </div>
                </div>
                <div className='sigepec-module-dossier-list__container is--large'>
                    <div className='sigepec-table'>
                        <div className='sigepec-table__head'>
                            <div className='sigepec-table__column is--little'>
                                -
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Date de l'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--auto'>
                                <strong>Examinateurs</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Langue de l'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Salle de l'examen</strong>
                            </div>
                            <div className='sigepec-table__column is--lilmed'>
                                <strong>Type de l'examen</strong>
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
                                        <span className='sigepec-table-column__special-span' onClick={() => {showModal('show-modal', element.id)}}>{element.date}</span>
                                    </div>
                                    <div className='sigepec-table__column is--auto'>
                                       <span>{element.examimateur} </span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.langue}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span>{element.salle}</span>
                                    </div>
                                    <div className='sigepec-table__column is--lilmed'>
                                        <span className='sigepec-tag is--info'>Code</span>
                                    </div>
                                    <div className='sigepec-table__column is--little'>
                                        <button type='button' onClick={() => {appear(element.slug)}}>
                                            <OptionIcon/>
                                        </button>
                                        <div className='sigepec-table__option' id={element.slug}>
                                            <button type='button' onClick={() => {editModal('edit-modal', element.id)}}>
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

            <div className='sigepec-modal' id='add-modal'  onSubmit={handleSubmit}>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('add-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <form className='is--large'>
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
            <div className='sigepec-modal' id='edit-modal'  onSubmit={handleSubmit2}>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('edit-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <form className='is--large'>
                            <h2>Modification de la programmation programmation</h2>
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
            <div className='sigepec-modal' id='edit-generate-modal'>
                <div className='sigepec-modal__container'>
                    <div className='sigepec-modal__title'>
                        <button type='button' className='sigepec-modal__close' onClick={() => {removeModal('edit-generate-modal')}}>
                            <CancelIcon/>
                        </button>
                    </div>
                    <div className='sigepec-modal__body sigepec-module-dossier-mmodal'>
                        <h2>Choix de la liste des candidats</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className="is--large has--flex_between sigepec-modal-flex">
                            <button className="sigepec-card__module is--large" type='button' onClick={() => {automatique()}}>
                                
                                <span>Générer une nouvelle liste automatiquement</span>
                            </button>
                            <button className="sigepec-card__module is--large" type='button' onClick={() => {manual()}}>
                                
                                <span>Générer une nouvelle liste manuellement</span>
                            </button>
                        </div>
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
                                <span>Date de l'examen :</span><strong>{date}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Lieu de l'examen :</span><strong>{lieu.value}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Salle :</span><strong>{salle.value}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Langue :</span><strong>{langue.value}</strong>
                            </div>
                        </div>
                        <div className="sigepec-module-add-apercu__items has--flex_between is--large">
                            <div className="sigepec-module-add-apercu__item is--large has--flex_between">
                                <span>Examinateurs :</span><strong>{
                                    examimateur ? (
                                        <>
                                        {
                                            examimateur.map((examina , key) => (
                                            <>{examina.label} </>
                                            ))
                                        }  
                                        </>
                                    ) : (null)
                                    }</strong>
                            </div>
                        </div>
                        <h2>Actions</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-files'>
                            <button type='button' className='sigepec-module-list__action is--large has--flex' onClick={() => {editModal('edit-modal', number)}}>
                                <CheckIcon/> <span>Modifier les informations de la programmation</span>
                            </button>
                            <Link to={`/gestion-des-examens/programmation/camdidats/${'slug'}`} className="sigepec-module-list__action is--large has--flex">
                                <CheckIcon/> <span>Voir la liste des candidats</span>
                            </Link>
                            <button type='button' className='sigepec-module-list__action is--large has--flex'>
                                <CheckIcon/> <span>Annuler la programmation</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ExamenLayout>
    );
};

export default ProgrammationCode;