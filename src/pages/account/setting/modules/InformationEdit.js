import React, { useState } from 'react';
import FormBtn from '../../../../components/button/FormBtn';
import NormalTextField from '../../../../components/input/NormalTextField';
import PhoneNumberField from '../../../../components/input/PhoneNumberField';
import SettingPage from '../SettingPage';

const InformationEdit = ({title}) => {
    const [nom, setNom] = useState('DOE');
    const [prenom, setPrenom] = useState('Jannie');
    const [email, setEmail] = useState('janniedoe@exmaple.com');
    const [phone, setPhone] = useState('+226XXXXXXX');
    const [avatar, setAvatar] = useState('');

    const changeNom = (val) => {
        setNom(val)
    }
    const changePrenom = (val) => {
        setPrenom(val)
    }
    const changeEmail = (val) => {
        setEmail(val)
    }
    const changeAvatar = (e) => {
        const [file] = e.target.files;
        document.getElementById("avatarIMG").src = URL.createObjectURL(file)
        setAvatar(e.target.files)
    }
    
    return (
        <SettingPage title={title}>
            <h2>Mes informations personnelles</h2>
            <div className='sigepec-h-bar'></div>
            <form className='is--large'>
                <div className='sigepec-user-form__avatar'>
                    <div className='sigepec-user-form-avatar'>
                        <img src={"#"} alt="" id="avatarIMG"/>
                    </div>
                    <input type="file" id='avatar' accept='.png,.jpeg,.jpg' onChange={changeAvatar}/>
                    <label htmlFor="avatar" className='sigepec-btn is--secondary'>
                        Modifier la photo
                    </label>
                </div>
                <div className='sigepec-module-add-form__group has--flex_between is--large'>
                    <NormalTextField value={nom} id={'nom'} type={'text'} label={'Nom'} tooltip={'Entrer le nom'} fnc={changeNom}>
                        Entrer votre nom de famille
                    </NormalTextField>
                    <NormalTextField value={prenom} id={'prenom'} type={'text'} label={'Prenom'} tooltip={'Entrer le prenom'} fnc={changePrenom}>
                        Entrer votre prenom
                    </NormalTextField>
                </div>
                <div className='sigepec-module-add-form__group has--flex_between is--large'>
                    <NormalTextField value={email} id={'email'} type={'email'} label={'Email'} tooltip={'Entrer l\'email'} fnc={changeEmail}>
                        Entrer l'adresse mail de connexion
                    </NormalTextField>
                    <PhoneNumberField id={'phone'}  value={phone} type={'phone'} label={'Téléphone'} tooltip={'Entrer le numéro de téléphone'} fnc={setPhone}>
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
        </SettingPage>
    );
};

export default InformationEdit;