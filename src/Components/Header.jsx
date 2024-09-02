import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { FaAddressBook, FaBars, FaMailBulk, FaPhone } from 'react-icons/fa';
import { MdQrCodeScanner } from 'react-icons/md';
import { Link } from 'react-router-dom';

const pages = [
    {
        page: 'Home',
        link: '/'
    },
    {
        page: 'Products',
        link: '/Product'
    },
    {
        page: 'Portfolio',
        link: '/PortFolio'
    },
    {
        page: 'Contact Us',
        link: '/Contactus'
    },
    {
        page: 'Company Info',
        link: '/Company'
    }];

function Header() {
    const [show, setShow] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/* TOP-LINE Start */}
            <div className='text-light d-lg-block d-none pb-5 pt-3 headerNana'>
                <div className='d-lg-flex align-items-center justify-content-evenly'>
                    <div className='mx-5'>
                        <FaMailBulk className='mx-2' />
                        abc@gmail.com
                    </div>
                    <div className='mx-5'>
                        <FaAddressBook className='mx-2' />
                        123,sdfd,fsdf..
                    </div>
                    <div className='mx-5'>
                        <FaPhone className='mx-2' />
                        +91 9887795578
                    </div>
                </div>
            </div>
            {/* TOP-LINE End */}

            {/* Header Start */}
            <div className="container-lg position-sticky top-0 justify-content-center HeaderAppbar" style={{ transition: "all 0.3s ease-in-out", zIndex: 3, }}>
                <AppBar position="static" className="rounded-lg-pill appbarh">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <img src={require('../Assets/Images/nanak_LOGO-removebg.png')} alt="" className='ms-3 m-2' style={{ width: '150px' }} />
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="menu"
                                    aria-controls="offcanvasNavbar"
                                    aria-haspopup="true"
                                    onClick={handleShow}
                                    color="inherit"
                                >
                                    <aside className="container">
                                        <input type="checkbox" id="menu__trigger" />
                                        <section className="menu" style={{ height: "100px" }}>
                                            <nav>
                                                {pages.map((page, i) => (
                                                    <Link to={page.link} className='linkA ' key={i}>{page.page}</Link>
                                                ))}
                                            </nav>
                                        </section>
                                        <section className="content">
                                            <label htmlFor="menu__trigger" className="entypo-menu">
                                                <FaBars className='text-black' />
                                            </label>
                                        </section>
                                    </aside>
                                </IconButton>
                            </Box>

                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <img src={require('../Assets/Images/nanak_LOGO-removebg.png')} alt="" className='ms-3 m-1' style={{ width: '150px' }} />
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleClose}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                        className='px-3 mx-2 text-nowrap fw-semibold text-center button'
                                    >
                                        <Link to={page.link} className='text-decoration-none text-dark'>
                                            {page.page}
                                        </Link>
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <MdQrCodeScanner className='fs-3 text-dark' />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
            {/* Header End */}

        </>
    );
}

export default Header;
