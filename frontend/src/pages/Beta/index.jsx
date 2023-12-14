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
    title: 'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
    response: [
      {
        id: 1,
        title: 'Funções:',
        description:
          'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
      },
      {
        id: 2,
        title: 'Categoria2:',
        description:
          'fhsudfbsdiuf sdiuf suf siudf isud fsdf skdjf sdkjf skdjf skjdf ksdjf s',
      },
      {
        id: 3,
        title: 'Categoria3:',
        description:
          'dfj sf sdjf sdkjf sdkjf sdjf skjdf sjkdf ksjdf jksd fkjsd fkjsd fjksd fjks j sdjf skjf ksjd fkjsd fkjsd fjksd fkjsd fkjsd fkjsd f',
      },
    ],
  },
  {
    title: 'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
    response: [
      {
        id: 1,
        title: 'Funções:',
        description:
          'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
      },
      {
        id: 2,
        title: 'Categoria2:',
        description:
          'fhsudfbsdiuf sdiuf suf siudf isud fsdf skdjf sdkjf skdjf skjdf ksdjf s',
      },
      {
        id: 3,
        title: 'Categoria3:',
        description:
          'dfj sf sdjf sdkjf sdkjf sdjf skjdf sjkdf ksjdf jksd fkjsd fkjsd fjksd fjks j sdjf skjf ksjd fkjsd fkjsd fjksd fkjsd fkjsd fkjsd f',
      },
    ],
  },
  {
    title: 'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
    response: [
      {
        id: 1,
        title: 'Funções:',
        description:
          'kfjv sjkf ksjd fsjkd fsjkd fksjd fkjs dfsjd fksdj fskdjf skdjf',
      },
      {
        id: 2,
        title: 'Categoria2:',
        description:
          'fhsudfbsdiuf sdiuf suf siudf isud fsdf skdjf sdkjf skdjf skjdf ksdjf s',
      },
      {
        id: 3,
        title: 'Categoria3:',
        description:
          'dfj sf sdjf sdkjf sdkjf sdjf skjdf sjkdf ksjdf jksd fkjsd fkjsd fjksd fjks j sdjf skjf ksjd fkjsd fkjsd fjksd fkjsd fkjsd fkjsd f',
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
