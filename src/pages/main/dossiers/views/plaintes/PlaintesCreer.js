import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListIcon from '../../../../../assets/icons/ListIcon';
import TimerIcon from '../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../components/card/StepCard';
import NormalTextField from '../../../../../components/input/NormalTextField';
import DossierLayout from '../../DossierLayout';

const PlaintesCreer = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [numIdCard, setNumIdCard] = useState('');
    const [objet, setObjet] = useState('');
    const [examen, setExamen] = useState('');
    const [reference, setReference] = useState('');

    const changeNumIdCard = (val) => {
        setNumIdCard(val)
    } 
    const changeReference = (val) => {
        setReference(val)
    } 
    const changeObjet = (val) => {
        setObjet(val)
    } 
    const changeExamen = (val) => {
        setExamen(val)
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/plaintes"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                    </ul>);
    return (
        <DossierLayout actions={actions}>
        <FileDarianne actuel={'Ajout d\' un dossier Plainte'}>
            <OldFileDariane link={'/'}>
                Accueil
            </OldFileDariane>
            <OldFileDariane link={'/gestion-des-dossiers'}>
                Gestion des dossiers
            </OldFileDariane>
            <OldFileDariane link={'/gestion-des-dossiers/plaintes'}>
                Plaintes
            </OldFileDariane>
        </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes ?? suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Informations Dossier</span>
                            </StepCard>
                        </div>
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Informations dossier Permis international</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={objet} id={'objet'} type={'text'} label={'Objet de la plainte'} tooltip={'Entrer le numero de idCard'} fnc={changeObjet}>
                                Entrer l'objet
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numIdCard} id={'idcard'} type={'text'} label={'Numero de l\'idCard'} tooltip={'Entrer le numero de idCard'} fnc={changeNumIdCard}>
                                Entrer le numero de l'idCard
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={reference} id={'reference'} type={'text'} label={'Entrer la r??f??rence de l\'examen'} tooltip={'Entrer la r??f??rence de l\'examen'} fnc={changeReference}>
                                Entrer la r??f??rence de l'examen
                            </NormalTextField>
                            <NormalTextField value={examen} id={'examen'} type={'text'} label={'Examen de la plainte'} tooltip={'Entrer l\'examen de la plainte'} fnc={changeExamen}>
                                Entrer l'examen de la plainte
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <FormBtn type={'submit'} style={'is--primary is--large'}>
                               Enr??gistrer les informations
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </div>
        </DossierLayout>
    );
};

export default PlaintesCreer;