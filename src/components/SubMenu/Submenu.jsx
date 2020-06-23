import React from 'react';
import s from './Submenu.module.css'

const Submenu = ({capture}) => {
    return (
        <button className={s.submenu}>
            <div>{capture}</div>
        </button>
    );
}

export default Submenu;