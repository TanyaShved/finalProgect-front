import React from 'react';
import '../../css/common.css';
import style from './ContactsPage.module.css';
import teamList from '../../teamList.json';
import { arrayOf, shape, string } from 'prop-types';
import Teammate from './Teammate/Teammate';

console.log('🚀 ~ file: ContactsPage.jsx ~ line 5 ~ teamList', teamList);

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
            photoMobile,
            photoTablet,
            photoPc,
            social,
          }) => (
            <Teammate
              key={_id}
              fullname={fullname}
              position={position}
              photoMobile={photoMobile}
              photoTablet={photoTablet}
              photoPc={photoPc}
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
