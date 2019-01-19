import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles, AppBar, Typography, Toolbar, IconButton, Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const App = ({ classes }) => (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
                Plot my Train
            </Typography>
            <Button color="secondary" variant="contained">Login</Button>
        </Toolbar>
    </AppBar>
);

App.propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const styles = {
    appBar: {
        flexGrow: 1,
        textAlign: 'center',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export default withStyles(styles)(App);
