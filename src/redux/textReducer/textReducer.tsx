import { CHANGE_TEXT } from './textTypes'

const initialState = {
    text: 'Digite o nome...'
}

const testReducer = (state = initialState, action: { type: any, payload: string }) => {
    switch (action.type) {

        case CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            }

        default:
            return state
    }
}

export default testReducer;