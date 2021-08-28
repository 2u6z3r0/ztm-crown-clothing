import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlerWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlerWares));

export default store;
