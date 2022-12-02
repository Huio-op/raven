import styles from './PostsFeed.module.css';
import Post from './Post';

import {useEffect, useState} from "react";

const PostsFeed = ({posts = []}) => {

  return (
    <div className={styles.PostsFeedBody}>
      {posts && (
          posts.map((post, idx) => {
            return <Post fullPost={post} key={`${idx}-${post.id}`} />;
          })
      )}
    </div>
  );
};

export default PostsFeed;
