import React from 'react';
import s from './Header.module.css'
import ico from '../../content/head/ico.png'

const Header = () => {
    return (
        <header className={s.header}>
            <div className = {s.main}>
                <img src= {ico} alt = "logo" />
                <div>Отдых на дону</div>
            </div>
        </header>
    );
}

export default Header;