import { CHANGE_TEXT } from './textTypes';

export const changeText = (text: string) => (
    {
        type: CHANGE_TEXT,
        payload: text
    }
)
