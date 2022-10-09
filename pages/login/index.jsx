import React from "react";
import styles from './login.module.css';
import LoginCard from '../../components/login/LoginCard'

const Page = () => {

    return (
        <div className={`${styles.loginWrapper}`}>
            <span className={`${styles.titleWrapper}`}>
                <h2 className={`${styles.ravenJoin}`}>JOIN</h2>
                <h1 className={`${styles.ravenTitle}`}>RAVEN</h1>
                <h2 className={`${styles.ravenToday}`}>TODAY</h2>
            </span>
            <div className={`${styles.loginCard}`}>
                <LoginCard />
            </div>
        </div>
    )

}

export default Page;