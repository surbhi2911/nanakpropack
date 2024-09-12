import React from 'react'
import AllBtn from '../AllBtn'
import { TitleHeadLight } from '../TitleHead'

function HomeAbout() {
    return (
        <div className='py-5 my-3 homeAbout overflow-x-hidden' data-aos='fade' data-aos-duration='2000'>
            <div className='container-lg my-5 pb-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6 col-11 px-0 down-arrow2' data-aos='fade' data-aos-duration='1000' >
                        <div className="mx-auto mb-md-0 mb-sm-5 mb-0 h-100">
                            <div class="gallery imageback">
                                <img src={require('../../Assets/Images/box images/attachment_100298252 (1).jpg')} alt="a house on a mountain" />
                                <img src={require('../../Assets/Images/box images/attachment_50162265.jpg')} alt="sime pink flowers" />
                                <img src={require('../../Assets/Images/box images/cable-wire-packaging.jpg')} alt="big rocks with some trees" />
                                <img src={require('../../Assets/Images/mainImage/Boxes-and-Paper-Bags-600x600-px-Top-and-Bottom-Box.jpg')} alt="a waterfall, a lot of tree andgreat view from the sky" />
                                <img src={require('../../Assets/Images/mainImage/Free-Craft-Packaging-Shoe-Box-Mockup-Design.jpg')} alt="a cool landscape" />
                                <img src={require('../../Assets/Images/mainImage/top-bottom-packaging-box.jpg')} alt="inside a town between twobuildings" />
                                <img src={require('../../Assets/Images/mainImage/b5c3d093c5ee9620c55d2a7c8ebbfa69.jpg')} alt="a great view of the sea abovemountain" />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-11 mt-sm-0 mt-5 px-md-0 px-3 me-md-0 me-0 abouttwo' data-aos='fade-left' data-aos-duration='2000' >
                        <div className="col-lg-11 col-md-12 col-11">
                            <TitleHeadLight textb1='About' textb2='Us' lineb1='Superior Quality, Pioneering ' lineb2='Packaging Innovations' />
                        </div>
                        <p className='text-spacing lh-lg my-3 ' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500' style={{ fontFamily: "Open Sans, sans-serif", textAlign: 'justify' }}>
                            <span className='fs-5 fw-bold'>Welcome to NANAKPROPACK, </span> a leader in innovative packaging solutions dedicated to quality, sustainability, and customer satisfaction.With extensive experience, we specialize in creating a wide range of packaging products—from corrugated boxes to custom-designed cartons—that protect and enhance your products. Our mission is to provide top-tier, eco-friendly packaging that meets your unique needs while promoting your brand's image.  Trust NANAKPROPACK for reliable, customized packaging that makes a difference.
                        </p>
                        <a href="/CompanyInfo">
                            <AllBtn text="More About Us" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout