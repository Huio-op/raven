import styles from './index.module.css';
import PostsFeed from '../../../components/posts/PostsFeed';
import ProfileLeftPanel from '../../../components/profile/ProfileLeftPanel';
import { useRouter } from 'next/router';
import NavBar from "../../../components/navigation/NavBar";

const Profile = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className={styles.ProfilePostsWrapper}>
        {id && <ProfileLeftPanel userId={id} />}
        <PostsFeed />
      </div>
        <div className={styles.NavBarWrapper}>
            <NavBar userId={id}/>
        </div>
    </>
  );
};

export default Profile;
