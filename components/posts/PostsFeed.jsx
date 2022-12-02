import styles from './PostsFeed.module.css';
import Post from './Post';

import {useEffect, useState} from "react";

const PostsFeed = ({posts = []}) => {

  return (
    <div className={styles.PostsFeedBody}>
      {posts && (
          posts.map((post, idx) => {
            return <Post groupId={post.groupId} fullPost={post} key={`${idx}-${post.id}`} />;
          })
      )}
    </div>
  );
};

export default PostsFeed;
