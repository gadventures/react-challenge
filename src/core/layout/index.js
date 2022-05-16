import React from 'react';

import styles from './styles.module.scss';
import { ReactComponent as Logo } from './assets/g-logo.svg';

const Header = () => (
  <div className={styles.header}>
    <Logo className={styles.logo} />
    <h1>Hotel Booking Challenge</h1>
  </div>
)

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}