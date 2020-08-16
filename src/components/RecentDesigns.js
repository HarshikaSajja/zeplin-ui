import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '16px',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    card: {
        height: '200px',
        width: '312px',
        padding: '10px 32px 16px 10px',
        boxSizing: "border-box"
    },
    title: {
        fontSize: '18px'
    },
    nameAddress: {
        fontSize: '14px',
        color: theme.colors.grey
    },
    editedYesterday: {
        fontSize: '12px',
        color:theme.colors.grey,
        float:'right',
        paddingBottom: '16px'
    },
    tag: {
        height: '18px',
        width: '65px',
        fontSize: '10px',
        boxSizing: "border-box",
        textAlign: 'center',
        marginLeft: '17px'
    }
}));

const RecentDesigns = ({ data }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        {data.map(card => (
            <Card key={card.heading} variant="outlined" className={classes.card}>
                <CardContent>
                    <Typography className={classes.title}>
                        {card.heading}
                    </Typography>
                    <Typography className={classes.nameAddress}>
                        {card.subHeading}
                    </Typography>
                </CardContent>
                <div className={classes.tag} style={{color: `${card.textColor}`,backgroundColor:`${card.bgColor}`}}>{card.tag}</div>
                <CardHeader title={card.price}/>
                    <Typography className={classes.editedYesterday}>
                        Edited Yesterday
                    </Typography>
            </Card>
        ))}
        </div>
    )
}

RecentDesigns.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default RecentDesigns;