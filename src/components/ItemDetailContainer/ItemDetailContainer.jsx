import React, { useState, useEffect } from "react";
import CardDetail from "./CardDetail";
import { getSingleProduct } from "../../services/firebase";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
    const [product, setproduct] = useState({});
    const [feedbackMsg, setFeedbackMsg] = useState (null);
    const { itemID } = useParams();

    useEffect(
        () => {
            getSingleProduct(itemID).then((data) => {
                setproduct(data);
            }).catch((error)=>{
                setFeedbackMsg(error.message);
            });
        }, [itemID]);   
        
    return (
        <>
        { feedbackMsg !== null ? <h4>Error: {feedbackMsg}</h4> :
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
        />}
     </>
    );
}

export default ItemDetailContainer