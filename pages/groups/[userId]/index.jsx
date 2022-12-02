import styles from "./index.module.css";
import GroupsList from "../../../components/groups/GroupsList";
import NavBar from "../../../components/navigation/NavBar";
import {useRouter} from "next/router";

const Groups = ({}) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <div className={styles.GroupListWrapper}>
                <GroupsList userId={id}/>
            </div>
            <div className={styles.NavBarWrapper}>
                <NavBar userId={id}/>
            </div>
        </>
    )
}

export default Groups;