import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import MatchItem from './MatchItem';

export default function MonthPanel(props) {
  const filterMatchesByCurrentMonth = (leagueGames, currentMonth) => {
    return leagueGames.filter(
      game => moment(game.datetime).format("MMMM") === currentMonth
    );
  };

  const generateGamesUl = leagueGames => {
    return leagueGames.map((game, index) => (
      <MatchItem key={index} matchData={game}/>
    ));
  };

  const matchesByMonth = filterMatchesByCurrentMonth(
    props.leagueGames,
    props.monthName
  );
  return (
    <div className="month-panel">
      <span className="month-name">{props.monthName}</span>
      {generateGamesUl(matchesByMonth)}
    </div>
  );
}

MonthPanel.propTypes = {
  monthName: PropTypes.string,
  leagueGames: PropTypes.array
};
