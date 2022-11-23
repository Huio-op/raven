import { useContext, useEffect } from 'react';
import { useState } from 'react';
import ProfileMiniatureAvatar from './ProfileMiniatureAvatar';
import style from './ProfileMiniatureAvatar.module.css';
import AppContext from "../../AppContext";

const ProfileLeftPanel = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const userCtx = useContext(AppContext);

  useEffect(() => {
    console.log('userctxxxxxxx', userCtx);
  }, []);

  return (
    <>
      <ProfileMiniatureAvatar />
    </>
  );
};

export default ProfileLeftPanel;
