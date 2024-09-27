import { TextField } from '@mui/material'
import React from 'react'

function HomeContact() {
    return (
        <div className="homeform pt-4 pb-5">
            <div className="container mb-4">
                <div className='col-lg-8 col-md-9 col-sm-10 col-11 mx-auto' data-aos='zoom-in-up' data-aos-duration='1500'>
                    <div>
                        <div className='text-center my-5'>
                            <div style={{ fontSize: '4rem', fontFamily: "EB Garamond, serif" }} className='fw-normal my-3'>Join the Conversations</div>
                            <h4 style={{ fontSize: '20px', fontFamily: "sans-serif" }} className='fw-normal'>Get the content you need, just when you need it </h4>
                        </div>
                        <div>
                            <form className=''>
                                <div className="row justify-content-center">
                                    <div className="col-sm-6 col-11 mb-3">
                                        <TextField id="standard-basic" label="First Name*" variant="standard" type='text' className='col-12' />
                                    </div>
                                    <div className="col-sm-6 col-11 mb-3">
                                        <TextField id="standard-basic" label="Last Name*" variant="standard" type='text' className='col-12' />
                                    </div>
                                    <div className="col-sm-12 col-11 my-3">
                                        <TextField id="standard-basic" label="Email" variant="standard" type='email' className='col-12' />
                                    </div>
                                    <button className='btn border border-2 border-dark rounded-0 mt-4 col-5 mx-auto fw-normal'>
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContact