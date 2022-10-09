import React from 'react';
import styles from './LoginCard.module.css';
import Button from '@mui/material/Button';

export const LoginCard = () => {
    return (
        <>
        <div className={`${styles.firstLoginCardPart}`}>
                    <span className={`${styles.ravenAlreadyHave}`}>Ainda não tem uma conta?</span>
                    <Button variant="outlined">
                        Criar conta
                    </Button>
                </div>
                <div className={`${styles.secondLoginCardPart}`}>
                    <span className={`${styles.ravenAlreadyHave}`}>Já sou usuário</span>
                    <Button variant="outlined"
                        sx={{
                            marginBottom: '15px',
                        }}>
                        Faça Login
                    </Button>
                    <span className={`${styles.forgotPassword}`}>Esqueci minha senha</span>
                </div>
        </>
    )
}