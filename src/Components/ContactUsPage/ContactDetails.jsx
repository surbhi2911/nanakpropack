import React from 'react'
import { FaLeftLong } from 'react-icons/fa6'
import AllBtn from '../AllBtn'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'

function ContactDetails() {
    return (
        <div className='py-5 black overflow-x-hidden'>
            <div className='container'>
                <div className='row align-items-center justify-content-evenly text-center'>
                    <div className='col-lg-3 col-md-4 col-sm-9 col-10 mt-md-0 mt-5 py-5 bg-light rounded-0 packaging-border packaging-border-1' data-aos="fade-left" data-aos-duration="2000">
                        <div className="py-2">
                            <FaLeftLong className='fs-2' />
                            <h1>Email</h1>
                            <p>You can email us anytime for assistance or inquiries.</p>
                            <a href="mailto:surbhipansuriya772@gmail.com">
                                <div className='py-2 blackborder px-3 bg-light mx-3'>
                                    <button className='border-0 bg-light fw-bold contactd'>Mail Us</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-9 col-10 mt-md-0 mt-5 py-5 bg-light rounded-0 packaging-border packaging-border-2' data-aos="fade-up" data-aos-duration="2000">
                        <div className="mt-4 mb-5">
                            <HiOutlineBuildingOffice className='fs-2' />
                            <h1>Address</h1>
                            <p>Feel free to drop by our office, where we’re always ready to assist you.</p>
                            <a href=""></a>
                            <div className='py-2 blackborder px-3 bg-light mx-3'>
                                <button className='border-0 bg-light fw-bold contactd'>Locate Us</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-9 col-10 mt-md-0 mt-5 mt-1 mb-1 py-5 bg-light rounded-0 packaging-border packaging-border-3' data-aos="fade-right" data-aos-duration="2000">
                        <FaLeftLong className='fs-2' />
                        <h1>Call Us</h1>
                        <p>Call us whenever you need immediate support or have any questions.</p>
                        <a href="tel:7048313227">
                            <div className='py-2 blackborder px-3 bg-light mx-3'>
                                <button className='border-0 bg-light fw-bold contactd'>Contact Us</button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactDetails