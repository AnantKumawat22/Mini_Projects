import React from "react";
import CardArrays from "./Components/CardArrays";
import Card from "./Components/Card";
import './CSS/Home.css';

function Home() {
    return (
        <>
        <div className="navbar">Mini Projects</div>
            <div className="div_1">
                {CardArrays.map((val) => {
                    return (
                        <Card
                            key={val.id}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            sname={val.sname}
                            link={val.link}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;