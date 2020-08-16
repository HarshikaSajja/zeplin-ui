import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.png'
import dashboard from '../assets/icons/ic-dashboard-active.png'
import collections from '../assets/icons/ic-collections.png'
import customer from '../assets/icons/ic-customer.png'
import account from '../assets/icons/ic-account.png'
import projects from '../assets/icons/ic-projects.png'
import add from '../assets/icons/ic-add.png'
import admin from '../assets/icons/admin.png'
import up from '../assets/icons/ic-chev-up.png'

const useStyles = makeStyles((theme) => ({
    layout: {
      ...theme.rectangle,
      height: '800px',
      width: '260px',
      position:'relative'
    },
    logoContainer: {
        ...theme.rectangle,
        height: '83px',
        width: '261px',
        boxSizing: "border-box"
    },
    logo: {
        boxSizing: "border-box",
        margin: '32px 85px 27px 82px'
    },
    menuItemContainer: {
        height: '48px',
        width: '260px',
        marginBottom: '8px',
        padding: '12px 87px 15px 40px',
        boxSizing: "border-box",
        verticalAlign: 'middle'
    },
    menuIcons: {
        display: 'inline',
        marginRight: '20px'
    },
    title: {
        fontSize: '18px'
    },
    newDesign: {
        height: '40px',
        width: '150px',
        backgroundColor: theme.colors.primary,
        borderRadius: '4px',
        border: 'none',
        color: theme.colors.white,
        display: 'block',
        margin: '39px auto 0'
    },
    btnContainer: {
        display:'flex',
        justifyContent:'space-evenly',
        alignContent:'center'
    },
    btnTitle: {
        fontSize: '14px'
    },
    adminContainer: {
        position:'absolute',
        bottom:'0',
        padding:'20px',
        display: 'flex'
    },
    titleActive: {
        fontSize: '18px',
        color: theme.colors.primary,
        fontWeight: '500'
    },
    activeIndicator: {
        backgroundColor:  theme.colors.primary,
        float: 'left',
        width: '6px',
        height: '48px',
        marginTop: '24px'
    }
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <div className={classes.layout}>
            <div className={classes.logoContainer}>
                {/* logo */}
                <img src={logo} height="24px" width="93px" className={classes.logo}/>

                {/* Menu Items */}
                <div className={classes.activeIndicator}></div>
                <div className={classes.menuItemContainer}  style={{marginTop: '24px'}}>
                    <img src={dashboard} height="16px" width="16px" className={classes.menuIcons}/>
                    <label className={classes.titleActive}>Dashboard</label>
                </div>

                <div className={classes.menuItemContainer}>
                    <img src={customer} height="16px" width="16px" className={classes.menuIcons}/>
                    <label className={classes.title}>Customers</label>
                </div>

                <div className={classes.menuItemContainer}>
                    <img src={projects} height="16px" width="16px" className={classes.menuIcons}/>
                    <label className={classes.title}>Projects</label>
                </div>

                <div className={classes.menuItemContainer}>
                    <img src={account} height="16px" width="16px" className={classes.menuIcons}/>
                    <label className={classes.title}>Team</label>
                </div>

                <div className={classes.menuItemContainer}>
                    <img src={collections} height="16px" width="16px" className={classes.menuIcons}/>
                    <label className={classes.title}>Catalog</label>
                </div>

                {/* Add new Design button */}
                <Button className={classes.newDesign}>
                    <div className={classes.btnContainer}>
                        <img src={add}/>
                        <label className={classes.btnTitle}>NEW DESIGN</label>
                    </div>
                </Button>
            </div>

            {/* Admin avatar and name*/}
            <div className={`${classes.logoContainer} ${classes.adminContainer}`}>
                <img src={admin} height="35px" width="35px"/>
                <div style={{display:'flex',flexDirection:'column',marginLeft:'8px'}}>
                    <label style={{fontSize:'10px',color:'#888'}}>Welcome</label>
                    <label style={{fontSize:'14px'}}>Tom Hanks</label>
                <img src={up} height="24px" width="24px" style={{position:'absolute',right:'0',marginRight:'16px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Layout;