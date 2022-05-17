import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../../components/layout/main/MainLayout';

const QuestionnaireLayout = ({title, here, children}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    return (
        <MainLayout>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des Questionnaires et des Formations</h1>
                    <ul className='sigepec-module__nav has--flex'>
                        <li className={`sigepec-module-nav__item ${(here === 'home') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-questionnaires-et-formations'}>
                                Accueil
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'question') ? 'is--active' : ''}`} >
                            <Link to={'/gestion-des-questionnaires-et-formations/questionnaires'}>
                                Questionnaires
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'formation') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-questionnaires-et-formations/formations'}>
                                Formations
                            </Link>
                        </li>
                        <li className={`sigepec-module-nav__item ${(here === 'archive') ? 'is--active' : ''}`}>
                            <Link to={'/gestion-des-questionnaires-et-formations/archives'}>
                                Archives
                            </Link>
                        </li>
                    </ul>
                </div>
                {children}
            </section>
        </MainLayout>
    );
};

export default QuestionnaireLayout;