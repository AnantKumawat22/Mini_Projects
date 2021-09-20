import React, {useState} from 'react';
// import Clock from 'react-digital-clock';
import '../CSS/DigitalClock.css';

const DigitalClock = () => {
  var time = new Date().toLocaleTimeString();
  const [cvalue, setValue] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setValue(time);
  }
  setInterval(updateTime, 1000);
  return (
    <>
    <div className="dc_div">
      <h1 className="dc_h1">Digital Clock ⏱</h1>
      <p className="dc_time">Current Time is = {cvalue}</p>
      {/* <p><Clock/></p> */} {/*Like Digital Clock we can install CountDown also. */}
    </div>
      
    </>
  );
}

export default DigitalClock;