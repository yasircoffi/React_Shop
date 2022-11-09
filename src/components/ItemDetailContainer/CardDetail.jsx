import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./itemdetail.css"
import { useContext } from 'react';
import { cartContext} from '../../context/cartContext';
import Loader from '../Loader/Loader';

function CardDetail(producto) {
const[count, setCount] = useState(0);
const {addToCart} = useContext(cartContext);

  function handleAddToCart(count){
addToCart(producto, count)
    setCount(count)
  }
if (producto.title)
  return (
    <div className='flexcontainer'>
<div className='containerdef'>
<div className="photo">
    <img className="imgdetail" src={producto.img} alt={producto.title}/>
  </div>
  <div className="description">
    <h2 className='h2detail'>{producto.title}</h2>
    <h4 className='h4detail'>{producto.detail}</h4>
    <p className='pdetail'>{producto.content}</p>
    <p className='punit'>Ultimas {producto.stock} Unidades !</p>
    <h1 className='h1detail'>$ {producto.price}</h1>
    <ItemCount onAddToCart={handleAddToCart} stock={producto.stock} initial={1} text="Agregar al carrito" />
    <p className='h4detail'><img src="https://gameria.es/themes/ecommtheme17/assets/img/camion.png" alt="Envio 24/48hs"/>   Envío en 24/48hs.     <img src="https://gameria.es/themes/ecommtheme17/assets/img/seguro.png" alt="Envio Seguro"/>  Pago 100% Seguro   </p>
    <p className='h4detail'></p>
    {count === 0 ? <p></p>: <p className='punit'>Agregado Carrito!</p>}
  </div>
  </div>
  </div>
 
  );
  return <Loader/>;
}

export default CardDetail;