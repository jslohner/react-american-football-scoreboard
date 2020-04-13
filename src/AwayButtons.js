import React from "react";
import "./App.css";

const AwayButtons = ({ awayScore, setAwayScore }) => {

  return (
    <div className="awayButtons">
      <button onClick={() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
      <button onClick={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
    </div>
  );
}

export default AwayButtons;
