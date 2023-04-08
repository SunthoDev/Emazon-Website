
import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import "./Shop.css"
import { Outlet } from 'react-router-dom';



const Shop = () => {
    // api data store hoy ay useState a
    let [data,setData]=useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data=> setData(data))
    },[])


    // local storage add all product and andd quantity
    useEffect(()=>{
        // api data useState thaka call korer jano depandance array tha korta hova
        //are aybava sorasore call korla api data aser satha satha useEffect chalu hoya jay
        // console.log("This is my data",data)
        //find local Storage shoppingCart function import
        let StorageDataCart= getShoppingCart()
        //amera ja product piche sata ka akta array ta rakvo
        const saveProduct=[]
        //get id data
        for(let id in StorageDataCart){
        // get the product by using id ...id deya product info bar korse local storage thaka

            const findProduct = data.find (Products => Products.id === id)
            // first time product nah pala empty array day.thokon localStorage dukla error deva
            // sayjano jokon product pava thokon sudu localStorage quantity add hova.. nah pala hova nah..
            if (findProduct) {
                //get quantity of the product set local storage product
                let quantity=StorageDataCart[id]
                //set quantity localStorage
                findProduct.quantity=quantity
                //jhokon amder product pawa java sataka amader array modda push korvo
                saveProduct.push(findProduct)
            }
            // save product array set the cart button
            setCart(saveProduct)
        }
    },[data])




    //total item add useState button jano
    let [cart,setCart]=useState([])
    // button add to cart are work akana ja ay button fn ke korva
    const buttonAddToCart=(Product)=>{
        let newCart=[...cart,Product]
        setCart(newCart)
        addToDb(Product.id)
    }
    // console.log(cart)

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















