import React, { useState } from 'react';
import FormBtn from '../../../../components/button/FormBtn';
import NormalTextField from '../../../../components/input/NormalTextField';
import SettingPage from '../SettingPage';

const PasswordEdit = ({title}) => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const changePassword = (val) => {
        setPassword(val)
    }
    const changeNewPassword = (val) => {
        setNewPassword(val)
    }
    const changeConfirmPassword = (val) => {
        setConfirmPassword(val)
    }
    return (
        <SettingPage title={title}>
            <h2>Mot de passe</h2>
            <div className='sigepec-h-bar'></div>
            <form className='is--large'>
                <div className='sigepec-module-add-form__group has--flex_between is--large'>
                    <NormalTextField value={newPassword} id={'new-password'} type={'password'} label={'Nouveau mot de passe'} tooltip={'Entrer le nouveau mot de passe'} fnc={changeNewPassword}>
                        Entrer votre nouveau mot de passe
                    </NormalTextField>
                    <NormalTextField value={confirmPassword} id={'confirm-password'} type={'password'} label={'Nouveau mot de passe'} tooltip={'Confirmer le mot de passe'} fnc={changeConfirmPassword}>
                        Resaisir votre nouveau mot de passe
                    </NormalTextField>
                </div>
                <div className='sigepec-module-add-form__group has--flex_between is--large'>
                    <NormalTextField value={password} id={'password'} type={'password'} label={'Mot de passe actuel'} tooltip={'Entrer le mot de passe actuel'} fnc={changePassword}>
                        Entrer l'ancien mot de passe pour confirmer les changements
                    </NormalTextField>
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

export default PasswordEdit;