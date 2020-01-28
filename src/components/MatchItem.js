import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";
import venadosLogo from '../img/venadosfc-logo.png';
import Icon from '@material-ui/core/Icon';
import DateRangeIcon from '@material-ui/icons/DateRange';

export default function MatchItem(props) {
  console.log(props.matchData);
  const {local, opponent, opponent_image, datetime, image, home_score, away_score } = props.matchData;
  return (
    <div className="match-item">
      <div className="match-dashboard">
        <div className="info-block">
          <DateRangeIcon  className="display-block"/>
          <big className="display-block date-day">{moment(datetime).format('Do')}</big>
          <small className="display-block date-day-word">{moment(datetime).format('dddd')}</small>
        </div>
        <div className={`${!local ? 'one' : 'four'} info-team ib`}>
          <img className="opponent-logo" src={opponent_image} alt={opponent}/>
          <span className="team-name display-block">{opponent}</span>
        </div>

        <big className={`${!local ? 'two' : 'three'} info-team ib score`}>{!local ? home_score : away_score}</big>
        <big className={`${local ? 'two' : 'three'} info-team ib score`}>{local ? home_score : away_score}</big>
        
        <div className={`${local ? 'one' : 'four'} info-team ib`}>
          <img className="venados-logo" src={venadosLogo} alt="Venados logo"/>
          <span className="team-name display-block">Venados F.C.</span>
        </div>
      </div>
    </div>
  )
}

MatchItem.propTypes = {
  matchData: PropTypes.object,
};
