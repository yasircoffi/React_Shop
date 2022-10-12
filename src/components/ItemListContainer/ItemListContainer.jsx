import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductByCategory } from "../../mockAPI/mockAPI";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
    const [productsList, setproductsList] = useState([]);
    const { categoryID } = useParams();

    useEffect(() => {
        if (categoryID === undefined) {
            getProducts().then((data) => {
                console.log("getProducts");
                setproductsList(data);
            });
        }
        else {
            getProductByCategory(categoryID).then((data) => {
                setproductsList(data);
            })
        }
    }, [categoryID]);

    return (
        <div className="container">
            <ItemList productsList={productsList} />
        </div>
    );
}

export default ItemListContainer;
