import React from "react";
import PageWrapperSC from "../PageWrapper";
import {Typography} from "@material-ui/core";
import ResultDialog from "../Dialog";

const FirstPage = () => {

  return (
    <PageWrapperSC>
      <div className="container">
        <div className="queryColumn">
          <Typography variant="h5">Selection</Typography>
          <Typography color="textSecondary">Selects the Olympics Games that were held after 2012</Typography>
          <ResultDialog></ResultDialog>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Update</Typography>
        </div>
        <div className="queryColumn">
          <Typography variant="h5">Insert</Typography>
        </div>
      </div>
    </PageWrapperSC>
  )
}

export default FirstPage;