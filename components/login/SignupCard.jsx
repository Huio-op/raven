import React from 'react';
import styles from './SignupCard.module.css';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import Button from '@mui/material/Button';
import {Field, Formik} from "formik";
import * as Yup from 'yup';
import {TextField} from "@mui/material";

const SignupCard = ({changeCardValue}) => {
    return (
        <div className={`${styles.cardWrapper} ${buttonStyle.cardWrapper}`}>
            <span className={`${styles.createAccountTitle}`}>Criar sua conta</span>
            <div className={`${styles.signUpFormWrapper}`}>
                <Formik initialValues={SignUpSchema.default()}
                        onSubmit={() => {
                            console.log('yesss');
                        }}>
                    <Field
                        name='name'
                        component={TextField}
                        label='nome'
                    />
                </Formik>
            </div>
            <Button variant="outlined" onClick={() => changeCardValue(0)}>
                Voltar
            </Button>
        </div>
    )
}

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required().default(''),
    email: Yup.string().email('Invalid email').required().default(''),
    password: Yup.string().required().default('').min(8)
});

export default SignupCard;