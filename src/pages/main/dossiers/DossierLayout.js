import React from 'react';
import MainLayout from '../../../components/layout/main/MainLayout';

const DossierLayout = ({ actions, children}) => {
    return (
        <MainLayout>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des dossiers</h1>
                    {
                        actions 
                    }
                </div>
                {children}
            </section>
        </MainLayout>
    );
};

export default DossierLayout;