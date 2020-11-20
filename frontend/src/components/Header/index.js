import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import NavList from "./NavList"
import axios from "axios";

const reset = () => {
  axios.get("/api/olympics/reset").then(res => res.data);
}
const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <NavList />
        <Typography variant="h4" className="about" align="center">Olympics</Typography>
        <Button variant="contained" color="primary" onClick={reset}>Reset</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
