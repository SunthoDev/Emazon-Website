import React, { useState } from 'react';
import "./Cart.css"


const Cart = ({carts}) => {
    // console.log(carts)
    
    
    let total = 0
    let totalShipping=0
    let quantity=0
    
    for(let product of carts){
        ///jode product quantity 0 hoy tahola price satha gun hova nah sayjano ay condition

        if (product.quantity === 0) {
            product.quantity=1
        }
        total = total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity

    }
    
    let tax = total*7/100;
    let grandTotal=total+totalShipping+tax
    
    return (

        <div className='Cart mt-6'>

            <div className="cart_Detelse">
                <h2 className='mb-2'>Order Summary</h2>
                <p>Selected Items:{quantity}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping Charge:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h5 className='mb-3'>Grand Total:${grandTotal.toFixed(2)}</h5>

            </div>

            <button className='clearCart'>Clear Cart <i class="fa fa-trash-o" aria-hidden="true"></i></button>
                <br />
            <button className='reviewCart'>Review Order <i class="fa fa-arrow-right" aria-hidden="true"></i></button>

        </div>





    );
};

export default Cart;


































