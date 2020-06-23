import React from 'react';
import s from './MenuItem.module.css'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <NavLink to={props.href} activeClassName={s.active}>
            <div className={s.menuitem}>
                <div >{props.capture}</div>
            </div>
        </NavLink>
    );
}

export default MenuItem;