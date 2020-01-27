import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    color: '#000'
  },
  appBar: {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #bebebe',
    boxShadow: 'none'
  },
  labelTab: {
    fontSize: '1.2rem'
  }
}));

export default function MatchTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const filterGamesDataByLeague = (gamesData, type) => {
    return gamesData.filter(game => game.league === type)
  }; 

  console.log(filterGamesDataByLeague(props.gamesData, 'Ascenso MX'));
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          <Tab label="COPA MX" {...a11yProps(0)} className={classes.labelTab} />
          <Tab label="ASCENSO MX" {...a11yProps(1)} className={classes.labelTab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        COPA MX
      </TabPanel>
      <TabPanel value={value} index={1}>
        ASCENSO MX
      </TabPanel>
    </div>
  );
}
