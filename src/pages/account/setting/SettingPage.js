import React from 'react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../../../components/layout/main/MainLayout';

const SettingPage = ({title, children}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const routes = [
        {
            link: '/mon-compte/parametres',
            name: 'Mes Informations personnelles'
        },
        {
            link: '/mon-compte/parametres/mot-de-passe',
            name: 'Mot de passe'
        },
    ]
    return (
        <MainLayout>
            <ul className='sigepec-user-navigation'>
                {
                    routes.map((route, key) => (
                        <li key={key} className="sigepec-user-navigation__item">
                            <NavLink to={route.link}  end>
                                {route.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <section className='sigepec-user-formContainer'>
                {children}
            </section>
        </MainLayout>
    );
};

export default SettingPage;