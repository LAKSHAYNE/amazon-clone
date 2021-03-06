import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';
function CheckoutProduct(props) {

    const [{basket},dispatch]=useStateValue();

    const removeFromBasket= ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
        })
    }

    return (
       
        <div className='checkoutProduct' id={props.id}>
            <img src={props.img} className='checkoutProduct__image' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{props.title}</p>
                <p className='checkoutProduct__price'>
                    <small>Rs.</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(props.rating).fill().map((x)=><p>⭐</p>)}
                </div>
                {!props.hideButton && (<button onClick={removeFromBasket}>Remove from basket</button>)}
            </div>
        </div>
       
    )
}

export default CheckoutProduct
