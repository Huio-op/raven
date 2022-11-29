import styles from './PostsFeed.module.css';
import Post from './Post';

import {useEffect, useState} from "react";

const PostsFeed = () => {

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    await fetch('/api/posts/fetchMany', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        idList: [1]
      })
    })
        .then(r => r.json())
        .then(data => {
          setPosts([...data]);
          console.log('dataaa', data)
        });
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div className={styles.PostsFeedBody}>
      {posts && (
          posts.map((post, idx) => {
            return <Post fullPost={post} key={idx} />;
          })
      )}
    </div>
  );
};

export default PostsFeed;
