import React from 'react';

import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection_overview/collection_overview.component';
import CollectionPage from '../collection/collection.page';
const ShopPage=({match})=>{
    return(
        <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionOverview}/>
           <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )  
}
export default ShopPage;
