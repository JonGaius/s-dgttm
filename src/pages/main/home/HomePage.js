import React from 'react';
import CandidatIcon from '../../../assets/icons/ic/CandidatIcon';
import CardIcon from '../../../assets/icons/ic/CardIcon';
import ConfigIcon from '../../../assets/icons/ic/ConfigIcon';
import DossierIcon from '../../../assets/icons/ic/DossierIcon';
import EcoleIcon from '../../../assets/icons/ic/EcoleIcon';
import ExamIcon from '../../../assets/icons/ic/ExamIcon';
import ExaminateurIcon from '../../../assets/icons/ic/ExaminateurIcon';
import FlagIcon from '../../../assets/icons/ic/FlagIcon';
import IdCardIcon from '../../../assets/icons/ic/idCardIcon';
import PermisIcon from '../../../assets/icons/ic/PermisIcon';
import QuestionIcon from '../../../assets/icons/ic/QuestionIcon';
import StatIcon from '../../../assets/icons/ic/StatIcon';
import SettingIcon from '../../../assets/icons/SettingIcon';
import ModuleCard from '../../../components/card/ModuleCard';
import MultiSelectField from '../../../components/input/MultiSelectField';
import MainLayout from '../../../components/layout/main/MainLayout';

const HomePage = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const modules = [
        {
            name: 'Gestion des dossiers',
            icon:  <DossierIcon/>,
            link:  '/gestion-des-dossiers',
        },
        {
            name: 'Gestion des examinateurs',
            icon:  <ExaminateurIcon/>,
            link:  '/gestion-des-examinateurs',
        },
        {
            name: 'Gestion des examens',
            icon:  <ExamIcon/>,
            link:  '/gestion-des-examens',
        },
        {
            name: 'Gestion des questionnaires & formations',
            icon:  <QuestionIcon/>,
            link:  '/gestion-des-questionnaires-et-formations',
        },
        {
            name: 'Gestion des candidats',
            icon:  <CandidatIcon/>,
            link:  '/gestion-des-candidats',
        },
        {
            name: 'Gestion des auto-écoles',
            icon:  <EcoleIcon/>,
            link:  '/gestion-des-autoecoles',
        },
        {
            name: 'Gestion des idCards',
            icon:  <IdCardIcon/>,
            link:  '/gestion-des-idcards',
        },
        {
            name: 'Gestion des paiements/API',
            icon:  <CardIcon/>,
            link:  '/gestion-des-paiements',
        },
        {
            name: 'Gestion des permis de conduire',
            icon:  <PermisIcon/>,
            link:  '/gestion-des-pc',
        },
        {
            name: 'Gestion des statistiques',
            icon:  <StatIcon/>,
            link:  '/gestion-des-statistiques',
        },
        {
            name: 'Gestion des plaintes',
            icon:  <FlagIcon/>,
            link:  '/gestion-des-plaintes',
        },
        {
            name: 'Configuration',
            icon:  <ConfigIcon/>,
            link:  '/configuration',
        }
    ];
    const options = [
        {value: "p", label: "po1"},
        {value: "p2", label: "po2"},
        {value: "p3", label: "po3"},
    ]
    return (
        <MainLayout>
            <section className='sigepec-home is--large'>
                <div className='sigepec-home__title'>
                    <h1>Bonjour Jannie DOE</h1>
                </div>
                <div className='sigepec-home__container is--large has--flex_between'>
                    <div className='sigepec-home__modules'>
                        <strong>Que voulez-vous faire</strong>
                        <div className='sigepec-home-modules is--large has--flex_between has--wrap'>
                            {
                                modules.map((module) => (
                                    <div className='sigepec-home-module' key={module.name}>
                                        <ModuleCard link={module.link}>
                                            {module.icon} <span>{module.name}</span>
                                        </ModuleCard>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default HomePage;
