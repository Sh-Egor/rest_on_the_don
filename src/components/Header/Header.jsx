import React  from 'react';
import s from './Header.module.css'


const Header = () => {
    var ico = "";
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