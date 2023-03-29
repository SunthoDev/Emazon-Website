import React, { useState } from 'react';
import "./Cart.css"


const Cart = ({carts}) => {
    console.log(carts)
    
    
    let total = 0
    let totalShipping=0
    
    for(let product of carts){
        total = total + product.price
        totalShipping = totalShipping + product.shipping
    }
    
    let tax = total*7/100;
    let grandTotal=total+totalShipping+tax
    
    return (

        <div className='Cart'>

            <div className="cart_Detelse">
                <h2>Order Summary</h2>
                <p>Selected Items:{carts.length}</p>
                <p>Total Price:${total}</p>
                <p>Total Shipping Charge:${totalShipping}</p>
                <p>Tax:${tax.toFixed(2)}</p>
                <h5>Grand Total:${grandTotal.toFixed(2)}</h5>

            </div>

            <button className='clearCart'>Clear Cart <i class="fa fa-trash-o" aria-hidden="true"></i></button>

            <button className='reviewCart'>Review Order <i class="fa fa-arrow-right" aria-hidden="true"></i></button>

        </div>





    );
};

export default Cart;


































