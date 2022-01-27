import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection_preview/collection_preview.component';
import shopReducer from '../../redux/shop/shop_reducer.js';
import { selectCollections } from '../../redux/shop/shop_selector.js';

import './collection_overview.style.scss';

const CollectionOverview=({collections})=>(
    <div className='collection-overview'>
         {
            collections.map(({id,...otherState})=>(
                <CollectionPreview key={id}  {...otherState}/>
            ))
        }
    </div>
)

const mapStateToProps=createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);