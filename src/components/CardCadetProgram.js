import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import cadets from './img/cadets.webp'
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5),
        margin: 'auto',
    },
    textHeader: {
        color: theme.palette.text.header,
        paddingTop: theme.spacing(10),
    },
    textBody: {
        marginLeft: 1,
        marginRight: 1,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.textHeader} component="div" variant="h2" color="textSecondary">
                <Box fontFamily="Roboto" textAlign="center" fontWeight="fontWeightBold" m={1}>
                    Cadets program
                </Box>
            </Typography>
            <Grid container direction="row">
                <Grid item style={{margin: 'auto'}} md={4} xs={12}>
                    <img className={classes.img} alt="complex" src={cadets} />
                </Grid>
                <Grid item md={8}>
                    <Typography className={classes.textBody} component="div" variant="body1" color="textSecondary">
                        <Box fontFamily="Roboto"  m={1}>
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
                </Grid>
            </Grid>
        </div>
    );
}
// <Grid container spacing={2}>
//     <Grid item>
//         <ButtonBase className={classes.image}>
//             <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//         </ButtonBase>
//     </Grid>
//     <Grid item xs={12} sm container>
//         <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                     Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                     Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                     ID: 1030114
//                 </Typography>
//             </Grid>
//             <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                     Remove
//                 </Typography>
//             </Grid>
//         </Grid>
//         <Grid item>
//             <Typography variant="subtitle1">$19.00</Typography>
//         </Grid>
//     </Grid>
// </Grid>