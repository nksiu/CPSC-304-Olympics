import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import NavList from "./NavList";
import axios from "axios";
import HeaderWrapperSC from "./header-wrapper"

const reset = () => {
  axios.get("/api/olympics/reset").then(res => res.data);
}
const Header = () => {

  return (
    <AppBar position="static">
        <HeaderWrapperSC>
          <NavList className="nav-list"/>
          <Typography variant="h4" className="about">Olympics</Typography>
          <Button className="reset-btn" variant="contained" onClick={reset}>Reset</Button>
        </HeaderWrapperSC>
    </AppBar>
  )
}

export default Header;
