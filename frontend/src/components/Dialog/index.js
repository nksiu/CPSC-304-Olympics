import React, {Fragment, useState} from "react";
import axios from "axios";
import {
  Dialog, 
  DialogTitle,
  DialogContent,
  Button,
  Divider
} from "@material-ui/core";
import ResultTable from "../Table";

const ResultDialog = ({path, body, type}) => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  const handleClickOpen = () => {
    if (type === "GET" && body) {
      axios.get(path,
      {
        params: body
      })
      .then(res => setResult(Object.values(res.data)))
    }
    else if (type === "GET") {
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
      <Button variant="contained" color="primary" onClick={handleClickOpen}>View Table</Button>

      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>
          Results
        </DialogTitle>
        <Divider />
        <DialogContent>
          <ResultTable result={result}/>
        </DialogContent>
      </Dialog>
    </Fragment>
  )

}

export default ResultDialog;