import React from 'react';

import styles from './card.module.scss';

export function Card({ children, className = '' }) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
