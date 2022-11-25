import styles from './PostsFeed.module.css';
import Post from './Post';

import USER_AVATAR from '../../assets/img/placeholder-profile-avatar.jpg';

const PostsFeed = () => {
  return (
    <div className={styles.PostsFeedBody}>
      {POSTS.map((post, idx) => {
        return <Post fullPost={post} key={idx} />;
      })}
    </div>
  );
};

const POSTS = [
  {
    text: 'Primeiro Post!!!',
    likes: 5,
    user: {
      avatar: USER_AVATAR,
      name: 'Felips',
      id: 1,
    },
    comments: ['', '', ''],
  },
  {
    text: 'Vamo pra cima Grêmio!',
    likes: 916,
    user: {
      avatar: USER_AVATAR,
      name: 'Felips',
      id: 1,
    },
    comments: ['', '', ''],
  },
  {
    text: 'Um texto bem grande pra quebrar a linha e poder demonstrar que da pra colocar mais de uma linha no post',
    likes: 12,
    user: {
      avatar: USER_AVATAR,
      name: 'Felips',
      id: 1,
    },
    comments: ['', '', '', '', ''],
  },
  {
    text: 'Tenetur voluptatem dignissimos et magnam ea sed qui odit. Fugit sunt voluptas sapiente beatae cumque ipsam. Consequatur quaerat quisquam eos minima molestias. Dolor aspernatur sequi culpa exercitationem ratione. Animi ut molestiae placeat blanditiis laboriosam et. Iusto omnis rerum excepturi enim omnis qui.',
    likes: 576,
    user: {
      avatar: USER_AVATAR,
      name: 'Felips',
      id: 1,
    },
    comments: ['', '', '', '', '', '', '', '', ''],
  },
  {
    text: 'Tenetur voluptatem dignissimos et magnam ea sed qui odit. Fugit sunt voluptas sapiente beatae cumque ipsam. Consequatur quaerat quisquam eos minima molestias. Dolor aspernatur sequi culpa exercitationem ratione. Animi ut molestiae placeat blanditiis laboriosam et. Iusto omnis rerum excepturi enim omnis qui.',
    likes: 15,
    user: {
      avatar: USER_AVATAR,
      name: 'Felips',
      id: 1,
    },
    comments: ['', '', '', '', ''],
  },
];

export default PostsFeed;
