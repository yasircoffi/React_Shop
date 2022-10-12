import React from "react";
import {useState} from "react";
import "./button.css"

function Button(props) {

    const [colorBtn, SetColorBtn] = useState({
        backgroundColor: "rgb(95,50,150)",
    });


function handleClick(){
    SetColorBtn({ backgroundColor: "rgb(10,50,150)"})
}

return (
    <button onClick={handleClick} skyle={colorBtn} className="btnAdd">{props.children}</button>
);
}

export default Button;