import React from 'react';
import styles from './Col.module.scss';

const Col = ({children, colNum}) => {
  return (
    <div className={styles[`col-${colNum}`]}>
      {children}
    </div>
  );
}

export default Col;