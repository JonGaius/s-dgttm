import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../components/layout/main/MainLayout';

const ExamenLayout = ({title,here, children}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
   
    return (
        <MainLayout>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des examens</h1>
                    <ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item ${(here === 'home') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-examens'}>
                                Accueil
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'program') ? 'is--active' : ''}`} >
                            <Link to={'/gestion-des-examens/programmations'}>
                                Programmations
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'resultat') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-examens/resultats'}>
                                Résultats
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'sujet') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-examens/sujets'}>
                                Sujets
                            </Link>
                        </li>
                    </ul>
                </div>
                {children}
            </section>
        </MainLayout>
    );
};

export default ExamenLayout;