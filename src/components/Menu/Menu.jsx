import React from 'react';
import s from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem'
import pages from './MenuItems.json'

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {pages.map((gen) => (
                    <MenuItem {...gen} />
                ))}
            </div>
        </div>
    );
}

export default Menu;