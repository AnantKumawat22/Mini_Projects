import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/IncrementAndDecrement.css';

const IncrementAndDecrement = () => {

  const state = useState();

  const [cvalue, setvalue] = useState(0);

  const inc = () => {
    setvalue(cvalue + 1);
  }

  const dec = () => {
    setvalue(cvalue - 1);
  }

  return (
    <>
      <h1 className="iad_main_head">Increment And Decrement.</h1>
      <Link to="/incrementanddecrementct" className="iad_para_a"><p className="iad_para">Change Theme<span>AK</span></p></Link>
      <div className="iad_inner_div">
        <h1>{cvalue}</h1>
        <div className="iad_div_btn">
          <button className="iad_btn_1" onClick={inc}>Increment</button>
          <button className="iad_btn_2" onClick={dec}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default IncrementAndDecrement;