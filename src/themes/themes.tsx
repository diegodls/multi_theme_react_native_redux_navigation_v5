import {DefaultTheme, DarkTheme } from '@react-navigation/native';

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#F5F5F5',
        secondary: '#0f0f12',
        background_primary: '#F5F5F5',
        background_secondary: '#EEEEEE',
        button_primary: '#DF0011',
        font_primary: '#0f0f12',
        font_secondary: '#F5F5F5',
        shadowColor_primary : '#0f0f12',
    }
}

export const darkTheme = {
    ...DarkTheme, 
    colors: {
        ...DarkTheme.colors,  
        primary: '#0f0f12',
        secondary: '#F5F5F5',
        background_primary: '#0f0f12',
        background_secondary: '#222831',
        button_primary: '#8022d9',
        font_primary: '#F5F5F5',
        font_secondary: '#0f0f12',
        shadowColor_primary : '#222831',
    }
}


export const pinkTheme = {
    colors: {
        primary: '#f8e1f4',
        secondary: '#af8baf',
        background_primary: '#f8e1f4',
        background_secondary: '#f6bed6',
        button_primary: '#efa8e4',
        font_primary: '#af8baf',
        font_secondary: '#f1c5c5',
        shadowColor_primary : '#af8baf',
    }
}

export const blueTheme = {
    colors: {
        primary: '#0047f5',
        secondary: '#F5F5F5',
        background_primary: '#e0e8f0',
        background_secondary: '#a0c6dc',
        button_primary: '#0047f5',
        font_primary: '#4a6897',
        font_secondary: '#a0c6dc',
        shadowColor_primary : '#4a6897',        
    }
}