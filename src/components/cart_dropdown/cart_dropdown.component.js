import React from 'react';
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart_dropdown.style.scss';

import CustomButton from '../custom_button/custom_button.component';
import CartItem from '../cart_item/cart_item.component';
import {selectCartItems} from '../../redux/cart/cart_selector';
import {toggleCartHidden} from '../../redux/cart/cart_actions';


const CartDropdown =({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length?(
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            ):<span className='empty-message'>Your cart is empty.</span>
            } 
        </div>
        <CustomButton className='button' 
            onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));