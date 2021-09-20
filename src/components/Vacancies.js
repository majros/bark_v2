import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";

import TableVacancies from './tableVacancies'

import vacancy from './img/manningPeople.webp';

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${vacancy})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
    },
    });

export default function Vacancies() {
    const classes = useStyles();
    const currDate = new Date().toLocaleDateString();

    return (
        <React.Fragment>
            <Container className={classes.container} maxWidth="xl">
                <div style={{ height: '35%' }}/>
                <Typography component="div" variant="h2" color="textPrimary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        Vacancies
                    </Box>
                </Typography>
                <Typography component="div" variant="h5" color="textPrimary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        Open positions on {currDate}
                    </Box>
                </Typography>
            </Container>
            <TableVacancies/>
            <Container>
                <Typography component="div" variant="caption" color="textSecondary">
                    <Box fontFamily="Roboto" textAlign="center" m={1}>
                        www.bark.com.ua © 2021 , made by Creative Team.
                    </Box>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
