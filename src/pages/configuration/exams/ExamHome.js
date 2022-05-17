import React from 'react';
import SettingIcon from '../../../assets/icons/SettingIcon';
import FileDarianne from '../../../components/card/FileDarianne';
import ModuleCard from '../../../components/card/ModuleCard';
import OldFileDariane from '../../../components/card/OldFileDariane';
import MainLayout from '../../../components/layout/main/MainLayout';

const ExamHome = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    const modules = [
        {
            name: 'Configuration des délais de passage',
            // icon:  <SettingIcon/>,
            link:  'delais-de-passage',
        },
        {
            name: 'Configuration des salles',
            // icon:  <SettingIcon/>,
            link:  'salles',
        },
    ];
    return (
        <MainLayout>
            <FileDarianne actuel={'Configuration des examens'}>
                <OldFileDariane link={'/'}>
                    Accueil
                </OldFileDariane>
                <OldFileDariane link={'/configuration'}>
                    Configuration
                </OldFileDariane>
            </FileDarianne>
            <section className='sigepec-home is--large'>
                <div className='sigepec-home__title'>
                    <h1>Configuration des examens</h1>
                </div>
                <div className='sigepec-home__container is--large has--flex_between'>
                    <div className='sigepec-home__modules'>
                        <strong>Que voulez-vous faire</strong>
                        <div className='sigepec-home-modules is--large has--flex'>
                            {
                                modules.map((module) => (
                                    <div className='sigepec-home-module-2 is--large' key={module.name}>
                                        <ModuleCard link={`/configuration/examens/${module.link}`}>
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

export default ExamHome;