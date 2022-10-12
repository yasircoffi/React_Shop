import "./card.css";
import Button from "../Button/Button"
import { Link } from "react-router-dom";

export default function Card(props)  {
    return (
        <div className="card">
        <div className="card-img">
        <img src={props.img} alt={props.title}></img></div>
        <div className="card-detail">
        <h4 className="card-title">{props.title}</h4>
        <p>{props.detail}</p>
        <h3 className="card-price">$ {props.price}</h3>
        
        <Link to={`/product/${props.itemID}`}>
        <Button>Comprar</Button></Link>
        </div>
        </div>
    )
}

