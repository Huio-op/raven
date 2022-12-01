import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import CreatePost from '../../components/posts/CreatePost';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import {useContext, useEffect, useState} from 'react';
import AppContext from '../../AppContext';
import prisma from '../../lib/prisma';
import { getCookies } from 'cookies-next';

const Home = ({ user }) => {

  const userCtx = useContext(AppContext);
  const [posts, setPosts] = useState([]);

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
                console.log('data', data);
                setPosts([...data]);
            });
    }

    const fetchUserData = async () => {
        console.log(userCtx.loggedUser);
        console.log(decodeURIComponent(userCtx.loggedUser));
        console.log(JSON.parse(decodeURIComponent(userCtx.loggedUser)));
        const { id } = await JSON.parse(decodeURIComponent(userCtx.loggedUser));
        await fetch(`/api/user/${id}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then (data => userCtx.setLoggedUser({
                id: data.id,
                email: data.email,
                userProfileId: data.userProfileId
            }));
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
                    userProfileId: userCtx.loggedUser.userProfileId,
                })
            });
        }
        event.target.textarea.value = '';
        await fetchPosts();
  }

  return (
    <>
        {console.log('shoudlrender?', posts)}
      <div className={styles.HomePageWrapper}>
        <CreatePost handlePostSubmit={handlePostSubmit}/>
        <PostsFeed posts={[...posts]}/>
      </div>
      <div className={styles.ProfileMiniatureWrapper}>
        <ProfileMiniatureAvatar userId={userCtx.loggedUser.id} goToProfile={true} />
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
