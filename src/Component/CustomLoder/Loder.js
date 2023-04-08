import { getShoppingCart } from "../../utilities/fakedb";
import "./Loder.css"



 const cartProductLoaders = async()=>{


    const loadedProducts = await fetch("products.json");
    let product = await loadedProducts.json();

    // if cart data is an database found
    let storageDataCart = getShoppingCart()
    // save cart
    let saveCart = []
    //object thaka tar key gula ka bar kore
    for(let id in storageDataCart){

       let addProduct = product.find( pd => pd.id === id );
       if (addProduct) {

            let quantity =storageDataCart[id]

            addProduct.quantity = quantity
            saveCart.push(addProduct)
       }

    }

    return ( saveCart )
 }

export default cartProductLoaders;