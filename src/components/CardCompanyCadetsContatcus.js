import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import CardCadetProgram from './CardCadetProgram';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "auto",
        marginTop: '-50px',
        width: '95%',
        position: "relative",
    },
    paper: {
        padding: theme.spacing(window.innerWidth > 450 ? 3 : 1),
    },
    textHeaderCompany: {
        color: theme.palette.text.header,
        paddingTop: theme.spacing(window.innerWidth > 450 ? 10 : 2),
        marginLeft: theme.spacing(window.innerWidth > 450 ? 10 : 2),
        marginRight: theme.spacing(window.innerWidth > 450 ? 10 : 2),
    },
    textHeader: {
        color: theme.palette.text.header,
        paddingTop: theme.spacing(10),
    },
    textBody: {
        marginLeft: theme.spacing(window.innerWidth > 450 ? 15 : 1),
        marginRight: theme.spacing(window.innerWidth > 450 ? 15 : 1),
    },
    textContactus: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(window.innerWidth > 450 ? 15 : 1),
        marginRight: theme.spacing(window.innerWidth > 450 ? 15 : 1),
    },
    button: {
        marginRight: theme.spacing(window.innerWidth > 450 ? 2 : 1),
        paddingLeft: theme.spacing(window.innerWidth > 450 ? 3 : 1),
        paddingRight: theme.spacing(window.innerWidth > 450 ? 3 : 1),
        borderRadius: "20px",
    },
    textContainer: {
        flexDirection: 'row',
    },
    img: {
        width: '30%',
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function CardCompanyCadetsContatcus() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={3} >
                    <Typography className={classes.textHeaderCompany} component="div" variant="h4" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" m={1}>
                            <b>Bark Manning Agency</b> is a recruiting agent of Ukrainian seafarers for employment
                            aboard vessels of foreign Shipowners.
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="justify" m={1}>
                            Since created in 1992 we have gained a proper experience, good reputation and formed
                            a professional staff team capable to select qualified crew to meet the expectations and
                            specific requirements of our Principals for our mutual benefit.<br/>
                            Our quality system fully complies with the requirements of International Standard -
                            ISO 9001:2015 and Maritime Labour Convention (MLC 2006). Bark is a licensed private
                            company certified according to International Standard ISO 9001: 2015 and as per requirements
                            of Maritime Labour Convention (MLC 2006) by Russian Maritime Register of Shipping.
                        </Box>
                    </Typography>
                    <CardCadetProgram/>
                    <Typography className={classes.textHeader} component="div" variant="h2" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" fontWeight="fontWeightBold" m={1}>
                            Want to work with us?
                        </Box>
                    </Typography>
                    <Typography className={classes.textContactus} component="div" variant="h5" color="secondary">
                        <PinDropIcon fontSize="large"/>
                        <Box fontFamily="Roboto" fontWeight="fontWeightBold" m={1}>
                            Find us at the office
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" m={1}>
                            11, Chernomorskaya str., 27 apt.,
                            <br/>
                            87517 Mariupol,<br/>
                            Ukraine
                        </Box>
                    </Typography>
                    <Typography className={classes.textContactus} component="div" variant="h5" color="secondary">
                        <PhoneIcon fontSize="large"/>
                        <Box fontFamily="Roboto" fontWeight="fontWeightBold" m={1}>
                            Give us a call
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" m={1}>
                            +38 0629 41-36-<b>(25) (38)</b>
                            <br/>
                            +38 0629 41-71-<b>(48) (49) (50)</b>
                        </Box>
                    </Typography>
                    <Typography className={classes.textContactus} component="div" variant="h5" color="secondary">
                        <MessageIcon fontSize="large"/>
                        <Box fontFamily="Roboto" fontWeight="fontWeightBold" m={1}>
                            Send us a message
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" m={1}>
                            info@bark.com.ua
                        </Box>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.button}
                            style={{backgroundColor: "#3b5998", color: "#FFF"}}
                            startIcon={<FacebookIcon />}
                        >
                            Facebook
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.button}
                            style={{backgroundColor: "#ea4c89", color: "#FFF"}}
                            startIcon={<InstagramIcon />}
                            target='_blank'
                            href={'https://www.instagram.com/bark_agency/?hl=ru'}
                        >
                            instagram
                        </Button>
                    </Typography>
                </Paper>
            </div>

        </React.Fragment>
    );
}
