import style from './index.module.css'
import {useRouter} from 'next/router'
import {useContext, useEffect, useState} from "react";
import Post from "../../../components/posts/Post";
import CreatePost from "../../../components/posts/CreatePost";
import AppContext from "../../../AppContext";
import styles from "../../home/index.module.css";
import NavBar from "../../../components/navigation/NavBar";

const PostPage = () => {
    const router = useRouter();
    const {id} = router.query;

    const userCtx = useContext(AppContext);

    const [post, setPost] = useState({});
    const [childPosts, setChildPosts] = useState([{}]);
    const [userData, setUserData] = useState({});

    const fetchPost = async () => {
        await fetch(`/api/posts/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(r => r.json())
            .then(data => setPost(data));
    }

    const fetchUserData = async (userId) => {
        await fetch(`/api/user/${userId}`, {
            method: 'GET'
        })
            .then(r => r.json())
            .then(data => setUserData(data));
    }

    const fetchChildPost = async () => {
        await fetch(`/api/posts/fetchchild/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then(r => r.json())
            .then(data => setChildPosts(data));
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
                    parentPostId: id,
                })
            });
        }
        event.target.textarea.value = '';
        await fetchChildPost();
    }

    useEffect(() => {

        const {id} = JSON.parse(decodeURIComponent(userCtx.loggedUser));

        fetchPost();
        fetchUserData(id);
        fetchChildPost();
    }, [])

    return (
        <>
            <div className={`${style.postPageWrapper}`}>
                <div className={`${style.postsWrapper}`}>
                    <div className={`${style.postContainer}`}>
                        <Post groupId={post.groupId} fullPost={post} key={`${post.id}`}/>
                    </div>
                    <CreatePost handlePostSubmit={handlePostSubmit} placeholder={'Adicione algo a discussão!'}/>
                    <div className={`${style.postContainer}`}>
                        {childPosts.map((post, idx) => {
                            return <Post groupId={post.groupId} fullPost={post} key={`${post.id}`} minimal={true}}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={userData?.id}/>
            </div>
        </>
    )
}


export default PostPage;