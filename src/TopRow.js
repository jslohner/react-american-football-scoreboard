import React from "react";
import "./App.css";

const TopRow = ({ homeName, homeScore, awayName, awayScore }) => {

  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{homeName}</h2>
        <div className="home__score">{homeScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">{awayName}</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  );
}

export default TopRow;
