import React from 'react';
import '../../../css/common.css';
import style from './Teammate.module.css';
import { array, string } from 'prop-types';
import SocialNet from './SocialNets/SocialNets';

function Teammate({
  fullname,
  position,
  photoMobile,
  photoTablet,
  photoPc,
  social,
}) {
  return (
    <li className={style.member}>
      <picture>
        <source srcSet={photoMobile} media="(max-width: 767px)" />
        <source srcSet={photoTablet} media="(max-width: 1279px)" />
        <source srcSet={photoPc} media="(min-width: 1280px)" />
        <img className={style.photo} src={photoMobile} alt={fullname} />
      </picture>

      <h3 className={style.name}>{fullname}</h3>
      <p className={style.position}>{position}</p>
      <ul className={style.socialNets}>
        {social.map(({ title, link }) => (
          <SocialNet key={title} title={title} link={link} />
        ))}
      </ul>
    </li>
  );
}

export default Teammate;

Teammate.propTypes = {
  fullname: string.isRequired,
  position: array.isRequired,
  photoMobile: string.isRequired,
  photoTablet: string.isRequired,
  photoPc: string.isRequired,
  social: array.isRequired,
};
