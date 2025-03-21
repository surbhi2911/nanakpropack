import React from 'react'
import { AiFillProduct, AiFillProfile } from 'react-icons/ai'
import { FaFacebook, FaHandshake, FaHome, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { PiPhoneCallFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='Footerbackground'>
                <div className='container'>
                    <div className='row justify-content-center '>
                        <div className='col-lg-3 col-sm-6 mt-3 col-10' data-aos="fade" data-aos-duration="2000">
                            <img src={require('../Assets/Images/Nanak _Main Logo.jpg')} alt="" className='img-fluid  ' />

                        </div>
                        <div className='col-lg-4 col-sm-6 mt-lg-0 mt-3 col-10  ps-5' data-aos="fade" data-aos-duration="2000">
                            <div className='border-start border-4 py-3 '>
                                <div className="ps-4">
                                    <h2>
                                        <FaHandshake className='display-3 rounded-circle p-2 footerHandshake' />
                                    </h2>
                                    <p>Providing innovative and sustainable packaging solutions. Contact us today to elevate your brand with quality packaging.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-sm-6 mt-lg-0 mt-3 col-10 ps-md-3 ' data-aos="fade" data-aos-duration="2000">
                            <h3 className='lemon'>
                                Quick Links
                            </h3>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/'}><FaHome className='fs-4 me-2' /> Home</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/Contactus'}><PiPhoneCallFill className='fs-4 me-2' /> Contact us</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/PortFolio'}><AiFillProfile className='fs-4 me-2' /> PortFolio</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/Product'}><AiFillProduct className='fs-4 me-2' /> Product</Link></div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mt-lg-0 mt-3 col-10' data-aos="fade" data-aos-duration="2000">
                            <h3 className='lemon'>Social Connections</h3>
                            <div className='d-flex mt-3 flex-wrap'>
                                <div className='w-25 m-3 Footericons'><FaFacebook className='m-2 fs-4' /></div>
                                <div className='w-25 m-3 Footericons'><FaInstagram className='m-2 fs-4' /></div>
                                <div className='w-25 m-3 Footericons'><FaTwitter className='m-2 fs-4' /></div>
                                <div className='w-25 m-3 Footericons'><FaLinkedin className='m-2 fs-4' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer