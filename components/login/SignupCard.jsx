import React from 'react';
import styles from './SignupCard.module.css';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import Button from '@mui/material/Button';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {TextField} from "@mui/material";

const SignupCard = ({changeCardValue}) => {
    return (
        <div className={`${styles.cardWrapper} ${buttonStyle.cardWrapper}`}>
            <span className={`${styles.createAccountTitle}`}>Crie sua conta</span>
            <div className={`${styles.signUpFormWrapper}`}>
                <Formik initialValues={SignUpSchema.default()}
                        validationSchema={SignUpSchema}
                        onSubmit={() => {
                            console.log('yesss');
                            changeCardValue(2);
                        }}>
                    {({values, handleChange, handleBlur, errors, touched}) => {
                        return (
                            <Form>
                                <Field
                                    name='name'
                                    as={TextField}
                                    label='Nome'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
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
                                <Field
                                    name='passwordConfirmation'
                                    as={TextField}
                                    label='Confirmar senha'
                                    type='password'
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                                    helperText={touched.passwordConfirmation && errors.passwordConfirmation}
                                />
                                <Button variant="outlined" type='submit'>
                                    Criar conta
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
    name: Yup.string().required('É necessário fornecer um nome').default(''),
    email: Yup.string().email('Email inválido').required('É necessário fornecer um e-mail').default(''),
    password: Yup.string().required('É necessário fornecer uma senha').default('').min(8, 'A senha deve conter pelo menos 8 caracteres'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais')
});

export default SignupCard;