import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";

import CardCompanyCadetsContatcus from './CardCompanyCadetsContatcus'

import company from './img/company2.webp';

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${company})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: window.innerWidth > 450 ? '40vh' : '50vh',
    },
    });

export default function Layout() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.container} maxWidth="xl">
                <div style={{ height: '35%' }}/>
                <Typography component="div" variant="h2" color="textPrimary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        About Us
                    </Box>
                </Typography>
                <Typography component="div" variant="h5" color="textPrimary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        Meet the amazing team behind this project and find out more about how we work.
                    </Box>
                </Typography>
            </Container>
            <CardCompanyCadetsContatcus/>
            <Container>
                <Typography component="div" variant="caption" color="textSecondary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        www.bark.com.ua © 2021 , made by Creative Team for a better web.
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
