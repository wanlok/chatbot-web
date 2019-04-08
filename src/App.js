import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import messageReducer from "./reducers/MessageReducer";
import Landing from "./components/Landing"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combineReducers({
    messageReducer: messageReducer
}), composeWithDevTools(applyMiddleware(thunk)));

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