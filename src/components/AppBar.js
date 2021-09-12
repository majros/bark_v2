import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import GetAppIcon from '@material-ui/icons/GetApp';

import imgLogo from './img/logo.gif';
import appForm from './appForm.doc';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        height: window.innerWidth > 450 ? 55 : 30,
        margin: theme.spacing(2),
    },
    toolbar: {
        justifyContent: 'space-between',
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        color: trigger ? 'primary' : 'transparent',
        elevation: 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const btnShow = props.onVacancies;
    console.log(btnShow)

    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar position="fixed">
                    <Toolbar className={classes.toolbar}>
                        <img className={classes.logo}
                             alt='icon' src={imgLogo}
                        />
                        <div>
                            <Button
                                style={{marginRight: '10px'}}
                                size={window.innerWidth > 450 ? "large" : "small"}
                                variant="contained"
                                color="secondary"
                                onClick={() => props.changeOnVacancies()}
                            >
                                {btnShow ? 'About Us' : 'Open Vacancies'}
                            </Button><Button size={window.innerWidth > 450 ? "large" : "small"}
                                             variant="contained"
                                             color="default"
                                             href={appForm}
                                             download="appForm"
                                             startIcon={<GetAppIcon/>}
                        >
                            Application
                        </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}