import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AnyObject } from 'yup/lib/object';
import Switch from '@mui/material/Switch';
import DeleteConfirm from './DeleteConfirm';
import Heading from './Heading';
import { useQuery } from '@apollo/client';
import { FETCH_EMPLOYEE } from '../graphql/query/Employee';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
function createData(
    firstName: string,
    lastName: string,
    designation: string,
    city: string,
    status: any,
    action: any,
) {
    return { firstName, lastName, designation, city, status, action };
}

interface BasicTableTypes {
    openCreateEditPage: () => void,
    setOpenCreateEdit:Function,
    setEditStatus :Function,
    setRowData:Function
}
export default function BasicTable({ openCreateEditPage,setOpenCreateEdit,setEditStatus,setRowData}: BasicTableTypes) {
 const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
 const [getEmployeeData, setEmployeeData] = React.useState<any[]>([]);
 const { data, loading, error } = useQuery(FETCH_EMPLOYEE);
 React.useEffect(() => {
    if (loading === false) {
      if (error) {
        setEmployeeData([]);
      } else {
        setEmployeeData(data.findAll)
        console.log(data.findAll);
     }
    }
  }, [data, loading, error]);  
 
 const DelteConfirm = () => {
        setOpenDeleteDialog(true);
    }
    const handleClose = () => {
        setOpenDeleteDialog(false);
    }
    const handleSubmit = () => {
    setOpenCreateEdit(true) ;
    }
    const handleEdit = (row: any) => {
    console.log(row);
    setRowData(row);
    setOpenCreateEdit(true);
    setEditStatus(true);
    }
    

     

    return (

        <Container>
            <Heading openCreateEditPage={handleSubmit} />
            <DeleteConfirm open={openDeleteDialog} handleClose={handleClose} />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>FirstName </TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">Designation&nbsp;</TableCell>
                            <TableCell align="right">City&nbsp;</TableCell>
                            <TableCell align="right">Action&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getEmployeeData.map((row) => (
                            <TableRow
                                key={row.firstName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.designation}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right"><Switch {...label} defaultChecked /></TableCell>
                                <TableCell align="right"><IconButton aria-label="delete">
                                    <EditIcon onClick={() => handleEdit(row)} />
                                </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon onClick={() => DelteConfirm()} />
                                    </IconButton></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container >
    );
}


