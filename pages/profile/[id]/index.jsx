import styles from './index.module.css';
import PostsFeed from '../../../components/posts/PostsFeed';
import ProfileLeftPanel from '../../../components/profile/ProfileLeftPanel';
import { useRouter } from 'next/router';
import NavBar from "../../../components/navigation/NavBar";
import {useEffect, useState} from "react";

const Profile = ({}) => {
  const router = useRouter();
  const { id } = router.query;

    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchUserPosts()
    }, [])

    const fetchUserPosts = async () => {
        if (!!id) {
            await fetch('/api/posts/fetchMany', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: id,
                    profile: true,
                })
            })
                .then(r => r.json())
                .then(data => {
                    setPosts(data);
                });
        }
    }

    return (
    <>
      <div className={styles.ProfilePostsWrapper}>
        {id && <ProfileLeftPanel userId={id} />}
        <PostsFeed posts={posts}/>
      </div>
        <div className={styles.NavBarWrapper}>
            <NavBar userId={id}/>
        </div>
    </>
  );
};

export default Profile;
