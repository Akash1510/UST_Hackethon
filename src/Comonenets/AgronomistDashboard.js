import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Paper, Divider, FormControl, InputLabel, Select, MenuItem, Card, CardContent } from '@mui/material';
import { green, blue, red } from '@mui/material/colors';
import { LocationOn, EventAvailable, FilterList } from '@mui/icons-material';

// Mock Data for Farmers with Indian States & Districts
const farmerQueries = [
    { id: 1, name: 'John Doe', disease: 'Leaf Rust', queryTime: '2024-10-10 12:00', state: 'Punjab', district: 'Amritsar' },
    { id: 2, name: 'Mary Smith', disease: 'Blight', queryTime: '2024-10-11 10:30', state: 'Maharashtra', district: 'Pune' },
    { id: 3, name: 'David King', disease: 'Powdery Mildew', queryTime: '2024-10-12 15:45', state: 'West Bengal', district: 'Kolkata' },
    { id: 4, name: 'Lucy Hale', disease: 'Downy Mildew', queryTime: '2024-10-10 14:00', state: 'Uttar Pradesh', district: 'Lucknow' },
];

// Agronomist Info
const agronomistInfo = {
    name: 'Dr. Aakash Patel',
    specialization: 'Agronomist Specialist',
    profileImage: 'https://via.placeholder.com/100',
    email: 'aakash.agronomist@example.com',
    region: 'Uttar Pradesh',
};

// Indian States and Districts for Filtering
const indianStates = {
    'Punjab': ['Amritsar', 'Ludhiana', 'Jalandhar'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
    'West Bengal': ['Kolkata', 'Howrah', 'Darjeeling'],
    'Uttar Pradesh': ['Lucknow', 'Varanasi', 'Agra'],
};

// Dashboard Component
const AgronomistDashboard = () => {
    const [selectedState, setSelectedState] = useState('All States');
    const [selectedDistrict, setSelectedDistrict] = useState('All Districts');

    // Function to handle state selection
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedDistrict('All Districts'); // Reset district when state changes
    };

    // Function to handle district selection
    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    // Filter queries based on selected state and district
    const filteredQueries = farmerQueries.filter((query) => {
        if (selectedState === 'All States') return true;
        if (selectedDistrict === 'All Districts') return query.state === selectedState;
        return query.state === selectedState && query.district === selectedDistrict;
    });

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: green[50], paddingBottom: '2rem' }}>

            {/* Top Navigation */}
            <AppBar position="static" sx={{ backgroundColor: green[700] }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Agronomist Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ padding: '2rem' }}>

                {/* Profile Section */}
                <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <Avatar
                                alt={agronomistInfo.name}
                                src={agronomistInfo.profileImage}
                                sx={{ width: 100, height: 100 }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="h5" sx={{ color: green[800], marginBottom: '0.5rem' }}>
                                {agronomistInfo.name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: green[600], marginBottom: '0.5rem' }}>
                                {agronomistInfo.specialization}
                            </Typography>
                            <Typography variant="body1" sx={{ color: green[600] }}>
                                Email: {agronomistInfo.email}
                            </Typography>
                            <Typography variant="body1" sx={{ color: green[600] }}>
                                Region: {agronomistInfo.region}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Region Selection & Farmer Queries Section */}
                <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
                    <Grid container spacing={2} alignItems="center" sx={{ marginBottom: '1rem' }}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" sx={{ color: green[800] }}>
                                Farmer Queries
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff' }}>
                                <InputLabel>State</InputLabel>
                                <Select
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    label="State"
                                    startAdornment={<FilterList sx={{ color: green[600] }} />}
                                >
                                    <MenuItem value="All States">All States</MenuItem>
                                    {Object.keys(indianStates).map((state) => (
                                        <MenuItem key={state} value={state}>{state}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: '#fff' }}>
                                <InputLabel>District</InputLabel>
                                <Select
                                    value={selectedDistrict}
                                    onChange={handleDistrictChange}
                                    label="District"
                                    startAdornment={<FilterList sx={{ color: green[600] }} />}
                                    disabled={selectedState === 'All States'}
                                >
                                    <MenuItem value="All Districts">All Districts</MenuItem>
                                    {selectedState !== 'All States' &&
                                        indianStates[selectedState].map((district) => (
                                            <MenuItem key={district} value={district}>{district}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    {/* Queries Table */}
                    <TableContainer>
                        <Table>
                            <TableHead sx={{ backgroundColor: green[100] }}>
                                <TableRow>
                                    <TableCell>Farmer Name</TableCell>
                                    <TableCell>Disease Name</TableCell>
                                    <TableCell>Query Time</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>District</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredQueries.map((query) => (
                                    <TableRow key={query.id}>
                                        <TableCell>{query.name}</TableCell>
                                        <TableCell>{query.disease}</TableCell>
                                        <TableCell>{query.queryTime}</TableCell>
                                        <TableCell>{query.state}</TableCell>
                                        <TableCell>{query.district}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                startIcon={<EventAvailable />}
                                                sx={{
                                                    backgroundColor: green[600],
                                                    color: '#fff',
                                                    '&:hover': {
                                                        backgroundColor: green[800],
                                                    },
                                                }}
                                            >
                                                Confirm Schedule
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                {/* Region-Wise Farmer Data Section */}
                <Paper elevation={3} sx={{ padding: '2rem', borderRadius: '10px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '1rem', color: green[800] }}>
                        Region-Wise Farmer Data
                    </Typography>
                    <Divider sx={{ marginBottom: '1rem' }} />
                    <Grid container spacing={2}>
                        {/* Example data for region cards */}
                        {['Punjab', 'Maharashtra', 'West Bengal', 'Uttar Pradesh'].map((state) => (
                            <Grid item xs={12} sm={6} md={3} key={state}>
                                <Card sx={{ backgroundColor: green[100], borderRadius: '10px' }}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ color: green[800] }}>
                                            {state}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: green[700] }}>
                                            Active Queries: {farmerQueries.filter(query => query.state === state).length}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Box>
        </Box>
    );
};

export default AgronomistDashboard;
