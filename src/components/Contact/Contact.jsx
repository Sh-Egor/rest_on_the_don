import React from 'react';
import s from './Contact.module.css'


export const Contact = ({ img, capture, url }) => {
  return (
    <div className={s.contact}>
        <a href={url} className={s.a}>
          <img src={img} alt="" className={s.img}></img>
          <div className={s.capture}>
            {capture}
          </div>
        </a>
    </div>
  );
}

export default Contact;