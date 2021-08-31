import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlerWares = [];
if (process.env.NODE_ENV === 'development') {
  middlerWares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlerWares));
const persistor = persistStore(store);

export { store, persistor };
