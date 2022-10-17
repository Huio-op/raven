import React from 'react';
import styles from './SignupCard.module.css'; //Same CSS
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import Button from '@mui/material/Button';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {TextField} from "@mui/material";

const LoginCard = ({changeCardValue}) => {
    return (
        <div className={`${styles.cardWrapper} ${buttonStyle.cardWrapper}`}>
            <span className={`${styles.createAccountTitle}`}>Faça seu login</span>
            <div className={`${styles.signUpFormWrapper}`}>
                <Formik initialValues={SignUpSchema.default()}
                        validationSchema={SignUpSchema}
                        onSubmit={() => {
                            console.log('yesss');
                        }}>
                    {({values, handleChange, handleBlur, errors, touched}) => {
                        return (
                            <Form>
                                <Field
                                    name='email'
                                    as={TextField}
                                    label='E-mail'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}/>
                                <Field
                                    name='password'
                                    as={TextField}
                                    label='Senha'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                                <Button variant="outlined" type='submit'>
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
    )
}

const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('').default(''),
    password: Yup.string().required('').default('')
});

export default LoginCard;