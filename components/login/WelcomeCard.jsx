import React from 'react';
import styles from './WelcomeCard.module.css';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import Button from '@mui/material/Button';

const WelcomeCard = ({changeCardValue}) => {
    return (
        <div className={`${styles.cardWrapper} ${buttonStyle.cardWrapper}`}>
            <span className={`${styles.createAccountText}`}>Ainda não tem uma conta?</span>
            <Button className={`${styles.createAccountButton}`} variant="outlined" onClick={() => changeCardValue(1)}>
                Criar conta
            </Button>
            <span className={`${styles.loginText}`}>Já sou usuário</span>
            <Button variant="outlined"
                    sx={{
                        marginBottom: '15px',
                    }}
                    onClick={() => changeCardValue(2)}>
                Faça Login
            </Button>
            <a className={`${styles.forgotPassword}`} onClick={() => console.log('clicked')}>Esqueci minha senha</a>
        </div>
    )
}
export default WelcomeCard;