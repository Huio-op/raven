import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import CreatePost from '../../components/posts/CreatePost';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import {useContext, useEffect, useState} from 'react';
import AppContext from '../../AppContext';
import prisma from '../../lib/prisma';
import {getCookies} from 'cookies-next';
import NavBar from "../../components/navigation/NavBar";
import UserSearch from "../../components/profile/UserSearch";

const Home = ({}) => {

    const userCtx = useContext(AppContext);
    const [posts, setPosts] = useState([]);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        if (typeof userCtx.loggedUser === "string") {
            const {id} = JSON.parse(decodeURIComponent(userCtx.loggedUser));
            fetchUserData(id);
            fetchPosts(id);
        } else {
            window.location.reload();
        }

    }, [])

    const fetchPosts = async (id) => {
        await fetch('/api/posts/fetchMany', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: id
            })
        })
            .then(r => r.json())
            .then(data => {
                setPosts(data.filter(post => post.parentPostId === null));
            });
    }

    const fetchUserData = async (id) => {
        await fetch(`/api/user/${id}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => setUserData(data));
    }

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        if (event.target.textarea.value !== '') {
            const result = await fetch('/api/posts/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    text: event.target.textarea.value,
                    published: true,
                    attachments: [],
                    userProfileId: userData.userProfile.id,
                })
            });
        }
        event.target.textarea.value = '';
        await fetchPosts(userData.id);
    }

    return (
        <>
            <div className={styles.HomePageWrapper}>
                <UserSearch />
                <CreatePost handlePostSubmit={handlePostSubmit}/>
                <PostsFeed posts={posts}/>
            </div>
            <div className={styles.ProfileMiniatureWrapper}>
                <ProfileMiniatureAvatar userId={userData?.id} goToProfile={true}/>
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={userData?.id}/>
            </div>
        </>
    );
};

export async function getServerSideProps({req, res}) {
    const userData = getCookies({req, res}).userData;

    let user = {};
    if (userData) {
        user = await prisma.user.findUnique({
            where: {
                email: userData,
            },
        });
    }
    delete user?.password;

    const procUser = JSON.stringify(user);

    return {
        props: {user: procUser},
    };
}

export default Home;
