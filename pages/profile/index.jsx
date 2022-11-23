import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import ProfileLeftPanel from '../../components/profile/ProfileLeftPanel';

const Profile = ({}) => {
  return (
    <>
      <div>
        <ProfileLeftPanel />
      </div>
      <div className={styles.ProfilePostsWrapper}>
        <PostsFeed />
      </div>
    </>
  );
};

export default Profile;
