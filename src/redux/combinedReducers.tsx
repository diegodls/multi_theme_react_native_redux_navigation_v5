import { combineReducers } from 'redux';

import themeReducer from '../redux/themeReducer/themeReducer';
import testReducer from './textReducer/textReducer';

export const combinedReducers = combineReducers(
    {
        testReducer: testReducer,
        themeReducer: themeReducer
    }
);

export type RootState = ReturnType<typeof combinedReducers>