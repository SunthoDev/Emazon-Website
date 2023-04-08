import React, { useState } from 'react';
import "./Order.css"
import Cart from '../Shop/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../ReviewItem/Review';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {

    let cartDb =useLoaderData() 
    // delete btn cartDb modefei
    let [cart,setCar] = useState(cartDb) 

    // console.log(cart)
    // remove item function by id
    const handleRemoveFromCart = (id)=> {

      let remaining = cart.filter((product)=> product.id !== id)
      setCar(remaining)

      removeFromDb(id)


    }




    return (
        <div className="Shop_Container">

        {/* // product container  */}

            <div className="orderReview">

                {
                    cart.map( items =>  <Review item={items} key={items.id} handleRemoveFromCart={handleRemoveFromCart}></Review>   ) 
                }

            </div>

        {/* // cart container */}

            <div className="Cart_Container Cart_Container_over">

                <Cart carts={cart}> </Cart>

            </div>



        </div>
    );
};

export default Order;