import React from 'react';
import s from './SubMenuItem.module.css'
import { NavLink } from 'react-router-dom'

const SubMenuItem = (props) => {
    return (
        <NavLink to={`/GalleryPage` + props.href} activeClassName={s.active}>
            <div className={s.menuitem}>
                <div >{props.capture}</div>
            </div>
        </NavLink>
    );
}

export default SubMenuItem;