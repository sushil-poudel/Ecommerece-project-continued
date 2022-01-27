import React from 'react';
import './collection_preview.style.scss';
import '../collection_item/collection_item.component.js';
import CollectionItem from '../collection_item/collection_item.component.js';


const CollectionPreview =({title,items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            { items.filter((item,idx)=>idx<4).map((item)=>(
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;