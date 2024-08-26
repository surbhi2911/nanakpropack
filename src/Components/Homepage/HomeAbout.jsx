import React from 'react'
import '../../Assets/Css/Homepage.css'
import AllBtn from '../AllBtn'

function HomeAbout() {
    return (
        <div className='py-5 homeAbout'>
            <div className='container-md'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6 col-10 mt-sm-0 mt-5 px-md-0 px-4 text-end me-md-0 me-sm-5 me-0 order-md-1 order-2' data-aos="fade-left" data-aos-duration='2000'>
                        <h4 className='display-3 fw-bold'>About <span className='orangecolor'>Us</span> </h4>
                        <h1 className='display-6 text-spacing-p' style={{ fontFamily: '"Oswald", sans-serif' }}>Packaging Design</h1>
                        <p className='text-spacing lh-lg' style={{ fontFamily: "Open Sans, sans-serif", textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum rerum consequuntur
                            cupiditate cumque eos, animi impedit esse! Debitis, aspernatur?</p>
                        <AllBtn text="Learn More" />
                    </div>
                    <div className='col-md-6 col-10  order-md-2 order-1'>
                        <div className="col-10 mx-auto mb-md-0 mb-sm-5 mb-0 h-100">
                            <img src={require('../../Assets/Images/HomeAbout.jpg')} alt=""
                                className='img-fluid imageback' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeAbout