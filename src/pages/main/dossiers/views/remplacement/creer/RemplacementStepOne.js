import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListIcon from '../../../../../../assets/icons/ListIcon';
import TimerIcon from '../../../../../../assets/icons/TimerIcon';
import FormBtn from '../../../../../../components/button/FormBtn';
import FileDarianne from '../../../../../../components/card/FileDarianne';
import OldFileDariane from '../../../../../../components/card/OldFileDariane';
import StepCard from '../../../../../../components/card/StepCard';
import NormalTextField from '../../../../../../components/input/NormalTextField';
import SelectField from '../../../../../../components/input/SelectField';
import DossierLayout from '../../../DossierLayout';

const RemplacementStepOne = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    let navigate = useNavigate();

    let optionCategorie =[
        {
            value: 'PermisA',
            label: 'Permis A'
        },
        {
            value: 'PermisA1',
            label: 'Permis A1'
        },
        {
            value: 'PermisB',
            label: 'Permis B'
        },
        {
            value: 'PermisB1',
            label: 'Permis B1'
        },
        {
            value: 'PermisC',
            label: 'Permis C'
        },
    ];
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

    const [numPermis, setNumPermis] = useState('');
    const [derExtension, setDerExtension] = useState('');
    const [category, setCategory] = useState('');
    const [delivrance, setDelivrance] = useState('');
    const [lieu, setLieu] = useState('');
    const [dateObtention, setDateObtention] = useState('');
    const [lieuObtention, setLieuObtention] = useState('');
    const [modeObtention, setModeObtention] = useState('');
    const [refAnterieure, setRefAnterieure] = useState('');
    const [refAuthentification, setRefAuthentification] = useState('');
    const [dateAuthentification, setDateAuthentification] = useState('');

    const changeNumPermis = (val) => {
        setNumPermis(val)
    } 
    const changeDerExtension = (val) => {
        setDerExtension(val)
    } 
    const changeCategory = (val) => {
        setCategory(val)
    } 
    const changeDelivrance = (val) => {
        setDelivrance(val)
    } 
    const changeLieu = (val) => {
        setLieu(val)
    } 
    const changeDateObtention = (val) => {
        setDateObtention(val)
    } 
    const changeLieuObtention = (val) => {
        setLieuObtention(val)
    } 
    const changeModeObtention = (val) => {
        setModeObtention(val)
    } 
    const changeRefAnterieure = (val) => {
        setRefAnterieure(val)
    } 
    const changeRefAuthentification = (val) => {
        setRefAuthentification(val)
    } 
    const changeDateAuthentification = (val) => {
        setDateAuthentification(val)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(numPermis && derExtension && category && delivrance && lieu && dateObtention && modeObtention && lieuObtention && refAnterieure && refAuthentification && refAuthentification && dateAuthentification)
        navigate('/gestion-des-dossiers/creer/remplacement/etape-2', {
            state: {
                numPermis: numPermis,
                derExtension: derExtension,
                category: category,
                delivrance: delivrance,
                lieu: lieu,
                dateObtention: dateObtention,
                modeObtention: modeObtention,
                lieuObtention: lieuObtention,
                refAnterieure: refAnterieure,
                refAuthentification: refAuthentification,
                dateAuthentification: dateAuthentification,
            }
        }) 
    }

    const actions = (<ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item is--active`}>
                            <Link to={"/gestion-des-dossiers/remplacement"}>
                                <ListIcon/> {"Lister"}
                            </Link>
                        </li>
                    </ul>);
    return (
        
        <DossierLayout actions={actions}>
            <FileDarianne actuel={'Ajout d\'un remplacement'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers'}>
                    Gestion des dossiers
                </OldFileDariane>
                <OldFileDariane link={'/gestion-des-dossiers/remplacement'}>
                    Remplacement
                </OldFileDariane>
            </FileDarianne>
            <div className='sigepec-module-add is--large has--flex_between'>
                <div className='sigepec-module-add__step'>
                    <div className="sigepec-module-add-step is--large">
                        <h2>Etapes ?? suivre</h2>
                        <div className='sigepec-module-add-step__list'>
                            <StepCard type={'is--onloading'}>
                                <TimerIcon/> <span>Informations Dossier Remplacement</span>
                            </StepCard>
                            <StepCard type={''}>
                                <TimerIcon/> <span>Scan des fichiers</span>
                            </StepCard>
                        </div>
                    </div>
                </div>
                <div className='sigepec-module-add__form'>
                    <form className='sigepec-module-add-form' onSubmit={handleSubmit}>
                        <h2>Informations dossier Remplacement</h2>
                        <div className='sigepec-h-bar'></div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={numPermis} id={'permis'} type={'text'} label={'Numero de permis'} tooltip={'Entrer le numero de permis'} fnc={changeNumPermis}>
                                Entrer le numero de permis
                            </NormalTextField>
                            <NormalTextField value={derExtension} id={'der_extension'} type={'date'} label={'Date de la derni??re extension'} tooltip={'Entrer la date de la derni??re extension'} fnc={changeDerExtension}>
                                Entrer la date de la derni??re extension
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'categorie'} dvalue={category} label={'Cat??gorie obtenue'} options={optionCategorie} tooltip={'Choisir la cat??gorie de permis obtenue'} fnc={changeCategory}>
                                Choisir la cat??gorie obtenue
                            </SelectField>
                            <NormalTextField value={delivrance} id={'date_delivrance'} type={'date'} label={'Date de d??livrance'} tooltip={'Entrer la date de d??livrance'} fnc={changeDelivrance}>
                                Entrer la date de d??livrance
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'lieu'} dvalue={lieu} label={'Lieu de d??livrance'} options={optionProvince} tooltip={'Choisir le lieu de d??livrance'} fnc={changeLieu}>
                                Choisir le lieu de d??livrance
                            </SelectField>
                            <NormalTextField value={dateObtention} id={'date_obtention'} type={'date'} label={'Date d\'obtention'} tooltip={'Entrer la date d\'obtention'} fnc={changeDateObtention}>
                                Entrer la date d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <SelectField id={'lieu_obtention'} dvalue={lieuObtention} label={'Lieu d\'obtention'} options={optionProvince} tooltip={'Choisir le lieu d\'obtention'} fnc={changeLieuObtention}>
                                Choisir le lieu d'obtention
                            </SelectField>
                            <NormalTextField value={modeObtention} id={'mode_obtention'} type={'text'} label={'Mode d\'obtention'} tooltip={'Entrer le mode d\'obtention'} fnc={changeModeObtention}>
                                Entrer le mode d'obtention
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={refAnterieure} id={'ref_anterieure'} type={'text'} label={'R??f??rence ant??rieure'} tooltip={'Entrer la r??f??rence ant??rieure'} fnc={changeRefAnterieure}>
                                Entrer la r??f??rence ant??rieure
                            </NormalTextField>
                            <NormalTextField value={refAuthentification} id={'ref_auth'} type={'text'} label={'R??f??rence d\'authentification'} tooltip={'Entrer la r??f??rence d\'authentification'} fnc={changeRefAuthentification}>
                                Entrer la r??f??rence d'authentification
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__group has--flex_between is--large'>
                            <NormalTextField value={dateAuthentification} id={'date_auth'} type={'date'} label={'Date d\'anthentification'} tooltip={'Entrer la date d\'anthentification'} fnc={changeDateAuthentification}>
                                Entrer la date d'authentification
                            </NormalTextField>
                        </div>
                        <div className='sigepec-module-add-form__action has--flex'>
                            <FormBtn type={'reset'} style={'is--large'}>
                                Annuler
                            </FormBtn>
                            <FormBtn type={'submit'} style={'is--primary is--large'}>
                               Enr??gistrer et Continuer
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </div>
        </DossierLayout>
    );
};

export default RemplacementStepOne;