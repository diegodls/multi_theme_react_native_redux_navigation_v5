import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {combinedReducers} from './combinedReducers';


export const store = createStore(combinedReducers, applyMiddleware(thunk));