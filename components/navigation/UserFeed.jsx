import styles from './UserFeed.module.css';

import React from "react";
import ProfileMiniatureAvatar from "../profile/ProfileMiniatureAvatar";
import Button from "@mui/material/Button";
import buttonStyle from "../../styles/button/loginButtonStyles.module.css";

const UserFeed = ({users = [], currentUser = {}, fetchUsers = _.noop}) => {

    const doFollow = async (user) => {

        const result = await fetch('/api/follow', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId: currentUser.id, followId: user.id}),
        });

        await fetchUsers();

    }

    return (
        <div className={`${styles.UserFeedBody} ${buttonStyle.cardWrapper}`}>
            {users && (
                users.map((user, idx) => {

                    const isFollowing = currentUser.followingWho?.find(following => following.id === user.id)
                    return (
                        <div key={`${idx}-${user.owner.id}`} className={styles.userWrapper}>
                            <div className={styles.userInfo}>
                                <ProfileMiniatureAvatar userId={user.owner.id}
                                                        goToProfile={true}/>
                                <span>{user.name}</span>
                            </div>
                            {!isFollowing &&
                                <Button variant="outlined" onClick={() => doFollow(user)}>
                                    Seguir
                                </Button>
                            }
                            {isFollowing &&
                                <span>Seguindo</span>
                            }
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default UserFeed;
