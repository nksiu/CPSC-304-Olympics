import React, {useState} from "react";
import PageWrapperSC from "../PageWrapper";
import {Typography, TextField} from "@material-ui/core";
import ResultDialog from "../Dialog";

const FourthPage = () => {
  const [joinForm, setJoinForm] = useState({
    amount: null
  })

  const handleAmountChange = (e) => {
    setJoinForm({amount: e.target.value})
  }

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
            <Typography variant="h5">Join</Typography>
            <Typography color="textSecondary">Gets the name of the athlete that was sponsored by more than a specified amount</Typography>
            <ResultDialog path="api/olympics/sponsoredBy" type="GET" btnLabel="SponsoredBy Table"></ResultDialog>
            <ResultDialog path="api/olympics/getAthlete" type="GET" btnLabel="Athlete Table"></ResultDialog>
            <div className="divForm">
              <TextField className="first-btn" variant="outlined" label="Amount" onChange={handleAmountChange}/>
            </div>
            <ResultDialog path="api/olympics/join" body={joinForm} type="GET"></ResultDialog>
          </div>
      </div>
    </PageWrapperSC>
  )
}

export default FourthPage;