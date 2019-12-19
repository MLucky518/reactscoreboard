//TODO: STEP 1 - Import the useState hook.
import React, { useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import {useState} from "react";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore,setHomeScore] = useState(0);
const [awayScore,setAwayScore] = useState(0);
const [seconds,setSeconds] = useState(50);
const [isActive,setIsActive] = useState(false);
const[homeTeam,setHomeName] = useState("COWBOYS");
const[awayTeam,setAwayTeam] = useState("EAGLES");



function toggle() {
  setIsActive(!isActive);
}


const handler = (team,amount) =>{
if(team === homeTeam){
  setHomeScore(homeScore + amount);
}if(team === awayTeam){
  setAwayScore(awayScore + amount);
}
};


useEffect(() => {
  let interval;
  if (isActive) {
    interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if(seconds === 0){
      setSeconds(50);
      setIsActive(false);
      
    }
  } else if (!isActive && seconds !== 0) {
    clearInterval(interval);
   
   
  }
  return () => clearInterval(interval);
}, [isActive, seconds]);


const restartTimer = (e)=>{
  setSeconds(50);
}

const handleReset = (e)=>{
  setAwayScore(0);
  setHomeScore(0);
}



// const handleHomeTouchDowns = (e) =>{
//   setHomeScore(homeScore + 7);
// }

// const handleHomeFieldGoals = (e) =>{
//   setHomeScore(homeScore + 3);
// }

// const handleAwayTouchDowns = (e) =>{
//   setAwayScore(awayScore + 7);
// }

// const handleAwayFieldGoals = (e) =>{
//   setAwayScore(awayScore + 3);
  
// }





  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name"> {homeTeam}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{seconds}</div>
          <div className="away">
            <h2 className="away__name">{awayTeam}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button onClick = {()=>handler(homeTeam,6)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {()=>handler(homeTeam,4)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick = {()=>handler(homeTeam,1)} className="homeButtons__touchdown">Home Extra point</button>
        </div>
        <div className = "myButtonDiv">
        <button className = "timerButton"onClick = {toggle}> {isActive ? 'Pause' : 'START-TIMER'}</button> {/*ternary operator for value assignment*/}
        <button onClick = {restartTimer} className="homeButtons__touchdown">reset time</button>
        <button onClick = {handleReset} className="awayButtons__touchdown">RESET SCORE</button>
        </div>

        <div className="awayButtons">
        
          <button onClick = {()=>handler(awayTeam,6)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=>handler(awayTeam,4)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {()=>handler(awayTeam,1)} className="awayButtons__touchdown">Away Extra point</button>
        </div>
      </section>
    </div>
  );
}

export default App;
