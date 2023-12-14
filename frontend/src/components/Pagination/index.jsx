import React from 'react';

import styles from './pagination.module.scss';

export function Pagination({ numPages, setPage, page }) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: numPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? styles.active : ''}
        >
          {' '}
        </button>
      ))}
    </div>
  );
}
