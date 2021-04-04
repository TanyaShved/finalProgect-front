import React from 'react';
import styles from '../../css/common.css';

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
