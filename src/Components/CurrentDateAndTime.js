import React, { useState } from 'react';
import '../CSS/CurrentDateAndTime.css';

const CurrentDateAndTime = () => {

  const name = "Anant Kumawat";
  const date = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();

  const state = useState();

  const [currtime, newTime] = useState(time);

  const cTime = () => {
      time = new Date().toLocaleTimeString();
      newTime(time);
  }

  return (
    <>
    <div className="cdt_big_div">
      <div className="cdt_div">
        <h1 className="ctd_h1">Hello, My name is {name}.</h1>
        <p className="ctd_date">Today's Date is : {date}</p>
        <p className="ctd_time">Current Time is : {currtime}</p>
        <button onClick={cTime} className="cdt_btn">Current Time</button>
      </div>
    </div>
      
    </>
  );
}

export default CurrentDateAndTime;