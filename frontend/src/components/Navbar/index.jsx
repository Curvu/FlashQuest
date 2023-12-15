import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import styles from './navbar.module.scss';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export function Navbar({ variant = 'primary' }) {
  return (
    <nav className={`${styles.navbar} ${variants[variant]}`}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/beta">App (Beta)</Link>
        </li>
        <li>
          <Link to="/loja">Loja</Link>
        </li>
      </ul>
    </nav>
  );
}
