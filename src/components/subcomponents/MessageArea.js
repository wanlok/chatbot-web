import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = function(theme) {
    var s = {}
    s.root = {
        height: "calc(100% - 64px - 40px)", // TopBar and BottomBar height
        overflowY: "scroll"
    }
    return s;
}

class MessageArea extends React.Component {
    render() {
        const { classes, reducer } = this.props;
        return (
            <div className={classes.root}>
                {
                    reducer.messages != null && reducer.messages.map(function (message, i) {
                        return <div key={i}>{message}</div>
                    }, this)
                }
            </div>
        );
    }
}

MessageArea.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MessageArea);