import React, {useState} from "react";
import axios from "axios";
import PageWrapperSC from "../PageWrapper";
import {Typography, Button, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const SecondPage = () => {
  const [sportForm, setSportForm] = useState({
    sportName: ""
  })

  const handleSportNameChange = (e) => {
    setSportForm({sportName: e.target.value})
  }

  const submitDeleteQuery = () => {
    axios.delete("/api/olympics/deleteSport", {
      data: {
        sportName: sportForm.sportName
      }
    }).then(res => res.data);
  }

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Delete</Typography>
          <Typography color="textSecondary">Deletes the specified SportName</Typography>
          <ResultDialog path="api/olympics/getSport" type="GET"></ResultDialog>
          <ResultDialog path="api/olympics/getPlays" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Sport Name" onChange={handleSportNameChange}/>
            <Button variant="contained" color="primary" onClick={submitDeleteQuery}>Submit</Button>
          </div>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Group By</Typography>
          <Typography color="textSecondary">Count the number of sports that each Athlete plays</Typography>
          <ResultDialog path="api/olympics/groupBy" type="GET"></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Having</Typography>
          <Typography color="textSecondary">Find the sponsors that sponsor more than a total of $2000</Typography>
          <ResultDialog path="api/olympics/having" type="GET"></ResultDialog>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default SecondPage;