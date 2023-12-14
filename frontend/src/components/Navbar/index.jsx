import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import styles from './navbar.module.scss';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />

      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="#about">About us</Link>
        </li>
        <li>
          <Link to="/loja">Loja</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
