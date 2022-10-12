import React, { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { getSingleProduct } from "../../mockAPI/mockAPI";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
    const [product, setproduct] = useState([]);
    const { itemID } = useParams();

    useEffect(
        () => {
            getSingleProduct(itemID).then((data) => {
                setproduct(data);
            });
        }, [itemID])
        
    return (
        <CardDetail
        key={product.id}
        title={product.title}
        detail={product.detail}
        img={product.img}
        content={product.content}
        price={product.price}
        categoryID={product.category}
        available={product.available}
        stock={product.stock}
        />
    );
}

export default ItemDetailContainer