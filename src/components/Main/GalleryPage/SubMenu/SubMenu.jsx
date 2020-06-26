import React from 'react';
import s from './SubMenu.module.css'
import SubMenuItem from './SubMenuItem/SubMenuItem'

const SubMenu = (props) => {
    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {props.subm.map((gen) => (
                    <SubMenuItem {...gen} />
                ))}
            </div>
        </div>
    );
}

export default SubMenu;