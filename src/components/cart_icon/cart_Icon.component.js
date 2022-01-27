import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart_icon.style.scss';

import { toggleCartHidden } from '../../redux/cart/cart_actions';
import {ReactComponent as ShoppingIcon} from '../../Assets/images/shopping-icon.svg';
import {  selectCartItemsCount } from '../../redux/cart/cart_selector';

 const CartIcon =({toggleCartHidden,itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>

)

const mapStateToProps=createStructuredSelector({
itemCount:selectCartItemsCount
}); 

const mapDispatchToProps=dispatch=>({
toggleCartHidden:()=>dispatch (toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);

