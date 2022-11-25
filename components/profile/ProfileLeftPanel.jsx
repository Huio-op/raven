import styles from './ProfileLeftPanel.module.css';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import ProfileMiniatureAvatar from './ProfileMiniatureAvatar';
import AppContext from '../../AppContext';
import Button from '@mui/material/Button';
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';

const ProfileLeftPanel = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const userCtx = useContext(AppContext);

  const fetchUserInfo = async () => {
    const parts = location.href.split('/');
    const baseUrl = parts[0] + '//' + parts[2];
    const url = new URL(`${baseUrl}/api/profile`);

    // const { email, id } = JSON.parse(decodeURIComponent(userCtx.loggedUser));

    url.searchParams.append('userId', userId);

    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const fetchedUserData = await result.json();
    fetchedUserData.profile = fetchedUserData.profile[0];

    setUserData(fetchedUserData);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div
      className={`${styles.ProfileLeftPanelWrapper} ${buttonStyle.cardWrapper}`}
    >
      <div className={styles.ProfileLeftPanel}>
        <div className={styles.userNameWrapper}>
          <ProfileMiniatureAvatar fullAvatar={userData?.profile.avatar} />
          <div className={styles.nameInfo}>
            <span className={styles.userName}>{userData?.profile.name}</span>
            <span className={styles.userEmail}>{userData?.user.email}</span>
          </div>
        </div>
        <div className={styles.userFollowInfo}>
          <span>
            Seguidores: <strong>{userData?.user.followerFrom.length}</strong>
          </span>
          <span>
            Seguindo: <strong>{userData?.user.followingWho.length}</strong>
          </span>
        </div>
        <div className={styles.aboutWrapper}>
          <h3>Sobre você:</h3>
          <span className={styles.userAbout}>
            {userData?.profile.about ||
              'Descreva aqui um pouco mais sobre você.'}
          </span>
        </div>
        <div className={styles.locationWrapper}>
          <h3>Localização:</h3>
          {userData?.city || 'Não informado'}
        </div>
        <div className={styles.locationWrapper}>
          <h3>Nascido em:</h3>
          {userData?.birthDate || 'Não informado'}
        </div>
      </div>
      <Button variant="outlined" type="submit">
        Editar Perfil
      </Button>
    </div>
  );
};

export default ProfileLeftPanel;
