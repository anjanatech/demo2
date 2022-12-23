import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
interface AlertTypes {
    open: boolean,
    handleClose:()=>void
    }

 function AlertDialog({open,handleClose}:AlertTypes ) {
  
 return (
    <div>
      
      <Dialog
      open= {open}
      onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Confirmation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete ..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>CONFIRM</Button>
          <Button onClick={handleClose} >
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog