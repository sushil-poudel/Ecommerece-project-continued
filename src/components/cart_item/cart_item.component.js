import React from 'react';

import './cart_item.style.scss';

const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <div className='cart-item'>
        <img alt='' src={imageUrl} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x Rs.{price}</span>
        </div>
    </div>
);

export default CartItem;