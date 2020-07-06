import { BLUE, DARK, LIGHT, PINK } from './themeTypes';
import { blueTheme, darkTheme, lightTheme, pinkTheme } from '../../themes/themes';
const initialState = {
    currentThemeName: 'LIGHT',
    currentTheme: lightTheme
}

const themeReducer = (state = initialState, action: { type: any, payload: string }) => {
    switch (action.type) {
        case BLUE:
            return {
                ...state,
                currentThemeName: BLUE,
                currentTheme: blueTheme
            }
        case DARK:
            return {
                ...state,
                currentThemeName: DARK,
                currentTheme: darkTheme
            }
        case LIGHT:
            return {
                ...state,
                currentThemeName: LIGHT,
                currentTheme: lightTheme
            }

        case PINK:
            return {
                ...state,
                currentThemeName: PINK,
                currentTheme: pinkTheme
            }


        default:
            return state
    }
}

export default themeReducer;