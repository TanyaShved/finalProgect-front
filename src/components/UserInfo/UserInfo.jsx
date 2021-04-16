import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import s from './UserInfo.module.css';

export default function UserInfo() {
  const name = useSelector(authSelectors.getUsername).split(' ');
  const avatar = useSelector(authSelectors.getUserAvatar);

  return (
    <div className={s.userInfoMenu}>
      <img className={s.userAvatar} src={avatar} alt={name} />

      <span className={s.userName}>{name ? name[0] : 'User'}</span>
    </div>
  );
}
