import {useState} from "react";
import "./button.css"

export default function Button(props) {

    const [colorBtn, SetColorBtn] = useState({
        backgroundColor: "#222",
    });


function handleClick(){
    SetColorBtn({ backgroundColor: "rgb(10,50,150)"})
}

return (
    <button onClick={props.onClick} 
    style={colorBtn} 
    className="btnAdd">
        {props.children}</button>
);
}   