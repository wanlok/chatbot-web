export const sendMessage = function(reducer) {
    return function(dispatch) {
        if (reducer.message.length > 0) {
            dispatch({
                type: "NEW_MESSAGE",
                payload: {message: reducer.message}
            });
        }
    }
}