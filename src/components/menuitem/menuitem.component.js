import React from 'react';
import './menuitem.style.scss';
import {withRouter} from 'react-router-dom'; 

const MenuItem=({title,imageUrl,size,history,match,linkUrl})=>(
    

    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}  />
                <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <p className='subtitle'>shop now </p>
                </div>
            </div>
)

export default withRouter(MenuItem);
