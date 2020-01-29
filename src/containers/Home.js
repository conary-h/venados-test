import React, { useState, useEffect } from "react";
import MatchTabs from "../components/MatchTabs";
import axios from "axios";
import venadosLogo from '../img/venadosfc-logo.png';

export default function Home() {
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    getGamesData();
  }, []);

  const getGamesData = () => {
    axios.get("/games").then(res => setGamesData(res.data));
  };

  return (
    <div id="home">
      <img className="home-logo" src={venadosLogo} alt="Logo"/>
      <MatchTabs gamesData={gamesData} />
    </div>
  );
}
