import React, {Fragment, useState} from "react";
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  Button
} from "@material-ui/core";

const ResultDialog = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>Submit</Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md'>
        <DialogTitle>
          Results
        </DialogTitle>
        <DialogContent>
          <p>hi</p>
        </DialogContent>
      </Dialog>
    </Fragment>
  )

}

export default ResultDialog;