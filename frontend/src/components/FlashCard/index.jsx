import React, { useState } from 'react';

import logo from 'assets/logo.svg';

import styles from './flashCard.module.scss';

export function FlashCard({ index, setCard, data: { title, response } }) {
  const [show, setShow] = useState(false);

  return (
    <button
      className={styles.card}
      type="button"
      onClick={() => {
        setCard(index);
        setShow(!show);
      }}
    >
      <div className={styles.cardMain}>
        {!show ? (
          <>
            <img src={logo} alt="logo" />
            <h2>{title}</h2>
          </>
        ) : (
          <>
            <h2>Resposta</h2>
            <div className={styles.items}>
              {response.map((item) => (
                <span key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <p>
        {!show ? 'CLIQUE PARA VER A RESPOSTA' : 'CLIQUE PARA VER A PERGUNTA'}
      </p>
    </button>
  );
}
