import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CiInstagram } from 'react-icons/ci';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Picture } from 'components/Picture';
import { Card } from 'components/Card';
import pic from 'assets/pic.png';
import imagem from 'assets/imagem.png';

import { Solutions } from 'components/Solutions';
import styles from './landing.module.scss';

const validation = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
});

const solutions = [
  {
    title: 'Solution 1',
    description: 'fgkldgjldkf gjl kdfgjlkdfgj lkdfjglkdldk fgjdlkfjggfdfgd',
  },
  {
    title: 'Solution 2',
    description: 'fgkldgjldkf gjl kdfgjlkdfgj lkdfjglkdldk fgjdlkfjggfdfgd',
  },
  {
    title: 'Solution 3',
    description: 'fgkldgjldkf gjl kdfgjlkdfgj lkdfjglkdldk fgjdlkfjggfdfgd',
  },
  {
    title: 'Solution 4',
    description: 'fgkldgjldkf gjl kdfgjlkdfgj lkdfjglkdldk fgjdlkfjggfdfgd',
  },
];

const pictures = [
  {
    name: 'Filipe Rodrigues',
    src: pic,
    alt: 'pic1',
  },
  {
    name: 'José Macedo',
    src: pic,
    alt: 'pic2',
  },
  {
    name: 'Miguel Cruz',
    src: pic,
    alt: 'pic3',
  },
  {
    name: 'Diogo Mota',
    src: pic,
    alt: 'pic4',
  },
  {
    name: 'Marta Antunes',
    src: pic,
    alt: 'pic5',
  },
];

export function Landing() {
  const methods = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <div>
          <h1>We Create Solutions for Your Buiseness</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien lectus. Aliquam consectetur vitae ante ut lobortis. Praesent
            et libero velit.
          </p>
        </div>
        <img src={imagem} alt="imagem" />
        <Button type="submit" handle={() => {}}>
          Junte-se
        </Button>
      </section>
      <section className={styles.services}>
        <h2>
          We Provide The <span>Best Services</span>
        </h2>
        <div className={styles.cards}>
          <Card>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien lectus. Aliquam consectetur vitae ante ut lobortis.
            </p>
          </Card>
          <Card>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien lectus. Aliquam consectetur vitae ante ut lobortis.
            </p>
          </Card>
          <Card>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien lectus. Aliquam consectetur vitae ante ut lobortis.
            </p>
          </Card>
          <Card>
            <h3>Card</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              sapien lectus. Aliquam consectetur vitae ante ut lobortis.
            </p>
          </Card>
        </div>
      </section>
      <section className={styles.solutions}>
        {/* //TODO: <img src={imagem} alt="imagem" /> */}
        <div>
          <h3>Simple Solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien lectus. Aliquam consectetur vitae ante ut lobortis. Praesent
            et libero velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec vel sapien lectus. Aliquam consectetur vitae ante ut
            lobortis. Praesent et libero velit.
          </p>
          <Solutions data={solutions} />
          <div className={styles.buttons}>
            <Button type="submit" handle={() => {}} variant="secondary">
              Button
            </Button>
            <Button type="submit" handle={() => {}} variant="tertiary">
              Button
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.text}>
          <h3>A Nossa Empresa</h3>
          <p>
            dfgdfgdfgkfgkadfgfkiugf kiurfgy eiurgkeiurt ekrutgae rkutgerutg
            ekjrutgkejrutg ekjrutg kejurtg kejurtgkejrut gejurgt eujrtg jrgt
            ejhrgt ejhrtg ejhrtg jehrtg ehrtg ejhrtg jehrtg ehrtg jehrtg ejhtg
            ejtgejrt jehr tjehrtgejhrtg
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          </p>
        </div>
        <div className={styles.pictures}>
          {pictures.map((picture) => (
            <Picture name={picture.name} src={picture.src} alt={picture.alt} />
          ))}
        </div>
      </section>
      <section className={styles.joinUs}>
        <div className={styles.text}>
          <h2>Junte-se a Nós</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien lectus. Aliquam consectetur vitae ante ut lobortis. Praesent
            et libero velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec vel sapien lectus. Aliquam consectetur vitae ante ut
            lobortis. Praesent et libero velit.
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
      <footer>
        <div className={styles.socials}>
          <h2>Redes Sociais</h2>
          <a
            href="https://www.instagram.com/flash_quest/"
            target="_blank"
            rel="noreferrer"
          >
            <CiInstagram />
            <span>FLASH_QUEST</span>
          </a>
        </div>
        <div className={styles.dataNotice}>
          <h3>Política de Tratamento de Dados</h3>
          <p>
            Os conteúdos constantes deste website foram realizados por alunos no
            âmbito de uma disciplina – Processos de Gestão e Inovação - do 3º
            ano da licenciatura em Engenharia Informática da Faculdade de
            Ciências e Tecnologia.
          </p>
        </div>
        <div className={styles.legalNotice}>
          <h3>Aviso Legal</h3>
          <p>
            Os conteúdos constantes deste website foram realizados por alunos no
            âmbito de uma disciplina – Processos de Gestão e Inovação - do 3º
            ano da licenciatura em Engenharia Informática da Faculdade de
            Ciências e Tecnologia da Universidade de Coimbra (FCTUC), pelo que a
            FCTUC não se responsabiliza pelo seu conteúdo.
          </p>
        </div>
      </footer>
    </main>
  );
}
