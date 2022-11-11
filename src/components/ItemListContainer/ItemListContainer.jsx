import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts, getProductByCategory } from "../../services/firebase";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
    const [productsList, setproductsList] = useState([]);
    const { categoryID } = useParams();

    useEffect(() => {
        setproductsList([])
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
        <>
        <div className="container">
            {productsList.length ? <ItemList productsList={productsList} />
              :<Loader/>
              }
             
        </div>
        </>
    );
}

export default ItemListContainer;
