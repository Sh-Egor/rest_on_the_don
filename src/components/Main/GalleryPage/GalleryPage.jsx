import React from 'react'
import s from './GalleryPage.module.css'
import SubMenu from './SubMenu/SubMenu';
import Photos from './Photos/Photos'
import { Route } from 'react-router-dom';

const GalleryPage = (props) => {
    return (
        <div className={s.main}>
            <div className={s.smenu}>
                <SubMenu subm = {props.subm} />
            </div>
            <div className={s.photos} >
                <Route path = "/GalleryPage/f1r1" render = {() => <div>Ну дарова тварына </div>} />
                <Photos photos = {props.photos}/>
            </div>
        </div>
    );
}

export default GalleryPage;