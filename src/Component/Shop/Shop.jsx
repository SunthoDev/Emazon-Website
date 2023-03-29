
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"



const Shop = () => {

    let [data,setData]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])

    return (

    <div className='Shop_Container'>

        <div className="Product_Container">
            {
                data.map(allData => <Product data={allData} id={allData.id}></Product>)
            }

        </div>

        <div className="Cart_Container">

            <h2>HEllow This  is Cart</h2>

        </div>
     
    </div>
    );
};












export default Shop;















