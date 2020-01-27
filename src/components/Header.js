import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableTemporaryDrawer  from './Drawer';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerOption: {
    fontSize: '1.2rem'
  }
}));

export default function Header() {
  const classes = useStyles();
  const [isDrawerShowing, setIsDrawerShowing] = useState(false);

  return (
    <div id="header">
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <IconButton edge="start" className={`hidden-large-up ${classes.menuButton}`} color="inherit" aria-label="menu" onClick={() => setIsDrawerShowing(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Venados Test
          </Typography>
          <div className="hidden-large-down">
            <Button color="inherit" className={classes.headerOption}>Home</Button>
            <Button color="inherit" className={classes.headerOption}>Estadísticas</Button>
            <Button color="inherit" className={classes.headerOption}>Jugadores</Button>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableTemporaryDrawer setIsDrawerShowing={setIsDrawerShowing} isDrawerShowing={isDrawerShowing}/>
    </div>
  );
}