import React, {useState} from "react";
import PageWrapperSC from "../PageWrapper";
import {Typography, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const ThirdPage = () => {
  const [nestedAggrForm, setNestedAggrForm] = useState({
    type: ""
  })

  const [divisionForm, setDivisionForm] = useState({
    amount: null
  })

  const handleTypeChange = (e) => {
    setNestedAggrForm({type: e.target.value})
  }

  const handleAmountChange = (e) => {
    setDivisionForm({amount: e.target.value})
  }

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Nested Aggregation</Typography>
          <Typography color="textSecondary">For each olympic games with more than 2 events, find the number of Type events</Typography>
          <ResultDialog path="api/olympics/getHostEvent" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Type" onChange={handleTypeChange}/>
          </div>
          <ResultDialog path="api/olympics/nestedAggregation" body={nestedAggrForm} type="GET"></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Division</Typography>
          <Typography color="textSecondary">Find the athlete (Names) that receive more than Amount from ALL of their sponsor</Typography>
          <ResultDialog path="api/olympics/sponsoredBy" type="GET"></ResultDialog>
          <div className="divForm">
            <TextField className="first-btn" variant="outlined" label="Amount" onChange={handleAmountChange}/>
          </div>
          <ResultDialog path="api/olympics/division" body={divisionForm} type="GET"></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Projection</Typography>
          <Typography color="textSecondary">Gets the athlete and the event they're participating in</Typography>
          <ResultDialog path="api/olympics/projection" type="GET"></ResultDialog>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default ThirdPage;