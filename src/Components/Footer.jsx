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
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 col-sm-6 mt-3 col-10' data-aos="fade" data-aos-duration="2000">
                            <img src={require('../Assets/Images/nanak_LOGO-removebg.png')} alt="" className='img-fluid border-end border-4' />

                        </div>
                        <div className='col-lg-3 col-sm-6 mt-lg-0 mt-3 col-10' data-aos="fade" data-aos-duration="2000">
                            <h2>
                                <FaHandshake className='display-3 rounded-circle p-2 footerHandshake' />
                            </h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat molestiae minus nisi quae sit pariatur neque atque natus dolore.</p>
                        </div>
                        <div className='col-lg-3 col-sm-6 mt-lg-0 mt-3 col-10 ps-md-5' data-aos="fade" data-aos-duration="2000">
                            <h3 className='orangecolor'>
                                Quick Links
                            </h3>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/'}><FaHome className='fs-4 me-2' /> Home</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/Contactus'}><PiPhoneCallFill className='fs-4 me-2' /> Contact us</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/PortFolio'}><AiFillProfile className='fs-4 me-2' /> PortFolio</Link></div>
                            <div className="my-3 "><Link className='footerlinks text-decoration-none fs-6' style={{ verticalAlign: 'center' }} to={'/Product'}><AiFillProduct className='fs-4 me-2' /> Product</Link></div>
                        </div>
                        <div className='col-lg-3 col-sm-6 mt-lg-0 mt-3 col-10' data-aos="fade" data-aos-duration="2000">
                            <h3 className='orangecolor'>Social Connections</h3>
                            <div className='my-4'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, consequuntur?
                            </div>
                            <div className='d-flex'>
                                <div className='me-3 Footericons'><FaFacebook className='m-2 fs-5' /></div>
                                <div className='me-3 Footericons'><FaInstagram className='m-2 fs-5' /></div>
                                <div className='me-3 Footericons'><FaTwitter className='m-2 fs-5' /></div>
                                <div className='me-3 Footericons'><FaLinkedin className='m-2 fs-5' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer