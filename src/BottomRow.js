import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  
  const[quarter,setQuarter] = useState(0);
  const [down,setDown] = useState(0);
  const [toGo,setToGo] = useState(0);
  const [ballOn,setBallOn] = useState(0);

  const handleRandomGame = (e)=>{
  setQuarter(Math.ceil(Math.random() * 4));
  setDown( Math.ceil(Math.random()* 4));
  setBallOn(Math.ceil(Math.random() * 50));
  setToGo(Math.ceil(Math.random()*25));

  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        
      </div>
     
      <div>
      <button onClick = {handleRandomGame}  className="homeButtons__touchdown" className = "random">randomize game conditions</button>
      </div>
    </div>
    
    
  );
};

export default BottomRow;
