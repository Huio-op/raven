import React from "react";
import styles from '../../styles/login.module.css';
import Button from '@mui/material/Button';

const Page = () => {

    return (
        <div className={`${styles.loginWrapper}`}>
            <span className={`${styles.titleWrapper}`}>
                <h2 className={`${styles.ravenJoin}`}>JOIN</h2>
                <h1 className={`${styles.ravenTitle}`}>RAVEN</h1>
                <h2 className={`${styles.ravenToday}`}>TODAY</h2>
            </span>
            <div className={`${styles.loginCard}`}>
                <div className={`${styles.firstLoginCardPart}`}>
                    <span className={`${styles.ravenAlreadyHave}`}>Ainda não tem uma conta?</span>
                    <Button variant="outlined"
                        sx={{
                            width: '100%',
                            marginTop: '20px',
                            color: 'white',
                            borderColor: 'white',
                        }}>
                        Criar conta
                    </Button>
                </div>
                <div className={`${styles.secondLoginCardPart}`}>
                    <span className={`${styles.ravenAlreadyHave}`}>Já sou usuário</span>
                    <Button variant="outlined"
                        sx={{
                            width: '100%',
                            marginTop: '20px',
                            color: 'white',
                            borderColor: 'white',
                            marginBottom: '15px',
                        }}>
                        Faça Login
                    </Button>
                    <span className={`${styles.forgotPassword}`}>Esqueci minha senha</span>
                </div>
            </div>
        </div>
    )

}

export default Page;