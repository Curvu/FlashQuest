import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CiInstagram } from 'react-icons/ci';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Picture } from 'components/Picture';
import { Card } from 'components/Card';
import { Solutions } from 'components/Solutions';
import imagem from 'assets/imagem.png';
import banner from 'assets/banner.png';
import filipe from 'assets/filipe.png';
import cruz from 'assets/cruz.jpeg';
import macedo from 'assets/macedo.jpg';
import tiago from 'assets/tiago.jpeg';
import jose from 'assets/jose.png';

import styles from './landing.module.scss';

const validation = Yup.object({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
});

const solutions = [
  {
    title: 'Insere os teus materiais',
    description:
      'Para além dos FlashCards disponíveis, cria novos adicionando os teus apontamentos e sebentas',
  },
  {
    title: 'Estuda de forma didática e Interativa',
    description:
      'acompanha o teu progresso e pontuação ao estudares com os nossos FlashCards interativos',
  },
  {
    title: 'Partilha Flashcards',
    description: 'Partilha os teus FlashCards e estuda com amigos',
  },
  {
    title: 'Partilha Os teus resultados',
    description:
      'Partilha os resultados obtidos nas tuas avaliações e inspira outros a melhorar',
  },
];

const pictures = [
  {
    name: 'Filipe Rodrigues',
    src: filipe,
    alt: 'Filipe Rodrigues photo',
  },
  {
    name: 'José Macedo',
    src: macedo,
    alt: 'José Macedo photo',
  },
  {
    name: 'Miguel Cruz',
    src: cruz,
    alt: 'Miguel Cruz photo',
  },
  {
    name: 'Tiago Anjos',
    src: tiago,
    alt: 'Tiago Anjos photo',
  },
  {
    name: 'José Rodrigues',
    src: jose,
    alt: 'José Rodrigues photo',
  },
];

export function Landing() {
  const navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(validation),
  });

  const joinUsRef = useRef(null);

  const onSubmit = () => {
    const data = methods.getValues();

    window.open(
      `mailto:flashquestai@gmail.com
      ?subject=FlashQuest - Novo Utilizador
      &body=Olá, o utilizador ${data.name} ${data.surname} (${data.email}) registou-se na plataforma FlashQuest.`,
    );

    methods.reset();
    methods.clearErrors();
  };

  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
        <div>
          <h1>Simplifica o estudo com flashcards personalizados!</h1>
          <p>
            Nunca te sentes cansado de fazer flashcards manualmente? Adere já à
            FlashQuest e economiza tempo e melhora o teu estudo!
          </p>
        </div>
        <img src={imagem} alt="imagem" />
        <Button
          type="submit"
          handle={() => {
            joinUsRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Junta-te
        </Button>
      </section>
      <section className={styles.services}>
        <h2>
          <span>Benefícios</span> da nossa Aplicação
        </h2>
        <div className={styles.cards}>
          <Card>
            <h3>Otimiza Tempo</h3>
            <p>Cria os teus flashcards apenas com um click</p>
          </Card>
          <Card>
            <h3>Especificidade</h3>
            <p>Gera flashCards a partir dos teus resumos e sebentas</p>
          </Card>
          <Card>
            <h3>Eficiência</h3>
            <p>Esquece a Construção e Foca-te na memorização</p>
          </Card>
          <Card>
            <h3>Interatividade</h3>
            <p>
              Estuda de forma mais interativa Conquistando pontos ao resolver
              FlashCards
            </p>
          </Card>
        </div>
      </section>
      <section className={styles.solutions}>
        <img src={banner} alt="imagem" />
        <div>
          <h3>Soluções simples</h3>
          <p>
            Para a geração dos flashcards é utilizada uma IA (Inteligência
            Artificial) o que permite gerar FlashCards personalizados
            instantaneamente. Para teres acesso aos teus FlashCards basta
            seguires os seguintes passos:
          </p>
          <Solutions data={solutions} />
          <div className={styles.buttons}>
            <Button
              type="submit"
              handle={() => {
                navigate('/beta');
                window.scrollTo(0, 0);
              }}
              variant="secondary"
            >
              Experimenta já
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.text}>
          <h3>A Nossa Empresa</h3>
          <p>
            Somos estudantes de Engenharia Informática da Universidade de
            Coimbra e temos como objetivo melhorar e simplificar o estudo de
            todos os alunos com a geração de flashcards personalizados através
            de IA (Inteligência Artificial).
          </p>
          <p>
            Acreditamos que a IA pode ser uma aliada poderosa no momento de
            estudar, que permite personalizar o conteúdo e o ritmo de
            aprendizagem de cada um. A nossa empresa é formada por uma equipa
            jovem, dinâmica e qualificada, que está sempre à procura de novos
            desafios e oportunidades de crescimento.
          </p>
        </div>
        <div className={styles.pictures}>
          {pictures.map((picture) => (
            <Picture name={picture.name} src={picture.src} alt={picture.alt} />
          ))}
        </div>
      </section>
      <section className={styles.joinUs} ref={joinUsRef}>
        <div className={styles.text}>
          <h2>Não percas as novidades</h2>
          <p>
            Sê o primeiro a saber quando lançamos novas funcionalidades
            emocionantes e leva o teu estudo para o próximo nível.
          </p>
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            action="mailto:flashquestai@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className={styles.inputs}>
              <Input name="name" label="Nome" />
              <Input name="surname" label="Apelido" />
            </div>
            <Input name="email" label="Email" />
            <Button type="submit" handle={onSubmit}>
              Regista-te
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
            Todos os dados coletados serão apagados em janeiro de 2024. A
            utilização destes dados destina-se exclusivamente a fins
            estatísticos e académicos no contexto da disciplina de Processos de
            Gestão e Inovação.
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
