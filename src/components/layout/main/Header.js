import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BellIcon from '../../../assets/icons/BellIcon';
import LogoutIcon from '../../../assets/icons/LogoutIcon';
import MenuIcon from '../../../assets/icons/MenuIcon';
import image from '../../../assets/images/pexels-ron-lach-9518019.jpg';

const Header = () => {
    const activeMenu = () => {
        if (document.querySelector('.sigepec-layout-main__navigation.is--inactive')) {
            document.querySelector('.sigepec-layout-main__navigation').classList.remove('is--inactive');
            document.querySelector('.sigepec-layout-main__main').classList.remove('is--inactive');
        }else{
            document.querySelector('.sigepec-layout-main__navigation').classList.add('is--inactive');
            document.querySelector('.sigepec-layout-main__main').classList.add('is--inactive');
        }
    }
    const activeNotif = () => {
        document.querySelector(".sigepec-layout-main-header-notif__container").classList.toggle("is--active")
    }
    return (
        <>
            <header className='sigepec-layout-main__header'>
                <div className='sigepec-layout-main-header__container is--large'>
                    <div className='sigepec-layout-main-header__logo'>
                        <button type='button' className='sigepec-layout-main-header__icon' onClick={() => {activeMenu()}}>
                            <MenuIcon/>
                        </button>
                        <Link to={'/'}>
                            SIGEPeC
                        </Link>
                    </div>
                    <div className='sigepec-layout-main-header__search'>
                        <strong>Information: </strong> <span>Information de SIGEPeC intitule</span>
                    </div>
                    <div className='sigepec-layout-main-header__profile has--flex_between'>
                        <div className='sigepec-layout-main-header__notif'>
                            <button className='sigepec-layout-main-header__icon' type='button' onClick={() => activeNotif()}>
                                <BellIcon/>
                            </button>
                            <div className='sigepec-layout-main-header-notif__container'>
                                <h2>Boite de reception</h2>
                            </div>
                        </div>
                        <div className='sigepec-layout-main-header__avatar'>
                            <Link to={'/mon-compte'}>
                                <img src={image} alt="avatar" />
                            </Link>
                        </div>
                        <button className='sigepec-layout-main-header__icon is--danger' type='button'>
                            <LogoutIcon/>
                        </button>
                    </div>
                </div>
            </header>
            <nav className='sigepec-layout-main__navigation is--inactive'>
                <ul className='sigepec-layout-main-navigation is--large'>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-dossiers'} end>
                            <span>Gestion des dossiers</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-examinateurs'} end>
                            <span>Gestion des examinateurs</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-examens'} end>
                            <span>Gestion des examens</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-questionnaires-et-formations'} end>
                            <span>Gestion des questionnaires & formations</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-candidats'} end>
                            <span>Gestion des candidats</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-autoecoles'} end>
                            <span>Gestion des auto-??coles</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-idcards'} end>
                            <span>Gestion des idCards</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-paiements'} end>
                            <span>Gestion des paiements / API</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-pc'} end>
                            <span>Gestion des permis de conduire</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-statistiques'} end>
                            <span>Gestion des statistiques</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/gestion-des-plaintes'} end>
                            <span>Gestion des plaintes</span>
                        </NavLink>
                    </li>
                    <li className='sigepec-layout-main-navigation__item is--large'>
                        <NavLink to={'/configuration'} end>
                            <span>Configuration</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;