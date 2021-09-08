import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppBar from './components/AppBar';
import Layout from './components/Layout';

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
            secondary: "#000000"
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
    return (
        <ThemeProvider theme={theme}>
            <AppBar />
            <Layout />
        </ThemeProvider>
    );
}

export default App;
