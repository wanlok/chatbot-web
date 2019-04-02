import React from 'react';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import messageReducer from "./reducers/MessageReducer";
import Landing from "./components/Landing"

const store = createStore(combineReducers({
    messageReducer: messageReducer
}));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Landing />
            </Provider>
        );
    }
}

export default App;