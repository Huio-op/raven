import styles from './index.module.css'
import PostsFeed from "../../components/posts/PostsFeed";
import ProfileMiniatureAvatar from "../../components/profile/ProfileMiniatureAvatar";

const Home = ({}) => {

    return (
        <>
            <div className={styles.HomePageWrapper}>
                <PostsFeed/>

            </div>
            <div className={styles.ProfileMIniatureWrapper}>
                <ProfileMiniatureAvatar/>
            </div>
        </>
    )
}

export default Home;