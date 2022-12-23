import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography, Grid } from '@mui/material';

const SignupFormone = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            designation: '',
            city: '',

        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            designation: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            city: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Grid container>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h3" component="h2">
                    FORM
                </Typography>;
                <Grid item xs={6}>
                    <label htmlFor="firstName">First Name</label>&nbsp;&nbsp;
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}
                </Grid>

                <Grid item xs={6}>
                    <label htmlFor="lastName">Last Name</label>&nbsp;&nbsp;&nbsp;
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}
                </Grid>

                <Grid><label htmlFor="designation">Designation</label>&nbsp;
                    <input
                        id="designation"
                        name="designation"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.designation}
                    />
                    {formik.touched.designation && formik.errors.designation ? (
                        <div>{formik.errors.designation}</div>
                    ) : null}
                    <br /></Grid>
                <Grid><label htmlFor="city">City</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                    ) : null}</Grid>



                <Button variant="contained" type="submit">Submit</Button>

            </form>
        </Grid>
    );
};

export default SignupFormone