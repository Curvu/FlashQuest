import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { FlashCard } from 'components/FlashCard';

import styles from './beta.module.scss';

const validation = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
});

const flashCards = [
  {
    title: 'Artéria Carótida Comum',
    response: [
      {
        id: 1,
        title: 'Origem:',
        description: [
          'Direita - Tronco Braquiocefálico',
          'Esquerda - Arco Aórtico',
        ],
      },
      {
        id: 2,
        title: 'Trajeto:',
        description: [
          'Porção Torácica - direção à art. externoclavicular',
          'Porção Cervical - feixe vásculo-nervoso do pescoço',
        ],
      },
      {
        id: 3,
        title: 'Terminação:',
        description: [
          'Bifurcação junto ao bordo superior da cartilagem tiroideia',
        ],
      },
    ],
  },
  {
    title: 'Artéria Tiroideia Superior',
    response: [
      {
        id: 1,
        title: 'Vasculariza:',
        description: [
          'Laringe',
          'Tiroide',
          'Músculo Esternocleidomastoideo',
          'Músculo Infra-hióideos',
        ],
      },
      {
        id: 2,
        title: 'Trajeto:',
        description: [
          'Dirige-se pelo ápex do lobo da tiroide',
          '1º atrás do M. Esternocleidomastoideo',
          '2º atrás do M. esternohioideo',
        ],
      },
    ],
  },
  {
    title: 'Músculo Pterigoideo Medial',
    response: [
      {
        id: 1,
        title: 'Inserções:',
        description: [
          '1 - Fossa  Pterigoide',
          '2 - Tuberosidade Maxilar',
          '3 - Proc. Piramidal do Palatimo',
          '4 - Face Medial da Lâmina Lateral do Processo Pterigoide',
        ],
      },
    ],
  },
];

export function Beta() {
  const [card, setCard] = useState(10);

  const methods = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => {};

  return (
    <main className={styles.main}>
      <section className={styles.cards}>
        {flashCards.map(
          (item, index) =>
            index <= card && (
              <FlashCard
                key={`${item.title}-${index}`}
                data={item}
                index={index}
                setCard={setCard}
              />
            ),
        )}
      </section>
      <section className={styles.joinUs}>
        <div className={styles.text}>
          <h2>Junte-se a Nós</h2>
          <p>
            Esta aplicação ainda se encontra em desenvolvimento. Deixa-nos o teu
            email para seres notificado quando estiver tudo pronto para puderes
            desfrutar dos nossos serviços.
          </p>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.inputs}>
              <Input name="name" label="Nome" />
              <Input name="surname" label="Apelido" />
            </div>
            <Input name="email" label="Email" />
            <Button type="submit" handle={methods.handleSubmit(onSubmit)}>
              Submeter
            </Button>
          </form>
        </FormProvider>
      </section>
    </main>
  );
}
