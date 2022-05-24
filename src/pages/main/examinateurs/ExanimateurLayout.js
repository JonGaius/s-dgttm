import React from 'react';
import MainLayout from '../../../components/layout/main/MainLayout';

const ExanimateurLayout = ({actions=null, children}) => {
    return (
        
        <MainLayout>
            <section className='sigepec-module__layout is--large'>
                <div className='sigepec-module__head has--flex_between'>
                    <h1>Gestion des examinateurs</h1>
                    {
                        actions 
                    }
                </div>
                {children}
            </section>
        </MainLayout>
    );
};

export default ExanimateurLayout;