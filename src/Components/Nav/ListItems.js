import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import StorageIcon from '@material-ui/icons/Storage';
import BusinessIcon from '@material-ui/icons/Business';
import {NavLink} from 'react-router-dom'

export const mainListItems = (
  <div>
    

    <ListItem button
      component={NavLink}
      to="/dashboard"
      exact
      activeStyle={{
        backgroundColor:'#ecf0f1'
      }}
      >
        <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    
    <ListItem button
      component={NavLink}
      to="/inventory"
      exact
      activeStyle={{
        backgroundColor:'#ecf0f1'
      }}
      >
        <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItem>

    <ListItem button
      component={NavLink}
      to="/company"
      exact
      activeStyle={{
        backgroundColor:'#ecf0f1'
      }}
      >
        <ListItemIcon>
        <BusinessIcon />
      </ListItemIcon>
      <ListItemText primary="Companies" />
    </ListItem>

    <ListItem button
      component={NavLink}
      to="/department"
      exact
      activeStyle={{
        backgroundColor:'#ecf0f1'
      }}
      >
        <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Department" />
    </ListItem>

    <ListItem button
      component={NavLink}
      to="/users"
      exact
      activeStyle={{
        backgroundColor:'#ecf0f1'
      }}
      >
        <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>


  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Missing Items" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText>
        <Typography >
          Returns and 
        </Typography>
        <Typography>
          Defective Items
        </Typography>
      </ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Receivee History" />
    </ListItem> */}
  </div>
);