import styles from "./index.module.css"
import NavBar from "../../components/navigation/NavBar";
import {useContext, useEffect, useState} from "react";
import AppContext from "../../AppContext";
import GroupsList from "../../components/groups/GroupsList";

const GroupsPage = () => {
    const userCtx = useContext(AppContext);
    const { id } = JSON.parse(decodeURIComponent(userCtx.loggedUser));

    return (
        <>
            <div className={styles.GroupListWrapper}>
                <GroupsList userId={id}/>
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={id}/>
            </div>
        </>
    )
}

export default GroupsPage;