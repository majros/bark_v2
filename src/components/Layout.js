import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import company from './img/company2.webp';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${company})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: window.innerWidth > 450 ? '40vh' : '50vh',
    },
    root: {
        margin: "auto",
        padding: theme.spacing(2),
        width: '95%',
        position: "relative",
        top: '-50px',
    },
    paper: {
        padding: theme.spacing(window.innerWidth > 450 ? 10 : 1),
    },
    }));

export default function SimpleContainer() {
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
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3} >
                    <Typography component="div" variant="h4" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" m={1}>
                            <b>Bark Manning Agency</b> is a recruiting agent of Ukrainian seafarers for employment
                            aboard vessels of foreign Shipowners.
                        </Box>
                    </Typography>
                    <Typography component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" m={1}>
                            Since created in 1992 we have gained a proper experience, good reputation and formed
                            a professional staff team capable to select qualified crew to meet the expectations and
                            specific requirements of our Principals for our mutual benefit.<br/>
                            Our quality system fully complies with the requirements of International Standard -
                            ISO 9001:2015 and Maritime Labour Convention (MLC 2006). Bark is a licensed private
                            company certified according to International Standard ISO 9001: 2015 and as per requirements
                            of Maritime Labour Convention (MLC 2006) by Russian Maritime Register of Shipping.
                        </Box>
                    </Typography>
                    <Typography component="div" variant="h2" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" m={1}>
                            Our partners
                        </Box>
                    </Typography>
                </Paper>
            </div>

        </React.Fragment>
    );
}
