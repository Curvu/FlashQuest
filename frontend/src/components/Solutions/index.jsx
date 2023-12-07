import React from 'react';

import styles from './solutions.module.scss';

// data format: {title, description}

export function Solutions({ data }) {
  return (
    <div className={styles.solutions}>
      <div className={styles.separator} />
      {data.map((solution, index) => (
        <div className={styles.solution} key={solution.title}>
          <span>{index + 1}</span>
          <div className={styles.row}>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
