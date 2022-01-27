import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import CartReducer from './cart/cart_reducer';
import UserReducer from './user/user_Reducer';
import directoryReducer from './directory/directory_reducer';
import shopReducer from './shop/shop_reducer';

const persistConfig= {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer= combineReducers({
    user:UserReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);

 