import {CLEAR_MESSAGES, CREATE_MESSAGE} from "./types";

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}
export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES
    }
}