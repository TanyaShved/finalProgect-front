import React from 'react';
import '../../../css/common.css';
import style from './Teammate.module.css';
import { string } from 'prop-types';

function Teammate({
  fullname,
  position,
  photoMobile,
  photoTablet,
  photoPc,
  github,
  linkedin,
}) {
  return (
    <li className={style.member}>
      <picture>
        <source
          srcset="
              ./images/our-masters/mobile/john-smith-418.jpg  1x,
            "
          media="(max-width: 767px)"
        />

        <source
          srcset="
              ./images/our-masters/tablet/john-smith-450.jpg  1x,
            "
          media="(max-width: 1179px)"
        />

        <source
          srcset="
              ./images/our-masters/desktop/john-smith-370.jpg  1x,
            "
          media="(min-width: 1280px)"
        />

        <img className={style.photo} src={photoMobile} alt={fullname} />
      </picture>

      <h3 className={style.name}>{fullname}</h3>
      <p className={style.position}>{position}</p>
      <ul className={style.socialNets}>
        <li className={style.net}>
          <a
            href={github}
            aria-label="ссылка на GitHub"
            className={style.netButton}
          >
            <svg className={style.netIcon} width="20" height="20">
              <use href="./images/sprite.svg#github"></use>
            </svg>
          </a>
        </li>
        <li className={style.net}>
          <a
            href={linkedin}
            aria-label="ссылка на LinkedIn"
            className={style.netButton}
          >
            <svg className={style.netIcon} width="20" height="20">
              <use href="./images/sprite.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default Teammate;

Teammate.propTypes = {
  fullname: string.isRequired,
  position: string.isRequired,
  photoMobile: string.isRequired,
  photoTablet: string.isRequired,
  photoPc: string.isRequired,
  github: string.isRequired,
  linkedin: string.isRequired,
};
