import styles from './SignupCard.module.css';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import React from 'react';

import { setCookie } from 'cookies-next';
import MD5 from "crypto-js/md5";

import Button from '@mui/material/Button';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from '@mui/material';
import { useRouter } from 'next/router';

const LoginCard = ({ changeCardValue }) => {
  const router = useRouter();

  const doUserLogin = async (values) => {
      values.password =  MD5(values.password).toString();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });



    if (res.ok) {
        console.log(res);
        //bad idea tho i'm low on time ideally should have an hash being generate to validate user -> hash
        setCookie('userData', values.email, {maxAge: 60 * 6 * 24 * 70});
      router.push('/home');
    }
  };

  return (
    <div className={`${styles.cardWrapper} ${buttonStyle.cardWrapper}`}>
      <span className={`${styles.createAccountTitle}`}>Faça seu login</span>
      <div className={`${styles.signUpFormWrapper}`}>
        <Formik
          initialValues={SignUpSchema.default()}
          validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            await doUserLogin(values);
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => {
            return (
              <Form>
                <Field
                  name="email"
                  as={TextField}
                  label="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  name="password"
                  id='password'
                  as={TextField}
                  label="Senha"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button variant="outlined" type="submit">
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Button variant="outlined" onClick={() => changeCardValue(0)}>
        Voltar
      </Button>
    </div>
  );
};

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('').default(''),
  password: Yup.string().required('').default(''),
});

export default LoginCard;
