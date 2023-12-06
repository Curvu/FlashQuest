import React from 'react';

import styles from './button.module.scss';

const buttonStyles = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

export function Button({
  id = '',
  children,
  type, // 'button', 'submit', 'reset'
  disabled = false,
  fullWidth = false,
  handle,
  variant = 'primary',
}) {
  return (
    <button
      id={id}
      onClick={handle}
      disabled={disabled}
      type={type}
      className={`${styles.button} ${fullWidth && styles.fullWidth} ${
        disabled && styles.disabled
      } ${buttonStyles[variant]}`}
      data-content={children}
    >
      {children}
    </button>
  );
}
