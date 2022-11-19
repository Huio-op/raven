import {useEffect, useState} from "react";
import styles from './ProfileMiniatureAvatar.module.css'
import Image from "next/image";


import PLACEHOLDER from '../../assets/img/placeholder-profile-avatar.jpg';

const ProfileMiniatureAvatar = ({userId, fullAvatar = null}) => {

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        fetchUserAvatar();
    }, [])

    const fetchUserAvatar = () => {
        //TODO Implementar a busca por avatar quando for criado o cadastro
        if (!fullAvatar) {
            setAvatar(PLACEHOLDER);
        } else {
            setAvatar(fullAvatar);
        }

    }

    return (
        <div className={styles.ProfileMiniatureAvatar}>
            <div className={styles.AvatarWrapper}>
                <Image className={styles.AvatarImg} src={avatar} alt={"Avatar"} layout={"fill"}/>
            </div>
        </div>
    )
}

export default ProfileMiniatureAvatar;