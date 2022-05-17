import React from 'react';
import MainLayout from '../../../components/layout/main/MainLayout';

const HelpPage = ({title}) => {
    document.querySelector('title').innerHTML = title + ' | SIGEPEC';
    return (
        <MainLayout>
            
        </MainLayout>
    );
};

export default HelpPage;