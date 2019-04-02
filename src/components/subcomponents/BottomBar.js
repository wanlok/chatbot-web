import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const styles = function(theme) {
    var s = {}
    s.root = {
        backgroundColor: "green",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 64
    }
    s.text = {
        width: "80%"
    }
    return s;
}

class BottomBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            <input type="text" className={classes.text} />
            <button>Submit</button>
        </div>
    }
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BottomBar);