import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({children}) => {
   
    return (
        <>
            <Header/>
            <main className='sigepec-layout-main__main is--inactive'>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default MainLayout;