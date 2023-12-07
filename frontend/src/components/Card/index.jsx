import React from 'react';

import styles from './card.module.scss';

export function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}
