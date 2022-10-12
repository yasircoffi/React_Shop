import React from 'react'
import Card from "../Card/Card";
import FlexContainer from "../FlexContainer/FlexContainer";

export default function ItemList(props) {
    return (
        <>
            <FlexContainer>
                {props.productsList.map((product) => {
                    return <Card
                        key={product.id}
                        itemID={product.id}
                        title={product.title}
                        detail={product.detail}
                        img={product.img}
                        price={product.price}
                        categoryID={product.category}
                        available={product.available}
                    />
                })}


            </FlexContainer>
        </>
    )
}
