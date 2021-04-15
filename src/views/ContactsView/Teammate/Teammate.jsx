import React from 'react';
import '../../../css/common.css';
import style from './Teammate.module.css';
import { array, string, object } from 'prop-types';
import SocialNet from './SocialNets/SocialNets';

function Teammate({ fullname, position, photo, social }) {
  return (
    <li className={style.member}>
      <picture>
        <source
          srcSet={`${photo.webp.mobile.x1} 1x, ${photo.webp.mobile.x2} 2x`}
          type="image/webp"
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${photo.mobile.x1} 1x, ${photo.mobile.x1} 2x`}
          type="image/jpeg"
          media="(max-width: 767px)"
        />

        <source
          srcSet={`${photo.webp.tablet.x1} 1x, ${photo.webp.tablet.x2} 2x`}
          type="image/webp"
          media="(max-width: 1279px)"
        />
        <source
          srcSet={`${photo.tablet.x1} 1x, ${photo.tablet.x2} 2x`}
          type="image/jpeg"
          media="(max-width: 1279px)"
        />

        <source
          srcSet={`${photo.webp.pc.x1} 1x, ${photo.webp.pc.x2} 2x`}
          type="image/webp"
          media="(max-width: 1280px)"
        />
        <source
          srcSet={`${photo.pc.x1} 1x, ${photo.pc.x2} 2x`}
          type="image/jpeg"
          media="(min-width: 1280px)"
        />
        <img className={style.photo} src={photo.mobile.x1} alt={fullname} />
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
  photo: object.isRequired,
  social: array.isRequired,
};
