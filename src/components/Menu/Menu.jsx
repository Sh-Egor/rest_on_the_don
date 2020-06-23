import React from 'react';
import s from './Menu.module.css'
import Submenu from './SubMenu/Submenu'
import pages from './pages.json'

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {pages.map((gen) => (
                    <Submenu {...gen} />
                ))}
            </div>
        </div>
    );
}

export default Menu;