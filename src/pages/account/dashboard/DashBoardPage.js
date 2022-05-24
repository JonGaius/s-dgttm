import React from 'react';
import { Link } from 'react-router-dom';
import BtnLink from '../../../components/button/BtnLink';
import MainLayout from '../../../components/layout/main/MainLayout';

const DashBoardPage = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    return (
        <MainLayout> 
            <section className='sigepec-home is--large'>
                <div className='sigepec-home__title'>
                    <h1>Bonjour Jannie DOE</h1>
                    <span>Comment allez-vous?</span>
                </div>
                <section className='sigepec-user__container is--large has--flex_between'>
                    <div className='sigepec-user__autoBox'>
                        <div className='sigepec-user__notif'>
                            <h2>Récentes activités</h2>
                            <div className='sigepec-h-bar'></div>
                        </div>
                    </div>
                    <div className='sigepec-user__infoBox'>
                        <div className='sigepec-user__user'>
                            <div className='sigepec-user-user__container is--large has--flex'>
                                <div className='sigepec-user__avatar'>
                                    <img src="" alt="" />
                                </div>
                                <div className='sigepec-user_info'>
                                    <strong>Jannie Doe</strong>
                                    <span>jannie_doe@email.com</span>
                                    <span>+226 7X XX XX XX</span>
                                   
                                    <BtnLink link={'/mon-compte/parametres'} style={'is--primary'}>
                                        Modifier mes informations
                                    </BtnLink>
                                </div>
                            </div>
                        </div>
                        <div className='sigepec-user__activities'>
                            <h2>Le saviez-vous</h2>
                            <div className='sigepec-h-bar'></div>
                        </div>
                    </div>
                </section>
            </section>
        </MainLayout>
    );
};

export default DashBoardPage;