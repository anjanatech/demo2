import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Grid, Container, Typography, TextField, Button } from '@mui/material'
import {  Form } from 'formik';

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
            <Grid item xs={12}>
                <Container maxWidth="md">
                    <Form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Typography>
                                    Employee details
                                </Typography>
                            </Grid>
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
                                <TextField id="lastName" label="LastName" variant="outlined" onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur} />
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <div>{formik.errors.lastName}</div>
                                ) : null}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="designation" label="Designation" variant="outlined" onChange={formik.handleChange} value={formik.values.designation} onBlur={formik.handleBlur} />
                                {formik.touched.designation && formik.errors.designation ? (
                                    <div>{formik.errors.designation}</div>
                                ) : null}
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="city" label="City" variant="outlined" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur} />
                                {formik.touched.city && formik.errors.city ? (
                                    <div>{formik.errors.city}</div>
                                ) : null}
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>

                </Container>
            </Grid>
        </Grid>



    );
};

export default SignupFormone