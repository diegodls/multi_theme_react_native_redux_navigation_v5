import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/combinedReducers';

import MainScreen from '../screens/MainScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

const Routes = () => {

    const { currentTheme } = useSelector((state : RootState) => { return state.themeReducer });

    return (
        <NavigationContainer theme={currentTheme}>
            <Stack.Navigator
                headerMode={'none'}>
                <Stack.Screen name={'MainScreen'} component={MainScreen} />
                <Stack.Screen name={'SecondScreen'} component={SecondScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default Routes;