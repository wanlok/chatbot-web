import React from 'react';
import { connect } from "react-redux";
import messageReducer from "../reducers/MessageReducer";
import { withStyles } from "@material-ui/core/styles";
import TopBar from "./subcomponents/TopBar"
import BottomBar from "./subcomponents/BottomBar"

const mapStateToProps = function(state) {
    return state.message;
}

const mapDispatchToProps = function(dispatch) {
    return ({
        sendMessage: function(content) {

        }        
    });
}

const styles = function(theme) {
    var s = {};

    return s;
}

class Landing extends React.Component {
    render() {
        return (
            <div className="App">
                <TopBar />
                <BottomBar />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Landing));