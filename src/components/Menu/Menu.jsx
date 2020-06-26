import React from 'react';
import s from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem'

const Menu = (props) => {
    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {props.m.map((gen) => (
                    <MenuItem {...gen} />
                ))}
            </div>
        </div>
    );
}

export default Menu;