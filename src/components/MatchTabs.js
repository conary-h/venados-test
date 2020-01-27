import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const getLeagueTypes = (gamesData) => {
    return [...new Set(gamesData.map(game =>  game.league))];
  }
  const getLeagueMatchesMonthList = (leagueGames) => {
    return leagueGames.map(game => ({'monthId': moment(game.datetime).format('M'), monthName: moment(game.datetime).format('MMMM') }))
  };

  const filterGamesDataByLeague = (gamesData) => {
    const type = tabValue === 0 ? 'Copa MX' : 'Ascenso MX';
    return gamesData.filter(game => game.league === type)
  };
  const generateTabItems = (leagueTypes) => {
    return leagueTypes.map((league, index) => <Tab key={index} label={league} {...a11yProps(index)} className={classes.labelTab} />)
  };

  const generateGamesUl = (leagueGames) => {
    return leagueGames.map((game, index) => <li key={index}>{game.opponent}</li>)
  };

  const leagueTypes = getLeagueTypes(props.gamesData);
  const leagueGames = filterGamesDataByLeague(props.gamesData);
  const monthList = getLeagueMatchesMonthList(leagueGames);

  //TODO MonthPanel. MatchItem

  console.log(monthList);
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
          {props.gamesData.length ? generateTabItems(leagueTypes) : ''}
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        {generateGamesUl(leagueGames)}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {generateGamesUl(leagueGames)}
      </TabPanel>
    </div>
  );
}

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

