
import React from 'react';
import "./Product.css"



const Product = (props) => {
    // console.log(props)

    const{id,img,name,price,ratings,seller}=props.data
    const buttonAddToCart=props.btnHandle



    return (
        <div className='Product'>
            <img src={img} alt="img"/>

            <div className="product_info">
                <p className='Product_name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button onClick={()=>buttonAddToCart(props.data)} className='Btn_Cart'>Add to Cart<i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>

        </div>
    );
};

export default Product;