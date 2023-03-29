
import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import "./Shop.css"



const Shop = () => {

    let [data,setData]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])

    //total item add useState
    let [cart,setCart]=useState([])
    // button add to cart are work akana ja ay button fn ke korva
    const buttonAddToCart=(Product)=>{
        let newCart=[...cart,Product]
        setCart(newCart)
        addToDb(Product.id)
    }

    return (

    <div className='Shop_Container'>

        <div className="Product_Container">
            {
                data.map(allData => <Product 

                    data={allData} 
                    id={allData.id} 
                    btnHandle={buttonAddToCart}>

                </Product>)
            }

        </div>

        <div className="Cart_Container">

            <Cart carts={cart}> </Cart>

        </div>
     
    </div>
    );
};












export default Shop;















