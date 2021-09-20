import React, { useState } from 'react';
import '../CSS/BackgroundColorChange.css';

var count = 0;

const BackgroundColorChange = () => {

    const color = "rgb(218 89 197)";
    const [bg, setBg] = useState(color);
    const [btn_txt, set_txt] = useState("Light Purple");

    const changebg = () => {
        setBg("rgb(158 205 253)");
        set_txt("Light Blue");

        if (count == 1) {
            setBg("rgb(36 255 153)");
            set_txt("Light Green");
            count = 1;
        }
        if (count == 2) {
            setBg("rgb(218 89 197)");
            set_txt("Light Purple");
            count = -1;
        }
        count++;
        console.log(count);
    }
    return (
        <>
            <div className="inner_div" style={{ backgroundColor: bg }}>
                <button className="btn" onClick={changebg}>{btn_txt}</button>
            </div>

        </>
    );
}

export default BackgroundColorChange;