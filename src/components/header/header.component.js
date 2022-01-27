import React from 'react';
import {Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.style.scss';

import {ReactComponent as Logo} from '../../Assets/images/logo.svg';
import CartIcon from '../cart_icon/cart_Icon.component';
import CartDropdown from '../cart_dropdown/cart_dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart_selector';
import { selectCurrentUser } from '../../redux/user/user_selector';


const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shoppage'>
            Shop
            </Link>
                <Link className='option' to='/contact'>
            Contact
            </Link>
            {
                currentUser?(<div className='option' onClick={()=>auth.signOut()}>Sign Out</div>):
                (<Link className='option' to='/signin'>Sign In</Link>)
            }
            <CartIcon/>
        </div>
        {
            hidden?null:
            <CartDropdown/>
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);