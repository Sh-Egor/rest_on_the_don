import React from 'react';
import s from './Contact.module.css'


export const Contact = (props) => {
  return (
    <div className={s.contact}>
        <a href={props.url} className={s.a}>
          <img src={props.img} className={s.img} alt="Logo" />
          <div className={s.capture}>
            {props.capture}
          </div>
        </a>
    </div>
  );
}

export default Contact;