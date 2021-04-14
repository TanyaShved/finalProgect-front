import React from 'react';
import '../../../css/common.css';
import style from './Teammate.module.css';
import { array, string } from 'prop-types';
import SocialNet from './SocialNets/SocialNets';

function Teammate({
  fullname,
  position,
  photoMobileX1,
  photoTabletX1,
  photoPcX1,
  photoMobileX2,
  photoTabletX2,
  photoPcX2,
  social,
}) {
  return (
    <li className={style.member}>
      <picture>
        <source
          srcSet={`${photoMobileX1} 1x, ${photoMobileX2} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${photoTabletX1} 1x, ${photoTabletX2} 2x`}
          media="(max-width: 1279px)"
        />
        <source
          srcSet={`${photoPcX1} 1x, ${photoPcX2} 2x`}
          media="(min-width: 1280px)"
        />
        <img className={style.photo} src={photoMobileX1} alt={fullname} />
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
  position: string.isRequired,
  photoMobileX1: string.isRequired,
  photoTabletX1: string.isRequired,
  photoPcX1: string.isRequired,
  photoMobileX2: string.isRequired,
  photoTabletX2: string.isRequired,
  photoPcX2: string.isRequired,
  social: array.isRequired,
};
