import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="big_card">
                <img className="img" alt="Loading Error" src={props.imgsrc}></img>
                <div className="small_div">
                    <h3 className="card_head">{props.title}</h3>
                    <span className="card_span">{props.sname}</span>
                    <Link to={props.link}>
                        <button className="card_btn">Open Project</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Card;