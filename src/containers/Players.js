import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';


export default function Players() {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    getPlayersData();
  }, []);

  const getPlayersData = () => {
    axios.get("/players").then(res => setPlayersData(res.data));
  };
  const consolidatedData = Object.keys(playersData).map(key => playersData[key]).flat();

  console.log(consolidatedData);

  const generatePlayerItemList = (playersData) => {
    return playersData.map((player, index) => {
      return (<Grid key={index} item xs={4} sm={3} lg={2}>
        <div className="player-info">
          <div className="img-wrapper">
            <img src={player.image} alt={`${player.name}`}/>
          </div>
          <span className="info-item">{player.position}</span>
          <span className="info-item">{player.name}</span>
        </div>
      </Grid>)
    });
  };

  return (
    <div id="players">
      <h1>Players</h1>
      <Grid container spacing={0} direction="row" justify="center" alignItems="center">
        {generatePlayerItemList(consolidatedData)}
      </Grid>
    </div>
  )
}
