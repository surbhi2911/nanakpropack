import { TextField } from '@mui/material'
import React from 'react'
import AllBtn from '../AllBtn'
import img from '../../Assets/Images/HomeAbout.jpg'
function HomeContact() {
    return (
        <>
            <div class="marquee">
                <div class="marquee-content">
                    <div className='font_stroke me-1'>
                        Nanak propack
                    </div>
                </div>
                <div class="marquee-content">
                    <div className='font_stroke ms-4'>
                        Nanak-propack
                    </div>
                </div>
                <div class="marquee-content">
                    <div className='font_stroke ms-4'>
                        Nanak-propack
                    </div>
                </div>
                <div class="marquee-content">
                    <div className='font_stroke ms-4'>
                        Nanak-propack
                    </div>
                </div>
                <div class="marquee-content">
                    <div className='font_stroke ms-4'>
                        Nanak-propack
                    </div>
                </div>
                <div class="marquee-content">
                    <div className='font_stroke ms-4'>
                        Nanak-propack
                    </div>
                </div>
            </div>
            <div className="homeform pt-4 pb-5 bg-opacity-100" style={{ background: `url(${img})`, backdropFilter: 'blur(10px)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: '50% 100%', boxShadow: 'inset 0px 0px 1500px 100px rgba(0,0,0, 5)' }}>
                <div className="container mb-4">
                    <div className='col-lg-8 col-md-9 col-sm-10 col-11 mx-auto ' data-aos='zoom-in-up' data-aos-duration='1500'>
                        <div>
                            <div className='text-center my-5'>
                                <div style={{ fontSize: '4rem', fontFamily: "EB Garamond, serif" }} className='fw-normal my-3 text-light'>Join the Conversations</div>
                                <h4 style={{ fontSize: '20px', fontFamily: "sans-serif" }} className='fw-normal text-light'>Get the content you need, just when you need it </h4>
                            </div>
                            <div>
                                <form className=''>
                                    <div className="row justify-content-center">
                                        <div className="col-sm-6 col-11 mb-3">
                                            <TextField id="standard-basic" label="First Name*" variant="filled" type='text' className='col-12' />
                                        </div>
                                        <div className="col-sm-6 col-11 mb-3">
                                            <TextField id="standard-basic" label="Last Name*" variant="filled" type='text' className='col-12' />
                                        </div>
                                        <div className="col-sm-12 col-11 my-3 mb-5">
                                            <TextField id="standard-basic" label="Email" variant="filled" type='email' className='col-12' />
                                        </div>
                                        <div className="text-center">
                                            <AllBtn text='Subscribe' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContact