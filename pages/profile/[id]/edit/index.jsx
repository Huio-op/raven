import styles from './index.module.css';
import {useRouter} from 'next/router';
import EditProfilePage from '../../../../components/profile/EditProfilePage';
import {useEffect, useState} from "react";

const EditProfile = ({}) => {
    const router = useRouter();
    const {id} = router.query;

    const [initialValues, setInitialValues] = useState(null);

    const fetchUserInfo = async () => {
        const parts = location.href.split('/');
        const baseUrl = parts[0] + '//' + parts[2];
        const url = new URL(`${baseUrl}/api/profile`);

        url.searchParams.append('userId', id);

        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const fetchedUserData = await result.json();
        fetchedUserData.profile = fetchedUserData.profile[0];

        setInitialValues(fetchedUserData.profile);
    };

    useEffect(() => {
        (async () => {
            if (id) {
                await fetchUserInfo();
            }
        })()
    }, [id]);

    delete initialValues?.avatar;

    return (
        <>
            <div className={styles.ProfileEditWrapper}>
                {id && initialValues &&
                    <EditProfilePage userId={id} initialValues={initialValues}/>
                }
            </div>
        </>
    );
};

export default EditProfile;
