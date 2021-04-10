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
        <source
          srcSet="
              ./images/our-masters/mobile/john-smith-418.jpg  1x,
            "
          media="(max-width: 767px)"
        />

        <source
          srcSet="
              ./images/our-masters/tablet/john-smith-450.jpg  1x,
            "
          media="(max-width: 1179px)"
        />

        <source
          srcSet="
              ./images/our-masters/desktop/john-smith-370.jpg  1x,
            "
          media="(min-width: 1280px)"
        />

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
