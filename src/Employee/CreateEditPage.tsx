import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Container, width } from '@mui/system';
import { Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Save';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { CREATE_EMPLOYEE, UPDATE_EMPLOYEE } from '../graphql/mutation/Employee';
import { useEffect } from 'react';
interface cancelCreateEditType {
    cancelCreateEdit: () => void
    editStatus:Boolean,
    rowData:any
}
const employeeValidationSchema = Yup.object({
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
});
function CreateEditPage({ cancelCreateEdit ,editStatus,rowData}: cancelCreateEditType) {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            designation: '',
            city: ''
        },
        validationSchema: employeeValidationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log(rowData);
            
            if(editStatus){
                createUpdateEmployee({variables: {
                     updatedEmp: {
                        city: values.city,
                        designation: values.designation,
                        firstName: values.firstName,
                        lastName: values.lastName
                      },
                    updateEmpId :parseInt(rowData.id)
                
            }})
            }
            
        },
    });
    useEffect(() => {
        if(editStatus){
         formik.setValues(rowData)
         console.log(rowData);
     
        }
     }, [])
    
    const [createUpdateEmployee] = useMutation(editStatus ? UPDATE_EMPLOYEE :CREATE_EMPLOYEE, {
        onCompleted: () => {
            alert('Form Submitted')
        },
        onError: (error) => {
            alert(error.message)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        <Container sx={{ border: 1, mt: 10 }}>
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Create Employee" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                label="FirstName" variant="outlined"
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                label="lastName" variant="outlined"
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}


                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                label="Designation" variant="outlined"
                                id="designation"
                                name="designation"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.designation}
                                error={formik.touched.designation && Boolean(formik.errors.designation)}
                                helperText={formik.touched.designation && formik.errors.designation}


                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField sx={{ width: '100%' }}
                                label="city" variant="outlined"
                                id="city"
                                name="city"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city} />
</Grid>

                    </Grid>
                </ListItem>
                <ListItem button sx={{ ml: 60 }}>
                    <LoadingButton
                        loading={false}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        type="submit">
                        Save
                    </LoadingButton>&nbsp;

                    <LoadingButton
                        loading={false}
                        loadingPosition="start"
                        startIcon={<CancelIcon />}
                        variant="contained"
                        onClick={() => cancelCreateEdit()} >
                        Cancel
                    </LoadingButton>&nbsp;
                </ListItem>
                <Divider light />

            </List>
        </Container>
        </form>
    );
}
CreateEditPage.propTypes = {
    openCreate: PropTypes.bool
};
export default CreateEditPage

function createEmployee(arg0: { variables: { employee: { firstName: string; lastName: string; designation: string; city: string; }; }; }) {
    throw new Error('Function not implemented.');
}
