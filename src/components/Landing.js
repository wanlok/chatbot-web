import React from 'react';
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import TopBar from "./subcomponents/TopBar"
import MessageArea from "./subcomponents/MessageArea"
import BottomBar from "./subcomponents/BottomBar"
import { sendMessage } from "../reducers/MessageAction"

const mapStateToProps = function(state) {
    return {
        reducer: state.messageReducer
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        actions: {
            sendMessage: function(content) {
                dispatch(sendMessage(content));
            }
        }     
    };
}

const styles = function(theme) {
    var s = {};
    s.root = {
        height: "100%"
    }
    return s;
}

class Landing extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={`App ${classes.root}`}>
                <TopBar />
                <MessageArea reducer={this.props.reducer} actions={this.props.actions} />
                <BottomBar reducer={this.props.reducer} actions={this.props.actions} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Landing));