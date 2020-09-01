import React from 'react'
import { Paper, Typography, Grid, makeStyles } from '@material-ui/core';
import ChildCard from '../childCard/ChildCard';
import CustomBarChart from '../chart/BarChart';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function ParentCard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Grid container item xs={12} spacing={2}>
                        <Typography variant="h4" gutterBottom>Bundle Size</Typography>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item sm={6} lg={6}>
                            <ChildCard className={classes.paper} title="Minified" value="282.5 kb"></ChildCard>
                        </Grid>
                        <Grid item sm={6} lg={6}>
                            <ChildCard className={classes.paper} title="Minified + Gzipped" value="282.5 kb"></ChildCard>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Typography variant="h4" gutterBottom>Download Time</Typography>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <ChildCard className={classes.paper} title="2G Edge" value="282.5 kb"></ChildCard>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ChildCard className={classes.paper} title="Emerging 3g" value="282.5 kb"></ChildCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <CustomBarChart ></CustomBarChart>
                </Grid>

            </Grid>
        </div>
    )
}

export default ParentCard;