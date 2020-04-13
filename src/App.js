//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import "./App.css";

function App() {

  const homeName = 'Lions';
  const awayName = 'Tigers';
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const scoreHandler = (event, teamName='Lions', addScore=5) => {
    if(teamName === homeName) {
      setHomeScore(homeScore + addScore);
    }
    else if(teamName === awayName) {
      setAwayScore(awayScore + addScore)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeName={homeName} homeScore={homeScore} awayName={awayName} awayScore={awayScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons homeScore={homeScore} setHomeScore={setHomeScore} scoreHandler={scoreHandler}/>
        <AwayButtons awayScore={awayScore} setAwayScore={setAwayScore} scoreHandler={scoreHandler}/>
      </section>
    </div>
  );
}

export default App;
