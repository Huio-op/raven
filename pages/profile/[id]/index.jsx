import styles from './index.module.css';
import PostsFeed from '../../../components/posts/PostsFeed';
import ProfileLeftPanel from '../../../components/profile/ProfileLeftPanel';
import { useRouter } from 'next/router';

const Profile = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  console.log('COMOMOMOMOMO', id);

  return (
    <>
      <div className={styles.ProfilePostsWrapper}>
        {id && <ProfileLeftPanel userId={id} />}

        <PostsFeed />
      </div>
    </>
  );
};

export default Profile;
