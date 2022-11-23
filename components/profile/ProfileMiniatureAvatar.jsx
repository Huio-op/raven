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
      //   const result = await fetch(`/api/user/avatar?userId=${userId}`, {
      //     method: 'GET',
      //     headers: { 'Content-Type': 'application/json' },
      //   });
    } else {
      setAvatar(fullAvatar);
    }
  };

  return (
    <div className={styles.ProfileMiniatureAvatar}>
      <div className={styles.AvatarWrapper}>
        {/* <Image
          className={styles.AvatarImg}
          src={avatar}
          alt={'Avatar'}
          layout={'fill'}
        /> */}
      </div>
    </div>
  );
};

export default ProfileMiniatureAvatar;
