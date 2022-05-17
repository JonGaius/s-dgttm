import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../components/layout/main/MainLayout';

const AutoEcoleLayout = ({here, title, children}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    return (
        <MainLayout>
           <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des Auto-Ecoles</h1>
                    <ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item ${(here === 'home') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-autoecoles'}>
                                Accueil
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'licences') ? 'is--active' : ''}`} >
                            <Link to={'/gestion-des-autoecoles/licences'}>
                                Licences
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'agrements') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-autoecoles/agrements'}>
                                Agréments
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'vtm') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-autoecoles/vtm'}>
                                Auto-Ecoles
                            </Link>
                        </li>
                    </ul>
                </div>
                {children}
            </section>
        </MainLayout>
    );
};

export default AutoEcoleLayout;