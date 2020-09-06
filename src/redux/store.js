import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import gameReducer from './gameReducer';
import thunk from 'redux-thunk';


const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(gameReducer, applyMiddleware(...middlewares));
export default {store};