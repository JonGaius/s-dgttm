import React from 'react';
import SettingIcon from '../../assets/icons/SettingIcon';
import FileDarianne from '../../components/card/FileDarianne';
import ModuleCard from '../../components/card/ModuleCard';
import OldFileDariane from '../../components/card/OldFileDariane';
import MainLayout from '../../components/layout/main/MainLayout';

const ConfirgurationHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const modules = [
        {
            name: 'Configuration des DRT',
            // icon:  <SettingIcon/>,
            link:  'drt',
        },
        {
            name: 'Configuration des Rôles',
            // icon:  <SettingIcon/>,
            link:  'roles',
        },
        {
            name: 'Configuration des Utilisateurs',
            // icon:  <SettingIcon/>,
            link:  'utilisateurs',
        },
        {
            name: 'Configuration des Decisions',
            // icon:  <SettingIcon/>,
            link:  'decisions',
        },
        {
            name: 'Configuration des Motifs',
            // icon:  <SettingIcon/>,
            link:  'motifs',
        },
        {
            name: 'Configuration des Restrictions',
            // icon:  <SettingIcon/>,
            link:  'restrictions',
        },
        {
            name: 'Configuration des Provinces',
            // icon:  <SettingIcon/>,
            link:  'provinces',
        },
        {
            name: 'Configuration des Professions',
            // icon:  <SettingIcon/>,
            link:  'professions',
        },
        {
            name: 'Configuration des Examens',
            // icon:  <SettingIcon/>,
            link:  'examens',
        },
        {
            name: 'Configuration des Dossiers',
            // icon:  <SettingIcon/>,
            link:  'dossiers',
        },
        {
            name: 'Configuration des Plaintes',
            // icon:  <SettingIcon/>,
            link:  '',
        },
        {
            name: 'Configuration des Pays',
            // icon:  <SettingIcon/>,
            link:  'pays',
        },
        {
            name: 'Configuration des Mots de passe',
            // icon:  <SettingIcon/>,
            link:  '',
        },
        {
            name: 'Configuration des Services',
            // icon:  <SettingIcon/>,
            link:  '',
        },
        // {
        //     name: 'Configuration des Delais',
        //     icon:  <SettingIcon/>,
        //     link:  'delais',
        // },
    ];
    return (
        
        <MainLayout>
            <FileDarianne actuel={'Configurations'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-home is--large'>
                <div className='sigepec-home__title'>
                    <h1>Configuration</h1>
                </div>
                <div className='sigepec-home__container is--large has--flex_between'>
                    <div className='sigepec-home__modules'>
                        <strong>Que voulez-vous faire</strong>
                        <div className='sigepec-home-modules is--large has--flex_center has--wrap'>
                            {
                                modules.map((module) => (
                                    <div className='sigepec-home-module' key={module.name}>
                                        <ModuleCard link={`/configuration/${module.link}`}>
                                            <span>{module.name}</span>
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

export default ConfirgurationHome;