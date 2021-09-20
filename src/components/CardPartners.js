import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";

import imgNomikos from './img/nomikos.webp';
import imgSamos from './img/samos.webp';
import imgAlberta from './img/albertaAmbelos.webp';
import imgOffen from './img/offen.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    avatar: {
        width: "auto",
        height: "auto",
        marginBottom: theme.spacing(1),
    },
    textGrid: {
        textAlign: 'center',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justifyContent="space-around" alignItems="stretch">
                <Grid container direction="column" justifyContent="center" alignItems="center" item xs={6} sm={3}>
                    <Avatar className={classes.avatar} alt="NOMIKOS" src={imgNomikos}/>
                    <Button className={classes.textGrid} color="primary" size="large" variant="outlined" target='_blank' href='https://www.amnomikos.com/'>
                        A.M. NOMIKOS
                    </Button>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center" item xs={6} sm={3}>
                    <Avatar className={classes.avatar} alt="SAMOS" src={imgSamos}/>
                    <Button className={classes.textGrid} color="primary" size="large" variant="outlined" target='_blank' href='https://samossteamship.gr/#home'>
                        SAMOS STEAMSHIP
                    </Button>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center" item xs={6} sm={3}>
                    <Avatar className={classes.avatar} alt="ALBERTA" src={imgAlberta}/>
                    <Button className={classes.textGrid} color="primary" size="large" variant="outlined" target='_blank' href='https://albertashipmanagement.com/'>
                        ALBERTA Shipmanagement
                    </Button>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center" item xs={6} sm={3}>
                    <Avatar className={classes.avatar} alt="Remy Sharp" src={imgOffen}/>
                    <Button className={classes.textGrid} color="primary" size="large" variant="outlined" target='_blank' href='https://offengroup.de/'>
                        OFFEN Group
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
