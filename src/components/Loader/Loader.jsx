import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

const Loader = ({ width = '150', height = '150' }) => {
 
  return (
    <div className={s.spinner}>
      <Spinner type="Rings" color="#ff6b09" width={width} height={height} />
    </div>
  );
}

export default Loader
