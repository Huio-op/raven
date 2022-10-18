import React, {useState} from "react";
import styles from './login.module.css';
import WelcomeCard from '../../components/login/WelcomeCard'
import SignupCard from '../../components/login/SignupCard'
import LoginCard from "../../components/login/LoginCard";

const Page = () => {

    const [cardValue, setCardValue] = useState(0);

    const changeCardValue = (value) => {
        setCardValue(value);
    }

    const renderCard = () => {
       switch (cardValue) {
           case 0:
               return (
                   <WelcomeCard changeCardValue={changeCardValue}/>
               )
           case 1:
               return (
                   <SignupCard changeCardValue={changeCardValue}/>
               )
           case 2:
               return (
                   <LoginCard changeCardValue={changeCardValue}/>
               )
       }
    }

    return (
        <div className={`${styles.loginWrapper}`}>
            <span className={`${styles.titleWrapper}`}>
                <h2 className={`${styles.ravenJoin}`}>JOIN</h2>
                <h1 className={`${styles.ravenTitle}`}>RAVEN</h1>
                <h2 className={`${styles.ravenToday}`}>TODAY</h2>
            </span>
            <div className={`${styles.loginCard}`}>
                {renderCard()}
            </div>
        </div>
    )
}

export default Page;