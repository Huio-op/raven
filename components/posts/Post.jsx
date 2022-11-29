import styles from './Post.module.css';
import ProfileMiniatureAvatar from '../profile/ProfileMiniatureAvatar';
import { useEffect, useState } from 'react';
import IconButton from '../buttons/IconButton';

const Post = ({ postId, fullPost = null }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
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
      <div className={styles.PostHeader}>
        <ProfileMiniatureAvatar
          userId={post?.userProfile.id}
          goToProfile={true}
        />
        <span>{post?.userProfile.name}</span>
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
