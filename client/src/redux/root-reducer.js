import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersReducer from './filters/filter-reducer';

import cartReducer from './cart/cart-reducer';
import authReducer from './auth/auth-reducer';
import errorReducer from './errors/error-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}; 
 
const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filtersReducer,
  auth: authReducer,
  error: errorReducer
});

export default persistReducer(persistConfig, rootReducer);