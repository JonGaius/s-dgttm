import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = ({image,title, subtitle, children}) => {
    return (
        <section className='sigepec-layout__auth'>
            <div className='sigepec-layout-auth__container is--large has--flex_between'>
                <div className='sigepec-layout-auth__formContainer'>
                    <div className='sigepec-layout-auth-formContainer'>
                        <header className='sigepec-layout-auth__header'>
                            <div className="sigepec-layout-auth__logo">
                                <Link to={'/'}>
                                    Sigepec - DGTTM
                                </Link>
                                <span>
                                    Système Intégré de Gestion des Permis de Conduire
                                </span>
                            </div>
                            <div className="sigepec-layout-auth__title">
                                <h1>{title}</h1>
                                <span>
                                    {subtitle}
                                </span>
                            </div>
                        </header>
                        <main className='sigepec-layout-auth__main'>
                            {children}
                        </main>
                    </div>
                </div>
                <div className='sigepec-layout-auth__image'>
                    <img src={image} alt="connexion" />
                </div>
            </div>
        </section>
    );
};

export default AuthLayout;