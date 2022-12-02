import styles from './UserSearch.module.css';
import IconButton from "../buttons/IconButton";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import React from "react";
import {TextField} from "@mui/material";
import {useRouter} from "next/router";

const UserSearch = () => {

    const router = useRouter();

    const doSearch = async (event) => {
        event.preventDefault();

        if (event.target.firstChild.value !== '') {
            router.push(`/search/${event.target.firstChild.value}`)
        }
        event.target.firstChild.value = '';
    }

    return (
        <div className={styles.UserSearch}>
                        <form className={styles.searchForm} onSubmit={doSearch}>
                            <input className={`${styles.createPostInput}`} name="name" type={"text"} maxLength={5000}
                                      placeholder={'Pesquisar usuários'}/>
                            <Button type="submit" className={styles.searchButton}>
                                <span className="material-icons">
                                    search
                                </span>
                            </Button>

                        </form>
        </div>
    )
}

const SearchSchema = Yup.object().shape({
    name: Yup.string().default(''),
});


export default UserSearch;