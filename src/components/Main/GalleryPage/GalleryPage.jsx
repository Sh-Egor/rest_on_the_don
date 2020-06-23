import React from 'react'
import s from './GalleryPage.module.css'
import SubMenu from './SubMenu/SubMenu';
import App from '../gallery/index'

const GalleryPage = (props) => {
    return (
        <div className={s.main}>
            <div className={s.smenu}>
                <SubMenu />
            </div>
            <div className={s.photos} >
                <App />
            </div>
        </div>
    );
}

export default GalleryPage;