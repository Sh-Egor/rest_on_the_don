import React from 'react';
import s from './Submenu.module.css'
import { NavLink } from 'react-router-dom'

const Submenu = (props) => {
    return (
        <NavLink to={props.href} activeClassName={s.active}>
            <div className={s.submenu}>
                <div >{props.capture}</div>
            </div>
        </NavLink>
    );
}

export default Submenu;