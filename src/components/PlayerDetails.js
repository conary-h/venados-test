import React from 'react';
import PropTypes from "prop-types";
import moment from 'moment';

export default function PlayerDetails(props) {
  const {name, image, first_surname, second_surname, position, birthday, birth_place, weight, height, last_team} = props.selectedPlayer;
  return (
    <div className="details">
      <div className="header">
        <h2 className="title white">Ficha Técnica</h2>
        <img className="player-avatar" src={image} alt=""/>
        <span className="player-name white">{`${name} ${first_surname} ${second_surname}`}</span>
        <span className="position white">{position}</span>
      </div>
      <div className="content">
        <span className="title uppercase">Fecha de nacimiento <span className="info display-block">{moment(birthday).format("D[/]M[/]Y")}</span></span>
        <span className="title uppercase">Lugar de nacimiento <span className="info display-block">{birth_place}</span></span>
        <span className="title uppercase">Peso <span className="info display-block">{`${weight}KG`}</span></span>
        <span className="title uppercase">Altura <span className="info display-block">{`${height}M`}</span></span>
        <span className="title uppercase">Equipo Anterior <span className="info display-block">{last_team}</span></span>
      </div>
    </div>
  )
}
PlayerDetails.propTypes = {
  selectedPlayer: PropTypes.object,
};

PlayerDetails.defaultProps = {
  selectedPlayer: {}
};