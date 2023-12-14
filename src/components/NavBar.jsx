import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    return (
        <AppBar sx={{backgroundColor: '#eeeeee', position: 'sticky'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h4"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: 'black',
                        textDecoration: 'none',
                        }}
                    >
                        <Link to='/' className='title' style={{ textDecoration: 'none', color: 'black'}}>
                        STYLESHOES
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="black"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                            <Link to='/category/moda' style={{ textDecoration: 'none', color: 'black'}}>
                                <MenuItem  onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Featured</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/category/retro' style={{ textDecoration: 'none', color: 'black'}}>
                                <MenuItem  onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Retro</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h4"
                        sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontWeight: 700,
                        textDecoration: 'none',
                        }}
                    >
                        <Link to='/' className='title' style={{ textDecoration: 'none', color: 'black'}}>
                        STYLESHOES
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'black', marginLeft: 100}}>
                            <Typography variant='h6' textAlign="center">Home</Typography>
                        </Link>
                        <Link to='/category/moda' style={{ textDecoration: 'none', color: 'black', marginLeft: 100}}>
                            <Typography variant='h6' textAlign="center">Featured</Typography>
                        </Link>
                        <Link to='/category/retro' style={{ textDecoration: 'none', color: 'black', marginLeft: 100}}>
                            <Typography variant='h6' textAlign="center">Retro</Typography>
                        </Link>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display:{ xs: 'block', md: 'none' } }}
                        >
                        </Button>
                    </Box>

                    <CartWidget />
                </Toolbar>
            </Container>
        </AppBar>
    );
}