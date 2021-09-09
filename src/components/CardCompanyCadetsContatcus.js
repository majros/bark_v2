import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';

import CardPartners from './CardPartners';
// import BtnCompanyPartners from './btnCompanyPartners';

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
        marginLeft: theme.spacing(window.innerWidth > 450 ? 15 : 0),
        marginRight: theme.spacing(window.innerWidth > 450 ? 15 : 0),
    },
    textContactus: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(window.innerWidth > 450 ? 15 : 0),
        marginRight: theme.spacing(window.innerWidth > 450 ? 15 : 0),
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
                    <Typography className={classes.textHeader} component="div" variant="h2" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" fontWeight="fontWeightBold" m={1}>
                            Our partners
                        </Box>
                    </Typography>
                    <CardPartners/>
                    {/*<BtnCompanyPartners/>*/}
                    <Typography className={classes.textHeader} component="div" variant="h2" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="center" fontWeight="fontWeightBold" m={1}>
                            Cadets program
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" textAlign="justify" m={1}>
                            SAMOS Cadets program of Ukrainian Nationality to become eligible for first employment,
                            candidates must provide verification that they are studying for Bachelor Degree and they are
                            on fourth year course (third year course completed) Prior second employment following
                            requirements should be met:<br/>
                            <li>Excellent evaluations from superintendents, Captains or Chief Engineers during first employment</li>
                            <li>Evidence of Graduation (submission of Bachelor Diploma / Degree)</li>
                            <li>Verification that they enrolled to Higher (Master) Degree course</li>
                            Upon completion of second employment as well as achievement of performance criteria, Cadets
                            will be promoted to Junior Cadets (a bit older in age) that have been already employed within
                            Samos Steamship Cadets’ ranks and have been obtained Bachelor degree (+COC) but have not
                            commenced their higher education will be eligible for promotion to Juniors, upon excellent
                            performances and verification that they enrolled to Higher (Master) degreeWe are always
                            available to provide clarifications and/or assistance on implementation of am policy scheme
                        </Box>
                    </Typography>
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
                            Give us a ring
                        </Box>
                    </Typography>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto" m={1}>
                            <b>Samos/Alberta/Offen</b> +38 0629 41-36-(25) (38)
                            <br/>
                            <b>Nomikos</b> +38 0629 41-71-(48) (49) (50)
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
                    </Typography>
                </Paper>
            </div>

        </React.Fragment>
    );
}
