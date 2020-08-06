import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./card.module.css";

 const Cards = ({data})=> {
     console.log(data);
    return (
        <div className = {styles.container}>
           <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">{data.confirmed}</Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">active cases of covid</Typography>
                </Grid>
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">{data.recovered}</Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">recovered cases of covid</Typography>
                </Grid>
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">{data.deaths}</Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">deaths cases of covid</Typography>
                </Grid>
           </Grid>
        </div>
    );
}

export default Cards;
