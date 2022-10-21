import styles from './index.module.css'
import PostsFeed from "../../components/posts/PostsFeed";
import ProfileMiniatureAvatar from "../../components/profile/ProfileMiniatureAvatar";
import IconButton from "../../components/buttons/IconButton";

const Home = ({}) => {

    return (
        <>
            <div className={styles.HomePageWrapper}>
                <PostsFeed/>

            </div>
            <div className={styles.ProfileMIniatureWrapper}>
                <ProfileMiniatureAvatar/>
            </div>
            <div className={styles.CreatePostWrapper}>
                <IconButton icon={'history_edu'} />
            </div>
        </>
    )
}

export default Home;