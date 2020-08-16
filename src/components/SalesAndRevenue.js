import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import openInNew from '../assets/icons/ic-open-in-new.png';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '16px',
        display: 'flex',
        flexDirection:'row'
    },
    card: {
        height: '115px',
        width: '220px',
        marginRight: '24px',
        paddingLeft: '15px',
        "&:last-child": {
            borderColor: theme.colors.primary,
            color: theme.colors.primary
        }
    },
    title: {
        fontSize: '28px'
    },
    subTitle: {
        fontSize: '16px',
        color: '#000 !important' 
    }
}));

const SalesAndRevenue = ({ data }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {data.map(card => (
                <Card key={card.title} variant="outlined" className={classes.card}>
                    <CardContent>
                        {card.display ? <img src={openInNew} style={{float: 'right'}}/> : null}
                        <Typography className={classes.title}>
                            {card.title}
                        </Typography>
                        <Typography className={classes.subTitle}>
                            {card.subTitle}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

SalesAndRevenue.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ])))
}

export default SalesAndRevenue;