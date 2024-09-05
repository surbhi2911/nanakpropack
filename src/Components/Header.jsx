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
import { Modal } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import { TitleHeadLight } from './TitleHead';
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
    const qrData = `
    Owner:Nupur Sharma

    Company-Name:NanakProPack
    
    Tel No:+98 7048313227

    EMAIL:contact@examplecompany.com
    
    Address

    Visit Our Website :https://www.examplecompany.com

    LinkedIn:https://www.linkedin.com/in/johndoe

    Visit us for innovative packeging solutions!
    
    `;

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
                                <div onClick={handleShow}>
                                    <MdQrCodeScanner className='fs-3 text-dark' />
                                </div>

                                <Modal
                                    open={show}
                                    onClose={handleClose}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            maxWidth: 400,
                                            bgcolor: '#fff',
                                            borderRadius: '0px',
                                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                                            p: 4,
                                            mx: 'auto',
                                            my: '5vh',
                                            // textAlign: 'center',
                                            position: 'relative',
                                        }}
                                    >
                                        <div className="text-center">
                                            <QRCodeCanvas
                                                value={qrData}
                                                level={"H"}
                                                style={{
                                                    height: '60%',
                                                    width: '60%',
                                                    padding: '5px',
                                                    border: '5px solid var(--orange--)',
                                                    // borderRadius: '12px',
                                                    backgroundColor: '#f8f9fa',
                                                }}
                                            />
                                        </div>
                                        <div className="my-5 overflow-x-hidden">
                                            <TitleHeadLight
                                                textb1="scan here to"
                                                textb2="contact us"
                                                lineb1="Scan Here to Show our Contact Details"
                                                style={{ fontSize: '1.5rem', color: '#333', marginBottom: '16px' }}
                                            />
                                        </div>
                                    </Box>
                                </Modal>
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
