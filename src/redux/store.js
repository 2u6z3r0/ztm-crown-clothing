import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';

const middlerWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlerWares));
const persistor = persistStore(store);

export { store, persistor };
