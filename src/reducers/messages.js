import {GET_MESSAGES, CREATE_MESSAGE, CLEAR_MESSAGES} from "../actions/types";


const initialState = {
    message: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                message: ''
            }
        default:
            return state;
    }
}