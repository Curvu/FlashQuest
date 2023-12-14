import React from 'react';

import mug1 from 'assets/mug-1.png';
import mug2 from 'assets/mug-2.png';
import mugBig from 'assets/mug-big.png';
import simpleCards1 from 'assets/simple-cards-1.png';
import simpleCards2 from 'assets/simple-cards-2.png';
import complexCards1 from 'assets/complex-cards-1.png';
import complexCards2 from 'assets/complex-cards-2.png';
import bag1 from 'assets/bag-1.png';
import bag2 from 'assets/bag-2.png';
import blanket1 from 'assets/blanket-1.png';
import blanket2 from 'assets/blanket-2.png';
import shirt1 from 'assets/tshirt-1.png';
import shirt2 from 'assets/tshirt-2.png';
import { Button } from 'components/Button';

import { ShopCard } from 'components/ShopCard';
import styles from './shop.module.scss';

const items = [
  {
    title: 'Caneca',
    subTitle: 'Sustentável',
    imagens: [mug1, mug2],
  },
  {
    title: 'Cartas (Simples)',
    subTitle: 'Papel Reciclado',
    imagens: [simpleCards1, simpleCards2],
  },
  {
    title: 'Cartas (Padrão)',
    subTitle: 'Papel Reciclado',
    imagens: [complexCards1, complexCards2],
  },
  {
    title: 'Tote Bag',
    subTitle: 'Sustentável',
    imagens: [bag1, bag2],
  },
  {
    title: 'Study Blanket',
    subTitle: 'Nuvem Autêntica',
    imagens: [blanket1, blanket2],
  },
  {
    title: 'T-Shirt',
    subTitle: '100% Algodão',
    imagens: [shirt1, shirt2],
  },
];

export function Shop() {
  return (
    <main>
      <header>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>Caneca</h2>
            <p>
              Descrição hfksfhkjdf hdkjfhsd kfjh skjdfh skjfh skjdfh skjdfh
              ksjdfh sjkdf hksjdfh ksjdf hskjdfh kjsdf hkjsdhf kjsdf kjsdf
              hksjdf ksjd fkjsd fksdh ksjdf hksjdhf ksjfh ksjdhf ksjd
            </p>
          </div>
          <Button handle={() => {}} variant="secondary">
            Comprar
          </Button>
        </div>
        <img src={mugBig} alt="mug" />
      </header>
      <div className={styles.items}>
        {items.map((item) => (
          <ShopCard key={item.title} data={item} />
        ))}
      </div>
    </main>
  );
}
