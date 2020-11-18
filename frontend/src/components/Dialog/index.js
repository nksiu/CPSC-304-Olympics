import React, {Fragment, useState} from "react";
import axios from "axios";
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  Button
} from "@material-ui/core";
import ResultTable from "../Table";

const ResultDialog = ({path, body, type}) => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleClickOpen = () => {
    if (type === "GET") {
      axios.get(path).then(
        res => setResult(Object.values(res.data))
      )
    }
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>Submit</Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>
          Results
        </DialogTitle>
        <DialogContent>
          <ResultTable result={result}/>
        </DialogContent>
      </Dialog>
    </Fragment>
  )

}

export default ResultDialog;