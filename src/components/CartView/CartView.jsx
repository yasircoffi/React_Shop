import React, { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import { Link, useNavigate } from "react-router-dom";
import Button from '../Button/Button';
import "./cartView.css";
import { createBuyOrder } from "../../services/firebase";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

function CartView() {
    const { cart, removeItem, getTotalPrice } = useContext(cartContext);
    const navigate = useNavigate();
    function handleCheckout(params) {
    const buyerData = {
        name: "Santiago",
        email: "salkinsantiago@gmail.com",
        phone: "11222334"
    }

    const orderData = {
        buyerData : buyerData,
        cart : cart,
        total : getTotalPrice(),
        date : new Date()
    }

    createBuyOrder(orderData).then(respuesta => {
        Swal.fire({
            title: 'Compra Exitosa',
            text: 'Gracias por tu compra, en breve te llegara un mail con la confirmacion y datos de tu compra',
            icon: 'cool',
            confirmButtonText: 'Ok'
          }).then(result => {
            navigate(`/checkout/${respuesta}`);
          });
    });
}

    if (cart.length === 0) { return <div className='container-responsive'><div className='ml-3 d-inline-block align-middle'><br></br><h3>El Carrito esta Vacio!</h3><Button><Link className="linkstyle" to="/">Ir de Compras</Link></Button><br></br><hr></hr></div></div>
    }
    return <div class="pb-5">{cart.map(producto => (
        <div class="container">
            <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="p-2 px-3 text-uppercase">Producto</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Precio</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Cantidad</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Precio Total</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="py-2 text-uppercase">Eliminar</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="border-0">
                                        <div class="p-1">
                                            <img src={producto.img} alt="Imagen del Producto" width="100" class="img-fluid rounded shadow-sm" />
                                            <div class="ml-3 d-inline-block align-middle">
                                                <h5 class="mb-0"> <p class="text-dark d-inline-block align-middle">{producto.title}</p></h5><span class="text-muted font-weight-normal font-italic d-block">{producto.detail}</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="border-0 align-middle"><strong>{producto.price}</strong></td>
                                    <td class="border-0 align-middle"><strong>{producto.count}</strong></td>
                                    <td class="border-0 align-middle"><strong>{producto.price * producto.count}</strong></td>
                                    <td class="border-0 align-middle"><Button onClick={() => removeItem(producto.title)}>X</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ))}
    <div class="container">
        <div className='ml-3 d-inline-block align-middle'>
     <h4 className="card-title">Precio Total de la Compra: <strong>${getTotalPrice()}</strong></h4>
        <Button onClick={handleCheckout}>Finalizar Compra</Button>
        <hr></hr>
        <p>Vaciar Carrito</p>
        <Button><Link className="linkstyle" to="/">Seguir Comprando</Link></Button>
        <br></br>
        <br></br>
        </div>
        </div>
    </div>;
    }

export default CartView;

