import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

export default function Players() {
  const [openModal, setOpenModal] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  useEffect(() => {
    getPlayersData();
  }, []);
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

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
            <img id={player.number} src={player.image} alt={`${player.name}`} onClick={onPlayerClick}/>
          </div>
          <span className="info-item">{player.position}</span>
          <span className="info-item">{player.name}</span>
        </div>
      </Grid>)
    });
  };

  const getSelectedPlayer = (playersData, currentPlayerId) => {
    return playersData.filter(player => player.number === parseInt(currentPlayerId, 10))
  };

  const onPlayerClick = (e) => {
    const currentPlayer = getSelectedPlayer(consolidatedData, e.target.id);
    setSelectedPlayer(currentPlayer[0]);
    handleOpen();
  }

  return (
    <div id="players">
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <h1>Players</h1>
      <Grid container spacing={0} direction="row" justify="center" alignItems="center">
        {generatePlayerItemList(consolidatedData)}
      </Grid>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
      >
        <div className="player-modal">
          <h1>{selectedPlayer.name}</h1>
        </div>
      </Modal>
    </div>
  )
}
