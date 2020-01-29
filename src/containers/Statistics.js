import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Statistics() {
  const [statisticsData, setStatisticsData] = useState([]);

  useEffect(() => {
    getStatisticsData();
  }, []);
  const getStatisticsData = () => {
    axios.get("/statistics").then(res => setStatisticsData(res.data));
  };
  return (
    <div>
      {statisticsData.length <= 0 ? (<h1 className="txt-center">No Data available</h1>) : (<h1 className="txt-center">Statistics</h1>)}
    </div>
  )
}
