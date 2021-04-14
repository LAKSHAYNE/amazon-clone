import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
    const [state,dispatch]=useStateValue();
    const addToBasket = ()=>{
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id:props.id,
          title:props.title,
          image:props.img,
          price:props.price,
          rating:props.rating,
        }
      })
    }

  return (
    <div className="product" id={props.id}>
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating).fill().map(()=><p>⭐</p>)}
        </div>
      </div>
      <img
        src={props.img}
        alt="the weeknd billboard"
      />
      <button onClick={addToBasket}>ADD TO CART</button>
    </div>
  );
}

export default Product;
