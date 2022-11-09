import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(item, count) {
        let newCart = [...cart];
        let newItem = { ...item, count }
        newCart.push(newItem)
        setCart(newCart)
        console.log(newCart)
    }

function getTotalPrice (){
    let total = 0;
    cart.forEach(itemInCart => {
        total = total + (itemInCart.price * itemInCart.count);
    });
    return total;
}

function removeItem(itemToRemove) {
    let newCart = cart.filter((itemInCart) => itemInCart.title !== itemToRemove);
    setCart(newCart);
}

function cleanCart() {
    let newCart = cart.delete(itemInCart => itemInCart.title);
    setCart(newCart);
    return (newCart);
}

    function getTotalItemCount() {
        let total = 0;
        cart.forEach(itemInCart => {
            total = total + itemInCart.count;
        });
        return total;
    }

    return (
        <>
            <cartContext.Provider value={{ cart, addToCart, getTotalItemCount, removeItem, getTotalPrice, cleanCart }}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export { cartContext, CartContextProvider };
