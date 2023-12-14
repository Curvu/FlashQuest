import React, { useState } from 'react';

import { Card } from 'components/Card';
import { Pagination } from 'components/Pagination';

import styles from './shopCard.module.scss';

export function ShopCard({ data: { title, subTitle, price, imagens } }) {
  const [page, setPage] = useState(1);

  return (
    <Card className={styles.card}>
      <button
        className={styles.wrapper}
        type="button"
        onClick={() => setPage((page % imagens.length) + 1)}
      >
        <img src={imagens[page - 1]} alt="mug" />
      </button>
      <Pagination numPages={imagens.length} setPage={setPage} page={page} />
      <div className={styles.bottom}>
        <h2>
          <span className={styles.title}>{title}</span>
          <span className={styles.price}>{price}</span>
        </h2>
        <p>{subTitle}</p>
      </div>
    </Card>
  );
}
