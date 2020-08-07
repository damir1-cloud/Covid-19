import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./card.module.css";
import CountUp from 'react-countup';

 const Cards = ({data : {confirmed, recovered, deaths, }})=> {
     //console.log();
        if(!confirmed){
            return (<div>Data is loading......</div>);
        }
    return (
        <div className = {styles.container}>
           <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                    <Typography variant="h5"><CountUp start = {0} end = {confirmed.value} duration = {2} separator = ","/></Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">active cases of covid</Typography>
                </Grid>
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"><CountUp start = {0} end = {recovered.value} duration = {2} separator = ","/></Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">recovered cases of covid</Typography>
                </Grid>
                <Grid item component={Card}>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5"><CountUp start = {0} end = {deaths.value} duration = {2} separator = ","/></Typography>
                    <Typography color="textSecondary">date</Typography>
                    <Typography variant="body2">deaths cases of covid</Typography>
                </Grid>
           </Grid>
        </div>
    );
}

export default Cards;
