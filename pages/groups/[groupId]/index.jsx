import {useRouter} from "next/router";
import styles from "./index.module.css";
import ProfileLeftPanel from "../../../components/profile/ProfileLeftPanel";
import PostsFeed from "../../../components/posts/PostsFeed";
import NavBar from "../../../components/navigation/NavBar";
import {useContext, useEffect, useState} from "react";
import AppContext from "../../../AppContext";
import CreatePost from "../../../components/posts/CreatePost";
import GroupLeftPanel from "../../../components/groups/GroupLeftPanel";

const GroupPage = () => {

    const router = useRouter();
    const {groupId} = router.query;
    const userCtx = useContext(AppContext);
    const {id} = JSON.parse(decodeURIComponent(userCtx.loggedUser));
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetchGroupPosts()
    }, [])

    const fetchGroupPosts = async () => {
        await fetch('/api/posts/fetchMany', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: id,
                groupId: groupId
            })
        })
            .then(r => r.json())
            .then(data => {
                setPosts([...data]);
            });
    }

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        if (event.target.textarea.value !== '') {

            const userData = await (await fetch(`/api/user/${id}`, {
                method: 'GET'
            })).json();

            await fetch('/api/posts/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    text: event.target.textarea.value,
                    published: true,
                    attachments: [],
                    userProfileId: userData.userProfileId,
                    groupId: groupId
                })
            });
        }
        event.target.textarea.value = '';
        await fetchGroupPosts();
    }

    return (
        <>
            <div className={styles.GroupPostsWrapper}>
                <GroupLeftPanel groupId={groupId}/>
                <CreatePost handlePostSubmit={handlePostSubmit} />
                <PostsFeed posts={posts}/>
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={id}/>
            </div>
        </>
    );
}

export default GroupPage