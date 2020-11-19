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
          <Typography variant="h5">Insert</Typography>
          <Typography color="textSecondary">Insert a country and how many medals they have won</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          {/* <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" onChange={handleCountryChange}/>
            <TextField variant="outlined" label="Medals Won" onChange={handleMedalChange}/>
            <Button variant="contained" color="primary" onClick={submitInsertQuery}>Submit</Button>
          </div> */}
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Update</Typography>
          <Typography color="textSecondary">Updates the number of medals won for a certain country</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          {/* <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" onChange={handleCountryChangeUpdate}/>
            <TextField variant="outlined" label="Medals Won" onChange={handleMedalChangeUpdate}/>
            <Button variant="contained" color="primary" onClick={submitUpdateQuery}>Submit</Button>
          </div> */}
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default SecondPage;