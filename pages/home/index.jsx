import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import { useContext, useEffect } from 'react';
import AppContext from '../../AppContext';
import prisma from '../../lib/prisma';
import { getCookies } from 'cookies-next';

const Home = ({ user }) => {
  const userCtx = useContext(AppContext);

  const { email, id } = JSON.parse(decodeURIComponent(userCtx.loggedUser));

  return (
    <>
      <div className={styles.HomePageWrapper}>
        <PostsFeed />
      </div>
      <div className={styles.ProfileMiniatureWrapper}>
        <ProfileMiniatureAvatar userId={id} goToProfile={true} />
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
