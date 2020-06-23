import React from 'react';
import s from './Footer.module.css'
import {Contact} from './Contact/Contact';
import cont from './contacts.json';

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.foot}>
        {cont.map((gen) =>(
          <Contact {...gen} />
        ))}
      </div>
    </div>
  );
}

export default Footer;