import React, {useState} from "react";
import axios from "axios";
import PageWrapperSC from "../PageWrapper";
import {Typography, Button, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const FirstPage = () => {
  const [insertForm, setInsertForm] = useState({
    country: "",
    medalsWon: null
  });

  const [updateForm, setUpdateForm] = useState({
    country: "",
    medalsWon: null
  })

  const [yearForm, setYearForm] = useState({
    year: null
  })

  const handleYearChange = (e) => {
    setYearForm({year: e.target.value})
  }

  const handleCountryChange = (e) => {
    setInsertForm({
      ...insertForm,
      country: e.target.value
    })
  }

  const handleMedalChange = (e) => {
    setInsertForm({
      ...insertForm,
      medalsWon: e.target.value
    })
  }

  const handleCountryChangeUpdate = (e) => {
    setUpdateForm({
      ...updateForm,
      country: e.target.value
    })
  }

  const handleMedalChangeUpdate = (e) => {
    setUpdateForm({
      ...updateForm,
      medalsWon: e.target.value
    })
  }

  const submitInsertQuery = () => {
    axios.post("/api/olympics/insertSport", insertForm).then(res => res.data);
  }

  const submitUpdateQuery = () => {
    axios.put("/api/olympics/updateCountry", updateForm).then(res => res.data);
  }

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Selection</Typography>
          <Typography color="textSecondary">Selects the Olympics Games that were held after a specified year</Typography>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Year" onChange={handleYearChange}/>
          </div>
          <ResultDialog path="api/olympics/" type="GET" body={yearForm}></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Insert</Typography>
          <Typography color="textSecondary">Insert a country and how many medals they have won</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" onChange={handleCountryChange}/>
            <TextField variant="outlined" label="Medals Won" onChange={handleMedalChange}/>
            <Button variant="contained" color="primary" onClick={submitInsertQuery}>Submit</Button>
          </div>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Update</Typography>
          <Typography color="textSecondary">Updates the number of medals won for a certain country</Typography>
          <ResultDialog path="api/olympics/getCountry" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Country" onChange={handleCountryChangeUpdate}/>
            <TextField variant="outlined" label="Medals Won" onChange={handleMedalChangeUpdate}/>
            <Button variant="contained" color="primary" onClick={submitUpdateQuery}>Submit</Button>
          </div>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default FirstPage;