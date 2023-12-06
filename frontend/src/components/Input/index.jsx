import React from 'react';
import { useFormContext } from 'react-hook-form';

import warning from 'assets/warning.svg';

import styles from './input.module.scss';

export function Input({
  name = '',
  type = 'text',
  placeholder = '',
  label = '',
  disabled = false,
}) {
  const {
    formState: { errors },
    register,
  } = useFormContext();
  return (
    <label className={styles.input}>
      <p>{label}</p>
      <div className={errors[name] ? styles.error : ''}>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(name)}
        />
        {errors[name] && (
          <>
            <img src={warning} alt="warning" />
            <span className={styles.errorTxt}>
              {/* {errors[name]?.message?.toString()} */}
            </span>
          </>
        )}
      </div>
    </label>
  );
}
