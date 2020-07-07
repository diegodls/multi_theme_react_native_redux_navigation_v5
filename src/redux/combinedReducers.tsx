import { combineReducers } from 'redux';

import themeReducer from '../redux/themeReducer/themeReducer';
import textReducer from './textReducer/textReducer';

export const combinedReducers = combineReducers(
    {
        textReducer: textReducer,
        themeReducer: themeReducer
    }
);

export type RootState = ReturnType<typeof combinedReducers>