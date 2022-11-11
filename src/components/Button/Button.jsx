import "./button.css"

export default function Button(props) {
return (
    <button onClick={props.onClick} 
    className="btnAdd">
        {props.children}</button>
);
}   