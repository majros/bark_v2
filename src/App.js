import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppBar from './components/AppBar';
import Vacancies from './components/Vacancies';
import AboutUs from './components/AboutUs';

const theme = createTheme({
    palette: {
        primary: {
            main: '#093170',
        },
        secondary: {
            main: '#880e4f',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        text: {
            primary: "#fafafa",
            secondary: "#545454",
            header: "#000000",
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    const [onVacancies, setOnVacancies] = useState(false);

    if (onVacancies) {
        return (
            <ThemeProvider theme={theme} >
                <AppBar onVacancies changeOnVacancies={() => setOnVacancies(!onVacancies)}/>
                <Vacancies/>
            </ThemeProvider>
        );
    }
    return (
        <ThemeProvider theme={theme} >
            <AppBar changeOnVacancies={() => setOnVacancies(!onVacancies)}/>
            <AboutUs/>
        </ThemeProvider>
    );
}

export default App;
