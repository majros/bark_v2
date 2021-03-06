import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {rows} from './_listVacancy';

const useStyles = makeStyles({
    root: {
        margin: "auto",
        marginTop: '-50px',
        width: '95%',
        position: "relative",
    },
    table: {
        minWidth: 340,
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
        color: theme.palette.common.black,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function BasicTable() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3} >
                <TableContainer>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>POSITION</StyledTableCell>
                                <StyledTableCell>SHIP TYPE</StyledTableCell>
                                <StyledTableCell>DWT</StyledTableCell>
                                <StyledTableCell>SALARY (USD)</StyledTableCell>
                                <StyledTableCell>DURATION (MONTHS)</StyledTableCell>
                                <StyledTableCell>JOIN DATE</StyledTableCell>
                                <StyledTableCell align='center' className={classes.table}>ADDITIONAL INFO</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.key}>
                                    <StyledTableCell  component="th" scope="row">{row.position}</StyledTableCell >
                                    <StyledTableCell  align="center">{row.shipType}</StyledTableCell>
                                    <StyledTableCell  align="center">{row.dwt}</StyledTableCell>
                                    <StyledTableCell  align="center">{row.salary}</StyledTableCell>
                                    <StyledTableCell  align="center">{row.duration}</StyledTableCell>
                                    <StyledTableCell  align="center">{row.joinDate}</StyledTableCell>
                                    <StyledTableCell  align="left">{row.additionalInfo}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}