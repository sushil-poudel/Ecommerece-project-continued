import React from 'react';
import './custom_button.style.scss';

const CustomButton=({children,className,inverted,...otherProps})=>(
    <button className={`${className?'register':''} 
    ${inverted?'inverted':''}
    custom-button`} 
    {...otherProps} >
     {children}
    </button>
)

export default CustomButton;