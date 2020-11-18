import React from "react";
import PageWrapperSC from "../PageWrapper";
import {Typography, Button, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const FirstPage = () => {
  
  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Selection</Typography>
          <Typography color="textSecondary">Selects the Olympics Games that were held after 2012</Typography>
          <ResultDialog path="api/olympics" type="GET"></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Update</Typography>
          <Typography color="textSecondary">Insert a country and how many medals they have won</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" />
            <TextField variant="outlined" label="Medals Won" />
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Insert</Typography>
          <ResultDialog></ResultDialog>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default FirstPage;