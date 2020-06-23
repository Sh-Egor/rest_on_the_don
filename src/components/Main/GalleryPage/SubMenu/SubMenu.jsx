import React from 'react';
import s from './SubMenu.module.css'
import SubMenuItem from './SubMenuItem/SubMenuItem'
import SubMenuItems from './SubMenuItems.json'

const SubMenu = () => {
    return (
        <div className={s.menu}>
            <div className={s.pages}>
                {SubMenuItems.map((gen) => (
                    <SubMenuItem {...gen} />
                ))}
            </div>
        </div>
    );
}

export default SubMenu;