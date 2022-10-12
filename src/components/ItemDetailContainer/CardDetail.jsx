import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css"

function CardDetail(props) {
  return (
    <div className='flexcontainer'>
<div className='containerdef'>
<div className="photo">
    <img className="imgdetail" src={props.img} alt={props.title}/>
  </div>
  <div className="description">
    <h2 className='h2detail'>{props.title}</h2>
    <h4 className='h4detail'>{props.detail}</h4>
    <p className='pdetail'>{props.content}</p>
    <p className='punit'>Ultimas {props.stock} Unidades !</p>
    <h1 className='h1detail'>$ {props.price}</h1>
    <ItemCount stock={props.stock} initial={1} text="Agregar al carrito" />
    <p className='h4detail'><img src="https://gameria.es/themes/ecommtheme17/assets/img/camion.png"/>   Envío en 24/48h.     <img src="https://gameria.es/themes/ecommtheme17/assets/img/seguro.png"/>  Pago 100% Seguro   </p>
    <p className='h4detail'></p>
  </div>
  </div>
  </div>
 
  );
}

export default CardDetail;