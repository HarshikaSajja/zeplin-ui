import React from 'react';
import { makeStyles } from '@material-ui/core';
import Sidenav from '../Sidenav'
import Dashboard from '../../containers/Dashboard';

const useStyles = makeStyles((theme) => ({
    layout: {
      backgroundColor: theme.colors.bgColor,
      height: '1818px',
      width: '1440px',
      display:'flex',
      flexDirection : 'row',
      boxSizing: "border-box"
    }
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <Sidenav/>
            <Dashboard/>
        </div>
    )
}

export default Layout;