import {cloneDict} from "../Utils";

const INITIAL_STATE = {
    
}

export default function MessageReducer(state = INITIAL_STATE, action) {
    let s = cloneDict(state);
    switch (action.type) {
        case "NEW_MESSAGE":
            const { message } = action.payload;
            if (s.messages == null) {
                s.messages = [];
            }
            s.messages.push(message);
            break;
    }
    return s;
}