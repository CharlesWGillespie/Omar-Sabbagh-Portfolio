import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

export default function NavBar() {
    return (
        <AppBar>
            <Toolbar sx={{
                backgroundColor: '#1E3259',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
            }}>
                <Typography variant='h2' component='div' style={{ textStroke: '1px black', padding: '10px' }}>
                    Omar Sabbagh
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '20px' }}>Home</Link>
                    <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '25px', marginRight: '20px' }}>About</Link>
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Contact</Link>
                    <Link to="/resume" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Resume</Link>
                    <Link to="/projects" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Projects</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}