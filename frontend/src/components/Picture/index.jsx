import React from 'react';

import styles from './picture.module.scss';

export function Picture({ name, src, alt }) {
  return (
    <div className={styles.picture}>
      <div className={styles.circle} />
      <img src={src} alt={alt} />
      <span>{name}</span>
    </div>
  );
}
