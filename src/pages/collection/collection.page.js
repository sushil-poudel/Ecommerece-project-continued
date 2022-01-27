import React from 'react';
import {connect} from 'react-redux';

import './collection.style.scss';

import CollectionItem from '../../components/collection_item/collection_item.component';
import { selectCollection } from '../../redux/shop/shop_selector';

const CollectionPage=({match})=>(
    <div className='collection-page'>
        <h2>Collection PAGE</h2> 
    </div>
)

const mapStateToProps=(state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
