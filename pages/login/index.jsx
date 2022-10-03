import React from "react"
import styles from '../../styles/login.module.css'

const Page = () => {

    return (
        <div className={`${styles.loginWrapper}`}>
            <span className={`${styles.titleWrapper}`}>
                <h2 className={`${styles.ravenJoin}`}>JOIN</h2>
                <h1 className={`${styles.ravenTitle}`}>RAVEN</h1>
                <h2 className={`${styles.ravenToday}`}>TODAY</h2>
            </span>
            <div className={`${styles.loginCard}`}>
                
            </div>
        </div>
    )

}

export default Page;