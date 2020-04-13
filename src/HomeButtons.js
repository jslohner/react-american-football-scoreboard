import React from "react";
import "./App.css";

const HomeButtons = ({ homeScore, setHomeScore }) => {

  return (
    <div className="homeButtons">
      <button onClick={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
      <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
    </div>
  );
}

export default HomeButtons;
