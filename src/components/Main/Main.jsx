import React from 'react';
import s from './Main.module.css'
import MainPage from './MainPage/MainPage';
import GalleryPage from './GalleryPage/GalleryPage';
import BookingPage from './BookingPage/BookingPage';
import {Route } from 'react-router-dom'

const Main = () => {
  return (
      <div className={s.main}>
        <div className={s.bg}>
          <Route path = "/rest_on_the_don" component={MainPage} />
          <Route path = "/GalleryPage" component={GalleryPage} />
          <Route path = "/BookingPage" component={BookingPage} />
        </div>
      </div>
  );
}

export default Main;