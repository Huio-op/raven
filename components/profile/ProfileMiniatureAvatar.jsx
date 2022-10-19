import {useEffect, useState} from "react";
import styles from './ProfileMiniatureAvatar.module.css'
import Image from "next/image";
import placeholder from '../../assets/img/placeholder-profile-avatar.jpg';

const ProfileMiniatureAvatar = ({userId}) => {

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        fetchUserAvatar();
    }, [])

    const fetchUserAvatar = () => {
        //TODO Implementar a busca por avatar quando for criado o cadastro
        setAvatar(placeholder)
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