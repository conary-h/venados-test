import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import venadosLogo from '../img/venadosfc-logo.png';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    props.setIsDrawerShowing(open);
  };

  const sideList = side => (
    <div 
      id="drawer"
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className="drawer-header">
        <img className="drawer-logo" src={venadosLogo} alt="Venados Logo"/>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <Link to="/"><ListItemText className="drawer-option" primary={"Home"} /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><TimelineIcon /></ListItemIcon>
          <Link to="/statistics"><ListItemText className="drawer-option" primary={"Estadísticas"} /></Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
          <Link to="/players"><ListItemText className="drawer-option" primary={"Jugadores"} /></Link>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <SwipeableDrawer
        open={props.isDrawerShowing}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  );
}
