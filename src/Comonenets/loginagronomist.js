import React from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';

// LoginAgronomist component
const LoginAgronomist = () => {
    // Custom styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: green[50],
        },
        formBox: {
            width: '100%',
            maxWidth: 400,
            padding: '2rem',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
        iconStyle: {
            color: green[600],
        },
        buttonStyle: {
            backgroundColor: green[700],
            color: '#fff',
            marginTop: '1rem',
            '&:hover': {
                backgroundColor: green[800],
            },
        },
        header: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: green[800],
            marginBottom: '1.5rem',
        },
    };

    return (
        <Container style={styles.container}>
            <Box style={styles.formBox}>
                <Typography style={styles.header}>Agronomist Login</Typography>

                {/* Agronomist Email Input */}
                <TextField
                    label="Agronomist Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: <AccountCircle style={styles.iconStyle} />,
                    }}
                    margin="normal"
                />

                {/* Password Input */}
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                        startAdornment: <Lock style={styles.iconStyle} />,
                    }}
                    margin="normal"
                />

                {/* Login Button */}
                <Button
                    variant="contained"
                    fullWidth
                    style={styles.buttonStyle}
                    size="large"
                

                >
                    <Link to='/dashboard'>
                    Login
                    </Link>
                </Button>
            </Box>
        </Container>
    );
};

export default LoginAgronomist;
