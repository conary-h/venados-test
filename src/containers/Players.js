import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import PlayerDetails from '../components/PlayerDetails';
import CircularIndeterminate from '../components/Spiner';

export default function Players() {
  const [openModal, setOpenModal] = useState(false);
  const [isErrorOnFetch, setIsErrorOnFetch] = useState(false);
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
    axios.get("/players").then(res => {
      console.log(res)
      setPlayersData(res.data)
    }).catch(error => {
      setIsErrorOnFetch(true);
    });
  };
  const consolidatedData = Object.keys(playersData).map(key => {
    return key !== 'coaches' ? playersData[key] : {};
  }).flat();

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
  consolidatedData.pop();

  return (
    <div id="players">
      <h1>Players</h1>
      {playersData.length <= 0 && <CircularIndeterminate className="txt-center"/> }
      {!isErrorOnFetch ? 
        (<Grid container spacing={0} direction="row" justify="center" alignItems="center">
          {generatePlayerItemList(consolidatedData)}
        </Grid>)
        : <strong className="fetch-error">There was an error getting the data. <br /> Please refresh the page. </strong>
      }
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openModal}
        onClose={handleClose}
      >
        <div className="player-modal">
          <PlayerDetails selectedPlayer={selectedPlayer}/>
        </div>
      </Modal>
    </div>
  )
}
