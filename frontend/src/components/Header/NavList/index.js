import React, {useState} from "react";
import {IconButton, List, ListItem, ListItemText, Popover, Divider} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const NavList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="nav-list">
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/second">
            <ListItem button>
              <ListItemText>Second Page</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="/third">
            <ListItem button>
              <ListItemText>Third Page</ListItemText>
            </ListItem>
          </Link>
          <Link to="/fourth">
            <ListItem button>
              <ListItemText>Fourth Page</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Popover>
    </div>
  )
}

export default NavList
