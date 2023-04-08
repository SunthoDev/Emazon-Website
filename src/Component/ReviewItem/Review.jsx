
import React from 'react';
import "./Review.css" 
import { TrashIcon} from '@heroicons/react/24/solid'

const Review = ({item , handleRemoveFromCart}) => {

    let {name,id,price,img} = item

    return (
        <div className="reviewProduct flex items-center justify-between">

            <div className='flex items-center'>
                <img className='w-24 h-24 rounded-lg' src={img} alt="" />

                <div className="information ml-4">
                    <h3>{name}</h3>
                    <h3>Price : <span className='text-orange-500'>${price}</span></h3>
                    <h3>Shipping Charge : <span className='text-orange-500'>${7}</span></h3>
                </div>
            </div>

            <div className="delete_Btn" onClick={()=> handleRemoveFromCart(id)}>
                  <TrashIcon className='w-10 h-10 text-red-500 '/>
            </div>

        </div>
    );
};

export default Review;