import styles from './Post.module.css';
import ProfileMiniatureAvatar from '../profile/ProfileMiniatureAvatar';
import { useEffect, useState } from 'react';
import IconButton from '../buttons/IconButton';
import groupId from "../../pages/groups/[groupId]";

const Post = ({ postId, fullPost = null, groupId = null }) => {
    const [post, setPost] = useState(null);

    const [groupData, setGroupData] = useState(null);

    const fetchGroupInfo = async () => {
        if (groupId) {
            const parts = location.href.split('/');
            const baseUrl = parts[0] + '//' + parts[2];
            const url = new URL(`${baseUrl}/api/group`);

            url.searchParams.append('groupId', groupId);

            const result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const fetchedGroupData = await result.json();
            setGroupData(fetchedGroupData.group);
        }
    };

    useEffect(() => {
        fetchGroupInfo();
        fetchPost();
    }, []);

    const fetchPost = () => {
        if (!fullPost) {
            //TODO Implementar a busca por post quando for criado o cadastro
            setPost(postId);
        } else {
            setPost(fullPost);
        }
    };

  return (
    <div className={`${styles.PostWrapper} ${styles.borderBottom}`}>
      <div className={styles.postHeaderWrapper}>
          <div className={styles.PostHeader}>
              <ProfileMiniatureAvatar
                  userId={post?.userProfile.id}
                  goToProfile={true}
              />
              <span>{post?.userProfile.name}</span>
          </div>
          <div className={styles.groupInfo}>
              {groupData &&
                  <span>Grupo: {groupData?.name}</span>
              }
          </div>
      </div>
      <div className={`${styles.PostTextContent} ${styles.borderBottom}`}>
        <span>{post?.text}</span>
      </div>
      <div className={styles.PostMediaContent}>
        {/*//TODO criar componente para imagens*/}
      </div>
      <div className={`${styles.PostFooter}`}>
        <IconButton icon={'chat_bubble'} counter={'0'} />
        <IconButton icon={'thumb_up'} counter={post?.likes} />
      </div>
    </div>
  );
};

export default Post;
