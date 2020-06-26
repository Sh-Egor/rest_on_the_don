import React from 'react';
import s from './BookingPage.module.css'
import FromToPanel from './FromToPanel/FromToPanel';

const BookingPage = (props) => {
    return (
        <div className={s.main}>
            <FromToPanel />
            <div className={s.rooms}>
                Тут будут комнаты
            </div>
        </div>
    );
}

export default BookingPage;