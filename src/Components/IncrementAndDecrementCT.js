import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import '../CSS/IncrementAndDecrementCT.css';
import { Link } from 'react-router-dom';

const IncrementAndDecrementCT = () => {

  const state = useState();

  const [cvalue, setvalue] = useState(0);

  const inc = () => {
    setvalue(cvalue + 1);
  }

  const dec = () => {
    if (cvalue > 0) {
      setvalue(cvalue - 1);
    }
    else {
      alert("You reached at 0, you cannot decrease further.");
    }
  }

  return (
    <>
      <div className="idct_div">
        <h1 className="idct_main_head">Increment And Decrement.</h1>
        <Link to="/incrementanddecrement" className="idct_para_a"><p className="idct_para">Change Theme<span>AK</span></p></Link>
        <div className="idct_inner_div">
          <h1>{cvalue}</h1>
          <div className="idct_div_btn">
            <Tooltip title="Increase" aria-label="add">
              <Button className="idct_btn_1" onClick={inc}><AddIcon /></Button>
            </Tooltip>

            <Tooltip title="Decrease">
              <Button className="idct_btn_2" onClick={dec}><RemoveIcon /></Button>
            </Tooltip>

          </div>
        </div>
      </div>
    </>
  );
}

export default IncrementAndDecrementCT;