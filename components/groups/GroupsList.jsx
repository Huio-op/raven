import styles from './GroupsList.module.css'
import Button from "@mui/material/Button";
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';
import React, {useEffect, useState} from "react";
import {Dialog, DialogTitle, Icon, IconButton, TextField} from "@mui/material";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useRouter} from "next/router";
import DeleteIcon from '@mui/icons-material/Delete';

const GroupsList = ({userId}) => {

    const [groups, setGroups] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter();

    const fetchUserGroups = async () => {
        const parts = location.href.split('/');
        const baseUrl = parts[0] + '//' + parts[2];
        const url = new URL(`${baseUrl}/api/userGroups`);

        url.searchParams.append('userId', userId);

        const result = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const {groups} = await result.json();
        setGroups(groups);
    }

    useEffect(() => {
        fetchUserGroups();
    }, [])

    const createGroup = async (values) => {

        try {
            await fetch('/api/userGroups', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userId, ...values}),
            });

            setDialogOpen(false);
            await fetchUserGroups();
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div className={`${styles.GroupListBody} ${buttonStyle.cardWrapper}`}>
            <div className={styles.CreateGroupWrapper}>
                <Button variant="outlined" onClick={() => setDialogOpen(true)} className={styles.submitButton}>
                    Criar grupo
                </Button>
                {groups.length === 0 &&
                    <span className={styles.emptyLabel}>Você ainda não tem nenhum grupo!</span>
                }
                {groups.length !== 0 &&
                    groups.map(group => {
                        return (
                            <GroupItem group={group} fetchUserGroups={fetchUserGroups} />
                            )
                    })
                }
            </div>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Criar grupo</DialogTitle>
                <Formik initialValues={CreateGroupSchema.default()} onSubmit={createGroup}>
                    {({values, handleChange, handleBlur, errors, touched}) => {
                        return (
                            <Form className={`${styles.groupForm} ${buttonStyle.cardWrapper}`}>
                                <Field
                                    name="name"
                                    as={TextField}
                                    label="Nome"
                                    value={values.name || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                                <Button type="submit">
                                    Criar grupo
                                </Button>
                            </Form>
                        )
                    }}
                </Formik>
            </Dialog>
        </div>
    )
}

const CreateGroupSchema = Yup.object().shape({
    name: Yup.string().required('É necessário fornecer um nome').default(''),
});

const GroupItem = ({group, fetchUserGroups}) => {

    const deleteGroup = async () => {
        try {
            await fetch('/api/userGroups', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({groupId: group.id}),
            });
            await fetchUserGroups();
        } catch (e) {
            console.error(e);
        }
    }

    return (
      <div className={styles.GroupItem}>
          <div className={styles.innerGroupItem}>
              <span>{group.name}</span>
              <span>Membros: {group.members.length}</span>
              <div>
                  <IconButton><Icon>east</Icon></IconButton>
                  <IconButton><Icon>edit</Icon></IconButton>
                  <IconButton onClick={deleteGroup}><DeleteIcon /></IconButton>
              </div>
          </div>
      </div>
    );
}

export default GroupsList;