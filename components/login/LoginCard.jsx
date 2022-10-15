import React from 'react';
import styles from './LoginCard.module.css';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

import Button from '@mui/material/Button';

const LoginCard = ({changeCardValue}) => {
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
                    }}>
                Faça Login
            </Button>
            <span className={`${styles.forgotPassword}`}>Esqueci minha senha</span>
        </div>
    )
}
export default LoginCard;