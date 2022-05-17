import React, { useState } from 'react';
import FormBtn from '../../../components/button/FormBtn';
import AuthPasswordField from '../../../components/input/AuthPasswordField';
import AuthTextField from '../../../components/input/AuthTextField';
import AuthLayout from '../../../components/layout/auth/AuthLayout';
import image from '../../../assets/images/pexels-ron-lach-9518019.jpg';

const LoginPage = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [btnText, setBtnText] = useState('Se connecter');
    const [disable, setDisable] = useState('is--primary ');

    const changeLogin = (val) => {
        setLogin(val);
    }
    const changePassword = (val) => {
        setPassword(val);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnText('Connexion en cours');
        setDisable('is--disable');
    }

    return (
        <AuthLayout image={image} title={'Connexion'} subtitle={'Heureux de vous revoir'}>
            <form className='sigepec-form is--large' onSubmit={handleSubmit}>
                <AuthTextField type={'email'} fnc={changeLogin}>
                    Email
                </AuthTextField>
                <AuthPasswordField fnc={changePassword}>
                    Mot de passe
                </AuthPasswordField>
                <FormBtn style={`${disable} is--large`} type={'submit'}>
                   <span>{btnText}</span>
                </FormBtn>
            </form>
            <br />
            <p>Pour toute perte ou oubli de mot de passe. Veuillez vous contacter un administrateur...</p>
        </AuthLayout>
    );
};

export default LoginPage;