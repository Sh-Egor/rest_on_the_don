import React from 'react';
import s from './Main.module.css'
import MainPage from './MainPage/MainPage';
import GalleryPage from './GalleryPage/GalleryPage';
import BookingPage from './BookingPage/BookingPage';
import { Route } from 'react-router-dom'

const Main = (props) => {
  return (
    <div className={s.main}>
      <div className={s.bg}>
        <Route path="/rest_on_the_don" render={() => <MainPage />} />
        <Route path="/GalleryPage" render={() => <GalleryPage subm={props.subm} photos = {props.photos}/>} />
        <Route path="/BookingPage" render={() => <BookingPage />} />
      </div>
    </div>
  );
}

export default Main;