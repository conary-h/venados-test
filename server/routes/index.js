const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/games', (req,res) => {
  axios("https://venados.dacodes.mx/api/games",{
    method: 'GET',
    mode: "no-cors",
    cache: "no-cache", 
    headers: {"Accept": "application/json"}
      })
    .then(response =>{
      res.json(response.data.data.games);
    })
    .catch(response =>{
        console.log("Exception : ",response);
    })
});

router.get('/players', (req,res) => {
  axios("https://venados.dacodes.mx/api/players",{
    method: 'GET',
    mode: "no-cors",
    cache: "no-cache", 
    headers: {"Accept": "application/json"}
      })
    .then(response =>{
      res.json(response.data.data.team);
    })
    .catch(response =>{
        console.log("Exception : ",response);
    })
});

router.get('/statistics', (req,res) => {
  axios("https://venados.dacodes.mx/api/statistics",{
    method: 'GET',
    mode: "no-cors",
    cache: "no-cache", 
    headers: {"Accept": "application/json"}
      })
    .then(response =>{
      res.json(response.data.data.statistics);
    })
    .catch(response =>{
        console.log("Exception : ",response);
    })
});

module.exports = router;