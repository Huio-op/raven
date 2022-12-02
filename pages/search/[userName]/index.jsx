import styles from './index.module.css';
import { useRouter } from 'next/router';
import NavBar from "../../../components/navigation/NavBar";
import {useContext, useEffect, useState} from "react";
import AppContext from "../../../AppContext";
import * as PropTypes from "prop-types";
import UserFeed from "../../../components/navigation/UserFeed";

const userSearchPage = () => {
    const router = useRouter();
    const { userName } = router.query;
    const userCtx = useContext(AppContext);
    const {id} = JSON.parse(decodeURIComponent(userCtx.loggedUser));
    const [users, setUsers] = useState();
    const [userData, setUserData] = useState();

    useEffect(() => {
        searchUsers()
    }, [])

    const searchUsers = async () => {
        const parts = location.href.split('/');
        const baseUrl = parts[0] + '//' + parts[2];
        const url = new URL(`${baseUrl}/api/searchUsers`);

        url.searchParams.append('search', userName);

        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const {profiles} = await result.json();
        setUsers(profiles);

        await fetch(`/api/user/${id}`, {
                method: 'GET'
            })
                .then(r => r.json())
                .then(data => setUserData(data));

    }

    return (
        <>
            <div className={styles.UserFeedWrapper}>
                <UserFeed users={users} currentUser={userData} fetchUsers={searchUsers} />
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={id}/>
            </div>
        </>
    );
};

export default userSearchPage;
