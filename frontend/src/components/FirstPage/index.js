import React, {useState} from "react";
import axios from "axios";
import PageWrapperSC from "../PageWrapper";
import {Typography, Button, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const FirstPage = () => {
  const [updateForm, setUpdateForm] = useState({
    country: "",
    medalsWon: null
  });

  const handleCountryChange = (e) => {
    setUpdateForm({
      ...updateForm,
      country: e.target.value
    })
  }

  const handleMedalChange = (e) => {
    setUpdateForm({
      ...updateForm,
      medalsWon: e.target.value
    })
  }

  const submitUpdateQuery = () => {
    axios.post("/api/olympics/insertSport", updateForm).then(res => res.data);
  }

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Selection</Typography>
          <Typography color="textSecondary">Selects the Olympics Games that were held after 2012</Typography>
          <ResultDialog path="api/olympics" type="GET"></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Insert</Typography>
          <Typography color="textSecondary">Insert a country and how many medals they have won</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" onChange={handleCountryChange}/>
            <TextField variant="outlined" label="Medals Won" onChange={handleMedalChange}/>
            <Button variant="contained" color="primary" onClick={submitUpdateQuery}>Submit</Button>
          </div>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Update</Typography>
          <ResultDialog></ResultDialog>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default FirstPage;