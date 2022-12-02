import styles from "./GroupLeftPanel.module.css";
import buttonStyle from "../../styles/button/loginButtonStyles.module.css";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

const GroupLeftPanel = ({groupId}) => {

    const [loading, setLoading] = useState(false);
    const [groupData, setGroupData] = useState(null);

    const fetchGroupInfo = async () => {
        const parts = location.href.split('/');
        const baseUrl = parts[0] + '//' + parts[2];
        const url = new URL(`${baseUrl}/api/group`);

        url.searchParams.append('groupId', groupId);

        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const fetchedGroupData = await result.json();

        setGroupData(fetchedGroupData.group);
    };

    useEffect(() => {
        fetchGroupInfo();
    }, []);

    return (
        <div
            className={`${styles.GroupLeftPanelWrapper} ${buttonStyle.cardWrapper}`}
        >
            <div className={styles.GroupLeftPanel}>
                <div className={styles.groupNameWrapper}>
                    Grupo: <h3>{groupData?.name}</h3>
                </div>
                <div className={styles.groupMemberInfo}>
                  <span>
                    Membros: <strong>{groupData?.members.length}</strong>
                  </span>

                </div>
            </div>
        </div>
    );
}

export default GroupLeftPanel;