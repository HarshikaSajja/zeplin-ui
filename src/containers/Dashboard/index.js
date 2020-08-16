import React from 'react';
import { makeStyles } from '@material-ui/core';
import RecentDesigns from '../../components/RecentDesigns';
import SalesAndRevenue from '../../components/SalesAndRevenue';
import dashboard from '../../assets/icons/ic-dashboard.png'
import activeDashboard from '../../assets/icons/ic-dashboard-active.png'

const useStyles = makeStyles((theme) => ({
    container: {
        ...theme.rectangle,
        height: '292px',
        width: '1064px',
        margin: '0 68px 24px 48px',
        padding: '24px 40px 0px 40px',
        boxSizing: "border-box"

    },
    componentHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: '16px',
    },
    menuTitle: {
        fontSize: '28px',
        fontWeight: '500',
        color: theme.colors.menutitle,
        display: 'inline',
        margin: '0'
    },
    menuHeader: {
        width: '1064px',
        marginTop: '40px',
        marginLeft: '48px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '16px',
        boxSizing: "border-box"
    },
    country: {
        fontSize: '12px'
    },
    subHeaderContainer: {
        width: '1064px',
        margin: '0 0 32px 48px',
        padding: '21px 0 0 16px',
        boxSizing: "border-box"
    },
    subHeader: {
        fontSize: '18px',
        display: 'inline',
        position: 'absolute',
        top: '0',
        margin: '0',
        paddingLeft: '5px'
    },
    section: {
        height: '46px',
        width: '204px',
        position: 'relative',
        display: 'inline-block',
        marginRight: '16px',
        "&:last-child": {
            color: theme.colors.primary,
            borderBottom: `2px solid ${theme.colors.primary}`
        }
    },
    sectionIcon: {
        marginLeft: '16px'
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    const RecentDesignsData = [
        {
            heading: 'Chicago Sports Club',
            subHeading: 'Jube Bowman • Chicag',
            tag: 'Education',
            price: 'USD 120,000',
            textColor: '#ff7043',
            bgColor: '#fff3e0'
        },
        {
            heading: 'Michigan State University',
            subHeading: 'Stephen Knight • Newyork',
            tag: 'Commercial',
            price: 'USD 132,000',
            textColor: '#ec407a',
            bgColor: '#fbe9e7'
        },
        {
            heading: 'Chui Residence',
            subHeading: 'Lina Jordan • Indiana',
            tag: 'Residential',
            price: 'USD 120,000',
            textColor: '#5c6bc0',
            bgColor: '#e8eaf6'
        },
    ];

    const SalesAndRevenueData = [
        {
            title: '25',
            subTitle: 'Deals closed'
        },
        {
            title: 'USD 256,000',
            subTitle: 'Revenue made'
        },
        {
            title: 'USD 80,100',
            subTitle: 'Average deal size'
        },
        {
            title: 'USD 8,500',
            subTitle: 'Revenue Potential',
            display: true
        },
    ]

    return (
        <div>
            {/* Menu heading */}
            <div className={classes.menuHeader}>
                <h2 className={classes.menuTitle}>Dashboard</h2>
                <p className={classes.country}>Country</p>
            </div>

            {/* Subheadings */}
            <div className={classes.subHeaderContainer}>
                <div className={classes.section}>
                    <img className={classes.sectionIcon} src={dashboard} height="28px" width="28px"/>
                    <p className={classes.subHeader}>Team Dashboard</p>
                </div>
                <div className={classes.section}>
                    <img className={classes.sectionIcon} src={activeDashboard} height="24px" width="24px"/>
                    <p className={classes.subHeader}>My Dashboard</p>
                </div>
            </div>

            {/* Recent Designs Section */}
            <div className={classes.container}>
                <div className={classes.componentHeader}>
                    <span className={classes.title}>Recent Designs</span>
                    <span className={classes.title} style={{color: '#ff7346'}}>VIEW ALL</span>
                </div>
                <RecentDesigns data = {RecentDesignsData}/>
            </div>

            {/* Sales and revenue section */}
            <div className={classes.container}>
            <div className={classes.componentHeader}>
                <span className={classes.title}>Sales and revenue</span>
            </div>
            <SalesAndRevenue data={SalesAndRevenueData}/>
            </div>
        </div>
    )
}

export default Dashboard;