import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import NavList from "./NavList"

const Header = () => {

  return (
    <AppBar position="static">
      <Toolbar>
        <NavList />
        <Typography variant="h4" className="about" align="center">Olympics</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
