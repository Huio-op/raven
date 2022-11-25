import styles from './index.module.css';
import PostsFeed from '../../components/posts/PostsFeed';
import ProfileMiniatureAvatar from '../../components/profile/ProfileMiniatureAvatar';
import IconButton from '../../components/buttons/IconButton';
import ProfileLeftPanel from '../../components/profile/ProfileLeftPanel';

const Profile = ({}) => {
  return (
    <>
      <div className={styles.ProfilePostsWrapper}>
        <ProfileLeftPanel />

        <PostsFeed />
      </div>
    </>
  );
};

export default Profile;
