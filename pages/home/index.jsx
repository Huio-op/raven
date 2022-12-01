import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import CreatePost from '../../components/posts/CreatePost';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import {useContext, useEffect, useState} from 'react';
import AppContext from '../../AppContext';
import prisma from '../../lib/prisma';
import { getCookies } from 'cookies-next';
import NavBar from "../../components/navigation/NavBar";

const Home = ({ user }) => {

  const userCtx = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});
    console.log('jeisonono', userCtx.loggedUser)
    const { id } = JSON.parse(decodeURIComponent(userCtx.loggedUser));

    useEffect(() => {
        fetchUserData();
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        await fetch('/api/posts/fetchMany', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                idList: [1]
            })
        })
            .then(r => r.json())
            .then(data => {
                setPosts([...data]);
            });
    }

    const fetchUserData = async () => {
        await fetch(`/api/user/${id}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then (data => setUserData(data));
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
                    userProfileId: userData.userProfileId,
                })
            });
        }
        event.target.textarea.value = '';
        await fetchPosts();
  }

  return (
    <>
      <div className={styles.HomePageWrapper}>
        <CreatePost handlePostSubmit={handlePostSubmit}/>
        <PostsFeed posts={[...posts]}/>
      </div>
      <div className={styles.ProfileMiniatureWrapper}>
        <ProfileMiniatureAvatar userId={id} goToProfile={true} />
      </div>
        <div className={styles.NavBarWrapper}>
            <NavBar userId={id}/>
        </div>
      <div className={styles.CreatePostWrapper}>
        <IconButton icon={'history_edu'} />
      </div>
    </>
  );
};

export async function getServerSideProps({ req, res }) {
  const userData = getCookies({ req, res }).userData;

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
    props: { user: procUser },
  };
}

export default Home;
