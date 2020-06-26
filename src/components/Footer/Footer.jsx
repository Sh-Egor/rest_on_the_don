import React from 'react';
import s from './Footer.module.css'
import Contact from './Contact/Contact';

const Footer = (props) => {
  return (
    <div className={s.footer}>
      <div className={s.foot}>
        {props.contacts.map((gen) =>(
          <Contact {...gen} />
        ))}
      </div>
    </div>
  );
}

export default Footer;