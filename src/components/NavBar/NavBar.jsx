import React from "react";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { cartContext} from '../../context/cartContext';

function NavBar() {
    const { getTotalItemCount} =useContext(cartContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container px-4 px-lg-5">
                <img src="https://i.im.ge/2022/10/09/1GyrXJ.logo.webp" alt="Logo DRAFT Store" height={80}/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/envios">Envios</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="null">Categorias</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/">Todos los Productos</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/category/starter kit">Starter Kit</Link></li>
                                
                                <li><Link className="dropdown-item" to="/category/commander">Commander Decks</Link></li>
                           
                                <li><Link className="dropdown-item" to="/category/secret lair">Secret Lair</Link></li>
                             
                                <li><Link className="dropdown-item" to="/category/booster box">Booster Box</Link></li>
                            
                                <li><Link className="dropdown-item" to="/category/collector booster">Collector Booster</Link></li>
                                
                                <li><Link className="dropdown-item" to="/category/protectores">Protectores</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="c-flex">
                        <Link to="/cart"><button class="btn btn-outline-dark" type="submit">
                            <CartWidget />
                            <i className="bi-cart-fill me-1"></i>
                            Carrito
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{getTotalItemCount() > 0 && getTotalItemCount ()}</span>
                        </button></Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar