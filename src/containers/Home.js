import React, { useState, useEffect } from "react";
import MatchTabs from "../components/MatchTabs";
import axios from "axios";

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
      <MatchTabs gamesData={gamesData} />
    </div>
  );
}
