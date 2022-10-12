import React from "react";
import "./flexcontainer.css"

function FlexContainer (props){
    return (
        <div className="flex">
            {props.children}
        </div>
    );
}

export default FlexContainer;
