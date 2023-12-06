import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from 'components/Input';
import { Button } from 'components/Button';

import styles from './test.module.scss';

const validation = Yup.object({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
});

export function Test() {
  const methods = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.testDiv}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Input name="name" label="Name" />
          <Input name="lastName" label="Last name" />
          <Input name="email" label="Email" />
          <Button type="submit" handle={methods.handleSubmit(onSubmit)}>
            1st
          </Button>
          <Button
            type="submit"
            handle={methods.handleSubmit(onSubmit)}
            variant="secondary"
          >
            2nd
          </Button>
          <Button
            type="submit"
            handle={methods.handleSubmit(onSubmit)}
            variant="tertiary"
          >
            3rd
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
