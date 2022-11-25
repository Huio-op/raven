import { useEffect, useState } from 'react';
import styles from './ProfileMiniatureAvatar.module.css';
import Image from 'next/image';

import PLACEHOLDER from '../../assets/img/default_avatar.png';

const ProfileMiniatureAvatar = ({ userId, fullAvatar = null }) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    fetchUserAvatar(userId);
  }, []);

  const fetchUserAvatar = async (userId) => {
    //TODO Implementar a busca por avatar quando for criado o cadastro
    if (!fullAvatar) {
      setAvatar(PLACEHOLDER.src);
    } else {
      setAvatar(fullAvatar);
    }
  };

  return (
    <div className={styles.ProfileMiniatureAvatar}>
      <div className={styles.AvatarWrapper}>
        <img className={styles.AvatarImg} src={avatar} />
      </div>
    </div>
  );
};

export default ProfileMiniatureAvatar;
