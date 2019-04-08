import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = function(theme) {
    let inputContainerPaddingLeft = 8;
    let width = 74;
    var s = {}
    s.root = {
        backgroundColor: "#DDDDDD",
        position: "absolute",
        bottom: 0,
        display: "table",
        width: "100%"
    }
    s.inputContainer = {
        display: "table-cell",
        width: "calc(80% - " + width + "px)",
        verticalAlign: "middle",
        paddingLeft: inputContainerPaddingLeft
    }
    s.buttonContainer = {
        display: "table-cell",
        width: width,
        textAlign: "center",
        verticalAlign: "middle"
    }
    s.input = {
        width: "calc(100% - " + inputContainerPaddingLeft + "px)",
        marginTop: 8,
        marginBottom: 8,
        height: 24,
        paddingLeft: 8,
        border: "none"
    }
    return s;
}

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    onClick() {
        const { reducer, actions } = this.props;
        reducer.message = this.input.current.value;
        actions.sendMessage(reducer);
        this.input.current.value = "";
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.inputContainer}>
                    <input ref={this.input} type="text" className={classes.input} />
                </div>
                <div className={classes.buttonContainer}>
                    <button onClick={()=>{this.onClick();}}>Submit</button>
                </div>
            </div>
        );
    }
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BottomBar);