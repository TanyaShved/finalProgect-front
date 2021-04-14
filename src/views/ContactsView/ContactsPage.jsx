import React from 'react';
import '../../css/common.css';
import style from './ContactsPage.module.css';
import teamList from '../../teamList.json';
import { arrayOf, shape, string } from 'prop-types';
import Teammate from './Teammate/Teammate';

function ContactsPage() {
  return (
    <>
      <h1 className={style.title}>Our team</h1>
      <span className={style.line}></span>
      <ul className={style.team}>
        {teamList.map(
          ({
            _id,
            fullname,
            position,
            photoMobileX1,
            photoTabletX1,
            photoPcX1,
            photoMobileX2,
            photoTabletX2,
            photoPcX2,
            social,
          }) => (
            <Teammate
              key={_id}
              fullname={fullname}
              position={position}
              photoMobileX1={photoMobileX1}
              photoTabletX1={photoTabletX1}
              photoPcX1={photoPcX1}
              photoMobileX2={photoMobileX2}
              photoTabletX2={photoTabletX2}
              photoPcX2={photoPcX2}
              social={social}
            />
          ),
        )}
      </ul>
    </>
  );
}

export default ContactsPage;

ContactsPage.propTypes = {
  teamList: arrayOf(
    shape({
      id: string.isRequired,
    }),
  ),
};
