import React from 'react';
import { StatusBar } from 'react-native';
import { RootState } from 'src/redux/combinedReducers';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { DARK } from '../redux/themeReducer/themeTypes';

const MyStatusBar = () => {
    const { colors } = useTheme();
    const { currentThemeName } = useSelector((state: RootState) => { return state.themeReducer });
    return (
        <StatusBar 
        barStyle={currentThemeName !== DARK ? 'dark-content' : 'light-content'} 
        backgroundColor={colors.background_primary} />
    )
}

export default MyStatusBar;