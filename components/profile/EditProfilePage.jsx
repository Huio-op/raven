import styles from './EditProfilePage.module.css';
import {Field, Form, Formik} from "formik";
import {MenuItem, Select, TextField} from "@mui/material";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import React from "react";
import buttonStyle from '../../styles/button/loginButtonStyles.module.css';
import {useRouter} from "next/router";

const EditProfilePage = ({userId, initialValues}) => {

    const router = useRouter();

    const saveProfile = async (values) => {
        try {
            await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userId, ...values}),
            });

            router.push(`/profile/${userId}`)

        } catch (e) {
            console.error(e);
        }


    }

    return (
        <div className={`${styles.EditPageBody} ${buttonStyle.cardWrapper}`}>
            <h3>Editar perfil</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={EditProfileSchema}
                onSubmit={saveProfile}>
                {({values, handleChange, handleBlur, errors, touched}) => {
                    return (
                        <Form>
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
                            <Field
                                name="about"
                                as={TextField}
                                label="Sobre"
                                value={values.about || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.about && Boolean(errors.about)}
                                helperText={touched.about && errors.about}
                            />
                            <Field
                                name="city"
                                as={TextField}
                                label="Localização"
                                value={values.city || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.city && Boolean(errors.city)}
                                helperText={touched.city && errors.city}
                            />
                            <Field
                                name="birthDate"
                                as={TextField}
                                type="date"
                                value={values.birthDate || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.birthDate && Boolean(errors.birthDate)}
                                helperText={touched.birthDate && errors.birthDate}
                                InputLabelProps={{shrink: true}}
                            />
                            <Field
                                name="gender"
                                as={Select}
                                label="aaaaaaaaaaaaa"
                                value={values.gender || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.gender && Boolean(errors.gender)}
                                helperText={touched.gender && errors.gender}
                            >
                                <MenuItem value="men">Masculino</MenuItem>
                                <MenuItem value="woman">Feminino</MenuItem>
                                <MenuItem value="other">Outro</MenuItem>
                            </Field>
                            <Button variant="outlined" type="submit">
                                Salvar alterações
                            </Button>
                        </Form>
                    )
                }}

            </Formik>
        </div>
    );
};

const EditProfileSchema = Yup.object().shape({
    name: Yup.string().required('É necessário fornecer um nome').default(''),
    about: Yup.string().default(''),
    city: Yup.string().default(''),
    birthDate: Yup.string().default(''),
    gender: Yup.string().default('')
});

export default EditProfilePage;
